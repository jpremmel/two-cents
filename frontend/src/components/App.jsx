import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import HomePage from './HomePage';
import CreateAcctPage from './CreateAcctPage';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';
import EditProfilePage from './EditProfilePage';

const App = () => {
  return (
    <div>
      <Navbar />
        <Switch>
          <Route exact path='/' render={() => <HomePage />} />
          <Route path='/create-account' render={() => <CreateAcctPage />} />
          <Route path='/login' render={() => <LoginPage />} />
          <Route path='/profile' render={() => <ProfilePage />} />
        </Switch>
    </div>
  );
};

export default App;
