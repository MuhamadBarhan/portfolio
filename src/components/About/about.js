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

            <p style={{marginLeft:'2rem',fontWeight:'200',fontFamily:'sans-serif',margin:'2rem',color:'#f6f6f6',fontSize:'16px',lineHeight:'2rem'}}>Aspiring Full Stack Developer with a strong foundation in web technologies and a passion for creating dynamic and responsive applications. Currently pursuing a B.Tech in Information Technology at University College of Engineering, Nagercoil. I specialize in the MERN stack and have hands-on experience with projects</p>
                <div className="aboutDetails">
                    <button className="cvBtn"><a href='https://drive.google.com/file/d/1HdfoZAhShi7mmGDvseMvdjBosWcCZrGc/view?usp=drive_link'>Resume</a></button>
                </div>
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
                                    <li><h3>Web Developement</h3></li>
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