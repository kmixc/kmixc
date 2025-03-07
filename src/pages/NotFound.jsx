import React, { useEffect } from 'react'
import "../css/NotFound.css"
import { Link } from 'react-router-dom'
import { gsap } from 'gsap';
import Logo from '../img/logos/logo.svg'

export default function NotFound() {

    return (
        <div className='not-found-section'>
            <Link to={"/home"}>
                <img src={Logo} alt="Kmixc Visuals" />
            </Link>
            <div className='not-found-info'>
                <div className='section-one'>
                    <div className="links">
                        <Link to="/projects" className="item-link big-link">PROJECTS</Link>
                        <Link to="/videography" className="item-link">VIDEOGRAPHY</Link>
                        <Link to="/photography" className="item-link">PHOTOGRAPHY</Link>
                        <Link to="/website-development" className="item-link">WEBSITE DESIGN</Link>
                    </div>
                    <div>
                        <Link to="/contact" className='email' id='hide-mobile'>OLIVER@KMIXC.COM</Link>
                    </div>
                    <div className='socials' id='hide-mobile'>
                        <a href="#">INSTAGRAM</a>
                        <a href="#">LINKEDIN</a>
                        <a href="#">YOUTUBE</a>
                    </div>
                </div>

                <div className='middle-mobile' id='hide-desktop'>
                    <Link to="/contact" className='email'>OLIVER@KMIXC.COM</Link>
                    <div className='socials' >
                        <a href="#">INSTAGRAM</a>
                        <a href="#">LINKEDIN</a>
                        <a href="#">YOUTUBE</a>
                    </div>
                </div>

                <div className='section-two'>
                    <div className="links">
                        <Link to="/about" className="item-link">ABOUT</Link>
                        <Link to="/contact" className="item-link">CONTACT</Link>
                    </div>
                    <div className="bottom">
                        <a href="#">PRIVACY POLICY</a>
                        <a href="#">COMMERCIAL COPYRIGHT</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
