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

router.post('/signin',
  function (req, res, next) {
    console.log('routes/user.js, login, req.body:')
    console.log(req.body)
    next()
  },
  passport.authenticate('local'),
  (req, res) => {
    console.log('logged in', req.user);
    var userInfo = {
      username: req.user.username
    };
    res.send(userInfo)
  }
);

module.exports = router;