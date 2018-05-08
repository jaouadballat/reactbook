const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


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


UserSchema.pre('save', function (next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    let user = this;
    bcrypt.compare(candidatePassword, user.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

UserSchema.methods.generateToken = function(cb) {
    let user = this;
    let token = jwt.sign(user._id.toJSON(), 'secret');
    user.token = token;
    user.save(function(err, user) {
        if(err) return cb(err);
        cb(null, user);
    });
}

UserSchema.statics.findByToken = function(token, cb) {
    let user = this;
    jwt.verify(token, 'secret', function (err, decoded) {
        user.findOne({_id: decoded, token: token}, function(err, user) {
            if(err) return cb(err);
            cb(null, user);
        });
    });
}

UserSchema.methods.deleteToken = function(cb) {
    let user = this;
    user.update({$unset: {token: true}}, function(err, user) {
        if(err) return cb(err);
        cb(null, user);
    });
}

module.exports = mongoose.model('User', UserSchema);