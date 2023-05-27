const { check } = require('express-validator');

const userValidation = [
    check('email')
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Invalid email'),
    check('username')
        .notEmpty()
        .withMessage('Username is required'),
    check('password')
        .notEmpty()
        .withMessage('Password is required'),
]

module.exports= userValidation;