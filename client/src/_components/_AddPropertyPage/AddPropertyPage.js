import React           from 'react';
import { Card }        from 'react-materialize';
import SignupNav       from '../Navs/SignupNav'
import AddPropertyForm from '../../_containers/AddPropertyForm';

const AddPropertyPage = () => (
  <div className='app'>
    <SignupNav />
    <div className='container'>
      <Card>
        <div className='center-align' id='card-content'>
          <h1 className='add-prop-header'>Add a new property</h1>
          <p className='flow-text'>
            Start with the basics...enter in a name for your property, the address, and the phone number. You may also upload a picture if you choose!
          <br /><br />
            Then, click the "Important Contacts" label and enter in more info there.
          </p>
          <br />
          <em>* Denotes required field</em>
        </div>
        <AddPropertyForm />
      </Card>
    </div>
  </div>
)

export default AddPropertyPage;