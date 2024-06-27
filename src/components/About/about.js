import React, { useState } from 'react'
import './about.css'
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    const [activeTab, setActiveTab] = useState('education');
    const [ref, inView] = useInView({
        triggerOnce: false,
    });
    return (
        <section id='aboutSection' ref={ref} className={`scroll-container ${inView ? 'animate' : ''}`}>
            <div className="about-container">
                <div className="left-co">
                    <span className="aboutHeading">About Me</span>
                    <p className="aboutDesc">Aspiring Full Stack Developer</p>

                    <p style={{ marginLeft: '2rem', fontWeight: '200', fontFamily: 'sans-serif', margin: '2rem', color: '#f6f6f6', fontSize: '16px', lineHeight: '2rem' }}>Aspiring Full Stack Developer with a strong foundation in web technologies and a passion for creating dynamic and responsive applications. Currently pursuing a B.Tech in Information Technology at University College of Engineering, Nagercoil. I specialize in the MERN stack and have hands-on experience with projects</p>
                    <div className="aboutDetails">
                        <button className="cvBtn"><a href='https://drive.google.com/file/d/1HdfoZAhShi7mmGDvseMvdjBosWcCZrGc/view?usp=drive_link'>Resume</a></button>
                    </div>
                    <hr></hr>
                </div>
                <div className="container">
                    <div className="tabs">
                        <button className={`tab ${activeTab === 'education' ? 'active' : ''}`} onClick={() => setActiveTab('education')}><FontAwesomeIcon icon={faGraduationCap} /> Education</button>
                        <button className={`tab ${activeTab === 'experience' ? 'active' : ''}`} onClick={() => setActiveTab('experience')}><FontAwesomeIcon icon={faLaptopCode} /> Experience</button>
                    </div>
                    <div className="content">
                        {activeTab === 'education' ? (
                            <div className="tab-content">
                                <div className="tab-card">
                                    <p className='t1'>2021-2025</p>
                                    <p className='t2'>B.Tech Information Technology</p>
                                    <p className='t3'>UNIVERSITY COLLEGE OF ENGINEERING, NAGERCOIL</p>
                                </div>
                            </div>
                        ) : (
                            <div className="tab-content">
                                <div className="tab-card">
                                    <p className='t1'>May 2024</p>
                                    <p className='t2'>Web Developement</p>
                                    <p className='t3'>WHITE TRACK ECHNOLOGIES</p>
                                </div>
                                <div className="tab-card">
                                    <p className='t1'>July 2023</p>
                                    <p className='t2'>Android Application Development</p>
                                    <p className='t3'>SHRISTI INNOVATIVE</p>
                                </div>

                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About