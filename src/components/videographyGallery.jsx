import React from 'react'

//IMAGES
import BUSINESS from '../img/client_imgs/MILLWORX_10.jpg'
import RENOVATION from '../img/client_imgs/RENO_GURUS_6.png'
import EVENT from '../img/client_imgs/007_MANSION_PARTY_1.png'
import PODCAST from '../img/client_imgs/BASEM_HANNA_3.png'
import BARBER from '../img/client_imgs/BOBBY_BULLETS_1.png'
import AUTOMOTIVE from '../img/client_imgs/PLANET_AUTO_GLASS_4.png'
import REAL_ESTATE from '../img/client_imgs/BURLINGTON_REAL_ESTATE_3.png'
import INTERVIEW from '../img/client_imgs/CPBA_INTERVIEW_2.png'

export default function videographyGallery() {
    return (
        <div className='video-gallery'>
            <h1>VISUALS</h1>
            <div className='cards'>
                <a href='#' className='card'>
                    <p className="title">BUSINESS <br /> VIDEOGRAPHY</p>
                    <img src={BUSINESS} alt="Millworx_Business" />
                </a>
                <a href='#' className='card'>
                    <p className="title">RENOVATION <br /> VIDEOGRAPHY</p>
                    <img src={RENOVATION} alt="Renovations" />
                </a>
                <a href='#' className='card'>
                    <p className="title">EVENT <br /> VIDEOGRAPHY</p>
                    <img src={EVENT} alt="Events" />
                </a>
                <a href='#' className='card'>
                    <p className="title">PODCAST <br /> VIDEOGRAPHY</p>
                    <img src={PODCAST} alt="Podcasts" />
                </a>
                <a href='#' className='card'>
                    <p className="title">BARBER <br /> VIDEOGRAPHY</p>
                    <img src={BARBER} alt="Barber" />
                </a>
                <a href='#' className='card'>
                    <p className="title">AUTOMOTIVE <br /> VIDEOGRAPHY</p>
                    <img src={AUTOMOTIVE} alt="Automotive" />
                </a>
                <a href='#' className='card'>
                    <p className="title">REAL ESTATE <br /> VIDEOGRAPHY</p>
                    <img src={REAL_ESTATE} alt="Real Estate" />
                </a>
                <a href='#' className='card'>
                    <p className="title">INTERVIEW <br /> VIDEOGRAPHY</p>
                    <img src={INTERVIEW} alt="Interview" />
                </a>
            </div>
        </div>
    )
}
