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
    const titleStyle = {
      textAlign: 'center',
      fontFamily: 'Heebo, sans-serif',
      color: '#404040'
    };
    const formWidth = {
      width: '70%',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto'
    };
    const inputStyle = {
      marginBottom: '15px'
    };
    const btnStyle = {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      fontFamily: 'Heebo, sans-serif'
    };
    return (
      <div className='container'>
        <h2 style={titleStyle}>Create An Account</h2><br/>
        <form onSubmit={this.handleSubmit} style={formWidth}>
          <input 
            id='firstName'
            type='text' 
            placeholder='First name' 
            className='form-control' 
            required='required'
            style={inputStyle}
            onChange={this.handleChange} />
          <input 
            id='lastName'
            type='text' 
            placeholder='Last name' 
            className='form-control' 
            required='required'
            style={inputStyle}
            onChange={this.handleChange} />
          <input 
            id='email'
            type='text' 
            placeholder='Email address' 
            className='form-control' 
            required='required'
            style={inputStyle}
            onChange={this.handleChange} />
          <input 
            id='password'
            type='password' 
            placeholder='Password' 
            className='form-control' 
            required='required'
            style={inputStyle}
            onChange={this.handleChange} />
          <input 
            id='linkedin'
            type='text' 
            placeholder='LinkedIn URL' 
            className='form-control'
            style={inputStyle}
            onChange={this.handleChange} />
          <input 
            id='otherUrl'
            type='text' 
            placeholder='Other URL (ie. personal website, portfolio)' 
            className='form-control'
            style={inputStyle}
            onChange={this.handleChange} />
          <textarea 
            id='bio'
            type='text' 
            placeholder='Say a bit about yourself' 
            className='form-control'
            style={inputStyle}
            onChange={this.handleChange} />
          <button className='btn btn-light' style={btnStyle}>Create Account</button>
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