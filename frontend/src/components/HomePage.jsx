import React from 'react';
import Conversation from '../images/conversation.png';
import Path from '../images/career-path-flag.png';
import SpeechBubble from '../images/one-speech-bubble.png';

const HomePage = () => {

  const alternatingDivStyle = {
    backgroundColor: '#ececeb'
  };
  const titleGrey = {
    color: '#404040',
    fontFamily: 'Heebo, sans-serif',
    fontSize: '70px'
  };
  const titleBlue = {
    color: '#1f3c88',
    fontFamily: 'Heebo, sans-serif',
    fontWeight: 'bold',
    fontSize: '70px'
  };
  const blueFont = {
    color: '#1f3c88',
    fontFamily: 'Heebo, sans-serif',
    fontWeight: 'bold',
    fontSize: '60px'
  };
  const greyFont = {
    color: '#404040',
    fontFamily: 'Heebo, sans-serif',
    fontSize: '60px'
  };
  const largestBlue = {
    color: '#1f3c88',
    fontFamily: 'Heebo, sans-serif',
    fontWeight: 'bold',
    fontSize: '90px'
  };
  const div1 = {
    paddingTop: '80px',
    paddingBottom: '80px',
    paddingLeft: '30px',
    paddingRight: '30px'
  };
  const div2 = {
    textAlign: 'left',
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
  const imgStyle = {
    width: '70%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  };
  return (
    <div>
      <div style={alternatingDivStyle}>
        <div className='container' style={div1}>
          <div className='row' style={widthStyle}>
            <div className='col-sm-6'>
              <h1 style={titleGrey}>Where <span style={titleBlue}>mentors</span></h1>
              <h1 style={titleGrey}>and <span style={titleBlue}>mentees</span></h1>
              <h1 style={largestBlue}>meet</h1>
            </div>
            <div className='col-sm-6'>
              <img src={Conversation} style={imgStyle}/>
            </div>
          </div>
        </div>
      </div>

      <div className='container' style={div2}>
        <div className='row' style={widthStyle}>
          <div className='col-sm-6'>
          <img src={Path} style={imgStyle}/>
          </div>
          <div className='col-sm-6'>
            <h3 style={greyFont}>Looking for an expert?</h3>
            <h3 style={blueFont}>Find one here.</h3>
          </div>
        </div>
      </div>

      <div style={alternatingDivStyle}>
        <div className='container' style={div3}>
          <div className='row' style={widthStyle}>
            <div className='col-sm-6'>
              <h3 style={greyFont}>Already an expert?</h3>
              <h3 style={blueFont}>A penny for your thoughts.</h3>
            </div>
            <div className='col-sm-6'>
            <img src={SpeechBubble} style={imgStyle}/>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;