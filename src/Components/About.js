import React from 'react'
import './About.css'
import { AiOutlineHtml5 } from 'react-icons/ai';
import { FaJava, FaReact, FaAngular, FaPython } from 'react-icons/fa';
import { SiRedux, SiMysql } from 'react-icons/si';
import { DiJavascript1, DiMongodb, DiCss3 } from 'react-icons/di';
import { GrCss3 } from 'react-icons/gr';
import Express from '../Images/Express.png';
import Angular from '../Images/Angular.png';
import ReactA from '../Images/ReactA.png';
import Python from '../Images/Python.png';
import sqlimg from '../Images/MySQL.png';
import mongodb from '../Images/mongodb.png';
import jsimg from '../Images/Javascript.png';
import javaimg from '../Images/Java.png';
import htmlimg from '../Images/HTML.png';
import cssimg from '../Images/css.png';
import scss from '../Images/SCSS.png';
import djangoImg from '../Images/Django.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

const About = () => {
    AOS.init();
    return (
        <div>
            <div className='title'> About Me<hr style={{ width: '25%' }}></hr></div>
            <div className='about-section'>
                <div className='about__container' data-aos="fade-right" data-aos-duration="2500">
                    <p>
                        Hey, my name is <span>Huzaifa Zia</span> and I am currently in my third year of Software Engineering at Ontario Tech University.
                        I am a <span>Full Stack Developer</span> with a passion for <span>Web Development</span>. I have always been interested in solving challenging problems and I am always looking to learn new things.
                        I have a wide variety of skills that I have developed through working as a Research Assistant for eight months and personal and school projects, listed below.
                        I am currently looking for a Software Engineering Intern/Co-op position as a <span>Full Stack Developer</span>, <span>Mobile Developer</span>, <span>Web Developer</span>, <span>Front End/ Back End Developer</span>, or <span>Data Scientist</span>.
                    </p>
                </div>
                <div className='title'>My Skills<hr style={{ width: '25%' }}></hr></div>
                <div className='skills__container' data-aos="fade-left" data-aos-duration="2500">
                    <ul>
                        <li className='skillsSub'><div className='skill1'><img src={htmlimg} style={{ width: 50, height: 50 }} /></div>
                            <div className='skill1'> <p>HTML5</p></div></li>
                        <li className='skillsSub'><div className='skill2'><img src={javaimg} style={{ width: 50, height: 50 }} /></div>
                            <div className='skill2'><p>Java</p></div></li>
                        <li className='skillsSub'><div className='skill3'><img src={Angular} style={{ width: 50, height: 50 }} /></div>
                            <div className='skill3'><p>Angular</p></div></li>
                        <li className='skillsSub'><div className='skill4'><img src={ReactA} style={{ width: 50, height: 50 }} /></div>
                            <div className='skill4'><p>React</p></div></li>
                        <li className='skillsSub'><div className='skill5'><img src={Python} style={{ width: 50, height: 50 }} /></div>
                            <div className='skill5'><p>Python</p></div></li>
                        <li className='skillsSub mobileChange' id="mobileChange"><div className='skill5'><img src={djangoImg} style={{ width: 50, height: 50 }} /></div>
                            <div className='skill5'><p>Django</p></div></li>
                    </ul>
                    <ul>
                        <li className='skillsSub'><div className='skill6'><img src={cssimg} style={{ width: 50, height: 50 }} /></div>
                            <div className='skill6'><p>CSS3</p></div></li>
                        <li className='skillsSub'><div className='skill7'><img src={sqlimg} style={{ width: 50, height: 50 }} /></div>
                            <div className='skill7'><p>MySQL</p></div></li>
                        <li className='skillsSub'><div className='skill8'><img src={jsimg} style={{ width: 50, height: 50 }} /></div>
                            <div className='skill8'><p>Javascript</p></div></li>
                        <li className='skillsSub'><div className='skill9'><img src={mongodb} style={{ width: 50, height: 50 }} /></div>
                            <div className='skill9'><p>Mongodb</p></div></li>
                        <li className='skillsSub'><div className='skill10'><img src={Express} style={{ width: 50, height: 50 }} /></div>
                            <div className='skill10'><p>ExpressJS</p></div></li>
                        <li className='skillsSub mobileChange' id="mobileChange"><div className='skill5'><img src={scss} style={{ width: 50, height: 50 }} /></div>
                            <div className='skill5'><p>SCSS</p></div></li>
                    </ul>

                </div>
            </div>


        </div>
    )
}

export default About