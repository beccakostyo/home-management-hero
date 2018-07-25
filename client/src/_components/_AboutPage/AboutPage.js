import React               from 'react';
import { Card, Row, Col }  from 'react-materialize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointUp }   from '@fortawesome/free-solid-svg-icons';
import SignupNav           from '../Navs/SignupNav';
import portrait            from '../../assets/images/portrait.jpg';

const AboutPage = () => (
  <div className='app'>
    <SignupNav />
    <div className='container'>
      <Card>
        <div id='card-content'>
          <div className='center-align'>
            <h3>About Home Management Hero</h3>
          </div>
          <Row>
            <Col s={8} m={9}>
              <p className='flow-text'>
                <br />
                <strong>Who?</strong>
                <br />
                This app was created by me, Becca Kostyo. I created this project for and used this project as my
                'Final Project' for the University of Denver Coding Bootcamp.
              </p>
            </Col>
            <Col s={4} m={3}>
              <div className='center-align'>
                <img className='bk-image responsive-img circle' src={portrait} alt='Becca Kostyo Portrait' />
                <p className='flow-text'>
                  ( Me <FontAwesomeIcon icon={faHandPointUp} /> )
                </p>
              </div>
            </Col>
          </Row>
          <p className='flow-text'>
            <strong>Why?</strong><br />
            These days, it seems that more and more people are investing in multiple properties. My parents, for example,
            have a house in Arizona and a house in Colorado. They visit the house in Arizona during the summer months
            (they love the heat), but rent the property out for six months of the year over the fall/winter time.
          <br /><br />
            Recently, I was visiting my father at the house in Arizona and found myself looking for something in his phone,
            only to stumble across note after note of information about the Arizona house, things that need to be done in the
            Arizona house, things that he left in Colorado, etc.
          <br /><br />
            That's when the motivation for this app came to life...I wanted to make an application that would allow people that
            have multiple properties but are not necessarily landlords or in the real estate business to quickly and easily
            get information about and 'manage' their properties. From that motivation came Home Management Hero.
          <br /><br />
            For an introduction on how to use Home Management Hero, click <a href='/help'>here</a> or visit the Help section.
          </p>
        </div>
      </Card>
    </div>
  </div>
)

export default AboutPage;