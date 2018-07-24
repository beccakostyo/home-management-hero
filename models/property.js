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
  },
  policeDeptName: { 
    type: String, 
    required: false 
  },
  policeDeptPhone: {
    type: String,
    required: false 
  },
  policeDeptAdd: {
    type: String,
    required: false 
  },
  fireDeptName: {
    type: String,
    required: false
  },
  fireDeptAdd: {
    type: String,
    required: false
  },
  hospitalName: {
    type: String,
    required: false
  },
  hospitalAdd: {
    type: String,
    required: false
  },
  urgentCareName: {
    type: String,
    required: false
  },
  urgentCareAdd: {
    type: String,
    required: false
  },
  hoaName: {
    type: String,
    required: false 
  },
  hoaPhone: {
    type: String,
    required: false
  },
  hoaWebsite: {
    type: String,
    required: false
  },
  neighbor1Name: {
    type: String,
    required: false 
  },
  neighbor1Phone: {
    type: String,
    required: false
  },
  neighbor2Name: {
    type: String,
    required: false 
  },
  neighbor2Phone: {
    type: String,
    required: false
  },
  neighbor3Name: {
    type: String,
    required: false 
  },
  neighbor3Phone: {
    type: String,
    required: false
  }
});

const Property = mongoose.model('Property', propertySchema)

module.exports = Property