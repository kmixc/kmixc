import React, { useState } from 'react';
import Logo from '../img/logos/logo-white_2.svg'

//VIDEOS
import Video from '../img/backgrounds/Website_Banner.mp4'

//COMPONENTS
import ProjectsMarquee from '../components/projectsMarquee.jsx'
import Footer from '../components/Footer.jsx'
import Preloader from '../components/Preloader.jsx';

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

const Home = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);

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
                    <div className="hero-text">
                        <h1 className='hero-title'>
                            Ideas, crafted with impact.
                        </h1>
                        <a href="/contact" className="hero-button">Let's Create</a>
                    </div>
                </div>
            </div>

            <div className="trusted-section">
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

            <div className="projects-section-home">
                <ProjectsMarquee></ProjectsMarquee>
                <a href="/projects" className='hero-button p-btn'>View Work</a>
            </div>

            <div className="process-section">
                <div className="process-grid">

                    <div className="process-item">
                        <span className="process-number">01</span>
                        <h3>We Envision.</h3>

                        <p className="process-lead">Bold ideas, smart strategies.</p>
                        <p className="process-text">
                            We craft innovative solutions to build your brand.
                        </p>

                        <ul>
                            <li>Concept Development & Ideation</li>
                            <li>Creative Direction</li>
                            <li>Content Strategy</li>
                        </ul>
                    </div>

                    <div className="process-item">
                        <span className="process-number accent">02</span>
                        <h3>We Craft.</h3>

                        <p className="process-lead">From concept to creation.</p>
                        <p className="process-text">
                            We craft visually striking content that sparks engagement.
                        </p>

                        <ul>
                            <li>Scriptwriting & Storyboarding</li>
                            <li>Full-Scale Video Production</li>
                            <li>Editing & Post-Production</li>
                        </ul>
                    </div>

                    <div className="process-item">
                        <span className="process-number accent">03</span>
                        <h3>We Deliver.</h3>

                        <p className="process-lead">Turning vision into impact.</p>
                        <p className="process-text">
                            We ensure your content reaches the right audience and delivers results.
                        </p>

                        <ul>
                            <li>Campaign Strategy & Management</li>
                            <li>Data-Driven Optimization</li>
                            <li>Video Tailored for Max Engagement</li>
                        </ul>
                    </div>

                </div>

                <button className="process-cta">Our Services</button>
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