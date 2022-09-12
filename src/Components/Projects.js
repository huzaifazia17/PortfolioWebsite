import React from 'react'
import './Projects.css';
import h2z2 from '../Images/h2z2.png';
import robo from '../Images/robo.png';
import barcode from '../Images/barcode.png';
import 'animate.css';
import { FaGreaterThan } from 'react-icons/fa';

const Projects = () => {
    return (
        <div className='Projects-container animate__animated animate__fadeInRightBig'>
            <h2><span>-----</span>Projects<span>-----</span></h2>
            <a href="https://h2z2groceries.netlify.app/" target="_blank">
                <div className='project1 '>
                    <div className='project-image'>
                        <img src={h2z2} alt="h2z2" style={{ width: 275, height: 175 }} />
                    </div>
                    <div className='project-info'>
                        <h1><FaGreaterThan /> Online Grocery Store</h1>
                        <h3><span>~</span>Led team of 4: Organized meetings, delegated tasks, helped teammates debug, etc., leading to a final grade of 100% </h3>
                        <h3><span>~</span>Designed responsive online grocery store, implemented an authentication system, and built Home, Product & Cart Pages. </h3>
                        <h3><span>~</span>Implemented dynamic cart functionality using Redux. View <a href="https://github.com/huzaifazia17/Online_Grocery_Store" target="_blank" style={{ textDecoration: 'Underline', color: '#34bbff' }}>Github</a> </h3>
                        <h3><span>ReactJS Redux ExpressJS MySQL CSS React-Router Heroku</span></h3>
                    </div>

                </div>
            </a>
            <a href="https://huzaifazia17.github.io/DH8Transcriber/" target="_blank">
                <div className='project2'>
                    <div className='project-image'>
                        <img src={robo} alt="robo" style={{ width: 275, height: 175 }} />
                    </div>
                    <div className='project-info'>
                        <h1><FaGreaterThan /> Audio/Video Transcriber</h1>
                        <h3><span>~</span>Developed an audio/video transcriber within 4 hours for a hackathon using AssemblyAI’s transcription API.</h3>
                        <h3><span>~</span>Built the user interface using HTML, CSS and JavaScript and integrated AssemblyAI’s API </h3>
                        <h3><span>~</span>Generated the transcription into a formatted HTML document, dividing the text into chapters. View <a href="https://github.com/huzaifazia17/DH8Transcriber" target="_blank" style={{ textDecoration: 'Underline', color: '#34bbff' }}>Github</a>   </h3>
                        <h3><span>HTML CSS Javascript AssemblyAI-API </span></h3>
                    </div>

                </div>
            </a>
            <a href="https://github.com/huzaifazia17/ContentBasedImageRetrieval" target="_blank">
                <div className='project3'>
                    <div className='project-image'>
                        <img src={barcode} alt="barcode" style={{ width: 275, height: 175 }} />
                    </div>
                    <div className='project-info'>
                        <h1><FaGreaterThan /> Content Based Image Retrieval </h1>
                        <h3><span>~</span>Developed a Python program that converts a black and white image into a barcode using angled projections.</h3>
                        <h3><span>~</span>The program can then search through a list of input Images or barcodes to find the most similar ones with an accuracy of 80%. </h3>
                        <h3><span>~</span>Wrote a research report on the analysis of the program and data structures used. Received a grade of 100% </h3>
                        <h3><span>Python Pillow Numpy Visual-Studio-Code </span></h3>
                    </div>

                </div>
            </a>
            <p className='end-content'>To view the rest of my smaller projects, please visit my <a href="https://github.com/huzaifazia17" target="_blank"><span>Github</span></a></p>
        </div>
    )
}

export default Projects