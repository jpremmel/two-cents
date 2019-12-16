import React from 'react';

const CreateAcctPage = () => {
  return (
    <div>
      <form>
        <input type='text' placeholder='First name' className='form-control' />
        <br />
        <input type='text' placeholder='Last name' className='form-control' />
        <br />
        <input type='text' placeholder='Email address' className='form-control' />
        <br />
        <input type='password' placeholder='Password' className='form-control' />
        <br />
        <button type='submit' className='btn btn-light'>Create Account</button>
      </form>
    </div>
  );
};

export default CreateAcctPage;