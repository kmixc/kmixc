import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import '../css/Services.css';
import { gsap } from "gsap";


//IMAGES & VIDEO
import Logo from '../img/logos/logo.svg'
import Video from '../img/backgrounds/Projects_Banner.mp4'

import videoImg from '../img/client_imgs/CGR.jpg'
import photoImg from '../img/client_imgs/Construction_1.jpg'
import webImg from '../img/client_imgs/Dental_1.jpg'
import socialImg from '../img/client_imgs/Event-2.jpg'
import marketingImg from '../img/client_imgs/Millworx-2.jpg'
import strategyImg from '../img/client_imgs/RX7.jpg'

//COMPONENTS
import Preloader from '../components/Preloader.jsx'
import Footer from "../components/Footer.jsx";

const services = [
    { number: "01", title: "Videography", description: "Capture stunning visuals with expert videography services.", image: videoImg },
    { number: "02", title: "Photography", description: "High-quality photography for events, products, and branding.", image: photoImg },
    { number: "03", title: "Web Design", description: "Custom-built websites that are fast, modern, and responsive.", image: webImg },
    { number: "04", title: "Social Media", description: "Grow your brand with expert social media management.", image: socialImg },
    { number: "05", title: "Marketing", description: "Strategic marketing campaigns tailored to your business.", image: marketingImg },
    { number: "06", title: "Strategy", description: "Developing effective business strategies for success.", image: strategyImg }
];


export default function Services() {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const descriptions = useRef([]);
    const [activeImage, setActiveImage] = useState(services[0].image);
    const imageRef = useRef(null);

    useEffect(() => {
        gsap.set(descriptions.current, { opacity: 0, y: 10 });
        gsap.set(imageRef.current, { opacity: 0, scale: 1.1 });
    }, []);

    const handleHover = (index) => {
        gsap.to(descriptions.current[index], { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });
        gsap.to(imageRef.current, { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" });
        setActiveImage(services[index].image);
    };

    const handleLeave = (index) => {
        gsap.to(descriptions.current[index], { opacity: 0, y: 10, duration: 0.3, ease: "power2.out" });
        gsap.to(imageRef.current, { opacity: 0, scale: 1.1, duration: 0.5, ease: "power2.out" });
    };

    return (
        <div className="services-page">
            <Preloader />
            <Link className="logo" to={"/"}>
                <img src={Logo} alt="Kmixc Visuals" />
            </Link>
            <div className="services-hero">
                {!videoLoaded && <div className="banner-placeholder"></div>}
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
            </div>

            <div className="services-wrapper">
                <div className="services-container">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-item"
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => handleLeave(index)}
                        >
                            <span className="service-number">{service.number}</span>
                            <Link to="#" className="service-link">{service.title}</Link>
                            <p className="service-description" ref={(el) => (descriptions.current[index] = el)}>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Image Preview on Hover */}
                <div className="service-image-container">
                    <img src={activeImage} alt="Service Preview" ref={imageRef} />
                </div>
            </div>

            <Footer />
        </div>
    )
}
