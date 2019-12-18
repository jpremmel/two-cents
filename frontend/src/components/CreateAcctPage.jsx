import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../actions';

class CreateAcctPage extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    linkedin: '',
    otherUrl: '',
    bio: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createUser(this.state);
  }

  render() {
    return (
      <div>
        <h3>Create An Account</h3>
        <form onSubmit={this.handleSubmit}>
          <input 
            id='firstName'
            type='text' 
            placeholder='First name' 
            className='form-control' 
            required='required'
            onChange={this.handleChange} />
          <input 
            id='lastName'
            type='text' 
            placeholder='Last name' 
            className='form-control' 
            required='required'
            onChange={this.handleChange} />
          <input 
            id='email'
            type='text' 
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
          <input 
            id='linkedin'
            type='text' 
            placeholder='LinkedIn URL' 
            className='form-control'
            onChange={this.handleChange} />
          <input 
            id='otherUrl'
            type='text' 
            placeholder='Other URL (ie. personal website, portfolio)' 
            className='form-control'
            onChange={this.handleChange} />
          <textarea 
            id='bio'
            type='text' 
            placeholder='Say a bit about yourself' 
            className='form-control'
            onChange={this.handleChange} />
          <button /*type='submit'*/ className='btn btn-light'>Create Account</button>
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (newUser) => dispatch(createUser(newUser))
  }
}

export default connect(null, mapDispatchToProps)(CreateAcctPage);