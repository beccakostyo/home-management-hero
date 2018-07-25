import React           from 'react';
import { Row, Col }    from 'react-materialize';
import SigninNav       from '../Navs/SigninNav';
import SignupButton    from '../Buttons/SignupButton';
import LearnMoreButton from '../Buttons/LearnMoreButton';

const Home = () => (
  <div className='App'>
    <SigninNav />
    <div className='container'>
      <Row>
        <Col s={12} m={8} l={9} className='grid-example'>
          <h1 className='app-title'>Home Management Hero</h1>
        </Col>
      </Row>
      <Row>
        <Col s={12} m={9} l={6} className='app-blurb-col'>
          <p className='flow-text'>An app to help you simply and effortlessly manage your real estate properties.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href='/signup'><SignupButton /></a>
        </Col>
        <Col>
          <a href='/about'><LearnMoreButton /></a>
        </Col>
      </Row>
    </div>
  </div>
)
    
export default Home;