import React, { useEffect } from 'react'
import '../css/About.css'
import { Link } from 'react-router-dom'
import Logo from '../img/logos/logo-white.svg'

//IMAGES & VIDEO
import Video from '../img/backgrounds/WEBSITE_MOTION_GRAPHIC.mp4'

//COMPONENTS
import Footer from '../components/Footer'

//GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export default function About() {

    // useEffect(() => {
    //     gsap.to(".logo", {
    //         width: 300,
    //         scrollTrigger: {
    //             trigger: ".about-top-bar",
    //             scrub: true,
    //             markers: true
    //         },
    //     });
    // }, []);

    return (
        <div className='about-page'>
            <div className="about-section">
                <video autoPlay loop muted playsInline className="background-video">
                    <source src={Video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="banner-overlay"></div>
                <div className="about-logo">
                    <img src={Logo} alt="Kmixc Visuals Logo" />
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}
