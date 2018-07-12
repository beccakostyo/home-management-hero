const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware && logger here //
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
