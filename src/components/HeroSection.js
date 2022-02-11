import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='home' id='home'>
      <div className='max-width'>
        <div className='column left'>
          <div className='text-1'>Hello, my name is,</div>
          <div className='text-2'>Isaac maina</div>
          <div className='text-3'>And I'm a <span></span></div>
          <div className='btn-0'>
            <a href='#Contact'>Hire Me</a>
          </div>
        </div>
        <div className='column right'>
            <img src='/images/setup.jpg' alt='me'/>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

