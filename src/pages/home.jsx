import React from 'react';
import Logo from '../img/logo.svg'
import { gsap } from 'gsap';
import TextTransition, { presets } from 'react-text-transition';
import CountUp from 'react-countup';
import Marquee from "react-fast-marquee";

//COMPONENTS
import ClientMarquee from '../components/clientMarquee.jsx'
import Footer from '../components/Footer.jsx'

//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faUsersViewfinder } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const TEXTS = [
    "Social Media Managment",
    "Logo Creation",
    "Brand Development",
    "Videography",
    "Photography",
    "Web Development"
];

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

        const logoTl = gsap.timeline();
        const logo = document.querySelector('.logo');
        logoTl.set([logo], { autoAlpha: 0, y: 50 });
        logoTl.to(logo, { autoAlpha: 1, duration: 1, delay: 0.2, ease: "power4.inOut", y: 0 });
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
                <div className="content">
                    <img src={Logo} draggable="false" className="logo" alt='Kmixc-logo' />
                </div>
                <TextTransition className='cycle' springConfig={presets.default}>{TEXTS[index % TEXTS.length]}</TextTransition>
            </div>

            <div className='content-two'>
                <div className='boxes'>
                    <a href="/videography" className='box hover-underline-animation'>
                        <p className='num'>01</p>
                        <div className="title">
                            <p>
                                VIDEOGRAPHY
                            </p>
                            <FontAwesomeIcon icon={faVideo} />
                        </div>
                    </a>
                    <a href="/social-media-management" className='box hover-underline-animation'>
                        <p className='num'>02</p>
                        <div className="title">
                            <p>
                                SOCIAL MEDIA
                            </p>
                            <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                    </a>
                    <a href="/website-development" className='box hover-underline-animation'>
                        <p className='num'>03</p>
                        <div className="title">
                            <p>
                                WEB DESIGN
                            </p>
                            <FontAwesomeIcon icon={faWandMagicSparkles} />
                        </div>
                    </a>
                    <a href="/our-work" className='box hover-underline-animation'>
                        <p className='num'>04</p>
                        <div className="title">
                            <p>
                                OUR WORK
                            </p>
                            <FontAwesomeIcon icon={faUsersViewfinder} />
                        </div>
                    </a>
                </div>
            </div>

            <div className='content-three'>
                <div onMouseEnter={disableOverlay} onMouseLeave={activateOverlay} className='video'>
                    <div className='video-overlay'>
                        <div>
                            <p>see through my lens</p>
                            <FontAwesomeIcon icon={faCirclePlay} />
                        </div>
                    </div>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/kPjIu5laeTg?si=qpe3gYyt__agqVh-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className='clients'>
                    <div className='worked-with'>
                        <h1 className='top'>We worked with</h1>
                        <h1 className='bottom'>Not just <span className='underline'>clients</span>, but <span className='color'>partners</span>.</h1>
                    </div>
                </div>
                <ClientMarquee></ClientMarquee>
            </div>

            <div className='content-four'>

            </div>
            <Footer></Footer>
        </div >
    )
}

export default Home;