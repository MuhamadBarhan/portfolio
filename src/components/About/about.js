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
            <span className="aboutHeading">About Me</span>
            <p className="aboutDesc">Skilled and passionate person</p>
            <div className="about-container">
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
                    </p> <br></br>
                    <button className="cvBtn"><a href='https://drive.google.com/file/d/1FxDWwFdVYKCgTGqPfiBXv5EWG14Hra3e/view?usp=drive_link'>Resume</a></button>
                </div>
                <div className="container">
                    <div className="tabs">
                        <button className={`tab ${activeTab === 'education' ? 'active' : ''}`} onClick={() => setActiveTab('education')}><FontAwesomeIcon icon={faGraduationCap} /> Education</button>
                        <button className={`tab ${activeTab === 'experience' ? 'active' : ''}`} onClick={() => setActiveTab('experience')}><FontAwesomeIcon icon={faLaptopCode} /> Experience</button>
                    </div>
                    <div className="content">
                        {activeTab === 'education' ? (
                            <div className="tab-content">
                                <ul>
                                    <li><h3>B.Tech Information Technology 2021-2025</h3></li>
                                    <h4>University College of Engineering Nagercoil</h4>
                                </ul>
                            </div>
                        ) : (
                            <div className="tab-content">
                                <ul>
                                    <li><h3>Web Developement(Summer Intern)</h3></li>
                                    <h4>White Track Technologies</h4><br></br>
                                    <li><h3>Android Application Development</h3></li>
                                    <h4>Shristi Innovative</h4>
                                </ul>

                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About