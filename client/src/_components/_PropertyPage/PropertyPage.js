import React, { Component } from 'react';
import { Link }             from 'react-router-dom';
import API                  from '../../utils/API';
import LogOutNav            from '../Navs/LogOutNav';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { Card, 
         Collapsible, 
         CollapsibleItem, 
         Collection, 
         CollectionItem }   from 'react-materialize';
import { faChevronCircleLeft, 
         faAngleDoubleDown, 
         faTaxi, 
         faFireExtinguisher, 
         faHospitalSymbol, 
         faStethoscope, 
         faAddressCard, 
         faWarehouse }      from '@fortawesome/free-solid-svg-icons';

class PropertyPage extends Component {
  state = {
    property: {}
  };

  componentDidMount() {
    API.getById(this.props.match.params.id)
      .then(res => this.setState({ property: res.data }))
      .catch(err => console.log(err));
  }

  renderImage() {
    if (this.state.property.image === '') {
      return <p><em>No image</em></p>
    } else {
      return <img src={this.state.property.image} alt={this.state.property.homeName} />
    }
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
                {this.renderImage()}
                <h5 className='basic-info-header'>Basic Information:</h5>
                <ul>
                  <li className='flow-text basic-list-item'>{this.state.property.streetAddress}</li>
                  <li className='flow-text basic-list-item'>{this.state.property.city}, {this.state.property.state} {this.state.property.zipCode}</li>
                  <li className='flow-text basic-list-item'>{this.state.property.phone}</li>
                </ul>
              </div>
            </div>

            <Collapsible>
              <CollapsibleItem
                header={<p className='flow-text'>Contacts<span><FontAwesomeIcon icon={faAngleDoubleDown} className='expand-icon' /></span></p>}
                className='collapsible-item'>
                <Collection>
                  <h5 className='basic-info-header'><FontAwesomeIcon className='view-prop-icon' icon={faTaxi} />Nearest Police Department</h5>
                  <CollectionItem className='basic-list-item'><strong>Name:</strong> {this.state.property.policeDeptName}</CollectionItem>
                  <CollectionItem className='basic-list-item'><strong>Address:</strong> {this.state.property.policeDeptAdd}</CollectionItem>
                  <CollectionItem className='basic-list-item'><strong>Phone Number:</strong> {this.state.property.policeDeptPhone}</CollectionItem>
                </Collection>

                <Collection>
                  <h5 className='basic-info-header'><FontAwesomeIcon className='view-prop-icon' icon={faFireExtinguisher} />Nearest Fire Department</h5>
                  <CollectionItem className='basic-list-item'><strong>Name:</strong> {this.state.property.fireDeptName}</CollectionItem>
                  <CollectionItem className='basic-list-item'><strong>Address:</strong> {this.state.property.fireDeptAdd}</CollectionItem>
                </Collection>

                <Collection>
                  <h5 className='basic-info-header'><FontAwesomeIcon className='view-prop-icon' icon={faHospitalSymbol} />Nearest Hospital</h5>
                  <CollectionItem className='basic-list-item'><strong>Name:</strong> {this.state.property.hospitalName}</CollectionItem>
                  <CollectionItem className='basic-list-item'><strong>Address:</strong> {this.state.property.hospitalAdd}</CollectionItem>
                </Collection>

                <Collection>
                  <h5 className='basic-info-header'><FontAwesomeIcon className='view-prop-icon' icon={faStethoscope} />Nearest Urgent Care</h5>
                  <CollectionItem className='basic-list-item'><strong>Name:</strong> {this.state.property.urgentCareName}</CollectionItem>
                  <CollectionItem className='basic-list-item'><strong>Address:</strong> {this.state.property.urgentCareAdd}</CollectionItem>
                </Collection>

                <Collection>
                  <h5 className='basic-info-header'><FontAwesomeIcon className='view-prop-icon' icon={faWarehouse} />Home Owners' Association</h5>
                  <CollectionItem className='basic-list-item'><strong>Name:</strong> {this.state.property.hoaName}</CollectionItem>
                  <CollectionItem className='basic-list-item'><strong>Address:</strong> {this.state.property.hoaPhone}</CollectionItem>
                  <CollectionItem className='basic-list-item'><strong>Website:</strong> <a target='_blank' href={this.state.property.hoaWebsite}>{this.state.property.hoaWebsite}</a></CollectionItem>
                </Collection>

                <Collection>
                  <h5 className='basic-info-header'><FontAwesomeIcon className='view-prop-icon' icon={faAddressCard} />Neighbor Information</h5>
                  <CollectionItem className='basic-list-item'><strong>Name:</strong> {this.state.property.neighbor1Name}, <strong>Phone Number:</strong> {this.state.property.neighbor1Phone}</CollectionItem>
                  <CollectionItem className='basic-list-item'><strong>Name:</strong> {this.state.property.neighbor2Name}, <strong>Phone Number:</strong> {this.state.property.neighbor2Phone}</CollectionItem>
                  <CollectionItem className='basic-list-item'><strong>Name:</strong> {this.state.property.neighbor3Name}, <strong>Phone Number:</strong> {this.state.property.neighbor3Phone}</CollectionItem>
                </Collection>
              </CollapsibleItem>

              <CollapsibleItem 
                header={<p className='flow-text'>Notes<span><FontAwesomeIcon icon={faAngleDoubleDown} className='expand-icon' /></span></p>}
                className='collapsible-item'>
              </CollapsibleItem>
            </Collapsible>

          </Card>
        </div>
      </div>
    )
  }
}
export default PropertyPage;