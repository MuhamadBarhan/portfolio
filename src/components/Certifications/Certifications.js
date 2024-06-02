import React from 'react'
import './Certifications.css'
import c1 from '../../assets/react.jpg'
import c2 from '../../assets/tcs.jpg'
import c3 from '../../assets/sql.jpg'
import c4 from '../../assets/ibm.jpg'


const Certifications = () => {
  return (
    <section id="certifications">
        <span className="cert-heading">Certifications</span>
        <div className="certificates">
        <img src={c1} alt="" className='certificate'/>
        <img src={c2} alt="" className='certificate'/>
        <img src={c3} alt="" className='certificate'/>
        <img src={c4} alt="" className='certificate'/>
        </div>
    </section>
  )
}

export default Certifications