import React from "react";
import '../css/Projects.css'

//IMAGES
import CompanyShowcase from '../img/client_imgs/Millworx-1.jpg'
import Event from '../img/client_imgs/Event-3.jpg'
import EventTwo from '../img/client_imgs/Yoga.jpg'
import EventThree from '../img/client_imgs/Event.jpg'
import EventNine from '../img/client_imgs/Event-7.jpg'
import Renovation from '../img/client_imgs/cgr_cover.jpg'
import Restaurant from '../img/client_imgs/Finkle.jpg'

import EventVideo from "../img/videos/LZ_World_Tour.mp4";
import EventTwoVideo from "../img/videos/pyc_video.mp4";
import RenovationVideo from '../img/videos/cgr_video.mp4'
import NBOVideo from '../img/videos/nbo_video.mp4'
import MillworxVideo from '../img/videos/millworx_video.mp4'
import FacilityPlusVideo from '../img/videos/fp_video.mp4'

//LOGOS
import MillworxLogo from '../img/client_logos/millworx_logo.png'
import FacilityPlusLogo from '../img/client_logos/facilityplus_logo.png'
import CGRLogo from '../img/client_logos/customglassrailings_logo.png'
import PYCLogo from '../img/client_logos/pyc_logo.png'
import NBOLogo from '../img/client_logos/NBO_logo.png'
import NBOCover from '../img/client_imgs/nbo_cover.jpg'

//COMPONENTS
import Preloader from '../components/Preloader';
import Footer from '../components/Footer.jsx'

const projectsData = [
    { id: 1, title: "Millworx", img: CompanyShowcase, video: MillworxVideo, logo: MillworxLogo, description: "Company Showcase", route: "/projects/millworx" },
    { id: 2, title: "Facility Plus", img: EventThree, video: FacilityPlusVideo, logo: FacilityPlusLogo, description: "Event Coverage", route: "/projects/facility-plus" },
    { id: 3, title: "LZ World Tour", video: EventVideo, img: Event, description: "Event Coverage", route: "/projects/lz-world-tour" },
    { id: 4, title: "Custom Glass Railings", video: RenovationVideo, img: Renovation, logo: CGRLogo, description: "Renovation", route: "/projects/custom-glass-railings" },
    { id: 5, title: "Power Yoga Canada", video: EventTwoVideo, img: EventTwo, logo: PYCLogo, description: "Promotional & Event", route: "/projects/power-yoga-canada" },
    { id: 6, title: "National Bank Open", img: NBOCover, video: NBOVideo, logo: NBOLogo, description: "Event Coverage", route: "/projects/national-bank-open" },
    { id: 7, title: "Finkle Street Tap & Grill", img: Restaurant, description: "Restaurant Coverage", route: "/projects/finkle-street-tap-&-grill" },
    { id: 8, title: "Slammedenuff Sevierville", img: EventNine, description: "Event Coverage", route: "/projects/slammedenuff-sevierville-2024" },
];

const handleMouseEnter = (e) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
        video._playPromise = video.play();
    }
};

const handleMouseLeave = (e) => {
    const video = e.currentTarget.querySelector('video');
    if (!video) return;
    if (video._playPromise !== undefined) {
        video._playPromise.then(() => {
            video.pause();
            video.currentTime = 0;
        }).catch(() => {});
    }
};

export default function Projects() {
    return (
        <div className='projects-page'>
            <Preloader />
            <div className='projects-section'>
                <section className="projects">
                    <div className="projects-grid">
                        {projectsData.map((project) => (
                            <a key={project.id} href={project.route} className="project-item"
                               onMouseEnter={handleMouseEnter}
                               onMouseLeave={handleMouseLeave}>
                                <div className="overlay"></div>
                                {project.img && <img src={project.img} alt={project.title} />}
                                {project.video && (
                                    <video src={project.video} muted loop playsInline className="project-video" />
                                )}
                                <div className="project-info">
                                    {project.logo ? (
                                        <img src={project.logo} alt={project.title} className="project-logo" />
                                    ) : (
                                        <>
                                            <h3>{project.title}</h3>
                                            <p>{project.description}</p>
                                        </>
                                    )}
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}
