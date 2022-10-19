import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css';
import BSALogo from "./bsa-logo.png"


const NavBar = () => {
  return (
    <nav className='navbar-main'>
      <div className="navbar-logoname-container">
        <Link 
          to='/' 
          exact={true}
          className="navbar-logo-link-wrapper" 
        >
          <img className='navbar-logo' 
            src={ BSALogo } 
            alt="Boy Scouts of America logo" 
          />
          <h2 className='navbar-troopname'>Troop 27 - Glen Rock</h2>
        </Link>
      </div>
      <div className='navbar-link-container'>
        <div className='navbar-link'>
         
        </div>
        <div className='navbar-link'>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </div>
        <div className='navbar-link'>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </div>
        <div className='navbar-link'>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </div>
        <div className='navbar-link'>
          <LogoutButton />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
