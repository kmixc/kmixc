import React from 'react';
import Logo from '../img/logos/logo-white.svg'
import Video from '../img/backgrounds/Website_Banner.mp4'
import { gsap } from 'gsap';
import TextTransition, { presets } from 'react-text-transition';
import CountUp from 'react-countup';
import Marquee from "react-fast-marquee";

//IMAGES
import Wedding from '../img/client_imgs/Wedding.jpg'
import Millworx from '../img/client_imgs/Millworx.jpg'
import Event from '../img/client_imgs/Event-3.jpg'

//COMPONENTS
import ClientMarquee from '../components/clientMarquee.jsx'
import Footer from '../components/Footer.jsx'

//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            1500, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    //useEffect(() => {
    // Reveal Animation
    //const tl = gsap.timeline();

    // Elements to animate
    //const overlay = document.querySelector('.overlay');
    // const title = document.querySelector('.title');
    // const subtitle = document.querySelector('.subtitle');
    // const features = document.querySelectorAll('.feature');

    // Initial state (hidden)
    //tl.set([title, subtitle, features], { autoAlpha: 0 });

    // Animation
    //tl.to(overlay, { duration: 1, delay: 1.2, ease: "power4.inOut", y: -1100 });

    // tl.to(title, { autoAlpha: 1, y: -20, duration: 1 });
    // tl.to(subtitle, { autoAlpha: 1, y: -10, duration: 1 });a
    // tl.to(features, { autoAlpha: 1, y: -10, duration: 0.5, stagger: 0.2 });
    //}, []);

    const countEnd = () => {
        const tl = gsap.timeline();
        const overlay = document.querySelector('.overlay');
        tl.to(overlay, { duration: 1, ease: "power4.inOut", y: -4100 });

        const text_tl = gsap.timeline();
        const text_overlay = document.querySelector('.overlay-transparent');
        text_tl.to(text_overlay, { duration: 1, ease: "power4.inOut", y: -4100 });

    };

    function disableOverlay() {
        let overlay = document.querySelector('.video-overlay');
        overlay.style.opacity = 0;
        overlay.style.visibility = "hidden";
    }

    function activateOverlay() {
        let overlay = document.querySelector('.video-overlay');
        setTimeout(() => {
            overlay.style.opacity = 1;
            overlay.style.visibility = "visible";
        }, 5000);
    }

    return (
        <div>
            <div className="home">
                <div className="overlay-transparent">
                    <CountUp onEnd={countEnd} className='countup-overlay' suffix='%' end={100} />
                    <Marquee className='marquee-overlay'>
                        welcome to your new branding.
                        welcome to your new branding.
                    </Marquee>
                </div>

                <div className="overlay"></div>

                <div className="hero-section">
                    <video autoPlay loop muted playsInline className="background-video">
                        <source src={Video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="banner-overlay"></div>
                    <div className="hero-logo">
                        <img src={Logo} alt="Kmixc Visuals Logo" />
                    </div>
                    <h1 className="hero-text">
                        <span>HARNESS THE</span>
                        <span>POTENTIAL OF YOUR</span>
                        <span>BUSINESS WITH STUNNING</span>
                        <span>VISUALS & DIGITAL</span>
                        <span>EXPERTISE.</span>
                    </h1>
                    <p className="hero-subtext">
                        Providing businesses and companies with high-quality videography,
                        photography, and marketing solutions.
                    </p>
                    <a href="/contact" className="hero-button">Contact Us</a>
                </div>
            </div>

            <div className="services-section">
                <h2 className="services-section-title">
                    A <span className="highlight">production</span> partner for brands and agencies.
                </h2>

                <div className="services-section-links">
                    <a href="/our-work">Our Work</a>
                    <a href="/about">About</a>
                    <a href="/videography">Videography</a>
                    <a href="/web-development">Web Development</a>
                    <a href="/photography">Photography</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>

            <div className="projects-section">
                <div className='projects-recap'>
                    <div onMouseEnter={disableOverlay} onMouseLeave={activateOverlay} className='video'>
                        <div className='video-overlay'>
                            <div>
                                <p>see through my lens</p>
                                <FontAwesomeIcon icon={faCirclePlay} />
                            </div>
                        </div>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/t0KDxGAAD0I?si=mki6Q-kBWQUL79fm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
                <h2 className="projects-section-title">PROJECTS</h2>
                <section className="projects">
                    <div className="projects-grid">
                        <a className="project-item">
                            <img src={Wedding} alt="Tommy & Victoria" />
                            <div className="project-info">
                                <h3>Tommy & Victoria</h3>
                                <p>Wedding Videography</p>
                            </div>
                        </a>
                        <a className="project-item">
                            <img src={Millworx} alt="Millworx" />
                            <div className="project-info">
                                <h3>Millworx</h3>
                                <p>Company Showcase</p>
                            </div>
                        </a>
                        <a href='#' className="project-item project-wide">
                            <img src={Event} alt="LZ World Tour" />
                            <div className="project-info">
                                <h3>LZ World Tour</h3>
                                <p>Event Coverage</p>
                            </div>
                        </a>
                    </div>
                </section>
            </div>

            <div className="worked-with-section">
                <div className='clients'>
                    <div className='worked-with'>
                        <h1 className='top'>We worked with</h1>
                        <h1 className='bottom'>Not just <span className='underline'>clients</span>, but <span className='color'>partners</span>.</h1>
                    </div>
                </div>
                <ClientMarquee></ClientMarquee>
            </div>


            <Footer></Footer>
        </div >
    )
}

export default Home;