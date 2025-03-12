import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useLocation } from 'react-router-dom';
import '../css/PageTransition.css';
import Logo from '../img/logos/logo.svg'; // Adjust the path to your logo

const PageTransition = () => {
    const transitionRef = useRef(null);
    const blockRefs = useRef([]);
    const logoRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const transition = transitionRef.current;
        const blocks = blockRefs.current;
        const logo = logoRef.current;

        // GSAP animation for the page transition
        const tl = gsap.timeline();
        tl.set(transition, { display: 'block' })
            .to(blocks, { y: '0%', duration: 0.5, ease: "power2.out", stagger: 0.1 })
            .fromTo(logo, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.5")
            .to(blocks, { y: '-100%', duration: 0.5, ease: "power2.in", stagger: 0.1, delay: 0.5 })
            .to(logo, { opacity: 0, duration: 0.3, ease: "power2.in" }, "-=0.5")
            .set(transition, { display: 'none' });

        return () => {
            tl.kill();
        };
    }, [location]);

    return (
        <div ref={transitionRef} className="page-transition">
            <div ref={el => blockRefs.current[0] = el} className="transition-block block1"></div>
            <div ref={el => blockRefs.current[1] = el} className="transition-block block2"></div>
            <div ref={el => blockRefs.current[2] = el} className="transition-block block3"></div>
            <div className="logo-container">
                <img ref={logoRef} src={Logo} alt="Logo" className="transition-logo" />
            </div>
        </div>
    );
};

export default PageTransition;