const mongoose = require('mongoose'),
      bcrypt   = require('bcryptjs'),
      Schema   = mongoose.Schema;
      
// Define userSchema
const userSchema = new Schema({
	firstName: { 
    type: String, 
    required: true 
  },
	lastName: { 
    type: String, 
    required: true 
  },
	username: { 
    type: String, 
    required: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  properties: [{
    type: Schema.Types.ObjectId,
    ref: 'Property'
  }]
});

userSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password)
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
};

userSchema.pre('save', function (next) {
  if (!this.password) {
    console.log('models/user.js =====NO PASSWORD PROVIDED=====');
    return next()
  } else {
    console.log('models/user.js hashPassword in pre save');
    this.password = this.hashPassword(this.password);
    return next();
  }
});

const User = mongoose.model('User', userSchema)

module.exports = User