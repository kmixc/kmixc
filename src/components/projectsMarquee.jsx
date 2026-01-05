import React, { useRef } from 'react'
import Marquee from "react-fast-marquee";
import '../css/ProjectMarquee.css'

//IMAGES
import SpecialEventOne from '../img/client_imgs/Special_Event_1.jpg'
import CompanyShowcase from '../img/client_imgs/Millworx-1.jpg'
import Event from '../img/client_imgs/Event-3.jpg'
import EventTwo from '../img/client_imgs/Yoga.jpg'
import EventThree from '../img/client_imgs/Event.jpg'

//VIDEOS
import TestVideo from '../img/backgrounds/Website_Banner.mp4'

//CLIENT LOGOS
import PycLogo from '../img/client_logos/pyc_logo.png'
import FPLogo from '../img/client_logos/facilityplus_logo.png'
import LululemonLogo from '../img/client_logos/lululemon_logo.png'
import MillworxLogo from '../img/client_logos/millworx_logo.png'
import CGRLogo from '../img/client_logos/customglassrailings_logo.png'
import RoundLogo from '../img/client_logos/9round_kickboxing_logo.png'
import OdinLogo from '../img/client_logos/odin_logo.png'
import NBOLogo from '../img/client_logos/NBO_logo.png'
import ImportFestLogo from '../img/client_logos/importfest_logo.png'
import RWBLogo from '../img/client_logos/rwb_logo.png'
import MckillansLogo from '../img/client_logos/mckillans_logo.png'
import UndergroundLogo from '../img/client_logos/underground_logo.png'
import CPCCLogo from '../img/client_logos/CPCC_logo.png'
import OrbisLogo from '../img/client_logos/orbis_logo.png'

export default function ProjectsMarquee() {
    const videoRef1 = useRef(null)

    const handleMouseEnter = (e) => {
        const video = e.currentTarget.querySelector('.pm-video')
        if (!video) return

        video.currentTime = 0
        video.play().catch(() => { })
    }

    const handleMouseLeave = (e) => {
        const video = e.currentTarget.querySelector('.pm-video')
        if (!video) return

        video.pause()
        video.currentTime = 0
    }

    return (
        <Marquee speed={100} loop={0} className='pm-marquee'>
            <a
                href="/projects/millworx"
                className="pm-item"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="pm-media">
                    <img
                        className="pm-image"
                        src={CompanyShowcase}
                        alt="Millworx"
                    />

                    <video
                        className="pm-video"
                        src={TestVideo}
                        muted
                        loop
                        playsInline
                        preload="none"

                    />
                </div>

                <div className="pm-overlay">
                    <img className="pm-logo" src={MillworxLogo} alt="Power Yoga Canada" />
                </div>
            </a>

            <a
                href="/projects/power-yoga-canada"
                className="pm-item"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="pm-media">
                    <img
                        className="pm-image"
                        src={EventTwo}
                        alt="Tommy & Victoria"
                    />

                    <video
                        className="pm-video"
                        src={TestVideo}
                        muted
                        loop
                        playsInline
                        preload="none"

                    />
                </div>

                <div className="pm-overlay">
                    <img className="pm-logo" src={PycLogo} alt="Power Yoga Canada" />
                </div>
            </a>

            <a
                href="/projects/facility-plus"
                className="pm-item"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="pm-media">
                    <img
                        className="pm-image"
                        src={EventThree}
                        alt="Tommy & Victoria"
                    />

                    <video
                        className="pm-video"
                        src={TestVideo}
                        muted
                        loop
                        playsInline
                        preload="none"

                    />
                </div>

                <div className="pm-overlay">
                    <img className="pm-logo" src={FPLogo} alt="Power Yoga Canada" />
                </div>
            </a>

        </Marquee>
    )
}
