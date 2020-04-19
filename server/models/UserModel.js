const mongoose = require('./../db/mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        require: true,
        trim: true,
        validate: {
            validator: validator.isEmail,
            message: 'this email is goh'
        }
    },
    password: {
        type: String,
        require: true,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;