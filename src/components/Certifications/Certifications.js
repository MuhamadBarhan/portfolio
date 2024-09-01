import React from 'react';
import './Certifications.css';
import certreact from '../../assets/react.jpg';
import certtcs from '../../assets/tcs.jpg';
import certsql from '../../assets/sql.jpg';
import certibm from '../../assets/ibm.jpg';
import certcyber from '../../assets/udemy.jpg';
import certdocker from '../../assets/docker.jpg';
import certaptitude from '../../assets/aptitude.jpg';

const Certifications = () => {
  return (
    <section id="certifications">
      <span className="cert-heading">Certifications</span>

      <div className="certificate-container">
        <div className="certificate">
          <p>React JS Certification</p>
          <a href={certreact} target="_blank" rel="noopener noreferrer">View</a>
        </div>
        <div className="certificate">
          <p>TCS iON Certification</p>
          <a href={certtcs} target="_blank" rel="noopener noreferrer">View</a>
        </div>
        <div className="certificate">
          <p>SQL Certification</p>
          <a href={certsql} target="_blank" rel="noopener noreferrer">View</a>
        </div>
        <div className="certificate">
          <p>IBM Certification</p>
          <a href={certibm} target="_blank" rel="noopener noreferrer">View</a>
        </div>
        <div className="certificate">
          <p>Cyber Security - Udemy</p>
          <a href={certcyber} target="_blank" rel="noopener noreferrer">View</a>
        </div>
        <div className="certificate">
          <p>Docker Certification</p>
          <a href={certdocker} target="_blank" rel="noopener noreferrer">View</a>
        </div>
        <div className="certificate">
          <p>Aptitude Certification</p>
          <a href={certaptitude} target="_blank" rel="noopener noreferrer">View</a>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
