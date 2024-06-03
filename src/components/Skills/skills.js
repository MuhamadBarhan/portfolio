import React from 'react'
import './skills.css'
import { useInView } from 'react-intersection-observer';

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
      });

    return (
        <section id="skills" ref={ref} className={`scroll-container ${inView ? 'animate' : ''}`}>
            <span className="skillsHeading">Skills</span>
            <span className="skillsDesc">I am a skilled person who loves to code</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/html-2752158-2284975.png?f=webp" alt='UI' className='skillImg' />
                    <p>HTML5</p>
                </div>
                <div className="skillBar">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-css-131-722685.png?f=webp&w=256" alt='UI' className='skillImg' />
                    <p>CSS3</p>
                </div>
                <div className="skillBar">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-javascript-1-225993.png?f=webp&w=256" alt='UI' className='skillImg' />
                    <p>JavaScript</p>
                </div>
                <div className="skillBar">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-react-3521666-2945110.png?f=webp&w=256" alt='UI' className='skillImg' />
                    <p>React JS</p>
                </div>
                <div className="skillBar">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-bootstrap-226077.png?f=webp&w=256" alt='UI' className='skillImg' />
                    <p>Bootstrap</p>
                </div>
                <div className="skillBar">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-nodejs-226032.png?f=webp&w=256" alt='UI' className='skillImg' />
                    <p>Node JS</p>
                </div>
                <div className="skillBar">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-express-8-1175029.png?f=webp&w=256" alt='UI' className='skillImg' />
                    <p>Express JS</p>
                </div>
                <div className="skillBar">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-mysql-21-1174941.png?f=webp&w=256" alt='UI' className='skillImg' />
                    <p>MySQL</p>
                </div>
                <div className="skillBar">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-mongodb-4-1175139.png?f=webp&w=256" alt='UI' className='skillImg' />
                    <p>MongoDB</p>
                </div>
                <div className="skillBar">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-python-2-226051.png?f=webp&w=256" alt='UI' className='skillImg' />
                    <p>Python</p>
                </div>
                <div className="skillBar">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-java-59-1174952.png?f=webp&w=256" alt='UI' className='skillImg' />
                    <p>Java</p>
                </div>
                <div className="skillBar">
                    <img src="https://avatars.githubusercontent.com/u/69558822?s=200&v=4" alt='UI' className='skillImg' />
                    <p>Spring Boot</p>
                </div>
                <div className="skillBar">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-git-17-1175218.png?f=webp&w=256" alt='UI' className='skillImg' />
                    <p>Git</p>
                </div>
                <div className="skillBar">
                    <img src="https://assets-global.website-files.com/61d1b6e84887f53fef1dcdf2/631b45e07d98cfb364e5951f_github-white.png" alt='UI' className='skillImg' />
                    <p>GitHub</p>
                </div>
                <div className="skillBar">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-firebase-3521427-2944871.png?f=webp&w=256" alt='UI' className='skillImg' />
                    <p>Firebase</p>
                </div>
                <div className="skillBar">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-php-28-226043.png?f=webp&w=256" alt='UI' className='skillImg' />
                    <p>PHP</p>
                </div>
                <div className="skillBar">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-postman-3521648-2945092.png?f=webp&w=256" alt='UI' className='skillImg' />
                    <p>Postman API</p>
                </div>
                <div className="skillBar">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-figma-3521426-2944870.png?f=webp&w=256" alt='UI' className='skillImg' />
                    <p>Figma</p>
                </div>
                <div className="skillBar">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-photoshop-8-226474.png?f=webp&w=256" alt='UI' className='skillImg' />
                    <p>PhotoShop</p>
                </div>
                <div className="skillBar">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-linux-3628892-3030032.png?f=webp&w=256" alt='UI' className='skillImg' />
                    <p>Linux</p>
                </div>
            </div>
            
        </section>
    )
}

export default Skills