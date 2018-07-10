import React from 'react';
import { Row, Col } from 'react-materialize';

import SigninNav from '../../components/SigninNav/SigninNav';
import SignupButton from '../../components/SignupButton/SignupButton';
import LearnMoreButton from '../../components/LearnMoreButton/LearnMoreButton';

import "./Home.css";

const Home = () => (
  <div className="App">
    <SigninNav />
    <div class="container">
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
        <Col>
          <SignupButton />
        </Col>
        <Col>
          <LearnMoreButton />
        </Col>
      </Row>
    </div>
  </div>
)
    
export default Home;