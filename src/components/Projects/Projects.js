import React from 'react';
import './Projects.css';
import movieImg from '../../assets/movie.PNG';
import ecomImg from '../../assets/ecom.PNG';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Projects = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: false,
    threshold: 0.05,
  });

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.4, 
        delay: index * 0.2  // Staggering animation by index
      }
    }),
  };

  const projectItems = [
    {
      imgSrc: ecomImg,
      title: 'ECommerce Website - MERN Stack',
      date: 'Mar 2024',
      description: 'Developed a dynamic ecommerce website using MERN stack (MongoDB, Express.js, React.js, Node.js).',
      techStack: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'Redux', 'Razorpay'],
      demoLink: 'https://mhd-ecommerce.vercel.app/',
      codeLink: 'https://github.com/MuhamadBarhan/Ecommerce-Website-using-MERN-stack'
    },
    {
      imgSrc: movieImg,
      title: 'Movie Ticket Booking',
      date: 'Apr 2024',
      description: 'Developed frontend using React.js and the website is responsive across devices.',
      techStack: ['ReactJS', 'CSS', 'JavaScript'],
      demoLink: 'https://mhd-movie.vercel.app/',
      codeLink: 'https://github.com/MuhamadBarhan/Movie-Ticket-Booking'
    },
    {
      title: 'Chat App-MERN',
      date: 'Dec 2024',
      description: 'Successfully designed and implemented a real-time Chat Application using the MERN stack (MongoDB, Express.js, React.js, Node.js), integrating advanced features like WebSocket-based messaging and user authentication',
      techStack: ['ReactJS', 'NodeJS', 'MongoDB', 'ExpressJS', 'Tailwind CSS', 'Web Sockets'],
      demoLink: 'https://chat-app-mjgk.onrender.com/',
      codeLink: 'https://github.com/MuhamadBarhan/Chat-App'
    },
    {
      title: 'User Profile Management',
      date: 'May 2024',
      description: 'Successfully designed and implemented a comprehensive User Profile Management System using Spring Boot, integrating advanced features like custom user authentication, role-based access control, and profile management.',
      techStack: ['Springboot', 'HTML', 'Bootstrap', 'JavaScript'],
      demoLink: '#',
      codeLink: 'https://github.com/MuhamadBarhan/User-Management-Spring-Boot'
    },
    {
      title: 'Tourism App',
      date: 'Dec 2023',
      description: 'Developed a cross-platform Tourism App using Flutter, integrating Google Maps API for interactive navigation.',
      techStack: ['Flutter', 'Dart', 'GoogleMap API'],
      demoLink: '#',
      codeLink: 'https://github.com/MuhamadBarhan/Tourism-App'
    },
    {
      title: 'Trash Management - Admin Panel',
      date: 'May 2023',
      description: 'Developed an admin panel that displays data from Firebase.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      demoLink: '#',
      codeLink: 'https://github.com/MuhamadBarhan/Trash-Management-Admin-Panel'
    },
    {
      title: 'Facial Expression Recognition using CNN',
      date: 'May 2023',
      description: 'Utilizes CNN to accurately identify and classify human emotions based on facial expressions.',
      techStack: ['Python', 'CNN'],
      demoLink: '#',
      codeLink: 'https://github.com/MuhamadBarhan/Facial-Expression-Recognition-CNN'
    }
  ];

  return (
    <motion.section
      id="projects"
      ref={sectionRef}
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } }
      }}
    >
      <motion.h2 
        className="projects-heading" 
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
      >
        Projects
      </motion.h2>
      
      <div className="project-container">
        {projectItems.map((project, index) => (
          <motion.div
            key={index}
            className="project"
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={cardVariants}
            custom={index}  // Pass index to apply delay
          >
            {project.imgSrc && <img src={project.imgSrc} alt={project.title} className="project-image" />}
            <div className="project-details">
              <p className='project-title'>{project.title}</p>
              <p className='t1'>{project.date}</p>
              <p className='project-desc'>{project.description}</p>
              <div className='tech-stacks'>
                {project.techStack.map((tech, idx) => (
                  <span key={idx}>#{tech}</span>
                ))}
              </div>
              <div className="project-buttons">
                {project.demoLink && <a href={project.demoLink} className='project-btn'>Demo</a>}
                <a href={project.codeLink} className='project-btn'>View Code</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
