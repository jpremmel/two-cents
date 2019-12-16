import React from 'react';

const CreateAcctPage = () => {
  return (
    <div>
      <h3>Create An Account</h3>
      <form>
        <input type='text' placeholder='First name' className='form-control' required='required' />
        <br />
        <input type='text' placeholder='Last name' className='form-control' required='required' />
        <br />
        <input type='text' placeholder='Email address' className='form-control' required='required' />
        <br />
        <input type='password' placeholder='Password' className='form-control' required='required' />
        <br />
        <input type='text' placeholder='LinkedIn URL' className='form-control' />
        <br />
        <input type='text' placeholder='Other URL (ie. personal website, portfolio)' className='form-control' />
        <br />
        <textarea type='text' placeholder='Say a bit about yourself' className='form-control' />
        <br />
        <button type='submit' className='btn btn-light'>Create Account</button>
      </form>
    </div>
  );
};

export default CreateAcctPage;