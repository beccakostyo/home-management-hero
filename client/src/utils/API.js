import axios from "axios";

export default {
  // Gets all books
  getProperties: function() {
    return axios.get("/api/properties");
  },
  // Gets the book with the given id
  getProperty: function(id) {
    return axios.get("/api/properties/" + id);
  },
  // Deletes the book with the given id
  deleteProperty: function(id) {
    return axios.delete("/api/properties/" + id);
  },
  // Saves a book to the database
  saveProperty: function(propertyData) {
    return axios.post("/api/properties/", propertyData);
  }
};
