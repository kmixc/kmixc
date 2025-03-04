import React, { useEffect } from 'react'
import '../css/About.css'
import { Link } from 'react-router-dom'

//IMAGES & VIDEO

//COMPONENTS
import Footer from '../components/Footer'

//GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export default function About() {

    // useEffect(() => {

    //     gsap.to(".logo", {
    //         width: 300,
    //         scrollTrigger: {
    //             trigger: ".about-top-bar",
    //             scrub: true,
    //             markers: true
    //         },
    //     });

    // }, []);

    return (
        <div className='about-page'>

            <Footer></Footer>
        </div>
    )
}
