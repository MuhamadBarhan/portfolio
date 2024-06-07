import React, { useRef } from 'react'
import './contact.css'
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tjjbynz', 'template_9zviq7p', form.current, {
        publicKey: 'MhbiHfvR-V4Qn8NA1',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contact' ref={ref} className={`scroll-container ${inView ? 'animate' : ''}`}>
      <span className="contactHeading">Let's Connect</span>
      <span className="contactDesc">Connect with each other for collaborations</span>
      <div className="contact-ref">
        
      </div>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" id="name" placeholder='Your Name' name='from_name'/>
        <input type="email" id="email" placeholder='Your Email' name='from_email'/>
        <textarea id="message" name="message" placeholder='Your Message' rows="5" />
        <button type="submit" className='contactBtn'>Submit</button>
        <div><Toaster/></div>
      </form>
    </section>
  )
}

export default Contact