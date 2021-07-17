// import mongoose dependencies
const { Schema, model } = require('mongoose');

// user schema
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'Username is required!',
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: 'Password is required!',
        // valid email address - mongoose matching validation
    },
    thoughts: [],
    friends: []
});

// create User model using UserSchema
const User = model('User', UserSchema);

// export User model
module.exports = User;