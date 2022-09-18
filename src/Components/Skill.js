import React from 'react'
import './Skill.css';
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

const Skill = () => {
    return (
        <div class="big-C">


            <div className='title'>My Skills<hr style={{ width: '25%' }}></hr></div>
            <div className='skills__container' data-aos="fade-left" data-aos-duration="2500">
                <ul>
                    <div className='skill'><li className='skillsSub'><div className='skill1'><img src={htmlimg} style={{ width: "3em", height: "3em" }} /></div>
                        <p>HTML5</p></li></div>
                    <div className='skill'><li className='skillsSub'><div className='skill2'><img src={javaimg} style={{ width: "3em", height: "3em" }} /></div>
                        <p>Java</p></li></div>
                    <div className='skill'><li className='skillsSub'><div className='skill3'><img src={Angular} style={{ width: "3em", height: "3em" }} /></div>
                        <p>Angular</p></li></div>
                    <div className='skill'><li className='skillsSub'><div className='skill4'><img src={ReactA} style={{ width: "3em", height: "3em" }} /></div>
                        <p>React</p></li></div>
                    <div className='skill'><li className='skillsSub'><div className='skill5'><img src={Python} style={{ width: "3em", height: "3em" }} /></div>
                        <p>Python</p></li></div>
                    <div className='skill'><li className='skillsSub mobileChange' id="mobileChange"><div className='skill5'><img src={djangoImg} style={{ width: "3em", height: "3em" }} /></div>
                        <p>Django</p></li></div>
                </ul>
                <ul>
                    <div className='skill'><li className='skillsSub'><div className='skill6'><img src={cssimg} style={{ width: "3em", height: "3em" }} /></div>
                        <p>CSS3</p></li></div>
                    <div className='skill'><li className='skillsSub'><div className='skill7'><img src={sqlimg} style={{ width: "3em", height: "3em" }} /></div>
                        <p>MySQL</p></li></div>
                    <div className='skill'><li className='skillsSub'><div className='skill8'><img src={jsimg} style={{ width: "3em", height: "3em" }} /></div>
                        <p>Javascript</p></li></div>
                    <div className='skill'><li className='skillsSub'><div className='skill9'><img src={mongodb} style={{ width: "3em", height: "3em" }} /></div>
                        <p>Mongodb</p></li></div>
                    <div className='skill'><li className='skillsSub'><div className='skill10'><img src={Express} style={{ width: "3em", height: "3em" }} /></div>
                        <p>ExpressJS</p></li></div>
                    <div className='skill'><li className='skillsSub mobileChange' id="mobileChange"><div className='skill5'><img src={scss} style={{ width: "3em", height: "3em" }} /></div>
                        <p>SCSS</p></li></div>
                </ul >

            </div >



        </div >
    )
}

export default Skill