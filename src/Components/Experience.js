import React from 'react'
import './Experience.css';
import { FaGreaterThan } from 'react-icons/fa';
import 'aos/dist/aos.css';
import 'animate.css';

const Experience = () => {
    return (
        <div>
            <div className='titleEx'> Experience<hr style={{ width: '50%' }}></hr></div>
            <div className='experience-container'>

                <div className='experience-1' data-aos="zoom-in" data-aos-duration="1000">
                    <div className='title'>
                        <h1><FaGreaterThan /> Engineering Intern</h1>
                        <h2><a href="https://www.opg.ca/" target="_blank" className="link">OPG</a>, Ontario Power Generation: May 2023- August 2024</h2>
                    </div>
                    <div className='description'>
                        <p><span>~</span>Developed a streamlined Work Report tool using Power BI Report Builder, SQL and Python, consolidating data from multiple sources into one interface, automating daily fieldwork reports, and reducing report generation time from legacy tools by 90%. </p>
                        <p><span>~</span>Developed and optimized SQL views, tables, and procedures for large datasets, significantly reducing load times and enhancing performance of legacy systems used for critical project tracking.</p>
                        <p><span>~</span>Designed and implemented automated metric dashboards in Power BI, using Python and SQL to provide real-time insights for project managers, simplifying access to project data for monitoring and enabling faster decision-making.</p>
                    </div>
                </div>
                <div className='experience-2' data-aos="zoom-in" data-aos-duration="2000">
                    <div className='title'>
                        <h1><FaGreaterThan /> Software Research Engineer</h1>
                        <h2><a href="https://www.sain.ca/" target="_blank" className="link">SAIN Lab</a>, Ontario Tech University: May 2023- August 2022</h2>
                    </div>
                    <div className='description'>
                        <p><span>~</span>Designed and implemented a full-stack survey website using JavaScript, HTML, CSS, ExpressJS, Node.js, and MongoDB to raise awareness about Password Managers and the risks associated with weak passwords.</p>
                        <p><span>~</span>Developed and documented Python scripts to analyze data from pilot testers, providing comprehensive process documentation for future reference.</p>
                        <p><span>~</span>Achieved significant engagement, with over 1,000 users completing the survey on Amazon Mechanical Turk, resulting in a 50%+ increase in awareness of password management practices and the dangers of weak passwords.</p>
                    </div>
                </div>
                <div className='experience-3' data-aos="zoom-in" data-aos-duration="3000">
                    <div className='title'>
                        <h1><FaGreaterThan /> Undergraduate Research Assistant</h1>
                        <h2><a href="http://ad2mlabs.com/lab/" target="_blank" className="link">AD2MLabs</a>, Ontario Tech University: May 2023- August 2021</h2>
                    </div>
                    <div className='description'>
                        <p><span>~</span>Developed a program using Python that reads through an ASCII STL file and stores triangle information into a multi layered data structure, enabling rapid identification and resolution of errors.</p>
                        <p><span>~</span>Developed an intuitive 3D visualization tool using PyQt and Qt Designer to assist in the repair of broken STL files.</p>
                        <p><span>~</span>Built and launched three websites (ahmadbarari.com, ad2mlabs.com, robin-team.com) utilizing WordPress, HTML, and CSS, deepening expertise in front-end development and user experience (UX) design.</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Experience