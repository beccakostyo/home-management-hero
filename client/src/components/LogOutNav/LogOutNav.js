import React from 'react';
import { Navbar, NavItem, Button } from 'react-materialize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';

import './LogOutNav.css';

const LogOutNav = () => (
  <div className="container">
    <Navbar className="transparent-nav">
      <NavItem href="/home" className="left-float"><FontAwesomeIcon icon={faHome} size='3x' href="/home"/></NavItem>
      <NavItem className="right-float signin-btn"><Button>Log Out</Button></NavItem>
      <NavItem href="/contact" className="right-float">Contact</NavItem>
      <NavItem href="/help" className="right-float">Help</NavItem>
      <NavItem href="/about" className="right-float">About</NavItem>
    </Navbar>
  </div>
)

export default LogOutNav;