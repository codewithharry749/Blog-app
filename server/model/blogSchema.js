const mongoose = require('mongoose');

const blogschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "XXXXXXX"
    },
    email: {
        type: String,
        required: true,
        default: "blog@example.com"
    },
    image: {
        type: String,
        required: true,
        default: "https://plus.unsplash.com/premium_photo-1661339265887-be15949790ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
    },
    title: {
        type: String,
        required: true,
        default: "xyz"
    },
    address: {
        type: String,
        required: true,
        default: "xyz"
    },
    description: {
        type: String,
        required: true,
        default: "XXXXXXX"
    },

});

const User = mongoose.model("BlogData", blogschema)
module.exports = User;