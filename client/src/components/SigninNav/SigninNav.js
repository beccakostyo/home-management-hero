import React from 'react';
import { Navbar, NavItem, Row, Col } from 'react-materialize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';

import './SigninNav.css';

import SigninButton from '../SigninButton/SigninButton';
import SignupButton from '../SignupButton/SignupButton';
import LearnMoreButton from '../LearnMoreButton/LearnMoreButton';
import CopyrightFooter from '../CopyrightFooter/CopyrightFooter';


const SignupNav = () => (
  <div class="container">
    <Navbar className="transparent-nav">
      <NavItem className="left-float"><FontAwesomeIcon icon={faHome} size='3x' /></NavItem>
      <NavItem className="right-float signin-btn"><SigninButton /></NavItem>
      <NavItem className="right-float">About</NavItem>
      <NavItem className="right-float">Use Cases</NavItem>
      <NavItem className="right-float">Help</NavItem>
    </Navbar>
    <Row>
      <Col s={12} m={8} l={9} className="grid-example">
        <h1 className="app-title">Home Management Hero</h1>
      </Col>
    </Row>
    <Row>
      <Col s={12} m={9} l={6} className="app-blurb-col">
        <p className="flow-text">An app to help you simply and effortlessly manage your real estate properties.</p>
      </Col>
    </Row>
    <Row>
      <Col s={4} m={2} l={2}>
        <SignupButton/>
      </Col>
      <Col s={5} m={3} l={3}>
        <LearnMoreButton/>
      </Col>
    </Row>
  </div>
)

export default SignupNav;