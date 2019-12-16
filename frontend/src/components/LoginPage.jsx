import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

const LoginPage = () => {
  return (
    <div>
      <h3>Log in</h3>
      <form>
        <input type='text' placeholder='Email address' className='form-control' required='required' />
        <br />
        <input type='password' placeholder='Password' className='form-control' required='required' />
        <br />
        <button type='submit' className='btn btn-light'>Log in</button>
      </form>
    </div>
  );
};

LoginPage.propTypes = {
  dispatch: PropTypes.func
};

//mapDispatchToProps?

export default connect()(LoginPage);