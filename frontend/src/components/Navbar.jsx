import React from 'react';
import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';

const Navbar = (props) => {
  const { currentUser } = props;
  let links = null;
  if (Object.entries(currentUser).length != 0) {
    links = <LoggedInLinks />
  } else {
    links = <LoggedOutLinks />
  }
  return (
    <nav className='navbar navbar-expand navbar-light'>
      <div className='container'>
        <NavLink className='navbar-brand' to='/'>
          Two Cents
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps)(Navbar);
