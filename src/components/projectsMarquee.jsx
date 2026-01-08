import React, { useRef } from 'react'
import Marquee from "react-fast-marquee";
import '../css/ProjectMarquee.css'

//IMAGES
import CompanyShowcase from '../img/client_imgs/Millworx-1.jpg'
import Event from '../img/client_imgs/Event-3.jpg'
import EventTwo from '../img/client_imgs/Yoga.jpg'
import EventThree from '../img/client_imgs/Event.jpg'
import CGR from '../img/client_imgs/CGR.jpg'
import NBO from '../img/client_imgs/nbo_cover.jpg'

//VIDEOS
import MillworxVideo from '../img/videos/Millworx.mp4'
import FPVideo from '../img/videos/Facility_Plus.mp4'
import CGRVideo from '../img/videos/cgr_video.mp4'
import PYCVideo from '../img/videos/Power_Yoga_Canada.mp4'
import NBOVideo from '../img/videos/nbo_video.mp4'

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
    const projects = [
        {
            href: "/projects/custom-glass-railings",
            image: CGR,
            video: CGRVideo,
            logo: CGRLogo,
            alt: "Custom Glass Railings"
        },
        {
            href: "/projects/millworx",
            image: CompanyShowcase,
            video: MillworxVideo,
            logo: MillworxLogo,
            alt: "Millworx"
        },
        {
            href: "/projects/power-yoga-canada",
            image: EventTwo,
            video: PYCVideo,
            logo: PycLogo,
            alt: "Power Yoga Canada"
        },
        {
            href: "/projects/facility-plus",
            image: EventThree,
            video: FPVideo,
            logo: FPLogo,
            alt: "Facility Plus"
        },
        {
            href: "/projects/national-bank-open",
            image: NBO,
            video: NBOVideo,
            logo: NBOLogo,
            alt: "National Bank Open"
        }
    ];

    const videoRefs = useRef([]);

    const playVideo = (i) => {
        const v = videoRefs.current[i];
        if (v) v.play().catch(() => { });
    };

    const stopVideo = (i) => {
        const v = videoRefs.current[i];
        if (v) {
            v.pause();
            v.currentTime = 0;
        }
    };

    return (
        <Marquee speed={150} loop={0} className='pm-marquee'>
            {projects.map((project, i) => (
                <a
                    key={i}
                    href={project.href}
                    className="pm-item"
                    onMouseEnter={() => playVideo(i)}
                    onMouseLeave={() => stopVideo(i)}
                >
                    <div className="pm-media">
                        <img
                            src={project.image}
                            alt={project.alt}
                            className="pm-image"
                        />

                        <video
                            ref={(el) => (videoRefs.current[i] = el)}
                            src={project.video}
                            muted
                            loop
                            playsInline
                            autoPlay
                            className="pm-video"
                        />
                    </div>
                    <div className="pm-overlay pm-logo">
                        <img src={project.logo} alt={`${project.alt} logo`} />
                    </div>
                </a>
            ))}
        </Marquee>
    )
}
