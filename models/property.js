const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define property Schema
const propertySchema = new Schema({

	name: { 
    type: String, 
    required: true 
  },
  address: { 
    type: String, 
    required: true 
  }
});


const Property = mongoose.model('Property', propertySchema)

module.exports = Property