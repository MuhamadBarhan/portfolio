import React from 'react'
import './footer.css'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-para">
          <h3>Thank You!</h3>
          <span>Thank you for visiting my portfolio! Feel free to reach out if you have any questions or opportunities to collaborate.</span>
        </div>
        <div className="quick-links">
          <h3>Quick links</h3>
          <Link to='intro' spy={true} sm offset={-100} duration={500} className="quick-link"><FontAwesomeIcon icon={faCaretRight}/> Home</Link>
          <Link to='aboutSection' smooth={true} offset={-100} duration={500} className="quick-link"><FontAwesomeIcon icon={faCaretRight}/> About</Link>
          <Link to='skills' smooth={true} offset={-100} duration={500} className="quick-link"><FontAwesomeIcon icon={faCaretRight}/> Skills</Link>
          <Link to='projects' smooth={true} offset={-100} duration={500} className="quick-link"><FontAwesomeIcon icon={faCaretRight}/> Projects</Link>
          <Link to='certifications' smooth={true} offset={-100} duration={500} className="quick-link"><FontAwesomeIcon icon={faCaretRight}/> Certifications</Link>
          <Link to='contact' smooth={true} offset={-100} duration={500} className="quick-link"><FontAwesomeIcon icon={faCaretRight}/> Contact</Link>
        </div>
        <div className="contact-links">
          <h3>Contact</h3>
          <span><FontAwesomeIcon icon={faPhone} shake/> 9488621302</span>
          <span><FontAwesomeIcon icon={faLinkedin} shake/> Muhamad Barhan H</span>
          <span><FontAwesomeIcon icon={faEnvelope} shake/> muhamadbarhan02@gmail.com</span>
        </div>
      </div>
      <p>Copyright &#169; 2024 All rights reserved | <a href="https://www.linkedin.com/in/muhamad-barhan-h/">Muhamad Barhan H</a></p>
    </footer>
  )
}

export default Footer