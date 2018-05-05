const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        minlength: 6,
        unique: true
    },
    password: {
        type: String,
        minlength: 6,
        required: true
    },
    firstname: {
        type: String,
        maxlength: 100,
    },
    lastname: {
        type: String,
        maxlength: 100
    },
    role: {
        type: Boolean,
        default: false
    },
    token: {
        type: String
    }
});

module.exports = mongoose.model('User', UserSchema);