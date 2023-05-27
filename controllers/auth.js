const { validationResult } = require('express-validator');
const User = require('../models/user');

const registerUser = async(req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }
    try {
        let user = new User(req.body)
        await user.save();
        res.status(200).json({
            ok: true,
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            error,
        })
    }
}


module.exports = {
    registerUser
}