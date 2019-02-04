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

router.get('/users/facebook', 
  passport.authenticate('facebook')
);

router.get('/users/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

router.get('/login', function(req, res) {
  res.render('login', { user : req.user });
});

router.post('/register', function(req, res) {
  User.register(new User({ username: req.body.username }), req.body.password, function(err, user){
    if (err) {
      return res.render('error', { message: err });
    }

    passport.authenticate('local')(req, res, function(){
      res.redirect('/');
    })
  })
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

router.get('/logout', function(req, res){
  req.logOut();
  res.redirect('/');
});

module.exports = router;
