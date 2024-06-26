import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faCode } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  const [showMenu,setShowMenu]=useState(false);
  return (
    <nav className="navbar">
      <span className="logo"><span className='logo-F'>M</span>HD <FontAwesomeIcon icon={faCode}/></span>
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='aboutSection' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Skills</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Projects</Link>
        <Link activeClass='active' to='certifications' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Certifications</Link>
      </div>
      <button className="desktopMenuBtn" onClick={() => {
        document.getElementById('contact').scrollIntoView({ behaviour: 'smooth' });
        var offset=-100;
        window.scrollBy(0,offset)
      }}>Contact Me</button>

      

      <FontAwesomeIcon icon={faBarsStaggered} className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
      <div className={`navMenu ${showMenu ? 'show' : ''}`}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>{setShowMenu(false)}}>Home</Link>
        <Link activeClass='active' to='aboutSection' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>{setShowMenu(false)}}>About</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>{setShowMenu(false)}}>Skills</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>{setShowMenu(false)}}>Projects</Link>
        <Link activeClass='active' to='certifications' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>{setShowMenu(false)}}>Certifications</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>{setShowMenu(false)}}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar