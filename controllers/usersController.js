const mongoose = require('mongoose');
const db = require('../models');

mongoose.Promise = Promise;

module.exports = {
  createNewUser: function (req, res) {
    db.User
      .create(req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => {
        console.log(err);
        throw new Error(err)
      })
  }
}