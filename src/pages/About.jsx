import React from 'react'
import '../css/About.css'
import Logo from '../img/logo.svg'
import { Link } from 'react-router-dom'

//IMAGES & VIDEO
import IMG_1 from '../img/Kmixc-1.JPG'
import IMG_2 from '../img/Kmixc-2.jpg'

//COMPONENTS
import Footer from '../components/Footer'

export default function About() {
    return (
        <div className='about-page'>
            <div className='about-top-bar' id='#top'>
                <Link to="/"><img className='logo' src={Logo} alt="kmixcvisuals" /></Link>
            </div>

            <div className='about-section-1'>
                <p className='text'>Driven by passion, bound by
                    expertise; our team, the heartbeat
                    of innovation, sculpting digital
                    dreams into reality.
                </p>
            </div>

            <div className='about-picture'>
                <img src={IMG_1} className='picture' alt="" />
            </div>

            <div className='about-section-2'>
                <p className='text'>
                    We’re a studio with diverse roots
                    that want to help companies and
                    organizations with everything creative,
                    art and technology. We work with a
                    passion for the craft and embrace
                    innovation in our process.
                </p>
            </div>

            <div className='about-section-3'>
                <div className='big-text'>
                    <p>OUR</p>
                    <p>MISSION</p>
                </div>
            </div>

            <div className='about-section-4'>
                <img src={IMG_2} className='picture' alt="" />
            </div>

            <Footer></Footer>
        </div>
    )
}
