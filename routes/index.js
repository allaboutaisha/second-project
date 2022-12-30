var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Anne\'s Cookbook' });
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email']
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    // check route here
    successRedirect: '/recipes',
    failureRedirect: '/recipes'
  }
));

router.get('/logout', function(req, res) {
  req.logout(function() {
    res.redirect('/recipes')
  });
});

module.exports = router;
