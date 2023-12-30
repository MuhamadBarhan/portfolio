import React from 'react'
import './about.css'
import { Link } from 'react-scroll'

const About = () => {
    return (
        <section className="aboutSection">
            <span className="aboutHeading">About Me</span>
            <span className="aboutDesc">Skilled and passionate person</span>
            <div className="aboutDetails">
                <p>
                    <span>Name:</span>
                    <span>Date of Birth:</span>
                    <span>Address:</span>
                    <span>Email:</span>
                    <span>Contact:</span>
                </p>
                <p className="aboutDetail">
                    <span>Muhamad Barhan H</span>
                    <span>07.10.2002</span>
                    <span>Tamil Nadu,India</span>
                    <span>muhammadfarhan3120@gmail.com</span>
                    <span>9488621302</span>
                </p>
                
            </div>
            <Link><button className="cvBtn">DOWNLOAD CV</button></Link>
        </section>
    )
}

export default About