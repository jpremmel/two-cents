import React from 'react';
import { NavLink } from 'react-router-dom';

const LoggedOutLinks = () => {
  const navLinkStyle = {
    fontFamily: 'Heebo, sans-serif',
    fontSize: '20px'
  };
  return(
    <div>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
        <NavLink className='nav-item nav-link' to='/create-account' style={navLinkStyle}>
            Create Account
        </NavLink>
        <NavLink className='nav-item nav-link' to='/login' style={navLinkStyle}>
            Log In
        </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LoggedOutLinks;