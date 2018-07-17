import React, { Component } from 'react';
import { Navbar, NavItem, Button, Card } from 'react-materialize';
import API from "../../utils/API";
import { Link } from "react-router-dom";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus } from '@fortawesome/free-solid-svg-icons';

import "./UserDash.css";

class UserDash extends Component {
  state = {
    properties: [],
    homeName: "",
    address: "",
    phone: ""
  };

  componentDidMount() {
    this.loadProperties();
  }

  loadProperties = () => {
    API.getProperties()
      .then(res => {
        this.setState({ properties: res.data, homeName: "", address: "", phone: "" })
      })
      .catch(err => console.log(err));
  }

  addProperty = function() {
    alert('clicked me!')
  }

  render() {
    return (
      <div className="container">
        <Navbar className="transparent-nav">
          <NavItem href="/home" className="left-float"><FontAwesomeIcon icon={faHome} size='3x' href="/home" /></NavItem>
          <NavItem href="/signout" className="right-float signin-btn"><Button>Log Out</Button></NavItem>
          <NavItem href="/contact" className="right-float">Contact</NavItem>
          <NavItem href="/help" className="right-float">Help</NavItem>
          <NavItem href="/about" className="right-float">About</NavItem>
        </Navbar>
        {this.state.properties.length ? (
          <Card>
            <ul>
              {this.state.properties.map(property => (
                <li key={property._id}>
                  <Link to={"/api/properties/" + property._id}>
                    <strong>
                      {property.homeName}
                    </strong>
                  </Link>
                  <Button onClick={() => this.deleteProperty(property._id)} >Delete</Button>
                </li>
              ))}
            </ul>
          </Card>
        ) : (
            <Card>
              <div className="center-align">
                <h3>No Results to Display</h3>
                <p className="flow-text">Click the button below to add your first property</p>
                <a href="/add-property"><Button floating large className='add-button' id="add-button" waves='light'><FontAwesomeIcon icon={faPlus} className="add-icon" /></Button></a>
              </div>
            </Card>
          )}
      </div>
    )
  }
}

export default UserDash;