import React from 'react'
import './navbar.css'
import { Link } from 'react-scroll'
import Logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={Logo} alt='Logo' className='logo'/>
        <div className="desktopMenu">
            <Link className="desktopMenuListItem">Home</Link>     
            <Link className="desktopMenuListItem">About</Link>     
            <Link className="desktopMenuListItem">Portfolio</Link>     
            <Link className="desktopMenuListItem">Clients</Link>     

        </div>
        <button className="desktopMenuBtn">Contact Me</button>
    </nav>
  )
}

export default Navbar