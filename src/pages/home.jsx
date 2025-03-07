import React from 'react';
import { useState } from "react";
import Logo from '../img/logos/logo-white.svg'
import { gsap } from 'gsap';
import TextTransition, { presets } from 'react-text-transition';
import CountUp from 'react-countup';
import Marquee from "react-fast-marquee";

//IMAGES
import Wedding from '../img/client_imgs/Wedding.jpg'
import CompanyShowcase from '../img/client_imgs/Millworx.jpg'
import Event from '../img/client_imgs/Event-3.jpg'
import EventTwo from '../img/client_imgs/Yoga.jpg'
import EventThree from '../img/client_imgs/Event.jpg'

//VIDEOS
import Video from '../img/backgrounds/Website_Banner.mp4'
import CompanyShowcaseVideo from "../img/videos/Millworx.mp4";
import EventVideo from "../img/videos/LZ_World_Tour.mp4";
import EventTwoVideo from "../img/videos/Power_Yoga_Canada.mp4";
import EventThreeVideo from "../img/videos/Facility_Plus.mp4";
import WeddingVideo from "../img/videos/Tommy_&_Victoria.mp4";

//COMPONENTS
import ClientMarquee from '../components/clientMarquee.jsx'
import Footer from '../components/Footer.jsx'
import Icon from '../components/Icon';

//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

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

    const projectData = [
        {
            title: "Tommy & Victoria",
            description: "Wedding Videography",
            imgSrc: Wedding,
            videoSrc: WeddingVideo,
        },
        {
            title: "Millworx",
            description: "Company Showcase",
            imgSrc: CompanyShowcase,
            videoSrc: CompanyShowcaseVideo,
        },
        {
            title: "LZ World Tour",
            description: "Event Coverage",
            imgSrc: Event,
            videoSrc: EventVideo,
            wide: true,
        },
        {
            title: "Power Yoga Canada",
            description: "Promotional & Event",
            imgSrc: EventTwo,
            videoSrc: EventTwoVideo,
        },
        {
            title: "Facility Plus",
            description: "Event Coverage",
            imgSrc: EventThree,
            videoSrc: EventThreeVideo,
        },
    ];

    return (
        <div>
            <Icon></Icon>
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
                        <a href='#' className="project-item">
                            <img src={Wedding} alt="Tommy & Victoria" />
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
                                src={EventVideo}
                                autoPlay
                                loop
                                muted
                                className={"project-video"}
                            ></video>
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
                            <p>BOOK A CONSULT</p>
                        </a>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div >
    )
}

export default Home;