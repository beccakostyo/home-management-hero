import React, { Component } from 'react';
import { Button, Card, Collapsible, CollapsibleItem, Row } from 'react-materialize';
import API from "../../utils/API";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import LogOutNav from '../Navs/LogOutNav'
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
  
  deleteProperty = id => {
    API.deleteProperty(id)
      .then(res => this.loadProperties())
      .catch(err => console.log(err));
  };

  addProperty = function () {
    alert('clicked me!')
  }

  render() {
    return (
      <div className="container">
        <LogOutNav />
        {this.state.properties.length ? (
          <Card>
            <Collapsible popout>
              {this.state.properties.map(property => (
                <CollapsibleItem
                  header={
                    <div>
                      <strong>{property.homeName}</strong><span>: {property.address}</span>
                      <Link to={"/api/properties" + property._id}>
                        <Button className="view-button">View</Button>
                      </Link>
                    </div>}
                  key={property._id}
                  icon='place'>
                  <ul className="property-info">
                    <li><strong>Name:</strong> {property.homeName}</li>
                    <li><strong>Address:</strong> {property.address}</li>
                    <li><strong>Main Phone:</strong> {property.phone}</li>
                  </ul>
                  <Row>
                    <Button className="delete-button" onClick={() => this.deleteProperty(property._id)} >Delete</Button>
                  </Row>
                </CollapsibleItem>
              ))}
            </Collapsible>
            <div className="center-align">
            <a href="/add-property"><Button floating large className='add-button' id="add-button" waves='light'><FontAwesomeIcon icon={faPlus} className="add-icon" /></Button></a>
            </div>
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