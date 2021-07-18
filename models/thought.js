const { Schema, model } = require('mongoose');

// thought schema
const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: 'Thought is required!',
        // must be between 1-280 characters
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // getter method to format timestamp
    },
    username: {
        type: String,
        required: 'Username is required!'
    },
    reactions: []
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;