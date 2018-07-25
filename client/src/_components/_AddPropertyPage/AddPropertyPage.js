import React                   from 'react';
import { Link }                from 'react-router-dom';
import { Card }                from 'react-materialize';
import AddPropertyForm         from '../../_containers/AddPropertyForm';
import LogOutNav               from '../Navs/LogOutNav';
import { FontAwesomeIcon }     from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

const AddPropertyPage = () => (
  <div className='app'>
    <LogOutNav />
    <div className='container'>
      <Card>
        <div id='card-content'>
          <Link to='/dash'><FontAwesomeIcon icon={faChevronCircleLeft} /> Return to Dashboard</Link>
          <div className='center-align'>
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
        </div>
      </Card>
    </div>
  </div>
)

export default AddPropertyPage;