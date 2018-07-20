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
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    uploadFileCloudinaryUrl: "",
  };

  onImageDrop(files) {
    this.setState({
      uploadedFiles: files[0]
    })
    this.handleImageUpload(files[0])
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file);
    upload.end((err, response) => {
      if (err) {
        console.error(err)
      }
      if (response.body.secure_url !== '') {
        this.setState({
          uploadFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  loadProperties = () => {
    API.get()
      .then(res =>
        this.setState({ properties: res.data, homeName: "", streetAddress: "", city:"", state:"", zipCode: "", phone: "", image: "" }),
      )
      .catch(err => console.log(err))
  };

  // Simple function to make sure all required fields have been populated //
  checkValidation() {
    if (this.state.homeName && this.state.streetAddress && this.state.city && this.state.state && this.state.zipCode) {
      return true
    }
  }
  handleFormSubmit = event => {
    event.preventDefault();

    if (this.checkValidation) {
      API.save('/properties', {
        homeName: this.state.homeName,
        streetAddress: this.state.streetAddress,
        city: this.state.city,
        state: this.state.state,
        zipCode: this.state.zipCode,
        phone: this.state.phone,
        image: this.state.uploadFileCloudinaryUrl
      })
        .then(res => 
          this.props.history.push("/dash"),
          this.loadProperties()
          )
        .catch(err => console.log(err))
    }
  };

  render() {
    return (
      <div className="container">
        <Row>
        <div>
            {this.state.uploadFileCloudinaryUrl === '' ? null :
              <div>
                <img value={this.state.image} src={this.state.uploadFileCloudinaryUrl} alt="Home" />
              </div>}
          </div>
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <p className="dropzone-guidance">Click here to select a picture to upload.</p>
          </Dropzone>

        </Row>
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
            name="streetAddress"
            label="Street Address"
            value={this.state.streetAddress}
            onChange={this.handleInputChange}
          />
          <Input
            s={4}
            type="text"
            name="city"
            label="City"
            value={this.state.city}
            onChange={this.handleInputChange}
          />
          <Input
            s={4}
            type="text"
            name="state"
            label="State"
            value={this.state.state}
            onChange={this.handleInputChange}
          />
          <Input
            s={4}
            type="text"
            name="zipCode"
            label="Zip Code"
            value={this.state.zipCode}
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