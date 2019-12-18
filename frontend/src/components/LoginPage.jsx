import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { attemptLogin } from '../actions';

class LoginPage extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.attemptLogin(this.state);
  }

  render() {
    return (
      <div>
        <h3>Log in</h3>
        <form onSubmit={this.handleSubmit}>
          <input 
            id='email'
            type='email' 
            placeholder='Email address' 
            className='form-control' 
            required='required'
            onChange={this.handleChange} />
          <input 
            id='password' 
            type='password' 
            placeholder='Password' 
            className='form-control' 
            required='required'
            onChange={this.handleChange} />
          <button /*type='submit'*/ className='btn btn-light'>Log in</button>
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (creds) => dispatch(attemptLogin(creds))
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);