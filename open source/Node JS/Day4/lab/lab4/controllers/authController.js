const User = require('../models/User');
const AppError = require('../utils/AppError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Login = async (req, res, next) => {
    try{
        const { email, password } = req.body;

        if (!email || !password) {
            return next(new AppError('Please provide email and password', 400));
        }

        // Check if the user exists in DB
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            return next(new AppError('Invalid email or password', 401));
        }

        // Check if the password is correct
        // Use bcrypt to compare the password with the hashed password stored in DB
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return next(new AppError('Invalid email or password', 401));
        }

        // If everything is correct, generate a JWT token
        // Use jsonwebtoken to sign the token with user ID (or email) and secret key
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            status: 'success',
            token,
            data: {
                user
            }
        });

    }catch(err){
        next(err);
    }
}

const Register = async (req, res, next) => {
    try{
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return next(new AppError('Please provide username, email and password', 400));
        }

        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return next(new AppError('Username or email already exists', 400));
        }

        const hashedPassword = await bcrypt.hash(password, 10);


        const user = await User.create({ username, email, password: hashedPassword });


        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });


        res.status(201).json({
            status: 'success',
            data: {
                user
            },
            token
        });
    }catch(err){
        next(err);
    }
}

module.exports = {
    Login,
    Register
}