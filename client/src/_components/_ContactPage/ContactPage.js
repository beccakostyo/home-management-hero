import React from 'react';
import { Card, Row, Col } from 'react-materialize';
import SignupNav from '../Navs/SignupNav'

const ContactPage = () => (
  <div className='app'>
    <SignupNav />
    <div className='container'>
      <Card>
        <div id='card-content'>
          <div className='center-align'>
            <h3>Contact Page</h3>
            <Row>
              <Col s={12} m={12}>
                <p className='flow-text'>
                  If you have a question or a comment about Home Management Hero, fill out the form below and click submit!
              </p>
              </Col>
            </Row>
            <Row>
              <Input s={6} label="First Name" validate><Icon id="email-icon">account_circle</Icon></Input>
              <Input s={6} label="Email" validate type='email'><Icon id="email-icon">mail</Icon></Input>
            </Row>
            <Row>
              <Input s={12} type="textarea" label="Enter feedback/questions here!"><Icon id="create">create</Icon></Input>
            </Row>
            <Button
              type="submit"
              submit>Submit
            </Button>
          </div>
        </div>
      </Card>
    </div>
  </div>
)

export default ContactPage;