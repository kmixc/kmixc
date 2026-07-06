import React, { useState, useRef, useEffect } from 'react';
import '../css/ProjectMarquee.css';

import MillworxThumb from '../img/web_dev/millworx_thumb.png';
import WolffThumb from '../img/web_dev/wolff_thumb.png';
import KimsThumb from '../img/web_dev/kimscharacters_thumb.png';
import CGRThumb from '../img/web_dev/cgr_thumb.png';
import AftrmrktThumb from '../img/web_dev/aftrmrkt_thumb.png';
import CedoniaThumb from '../img/web_dev/cedonia_thumb.png';

const websites = [
    {
        href: 'https://www.aftrmrkt.club/',
        image: AftrmrktThumb,
        alt: 'AFTRMRKT',
        title: 'AFTRMRKT',
        category: 'Automotive Culture',
    },
    {
        href: 'https://www.wolfflandscaping.ca/',
        image: WolffThumb,
        alt: 'WOLFF Landscaping',
        title: 'WOLFF',
        category: 'Landscape Design',
    },
    {
        href: 'https://millworx.vercel.app/',
        image: MillworxThumb,
        alt: 'Millworx',
        title: 'Millworx',
        category: 'Luxury Millwork',
    },
    {
        href: 'https://cgrcanada.com/',
        image: CGRThumb,
        alt: 'Custom Glass Railings',
        title: 'CGR Canada',
        category: 'Architectural Glasswork',
    },
    {
        href: 'https://kimscharacters.vercel.app/',
        image: KimsThumb,
        alt: 'Kimscharacters',
        title: 'Kimscharacters',
        category: 'Events & Entertainment',
    },
    {
        href: 'https://cedonia.vercel.app/',
        image: CedoniaThumb,
        alt: 'Cedonia',
        title: 'Cedonia',
        category: 'Construction & Development',
    },
];

export default function WebsiteMarquee() {
    const [activeIndex, setActiveIndex] = useState(2);
    const [isSwitching, setIsSwitching] = useState(false);
    const hoverTimerRef = useRef(null);
    const switchTimerRef = useRef(null);

    const changeProject = (index) => {
        if (index === activeIndex) return;
        setIsSwitching(true);
        setActiveIndex(index);
        window.clearTimeout(switchTimerRef.current);
        switchTimerRef.current = window.setTimeout(() => setIsSwitching(false), 620);
    };

    const activateProject = (index) => {
        if (isSwitching || index === activeIndex) return;
        window.clearTimeout(hoverTimerRef.current);
        hoverTimerRef.current = window.setTimeout(() => changeProject(index), 110);
    };

    const setProjectImmediately = (index) => {
        window.clearTimeout(hoverTimerRef.current);
        changeProject(index);
    };

    useEffect(() => {
        return () => {
            window.clearTimeout(hoverTimerRef.current);
            window.clearTimeout(switchTimerRef.current);
        };
    }, []);

    return (
        <section className={`pm-showcase wm-showcase ${isSwitching ? 'is-switching' : ''}`}>
            <div className="pm-rail" role="list" aria-label="Featured websites">
                {websites.map((site, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <a
                            key={site.href}
                            href={site.href}
                            target="_blank"
                            rel="noreferrer"
                            className={`pm-item ${isActive ? 'is-active' : ''}`}
                            onClick={(e) => {
                                if (!isActive) {
                                    e.preventDefault();
                                    setProjectImmediately(index);
                                }
                            }}
                            onPointerEnter={() => activateProject(index)}
                            onFocus={() => setProjectImmediately(index)}
                            aria-current={isActive ? 'true' : undefined}
                        >
                            <div className="pm-media">
                                <img src={site.image} alt={site.alt} className="pm-image" />
                            </div>
                            <div className="pm-scrim"></div>
                            <div className="pm-content">
                                <span className="wm-category">{site.category}</span>
                                <span className="wm-title">{site.title}</span>
                                <span className="pm-link">Visit Site ↗</span>
                            </div>
                        </a>
                    );
                })}
            </div>
        </section>
    );
}
