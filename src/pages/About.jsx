import React, { useEffect, useState, useRef } from 'react';
import '../css/About.css';
import { Link } from 'react-router-dom';

//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

//IMAGES & VIDEO
import Video from '../img/videos/about_website.mp4';
import Headshot from '../img/team/headshot-min.jpg';
import TeamFeatureImage from '../img/team/bts_2.jpg';
import ProcessVisualOne from '../img/client_imgs/Event.jpg';
import ProcessVisualTwo from '../img/client_imgs/Millworx-1.jpg';
import ProcessVisualThree from '../img/client_imgs/RX7.jpg';

//CLIENT LOGOS
import PycLogo from '../img/client_logos/pyc_logo.png';
import FPLogo from '../img/client_logos/facilityplus_logo.png';
import LululemonLogo from '../img/client_logos/lululemon_logo.png';
import MillworxLogo from '../img/client_logos/millworx_logo.png';
import CGRLogo from '../img/client_logos/customglassrailings_logo.png';
import RoundLogo from '../img/client_logos/9round_kickboxing_logo.png';
import OdinLogo from '../img/client_logos/odin_logo.png';
import NBOLogo from '../img/client_logos/NBO_logo.png';
import ImportFestLogo from '../img/client_logos/importfest_logo.png';
import RWBLogo from '../img/client_logos/rwb_logo.png';
import MckillansLogo from '../img/client_logos/mckillans_logo.png';
import UndergroundLogo from '../img/client_logos/underground_logo.png';
import CPCCLogo from '../img/client_logos/CPCC_logo.png';
import OrbisLogo from '../img/client_logos/orbis_logo.png';

//COMPONENTS
import Footer from '../components/Footer.jsx';
import Preloader from '../components/Preloader.jsx';

//GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const processItems = [
    {
        number: '01',
        title: 'Define.',
        lead: 'Building the foundation for your story.',
        points: [
            'Brand Discovery',
            'Creative Strategy',
            'Project Planning'
        ],
        image: ProcessVisualOne,
        alt: 'Event coverage project still'
    },
    {
        number: '02',
        title: 'Produce.',
        lead: 'Creating visuals with intention.',
        points: [
            'Cinematic Video',
            'Professional Photography',
            'Precision Editing'
        ],
        image: ProcessVisualTwo,
        alt: 'Millworx production project still'
    },
    {
        number: '03',
        title: 'Refine.',
        lead: 'Delivering work that performs.',
        points: [
            'Optimized Assets',
            'Website Integration',
            'Content Management'
        ],
        image: ProcessVisualThree,
        alt: 'Automotive filming project still'
    }
];

export default function About() {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [activeProcessIndex, setActiveProcessIndex] = useState(0);
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
            <Preloader />
            <div className="about-section" data-navbar-theme="light">
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
                <div className="about-hero-text">
                    <h1 className="about-hero-title">About Us.</h1>
                    <Link to="/contact" className="hero-button">Let's Create</Link>
                </div>
            </div>
            <section className="about-founder">
                <div className="about-founder-images">
                    <img src={Headshot} alt="Oliver Kmiec" className="about-founder-img" />
                </div>
                <div className="about-founder-info">
                    <h2 className="about-founder-name">Oliver Kmiec</h2>
                    <p className="about-founder-role">Founder <span>&</span> Creative Director</p>
                    <p className="about-founder-bio">
                        I believe the best stories aren't just seen, they're felt. As a filmmaker and creative director, I'm committed to turning ideas into visuals that spark imagination, emotion, and meaning. For years I've been immersed in filmmaking, working with brands, businesses, and individuals to craft compelling videos that connect, inspire, and leave a lasting impact. From concept development to final edit, I love every part of the process, blending storytelling, cinematography, and post-production to create work that truly resonates.
                    </p>
                    <div className="about-founder-socials">
                        <a href="https://instagram.com/kmixcvisuals" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://www.linkedin.com/in/oliver-kmiec-5b601b1b0/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://www.youtube.com/@kmixc" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </div>
                </div>
            </section>

            <section className="about-story-section" data-navbar-theme="light">
                <div className="about-story-media">
                    <img src={TeamFeatureImage} alt="Kmixc Visuals founders on set" />
                </div>

                <div className="about-story-content">
                    <p className="about-story-kicker">Our Story</p>
                    <h2>
                        Built from <span>passion</span>.<br />
                        Driven by <span>purpose</span>.
                    </h2>
                    <p className="about-story-copy">
                        Kmixc was born out of a shared obsession with great filmmaking and a frustration with content that felt forgettable. We started because we believed brands deserved more than generic visuals — they deserved stories worth watching. Every project we take on is a chance to do something that actually means something.
                    </p>
                    <a href="/contact" className="hero-button about-story-button">Work With Us</a>
                </div>
            </section>

            <div className="about-process-section" data-navbar-theme="dark">
                <div className="about-process-header">
                    <p className="about-process-kicker">Our Process</p>
                    <h2>From vision to <span>impact</span>.</h2>
                </div>

                <div className="about-process-grid">
                    {processItems.map((item, index) => (
                        <div
                            key={item.number}
                            className={`about-process-item ${activeProcessIndex === index ? 'about-is-active' : ''}`}
                            onMouseEnter={() => setActiveProcessIndex(index)}
                            onFocus={() => setActiveProcessIndex(index)}
                            tabIndex={0}
                        >
                            <div className="about-process-title-row">
                                <span className="about-process-number">{item.number}</span>
                                <h3>{item.title}</h3>
                            </div>

                            <p className="about-process-lead">{item.lead}</p>

                            <ul>
                                {item.points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="about-trusted-section" data-navbar-theme="dark">
                <p className="about-trusted-statement">
                    Crafting meaningful visual stories through thoughtful strategy and creative execution.</p>

                <p className="about-trusted-label">SUPPORTED BY</p>

                <div className="about-trusted-logos">
                    <img src={PycLogo} alt="PYC Logo" />
                    <img src={FPLogo} alt="FacilityPlus Logo" />
                    <img src={LululemonLogo} alt="Lululemon Logo" />
                    <img src={MillworxLogo} alt="Millworx Logo" />
                    <img src={CGRLogo} alt="Custom Glass Railings Logo" />
                    <img src={RoundLogo} alt="9Round Kickboxing Logo" />
                    <img src={OdinLogo} alt="Odin Logo" />
                    <img src={NBOLogo} alt="NBO Logo" />
                    <img src={ImportFestLogo} alt="Import Fest Logo" />
                    <img src={RWBLogo} alt="RWB Logo" />
                    <img src={MckillansLogo} alt="Mckillans Logo" />
                    <img src={UndergroundLogo} alt="Underground Logo" />
                    <img src={CPCCLogo} alt="CPCC Logo" />
                    <img src={OrbisLogo} alt="Orbis Logo" />
                </div>
            </div>

            <Footer />
        </div>
    );
}