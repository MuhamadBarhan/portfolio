import React, { useState } from 'react';
import './about.css';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import resume from '../../assets/Muhamad_Barhan_Fullstack_Developer_Resume.pdf';

const About = () => {
    const [activeTab, setActiveTab] = useState('education');

    // For the entire section animation
    const [ref, inView] = useInView({
        triggerOnce: false, // Allow the animation to trigger multiple times
        threshold: 0.05, // Element should be 20% in view to trigger
    });

    // For tab card animations
    const [tabRef, tabInView] = useInView({
        triggerOnce: false, // Trigger multiple times on scroll
        threshold: 0.2, // Trigger when 20% of the element is in view
    });

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, staggerChildren: 0.2 } }
    };

    const paragraphVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
    };

    const tabCardVariants = {
        hidden: { opacity: 0, x: -50 }, 
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } 
    };

    return (
        <motion.section
            id='aboutSection'
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"} // Re-triggers based on scroll position
            className={`scroll-container`}
            variants={containerVariants}
        >
            <motion.div 
                className="about-container"
                variants={containerVariants}
            >
                <div className="left-co">
                    <motion.span
                        className="aboutHeading"
                        variants={paragraphVariants}
                    >
                        About <span style={{color:'#ebb52d'}}>Me</span>
                    </motion.span>

                    <motion.p
                        className="aboutDesc"
                        variants={paragraphVariants}
                    >
                        Aspiring Full Stack Developer
                    </motion.p>

                    <motion.p
                        className='aboutme'
                        variants={paragraphVariants}
                    >
                        Aspiring Full Stack Developer with a strong foundation in web technologies and a passion for creating dynamic and responsive applications. Currently pursuing a B.Tech in Information Technology at University College of Engineering, Nagercoil. I specialize in the MERN stack | Springboot | Java and have hands-on experience with projects.
                    </motion.p>

                    <div className="aboutDetails">
                        <motion.button
                            className="cvBtn"
                            variants={paragraphVariants}
                        >
                            <a href={resume}>Resume</a>
                        </motion.button>
                    </div>
                    <hr></hr>
                </div>

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
                                animate={tabInView ? "visible" : "hidden"} // Trigger tab card animations on scroll
                                variants={containerVariants}
                                ref={tabRef} // Use the tabRef for in-view detection
                                key="education"
                            >
                                <motion.div 
                                    className="tab-card"
                                    variants={tabCardVariants} // Apply left-to-right animation here
                                >
                                    <p className='t1'>2021-2025</p>
                                    <p className='t2'>B.Tech Information Technology</p>
                                    <p className='t3'>UNIVERSITY COLLEGE OF ENGINEERING, NAGERCOIL</p>
                                </motion.div>
                            </motion.div>
                        ) : (
                            <motion.div
                                className="tab-content"
                                initial="hidden"
                                animate={tabInView ? "visible" : "hidden"} // Trigger tab card animations on scroll
                                variants={containerVariants}
                                ref={tabRef} // Use the tabRef for in-view detection
                                key="experience"
                            >
                                <motion.div 
                                    className="tab-card"
                                    variants={tabCardVariants} // Apply left-to-right animation here
                                >
                                    <p className='t1'>May 2024</p>
                                    <p className='t2'>Java Full Stack Development</p>
                                    <p className='t3'>WHITE TRACK TECHNOLOGIES</p>
                                </motion.div>
                                <motion.div 
                                    className="tab-card"
                                    variants={tabCardVariants} // Apply left-to-right animation here
                                >
                                    <p className='t1'>July 2023</p>
                                    <p className='t2'>Android Application Development</p>
                                    <p className='t3'>SHRISTI INNOVATIVE</p>
                                </motion.div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
}

export default About;
