const passport      = require('passport'),
      LocalStrategy = require('./localStrategy'),
      User          = require('../models').User;

passport.serializeUser((user, done) => {
	console.log('*** serializeUser called ***')
	done(null, user._id)
});

passport.deserializeUser((id, done) => {
	console.log('*** DeserializeUser called ***')
	User.findById(id,
		(err, user) => {
			done(null, user)
		}
	)
});

passport.use(LocalStrategy);

module.exports = passport