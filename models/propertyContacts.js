const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define property Schema
const propertyContactsSchema = new Schema({
  belongsToProperty: {
    type: Schema.Types.ObjectId, ref: 'Property',
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
  fireDeptPhone: { 
    type: String,
    required: false
  },
  fireDeptAdd: {
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
  },
});

const propertyContacts = mongoose.model('propertyContacts', propertyContactsSchema)

module.exports = propertyContacts