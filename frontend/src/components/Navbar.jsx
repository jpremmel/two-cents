import React from 'react';
import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';

const Navbar = () => {
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
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <LoggedInLinks />
            <LoggedOutLinks />
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {

  };
};

export default connect(mapStateToProps)(Navbar);
