import React, { Component } from 'react';
import API from '../../utils/API'
import axios from 'axios';
import { Link } from 'react-router-dom';
import LogOutNav from '../../_components/Navs/LogOutNav';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { Card, Row, Col, Collapsible, CollapsibleItem, Button } from 'react-materialize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleLeft,
  faAngleDoubleDown,
  faTaxi,
  faFireExtinguisher,
  faHospitalSymbol,
  faStethoscope,
  faAddressCard,
  faWarehouse
} from '@fortawesome/free-solid-svg-icons';

const CLOUDINARY_UPLOAD_PRESET = process.env.CLOUDINARY_PRESET || 'is8ybozh',
      CLOUDINARY_UPLOAD_URL = process.env.CLOUDINARY_URL || 'https://api.cloudinary.com/v1_1/dexu8dqab/image/upload';

class EditProperty extends Component {

  constructor(props) {
    super(props);
    this.state = {
      property: {},
      uploadFileCloudinaryUrl: ''
    };
  }

  componentDidMount() {
    API.getById(this.props.match.params.id)
      .then(res => this.setState({ property: res.data }))
      .catch(err => console.log(err));
  }

  onChange = (e) => {
    const state = this.state.property
    state[e.target.name] = e.target.value;
    this.setState({ property: state })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { homeName, image, streetAddress, city, state, zipCode, phone, policeDeptName, policeDeptPhone, policeDeptAdd, fireDeptName, fireDeptAdd, hoaName, hoaPhone, hospitalName, hospitalAdd, urgentCareName, urgentCareAdd, neighbor1Name, neighbor1Phone, neighbor2Name, neighbor2Phone, neighbor3Name, neighbor3Phone } = this.state.property;
    axios.put('/api/properties/' + this.props.match.params.id, { homeName, image: this.state.uploadFileCloudinaryUrl, streetAddress, city, state, zipCode, phone, policeDeptName, policeDeptPhone, policeDeptAdd, fireDeptName, fireDeptAdd, hoaName, hoaPhone, hospitalName, hospitalAdd, urgentCareName, urgentCareAdd, neighbor1Name, neighbor1Phone, neighbor2Name, neighbor2Phone, neighbor3Name, neighbor3Phone })
      .then((result) => {
        this.props.history.push(`/properties/show/${this.state.property._id}`)
      })
  }

  // Image upload logic //
  onImageDrop(files) {
    this.setState({ uploadedFiles: files[0] })
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

  render() {
    return (
      <div className='app'>
        <LogOutNav />
        <div className='container'>
          <Card>
            <div id='card-content'>
              <Link to={`/properties/show/${this.state.property._id}`}><FontAwesomeIcon icon={faChevronCircleLeft} /> Return to Property Show Page</Link>
              <h3 class='center-align'> Edit {this.state.property.homeName} </h3>
              <Collapsible>
                <CollapsibleItem header={<p className='flow-text collapsible-header-add-property'><strong>Edit Basic Information</strong></p>}>
                  <div className='form-group'>
                    <label className='edit-label'>Home Name</label>
                    <input 
                      className='edit-input' 
                      name='homeName' 
                      maxLength='25'
                      value={this.state.property.homeName} 
                      onChange={this.onChange} />
                  </div>
                  <div className='form-group'>
                    <Row className='edit-form-row'>
                      <Col s={6}>
                        <label className='edit-label'>Street Address</label>
                        <input 
                          className='edit-input' 
                          name='streetAddress' 
                          maxLength='50'
                          value={this.state.property.streetAddress} 
                          onChange={this.onChange} />
                      </Col>
                      <Col s={3}>
                        <label className='edit-label'>City</label>
                        <input 
                          className='edit-input' 
                          name='city' 
                          value={this.state.property.city} 
                          onChange={this.onChange} />
                      </Col>
                      <Col s={2}>
                        <label className='edit-label'>Zip Code</label>
                        <input 
                          className='edit-input' 
                          name='zipCode' 
                          maxLength='5'
                          value={this.state.property.zipCode} 
                          onChange={this.onChange} />
                      </Col>
                    </Row>
                  </div>
                  <div className='form-group'>
                    <label className='edit-label'>Phone</label><br />
                    <input 
                      className='edit-input-phone' 
                      maxLength='14' 
                      name='phone' 
                      value={this.state.property.phone} 
                      onChange={this.onChange} />
                  </div>
                </CollapsibleItem>

                <CollapsibleItem header={<p className='flow-text collapsible-header-add-property'><strong>Edit Image</strong></p>}>
                  <div className='form-group'>
                    <Row>
                      <div className='pic-preview'>
                        {this.state.uploadFileCloudinaryUrl === '' ?
                          <div>
                            <img value={this.state.property.image} src={this.state.property.image} alt='Home' />
                          </div> :
                          <div>
                            <img value={this.state.property.image} src={this.state.uploadFileCloudinaryUrl} alt='Home' />
                          </div>
                        }
                      </div>
                      <div className='dropzone-div'>
                        <Dropzone
                          className='dropzone'
                          multiple={false}
                          accept='image/*'
                          name='image'
                          onChange={this.onChange}
                          onDrop={this.onImageDrop.bind(this)}>
                          <p className='dropzone-guidance flow-text'>Click <strong>here</strong> to select a picture to upload.</p>
                        </Dropzone>
                      </div>
                    </Row>
                  </div>
                </CollapsibleItem>
                <CollapsibleItem header={<p className='flow-text collapsible-header-add-property'><strong>Edit Contacts</strong></p>}>
                  <Row>
                    <Col s={4}>
                      <label className='edit-label'><FontAwesomeIcon className='add-form-icon' icon={faTaxi} />   Nearest Police Dept Name</label>
                      <input
                        className='edit-input' 
                        type='text'
                        maxLength='50'
                        name='policeDeptName'
                        value={this.state.property.policeDeptName}
                        onChange={this.onChange}
                      />
                    </Col>
                    <Col s={3}>
                      <label className='edit-label'>Phone</label>
                      <input
                        className='edit-input' 
                        type='text'
                        maxLength='14'
                        name='policeDeptPhone'
                        value={this.state.property.policeDeptPhone}
                        onChange={this.onChange}
                      />
                    </Col>
                    <Col s={5}>
                      <label className='edit-label'>Address</label>
                      <input
                        className='edit-input' 
                        type='text'
                        maxLength='50'
                        name='policeDeptAdd'
                        value={this.state.property.policeDeptAdd}
                        onChange={this.onChange}
                    />
                    </Col>
                  </Row>

                  <Row>
                    <Col s={6}>
                      <label className='edit-label'><FontAwesomeIcon className='add-form-icon' icon={faFireExtinguisher} /> Nearest Fire Dept Name</label>
                      <input
                        className='edit-input' 
                        type='text'
                        maxLength='50'
                        name='fireDeptName'
                        value={this.state.property.fireDeptName}
                        onChange={this.onChange}
                      />
                    </Col>
                    <Col s={6}>
                      <label className='edit-label'>Address</label>
                      <input
                        className='edit-input' 
                        type='text'
                        maxLength='50'
                        name='fireDeptAdd'
                        value={this.state.property.fireDeptAdd}
                        onChange={this.onChange}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col s={6}>
                      <label className='edit-label'><FontAwesomeIcon className='add-form-icon' icon={faHospitalSymbol} /> Nearest Hospital Name</label>
                      <input
                        className='edit-input' 
                        type='text'
                        maxLength='50'
                        name='hospitalName'
                        value={this.state.property.hospitalName}
                        onChange={this.onChange}
                      />
                    </Col>
                    <Col s={6}>
                      <label className='edit-label'>Address</label>
                      <input
                        className='edit-input' 
                        type='text'
                        maxLength='50'
                        name='hospitalAdd'
                        value={this.state.property.hospitalAdd}
                        onChange={this.onChange}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col s={6}>
                      <label className='edit-label'><FontAwesomeIcon className='add-form-icon' icon={faStethoscope} /> Nearest Urgent Care Name</label>
                      <input
                        className='edit-input' 
                        type='text'
                        maxLength='50'
                        name='urgentCareName'
                        value={this.state.property.urgentCareName}
                        onChange={this.onChange}
                      />
                    </Col>
                    <Col s={6}>
                      <label className='edit-label'>Address</label>
                      <input
                        className='edit-input' 
                        type='text'
                        maxLength='50'
                        name='urgentCareAdd'
                        value={this.state.property.urgentCareAdd}
                        onChange={this.onChange}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col s={6}>
                      <label className='edit-label'><FontAwesomeIcon className='add-form-icon' icon={faAddressCard} /> Neighbor Name</label>
                      <input
                        className='edit-input' 
                        type='text'
                        maxLength='75'
                        name='neighbor1Name'
                        value={this.state.property.neighbor1Name}
                        onChange={this.onChange}
                      />
                    </Col>
                    <Col s={6}>
                      <label className='edit-label'>Phone</label>
                      <input
                        className='edit-input' 
                        type='text'
                        maxLength='14'
                        name='neighbor1Phone'
                        value={this.state.property.neighbor1Phone}
                        onChange={this.onChange}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col s={6}>
                      <label className='edit-label'><FontAwesomeIcon className='add-form-icon' icon={faAddressCard} /> Neighbor Name</label>
                      <input
                        className='edit-input' 
                        type='text'
                        maxLength='75'
                        name='neighbor2Name'
                        value={this.state.property.neighbor2Name}
                        onChange={this.onChange}
                      />
                    </Col>
                    <Col s={6}>
                      <label className='edit-label'>Phone</label>
                      <input
                        className='edit-input' 
                        type='text'
                        maxLength='14'
                        name='neighbor2Phone'
                        value={this.state.property.neighbor2Phone}
                        onChange={this.onChange}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col s={6}>
                      <label className='edit-label'><FontAwesomeIcon className='add-form-icon' icon={faAddressCard} /> Neighbor Name</label>
                      <input
                        className='edit-input' 
                        type='text'
                        maxLength='75'
                        name='neighbor3Name'
                        value={this.state.property.neighbor3Name}
                        onChange={this.onChange}
                      />
                    </Col>
                    <Col s={6}>
                      <label className='edit-label'>Phone</label>
                      <input
                      className='edit-input' 
                        type='text'
                        maxLength='14'
                        name='neighbor3Phone'
                        value={this.state.property.neighbor3Phone}
                        onChange={this.onChange}
                      />
                    </Col>
                  </Row>
                  <Row>
                  <Col s={4}>
                    <label className='edit-label'><FontAwesomeIcon className='add-form-icon' icon={faWarehouse} /> Homeowners Association Name</label>
                    <input
                      className='edit-input' 
                      type='text'
                      maxLength='50'
                      name='hoaName'
                      value={this.state.property.hoaName}
                      onChange={this.onChange}
                    />
                  </Col>
                  <Col s={4}>
                    <label className='edit-label'>Phone</label>
                    <input
                      className='edit-input' 
                      type='text'
                      maxLength='14'
                      name='hoaPhone'
                      value={this.state.property.hoaPhone}
                      onChange={this.onChange}
                    />
                  </Col>
                  <Col s={4}>
                    <label className='edit-label'>Website</label>
                    <input
                      className='edit-input' 
                      type='text'
                      maxLength='50'
                      name='hoaWebsite'
                      value={this.state.property.hoaWebsite}
                      onChange={this.onChange}
                    />
                  </Col>
                </Row>

                </CollapsibleItem>
              </Collapsible>

              <div className='center-align'>
                <Button type='submit' onClick={this.handleFormSubmit}>
                  Submit
                </Button>
              </div>
            </div>

          </Card>
        </div>
      </div>
    )
  }
}

export default EditProperty