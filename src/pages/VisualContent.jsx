import { useEffect, useMemo, useRef, useState } from 'react';
import '../css/VisualContent.css';
import Preloader from '../components/Preloader.jsx';
import Footer from '../components/Footer.jsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import HeroVideo from '../img/videos/LZ_World_Tour.mp4';
import ShowcaseVideoOne from '../img/videos/cgr_video.mp4';
import ShowcaseVideoTwo from '../img/videos/pyc_video.mp4';
import ShowcaseVideoThree from '../img/videos/millworx_video.mp4';
import ShowcaseImageOne from '../assets/img/projects/slammedenuff/slammedenuff9.jpg';
import ShowcaseImageTwo from '../assets/img/projects/slammedenuff/slammedenuff3.jpg';
import ShowcaseImageFour from '../assets/img/projects/custom_glass_railings/cgr5.jpg';
import ShowcaseImageFive from '../assets/img/projects/millworx/millworx14.jpg';
import ShowcaseImageSix from '../assets/img/projects/power_yoga_canada/pyc4.jpg';
import ShowcaseImageSeven from '../assets/img/projects/facility_plus/facilityplus11.jpg';

gsap.registerPlugin(ScrollTrigger);

const mediaColumnsData = [
    [
        {
            type: 'video',
            src: ShowcaseVideoOne,
            title: 'Custom Glass Railings',
            size: 'landscape',
        },
        {
            type: 'image',
            src: ShowcaseImageOne,
            title: 'Slammedenuff',
            size: 'portrait',
        },
        {
            type: 'image',
            src: ShowcaseImageFour,
            title: 'Custom Glass Railings',
            size: 'tall',
        },
    ],
    [
        {
            type: 'image',
            src: ShowcaseImageTwo,
            title: 'Slammedenuff',
            size: 'tall',
        },
        {
            type: 'video',
            src: ShowcaseVideoTwo,
            title: 'Power Yoga Canada',
            size: 'portrait',
        },
        {
            type: 'image',
            src: ShowcaseImageSix,
            title: 'Power Yoga Canada',
            size: 'landscape',
        },
    ],
    [
        {
            type: 'image',
            src: ShowcaseImageSeven,
            title: 'Facility Plus',
            size: 'landscape',
        },
        {
            type: 'video',
            src: ShowcaseVideoThree,
            title: 'Millworx',
            size: 'portrait',
        },
        {
            type: 'image',
            src: ShowcaseImageFive,
            title: 'Millworx',
            size: 'portrait',
        },
    ],
];

function renderSplitWord(text, className = '') {
    return (
        <span className={`vc-hero__word ${className}`.trim()} aria-hidden="true">
            <span className="vc-hero__word-inner">
                {Array.from(text).map((char, index) => (
                    <span className="vc-hero__char" key={`${text}-${index}`}>
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
            </span>
        </span>
    );
}

function MediaCard({ item, duplicate = false }) {
    return (
        <article className={`vc-rail__item vc-rail__item--${item.size || 'portrait'}`} aria-hidden={duplicate}>
            <div className="vc-rail__media">
                {item.type === 'video' ? (
                    <video autoPlay muted loop playsInline preload="metadata">
                        <source src={item.src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img src={item.src} alt={duplicate ? '' : item.title} />
                )}
            </div>
        </article>
    );
}

export default function VisualContent() {
    const pageRef = useRef(null);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const mediaColumns = useMemo(() => mediaColumnsData, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const heroChars = gsap.utils.toArray('.vc-hero__char');
            const heroEyebrows = gsap.utils.toArray('.vc-hero__eyebrow');
            const heroLead = document.querySelector('.vc-hero__lede');
            const showcaseRail = document.querySelector('.vc-showcase__rail-shell');
            const showcaseCopy = document.querySelector('.vc-showcase__copy');

            if (heroChars.length) {
                gsap.set(heroChars, { yPercent: 110, opacity: 1 });
                gsap.set(heroEyebrows, { y: 18, opacity: 0 });
                gsap.set(heroLead, { y: 28, opacity: 0 });

                gsap.timeline({ defaults: { ease: 'power4.out' }, delay: 2.15 })
                    .to(heroChars, {
                        yPercent: 0,
                        duration: 0.92,
                        stagger: 0.01,
                    })
                    .to(heroEyebrows, {
                        y: 0,
                        opacity: 1,
                        duration: 0.45,
                        stagger: 0.06,
                    }, 0.16)
                    .to(heroLead, {
                        y: 0,
                        opacity: 1,
                        duration: 0.65,
                    }, 0.35);
            }

            if (showcaseRail) {
                gsap.fromTo(
                    showcaseRail,
                    { opacity: 0, x: -60 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.85,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: showcaseRail,
                            start: 'top 78%',
                        },
                    }
                );
            }

            if (showcaseCopy) {
                gsap.fromTo(
                    showcaseCopy.children,
                    { opacity: 0, y: 32 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.75,
                        ease: 'power3.out',
                        stagger: 0.08,
                        scrollTrigger: {
                            trigger: showcaseCopy,
                            start: 'top 78%',
                        },
                    }
                );
            }
        }, pageRef);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <div className="visual-page" ref={pageRef}>
            <Preloader />

            <section className="vc-hero">
                <div className="vc-hero__media-wrap">
                    <div className={`vc-hero__video-mask ${videoLoaded ? 'is-loaded' : ''}`}>
                        <video
                            className="vc-hero__video"
                            autoPlay
                            muted
                            loop
                            playsInline
                            onLoadedData={() => setVideoLoaded(true)}
                        >
                            <source src={HeroVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="vc-hero__overlay" aria-hidden="true"></div>
                    <div className="vc-hero__grid" aria-hidden="true"></div>
                </div>

                <div className="vc-hero__content">
                    <span className="vc-hero__eyebrow vc-hero__eyebrow--left">Premium Content</span>
                    <span className="vc-hero__eyebrow vc-hero__eyebrow--right">Photo + Video</span>

                    <h1 className="vc-hero__art" aria-label="Visual content that makes people stop and listen">
                        <span className="vc-hero__line vc-hero__line--center vc-hero__line--tight vc-hero__line--lead">
                            {renderSplitWord('VISUAL')}
                            {renderSplitWord('CONTENT')}
                        </span>
                        <span className="vc-hero__line vc-hero__line--center vc-hero__line--serif">
                            {renderSplitWord('that', 'vc-hero__word--serif')}
                            {renderSplitWord('makes', 'vc-hero__word--serif')}
                        </span>
                        <span className="vc-hero__line vc-hero__line--center vc-hero__line--tight vc-hero__line--impact">
                            {renderSplitWord('PEOPLE')}
                            {renderSplitWord('STOP', 'vc-hero__word--accent')}
                        </span>
                        <span className="vc-hero__line vc-hero__line--center vc-hero__line--serif vc-hero__line--serif-tail">
                            {renderSplitWord('and', 'vc-hero__word--serif vc-hero__word--serif-small')}
                            {renderSplitWord('listen.', 'vc-hero__word--serif vc-hero__word--serif-large')}
                        </span>
                    </h1>

                    <p className="vc-hero__lede">
                        Cinematic video, sharp stills, and social-first edits built to hold attention from the first frame.
                    </p>
                </div>
            </section>

            <section className="vc-showcase">
                <div className="vc-showcase__rail-shell">
                    <div className="vc-showcase__mosaic">
                        {mediaColumns.map((column, columnIndex) => (
                            <div
                                className={`vc-showcase__column vc-showcase__column--${columnIndex + 1}`}
                                key={`column-${columnIndex}`}
                            >
                                {[...column, ...column].map((item, itemIndex) => (
                                    <MediaCard
                                        key={`${item.title}-${columnIndex}-${itemIndex}`}
                                        item={item}
                                        duplicate={itemIndex >= column.length}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="vc-showcase__copy">
                    <span className="vc-showcase__eyebrow">The Full Range</span>
                    <h2 className="vc-showcase__title">
                        <span>One direction.</span>
                        <strong>EVERY FORMAT.</strong>
                    </h2>

                    <p>
                        From company showcases and dealership content to owner features, interviews, and brand storytelling, each piece is shaped to stop the scroll and feel intentional.
                    </p>
                    <p>
                        We build photo and video together so the final rollout feels connected across websites, reels, campaigns, and launch assets.
                    </p>

                    <div className="vc-showcase__lists">
                        <div>
                            <h3>Video</h3>
                            <ul>
                                <li>Brand films</li>
                                <li>Short-form vertical edits</li>
                                <li>Rollers and driving sequences</li>
                                <li>Interviews and features</li>
                                <li>Event coverage</li>
                            </ul>
                        </div>

                        <div>
                            <h3>Photography</h3>
                            <ul>
                                <li>Editorial stills</li>
                                <li>Owner and portrait sessions</li>
                                <li>Inventory and dealership work</li>
                                <li>Composite and detail shots</li>
                                <li>Print and digital delivery</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
