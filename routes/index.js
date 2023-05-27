
const express = require('express')
const { registerUser } = require('../controllers/auth')
const userValidation = require('../middlewares/auth')
const { createTask, updateTask, deleteTask, getAllTasks } = require('../controllers/task')
const taskValidation = require('../middlewares/task')
const { updateOne } = require('../models/task')
const router = express.Router()

router.post('/register', userValidation, registerUser)
router.get('/task', getAllTasks)
router.post('/task', taskValidation, createTask )
router.put('/task/:id', taskValidation, updateTask)
router.delete('/task/:id', deleteTask)

module.exports = router;