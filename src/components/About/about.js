import React from 'react'
import './about.css'
import { Link } from 'react-scroll'
import { useInView } from 'react-intersection-observer';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
      });

    return (
        <section id='aboutSection' ref={ref} className={`scroll-container ${inView ? 'animate' : ''}`}>
            <span className="aboutHeading">About Me</span>
            <p className="aboutDesc">Skilled and passionate person</p>
            <div className="aboutDetails">
                <p className="aboutForm">
                    <span>Name:</span>
                    <span>Email:</span>
                    <span>Contact:</span>
                    <span>Address:</span>
                    <span>Date of Birth:</span>
                </p>
                <p className="aboutDetail">
                    <span>Muhamad Barhan H</span>
                    <span>muhamadbarhan02@gmail.com</span>
                    <span>9488621302</span>
                    <span>Tamil Nadu,India</span>
                    <span>October 7,2002</span>
                </p>
                
            </div>
            <Link><button className="cvBtn">Resume</button></Link>
        </section>
    )
}

export default About