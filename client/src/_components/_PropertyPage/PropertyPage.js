import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row } from 'react-materialize';
import API from '../../utils/API'
import LogOutNav from '../Navs/LogOutNav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

import "./PropertyPage.css"
class PropertyPage extends Component {
  state = {
    property: {}
  };

  componentDidMount() {
    API.getById(this.props.match.params.id)
      .then(res => this.setState({ property: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="app>">
        <LogOutNav />
        <div className="container">
          <Card>

          <Link to="/dash"><FontAwesomeIcon icon={faChevronCircleLeft} /> Return to Dashboard</Link>

            <div className='center-align'>
              <h2>{this.state.property.homeName}</h2>
              <img src={this.state.property.image}/>
            </div>

            <h5>Basic Information:</h5>
            <ul>
              <li className="flow-text basic-list-item">{this.state.property.streetAddress}</li>
              <li className="flow-text basic-list-item">{this.state.property.city}, {this.state.property.state} {this.state.property.zipCode}</li>
              <li className="flow-text basic-list-item">{this.state.property.phone}</li>
            </ul>

            <Button>Click here to add more info</Button>

          </Card>
        </div>
      </div>
    )
  }
}
export default PropertyPage;