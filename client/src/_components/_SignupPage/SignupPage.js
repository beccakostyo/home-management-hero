import React      from 'react';
import SigninNav  from '../Navs/SigninNav';
import { Card }   from 'react-materialize';
import SignupForm from '../../_containers/SignupForm/SignupForm';

const SignupPage = () => (
  <div className='root'>
    <SigninNav />
    <div className='container'>
      <Card>
        <div id='card-content'>
          <h1 style={{ color: 'black' }}>Sign up!</h1>
          <SignupForm />
          <br /><br />
          <p className='flow-text'>Already have a login? <a href='/signin'>Click here </a>to sign in.</p>
        </div>
      </Card>
    </div>
  </div>
)
export default SignupPage;