import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { gsap } from 'gsap';
import { Cross as Hamburger } from 'hamburger-react';
import '../css/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance, faInstagram, faLinkedin, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { text } from '@fortawesome/fontawesome-svg-core';

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

        const title = document.querySelector('.menu-title');
        const year = document.querySelector('.btm-menu-year');
        const contact = document.querySelector('.btm-menu-item');
        const links = document.querySelector('.menu-links');
        const socials = document.querySelector('.menu-socials');

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
    };

    const closeMenu = () => {
        gsap.to('.menu', { y: '-100%', duration: 0.3, ease: 'power4.inOut', onComplete: resetMenu });
        gsap.to('.btm-menu', { y: '-100%', duration: 0.3, ease: 'power4.inOut', onComplete: resetMenu });
        gsap.to('.hamburger-react', { color: "rgb(32, 32, 32)", duration: 1, ease: 'power4.out' });

    };

    const resetMenu = () => {
        gsap.set('.menu', { clearProps: 'all' });
        gsap.set('.btm-menu', { clearProps: 'all' });
    };

    return (
        <div>
            <div className='navbar'>
                <div className={`menu ${isOpen ? 'open' : ''}`}>
                    <div className='top-menu'>
                        <p className='menu-title'>kmixc visuals</p>
                    </div>
                    <div className='menu-links'>
                        <Link className='menu-item' onClick={toggleMenu} to="/">home</Link>
                        <Link className='menu-item' onClick={toggleMenu} to="/about">about</Link>
                        <Link className='menu-item' onClick={toggleMenu} to="/contact">videography</Link>
                        <Link className='menu-item' onClick={toggleMenu} to="/contact">social management</Link>
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
