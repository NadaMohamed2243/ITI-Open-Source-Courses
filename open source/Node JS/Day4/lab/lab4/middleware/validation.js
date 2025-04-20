const Joi = require('joi');
const User = require('../models/User');
const AppError = require('../utils/AppError');
const passwordComplexity = require('joi-password-complexity');

// Configure password complexity requirements
const complexityOptions = {
  min: 8,
  max: 30,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
  requirementCount: 4, // Enforce all 4 requirements
};

const registerSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required().pattern( new RegExp('^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$')),
    password: passwordComplexity(complexityOptions).required(),
    role: Joi.string().valid('user', 'admin').default('user')
});

const loginSchema = Joi.object({
    email: Joi.string().email().required().pattern( new RegExp('^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$')),
    password: Joi.string().required()
});

const updateUserSchema = Joi.object({
    username: Joi.string().min(3).max(30).optional(),
    email: Joi.string().email().optional().pattern( new RegExp('^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$')),
    password: passwordComplexity(complexityOptions).required(),
    role: Joi.string().valid('user', 'admin').optional()
});

// posts validation
// Note: The author field is handled by the authentication middleware, so we don't need to validate it here.
// The author field should be set to req.user._id in the controller when creating a post.
const createPostSchema = Joi.object({
    title: Joi.string().min(5).max(100).required()
        .messages({
            'string.min': 'Title must be at least 5 characters long',
            'string.max': 'Title cannot exceed 100 characters',
            'any.required': 'Title is required'
        }),
    content: Joi.string().min(10).max(10000).required()
        .messages({
            'string.min': 'Content must be at least 10 characters long',
            'string.max': 'Content cannot exceed 10,000 characters',
            'any.required': 'Content is required'
        }),
    tags: Joi.array().items(Joi.string().max(20)).max(10)
        .messages({
            'array.max': 'Cannot have more than 10 tags',
            'string.max': 'Each tag must be less than 20 characters'
        }),
});

const updatePostSchema = Joi.object({
    title: Joi.string().min(5).max(100)
        .messages({
            'string.min': 'Title must be at least 5 characters long',
            'string.max': 'Title cannot exceed 100 characters'
        }),
    content: Joi.string().min(10).max(10000)
        .messages({
            'string.min': 'Content must be at least 10 characters long',
            'string.max': 'Content cannot exceed 10,000 characters'
        }),
    tags: Joi.array().items(Joi.string().max(20)).max(10)
        .messages({
            'array.max': 'Cannot have more than 10 tags',
            'string.max': 'Each tag must be less than 20 characters'
        })
});

const commentSchema = Joi.object({
    text: Joi.string().min(1).max(500).required()
        .messages({
            'string.min': 'Comment must be at least 1 character long',
            'string.max': 'Comment cannot exceed 500 characters',
            'any.required': 'Comment text is required'
        })
    // author is handled by authentication middleware
});


const validate = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return next(new AppError(error.details[0].message, 400));
    }
    next();
};

module.exports = {
    validateRegister: validate(registerSchema),
    validateLogin: validate(loginSchema),
    validateUpdateUser: validate(updateUserSchema),
    validateCreatePost: validate(createPostSchema),
    validateUpdatePost: validate(updatePostSchema),
    validateComment: validate(commentSchema),
    validate
};