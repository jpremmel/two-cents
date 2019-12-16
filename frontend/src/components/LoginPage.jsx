import React from 'react';

const LoginPage = () => {
  return (
    <div>
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
    </div>
  );
};

export default LoginPage;