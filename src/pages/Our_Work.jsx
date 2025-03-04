import React, { useRef, useState } from 'react';
import '../css/ourWork.css'
import Logo from '../img/logos/logo.svg'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap';
import CountUp from 'react-countup';

import { InstagramEmbed } from 'react-social-media-embed';


export default function Our_Work() {
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
        logoTl.to(logo, { autoAlpha: 1, duration: 1, delay: 0.4, ease: "power4.inOut", y: 0 });
    };

    return (
        <div className='our-work-page'>

            <div className="overlay-transparent">
                <CountUp duration={1} onEnd={countEnd} className='countup-overlay' suffix='%' end={100} />
            </div>
            <div className="overlay"></div>
            <div className='top-bar' id='#top'>
                <Link to="/"><img className='logo' src={Logo} alt="kmixcvisuals" /></Link>
            </div>
            <div className='top'>
                <div className='our-work-title'>
                    <h1 className='date'>2023</h1>
                    <h1 className='title'>DEMO REEL</h1>
                </div>

                <div className='video-background'>
                    <video autoplay="autoplay" loop="loop" muted defaultMuted playsInline style={{ maxWidth: "1000%" }} id='myVideo'>
                        <source src="" />
                    </video>
                </div>

            </div>


        </div>
    )
}
