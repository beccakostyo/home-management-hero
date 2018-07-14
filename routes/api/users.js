const router = require('express').Router();
const usersController = require('../../controllers/usersController');
const passport = require('passport')

router.route('/')
  .post(usersController.createNewUser);

router.post('/signout', (req, res) => {
  if (req.user) {
      req.logout()
      res.send({ msg: 'logging out' })
  } else {
      res.send({ msg: 'no user to log out' })
  }
})

module.exports = router