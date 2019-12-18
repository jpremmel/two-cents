import React from 'react';
import { connect } from 'react-redux';

const ProfilePage = (props) => {
  const { currentUser } = props;
  const linkedin = currentUser.linkedInUrl ? <p><strong>LinkedIn Profile:</strong> {currentUser.linkedInUrl}</p> : null;
  const bio = currentUser.bio ? <p>{currentUser.bio}</p> : null;
  const otherUrl = currentUser.otherUrl ? <p><strong>Other Link(s):</strong> {currentUser.otherUrl}</p> : null;
  return (
    <div>
      <h3>{currentUser.firstName} {currentUser.lastName}</h3>
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