var express = require('express');
var router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const session = require('express-session');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Flight Manager' });
});

// GET handler for /login
router.get('/login', (req, res, next) => {
  // res.render('login', { title: 'Login' });
  // Obtain messages if any
  let messages = req.session.messages || [];
  // Clear messages
  req.session.messages = [];
  // Pass messages to view
  res.render('login', { title: 'Login', messages: messages });
});

// POST handler for /login
// Syntax will be a bit different since login will be handled by passport
router.post('/login', passport.authenticate('local', {
  successRedirect: '/projects',
  failureRedirect: '/login',
  failureMessage: 'Invalid credentials'
}));

// GET handler for /register
router.get('/register', (req, res, next) => {
  res.render('register', { title: 'Create a new account' });
});

//POST handler for /register
router.post('/register', (req, res, next) => {
  // Create a new user based on the information from the page
  User.register(new User({
    username: req.body.username
  }),
    req.body.password,
    (err, newUser) => {
      if (err) {
        console.log(err);
        // take user back and reload register page
        return res.redirect('/register');
      }
      else {
        // log user in
        req.login(newUser, (err) => {
          res.redirect('/bookings');
        });
      }
    });
});

// GET handler for logout
router.get('/logout', (req, res, next) => {
  req.logout(function (err) {
    res.redirect('/login');
  });
});








///
router.get('/github', passport.authenticate('github', {scope: ["user.email"]}));


router.get('/github/callback',
  // callback to send user back to login if unsuccessful
  passport.authenticate('github', { failureRedirect: '/login' }),
  // callback when login is successful
  (req, res, next) => { res.redirect('/bookings') }
);


router.get('/google', passport.authenticate('google', { scope: ["user.email"] }));


router.get('/google/callback',
  // callback to send user back to login if unsuccessful
  passport.authenticate('google', { failureRedirect: '/login' }),
  // callback when login is successful
  (req, res, next) => { res.redirect('/bookings') }
);

module.exports = router;
