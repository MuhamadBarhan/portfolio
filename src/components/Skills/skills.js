import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDev from '../../assets/website-design.png'
import AppDev from '../../assets/app-design.png'
import { useInView } from 'react-intersection-observer';

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
      });

    return (
        <section id="skills" ref={ref} className={`scroll-container ${inView ? 'animate' : ''}`}>
            <span className="skillsHeading">Skills</span>
            <span className="skillsDesc">I am a skilled person who loves to code</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt='UI' className='skillImg' />
                    <div className="skillText">
                        <h2>UI/UX Design</h2>
                        <p className="skillDesc">hdfhewu wdhedfuhufh efdwhekfhkhf fwedfukdhhj</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDev} alt='UI' className='skillImg' />
                    <div className="skillText">
                        <h2>Web Development</h2>
                        <p className="skillDesc">hdfhewu wdhedfuhufh efdwhekfhkhf fwedfukdhhj</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDev} alt='UI' className='skillImg' />
                    <div className="skillText">
                        <h2>App development</h2>
                        <p className="skillDesc">hdfhewu wdhedfuhufh efdwhekfhkhf fwedfukdhhj</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDev} alt='UI' className='skillImg' />
                    <div className="skillText">
                        <h2>App development</h2>
                        <p className="skillDesc">hdfhewu wdhedfuhufh efdwhekfhkhf fwedfukdhhj</p>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Skills