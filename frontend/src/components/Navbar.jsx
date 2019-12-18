import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand navbar-light'>
      <Link className='navbar-brand' to='/'>
        Two Cents
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavAltMarkup'
        aria-controls='navbarNavAltMarkup'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          <Link className='nav-item nav-link' to='/profile'>
            Profile
          </Link>
          <Link className='nav-item nav-link' to='/create-account'>
            Create Account
          </Link>
          <Link className='nav-item nav-link' to='/login'>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {

  }
};

export default connect(mapStateToProps)(Navbar);
