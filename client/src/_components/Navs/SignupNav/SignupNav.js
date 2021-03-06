import React               from 'react';
import { Navbar, NavItem } from 'react-materialize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome }          from '@fortawesome/free-solid-svg-icons/faHome';
import SigninButton        from '../../Buttons/SigninButton';
import SignupButton        from '../../Buttons/SignupButton';

// For some reason, this nav doesn't work without the styles being imported? 
import '../../../assets/styles/styles.css'

const SignupNav = () => (
  <div className='container'>
    <Navbar className='transparent-nav'>
      <NavItem href='/home' className='left-float'><FontAwesomeIcon icon={faHome} size='3x' href='/home'/></NavItem>
      <NavItem href='/signin' className='right-float signin-btn'><SigninButton /></NavItem>
      <NavItem href='/signup' className='right-float signin-btn'><SignupButton /></NavItem>
      <NavItem href='/contact' className='right-float'>Contact</NavItem>
      <NavItem href='/help' className='right-float'>Help</NavItem>
      <NavItem href='/about' className='right-float'>About</NavItem>
    </Navbar>
  </div>
)

export default SignupNav;