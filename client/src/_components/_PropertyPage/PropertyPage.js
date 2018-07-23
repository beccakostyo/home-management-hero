import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Collapsible, CollapsibleItem } from 'react-materialize';
import API from '../../utils/API'
import LogOutNav from '../Navs/LogOutNav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

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
      <div className='app>'>
        <LogOutNav />
        <div className='container'>
          <Card>

            <div id='card-content'>
              <Link to='/dash'><FontAwesomeIcon icon={faChevronCircleLeft} /> Return to Dashboard</Link>

              <div className='center-align'>
                <h2>{this.state.property.homeName}</h2>
                <img src={this.state.property.image} alt="Property" />
              </div>

              <h5>Basic Information:</h5>
              <ul>
                <li className='flow-text basic-list-item'>{this.state.property.streetAddress}</li>
                <li className='flow-text basic-list-item'>{this.state.property.city}, {this.state.property.state} {this.state.property.zipCode}</li>
                <li className='flow-text basic-list-item'>{this.state.property.phone}</li>
              </ul>
            </div>

            <Collapsible>
              <CollapsibleItem
                header={<p className="flow-text">Contacts<span><FontAwesomeIcon icon={faAngleDoubleDown} className='expand-icon' /></span></p>}
                className='collapsible-item'>
                <div>
                  <h1>{this.state.property.neighbor1Name}</h1>
                </div>

              </CollapsibleItem>
            </Collapsible>

          </Card>

        </div>
      </div>
    )
  }
}
export default PropertyPage;