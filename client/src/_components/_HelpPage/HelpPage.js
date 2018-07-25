import React from 'react';
import { Card, Row, Col } from 'react-materialize';
import SignupNav from '../Navs/SignupNav'
import GuidancePic1 from '../../assets/images/signup_signin_guidance.png'
import GuidancePic2 from '../../assets/images/add_property_guidance.png'


const HelpPage = () => (
  <div className='app'>
    <SignupNav />
    <div className='container'>
      <Card>
        <div id='card-content'>
          <div className='center-align'>
            <h3>Help!</h3>
            <h4>How to use Home Management Hero</h4>
          </div>

          <Row>
            <Col s={8} m={9}>
              <p className='flow-text'>
                <br />
                <strong>Step 1: </strong>Sign in or sign up!
                <br /><br />
                To start using Home Management Hero, you must first have a login set up. From the homepage 
                or from the navigation bar at the top of the page, click "Sign in" if you have a log in or 
                "Sign up" if you need to create one!
            </p>
            </Col>
            <Col s={4} m={3}>
              <br /><br /><br />
              <div className="center-align">
                <img className="guidance-pic materialboxed" alt="Home Page Guidance" src={GuidancePic1} />
                <p><strong>Step 1 Guidance</strong></p>
                <p>(click to enlarge)</p>
              </div>
            </Col>
          </Row>
          
          <Row>
          <Col s={8} m={9}>
            <p className='flow-text'>
              <strong>Step 2:</strong> Add your first Property<br />
              <br />
              Once you have created a username and password or have signed back in to your account, you will 
              be directed to the main dashboard. If you have not created any properties, it will be clearly displayed 
              on the dashboard and will direct you to click on the "+" button to add your first property.
              <br/><br/>
              If you have existing properties, the same "+" button will appear at the bottom of the page. You may 
              click it and add additional properties as needed. 
            </p>
          </Col>
          <Col s={4} m={3}>
              <div className="center-align">
                <img className="guidance-pic materialboxed" alt="Add Property Guidance" src={GuidancePic2} />
                <p><strong>Step 2 Guidance</strong></p>
                <p>(click to enlarge)</p>
              </div>
            </Col>
            </Row>
        </div>
      </Card>
    </div>
    </div>
    )
    
export default HelpPage;