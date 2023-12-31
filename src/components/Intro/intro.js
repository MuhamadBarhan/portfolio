import React from 'react'
import './intro.css'
import { Link } from 'react-scroll'
import { useInView } from 'react-intersection-observer';

const Intro = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
      });
    

    return (
        <section id='intro'>
            <div ref={ref} className={`introContent ${inView ? 'animate' : ''}`}>
                <span className="hello">HELLO!</span>
                <span className="introText">I'm <span className="introName">Muhamad Barhan </span></span>
                <span className="introTitle">Web Designer</span>
                <p className="introPara">I am a skilled web designer with experience in creating visually <br/>appealing and user friendly websites</p>
                <Link><button className="introBtn">Hire Me</button></Link>
            </div>
        </section>
    )
}

export default Intro