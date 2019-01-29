const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('users');
});

router.get('/register', function(req, res) {
  res.render('register', {});
});

router.get('/login', function(req, res) {
  res.render('login', { user : req.user });
});

module.exports = router;
