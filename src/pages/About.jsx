import React, { useEffect, useState, useRef } from 'react';
import '../css/About.css';
import { Link } from 'react-router-dom';
import Logo from '../img/logos/logo-white.svg';
import Logo2 from '../img/logos/logo.svg';

//IMAGES & VIDEO
import Video from '../img/backgrounds/WEBSITE_MOTION_GRAPHIC.mp4';
import TeamOne from '../img/team/kmixcvisuals-1.jpg';
import TeamTwo from '../img/team/kmixcvisuals-2.JPG';
import TeamThree from '../img/team/kmixcvisuals-3.jpg';
import TeamFour from '../img/team/kmixcvisuals-4.jpg';
import TeamFive from '../img/team/kmixcvisuals-5.jpg';

//COMPONENTS
import ClientGrid from '../components/clientGrid.jsx';
import Icon from '../components/Icon.jsx';
import Footer from '../components/Footer.jsx';
import Preloader from '../components/Preloader.jsx';

//GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const imageRefs = useRef([]);

    useEffect(() => {
        imageRefs.current.forEach((image, index) => {
            gsap.fromTo(image,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: image,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }, []);

    return (
        <div className='about-page'>
            <Icon />
            <Preloader />
            <Link className='logo' to={"/"}>
                <img src={Logo2} alt="Kmixc Visuals" />
            </Link>
            <div className="about-section">
                {!videoLoaded && <div className="banner-placeholder"></div>}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`background-video ${videoLoaded ? "loaded" : ""}`}
                    onLoadedData={() => setVideoLoaded(true)}
                >
                    <source src={Video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="banner-overlay"></div>
                <div className="about-logo">
                    <img src={Logo} loading="lazy" alt="Kmixc Visuals Logo" />
                </div>
            </div>
            <div className="about-intro">
                <p>Empowering brands to conjure up creative stories</p>
            </div>
            <div className="about-team about-team--single">
                <img ref={el => imageRefs.current[0] = el} src={TeamThree} loading="lazy" alt="Our Team" />
            </div>
            <div className="about-description-one">
                <p><span>ABOUT</span>We’re a studio with diverse roots that want to help companies and organizations with everything creative, art, and technology. We work with a passion for the craft and embrace innovation in our process.</p>
            </div>
            <div className="about-team about-team--double">
                <img ref={el => imageRefs.current[1] = el} src={TeamOne} loading="lazy" id='hide-mobile' alt="Team Member 1" />
                <img ref={el => imageRefs.current[2] = el} src={TeamFour} loading="lazy" alt="Team Member 2" />
            </div>
            <section className="about-description-two">
                <h1>
                    <span>Fearlessly ambitious &</span>
                    <span>thoughtfully authentic</span>
                </h1>
                <div className="about-content">
                    <div className="about-buttons">
                        <a href="#" className="btn btn-primary">Start A Project</a>
                        <a href="#" className="btn btn-secondary">See Projects</a>
                    </div>
                    <div className="about-text">
                        <p>We’re a full-stack video marketing agency. Yes, that is a thing. We help brands big and small think up great ideas and transform them into videos and marketing tactics that work. We know that video marketing is always changing and consistently becoming more important in the digital landscape.</p>
                        <br />
                        <p>We’re big geeks about what’s new and what’s interesting – but ultimately dedicated to what’s most effective for our clients.</p>
                    </div>
                </div>
            </section>
            <div className="about-team about-team--single-btm">
                <img ref={el => imageRefs.current[3] = el} src={TeamFive} loading="lazy" alt="Team Member" />
            </div>
            <div className="about-clients">
                <p>Some of the <span className='text-change'>brands</span> I've collaborated with over the years</p>
                <ClientGrid />
            </div>
            <Footer />
        </div>
    );
}