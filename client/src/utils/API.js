import axios from "axios";
const prefix = '/api';

export default {
  // Gets all properties
  get: function(endpoint) {
    return axios.get(`${prefix}${endpoint}`);
  },
  // Gets the property with the given id
  getById: function( id) {
    return axios.get(`/api/properties/${id}`);
  },
  // Deletes the property with the given id
  delete: function(endpoint, id) {
    return axios.delete(`${prefix}${endpoint}/${id}`);
  },
  // Saves a property to the database
  save: function(endpoint, propertyData) {
    return axios.post(`${prefix}${endpoint}`, propertyData);
  },
  update: function( id) {
    return axios.put(`/api/properties/${id}`)
  }
};
