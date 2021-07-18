// import mongoose dependencies
const { Schema, model } = require('mongoose');

// user schema
const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: 'Username is required!',
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: 'Email is required!',
            // valid email address - mongoose matching validation
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: []
    },
    {
        toJSON: {
            virtuals: true
        },
        // we don't need this mongoose virtual
        id: false
    }
);

// get total count of thoughts on retrieval
UserSchema.virtual('thoughtCount').get(function() {
    return this.thoughts.length;
});

// create User model using UserSchema
const User = model('User', UserSchema);

// export User model
module.exports = User;