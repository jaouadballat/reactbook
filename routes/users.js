var express = require('express');
var router = express.Router();

const User = require('../models/user');
const auth = require('../middleware/auth');


router.post('/register', function(req, res, next) {
  const user = new User(req.body);
  user.save(function(err, user) {
    if(err) return res.json({success: false, err});
    res.json({success: true, user});
  });
});

router.post('/login', (req, res) => {
  User.findOne({ 'email': req.body.email }, (err, user) => {
    if (!user) return res.json({ isAuth: false, message: 'Auth failed, email not found' })

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) return res.json({
        isAuth: false,
        message: 'Wrong password'
      });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.json({
          isAuth: true,
          id: user._id,
          email: user.email,
          token: user.token
        });
      });
    });
  });
});

router.get('/logout',auth, function(req, res, next) {
  req.user.deleteToken(function(err, user) {
    if(err) return res.send(err);
    res.json({
      user: user
    });
  });
});

router.get('/auth', auth, function(req, res, next) {
  res.json({
    isAuth: true,
    id: req.user._id,
    email: req.user.email,
    lastname: req.user.lastname,
    firstname: req.user.firstname,
  });
});



module.exports = router;
