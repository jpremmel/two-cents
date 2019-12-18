import React from 'react';
import { NavLink } from 'react-router-dom';

const LoggedOutLinks = () => {
  return(
    <div>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
        <NavLink className='nav-item nav-link' to='/create-account'>
            Create Account
        </NavLink>
        <NavLink className='nav-item nav-link' to='/login'>
            Log In
        </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LoggedOutLinks;