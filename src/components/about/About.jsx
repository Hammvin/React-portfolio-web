import React from 'react'
import './About.css'
import Me from '../../assets/me.jpg'
import{FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {RiFolderChartLine} from 'react-icons/ri'

const About = () => {
  return (
    <section id='about'>
      <h5> Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
            <div className="about__image">
              <img src={Me} alt="" />
            </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience </h5>
              <small>1+ Years Working Experience</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients </h5>
              <small>3 Clients Locally</small>
            </article>

            <article className="about__card">
              <RiFolderChartLine className='about__icon'/>
              <h5>Projects </h5>
              <small>4 Completed Projects</small>
            </article>
          </div>
           <p>Having worked on different projects, both hosted and practise projects, 
             I can confidently confirm that I have a firm grip on HTML, CSS, 
             Bootstrap and React JavaScript for front-end with intermediate skills in Vanilla JavaScript. 
             I also have Object-Oriented PHP and Node JS for Backend logic with Mongo & Mysql Databases and GIT for Version Control.</p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About