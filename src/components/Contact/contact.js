import React, { useRef, useState } from 'react'
import './contact.css'
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm('service_tjjbynz', 'template_9zviq7p', form.current, {
        publicKey: 'MhbiHfvR-V4Qn8NA1',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setLoading(false);
          toast.success('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contact' ref={ref} className={`scroll-container ${inView ? 'animate' : ''}`}>
    <span className="contactHeading">Let's <span style={{color:'#ebb52d'}}>Connect</span></span>
    <span className="contactDesc">Fill the form below to get in touch.</span>
      <div className="contact-ref">

      </div>
      <form className="contactForm" ref={form} onSubmit={sendEmail} >
        <input type="text" id="name" placeholder='Your Name' name='from_name' required />
        <input type="email" id="email" placeholder='Your Email' name='from_email' required />
        <textarea id="message" name="message" placeholder='Your Message' rows="5" required />
        <button type="submit" className='contactBtn' disabled={loading}>
          {loading ? <span className="spinner"></span> : 'Submit'}
          {loading && 'Submitting...'}</button>
        <div><Toaster /></div>
      </form>
    </section>
  )
}

export default Contact