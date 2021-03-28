const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true, //  Trim whitespaces.
        minlength: 3
    },
}, {
    timestamps: true,   //  Adds createdAt and modifiedAt fields
});

const User = mongoose.model('User', userSchema);

module.exports = User;