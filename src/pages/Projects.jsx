import React, { useRef, useState } from 'react';
import '../css/Projects.css'
import Logo from '../img/logos/logo-white.svg'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap';
import CountUp from 'react-countup';

import { InstagramEmbed } from 'react-social-media-embed';

//IMAGES
import Wedding from '../img/client_imgs/Wedding.jpg'
import CompanyShowcase from '../img/client_imgs/Millworx.jpg'
import Event from '../img/client_imgs/Event-3.jpg'
import EventTwo from '../img/client_imgs/Yoga.jpg'
import EventThree from '../img/client_imgs/Event.jpg'
import Renovation from '../img/client_imgs/CGR.jpg'

//VIDEOS
import Video from '../img/backgrounds/Website_Banner.mp4'
import CompanyShowcaseVideo from "../img/videos/Millworx.mp4";
import EventVideo from "../img/videos/LZ_World_Tour.mp4";
import EventTwoVideo from "../img/videos/Power_Yoga_Canada.mp4";
import EventThreeVideo from "../img/videos/Facility_Plus.mp4";
import WeddingVideo from "../img/videos/Tommy_&_Victoria.mp4";
import RenovationVideo from '../img/videos/CGR.mp4'

export default function Projects() {
    return (
        <div className='projects-page'>
            <Link className='logo' to={"/home"}>
                <img src={Logo} alt="Kmixc Visuals" />
            </Link>
            <div className="projects-hero">
                <video autoPlay loop muted playsInline className="background-video">
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
                <div className='projects-filter'>
                    <button>All</button>
                    <button>Event</button>
                    <button>Company</button>
                    <button>Automotive</button>
                    <button>Wedding</button>
                    <button>Real Estate</button>
                    <button>Renovation</button>
                </div>
                <section className="projects">
                    <div className="projects-grid">
                        <a href='#' className="project-item">
                            <img src={Wedding} alt="Tommy & Victoria" />
                            <div className="project-info">
                                <h3>Tommy & Victoria</h3>
                                <p>Wedding Videography</p>
                            </div>
                        </a>
                        <a href='#' className="project-item">
                            <img src={CompanyShowcase} alt="Millworx" />
                            <div className="project-info">
                                <h3>Millworx</h3>
                                <p>Company Showcase</p>
                            </div>
                        </a>
                        <a href='#' className="project-item project-wide">
                            <video
                                id='hide-mobile'
                                src={EventVideo}
                                autoPlay
                                loop
                                muted
                                className={"project-video"}
                            ></video>
                            <img id='hide-desktop' src={Event} alt="Millworx" />
                            <div className="project-info">
                                <h3>LZ World Tour</h3>
                                <p>Event Coverage</p>
                            </div>
                        </a>
                        <a href='#' className="project-item">
                            <img src={EventTwo} alt="Power Yoga Canada" />
                            <div className="project-info">
                                <h3>Power Yoga Canada</h3>
                                <p>Promotional & Event</p>
                            </div>
                        </a>
                        <a
                            href="#"
                            className="project-item"
                        >
                            <img src={EventThree} alt="Facility Plus" />
                            <div className="project-info">
                                <h3>Facility Plus</h3>
                                <p>Event Coverage</p>
                            </div>
                        </a>
                        <a href='#' className="project-item project-wide">
                            <video
                                id='hide-mobile'
                                src={RenovationVideo}
                                autoPlay
                                loop
                                muted
                                className={"project-video"}
                            ></video>
                            <img id='hide-desktop' src={Renovation} alt="Millworx" />
                            <div className="project-info">
                                <h3>Custom Glass Railings</h3>
                                <p>Renovation</p>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}
