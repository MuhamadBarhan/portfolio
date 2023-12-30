import React from 'react'
import './intro.css'
import { Link } from 'react-scroll'



const Intro = () => {
    return (
        <section className="intro">
            <div className="introContent">
                <span className="hello">HELLO!</span>
                <span className="introText">I'm <span className="introName">Muhamad Barhan </span></span>
                <span className="introTitle">Web Designer</span>
                <p className="introPara">I am a skilled web designer with experience in creating <br/>visual appealimg amd user friendly websites</p>
                <Link><button className="introBtn">Hire Me</button></Link>
            </div>
            

        </section>
    )
}

export default Intro