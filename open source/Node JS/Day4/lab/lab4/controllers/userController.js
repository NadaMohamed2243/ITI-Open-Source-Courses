const User = require('../models/User');
const AppError = require('../utils/AppError');
const bcrypt = require('bcrypt');
// get all users
const  GetAllUsers = async (req, res, next) => {
    try {
        const { page = 1, limit = 10, search, sortBy = 'username', sortOrder = 'desc' } = req.query;

        let query = {};
        if (search) {
            query.$or = [
                { username: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } }
            ];
        }

        const sortOptions = {};
        sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;

        const users = await User.find(query)
            .sort(sortOptions)
            .limit(parseInt(limit))
            .skip((parseInt(page) - 1) * parseInt(limit))
            .exec();

        const count = await User.countDocuments(query);

        if (!users) {
            throw new AppError('No users found', 404);
        }

    
        const limitNumber = parseInt(limit);
        res.json({
            users,
            totalPages: Math.ceil(count / limitNumber),
            currentPage: parseInt(page)
        });
    } catch (err) {
        next(err);
    }
}

// get user by id
const GetUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            throw new AppError('user not found', 404);
        }

        res.json(user);
    }
    catch (err) {
        next(err);
    }
}

// grt current user
const GetCurrentUser = async (req, res, next) => {
    try {
        console.log("kkkkkkkkkkk"+req.user)
        const user = await User.findById(req.user._id);
        

        if (!user) {
            throw new AppError('user not found', 404);
        }

        res.json(user);
    }
    catch (err) {
        next(err);
    }
}

// update user
const UpdateUser = async (req, res, next) => {
    try {
        const { username, email, password, role } = req.body;

        // Role update check
        if (role && req.user.role !== 'admin') {
            return next(new AppError('You are not authorized to update the role', 403));
        }

        // User update check 
        // Check if the user is trying to update their own profile or an admin is updating another user
        if (req.params.id && req.params.id !== req.user._id.toString() && req.user.role !== 'admin') {
            return next(new AppError('You are not authorized to update this user', 403));
        }

        const updateData = {};
        if (username) updateData.username = username;
        if (email) updateData.email = email;

        if (password) {
            updateData.password = await bcrypt.hash(password, 10);
        }

        if (role && req.user.role === 'admin') {
            updateData.role = role;
        }

        console.log("jjjjjjjjjjjjjjj"+req.params.id)
        const user = await User.findByIdAndUpdate(req.params.id || req.user._id, updateData, { new: true });

        if (!user) {
            return next(new AppError('User not found', 404));
        }

        res.json({
            message: 'User updated successfully',
            user
        });
    }
    catch (err) {
        next(err);
    }
}

// delete user
const DeleteUser = async (req, res, next) => {
    try {

        // User delete check
        // Check if the user is trying to delete their own profile or an admin is deleting another user
        if (req.params.id && req.params.id !== req.user._id.toString() && req.user.role !== 'admin') {
            return next(new AppError('You are not authorized to delete this user', 403));
        }


        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return  next(new AppError('User not found', 404));
        }

        res.json({
            message: 'user deleted successfully',
            user
        });
    }
    catch (err) {
        next(err);
    }
}




module.exports = {
    GetAllUsers,
    GetUserById,
    GetCurrentUser,
    UpdateUser,
    DeleteUser,
}