const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define property Schema
const propertySchema = new Schema({
	homeName: { 
    type: String, 
    required: true 
  },
  address: { 
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