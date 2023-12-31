import React from 'react'
import './about.css'
import { Link } from 'react-scroll'
import { useInView } from 'react-intersection-observer';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
      });

    return (
        <section id='aboutSection' ref={ref} className={`scroll-container ${inView ? 'animate' : ''}`}>
            <span className="aboutHeading">About Me</span>
            <span className="aboutDesc">Skilled and passionate person</span>
            <div className="aboutDetails">
                <p className="aboutForm">
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