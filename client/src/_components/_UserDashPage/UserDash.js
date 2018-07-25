import React, { Component } from 'react';
import { Button, Card, Collapsible, CollapsibleItem, Row } from 'react-materialize';
import API from '../../utils/API';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

import LogOutNav from '../Navs/LogOutNav';

class UserDash extends Component {
  state = {
    properties: [],
    homeName: '',
    address: '',
    phone: ''
  };

  componentDidMount() {
    this.loadProperties();
  };

  // Grabs all properties associated with the logged in user //
  loadProperties = () => {
    API.get('/properties')
      .then(res => {
        console.log(res);
        this.setState({ properties: res.data, homeName: '', address: '', phone: '' })
      })
      .catch(err => console.log(err));
  };

  deleteProperty = id => {
    API.delete('/properties', id)
      .then(res => this.loadProperties())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className='app'>

        <LogOutNav />
        <div className='container'>
          {this.state.properties.length ? (
            <Card>
              <div id="card-content">
                <h3 className="center-align">Your Properties:</h3>
                <p className="center-align flow-text"><em>(click to expand)</em></p>
                <Collapsible popout>
                  {this.state.properties.map(property => ( 
                    <CollapsibleItem
                      header={
                        <div>
                          <strong>{property.homeName}</strong><span><FontAwesomeIcon icon={faAngleDoubleDown} className='expand-icon' /></span>
                        </div>}
                      key={property._id}
                      icon='place'>
                      <ul className='property-info'>
                        {property.image !== "" && 
                          <li><img src={property.image} alt={property.homeName} /></li>
                        }
                        <li><strong>Name:</strong> {property.homeName}</li>
                        <li><strong>Address:</strong> {property.streetAddress}, {property.city}, {property.state} {property.zip}</li>
                        <li><strong>Main Phone:</strong> {property.phone}</li>
                      </ul>

                      <Row>
                        <Link to={`/properties/${property._id}`} >
                          <Button className='view-button'>View & Edit</Button>
                        </Link>
                        <Button className='delete-button' onClick={() => this.deleteProperty(property._id)} >Delete</Button>
                      </Row>

                    </CollapsibleItem>
                  ))}
                </Collapsible>

                <div className='center-align'>
                  <a href='/add-property'>
                    <Button
                      floating large
                      id='add-button'
                      waves='light'>
                      <FontAwesomeIcon
                        icon={faPlus}
                        className='add-icon' />
                    </Button>
                  </a>
                </div>
              </div>
            </Card>

          ) : (

              <Card>
                <div id="card-content" className='center-align'>
                  <h3>No Results to Display</h3>
                  <p className='flow-text'>Click the button below to add your first property</p>
                  <a href='/add-property'><Button floating large className='add-button' id='add-button' waves='light'><FontAwesomeIcon icon={faPlus} className='add-icon' /></Button></a>
                </div>
              </Card>
            )};
        </div>
      </div>
        );
      };
    };
    
export default UserDash;