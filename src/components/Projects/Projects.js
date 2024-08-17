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
            <p className='project-title'>Trash Management - Admin Panel</p>
            <p className='project-desc'>Developed an admin panel that displays the data from Firebase.</p>
            <div className='tech-stacks'>
              <span>#HTML</span>
              <span>#CSS</span>
              <span>#JavaScript</span>
              <span>#Firebase</span>
            </div>
            <div className="project-buttons">
              <a href='#' className='project-btn'>Demo</a>   
              <a href='#' className='project-btn'>View Code</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
