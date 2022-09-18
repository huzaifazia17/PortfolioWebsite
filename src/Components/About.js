import React from 'react'
import './About.css'
import { AiOutlineHtml5 } from 'react-icons/ai';
import { FaJava, FaReact, FaAngular, FaPython } from 'react-icons/fa';
import { SiRedux, SiMysql } from 'react-icons/si';
import { DiJavascript1, DiMongodb, DiCss3 } from 'react-icons/di';
import { GrCss3 } from 'react-icons/gr';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

const About = () => {
    AOS.init();
    return (
        <div class="big-C">
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
            </div>


        </div>
    )
}

export default About