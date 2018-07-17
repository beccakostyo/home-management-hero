import React, { Component } from 'react';
import { Row, Input, Button } from 'react-materialize';
import API from '../../utils/API'

class AddPropertyForm extends Component {
  state = {
    homeName: "",
    address: "",
    phone: "",
  };

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
    this.setState({ properties: res.data, homeName: "", address: "", phone: ""})
  )
  .catch(err => console.log(err))
  }

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.homeName && this.state.address) {
      API.saveProperty({
        homeName: this.state.homeName,
        address: this.state.address,
        phone: this.state.phone
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