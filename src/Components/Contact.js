import React from 'react'
import './Contact.css';
import { AiFillMail, AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillPhone } from 'react-icons/ai';

const Contact = () => {
    return (
        <div className='contact-c'>
            <div className='title' data-aos="zoom-in-down" data-aos-duration="1500"> Contact Me<hr style={{ width: '75%' }}></hr></div>
            <div>
                <ul className='world'>
                    <li><a href="https://www.linkedin.com/in/huzaifa-zia-86673b206/" target="_blank"><AiFillLinkedin /></a></li>
                    <li><a href="https://github.com/huzaifazia17" target="_blank"><AiFillGithub /></a></li>
                    <li><a href="mailto:huzaifa.zia@ontariotechu.net" target="_blank"><AiFillMail /></a></li>
                    <li><a href="https://twitter.com/HuzaifaZia17" target="_blank"><AiFillTwitterCircle /></a></li>
                    <li><a href="tel:+19052437932" target="_blank"><AiFillPhone /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Contact