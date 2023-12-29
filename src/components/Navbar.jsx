import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { gsap } from 'gsap';
import '../css/Navbar.css'
import Logo from '../img/logo-white.svg'


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
        gsap.to('.menu', { y: 0, duration: 0.3, ease: 'power4.out' });
        gsap.to('.btm-menu', { y: 0, duration: 0.3, ease: 'power4.out' });
        gsap.to('.hamburger-react', { color: "#fff", duration: 1, ease: 'power4.out' });

        const textTl = gsap.timeline();
        const socialsTl = gsap.timeline();
        const linksTl = gsap.timeline();
        const yearTl = gsap.timeline();
        const contactTl = gsap.timeline();
        const overlayTl = gsap.timeline();

        const title = document.querySelector('.menu-title');
        const year = document.querySelector('.btm-menu-year');
        const contact = document.querySelector('.btm-menu-item');
        const links = document.querySelector('.menu-links');
        const socials = document.querySelector('.menu-socials');
        const overlay = document.querySelector('.nav-overlay');

        textTl.set([title], { autoAlpha: 0 });
        textTl.set([title], { y: -50 });
        textTl.to([title], { delay: 0.5, autoAlpha: 1, y: 0, duration: 2, ease: 'power2.out' });

        yearTl.set([year], { autoAlpha: 0, x: -50 });
        yearTl.to([year], { delay: 0.5, autoAlpha: 1, x: 0, duration: 1, ease: 'power2.out' });

        contactTl.set([contact], { autoAlpha: 0, y: 20 });
        contactTl.to([contact], { delay: 0.5, autoAlpha: 1, y: 0, duration: 1, ease: 'power2.out' });

        linksTl.set([links], { autoAlpha: 0, x: -30 });
        linksTl.to(links, { delay: 0.5, autoAlpha: 1, x: 0, duration: 1, ease: 'power2.out' });

        socialsTl.set([socials], { y: 20, autoAlpha: 0 });
        socialsTl.to([socials], { delay: 0.5, autoAlpha: 1, y: 0, duration: 1, ease: 'power2.out' });

        overlayTl.set([overlay], { y: '-200%', opacity: 1, zIndex: -2, height: '200%' });
        overlayTl.to([overlay], { y: '-0%', duration: 2, ease: 'power2.out', opacity: 1, height: '900%', zIndex: 3 });

    };

    const closeMenu = () => {
        gsap.to('.menu', { y: '-100%', duration: 0.3, ease: 'power4.inOut', onComplete: resetMenu });
        gsap.to('.btm-menu', { y: '-100%', duration: 0.3, ease: 'power4.inOut', onComplete: resetMenu });
        gsap.to('.hamburger-react', { color: "rgb(32, 32, 32)", duration: 1, ease: 'power4.out' });
        gsap.to('.nav-overlay', { y: '-100%', duration: 1, ease: 'power2.out' });
        gsap.to('.nav-overlay', { y: '-100%', duration: 1, ease: 'power2.out', height: '0%' });
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
                    <div className='top-menu'>
                        <Link to="/"><img className='menu-title' src={Logo} alt="Kmixc-Logo" /></Link>
                    </div>
                    <div className='menu-links'>
                        <Link className='menu-item' onClick={toggleMenu} to="/about">about</Link>
                        <Link className='menu-item' onClick={toggleMenu} to="/our-work">our work</Link>
                        <Link className='menu-item' onClick={toggleMenu} to="/videography">videography</Link>
                        <Link className='menu-item' onClick={toggleMenu} to="/social-media-management">social management</Link>
                        <Link className='menu-item' onClick={toggleMenu} to="/website-development">website development</Link>
                    </div>
                    <div className='menu-socials'>
                        <a href="https://www.instagram.com/kmixcvisuals/" target='social'>
                            <FontAwesomeIcon icon={faInstagram} size='xl' />
                        </a>
                        <a href="https://www.youtube.com/@kmixc/shorts" target='social'>
                            <FontAwesomeIcon icon={faYoutube} size='xl' />
                        </a>
                        <a href="https://www.tiktok.com/@kmixc" target='social'>
                            <FontAwesomeIcon icon={faTiktok} size='xl' />
                        </a>
                        <a href="https://www.linkedin.com/in/oliver-kmiec-5b601b1b0/" target='social'>
                            <FontAwesomeIcon icon={faLinkedin} size='xl' />
                        </a>
                        <a href="https://www.behance.net/kmixc" target='social'>
                            <FontAwesomeIcon icon={faBehance} size='xl' />
                        </a>
                    </div>
                </div>
                <div className='btm-menu'>
                    <div className='btm-menu-year'>
                        <p>©2023</p>
                    </div>
                    <div className='btm-menu-links'>
                        <Link className='btm-menu-item' onClick={toggleMenu} to="/contact">contact</Link>
                    </div>
                </div>
                <div className="nav-btn">
                    <Hamburger toggled={isOpen} toggle={toggleMenu} />
                </div>
            </div>
        </div>
    )
}
