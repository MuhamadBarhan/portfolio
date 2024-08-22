import React from 'react';
import './Projects.css';
import movieImg from '../../assets/movie.PNG';
import ecomImg from '../../assets/ecom.PNG';

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projects-heading">Projects</h2>
      <div className="project-container">
        <div className="project">
          <img src={ecomImg} alt="ECommerce Website" className="project-image" />
          <div className="project-details">
            <p className='project-title'>ECommerce Website - MERN Stack</p>
            <p className='t1'>Mar 2024</p>
            <p className='project-desc'>Developed a dynamic ecommerce website using MERN stack (MongoDB, Express.js, React.js, Node.js).</p>
            <div className='tech-stacks'>
              <span>#ReactJS</span>
              <span>#NodeJS</span>
              <span>#ExpressJS</span>
              <span>#MongoDB</span>
              <span>#Redux</span>
              <span>#Razorpay</span>
            </div>
            <div className="project-buttons">
              <a href='https://mhd-ecommerce.vercel.app/' className='project-btn'>Demo</a>   
              <a href='https://github.com/MuhamadBarhan/Ecommerce-Website-using-MERN-stack' className='project-btn'>View Code</a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={movieImg} alt="Movie Ticket Booking" className="project-image" />
          <div className="project-details">
            <p className='project-title'>Movie Ticket Booking</p>
            <p className='t1'>Apr 2024</p>
            <p className='project-desc'>Developed frontend using React.js and the website is responsive across devices.</p>
            <div className='tech-stacks'>
              <span>#ReactJS</span>
              <span>#CSS</span>
              <span>#JavaScript</span>
            </div>
            <div className="project-buttons">
              <a href='https://mhd-movie.vercel.app/' className='project-btn'>Demo</a>   
              <a href='https://github.com/MuhamadBarhan/Movie-Ticket-Booking' className='project-btn'>View Code</a>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-details">
            <p className='project-title'>User Profile Management </p>
            <p className='t1'>May 2024</p>
            <p className='project-desc'>Successfully designed and implemented a comprehensive User Profile Management System using Spring Boot, integrating advanced features like custom user authentication, role-based access control, and profile management.</p>
            <div className='tech-stacks'>
              <span>#Springboot</span>
              <span>#HTML</span>
              <span>#Bootstrap</span>
              <span>#JavaScript</span>
            </div>
            <div className="project-buttons">
              <a href='#' className='project-btn'>Demo</a>   
              <a href='https://github.com/MuhamadBarhan/User-Management-Spring-Boot' className='project-btn'>View Code</a>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-details">
            <p className='project-title'>Tourism App</p>
            <p className='t1'>Dec 2023</p>
            <p className='project-desc'>Developed a cross-platform Tourism App using Flutter, integrating Google Maps API for interactive navigation. The app provides rich travel destination details with a user-friendly interface. Focused on optimizing performance for a seamless experience on both Android and iOS.</p>
            <div className='tech-stacks'>
              <span>#HTML</span>
              <span>#CSS</span>
              <span>#JavaScript</span>
              <span>#Firebase</span>
            </div>
            <div className="project-buttons">
              <a href='#' className='project-btn'>Demo</a>   
              <a href='https://github.com/MuhamadBarhan/Trash-Management-Admin-Panel' className='project-btn'>View Code</a>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-details">
            <p className='project-title'>Trash Management - Admin Panel</p>
            <p className='t1'>May 2023</p>
            <p className='project-desc'>Developed an admin panel that displays the data from Firebase.</p>
            <div className='tech-stacks'>
              <span>#HTML</span>
              <span>#CSS</span>
              <span>#JavaScript</span>
              <span>#Firebase</span>
            </div>
            <div className="project-buttons">
              <a href='#' className='project-btn'>Demo</a>   
              <a href='https://github.com/MuhamadBarhan/Trash-Management-Admin-Panel' className='project-btn'>View Code</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
