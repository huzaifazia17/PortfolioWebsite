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
                        Hey, my name is <span>Huzaifa Zia</span>, and I am currently in my final year of Software Engineering at Ontario Tech University. As a <span>Full Stack Developer</span> with a passion for <span>Artificial Intelligence</span> and <span>Web Development</span>, I thrive on solving challenging problems and continuously expanding my skills.
                        During my 16-month Engineering Internship at Ontario Power Generation, as well as through personal and academic projects, I’ve developed a broad range of technical skills. I am currently seeking a New Grad Software Engineering position as a <span>Full Stack Developer</span>, <span>Mobile Developer</span>, <span>Web Developer</span>, <span>Front-End/Back-End Developer</span>, or <span>Data Scientist</span>.
                    </p>
                </div>
            </div>


        </div>
    )
}

export default About