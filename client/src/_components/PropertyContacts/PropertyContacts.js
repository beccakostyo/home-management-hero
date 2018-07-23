import React, { Component } from 'react';
import { Collapsible, CollapsibleItem, Button, Modal } from 'react-materialize';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

import AddContactsForm from '../../_containers/AddContactsForm/AddContactsForm';

class PropertyContacts extends Component {
  state = {
    propertyContacts: [],
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
  }


  render() {
    return (
      <Collapsible>
        <CollapsibleItem
          header={<p className="flow-text">Contacts<span><FontAwesomeIcon icon={faAngleDoubleDown} className='expand-icon' /></span></p>}
          className='collapsible-item'>
          {this.state.propertyContacts.length ? (
            <div>
              {this.state.propertyContacts.map(propertyContact => (
                <h1>{propertyContact.neighbor1Name}</h1>
              ))
              }
            </div>
          ) :
            <div>
              <div className='left-align'>
                <p className='flow-text'>Contacts for this property have not been added yet. Click the button below to add contacts for this property</p>
                <Modal
                  header='Modal Header'
                  fixedFooter
                  trigger={<Button floating large className='add-button' id='add-button' waves='light'><FontAwesomeIcon icon={faPlus} className='add-icon' /></Button>}>
                  <AddContactsForm />
                </Modal>              
              </div>
            </div>

          }
        </CollapsibleItem>
      </Collapsible>
    )
  }
}

export default PropertyContacts