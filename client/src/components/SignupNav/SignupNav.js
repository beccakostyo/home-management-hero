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
      <NavItem className="left-float"><FontAwesomeIcon icon={faHome} size='3x' /></NavItem>
      <NavItem className="right-float signin-btn"><SignupButton /></NavItem>
      <NavItem className="right-float signin-btn"><SigninButton /></NavItem>
      <NavItem className="right-float">Contact</NavItem>
      <NavItem className="right-float">Help</NavItem>
      <NavItem className="right-float">About</NavItem>
    </Navbar>
  </div>
)

export default SigninNav;