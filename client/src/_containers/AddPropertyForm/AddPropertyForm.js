import React, { Component } from 'react';
import { Row, Input, Button } from 'react-materialize';
import API from '../../utils/API';
import Dropzone from 'react-dropzone';
import request from 'superagent'

const CLOUDINARY_UPLOAD_PRESET = process.env.CLOUDINARY_PRESET || 'is8ybozh';
const CLOUDINARY_UPLOAD_URL = process.env.CLOUDINARY_URL || 'https://api.cloudinary.com/v1_1/dexu8dqab/image/upload';

class AddPropertyForm extends Component {
  state = {
    homeName: "",
    address: "",
    phone: "",
    //uploadFileCloudinaryUrl: "",
  };

  // onImageDrop(files) {
    // this.setState({
      // uploadedFiles: files[0]
    // })
    // this.handleImageUpload(files[0])
  // }
// 
  // handleImageUpload(file) {
    // let upload = request.post(CLOUDINARY_UPLOAD_URL)
      // .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      // .field('file', file);
    // upload.end((err, response) => {
      // if (err) {
        // console.error(err)
      // }
      // if (response.body.secure_url !== '') {
        // this.setState({
          // uploadFileCloudinaryUrl: response.body.secure_url
        // });
      // }
    // });
  // }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  loadProperties = () => {
    API.getProperties()
      .then(res =>
        this.setState({ properties: res.data, homeName: "", address: "", phone: "", image: "" })
      )
      .catch(err => console.log(err))
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.homeName && this.state.address) {
      API.saveProperty({
        homeName: this.state.homeName,
        address: this.state.address,
        phone: this.state.phone,
        //image: this.state.uploadFileCloudinaryUrl
      })
        .then(res => this.loadProperties())
        .catch(err => console.log(err))
    }
  };

  render() {
    return (
      <div className="container">

        <Row>
          <Input
            s={12}
            type="text"
            name="homeName"
            label="Property Name"
            value={this.state.homeName}
            onChange={this.handleInputChange}
          />
          <Input
            s={12}
            type="text"
            name="address"
            label="Address"
            value={this.state.address}
            onChange={this.handleInputChange}
          />
          <Input
            s={6}
            type="text"
            name="phone"
            label="Phone Number"
            value={this.state.phone}
            onChange={this.handleInputChange}
          />
        </Row>
        <Row>
          <Button
            type="submit"
            onClick={this.handleFormSubmit}>
            submit
              </Button>
          <br /><br />
        </Row>
      </div>
    )
  }
}

export default AddPropertyForm;