const { validationResult } = require('express-validator');
const Task = require('../models/task');

// Get all tasks
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Create a new task
const createTask = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }
    try {

        const newTask = new Task(req.body);

        const createdTask = await newTask.save();
        res.status(201).json(createdTask);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Update a task
const updateTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const updates = req.body;

        const task = await Task.findById(taskId);

        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        const updatedTask = await Task.findByIdAndUpdate(taskId, updates, { new: true });
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete a task
const deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id;

        const task = await Task.findById(taskId);

        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        await Task.findByIdAndDelete(taskId);
        res.json({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
};
