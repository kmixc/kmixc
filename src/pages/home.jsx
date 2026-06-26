import React, { useState } from 'react';

//VIDEOS
import Video from '../img/backgrounds/Website_Banner.mp4'

//COMPONENTS
import ProjectsMarquee from '../components/projectsMarquee.jsx'
import Footer from '../components/Footer.jsx'
import Preloader from '../components/Preloader.jsx';

//IMAGES
import ProcessVisualOne from '../img/client_imgs/Event.jpg'
import ProcessVisualTwo from '../img/client_imgs/Millworx-1.jpg'
import ProcessVisualThree from '../img/client_imgs/RX7.jpg'
import TeamFeatureImage from '../img/team/kmixcvisuals-3.jpg'

//CLIENT LOGOS
import PycLogo from '../img/client_logos/pyc_logo.png'
import FPLogo from '../img/client_logos/facilityplus_logo.png'
import LululemonLogo from '../img/client_logos/lululemon_logo.png'
import MillworxLogo from '../img/client_logos/millworx_logo.png'
import CGRLogo from '../img/client_logos/customglassrailings_logo.png'
import RoundLogo from '../img/client_logos/9round_kickboxing_logo.png'
import OdinLogo from '../img/client_logos/odin_logo.png'
import NBOLogo from '../img/client_logos/NBO_logo.png'
import ImportFestLogo from '../img/client_logos/importfest_logo.png'
import RWBLogo from '../img/client_logos/rwb_logo.png'
import MckillansLogo from '../img/client_logos/mckillans_logo.png'
import UndergroundLogo from '../img/client_logos/underground_logo.png'
import CPCCLogo from '../img/client_logos/CPCC_logo.png'
import OrbisLogo from '../img/client_logos/orbis_logo.png'

const processItems = [
    {
        number: '01',
        title: 'We Envision.',
        lead: 'Bold ideas, smart strategies.',
        points: [
            'Concept Development & Ideation',
            'Creative Direction',
            'Content Strategy'
        ],
        image: ProcessVisualOne,
        alt: 'Event coverage project still'
    },
    {
        number: '02',
        title: 'We Craft.',
        lead: 'From concept to creation.',
        points: [
            'Scriptwriting & Storyboarding',
            'Full-Scale Video Production',
            'Editing & Post-Production'
        ],
        image: ProcessVisualTwo,
        alt: 'Millworx production project still'
    },
    {
        number: '03',
        title: 'We Deliver.',
        lead: 'Turning vision into impact.',
        points: [
            'Campaign Strategy & Management',
            'Data-Driven Optimization',
            'Video Tailored for Max Engagement'
        ],
        image: ProcessVisualThree,
        alt: 'Automotive filming project still'
    }
]

const Home = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [activeProcessIndex, setActiveProcessIndex] = useState(0);

    return (
        <div>
            <Preloader />
            <div className="home">
                <div className="hero-section" data-navbar-theme="light">

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
                    <div className="hero-text">
                        <h1 className='hero-title'>
                            VISUALS THAT MOVE BRANDS FORWARD
                        </h1>
                        <h2 className='hero-subtitle'>Made to <span className='hero-font-change'>perform</span>.</h2>
                        <a href="/contact" className="hero-button">Let's Create</a>
                    </div>
                </div>
            </div>

            <div className="trusted-section" data-navbar-theme="dark">
                <p className="trusted-statement">
                    Crafting meaningful visual stories through thoughtful strategy and creative execution.</p>

                <p className="trusted-label">SUPPORTED BY</p>

                <div className="trusted-logos">
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

            <div className="projects-section-home" data-navbar-theme="light">
                <ProjectsMarquee></ProjectsMarquee>
            </div>

            <section className="home-story-section" data-navbar-theme="light">
                <div className="home-story-media">
                    <img src={TeamFeatureImage} alt="Kmixc Visuals founders on set" />
                </div>

                <div className="home-story-content">
                    <p className="home-story-kicker">About Kmixc</p>
                    <h2>
                        Founded by <span>filmmakers</span>.<br />
                        Driven by <span>story</span>.
                    </h2>
                    <p className="home-story-copy">
                        We blend production instincts with marketing strategy to create visual work that feels intentional, cinematic, and built to move brands forward.
                    </p>
                    <a href="/about" className="hero-button home-story-button">About Us</a>
                </div>
            </section>

            <div className="process-section" data-navbar-theme="dark">
                <div className="process-layout">
                    <div className="process-copy">
                        <div className="process-grid">
                            {processItems.map((item, index) => (
                                <div
                                    key={item.number}
                                    className={`process-item ${activeProcessIndex === index ? 'is-active' : ''}`}
                                    onMouseEnter={() => setActiveProcessIndex(index)}
                                    onFocus={() => setActiveProcessIndex(index)}
                                    tabIndex={0}
                                >
                                    <div className="process-title-row">
                                        <span className="process-number">{item.number}</span>
                                        <h3>{item.title}</h3>
                                    </div>

                                    <p className="process-lead">{item.lead}</p>

                                    <ul>
                                        {item.points.map((point) => (
                                            <li key={point}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="process-visual">
                        <img
                            src={processItems[activeProcessIndex].image}
                            alt={processItems[activeProcessIndex].alt}
                        />
                    </div>
                </div>
            </div>


            <div className="contact-section" data-navbar-theme="light">
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