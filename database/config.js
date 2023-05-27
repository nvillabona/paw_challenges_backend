const mongoose = require('mongoose');
const mongo_url = "mongodb+srv://challenges:challenges@cluster0.ztyigdt.mongodb.net/"

const dbConnection = async() => {
    try {
        mongoose.connect( mongo_url, {
            autoIndex: true,
        })
        console.log('DB Online')
    } catch (error) {
        console.log(error);
        throw new Error('Error connecting to DB');
    }
}

module.exports = { dbConnection }