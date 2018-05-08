var express = require('express');
var router = express.Router();

const User = require('../models/user');

/* GET users listing. */
router.post('/register', function(req, res, next) {
  const user = new User(req.body);
  user.save(function(err, user) {
    if(err) return res.json({success: false, err});
    res.json({success: true, user});
  });
});

router.post('/login', function(req, res, next) {
  let email = req.body.email;
  let password = req.body.password;
  User.findOne({email: email}, function(err, user) {
    if(!user) return res.send({isAuth: false, message: 'Auth failed, Email incorrect'});
      user.comparePassword(password, function (err, isMatch) {
        if (!isMatch) return res.json({ isAuth: false, message: 'Wrong Password' });
        user.generateToken(function(err, user) {
          if(err) return res.send(err);
          res.cookie('auth', user.token);
          res.json({isAuth: true, id: user._id, email: user.email});
        });
      });
  });
});

module.exports = router;
