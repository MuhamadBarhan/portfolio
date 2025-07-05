import React, { useState } from 'react';
import './about.css';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import resume from '../../assets/Muhamad_Barhan_Fullstack_Developer_Resume.pdf';
import profile from '../../assets/profile.jpeg';
import ucen from '../../assets/ucen.jpg'
import ad from '../../assets/admindroid.png'
import alric from '../../assets/alric.png'
import wtt from '../../assets/wtt.png'
import srishti from '../../assets/srishti.png'

const About = () => {
    const [activeTab, setActiveTab] = useState('education');

    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.05,
    });

    const [tabRef, tabInView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, staggerChildren: 0.2 } },
    };

    const paragraphVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    };

    const tabCardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.section
            id='aboutSection'
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={`scroll-container`}
            variants={containerVariants}
        >
            <motion.div className="about-container" variants={containerVariants}>
                <div className="left-co">
                    <div className="about-text">
                        <motion.span className="aboutHeading" variants={paragraphVariants}>
                            About <span style={{ color: '#ebb52d' }}>Me</span>
                        </motion.span>

                        <motion.p className="aboutDesc" variants={paragraphVariants}>
                            Aspiring Full Stack Developer
                        </motion.p>

                        <motion.p className='aboutme' variants={paragraphVariants}>
                            Aspiring Full Stack Developer with a strong foundation in web technologies and a passion for creating dynamic and responsive applications. Currently pursuing a B.Tech in Information Technology at University College of Engineering, Nagercoil. I specialize in the MERN stack | Springboot | Java and have hands-on experience with projects.
                        </motion.p>

                        <div className="aboutDetails">
                            <motion.button className="cvBtn" variants={paragraphVariants}>
                                <a href={resume}>Resume</a>
                            </motion.button>
                        </div>
                    </div>

                    <div className="profile-wrapper" data-aos="fade-left">
                        <div className="profile-background"></div>
                        <div className="profile-image-container">
                            <img src={profile} alt="Profile" className="profile-image" />
                        </div>
                    </div>
                </div>
                <div className='exp-edu'>
                    <div className="container">
                        <div className="tabs">
                            <button
                                className={`tab ${activeTab === 'education' ? 'active' : ''}`}
                                onClick={() => setActiveTab('education')}
                            >
                                <FontAwesomeIcon icon={faGraduationCap} /> Education
                            </button>
                            <button
                                className={`tab ${activeTab === 'experience' ? 'active' : ''}`}
                                onClick={() => setActiveTab('experience')}
                            >
                                <FontAwesomeIcon icon={faLaptopCode} /> Experience
                            </button>
                        </div>

                        <div className="content">
                            {activeTab === 'education' ? (
                                <motion.div
                                    className="tab-content"
                                    initial="hidden"
                                    animate={tabInView ? "visible" : "hidden"}
                                    variants={containerVariants}
                                    ref={tabRef}
                                    key="education"
                                >
                                    <motion.div className="tab-card" variants={tabCardVariants}>
                                        <img src={ucen} style={{ width: '280px' }} />
                                        <div>
                                            <p className='t1'>2021-2025</p>
                                            <p className='t2'>B.Tech Information Technology</p>
                                            <p className='t3'>UNIVERSITY COLLEGE OF ENGINEERING, NAGERCOIL</p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    className="tab-content"
                                    initial="hidden"
                                    animate={tabInView ? "visible" : "hidden"}
                                    variants={containerVariants}
                                    ref={tabRef}
                                    key="experience"
                                >
                                    <motion.div className="tab-card" variants={tabCardVariants}>
                                        <img src={ad} style={{ width: '60px' }} />
                                        <div>
                                            <p className='t1'>March 2025 - Present</p>
                                            <p className='t2'>Frontend Engineer Intern</p>
                                            <p className='t3'>ADMINDROID</p>
                                        </div>

                                    </motion.div>
                                    <motion.div className="tab-card" variants={tabCardVariants}>
                                        <img src={alric} style={{ width: '60px' }} />
                                        <div>
                                            <p className='t1'>Feb 2025</p>
                                            <p className='t2'>Java Developer Intern</p>
                                            <p className='t3'>ALRIC INFOTECH PVT LTD</p>
                                        </div>

                                    </motion.div>
                                    <motion.div className="tab-card" variants={tabCardVariants}>
                                        <img src={wtt} style={{ width: '60px' }} />
                                        <div>
                                            <p className='t1'>May 2024</p>
                                            <p className='t2'>Java Full Stack Development</p>
                                            <p className='t3'>WHITE TRACK TECHNOLOGIES PVT LTD</p>
                                        </div>

                                    </motion.div>
                                    <motion.div className="tab-card" variants={tabCardVariants}>
                                        <img src={srishti} style={{ width: '60px' }} />
                                        <div>
                                            <p className='t1'>July 2023</p>
                                            <p className='t2'>Android Application Development</p>
                                            <p className='t3'>SHRISTI INNOVATIVE</p>
                                        </div>

                                    </motion.div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>

            </motion.div>
        </motion.section>
    );
};

export default About;
