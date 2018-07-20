const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define property Schema
const propertySchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId, ref: 'User',
  },
	homeName: { 
    type: String, 
    required: true 
  },
  streetAddress: { 
    type: String, 
    required: true 
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zipCode: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  }
});


const Property = mongoose.model('Property', propertySchema)

module.exports = Property