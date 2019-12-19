import React from 'react';
import { connect } from 'react-redux';
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
    this.props.attemptLogin(this.state);
  }

  render() {
    const titleStyle = {
      textAlign: 'center',
      fontFamily: 'Heebo, sans-serif',
      color: '#404040',
      marginTop: '20px'
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
        <h2 style={titleStyle}>Log in</h2><br/>
        <form onSubmit={this.handleSubmit} style={formWidth}>
          <input 
            id='email'
            type='email' 
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
          <button className='btn btn-light' style={btnStyle}>Log in</button>
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