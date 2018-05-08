const User = require('../models/user');

module.exports = function(req, res, next) {
    let token = req.cookies.auth;
    User.findByToken(token, function(err, user){
        if(err) throw err;
        if(!user) return res.json({error: true});
        req.user = user;
        next();
    });
}