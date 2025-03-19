import React, { useState } from 'react';
import Logo from '../img/logos/logo-white.svg'
import { Link } from 'react-router-dom';

//IMAGES
import SpecialEventOne from '../img/client_imgs/Special_Event_1.jpg'
import CompanyShowcase from '../img/client_imgs/Millworx.jpg'
import Event from '../img/client_imgs/Event-3.jpg'
import EventTwo from '../img/client_imgs/Yoga.jpg'
import EventThree from '../img/client_imgs/Event.jpg'

//VIDEOS
import Video from '../img/backgrounds/Website_Banner.mp4'
import EventVideo from "../img/videos/LZ_World_Tour.mp4";

//COMPONENTS
import ClientMarquee from '../components/clientMarquee.jsx'
import Footer from '../components/Footer.jsx'
import Preloader from '../components/Preloader.jsx';

//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);

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
            <Preloader />
            <div className="home">
                <div className="hero-section">

                    {!videoLoaded && <div className="banner-placeholder"></div>}

                    {/* Video Element */}
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
            </div>

            <div className="projects-section-home">
                <div className='projects-recap'>
                    <div onMouseEnter={disableOverlay} onMouseLeave={activateOverlay} className='video'>
                        <div className='video-overlay'>
                            <div>
                                <p>see through my lens</p>
                                <FontAwesomeIcon icon={faCirclePlay} />
                            </div>
                        </div>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/t0KDxGAAD0I?si=mki6Q-kBWQUL79fm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
                <h2 className="projects-section-title">PROJECTS</h2>
                <section className="projects">
                    <div className="projects-grid">
                        <a href='#' className="project-item">
                            <img src={SpecialEventOne} alt="Tommy & Victoria" />
                            <div className="project-info">
                                <h3>Tommy & Victoria</h3>
                                <p>Wedding Videography</p>
                            </div>
                        </a>
                        <a href='#' className="project-item">
                            <img src={CompanyShowcase} alt="Millworx" />
                            <div className="project-info">
                                <h3>Millworx</h3>
                                <p>Company Showcase</p>
                            </div>
                        </a>
                        <a href='#' className="project-item project-wide">
                            <video
                                id='hide-mobile'
                                src={EventVideo}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={"project-video"}
                            ></video>
                            <img id='hide-desktop' src={Event} alt="Millworx" />
                            <div className="project-info">
                                <h3>LZ World Tour</h3>
                                <p>Event Coverage</p>
                            </div>
                        </a>
                        <a href='#' className="project-item">
                            <img src={EventTwo} alt="Power Yoga Canada" />
                            <div className="project-info">
                                <h3>Power Yoga Canada</h3>
                                <p>Promotional & Event</p>
                            </div>
                        </a>
                        <a
                            href="#"
                            className="project-item"
                        >
                            <img src={EventThree} alt="Facility Plus" />
                            <div className="project-info">
                                <h3>Facility Plus</h3>
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

            <div className="contact-section">
                {/* Background Image */}
                <div className="contact-image"></div>

                {/* Dark Overlay */}
                <div className="contact-overlay"></div>

                {/* Content */}
                <div className="content">
                    <h2>&emsp;&emsp;UNLOCK VISUALS THAT<br />ELEVATE YOUR BRAND</h2>
                    <div className='content-text'>
                        <p>
                            Have a project in mind? We’re here to help bring your vision to life with high-quality videography, photography, and marketing solutions tailored to your brand. Whether you’re looking to elevate your business or create something truly unique, let’s make it happen. Get in touch today and let’s get started!
                        </p>

                        {/* Contact Button */}
                        <a href="/contact" className="contact-button">
                            BOOK A CONSULT
                        </a>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div >
    )
}

export default Home;