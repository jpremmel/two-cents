import React from 'react';

const HomePage = () => {

  const alternatingDivStyle = {
    backgroundColor: '#ececeb'
  };
  const blueFont = {
    color: '#1f3c88',
    fontFamily: 'Heebo, sans-serif',
    fontWeight: 'bold'
  };
  const greyFont = {
    color: '#404040',
    fontFamily: 'Heebo, sans-serif'
  };
  const div1 = {
    paddingTop: '50px',
    paddingBottom: '50px',
    paddingLeft: '30px',
    paddingRight: '30px'
  };
  const div2 = {
    textAlign: 'right',
    paddingTop: '60px',
    paddingBottom: '60px'

  };
  const div3 = {
    paddingTop: '60px',
    paddingBottom: '60px'
  };
  const widthStyle = {
    maxWidth: '1024px'
  };
  return (
    <div>
      <div style={alternatingDivStyle}>
        <div className='container' style={div1}>
          <h1 style={blueFont}>Welcome</h1>
        </div>
      </div>
      <div className='container' style={div2}>
      <div className='row' style={widthStyle}>
        <div className='col-sm-6'>
        <p>[Image will go here]</p>
        </div>
        <div className='col-sm-6'>
          <h3 style={greyFont}>Looking for an expert?</h3>
          <h3 style={blueFont}>Find one here.</h3>
        </div>
      </div>
      </div>
      <div style={alternatingDivStyle}>
        <div className='container' style={div3}>
          <h3 style={greyFont}>Already an expert?</h3>
          <h3 style={blueFont}>A penny for your thoughts.</h3>
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;