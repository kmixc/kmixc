import React from 'react'
import '../css/Footer.css'

//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareBehance, faSquareInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'




export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <div className='links'>
                    <a href="/our-work">WORK</a>
                    <a href="/about">ABOUT</a>
                    <a href="/contact">CONTACT</a>
                </div>

                <div className='socials'>
                    <a href="https://www.instagram.com/kmixcvisuals/" target='social'>
                        <FontAwesomeIcon icon={faSquareInstagram} size='xl' />
                    </a>
                    <a href="https://www.linkedin.com/in/oliver-kmiec-5b601b1b0/" target='social'>
                        <FontAwesomeIcon icon={faLinkedin} size='xl' />
                    </a>
                    <a href="https://www.behance.net/kmixc" target='social'>
                        <FontAwesomeIcon icon={faSquareBehance} size='xl' />
                    </a>
                </div>
            </div>

            <div className='box-holder'>
                <div className='box'>
                    <a href="#top">BACK TO THE TOP</a>
                    <p>©2024 KMIXC VISUALS</p>
                </div>
            </div>
        </div>
    )
}