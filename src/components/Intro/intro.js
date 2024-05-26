import React from 'react'
import './intro.css'
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn ,faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Intro = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
      });
    

    return (
        <section id='intro'>
            <div ref={ref} className={`introContent ${inView ? 'animate' : ''}`}>
                <span className="hello">HELLO!</span>
                <span className="introText">I'm <span className="introName">Muhamad Barhan </span></span>
                <span className="introTitle">Web Designer</span>
                <p className="introPara">I am a skilled web designer with experience in creating visually <br/>appealing and user friendly websites</p>
                <div className="contact-container">
                    <a className='contact-icon' href='https://www.linkedin.com/in/muhamad-barhan-h/' target='_blank'><FontAwesomeIcon icon={faLinkedinIn} className='fa-icon'/></a>
                    <a className='contact-icon' href='https://github.com/MuhamadBarhan' target='_blank'><FontAwesomeIcon icon={faGithub} className='fa-icon'/></a>
                    <a className='contact-icon' href='https://instagram.com/farhan__mhd__' target='_blank'><FontAwesomeIcon icon={faInstagram} className='fa-icon'/></a>
                </div>
            </div>
        </section>
    )
}

export default Intro