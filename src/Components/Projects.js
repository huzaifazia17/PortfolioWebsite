import React from 'react'
import './Projects.css';
import h2z2 from '../Images/h2z2.png';
import robo from '../Images/robo.png';
import barcode from '../Images/barcode.png';
import 'animate.css';
import { FaGreaterThan } from 'react-icons/fa';
import 'aos/dist/aos.css';
import 'animate.css';

const Projects = () => {

    return (
        <div>
            <div className='titlePr' style={{ width: '100%' }}><h2>Projects<hr style={{ width: '50%' }}></hr></h2></div>

            <div className='Projects-container '>


                <div className='project1 ' data-aos="zoom-in" data-aos-duration="2000">
                    <div className='project-image'>
                        <img src={h2z2} alt="h2z2" style={{ width: "8em", height: "6em" }} />
                    </div>
                    <div className='project-info'>
                        <a href="https://h2z2groceries.netlify.app/" target="_blank"><h1><FaGreaterThan /> Online Grocery Store</h1></a>
                        <h3><span>~</span>Designed and developed a full stack responsive online grocery store, implemented an authentication system, built Home, Product & dynamic Cart Pages using React. Also used MySQl and heroku to host. View <a href="https://github.com/huzaifazia17/Online_Grocery_Store" target="_blank" style={{ textDecoration: 'Underline', color: '#34bbff' }}>Github</a> </h3>
                        <div className='techUsed'><h3><span>ReactJS Redux ExpressJS MySQL React-Router</span></h3></div>
                    </div>

                </div>

                <div className='project2' data-aos="zoom-in" data-aos-duration="2000">
                    <div className='project-image'>
                        <img src={robo} alt="robo" style={{ width: "8em", height: "6em" }} />
                    </div>
                    <div className='project-info'>
                        <a href="https://huzaifazia17.github.io/DH8Transcriber/" target="_blank"><h1><FaGreaterThan /> Audio/Video Transcriber</h1></a>
                        <h3><span>~</span>Designed and developed an audio/video transcriber within 4 hours for a hackathon using AssemblyAI’s transcription API and Generated the transcription into a formatted HTML document, dividing the text into chapters. View <a href="https://github.com/huzaifazia17/DH8Transcriber" target="_blank" style={{ textDecoration: 'Underline', color: '#34bbff' }}>Github</a>   </h3>
                        <div className='techUsed'><h3><span>HTML CSS Javascript AssemblyAI-API </span></h3></div>
                    </div>

                </div>


                <div className='project3' data-aos="zoom-in" data-aos-duration="2000">
                    <div className='project-image'>
                        <img src={barcode} alt="barcode" style={{ width: "8em", height: "6em" }} />
                    </div>
                    <div className='project-info'>
                        <a href="https://github.com/huzaifazia17/ContentBasedImageRetrieval" target="_blank"><h1><FaGreaterThan /> Content Based Image Retrieval </h1></a>
                        <h3><span>~</span>Designed and developed a Python program that converts a black and white image into a barcode using angled projections. The progam allows the user to search for the most similar barcode with an accuracy fo greater than 80%. </h3>
                        <div className='techUsed'><h3><span>Python Pillow Numpy Visual-Studio-Code </span></h3></div>
                    </div>

                </div>


            </div>
            <p className='end-content'>To view the rest of my smaller projects, please visit my <a href="https://github.com/huzaifazia17" target="_blank"><span>Github</span></a></p>
        </div>
    )
}

export default Projects