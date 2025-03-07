import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { gsap } from 'gsap';
import '../css/Navbar.css'
import Logo from '../img/logos/logo-white.svg'


//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance, faInstagram, faLinkedin, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Cross as Hamburger } from 'hamburger-react';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
        setIsOpen(!isOpen);
    };

    const openMenu = () => {
        gsap.to('.menu', { x: 0, duration: 0.3, ease: 'power4.out' });
        gsap.to('.btm-menu', { x: 0, duration: 0.3, ease: 'power4.out' });
        gsap.to('.hamburger-react', { color: "#000", duration: 1, ease: 'power4.out' });
        gsap.to('.nav-overlay', { opacity: "0.7", visibility: "visible", duration: 1, ease: 'power4.out' });
    };

    const closeMenu = () => {
        gsap.to('.menu', { x: '-100%', duration: 0.3, ease: 'power4.inOut', onComplete: resetMenu });
        gsap.to('.btm-menu', { x: '-100%', duration: 0.3, ease: 'power4.inOut', onComplete: resetMenu });
        gsap.to('.hamburger-react', { color: "rgb(32, 32, 32)", duration: 1, ease: 'power4.out' });
        gsap.to('.nav-overlay', { opacity: "0", visibility: "hidden", duration: 5, ease: 'power4.out' });
    };

    const resetMenu = () => {
        gsap.set('.menu', { clearProps: 'all' });
        gsap.set('.btm-menu', { clearProps: 'all' });
    };

    return (
        <div>
            <div className='nav-overlay'></div>
            <div className='navbar'>
                <div className={`menu ${isOpen ? 'open' : ''}`}>
                    <div className='menu-links'>
                        <Link className='menu-item' onClick={toggleMenu} to="/home">home</Link>
                        <Link className='menu-item' onClick={toggleMenu} to="/our-work">projects</Link>
                        <Link className='menu-item' onClick={toggleMenu} to="/videography">services</Link>
                        <Link className='menu-item' onClick={toggleMenu} to="/about">about</Link>
                    </div>

                    <a className='nav-contact-link' href="#">Start A Project</a>

                    <div className='nav-bottom'>
                        <span className=''>© Kmixc Visuals 2025</span>
                        <span>|</span>
                        <span><a href="#">Privacy Policy</a></span>
                    </div>
                </div>

                <div className="nav-btn">
                    <Hamburger toggled={isOpen} toggle={toggleMenu} />
                </div>
            </div>
        </div>
    )
}
