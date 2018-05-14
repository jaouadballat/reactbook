const User = require('../models/user');

module.exports = (req, res, next) => {
    //let token = req.cookies.auth;
    let token = req.query.token;
    User.findByToken(token, (err, user) => {
        if(err) throw err;
        if(!user) return res.json({error: true});
        req.user = user;
        next();
    });
}