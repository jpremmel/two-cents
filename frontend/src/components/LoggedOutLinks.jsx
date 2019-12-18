import React from 'react';
import { NavLink } from 'react-router-dom';

const LoggedOutLinks = () => {
  return(
    <div>
        <NavLink className='nav-item nav-link' to='/create-account'>
            Create Account
        </NavLink>
        <NavLink className='nav-item nav-link' to='/login'>
            Log In
        </NavLink>
    </div>
  );
};

export default LoggedOutLinks;