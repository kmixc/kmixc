import React from 'react';
import Logo from '../img/logo.svg'
import { gsap } from 'gsap';
import TextTransition, { presets } from 'react-text-transition';
import CountUp from 'react-countup';
import Marquee from "react-fast-marquee";

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
        tl.to(overlay, { duration: 1, ease: "power4.inOut", y: -1100 });

        const tlTwo = gsap.timeline();
        const contentTwo = document.querySelector('.content-two');
        tlTwo.set([contentTwo], { height: 0 });
        tlTwo.to(contentTwo, { duration: 2, ease: "power4.inOut", height: "100vh" });

        const logoTl = gsap.timeline();
        const logo = document.querySelector('.logo');
        logoTl.set([logo], { autoAlpha: 0, y: 50 });
        logoTl.to(logo, { autoAlpha: 1, duration: 1, delay: 0.2, ease: "power4.inOut", y: 0 });
    };

    return (
        <div>

            <div className="home">
                <div className="overlay">
                    <CountUp onEnd={countEnd} className='countup-overlay' suffix='%' end={100} />
                    <Marquee className='marquee-overlay'>
                        welcome to your new branding.
                        welcome to your new branding.
                    </Marquee>
                </div>
                <div className="content">
                    <img src={Logo} draggable="false" className="logo" />
                </div>
            </div>
            <div className='content-two'>
            </div>
            <TextTransition className='cycle' springConfig={presets.default}>{TEXTS[index % TEXTS.length]}</TextTransition>
        </div>
    )
}

export default Home;