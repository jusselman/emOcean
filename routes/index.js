var express = require('express');
var router = express.Router();
var passport = require('passport');
var indexController = require('../controllers/index');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/emos');
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email']}
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/emos/new',
    failure: '/'
  }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/emos');
})

module.exports = router;
