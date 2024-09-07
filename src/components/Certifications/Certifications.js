import React from 'react';
import './Certifications.css';
import certreact from '../../assets/react.jpg';
import certtcs from '../../assets/tcs.jpg';
import certsql from '../../assets/sql.jpg';
import certibm from '../../assets/ibm.jpg';
import certcyber from '../../assets/udemy.jpg';
import certdocker from '../../assets/docker.jpg';
import certaptitude from '../../assets/aptitude.jpg';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Certifications = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const certificateVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2, // Staggered animation delay
      },
    }),
  };

  const certifications = [
    { name: 'React JS Certification', imgSrc: certreact },
    { name: 'TCS iON Certification', imgSrc: certtcs },
    { name: 'SQL Certification', imgSrc: certsql },
    { name: 'IBM Certification', imgSrc: certibm },
    { name: 'Cyber Security - Udemy', imgSrc: certcyber },
    { name: 'Docker Certification', imgSrc: certdocker },
    { name: 'Aptitude Certification', imgSrc: certaptitude },
  ];

  return (
    <motion.section
      id="certifications"
      ref={sectionRef}
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } }
      }}
    >
      <motion.span
        className="cert-heading"
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
      >
        Certifications
      </motion.span>

      <div className="certificate-container">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="certificate"
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={certificateVariants}
            custom={index} // Pass index for delay
          >
            <p>{cert.name}</p>
            <a href={cert.imgSrc} target="_blank" rel="noopener noreferrer">View</a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Certifications;
