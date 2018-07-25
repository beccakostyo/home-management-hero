const router          = require('express').Router(),
      passport        = require('../../passport/index'),
      usersController = require('../../controllers/usersController');


// Creates a new user //
router.route('/')
  .post(usersController.createNewUser);

// Signs an existing user in //
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

// Signs user out //
router.post('/signout', (req, res) => {
  if (req.user) {
    req.logout()
    res.send({ msg: 'logging out' })
  } else {
    res.send({ msg: 'no user to log out' })
  }
})

module.exports = router