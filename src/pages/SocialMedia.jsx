import { useEffect } from 'react';
import '../css/WebsiteDevelopment.css';
import '../css/SocialMedia.css';
import Preloader from '../components/Preloader.jsx';
import Footer from '../components/Footer.jsx';
import { gsap } from 'gsap';

const showcaseCards = [
    {
        className: 'social-studio__card--top-left',
        src: require('../img/client_imgs/Event-5.jpg'),
        alt: 'Branded lifestyle coffee setup',
    },
    {
        className: 'social-studio__card--top-center',
        src: require('../img/client_imgs/Event-6.jpg'),
        alt: 'Prepared food photographed for social media',
    },
    {
        className: 'social-studio__card--left-large',
        src: require('../img/client_imgs/Event.jpg'),
        alt: 'Fresh food bowl content capture',
    },
    {
        className: 'social-studio__card--right-large',
        src: require('../img/client_imgs/Event-4.jpg'),
        alt: 'Mirror-style creator content shot',
    },
    {
        className: 'social-studio__card--right-small',
        src: require('../img/client_imgs/Event-7.jpg'),
        alt: 'Social media food reel capture',
    },
    {
        className: 'social-studio__card--bottom-wide',
        src: require('../img/client_imgs/Event-3.jpg'),
        alt: 'Behind-the-scenes content production clip',
    },
    {
        className: 'social-studio__card--bottom-right',
        src: require('../img/client_imgs/Special_Event_1.jpg'),
        alt: 'Vertical short-form creator video frame',
    },
];

function renderSplitWord(text, className = '') {
    return (
        <span className={`webdev-hero__word ${className}`.trim()} aria-hidden="true">
            <span className="webdev-hero__word-inner">
                {Array.from(text).map((char, index) => (
                    <span className="webdev-hero__char" key={`${text}-${index}`}>
                        {char}
                    </span>
                ))}
            </span>
        </span>
    );
}

export default function SocialMedia() {
    useEffect(() => {
        let removeHeroPointerHandlers = null;

        const ctx = gsap.context(() => {
            const heroChars = gsap.utils.toArray('.webdev-hero__char');
            const heroEyebrows = gsap.utils.toArray('.webdev-hero__eyebrow');
            const heroGlowOne = document.querySelector('.hero-glow--1');
            const heroGlowTwo = document.querySelector('.hero-glow--2');
            const heroStage = document.querySelector('.hero-stage');

            if (heroChars.length) {
                gsap.set(heroChars, { yPercent: 110, opacity: 1 });
                gsap.set(heroEyebrows, { y: 18, opacity: 0 });

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
                    }, 0.16);
            }

            if (heroStage && heroGlowOne && heroGlowTwo) {
                const glowOneX = gsap.quickTo(heroGlowOne, 'x', { duration: 0.6, ease: 'power3.out' });
                const glowOneY = gsap.quickTo(heroGlowOne, 'y', { duration: 0.6, ease: 'power3.out' });
                const glowTwoX = gsap.quickTo(heroGlowTwo, 'x', { duration: 0.75, ease: 'power3.out' });
                const glowTwoY = gsap.quickTo(heroGlowTwo, 'y', { duration: 0.75, ease: 'power3.out' });

                const handleHeroMove = (event) => {
                    const bounds = heroStage.getBoundingClientRect();
                    const offsetX = (event.clientX - bounds.left) / bounds.width - 0.5;
                    const offsetY = (event.clientY - bounds.top) / bounds.height - 0.5;

                    glowOneX(offsetX * -90);
                    glowOneY(offsetY * -70);
                    glowTwoX(offsetX * 110);
                    glowTwoY(offsetY * 80);
                };

                const handleHeroLeave = () => {
                    glowOneX(0);
                    glowOneY(0);
                    glowTwoX(0);
                    glowTwoY(0);
                };

                heroStage.addEventListener('mousemove', handleHeroMove);
                heroStage.addEventListener('mouseleave', handleHeroLeave);

                removeHeroPointerHandlers = () => {
                    heroStage.removeEventListener('mousemove', handleHeroMove);
                    heroStage.removeEventListener('mouseleave', handleHeroLeave);
                };
            }
        });

        return () => {
            if (removeHeroPointerHandlers) {
                removeHeroPointerHandlers();
            }
            ctx.revert();
        };
    }, []);

    return (
        <div className="webdev-page social-media-page">
            <Preloader />

            <div className="hero-stage">
                <div className="hero-grid-wrap">
                    <div className="hero-cell--main">
                        <div className="hero-grid" aria-hidden="true"></div>
                        <div className="hero-glow hero-glow--1" aria-hidden="true"></div>
                        <div className="hero-glow hero-glow--2" aria-hidden="true"></div>
                        <div className="webdev-hero__content">
                            <span className="webdev-hero__eyebrow webdev-hero__eyebrow--left">Social Media</span>
                            <span className="webdev-hero__eyebrow webdev-hero__eyebrow--right">Always on brand</span>

                            <h1 className="webdev-hero__art" aria-label="Social media that keeps brands consistent and growing">
                                <span className="webdev-hero__line webdev-hero__line--wide">
                                    {renderSplitWord('SOCIAL')}
                                    {renderSplitWord('MEDIA')}
                                </span>

                                <span className="webdev-hero__line webdev-hero__line--media">
                                    {renderSplitWord('THAT')}
                                    {renderSplitWord('keeps', 'webdev-hero__word--ivy')}
                                </span>

                                <span className="webdev-hero__line webdev-hero__line--wide webdev-hero__line--offset">
                                    {renderSplitWord('BRANDS')}
                                </span>

                                <span className="webdev-hero__line webdev-hero__line--wide webdev-hero__line--end">
                                    {renderSplitWord('CONSISTENT')}
                                </span>

                                <span className="webdev-hero__line webdev-hero__line--wide webdev-hero__line--end">
                                    {renderSplitWord('&')}
                                    {renderSplitWord('GROWING')}
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <section className="social-studio" aria-labelledby="social-studio-title">
                <div className="social-studio__canvas">
                    <span className="social-studio__label social-studio__label--photo">Photo</span>
                    <span className="social-studio__label social-studio__label--tiktok">Tik Tok</span>
                    <span className="social-studio__label social-studio__label--video">Video</span>
                    <span className="social-studio__label social-studio__label--creators">Creators</span>
                    <span className="social-studio__label social-studio__label--influencers">Influencers</span>

                    {showcaseCards.map((card) => (
                        <figure className={`social-studio__card ${card.className}`} key={card.className}>
                            <img src={card.src} alt={card.alt} />
                        </figure>
                    ))}

                    <div className="social-studio__centerpiece">
                        <div className="social-studio__heading-group">
                            <p className="social-studio__script">Content</p>
                            <h2 className="social-studio__title" id="social-studio-title">CREATION</h2>
                        </div>

                        <div className="social-studio__actions">
                            <div className="social-studio__play-badge" aria-hidden="true">
                                <div className="social-studio__play-ring">
                                    <span>VIDEO PLAY VIDEO PLAY</span>
                                </div>
                                <div className="social-studio__play-core">
                                    <span className="social-studio__play-icon"></span>
                                </div>
                            </div>

                            <div className="social-studio__approval" aria-hidden="true">
                                <div className="social-studio__approval-box">
                                    <span className="social-studio__approval-check"></span>
                                </div>
                                <span className="social-studio__approval-text">check</span>
                            </div>
                        </div>

                        <p className="social-studio__copy">
                            From short-form video to polished photography, we build content systems that keep every post aligned, recognizable, and ready to perform.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
