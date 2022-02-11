import React from 'react';
import './About.css';

function About() {
  return (
      <div className='about' id='about'>
           <div className="max-width">
            <h2 className="title">About me</h2>
            <div className="about-content">
                <div className="column left">
                    <img src="images/image-1.jpg" alt="" />
                </div>
                <div class="column right">
                    <p>Hello I'm Isaac.A freelance software developer based in Kenya.<br></br>I have Specialised in creating interactive experiences and functional interfaces using React.</p>
                    <p>I am a dynamic quick thinker creative professional with the skills to take a web design from the initial information architecture phase straight through to front-end web development.<br></br>
                    I am passionate about developing complex applications that solve real-world problems impacting millions of users.<br></br>
                    I love learning new things about technology.</p>
                    <div className='btn-1'>
                        <a href="#resume">Download CV</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
  );
}

export default About;
