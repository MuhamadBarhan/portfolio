import React from 'react'
import './intro.css'
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { TypeAnimation } from 'react-type-animation';

const Intro = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
    });


    return (
        <section id='intro'>
            <div ref={ref} className={`introContent ${inView ? 'animate' : ''}`}>
                <span className="hello">HELLO!</span>
                <span className="introText">I'm <span className="introName">Muhamad Barhan </span></span>
                    <TypeAnimation
                        sequence={[
                            'Full Stack Developer', 1000,
                            'UI/UX Designer', 1000,
                            'Self Learner', 1000,
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        className="introTitle"
                    />
                <p className="introPara">I am a skilled web designer with experience in creating visually <br />appealing and user friendly websites</p>
                <div className="contact-container">
                    <a className='contact-icon' href='https://www.linkedin.com/in/muhamad-barhan-h/'><FontAwesomeIcon icon={faLinkedinIn} className='fa-icon' /></a>
                    <a className='contact-icon' href='https://github.com/MuhamadBarhan'><FontAwesomeIcon icon={faGithub} className='fa-icon' /></a>
                    <a className='contact-icon' href='https://instagram.com/farhan__mhd__'><FontAwesomeIcon icon={faInstagram} className='fa-icon' /></a>
                </div>
            </div>
        </section>
    )
}

export default Intro