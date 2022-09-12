import React from 'react'
import ParticlesC from './ParticlesC'
import './Home.css';
import logo from '../Images/avatar.jpg'
import Typewriter from "typewriter-effect";
import { AiFillMail, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BrowserRouter as Router, Link } from 'react-router-dom';


const Home = () => {

    return (
        <div className='Home_container'>

            <div className='pic'>
                <a><img src={logo} alt="Huzaifa Zia" style={{ width: 280, height: 280, borderRadius: '150px', border: '2px solid #34bbff' }} /></a>
            </div>
            <div className='Home_text'>
                <p>Hi, my name is <span>Huzaifa Zia</span></p>
                <div className='typeWriter_Container'>
                    <p>and I am a</p> <br />
                    <Typewriter

                        onInit={(typewriter) => {

                            typewriter

                                .typeString("Software Engineer")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Problem Solver")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Web Developer")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Mobile Developer")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Data Scientist")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Full Stack Developer")

                                .start();

                        }}
                    />
                </div>
                <div className='icons'>
                    <ul className='icons'>
                        <li><a href="mailto:huzaifa.zia@ontariotechu.net" target="_blank" rel="noreferrer"><AiFillMail /></a></li>
                        <li><a href="https://github.com/huzaifazia17" target="_blank" rel="noreferrer"><AiFillGithub /></a></li>
                        <li><a href="https://www.linkedin.com/in/huzaifa-zia-86673b206/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home 
