const express = require('express');
const router = express.Router();
const passport = require('passport');

const User = require('../models/User');

router.get('/', (req, res) => {
  res.render('users');
});

router.get('/register', function(req, res) {
  res.render('register', {});
});

router.get('/login', function(req, res) {
  res.render('login', { user : req.user });
});

router.post('/register', function(req, res) {
  User.register(new User({ username: req.body.username }), req.body.password, function(err, user){
    if (err) {
      console.log('BODY ', req.body);
      console.log('ERROR ', err);
      return res.render('/register', { account : user });
    }

    passport.authenticate('local')(req, res, function(){
      res.redirect('/');
    })
  })
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

function isLoggedIn(req, res, next) {
  console.log('99999999999 ', req.isAuthenticated());
  if (req.isAuthenticated())
      return next();
  res.status(400).json({
      'message': 'access denied'
  });
}

router.get('/ping', isLoggedIn, function(req, res){
  res.status(200).send("pong!");
});

module.exports = router;
