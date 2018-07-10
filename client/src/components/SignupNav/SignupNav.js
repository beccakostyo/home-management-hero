import React from 'react';
import { Navbar, NavItem, Row, Col } from 'react-materialize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';

import './SignupNav.css';

import SigninButton from '../SigninButton/SigninButton';
import SignupButton from '../SignupButton/SignupButton';

const SigninNav = () => (
  <div className="container">
    <Navbar className="transparent-nav">
      <NavItem href="/home" className="left-float"><FontAwesomeIcon icon={faHome} size='3x' /></NavItem>
      <NavItem href="/signup" className="right-float signin-btn"><SignupButton /></NavItem>
      <NavItem href="/signin" className="right-float signin-btn"><SigninButton /></NavItem>
      <NavItem href="/contact" className="right-float">Contact</NavItem>
      <NavItem href="/help" className="right-float">Help</NavItem>
      <NavItem href="/about" className="right-float">About</NavItem>
    </Navbar>
  </div>
)

export default SigninNav;