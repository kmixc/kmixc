import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../css/Preloader.css';
import Logo from '../img/logos/logo.svg'; // Adjust the path to your logo

const Preloader = () => {
    const preloaderRef = useRef(null);
    const logoRef = useRef(null);

    useEffect(() => {
        const preloader = preloaderRef.current;
        const logo = logoRef.current;

        // GSAP animation for the preloader
        gsap.timeline()
            .fromTo(logo, { y: '100%' }, { y: '0%', duration: 1, ease: "power2.out" })
            .to(logo, { y: '-100%', duration: 1, ease: "power2.in" })
            .to(preloader, {
                y: '-100%',
                duration: 1,
                ease: "power2.inOut",
                onComplete: () => {
                    preloader.style.display = 'none';
                }
            }, "-=0.5"); // Overlap the animations slightly
    }, []);

    return (
        <div ref={preloaderRef} className="preloader">
            <div className="preloader-content">
                <img ref={logoRef} src={Logo} alt="Logo" className="preloader-logo" />
            </div>
        </div>
    );
};

export default Preloader;