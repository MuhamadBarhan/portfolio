import React from 'react';
import './Projects.css';
import movieImg from '../../assets/movie.PNG';
import ecomImg from '../../assets/ecom.PNG';

const Projects = () => {
  return (
    <section id="projects">
      <span className="projects-heading">Projects</span>
      <p className='projects-desc'></p>
      <div className="project-container">
        <div className="project">
          <img src={ecomImg} alt="" />
          <div className="project-details">
            <p className='project-title'>ECommerce Website-MERN Stack</p>
            <p className='project-desc'>jskdj sjjkdjsjkd skjdskdjs dsjdjskd </p>
            <a href='https://mhd-ecommerce.vercel.app/' className='project-btn'>Demo</a>   
            <a href='https://github.com/MuhamadBarhan/Ecommerce-Website-using-MERN-stack' className='project-btn'>View Code</a>
          </div>
        </div>
        <div className="project">
          <img src={movieImg} alt="" />
          <div className="project-details">
            <p className='project-title'>Movie Ticket Booking</p>
            <p className='project-desc'>jskdj sjjkdjsjkd skjdskdjs dsjdjskd </p>
            <a href='https://mhd-ecommerce.vercel.app/' className='project-btn'>Demo</a>   
            <a href='https://github.com/MuhamadBarhan/Ecommerce-Website-using-MERN-stack' className='project-btn'>View Code</a>
          </div>
        </div>
        <div className="project">
          <div className="project-details">
            <p className='project-title'>Trash Management - Admin Panel</p>
            <p className='project-desc'>jskdj sjjkdjsjkd skjdskdjs dsjdjskd </p>
            <a href='' className='project-btn'>Demo</a>   
            <a href='' className='project-btn'>View Code</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
