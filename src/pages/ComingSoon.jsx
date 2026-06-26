import React, { useState } from 'react';
import Video from '../img/backgrounds/Website_Banner.mp4';
import Logo from '../img/logos/logo-white_2.svg';
import '../css/ComingSoon.css';

const ComingSoon = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);

    return (
        <div className="cs-page">
            {!videoLoaded && <div className="cs-placeholder"></div>}

            <video
                autoPlay
                loop
                muted
                playsInline
                className={`cs-video ${videoLoaded ? 'loaded' : ''}`}
                onLoadedData={() => setVideoLoaded(true)}
            >
                <source src={Video} type="video/mp4" />
            </video>

            <div className="cs-overlay"></div>

            <div className="cs-content">
                <img src={Logo} alt="Kmixc Visuals" className="cs-logo" />

                <div className="cs-text">
                    <p className="cs-eyebrow">Work in Progress</p>
                    <h1 className="cs-headline">Something great<br />is taking shape.</h1>
                </div>

                <div className="cs-socials">
                    <a href="https://instagram.com/kmixcvisuals" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.linkedin.com/in/oliver-kmiec-5b601b1b0/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://www.youtube.com/@kmixc" target="_blank" rel="noopener noreferrer">YouTube</a>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
