const express    = require('express'),
      session    = require('express-session'),
      bodyParser = require('body-parser'),
      logger     = require('morgan'),
      mongoose   = require('mongoose'),
      routes     = require('./routes'),
      passport   = require('passport'),
      app        = express(),
      PORT       = process.env.PORT || 3001;

// Define middleware && logger here //
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Sessions 
app.use(
  session({
    secret: 'staring-bobcat', // random string to make sure hash that's generated is secure //
    resave: false, //required
    saveUninitialized: false //required
  })
);


require('./passport');
// Passport
app.use(passport.initialize())
app.use(passport.session()) //calls serializeUser and deserializeUser

// Serve up static assets (usually on heroku) //
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Add routes, both API and view //
app.use(routes);

// Connect to MongoDB //
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/home-management-hero');

// Start API server //
app.listen(PORT, function() {
  console.log(`🌎 ==> API Server now on port ${PORT}!`);
});
