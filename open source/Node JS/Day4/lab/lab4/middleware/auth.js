const jwt = require('jsonwebtoken');
const User = require('../models/User');
const AppError = require('../utils/AppError');

const authenticate = async (req, res, next) => {
    try {
        // get the token from the authorization header
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            return next(new AppError('Authentication required (please provide token)', 403));
        }

        // verify the token using jsonwebtoken
        const payload = jwt.verify(token, process.env.JWT_SECRET);   // email: user.email
        if (!payload) {
            return next(new AppError('Invalid token', 403));
        }

        // find the user in the database using the payload (email or id)
        const user = await User.findOne({ email: payload.email });

        if (!user) {
            return next(new AppError('User not found', 404));
        }

        // attach the user to the request object
        req.user = user; // or req.user = payload if you want to use the payload directly
        req.token = token;
        next();
    } catch (err) {
        next(err);
    }
}


const authorize = (roles = []) => {
    // 1. Parameter handling
    if (typeof roles === 'string') {
        roles = [roles];
    }

    // 2. Returns the actual middleware function
    return (req, res, next) => {
        // 3. Authorization check
        if (roles.length && !roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Access denied' });
        }
        next();
    };
};


module.exports = {authenticate, authorize};