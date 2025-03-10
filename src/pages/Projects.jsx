import { useState, useEffect, useRef } from "react";
import '../css/Projects.css'
import Logo from '../img/logos/logo-white.svg'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap';

//IMAGES
import SpecialEventOne from '../img/client_imgs/Special_Event_1.jpg'
import SpecialEventTwo from '../img/client_imgs/Special_Event_2.jpg'
import SpecialEventThree from '../img/client_imgs/Special_Event_3.jpg'
import CompanyShowcase from '../img/client_imgs/Millworx.jpg'
import Event from '../img/client_imgs/Event-3.jpg'
import EventTwo from '../img/client_imgs/Yoga.jpg'
import EventThree from '../img/client_imgs/Event.jpg'
import Renovation from '../img/client_imgs/CGR.jpg'
import DentalOne from '../img/client_imgs/Dental_3.jpg'
import DentalTwo from '../img/client_imgs/Dental_1.jpg'
import ConstructionOne from '../img/client_imgs/Construction_1.jpg'

//VIDEOS
import Video from '../img/backgrounds/Projects_Banner.mp4'
import CompanyShowcaseVideo from "../img/videos/Millworx.mp4";
import EventVideo from "../img/videos/LZ_World_Tour.mp4";
import EventTwoVideo from "../img/videos/Power_Yoga_Canada.mp4";
import EventThreeVideo from "../img/videos/Facility_Plus.mp4";
import WeddingVideo from "../img/videos/Tommy_&_Victoria.mp4";
import RenovationVideo from '../img/videos/CGR.mp4'

//COMPONENTS
import Footer from '../components/Footer.jsx'

const projectsData = [
    { id: 1, categories: ["Special Event"], title: "Tommy & Victoria", img: SpecialEventOne, description: "Wedding Videography", wide: false },
    { id: 2, categories: ["Business"], title: "Millworx", img: CompanyShowcase, description: "Company Showcase", wide: false },
    { id: 3, categories: ["Event", "Automotive"], title: "LZ World Tour", video: EventVideo, img: Event, description: "Event Coverage", wide: true },
    { id: 5, categories: ["Event"], title: "Facility Plus", img: EventThree, description: "Event Coverage" },
    { id: 7, categories: ["Special Event"], title: "Mike & Brittany", img: SpecialEventTwo, description: "Engagement Videography", wide: false },
    { id: 6, categories: ["Renovation"], title: "Custom Glass Railings", video: RenovationVideo, img: Renovation, description: "Renovation", wide: true },
    { id: 8, categories: ["Special Event"], title: "Janine & Lucas", img: SpecialEventThree, description: "Engagement Videography", wide: false },
    { id: 9, categories: ["Dental"], title: "Luka Dental Care", img: DentalOne, description: "Company Promo", wide: false },
    { id: 4, categories: ["Event"], title: "Power Yoga Canada", video: EventTwoVideo, img: EventTwo, description: "Promotional & Event", wide: true },
    { id: 10, categories: ["Dental"], title: "Queen Street Dental", img: DentalTwo, description: "Company Promo", wide: false },
    { id: 11, categories: ["Construction"], title: "Custom Glass Railings", img: ConstructionOne, description: "Company Showcase", wide: false },
];

const projects = [
    { id: 1, image: `${SpecialEventOne}`, link: "/project-1" },
    { id: 2, image: `${SpecialEventOne}`, link: "/project-2" },
    { id: 3, image: `${SpecialEventOne}`, link: "/project-3" },
    { id: 4, image: `${SpecialEventOne}`, link: "/project-4" },
    { id: 5, image: `${SpecialEventOne}`, link: "/project-5" },
    { id: 6, image: `${SpecialEventOne}`, link: "/project-6" },
    { id: 7, image: `${SpecialEventOne}`, link: "/project-7" },
    { id: 8, image: `${SpecialEventOne}`, link: "/project-8" },
    { id: 9, image: `${SpecialEventOne}`, link: "/project-9" },
];

const categories = ["All", "Event", "Business", "Automotive", "Special Event", "Real Estate", "Renovation"];

export default function Projects() {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [visibleCount, setVisibleCount] = useState(6);
    const [projectsPerRow, setProjectsPerRow] = useState(3);
    const projectGridRef = useRef(null);

    const filteredProjects = selectedCategory === "All"
        ? projectsData
        : projectsData.filter((project) => project.categories.includes(selectedCategory));

    const visibleProjects = filteredProjects.slice(0, visibleCount);

    const calculateProjectsPerRow = () => {
        if (projectGridRef.current) {
            const projectItems = projectGridRef.current.querySelectorAll(".project-item");
            if (projectItems.length > 0) {
                const gridWidth = projectGridRef.current.offsetWidth;
                const itemWidth = projectItems[0].offsetWidth;
                const itemsPerRow = Math.floor(gridWidth / itemWidth);
                setProjectsPerRow(itemsPerRow || 3);
            }
        }
    };

    useEffect(() => {
        calculateProjectsPerRow();
        window.addEventListener("resize", calculateProjectsPerRow);
        return () => window.removeEventListener("resize", calculateProjectsPerRow);
    }, []);

    // 🟢 **Animation when filtering or updating projects**
    useEffect(() => {
        if (projectGridRef.current) {
            const newItems = Array.from(projectGridRef.current.children).slice(visibleCount - projectsPerRow);
            gsap.fromTo(
                newItems,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
            );
        }
    }, [visibleCount]);

    const loadMoreProjects = () => {
        let newVisibleCount = visibleCount;
        let columnsFilled = 0;

        while (columnsFilled < projectsPerRow && newVisibleCount < filteredProjects.length) {
            const project = filteredProjects[newVisibleCount];
            columnsFilled += project.wide ? 2 : 1;
            newVisibleCount++;
        }

        setVisibleCount(newVisibleCount);
    };

    return (
        <div className='projects-page'>
            <Link className='logo' to={"/"}>
                <img src={Logo} alt="Kmixc Visuals" />
            </Link>
            <div className="projects-hero">

                {!videoLoaded && <div className="banner-placeholder"></div>}

                {/* Video Element */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`background-video ${videoLoaded ? "loaded" : ""}`}
                    onLoadedData={() => setVideoLoaded(true)}
                >
                    <source src={Video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="banner-overlay"></div>
                <div className="projects-logo">
                    <img src={Logo} loading="lazy" alt="Kmixc Visuals Logo" />
                </div>
            </div>

            <div className='projects-section'>
                <h2 className="projects-section-title">PROJECTS</h2>
                <div>
                    {/* Filter Buttons */}
                    <div className='projects-filter'>
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => {
                                    setSelectedCategory(category);
                                    setVisibleCount(6); // Reset to initial count when filtering
                                }}
                                className={selectedCategory === category ? "active" : ""}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <section className="projects">
                        <div ref={projectGridRef} className="projects-grid">
                            {visibleProjects.map((project) => (
                                <a key={project.id} href="#" className={`project-item ${project.wide ? "project-wide" : ""}`}>
                                    <div className="project-overlay"></div>

                                    {/* Conditionally Render Video or Image */}
                                    {project.video ? (
                                        <>
                                            <video id="hide-mobile" src={project.video} autoPlay loop muted playsInline className="project-video"></video>
                                            <img id="hide-desktop" src={project.img} alt={project.title} />
                                        </>
                                    ) : (
                                        <img src={project.img} alt={project.title} />
                                    )}
                                    <div className="project-info">
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </section>

                    {visibleCount < filteredProjects.length && (
                        <div className="load-more-container">
                            <button className="load-more" onClick={loadMoreProjects}>
                                Load More Projects
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="more-projects-section">
                <h2>MORE PROJECTS</h2>
                <div className="more-projects-grid">
                    {projects.map((project) => (
                        <a key={project.id} href={project.link} className="project-item">
                            <img src={project.image} alt={`Project ${project.id}`} loading="lazy" />
                        </a>
                    ))}
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}
