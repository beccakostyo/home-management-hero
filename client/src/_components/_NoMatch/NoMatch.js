import React from 'react';
import SignupNav from '../Navs/SignupNav';

const NoMatch = () => (
  <div className='app'>
    <SignupNav />
    <div className='container'>
      <div id='card-content' className='center-align'>
        <h3 className='no-match'>Uh oh! This page doesn't exist...</h3>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1>
        <a href='/home'><h4 className='no-match'>Click here to return to Home</h4></a>
      </div>
    </div>
  </div>
);

export default NoMatch;
