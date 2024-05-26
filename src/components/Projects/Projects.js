import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <section id="projects">
      <span className="projects-heading">Projects</span>
      <p className='projects-desc'></p>
      <div className="project-container">
        <div className="project">
          <h2>ECommerce Website-MERN Stack</h2>
          <p>Designed and developed a dynamic e-commerce website leveraging MongoDB, Express.js, React.js, and Node.js (MERN stack) with Redux for efficient state management and also created an admin panel to efficiently manage products and orders, ensuring seamless product management and efficient operations. Implemented responsive design principles to ensure seamless user experience across devices.</p>
          <a href='https://mhd-ecommerce.vercel.app/' className='project-btn'>Demo</a>   
          <a href='https://github.com/MuhamadBarhan/Ecommerce-Website-using-MERN-stack' className='project-btn'>View Code</a>
        </div>
        <div className="project">
          <h2>Trash Management - Admin Panel</h2>
          <p>Developed a dynamic admin panel utilizing HTML, CSS, and JavaScript, integrated with Firebase to manage data efficiently. Implemented features in admin panel to display and download data in Excel format for enhanced analysis and reporting.</p>
          <a href='' className='project-btn'>Demo</a>   
          <a href='' className='project-btn'>View Code</a>
        </div>
      </div>
    </section>
  )
}

export default Projects