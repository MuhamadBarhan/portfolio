import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id='contact'>
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