import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../css/Preloader.css';
import Logo from '../img/logos/logo.svg'; // Adjust the path to your logo

const Preloader = () => {
    const preloaderRef = useRef(null);

    useEffect(() => {
        const preloader = preloaderRef.current;

        // GSAP animation for the preloader
        gsap.timeline()
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
        <div ref={preloaderRef} className="preloader"></div>
    );
};

export default Preloader;