import { Button } from 'bootstrap';
import './Landing.css';
import ParticlesC from './ParticlesC';
import { Link } from "react-scroll";
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const Landing = () => {
    return (
        <div >
            <header className="nav">
                <div className='logo'>
                    <h3>HZ</h3>
                </div>
                <nav className="nav__container__actions">
                    <div className='nav__container'>
                        <ul>
                            <li>
                                <Link activeClass="active" smooth spy to="home">
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link activeClass="active" smooth spy to="about">
                                    ABOUT
                                </Link></li>
                            <li>
                                <Link activeClass="active" smooth spy to="experience">
                                    EXPERIENCE
                                </Link></li>
                            <li>
                                <Link activeClass="active" smooth spy to="projects">
                                    PROJECTS
                                </Link></li>
                            <li >
                                <Link activeClass="active" smooth spy to="contact">
                                    CONTACT
                                </Link></li>
                            <li className='resume'>
                                <button>RESUMÉ</button>
                            </li>
                        </ul>
                    </div>
                </nav>

            </header>
            <div className='sections'>
                <section id="home"><Home /></section>

                <section id="about"><About /></section>
                <section id="experience"><Experience /></section>
                <section id="projects"><Projects /></section>
                <section id="contact"><Contact /></section>
            </div>
        </div>
    );
}

export default Landing