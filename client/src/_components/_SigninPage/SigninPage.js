import React      from 'react';
import SignupNav  from '../Navs/SignupNav';
import { Card }   from 'react-materialize';
import SigninForm from '../../_containers/SigninForm/SigninForm';

const SigninPage = () => (
  <div className='root'>
    <SignupNav />
    <div className='container'>
      <Card>
        <div id='card-content'>
          <h1 style={{ color: 'black' }}>Sign In!</h1>
          <SigninForm />
          <br /><br />
          <p className='flow-text'>Don't have a login yet? <a href='/signup'>Click here </a>to create one.</p>
        </div>
      </Card>
    </div>
  </div>
)

export default SigninPage;