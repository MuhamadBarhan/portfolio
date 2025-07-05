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
    <>
      <section id='contact' ref={ref} className={`scroll-container ${inView ? 'animate' : ''}`}>
        <span className="contactHeading">Let's <span style={{ color: '#ebb52d' }}>Connect</span></span>
        <span className="contactDesc">Fill the form below to get in touch.</span>
        <div className="contact-ref">

        </div>
        <form className="contactForm" ref={form} onSubmit={sendEmail} >
          <input type="text" id="name" placeholder='Your Name' name='from_name' required />
          <input type="email" id="email" placeholder='Your Email' name='from_email' required />
          <textarea id="message" name="message" placeholder='Your Message' rows="5" required />
          <button type="submit" className='contactBtn' disabled={loading}>
            {loading ? <span className="spinner"></span> : 'Send'}
          </button>
          <div><Toaster /></div>
        </form>
      </section>
       <div className="map-container">
            <iframe
              title="Chennai Location"
              style={{ border: 0, borderRadius: "1rem" }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31113.339867167047!2d80.20416852721291!3d12.896949827668948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b79de7f381b%3A0xffbb2dd48afe3f1b!2sSholinganallur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1751716240117!5m2!1sen!2sin" 
              width="100%" height="350"
            ></iframe>
          </div>
    </>
  )
}

export default Contact