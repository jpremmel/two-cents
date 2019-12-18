import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions';

const LoggedInLinks = (props) => {
  return(
    <div>
      {/* <NavLink className='nav-item nav-link' to='/browse'>
        Browse Suggestions
      </NavLink> */}
      <NavLink className='nav-item nav-link' to='/profile'>
        My Profile
      </NavLink>
      <a className='nav-item nav-link' onClick={props.logout}>
        Logout
      </a>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(LoggedInLinks);