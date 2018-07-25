import React, { Component }   from 'react';
import { withRouter }         from 'react-router-dom';
import API                    from '../../utils/API';
import Dropzone               from 'react-dropzone';
import request                from 'superagent';
import { FontAwesomeIcon }    from '@fortawesome/react-fontawesome';
import { Row, 
         Input,
         Link, 
         Button, 
         Collapsible, 
         CollapsibleItem }    from 'react-materialize';
import { faTaxi, 
         faFireExtinguisher, 
         faHospitalSymbol, 
         faStethoscope, 
         faAddressCard, 
         faWarehouse,
         faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

const CLOUDINARY_UPLOAD_PRESET = process.env.CLOUDINARY_PRESET || 'is8ybozh',
      CLOUDINARY_UPLOAD_URL    = process.env.CLOUDINARY_URL    || 'https://api.cloudinary.com/v1_1/dexu8dqab/image/upload';

class AddPropertyForm extends Component {
  state = {
    homeName: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    uploadFileCloudinaryUrl: '',
    policeDeptName: '',
    policeDeptPhone: '',
    policeDeptAdd: '',
    fireDeptName: '',
    fireDeptPhone: '',
    fireDeptAdd: '',
    hoaName: '',
    hoaPhone: '',
    neighbor1Name: '',
    neighbor1Phone: '',
    neighbor2Name: '',
    neighbor2Phone: '',
    neighbor3Name: '',
    neighbor3Phone: ''
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  loadProperties = () => {
    API.get()
      .then(res =>
        this.setState({
          properties: res.data,
          homeName: '',
          streetAddress: '',
          city: '',
          state: '',
          zipCode: '',
          phone: '',
          image: '',
          policeDeptName: '',
          policeDeptPhone: '',
          policeDeptAdd: '',
          fireDeptName: '',
          fireDeptAdd: '',
          hospitalName: '',
          hospitalAdd: '',
          urgentCareName: '',
          urgentCareAdd: '',
          hoaName: '',
          hoaPhone: '',
          hoaWebsite: '',
          neighbor1Name: '',
          neighbor1Phone: '',
          neighbor2Name: '',
          neighbor2Phone: '',
          neighbor3Name: '',
          neighbor3Phone: ''
        }),
        this.props.history.push('/dash'),
    )
      .catch(err => console.log(err))
  };

  // Simple function to make sure all required fields have been populated //
  checkValidation() {
    if (this.state.homeName && 
        this.state.streetAddress && 
        this.state.city && 
        this.state.state && 
        this.state.zipCode) {
      return true
    };
  };

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
        image: this.state.uploadFileCloudinaryUrl,
        policeDeptName: this.state.policeDeptName,
        policeDeptPhone: this.state.policeDeptPhone,
        policeDeptAdd: this.state.policeDeptAdd,
        fireDeptName: this.state.fireDeptName,
        fireDeptAdd: this.state.fireDeptAdd,
        hospitalName: this.state.hospitalName,
        hospitalAdd: this.state.hospitalAdd,
        urgentCareName: this.state.urgentCareName,
        urgentCareAdd: this.state.urgentCareAdd,
        hoaName: this.state.hoaName,
        hoaPhone: this.state.hoaName,
        hoaWebsite: this.state.hoaWebsite,
        neighbor1Name: this.state.neighbor1Name,
        neighbor1Phone: this.state.neighbor1Phone,
        neighbor2Name: this.state.neighbor2Name,
        neighbor2Phone: this.state.neighbor2Phone,
        neighbor3Name: this.state.neighbor3Name,
        neighbor3Phone: this.state.neighbor3Phone
      })
        .then(res =>
          this.loadProperties(),
      )
        .catch(err => console.log(err))
    };
  };

  // Image upload logic //
  // Tried to do this in a separate file and import it in to clean up code, but couldn't get it to work //
  onImageDrop(files) {
    this.setState({uploadedFiles: files[0]})
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
      <div>

        <Collapsible defaultActiveKey={0} accordion>
          <CollapsibleItem header={<p className='flow-text collapsible-header-add-property'><strong>Basic Information</strong></p>}>
            <div className='add-property-form-container'>

              <Row>
                <Input
                  s={12}
                  type='text'
                  maxLength='25'
                  name='homeName'
                  label='* Property Name'
                  value={this.state.homeName}
                  onChange={this.handleInputChange}
                  data-success='win'
                />
                <Input
                  s={12}
                  type='text'
                  name='streetAddress'
                  maxLength='50'
                  label='* Street Address'
                  value={this.state.streetAddress}
                  onChange={this.handleInputChange}
                />
                <Input
                  s={6}
                  type='text'
                  name='city'
                  label='* City'
                  value={this.state.city}
                  onChange={this.handleInputChange}
                />
                <Input
                  s={3}
                  type='text'
                  maxLength='2'
                  name='state'
                  label='* State'
                  value={this.state.state}
                  onChange={this.handleInputChange}
                />
                <Input
                  s={3}
                  type='text'
                  pattern='[0-9]{5}'
                  name='zipCode'
                  label='* Zip'
                  value={this.state.zipCode}
                  onChange={this.handleInputChange}
                />
                <Input
                  s={6}
                  type='tel'
                  maxLength='14'
                  name='phone'
                  label='Phone Number'
                  value={this.state.phone}
                  onChange={this.handleInputChange}
                />
              </Row>

              <Row>
                <div className='pic-preview'>
                  {this.state.uploadFileCloudinaryUrl === '' ? null :
                    <div>
                      <img value={this.state.image} src={this.state.uploadFileCloudinaryUrl} alt='Home' />
                    </div>}
                </div>
                <div className='dropzone-div'>
                  <Dropzone
                    className='dropzone'
                    multiple={false}
                    accept='image/*'
                    onDrop={this.onImageDrop.bind(this)}>
                    <p className='dropzone-guidance flow-text'>Click <strong>here</strong> to select a picture to upload.</p>
                  </Dropzone>
                </div>
              </Row>

            </div>
          </CollapsibleItem>

          <CollapsibleItem  header={<p className='flow-text collapsible-header-add-property'><strong>Important Contacts</strong></p>}>

            <Row>
              <h6 className='contact-form-subheader'><FontAwesomeIcon className='add-form-icon' icon={faTaxi} />   Nearest Police Department</h6>
              <Input
                s={4}
                type='text'
                maxLength='50'
                name='policeDeptName'
                label='Name'
                value={this.state.policeDeptName}
                onChange={this.handleInputChange}
              />
              <Input
                s={4}
                type='text'
                maxLength='50'
                name='policeDeptPhone'
                label='Phone'
                value={this.state.policeDeptPhone}
                onChange={this.handleInputChange}
              />
              <Input
                s={4}
                type='text'
                maxLength='50'
                name='policeDeptAdd'
                label='Address'
                value={this.state.policeDeptAdd}
                onChange={this.handleInputChange}
              />
            </Row>

            <Row>
              <h6 className='contact-form-subheader'><FontAwesomeIcon className='add-form-icon' icon={faFireExtinguisher} /> Nearest Fire Department</h6>
              <Input
                s={6}
                type='text'
                maxLength='50'
                name='fireDeptName'
                label='Name'
                value={this.state.fireDeptName}
                onChange={this.handleInputChange}
              />
              <Input
                s={6}
                type='text'
                maxLength='50'
                name='fireDeptAdd'
                label='Address'
                value={this.state.fireDeptAdd}
                onChange={this.handleInputChange}
              />
            </Row>

            <Row>
              <h6 className='contact-form-subheader'><FontAwesomeIcon className='add-form-icon' icon={faHospitalSymbol} /> Nearest Hospital</h6>
              <Input
                s={6}
                type='text'
                maxLength='50'
                name='hospitalName'
                label='Name'
                value={this.state.hospitalName}
                onChange={this.handleInputChange}
              />
              <Input
                s={6}
                type='text'
                maxLength='50'
                name='hospitalAdd'
                label='Address'
                value={this.state.hospitalAdd}
                onChange={this.handleInputChange}
              />
            </Row>

            <Row>
              <h6 className='contact-form-subheader'><FontAwesomeIcon className='add-form-icon' icon={faStethoscope} /> Nearest Urgent Care</h6>
              <Input
                s={6}
                type='text'
                maxLength='50'
                name='urgentCareName'
                label='Name'
                value={this.state.urgentCareName}
                onChange={this.handleInputChange}
              />
              <Input
                s={6}
                type='text'
                maxLength='50'
                name='urgentCareAdd'
                label='Address'
                value={this.state.urgentCareAdd}
                onChange={this.handleInputChange}
              />
            </Row>

            <Row>
              <h6 className='contact-form-subheader'><FontAwesomeIcon className='add-form-icon' icon={faAddressCard} /> Neighbor Information</h6>
              <Input
                s={6}
                type='text'
                maxLength='75'
                name='neighbor1Name'
                label='Name(s)'
                value={this.state.neighbor1Name}
                onChange={this.handleInputChange}
              />
              <Input
                s={6}
                type='text'
                maxLength='14'
                name='neighbor1Phone'
                label='Phone'
                value={this.state.neighbor1Phone}
                onChange={this.handleInputChange}
              />
            </Row>

            <Row>
              <Input
                s={6}
                type='text'
                maxLength='75'
                name='neighbor2Name'
                label='Name(s)'
                value={this.state.neighbor2Name}
                onChange={this.handleInputChange}
              />
              <Input
                s={6}
                type='text'
                maxLength='14'
                name='neighbor2Phone'
                label='Phone'
                value={this.state.neighbor2Phone}
                onChange={this.handleInputChange}
              />
            </Row>

            <Row>
              <Input
                s={6}
                type='text'
                maxLength='75'
                name='neighbor3Name'
                label='Name(s)'
                value={this.state.neighbor3Name}
                onChange={this.handleInputChange}
              />
              <Input
                s={6}
                type='text'
                maxLength='14'
                name='neighbor3Phone'
                label='Phone'
                value={this.state.neighbor3Phone}
                onChange={this.handleInputChange}
              />
            </Row>
            <Row>
              <h6 className='contact-form-subheader'><FontAwesomeIcon className='add-form-icon' icon={faWarehouse} /> Homeowners Association</h6>
              <Input
                s={4}
                type='text'
                maxLength='50'
                name='hoaName'
                label='Name'
                value={this.state.hoaName}
                onChange={this.handleInputChange}
              />
              <Input
                s={4}
                type='text'
                maxLength='50'
                name='hoaPhone'
                label='Phone'
                value={this.state.hoaPhone}
                onChange={this.handleInputChange}
              />
              <Input
                s={4}
                type='text'
                maxLength='50'
                name='hoaWebsite'
                label='Website'
                value={this.state.hoaWebsite}
                onChange={this.handleInputChange}
              />
            </Row>


          </CollapsibleItem>
        </Collapsible>
        
        <div className='center-align'>
          <Button type='submit' onClick={this.handleFormSubmit}>
            Submit
          </Button>
        </div>
        <br/>
      </div>
    )
  }
}

export default withRouter(AddPropertyForm);