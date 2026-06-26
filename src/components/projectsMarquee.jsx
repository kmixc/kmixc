import React, { useEffect, useRef, useState } from 'react'
import '../css/ProjectMarquee.css'

//IMAGES
import CompanyShowcase from '../img/client_imgs/Millworx-1.jpg'
import EventTwo from '../img/client_imgs/Yoga.jpg'
import EventThree from '../img/client_imgs/Event.jpg'
import CGR from '../img/client_imgs/cgr_cover.jpg'
import NBO from '../img/client_imgs/nbo_cover.jpg'

//VIDEOS
import MillworxVideo from '../img/videos/millworx_video.mp4'
import FPVideo from '../img/videos/fp_video.mp4'
import CGRVideo from '../img/videos/cgr_video.mp4'
import PYCVideo from '../img/videos/pyc_video.mp4'
import NBOVideo from '../img/videos/nbo_video.mp4'

import PycLogo from '../img/client_logos/pyc_logo.png'
import FPLogo from '../img/client_logos/facilityplus_logo.png'
import MillworxLogo from '../img/client_logos/millworx_logo.png'
import CGRLogo from '../img/client_logos/customglassrailings_logo.png'
import NBOLogo from '../img/client_logos/NBO_logo.png'

export default function ProjectsMarquee() {
    const projects = [
        {
            href: "/projects/custom-glass-railings",
            image: CGR,
            video: CGRVideo,
            logo: CGRLogo,
            alt: "Custom Glass Railings",
            title: "Custom Glass Railings",
            tagline: "Precision, reframed.",
            category: "Commercial Feature"
        },
        {
            href: "/projects/millworx",
            image: CompanyShowcase,
            video: MillworxVideo,
            logo: MillworxLogo,
            alt: "Millworx",
            title: "Millworx",
            tagline: "Built with detail.",
            category: "Brand Story"
        },
        {
            href: "/projects/national-bank-open",
            image: NBO,
            video: NBOVideo,
            logo: NBOLogo,
            alt: "National Bank Open",
            title: "National Bank Open",
            tagline: "Energy, under lights.",
            category: "Event Coverage"
        },
        {
            href: "/projects/facility-plus",
            image: EventThree,
            video: FPVideo,
            logo: FPLogo,
            alt: "Facility Plus",
            title: "Facility Plus",
            tagline: "Systems in motion.",
            category: "Service Showcase"
        },
        {
            href: "/projects/power-yoga-canada",
            image: EventTwo,
            video: PYCVideo,
            logo: PycLogo,
            alt: "Power Yoga Canada",
            title: "Power Yoga Canada",
            tagline: "Movement, sharpened.",
            category: "Performance Campaign"
        }
    ];

    const videoRefs = useRef([]);
    const hoverTimerRef = useRef(null);
    const switchTimerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(2);
    const [isSwitching, setIsSwitching] = useState(false);

    const changeProject = (index) => {
        if (index === activeIndex) {
            return;
        }

        setIsSwitching(true);
        setActiveIndex(index);

        window.clearTimeout(switchTimerRef.current);
        switchTimerRef.current = window.setTimeout(() => {
            setIsSwitching(false);
        }, 620);
    };

    const activateProject = (index) => {
        if (isSwitching || index === activeIndex) {
            return;
        }

        window.clearTimeout(hoverTimerRef.current);
        hoverTimerRef.current = window.setTimeout(() => {
            changeProject(index);
        }, 110);
    };

    const setProjectImmediately = (index) => {
        window.clearTimeout(hoverTimerRef.current);
        changeProject(index);
    };

    useEffect(() => {
        videoRefs.current.forEach((video, index) => {
            if (!video) {
                return;
            }

            if (index === activeIndex) {
                video.play().catch(() => { });
                return;
            }

            video.pause();
            video.currentTime = 0;
        });
    }, [activeIndex]);

    useEffect(() => {
        return () => {
            window.clearTimeout(hoverTimerRef.current);
            window.clearTimeout(switchTimerRef.current);
        };
    }, []);

    return (
        <section className={`pm-showcase ${isSwitching ? 'is-switching' : ''}`}>
            <div className='pm-rail' role='list' aria-label='Featured projects'>
                {projects.map((project, index) => {
                    const isActive = index === activeIndex;

                    return (
                        <a
                            key={project.href}
                            href={project.href}
                            className={`pm-item ${isActive ? 'is-active' : ''}`}
                            onClick={(event) => {
                                if (!isActive) {
                                    event.preventDefault();
                                    setProjectImmediately(index);
                                }
                            }}
                            onPointerEnter={() => activateProject(index)}
                            onFocus={() => setProjectImmediately(index)}
                            aria-current={isActive ? 'true' : undefined}
                        >
                            <div className="pm-media">
                                <img
                                    src={project.image}
                                    alt={project.alt}
                                    className="pm-image"
                                />

                                <video
                                    ref={(el) => (videoRefs.current[index] = el)}
                                    src={project.video}
                                    muted
                                    loop
                                    playsInline
                                    preload='metadata'
                                    className="pm-video"
                                />
                            </div>

                            <div className="pm-scrim"></div>

                            <div className='pm-content'>
                                <img className='pm-content-logo' src={project.logo} alt={`${project.alt} logo`} />
                                <span className='pm-link'>View Project</span>
                            </div>
                        </a>
                    );
                })}
            </div>
        </section>
    )
}
