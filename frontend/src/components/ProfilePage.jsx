import React from 'react';
import { connect } from 'react-redux';

const ProfilePage = (props) => {
  const { currentUser } = props;
  const linkedin = currentUser.linkedInUrl ? <p><strong>LinkedIn Profile:</strong> {currentUser.linkedInUrl}</p> : null;
  const bio = currentUser.bio ? <p>{currentUser.bio}</p> : null;
  const otherUrl = currentUser.otherUrl ? <p><strong>Other Link(s):</strong> {currentUser.otherUrl}</p> : null;
  const titleStyle = {
    textAlign: 'center',
    color: '#404040',
    marginTop: '20px'
  };
  const fontStyle = {
    fontFamily: 'Heebo, sans-serif',
    fontSize: '20px'
  };
  return (
    <div className='container' style={fontStyle}>
      <h2 style={titleStyle}>{currentUser.firstName} {currentUser.lastName}</h2><br/>
        {bio}
        <p><strong>Email address:</strong> {currentUser.email}</p>
        {linkedin}
        {otherUrl}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(ProfilePage);