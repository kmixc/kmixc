import React, { useEffect, useState, useRef } from 'react';
import '../css/About.css';
import { Link } from 'react-router-dom';

//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

//IMAGES & VIDEO
import Video from '../img/backgrounds/WEBSITE_MOTION_GRAPHIC.mp4';
import TeamOne from '../img/team/kmixcvisuals-1.jpg';
import TeamThree from '../img/team/kmixcvisuals-3.jpg';
import TeamFour from '../img/team/kmixcvisuals-4.jpg';
import TeamFive from '../img/team/kmixcvisuals-5.jpg';
import Headshot from '../img/team/headshot-min.jpg';

//COMPONENTS
import ClientGrid from '../components/clientGrid.jsx';
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
            <Preloader />
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
            <div className="about-intro">
                <p>Empowering brands to conjure up creative stories</p>
            </div>
            <div className="about-team about-team--single">
                <img ref={el => imageRefs.current[0] = el} src={TeamThree} alt="Our Team" />
            </div>
            <section className="about-description-two">
                <h1>
                    <span>Fearlessly ambitious &</span>
                    <span>thoughtfully authentic</span>
                </h1>
                <div className="about-content">
                    <div className="about-buttons">
                        <Link to="/contact" className="btn btn-primary">Start A Project</Link>
                        <Link to="/projects" className="btn btn-secondary">See Projects</Link>
                    </div>
                    <div className="about-text">
                        <p>We’re a full-stack video marketing agency. Yes, that is a thing. We help brands big and small think up great ideas and transform them into videos and marketing tactics that work. We know that video marketing is always changing and consistently becoming more important in the digital landscape.</p>
                        <br />
                        <p>We’re big geeks about what’s new and what’s interesting – but ultimately dedicated to what’s most effective for our clients.</p>
                    </div>
                </div>
            </section>

            <div className="about-team about-team--double">
                <img ref={el => imageRefs.current[1] = el} src={TeamOne} id='hide-mobile' alt="Team Member 1" />
                <img ref={el => imageRefs.current[2] = el} src={TeamFour} alt="Team Member 2" />
            </div>
            <div className="about-description-one">
                <p><span>ABOUT</span>We’re a studio with diverse roots that want to help companies and organizations with everything creative, art, and technology. We work with a passion for the craft and embrace innovation in our process.</p>
            </div>
            <div className="about-team about-team--single-btm">
                <img ref={el => imageRefs.current[3] = el} src={TeamFive} alt="Team Member" />
            </div>
            <div className="about-clients">
                <p>Some of the <span className='text-change'>brands</span> I've collaborated with over the years</p>
                <ClientGrid />
            </div>
            <Footer />
        </div>
    );
}