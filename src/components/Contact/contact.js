import React from 'react'
import './contact.css'
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });


  return (
    <section id='contact' ref={ref} className={`scroll-container ${inView ? 'animate' : ''}`}>
      <span className="contactHeading">Let's Connect</span>
      <span className="contactDesc">Connect with each other for collaborations</span>
      <form className="contactForm">
        <input type="text" id="name" placeholder='Your Name' />
        <input type="email" id="email" placeholder='Your Email' />
        <textarea id="message" name="message" placeholder='Your Message' rows="5" />
        <button type="submit" className='contactBtn'>Submit</button>
      </form>
    </section>
  )
}

export default Contact