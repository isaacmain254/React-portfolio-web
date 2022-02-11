import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {FaTwitter,FaGithub, FaLinkedin} from 'react-icons/fa'
import './Contact.css'

const Result =() =>{
    return(
        <p>Your message has been sent successfully sent, i will contact you soon</p>
    );
};

function Contact() {

    const form = useRef();
      const [result, showResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_f0cuxrs', 'template_ysibq3f', form.current, 
        'user_3V9LkvIpVd7sjh5YRVRYT')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.result();
          showResult(true); 
    };
    setTimeout(() =>{
        showResult(false)
    }, 5000)
     return (
        <section className='contact' id='contact'>
            <div className='max-width'>
                <div className='column-left'>
                    <div className='text'>Send A Message</div>
                    <hr></hr>
                    <div className='form-content'>
                        <form  ref={form} onSubmit={sendEmail}>
                            <div className='name'>
                                <input type='text' placeholder='your Name' name='name'/>
                            </div>
                            <div className='email'>
                                <input type='email' placeholder='your Email' name='email'/>
                            </div>
                            <div className='subject'>
                                <input type='text' placeholder='Subject' name='subject'/>
                            </div>
                            <div className='message'>
                                <textarea name="message"   placeholder='Message'></textarea>
                            </div>
                            <div className='submit'>
                                <input type='submit' value='Send Message'/>
                            </div>
                            <div className='row'>{result ? <Result/> : null}</div>
                        </form>
                    </div>
                </div>
                <div className='column-right'>
                    <div className='text'>Get In Touch</div><hr></hr>
                    <div className='contact-content'>
                        <p>Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.<br></br>
Simply fill the from and send me an email.</p>
                    </div>
                    <div className='social-media'>
                        <FaTwitter color="#1E90FF" size="2em" />
                        < FaGithub  size=" 2em"/>
                        <FaLinkedin size="2em" color="#1E90FF"/>
                    </div>
                </div>
            </div>
        </section>
    );
  }


export default Contact;
