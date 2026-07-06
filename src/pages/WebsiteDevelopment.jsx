import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import '../css/WebsiteDevelopment.css';

// COMPONENTS
import Preloader from '../components/Preloader.jsx';
import Footer from '../components/Footer.jsx';
import WebsiteMarquee from '../components/WebsiteMarquee.jsx';

// GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const timelineSteps = [
    {
        step: '01',
        title: 'Discovery & Brief',
        description: 'We learn your business, goals, and audience. Together we define the project scope, sitemap, and success metrics before anything else.',
    },
    {
        step: '02',
        title: 'Wireframes',
        description: 'Low-fidelity layouts map out content hierarchy and user flow — establishing structure before any visual design begins.',
    },
    {
        step: '03',
        title: 'Visual Mockup',
        description: "High-fidelity designs in your brand's colours, typography, and identity — crafted until every detail feels right.",
    },
    {
        step: '04',
        title: 'Client Review',
        description: 'You review, give feedback, and we refine. Nothing moves to build until you sign off.',
    },
    {
        step: '05',
        title: 'Development',
        description: 'Clean, performant code brings the approved design to life — responsive across every device and optimised for speed.',
    },
    {
        step: '06',
        title: 'Testing & QA',
        description: 'We test across browsers and devices, catch edge cases, and ensure everything works flawlessly before go-live.',
    },
    {
        step: '07',
        title: 'Launch',
        description: 'Deployment, DNS, post-launch monitoring — we handle it all and stay on call so your go-live is seamless.',
    },
];

// UPGRADE 2 — services cards
const serviceCards = [
    {
        title: 'Website Design',
        stat: '100%',
        description: 'Every pixel aligned to your brand — we craft interfaces that are both beautiful and purposeful.',
        deliverables: ['Custom UI/UX Design', 'Brand Alignment', 'Mobile-First Layouts', 'High-Fidelity Mockups'],
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="svc-icon__svg">
                <rect x="4" y="8" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2" />
                <line x1="4" y1="16" x2="44" y2="16" stroke="currentColor" strokeWidth="2" />
                <circle cx="10" cy="12" r="1.5" fill="currentColor" />
                <circle cx="15" cy="12" r="1.5" fill="currentColor" />
                <circle cx="20" cy="12" r="1.5" fill="currentColor" />
                <line x1="16" y1="36" x2="32" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="22" y1="36" x2="26" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="14" y1="40" x2="34" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <rect x="12" y="20" width="24" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" className="svc-icon__dash" />
            </svg>
        ),
    },
    {
        title: 'React Development',
        stat: '0× bloat',
        description: 'Fast, modular, and maintainable — we build with React and ship clean code that lasts.',
        deliverables: ['React / Vite Builds', 'Component Architecture', 'CMS Integration', 'API & Form Handling'],
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="svc-icon__svg">
                <ellipse cx="24" cy="24" rx="20" ry="8" stroke="currentColor" strokeWidth="2" className="svc-icon__orbit svc-icon__orbit--1" />
                <ellipse cx="24" cy="24" rx="20" ry="8" stroke="currentColor" strokeWidth="2" transform="rotate(60 24 24)" className="svc-icon__orbit svc-icon__orbit--2" />
                <ellipse cx="24" cy="24" rx="20" ry="8" stroke="currentColor" strokeWidth="2" transform="rotate(120 24 24)" className="svc-icon__orbit svc-icon__orbit--3" />
                <circle cx="24" cy="24" r="3" fill="currentColor" />
            </svg>
        ),
    },
    {
        title: 'Performance Optimization',
        stat: '98 Lighthouse',
        description: 'We obsess over load times, Core Web Vitals, and every millisecond that keeps users engaged.',
        deliverables: ['Core Web Vitals', 'Image Optimization', 'Bundle Reduction', 'Sub-2s Load Times'],
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="svc-icon__svg">
                <path d="M8 36 L8 28 L16 22 L24 28 L32 16 L40 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="svc-icon__line" />
                <circle cx="40" cy="12" r="3" fill="currentColor" className="svc-icon__dot" />
                <line x1="8" y1="36" x2="40" y2="36" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                <line x1="8" y1="12" x2="8" y2="36" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
            </svg>
        ),
    },
    {
        title: 'SEO Foundations',
        stat: '↑ Rank',
        description: 'Built to be found. Semantic structure, local optimization, and schema markup from day one.',
        deliverables: ['Semantic Markup', 'Local SEO Setup', 'Schema / Structured Data', 'On-Page Optimization'],
        icon: (
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="svc-icon__svg">
                <circle cx="22" cy="22" r="14" stroke="currentColor" strokeWidth="2" />
                <line x1="32" y1="32" x2="42" y2="42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="svc-icon__arm" />
                <line x1="16" y1="22" x2="28" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                <line x1="22" y1="16" x2="22" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
            </svg>
        ),
    },
];

// UPGRADE 3 — Why Kmixc
const whyPoints = [
    {
        title: 'Fast Turnaround',
        body: "Most projects go live in 3–6 weeks from first call — without compromising on quality.",
    },
    {
        title: 'Built to Convert',
        body: 'Every layout decision is mapped to a conversion goal before design starts. Not just aesthetics.',
    },
    {
        title: 'Clean Code',
        body: 'Hand-written React or vanilla JS — no page builders, no plugin dependencies, no bloat.',
    },
    {
        title: 'One Point of Contact',
        body: 'You work directly with the designer and developer. No account managers, no middlemen.',
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

// ─────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────

export default function WebsiteDevelopment() {
    const [activeServiceIndex, setActiveServiceIndex] = useState(0);
    const [activeWhyIndex, setActiveWhyIndex] = useState(0);

    // Timeline refs (PRESERVE — do not change)
    const trackRef = useRef(null);
    const lineFillRef = useRef(null);
    const dotRefs = useRef([]);
    const cardRefs = useRef([]);

    // Upgrade refs
    const whyColRefs = useRef([]);
    const statRefs = useRef([]);
    const svcCardRefs = useRef([]);
    const ctaSectionRef = useRef(null);
    const introRef = useRef(null);

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

            // ── PRESERVED: Timeline animations ──────────────────────
            gsap.to(lineFillRef.current, {
                height: '100%',
                ease: 'none',
                scrollTrigger: {
                    trigger: trackRef.current,
                    start: 'top 60%',
                    end: 'bottom 55%',
                    scrub: 0.5,
                },
            });

            dotRefs.current.forEach((dot) => {
                if (!dot) return;
                ScrollTrigger.create({
                    trigger: dot,
                    start: 'top 60%',
                    onEnter: () => dot.classList.add('active'),
                    onLeaveBack: () => dot.classList.remove('active'),
                });
            });

            cardRefs.current.forEach((card, i) => {
                if (!card) return;
                const isLeft = i % 2 === 0;
                gsap.fromTo(
                    card,
                    { opacity: 0, x: isLeft ? -50 : 50 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.7,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 82%',
                        },
                    }
                );
            });

            // ── UPGRADE 2: Service cards stagger ─────────────────────
            const svcCards = svcCardRefs.current.filter(Boolean);
            if (svcCards.length) {
                gsap.fromTo(svcCards,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'cubic-bezier(0.16,1,0.3,1)',
                        stagger: 0.08,
                        scrollTrigger: {
                            trigger: svcCards[0],
                            start: 'top 80%',
                        },
                    }
                );
            }

            // ── UPGRADE 3: Why showcase reveal ───────────────────────
            const cols = whyColRefs.current.filter(Boolean);
            if (cols.length) {
                gsap.fromTo(cols,
                    { opacity: 0, y: 32 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'cubic-bezier(0.16,1,0.3,1)',
                        stagger: 0.08,
                        scrollTrigger: {
                            trigger: cols[0],
                            start: 'top 82%',
                        },
                    }
                );

                gsap.fromTo(
                    cols.map((col) => col.querySelector('.why-showcase__item-line')).filter(Boolean),
                    { scaleX: 0 },
                    {
                        scaleX: 1,
                        duration: 0.9,
                        ease: 'cubic-bezier(0.16,1,0.3,1)',
                        stagger: 0.15,
                        scrollTrigger: {
                            trigger: cols[0],
                            start: 'top 80%',
                        },
                    }
                );
            }

            // ── UPGRADE 3: Stat counter animation ────────────────────
            statRefs.current.forEach((el) => {
                if (!el) return;
                const end = parseInt(el.dataset.end, 10);
                const suffix = el.dataset.suffix || '';
                const obj = { val: 0 };
                gsap.to(obj, {
                    val: end,
                    duration: 1.6,
                    ease: 'power2.out',
                    onUpdate() {
                        el.textContent = Math.round(obj.val) + suffix;
                    },
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                    },
                });
            });

            // ── UPGRADE 5: CTA section entrance ──────────────────────
            if (ctaSectionRef.current) {
                gsap.fromTo(ctaSectionRef.current.querySelectorAll('.cta-animate'),
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'cubic-bezier(0.16,1,0.3,1)',
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: ctaSectionRef.current,
                            start: 'top 80%',
                        },
                    }
                );
            }

            // ── INTRO word-highlight + line-split reveal ──────────────────────
            if (introRef.current) {
                const words = introRef.current.querySelectorAll('.intro-word');
                words.forEach((word, i) => {
                    // Initial state: hidden below the overflow mask
                    gsap.set(word, { y: '115%' });

                    // One-time slide-up reveal (line-split effect)
                    gsap.to(word, {
                        y: '0%',
                        duration: 0.95,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: word,
                            start: 'top 90%',
                            toggleActions: 'play reverse play reverse',
                        },
                    });

                    // Scrubbed color: gray → orange → dark
                    const tl = gsap.timeline();
                    tl.fromTo(word,
                        { color: '#999999' },
                        { color: '#ff7000', ease: 'none', duration: 1 }
                    ).to(word,
                        { color: '#111111', ease: 'none', duration: 1 }
                    );
                    ScrollTrigger.create({
                        trigger: word,
                        start: 'top 72%',
                        end: 'top 30%',
                        scrub: 0.4,
                        animation: tl,
                    });
                });
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
        <div className="webdev-page">
            <Preloader />

            {/* ── HERO ── */}
            <div className="hero-stage">
                <div className="hero-grid-wrap">
                    <div className="hero-cell--main">
                        <div className="hero-grid" aria-hidden="true"></div>
                        <div className="hero-glow hero-glow--1" aria-hidden="true"></div>
                        <div className="hero-glow hero-glow--2" aria-hidden="true"></div>
                        <div className="webdev-hero__content">
                            <span className="webdev-hero__eyebrow webdev-hero__eyebrow--left">Website Development</span>
                            <span className="webdev-hero__eyebrow webdev-hero__eyebrow--right">Built for you</span>

                            <h1 className="webdev-hero__art" aria-label="Websites that work as hard as you do">
                                <span className="webdev-hero__line webdev-hero__line--wide">
                                    {renderSplitWord('WEBSITES')}
                                </span>

                                <span className="webdev-hero__line webdev-hero__line--media">
                                    {renderSplitWord('THAT', 'webdev-hero__word--that')}
                                    {renderSplitWord('work', 'webdev-hero__word--work webdev-hero__word--ivy')}
                                </span>

                                <span className="webdev-hero__line webdev-hero__line--wide webdev-hero__line--offset">
                                    {renderSplitWord('AS')}
                                    {renderSplitWord('HARD', 'webdev-hero__word--hard')}
                                </span>
                                <span className="webdev-hero__line webdev-hero__line--wide webdev-hero__line--end">
                                    {renderSplitWord('AS')}
                                    {renderSplitWord('you', 'webdev-hero__word--ivy')}
                                    {renderSplitWord('do', 'webdev-hero__word--ivy')}
                                </span>
                            </h1>
                            <span className="webdev-hero__eyebrow webdev-hero__eyebrow--mobile">Website Development</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── INTRO ── */}
            <section className="webdev-intro" ref={introRef}>
                <p>
                    {"Your website is your brand’s most powerful asset. We create modern digital experiences that look great, perform seamlessly, and help turn visitors into clients."
                        .split(' ')
                        .map((word, i) => (
                            <span key={i} className="intro-word-outer">
                                <span className="intro-word">{word}</span>
                            </span>
                        ))}
                </p>
            </section>

            {/* ── TIMELINE (PRESERVED — do not modify) ── */}
            <section className="webdev-timeline">
                <div className="webdev-section-header">
                    <span className="webdev-section-header__eyebrow">Our Process</span>
                    <h2 className="webdev-section-header__title">From mockup to <em>launch</em></h2>
                </div>

                <div className="webdev-timeline__track" ref={trackRef}>
                    <div className="webdev-timeline__line">
                        <div className="webdev-timeline__line-fill" ref={lineFillRef}></div>
                    </div>

                    {timelineSteps.map((item, i) => (
                        <div className="webdev-timeline__step" key={i}>
                            {i % 2 === 0 ? (
                                <>
                                    <div
                                        className="webdev-timeline__content webdev-timeline__content--left"
                                        ref={el => cardRefs.current[i] = el}
                                    >
                                        <span className="webdev-timeline__step-num">{item.step}</span>
                                        <h3 className="webdev-timeline__title">{item.title}</h3>
                                        <p className="webdev-timeline__desc">{item.description}</p>
                                    </div>
                                    <div className="webdev-timeline__dot-wrap">
                                        <div
                                            className="webdev-timeline__dot"
                                            ref={el => dotRefs.current[i] = el}
                                        ></div>
                                    </div>
                                    <div className="webdev-timeline__content webdev-timeline__content--empty"></div>
                                </>
                            ) : (
                                <>
                                    <div className="webdev-timeline__content webdev-timeline__content--empty"></div>
                                    <div className="webdev-timeline__dot-wrap">
                                        <div
                                            className="webdev-timeline__dot"
                                            ref={el => dotRefs.current[i] = el}
                                        ></div>
                                    </div>
                                    <div
                                        className="webdev-timeline__content webdev-timeline__content--right"
                                        ref={el => cardRefs.current[i] = el}
                                    >
                                        <span className="webdev-timeline__step-num">{item.step}</span>
                                        <h3 className="webdev-timeline__title">{item.title}</h3>
                                        <p className="webdev-timeline__desc">{item.description}</p>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* ────────────────────────────────────────────────────────
                UPGRADE 1 — HORIZONTAL DRAG CAROUSEL
            ──────────────────────────────────────────────────────── */}
            <section className="webdev-selected">
                <div className="webdev-section-header">
                    <span className="webdev-section-header__eyebrow">Selected Work</span>
                    <h2 className="webdev-section-header__title">What we've <em>built</em></h2>
                </div>

                <WebsiteMarquee />
            </section>

            {/* ────────────────────────────────────────────────────────
                UPGRADE 2 — WHAT WE DO / SERVICES CARDS
            ──────────────────────────────────────────────────────── */}
            <section className="webdev-services">
                <div className="webdev-section-header">
                    <span className="webdev-section-header__eyebrow">What We Do</span>
                    <h2 className="webdev-section-header__title">Our <em>specialities</em></h2>
                </div>

                <div className="services-showcase">
                    <div className="services-showcase__layout">
                        <div className="services-showcase__list" role="tablist" aria-label="Website development services">
                            {serviceCards.map((svc, i) => (
                                <button
                                    type="button"
                                    className={`services-showcase__item ${activeServiceIndex === i ? 'is-active' : ''}`}
                                    key={svc.title}
                                    ref={el => svcCardRefs.current[i] = el}
                                    onMouseEnter={() => setActiveServiceIndex(i)}
                                    onFocus={() => setActiveServiceIndex(i)}
                                    onClick={() => setActiveServiceIndex(i)}
                                    role="tab"
                                    aria-selected={activeServiceIndex === i}
                                >
                                    <span className="services-showcase__item-meta">{svc.stat}</span>
                                    <span className="services-showcase__item-main">
                                        <span className="services-showcase__item-title">{svc.title}</span>
                                        <span className="services-showcase__item-copy">{svc.description}</span>
                                    </span>
                                </button>
                            ))}
                        </div>

                        <div className="services-showcase__stage">
                            {serviceCards.map((svc, i) => (
                                <article
                                    key={svc.title}
                                    className={`services-showcase__panel ${activeServiceIndex === i ? 'is-active' : ''}`}
                                    aria-hidden={activeServiceIndex === i ? 'false' : 'true'}
                                >
                                    <div className="services-showcase__panel-top">
                                        <span className="services-showcase__panel-kicker">Capabilities</span>
                                        <span className="services-showcase__panel-stat">{svc.stat}</span>
                                    </div>
                                    <div className="services-showcase__panel-icon">
                                        <div className="svc-icon">
                                            {svc.icon}
                                        </div>
                                    </div>
                                    <h3 className="services-showcase__panel-title">{svc.title}</h3>
                                    <p className="services-showcase__panel-desc">{svc.description}</p>
                                    <ul className="services-showcase__panel-list">
                                        {svc.deliverables.map((deliverable, j) => (
                                            <li key={j}>{deliverable}</li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ────────────────────────────────────────────────────────
                UPGRADE 3 — WHY KMIXC
            ──────────────────────────────────────────────────────── */}
            <section className="webdev-why">
                <div className="why-showcase">
                    <div className="why-showcase__layout">
                        <div className="why-showcase__intro">
                            <span className="why-showcase__kicker">Why teams choose us</span>
                            <h2 className="why-showcase__headline">No templates. No excuses.</h2>
                            <p className="why-showcase__lede">
                                Design, development, and strategy under one roof — so nothing gets lost in translation.
                            </p>

                            <div className="why-showcase__list" role="tablist" aria-label="Why choose Kmixc">
                                {whyPoints.map((pt, i) => (
                                    <button
                                        type="button"
                                        className={`why-showcase__item ${activeWhyIndex === i ? 'is-active' : ''}`}
                                        key={pt.title}
                                        ref={el => whyColRefs.current[i] = el}
                                        onMouseEnter={() => setActiveWhyIndex(i)}
                                        onFocus={() => setActiveWhyIndex(i)}
                                        onClick={() => setActiveWhyIndex(i)}
                                        role="tab"
                                        aria-selected={activeWhyIndex === i}
                                    >
                                        <span className="why-showcase__item-line"></span>
                                        <span className="why-showcase__item-index">0{i + 1}</span>
                                        <span className="why-showcase__item-main">
                                            <span className="why-showcase__item-title">{pt.title}</span>
                                            <span className="why-showcase__item-body">{pt.body}</span>
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="why-showcase__stage">
                            {whyPoints.map((pt, i) => (
                                <article
                                    key={pt.title}
                                    className={`why-showcase__panel ${activeWhyIndex === i ? 'is-active' : ''}`}
                                    aria-hidden={activeWhyIndex === i ? 'false' : 'true'}
                                >
                                    <div className="why-showcase__panel-top">
                                        <span className="why-showcase__panel-label">Kmixc advantage</span>
                                        <span className="why-showcase__panel-index">0{i + 1}</span>
                                    </div>
                                    <h3 className="why-showcase__panel-title">{pt.title}</h3>
                                    <p className="why-showcase__panel-body">{pt.body}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ────────────────────────────────────────────────────────
                UPGRADE 5 — CTA SECTION
            ──────────────────────────────────────────────────────── */}
            <section className="webdev-cta-section" ref={ctaSectionRef}>
                <span className="cta-watermark" aria-hidden="true">KMIXC</span>
                <div className="cta-inner">
                    <span className="cta-avail cta-animate">
                        <span className="cta-avail__dot"></span>
                        Available for new projects
                    </span>
                    <h2 className="cta-headline cta-animate">
                        Let's build <br />something great.
                    </h2>
                    <p className="cta-sub cta-animate">
                        Tell us about your project and we'll get back to you within 24 hours.
                    </p>
                    <div className="cta-form cta-animate">
                        <Link to="/contact" className="cta-submit">Start a Project →</Link>
                    </div>
                    <div className="cta-trust cta-animate">
                        <span><span className="cta-check">✓</span> No commitment required</span>
                        <span><span className="cta-check">✓</span> Response within 24 hours</span>
                        <span><span className="cta-check">✓</span> Based in Ontario, Canada</span>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}


