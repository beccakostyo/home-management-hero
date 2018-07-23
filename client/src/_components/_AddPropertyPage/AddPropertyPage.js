import React from 'react';
import { Card } from 'react-materialize';
import SignupNav from '../Navs/SignupNav'
import AddPropertyForm from '../../_containers/AddPropertyForm';

const AddPropertyPage = () => (
  <div className='container'>
    <SignupNav />
    <Card>
      <div className='center-align' id="card-content">
        <h1 className='add-prop-header'>Add a new property</h1>
        <p className='flow-text'>
          Start with the basics...enter in a name for your property, the address, and the phone number. You may also upload a picture if you choose!
        </p>
        <br/>
        <p><em>* Denotes required field</em></p>
        </div>
        <AddPropertyForm/>
    </Card>
  </div>
)

export default AddPropertyPage;