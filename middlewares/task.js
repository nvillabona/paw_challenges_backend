const { check } = require('express-validator');

const taskValidation = [
  check('title')
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ max: 100 })
    .withMessage('Title must be less than 100 characters'),
  check('description')
    .notEmpty()
    .withMessage('Description is required')
    .isLength({ max: 500 })
    .withMessage('Description must be less than 500 characters'),
  check('userId')
    .notEmpty()
    .withMessage('User ID is required'),
  check('completed')
    .isBoolean()
    .withMessage('Completed field must be a boolean value')
];

module.exports = taskValidation;
