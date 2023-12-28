import React from 'react'
import Logo from '../img/logo.svg'
import '../css/Footer.css'

//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'



export default function Footer() {
    return (
        <div className='footer'>
            <div className='logo'>
                <img src={Logo} alt="" />
            </div>
            <div className='quick-links'>
                <a className='icon' href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
                <a className='text' href="/contact">Contact Today</a>
                <a className='text' href="#">Join the team</a>
                <a className='icon' href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
            <div className='nav'>
                <div className='links'>
                    <p>Explore</p>
                    <ul>
                        <li><a href="#">Explore</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Insights</a></li>
                    </ul>
                </div>
                <div className='links'>
                    <p>Expertise</p>
                    <ul>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Creative</a></li>
                        <li><a href="#">Capabilities</a></li>
                    </ul>
                </div>
                <div className='links'>
                    <p>Solutions</p>
                    <ul>
                        <li><a href="#">Videography</a></li>
                        <li><a href="#">Web Design</a></li>
                        <li><a href="#">Social Media</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
