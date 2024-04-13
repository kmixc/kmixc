import React from 'react'
import '../css/About.css'
import Logo from '../img/logo.svg'
import { Link } from 'react-router-dom'


export default function About() {
    return (
        <div className='about-page'>
            <div className='about-top-bar' id='#top'>
                <Link to="/"><img className='logo' src={Logo} alt="kmixcvisuals" /></Link>
            </div>

            <div className='title'>
                <p>ABOUT KMIXC VISUALS</p>
            </div>

            <div className='about-me'>
            </div>

            <div className='picture-box'>
                <div className='picture'>
                    <img src="https://placehold.co/400x600" alt="" />
                </div>
                <div className='info'>
                    <p>
                        Hey there! I'm Oliver Kmiec, the brains behind Kmixc Visuals. I wear many hats—videographer, social media manager, and web developer.
                        With a knack for storytelling, I capture moments that leave a lasting impression. As a social media manager, I craft engaging content strategies to elevate brands. And as a web developer, I design seamless digital experiences that reflect the essence of each brand.
                        I'm passionate about creativity, innovation, and delivering top-notch solutions to my clients. Let's create something amazing together!
                    </p>
                </div>
            </div>
        </div>
    )
}
