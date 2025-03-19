import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import '../css/Services.css';
import { gsap } from "gsap";
import Marquee from "react-fast-marquee";


//IMAGES & VIDEO
import Logo from '../img/logos/logo.svg'

//COMPONENTS
import Preloader from '../components/Preloader.jsx'
import Footer from "../components/Footer.jsx";


const services = [
    {
        number: "01.",
        title: "Videography",
        description:
            "Capture brand stories with cinematic flair. From events to commercials, we deliver high-quality video content that resonates with audiences and elevates your brand’s narrative.",
    },
    {
        number: "02.",
        title: "Photography",
        description:
            "Showcase your brand’s essence through captivating imagery. Our photography services highlight every detail—from product shoots to lifestyle portraits—ensuring visual consistency and storytelling.",
    },
    {
        number: "03.",
        title: "Web Design",
        description:
            "Create a user-friendly digital presence with our custom-designed, responsive websites. We fuse aesthetics and performance to deliver seamless online experiences that engage and convert.",
    },
    {
        number: "04.",
        title: "Social Media",
        description:
            "Boost your brand’s influence with tailored social media strategies. We produce engaging content, foster community interactions, and expand your digital footprint across platforms.",
    },
    {
        number: "05.",
        title: "Marketing",
        description:
            "Drive growth and brand awareness with data-driven marketing campaigns. Our innovative approaches ensure maximum ROI, building deeper connections between you and your audience.",
    },
    {
        number: "06.",
        title: "Strategy",
        description:
            "Lay the groundwork for sustainable success. Our strategic solutions address core business challenges, streamline operations, and position you for long-term growth and market impact.",
    },
];

export default function Services() {

    return (
        <div className="services-page">
            <Preloader />
            <Link className="logo" to={"/"}>
                <img src={Logo} alt="Kmixc Visuals" />
            </Link>

            <div className="services-intro">
                <p>Step into a world of creative possibilities. Our agency offers a range of services designed to elevate your brand and engage your audience. From captivating visuals to immersive storytelling, we specialize in crafting solutions that make an impact. Explore our services and let us bring your vision to life.                </p>
            </div>


            <div className="services-wrapper">
                <h1 className="services-header">(Services)</h1>
                <Marquee autoFill={true}>
                    <h1 className="service-marquee">
                        Expertise
                    </h1>
                </Marquee>

                <div className="services-container">
                    {services.map((service, index) => (
                        <div className="service-item" key={index}>
                            <div className="service-number">{service.number}</div>
                            <div className="service-title">{service.title}</div>
                            <div className="service-description">{service.description}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call-to-Action Section */}
            <div className="services-cta">
                <p className="cta-text">
                    If you need more information, please feel free to
                </p>
                {/* Use Link if you want it to route within React, or <a> for external links */}
                <Link to="/contact" className="cta-button">
                    get in touch.
                </Link>
            </div>

            <Footer />
        </div>
    )
}
