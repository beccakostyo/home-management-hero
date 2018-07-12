const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define userSchema
const userSchema = new Schema({

	username: { 
    type: String, 
    required: true 
  },
  password: { 
    type: String, 
    required: true 
  }
});


const User = mongoose.model('User', userSchema)

module.exports = User