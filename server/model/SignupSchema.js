const mongoose = require('mongoose');


const signupSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        default: '123456789'
    },
    cpassword: {
        type: String,
        required: true,
        default: '123456789'
    }
});

const Signup = mongoose.model("SignUp", signupSchema)


module.exports = Signup 