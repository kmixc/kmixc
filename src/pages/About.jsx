import React, { useEffect } from 'react'
import '../css/About.css'
import { Link } from 'react-router-dom'
import Logo from '../img/logos/logo-white.svg'

//IMAGES & VIDEO
import Video from '../img/backgrounds/WEBSITE_MOTION_GRAPHIC.mp4'
import TeamOne from '../img/team/kmixcvisuals-1.jpg'
import TeamTwo from '../img/team/kmixcvisuals-2.JPG'
import TeamThree from '../img/team/kmixcvisuals-3.jpg'
import TeamFour from '../img/team/kmixcvisuals-4.jpg'
import TeamFive from '../img/team/kmixcvisuals-5.jpg'

//COMPONENTS
import clientGrid from '../components/clientGrid.jsx'
import Footer from '../components/Footer.jsx'

//GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export default function About() {

    return (
        <div className='about-page'>
            <div className="about-section">
                <video autoPlay loop muted playsInline className="background-video">
                    <source src={Video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="banner-overlay"></div>
                <div className="about-logo">
                    <img src={Logo} alt="Kmixc Visuals Logo" />
                </div>
            </div>

            <div>
                <p>Empowering brands to conjure up creative stories</p>
            </div>

            <div>
                <img src={TeamThree} alt="" />
            </div>

            <div>
                <p>We’re a studio with diverse roots that want to help companies and organizations with everything creative, art and technology. We work with a passion for the craft and embrace innovation in our process.</p>
            </div>

            <div>
                <img src={TeamOne} alt="" />
                <img src={TeamFour} alt="" />
            </div>

            <div>
                <p>We’re a studio with diverse roots that want to help companies and organizations with everything creative, art and technology. We work with a passion for the craft and embrace innovation in our process.</p>
            </div>

            <div>
                <img src={TeamFive} alt="" />
            </div>

            <div>
                <p>some of the brands I've collaborated with over the years</p>
                <clientGrid />
            </div>

            <Footer></Footer>
        </div>
    )
}
