import React from 'react'
import './Experience.css';

const Experience = () => {
    return (
        <div>
            <div className='experience-container animate__animated animate__fadeInLeftBig'>
                <div className='titleEx'> <span>-----</span>Experience<span>-----</span></div>
                <div className='experience-1'>
                    <div className='title'>
                        <h1>Undergraduate Research Assistant</h1>
                        <h2><a href="https://www.sain.ca/" target="_blank" className="link">SAIN Lab</a>, Ontario Tech University: May- August 2022</h2>
                    </div>
                    <div className='description'>
                        <p><span>~</span>Worked with a highly qualified team of researchers and professors to increase awareness <br></br> of Password Managers and the effect of having a weak password. Presented relative papers,{"\n"} ideas, and solutions to the team. </p>
                        <p><span>~</span>Developed a full stack survey website using JavaScript, HTML, CSS, ExpressJS, Node.js, MongoDB to learn about <br></br>and spread awareness on the use and risks of Password Managers. </p>
                        <p><span>~</span>Wrote various python scripts to analyze results from pilot testers and wrote documentation on the entire process. </p>
                    </div>
                </div>
                <div className='experience-2'>
                    <div className='title'>
                        <h1>Peer Tutor/ Software Engineer Tutor</h1>
                        <h2>Ontario Tech University: September 2021- May 2022</h2>
                    </div>
                    <div className='description'>
                        <p><span>~</span>Conducted Physics study hall and one on one tutoring sessions to tutees in Introduction to programming (C++),<br></br>Data Structures & Algorithms (Python), Web Programming and Object-Oriented Programming (Java).</p>
                        <p><span>~</span>Guided students down the path of independent learning and encouraged active participation leading to tutees<br></br> understanding programming concepts well.</p>
                        <p><span>~</span>Learned to better explain technical concepts, give detailed feedback, and received Positive feedback from students.</p>
                    </div>
                </div>
                <div className='experience-3'>
                    <div className='title'>
                        <h1>Undergraduate Research Assistant</h1>
                        <h2><a href="http://ad2mlabs.com/lab/" target="_blank" className="link">AD2MLabs</a>, Ontario Tech University: May- August 2021</h2>
                    </div>
                    <div className='description'>
                        <p><span>~</span>Developed a program using Python that reads through an ASCII STL file and stores triangle information<br></br> into a multi layered data structure. This program will be used for further research by PhD students. </p>
                        <p><span>~</span>Developed a CAD GUI using PyQt and Qt Designer that displays an STL file in 3D, with many user functionalities<br></br> such as seeing triangle information, to be used in further research to repair STL files.</p>
                        <p><span>~</span>Developed three websites (ahmadbarari.com, ad2mlabs.com, robin-team.com) using WordPress, HTML and CSS,<br></br> increasing my understanding of front end developing and UX design. </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Experience