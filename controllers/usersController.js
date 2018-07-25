const mongoose = require('mongoose'),
      db = require('../models');

mongoose.Promise = Promise;

module.exports = {
  createNewUser: function (req, res) {
    db.User.findOne({ username: req.body.username })
      .then(foundUser => {
        if (!foundUser) {
          db.User
            .create(req.body)
            .then(dbUser => {
              req.login(dbUser, (error) => {
                if (error) return res.json({ error: error });
                res.json(dbUser);
              });
            })
            .catch(err => {
              console.log(err);
              throw new Error(err)
            });
        } else {
          res.json({ message: 'User Already Exists!' });
        }
      }).catch(error => console.log(error));
  }
}