import React, { useEffect } from 'react'
import "../css/NotFound.css"
import { Link } from 'react-router-dom'
import { gsap } from 'gsap';
import Logo from '../img/logos/logo.svg'

export default function NotFound() {

    // useEffect(() => {
    //     //Reveal Animation
    //     const tl = gsap.timeline();

    //     //Elements to animate
    //     //const overlay = document.querySelector('.overlay');
    //     const logo = document.querySelector('.logo');
    //     const title = document.querySelector('.title');
    //     const desc = document.querySelector('.desc');
    //     const btn = document.querySelectorAll('.btn');

    //     //Initial state (hidden)
    //     tl.set([title, desc, btn], { autoAlpha: 0, y: 20 });
    //     tl.set([logo], { autoAlpha: 1 });

    //     //Animation
    //     //tl.to(overlay, { duration: 1, ease: "power4.inOut", y: -1100 });
    //     tl.to(logo, { duration: 1, autoAlpha: 0, ease: "power4.inOut", delay: 0.5, y: -450 });
    //     tl.to(title, { autoAlpha: 1, y: 0, ease: "power4.inOut", duration: 0.5 });
    //     tl.to(desc, { autoAlpha: 1, y: 0, ease: "power4.inOut", duration: 0.5 });
    //     tl.to(btn, { autoAlpha: 1, y: 0, ease: "power4.inOut", duration: 0.5 });
    // }, []);

    // let pageLocation = window.location.pathname;

    return (
        <div className='not-found'>

        </div>
    )
}
