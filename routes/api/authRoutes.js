const express = require('express');
const router = express.Router();

const passport = require('../../passport/index');

router.post('/signup', (req, res) => {
  console.log('POST TO /SIGNUP');
  res.json({ message: '/signup!' });
});

router.get('/currentUser', (req, res) => {
  console.log(req.user);
  if (!req.user) {
    res.json({});
  } else {
    const { username, firstName, lastName } = req.user;
    res.json({ username, firstName, lastName });
  }
})

router.post('/signin', (req, res) => {
  passport.authenticate('local', (error, user, info) => {
    console.log('Hi mom');
    if (error) return console.log(error);
    // if (info) console.log('INFO: ', info);
    // if (user) console.log('USER: ', user);
    res.json('Hi mom');
  })(req, res);
});

module.exports = router;