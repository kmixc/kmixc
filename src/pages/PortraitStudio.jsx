import { useEffect, useRef, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../css/PortraitStudio.css';
import { ReactComponent as LogoSvg } from '../img/logos/portrait_studio_logo.svg';

const PAGE_URL = 'https://www.kmixc.com/portraitstudio';
const FONTS_URL = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500&display=swap';

const seo = {
    title: 'The Portrait Studio | Directed Event Portraits, Printed on the Spot',
    description: 'A pop-up portrait studio for galas, weddings and brand events. Professionally directed, studio-lit portraits printed on premium paper and presented in a folio.',
    siteName: 'The Portrait Studio',
    // TODO: replace with a 1200x630 Portrait Studio share image (the current default carries Kmixc branding)
    image: 'https://www.kmixc.com/og-image.jpg',
};

const steps = [
    {
        title: 'The studio is set',
        text: 'We arrive ahead of your guests and build a lit portrait set: backdrop, studio lighting, and an on-site print station.',
    },
    {
        title: 'Directed and photographed',
        text: 'A professional photographer poses each guest or group and photographs them on a professional camera.',
    },
    {
        title: 'Printed in moments',
        text: 'The strongest frame is chosen and printed on premium paper, 4x6 or 5x7, in under a minute.',
    },
    {
        title: 'Presented in a folio',
        text: 'Every guest leaves with their portrait, presented in a folio to take home.',
    },
];

const differences = [
    {
        title: 'A photographer, not a button',
        text: 'Every portrait is directed by a professional who poses, adjusts, and takes the shot.',
    },
    {
        title: 'Studio lighting',
        text: 'A properly lit set, shaped for flattering editorial portraits rather than a flat ring light.',
    },
    {
        title: 'One curated print',
        text: 'We choose the finest frame, so each group takes home one exceptional portrait.',
    },
    {
        title: 'Premium paper',
        text: 'Prints that look and feel like a true portrait, made to be framed and kept.',
    },
    {
        title: 'Presented in a folio',
        text: 'Each print is handed over in a branded folio, so the evening leaves with every guest.',
    },
];

const experiences = [
    {
        name: 'Essential',
        duration: 'Three hours',
        summary: 'The classic studio experience. Directed portraits and a crisp print for every group, presented in our signature folio.',
        features: [
            'Unlimited 4x6 prints, one per group',
            'The Portrait Studio signature border',
            'The Portrait Studio signature folios',
        ],
    },
    {
        name: 'Signature',
        duration: 'Three hours',
        featured: true,
        summary: 'Our most elevated experience. Larger luster prints, a border and folio designed around your brand, and a wall of the evening’s portraits.',
        features: [
            '5x7 premium luster prints',
            'Custom border designed around your brand',
            'Folios branded to your event',
            'Print display wall for the evening’s portraits',
        ],
    },
    {
        name: 'Bespoke',
        duration: 'Tailored',
        summary: 'For larger, longer, or more unusual occasions. The studio, the prints, and the presentation are shaped around your event.',
        features: [
            'Session length planned around your event',
            'Print sizes and finishes chosen with you',
            'Border and folio design to your brief',
            'Suited to large-scale and multi-day events',
        ],
    },
];

const included = [
    'One curated print per group',
    'A professional photographer directing every portrait',
    'A lit portrait set with backdrop and studio lighting',
    'Prints made on site in under a minute',
    'Every portrait delivered to the host by private link',
    'Setup completed before your guests arrive',
];

const galleryPoints = [
    { title: 'Every portrait delivered', text: 'The complete set from the evening, sent to you once your event is over.' },
    { title: 'A private link', text: 'Shared with the event host only, never published for everyone to browse.' },
    { title: 'Shared on your terms', text: 'Pass it on to attendees, colleagues, or family as you see fit.' },
];

const occasions = ['Galas', 'Corporate events', 'Brand activations', 'Weddings', 'Launches'];

const faqs = [
    {
        question: 'How much space is needed?',
        answer: 'Roughly 3–4 metres of floor space for the backdrop, lighting, and a short queue.',
    },
    {
        question: 'What do you need for power?',
        answer: 'A single standard outlet near the set. We bring everything else.',
    },
    {
        question: 'How long does setup take?',
        answer: 'About an hour. We arrive early so the studio is ready before your guests are.',
    },
    {
        question: 'How many guests can you photograph?',
        answer: 'Around 40–60 groups per hour, each directed, photographed, and printed.',
    },
];

const eventTypes = ['Gala', 'Corporate event', 'Brand activation', 'Wedding', 'Launch', 'Other'];

function Logo({ className = '' }) {
    // Cropped viewBox removes the artboard padding; colour follows CSS `color`
    return (
        <LogoSvg
            className={`tps-logo ${className}`.trim()}
            viewBox="168 378 746 352"
            id={undefined}
            role="img"
            title="The Portrait Studio"
        />
    );
}

// Black-and-white photo placeholder. Swap for <img> inside .tps-photo once event photos are ready.
// Unused while the PHOTOS blocks below are commented out.
// eslint-disable-next-line no-unused-vars
function ImagePlaceholder({ label, ratio, className = '' }) {
    return (
        <div className={`tps-photo tps-placeholder ${className}`.trim()} role="img" aria-label={`Image placeholder: ${label}`}>
            <span className="tps-placeholder__tag">Image placeholder</span>
            <span className="tps-placeholder__label">{label}</span>
            {ratio && <span className="tps-placeholder__ratio">{ratio}</span>}
        </div>
    );
}

function setMetaTag(attribute, key, content) {
    let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
    const created = !element;

    if (created) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
    }

    const previous = element.getAttribute('content');
    element.setAttribute('content', content);

    return () => {
        if (created) {
            element.remove();
        } else {
            element.setAttribute('content', previous);
        }
    };
}

function usePageHead() {
    useEffect(() => {
        const previousTitle = document.title;
        document.title = seo.title;

        const canonical = document.head.querySelector('link[rel="canonical"]');
        const previousCanonical = canonical?.getAttribute('href');
        canonical?.setAttribute('href', PAGE_URL);

        let fontLink = document.head.querySelector(`link[href="${FONTS_URL}"]`);
        if (!fontLink) {
            fontLink = document.createElement('link');
            fontLink.rel = 'stylesheet';
            fontLink.href = FONTS_URL;
            document.head.appendChild(fontLink);
        }

        // Match the overscroll area to the page instead of the main site's cream
        const previousBackground = document.documentElement.style.backgroundColor;
        document.documentElement.style.backgroundColor = '#F9F8F4';

        const restoreTags = [
            setMetaTag('name', 'description', seo.description),
            setMetaTag('name', 'theme-color', '#F9F8F4'),
            setMetaTag('property', 'og:title', seo.title),
            setMetaTag('property', 'og:description', seo.description),
            setMetaTag('property', 'og:url', PAGE_URL),
            setMetaTag('property', 'og:site_name', seo.siteName),
            setMetaTag('property', 'og:image', seo.image),
            setMetaTag('name', 'twitter:title', seo.title),
            setMetaTag('name', 'twitter:description', seo.description),
            setMetaTag('name', 'twitter:image', seo.image),
        ];

        return () => {
            document.title = previousTitle;
            canonical?.setAttribute('href', previousCanonical);
            document.documentElement.style.backgroundColor = previousBackground;
            restoreTags.forEach(restore => restore());
        };
    }, []);
}

function useReveal(rootRef) {
    useEffect(() => {
        const elements = rootRef.current?.querySelectorAll('.tps-reveal') ?? [];

        if (!('IntersectionObserver' in window)) {
            elements.forEach(element => element.classList.add('is-visible'));
            return undefined;
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

        elements.forEach(element => observer.observe(element));

        return () => observer.disconnect();
    }, [rootRef]);
}

function EnquiryForm({ experience, onExperienceChange }) {
    const [state, handleSubmit] = useForm('mqppdwyw');

    if (state.succeeded) {
        return (
            <p className="tps-form__success" role="status">
                Thank you. We&apos;ll be in touch shortly about your event.
            </p>
        );
    }

    return (
        <form className="tps-form" onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="The Portrait Studio enquiry" />
            <input type="hidden" name="service" value="Portrait Studio" />

            <label className="tps-field">
                <span>Name</span>
                <input type="text" name="name" autoComplete="name" required />
            </label>
            <label className="tps-field">
                <span>Email</span>
                <input type="email" name="email" autoComplete="email" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="tps-form__error" />
            </label>
            <label className="tps-field">
                <span>Phone</span>
                <input type="tel" name="phone" autoComplete="tel" required />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} className="tps-form__error" />
            </label>
            <label className="tps-field">
                <span>Event date</span>
                <input type="date" name="event_date" />
            </label>
            <label className="tps-field">
                <span>Event type</span>
                <select name="event_type" defaultValue="">
                    <option value="" disabled>Select</option>
                    {eventTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
            </label>
            <label className="tps-field">
                <span>Venue / location</span>
                <input type="text" name="venue" />
            </label>
            <label className="tps-field">
                <span>Approx. guests</span>
                <input type="text" name="guests" inputMode="numeric" />
            </label>
            <label className="tps-field">
                <span>Experience</span>
                <select name="experience" value={experience} onChange={event => onExperienceChange(event.target.value)}>
                    <option value="">Not sure yet</option>
                    {experiences.map(item => (
                        <option key={item.name} value={item.name}>{item.name}</option>
                    ))}
                </select>
            </label>
            <label className="tps-field tps-field--full">
                <span>Tell us about your event</span>
                <textarea name="message" rows="4" required></textarea>
            </label>

            <ValidationError errors={state.errors} className="tps-form__error tps-field--full" />

            <div className="tps-field--full tps-form__actions">
                <button type="submit" className="tps-btn tps-btn--gold" disabled={state.submitting}>
                    {state.submitting ? 'Sending' : 'Send Enquiry'}
                </button>
            </div>
        </form>
    );
}

export default function PortraitStudio() {
    const pageRef = useRef(null);
    const [experience, setExperience] = useState('');

    usePageHead();
    useReveal(pageRef);

    return (
        <div className="tps-page" ref={pageRef}>
            {/* ── Header ──────────────────────────────────────────── */}
            <header className="tps-header">
                <div className="tps-container tps-header__inner">
                    <a href="#top" className="tps-header__brand">The Portrait Studio</a>
                    <nav className="tps-header__nav" aria-label="Page sections">
                        <a href="#experience">The Experience</a>
                        <a href="#experiences">Experiences</a>
                        <a href="#faq">FAQ</a>
                    </nav>
                    <a href="#enquire" className="tps-header__cta">Enquire</a>
                </div>
            </header>

            <main id="top">
                {/* ── Hero ────────────────────────────────────────── */}
                <section className="tps-hero">
                    <div className="tps-container tps-hero__inner">
                        <span className="tps-label tps-reveal">A pop-up portrait studio for events</span>
                        <h1 className="tps-hero__logo tps-reveal" style={{ '--tps-delay': '150ms' }}>
                            <Logo />
                        </h1>
                        <p className="tps-hero__tagline tps-reveal" style={{ '--tps-delay': '350ms' }}>
                            Directed portraits, printed on the spot.
                        </p>
                        <p className="tps-hero__lede tps-reveal" style={{ '--tps-delay': '500ms' }}>
                            A lit portrait set at your event. Every guest is directed and photographed, then handed a premium print in a folio within a minute.
                        </p>
                        <a href="#enquire" className="tps-btn tps-reveal" style={{ '--tps-delay': '650ms' }}>Enquire</a>
                    </div>
                    <span className="tps-hero__cue" aria-hidden="true"></span>
                </section>

                {/* PHOTOS (hidden until first event photos): replace placeholder with <div className="tps-photo"><img src={...} alt="..." /></div>
                <div className="tps-container tps-reveal">
                    <ImagePlaceholder
                        className="tps-placeholder--wide"
                        label="Wide editorial shot of the lit portrait set at an event"
                        ratio="Landscape · 21:9 · black and white"
                    />
                </div>
                */}

                {/* ── The experience ──────────────────────────────── */}
                <section className="tps-section" id="experience">
                    <div className="tps-container">
                        <header className="tps-heading tps-reveal">
                            <span className="tps-label">The Experience</span>
                            <h2 className="tps-title">From set to folio</h2>
                            <span className="tps-rule" aria-hidden="true"></span>
                        </header>

                        <ol className="tps-steps">
                            {steps.map((step, index) => (
                                <li className="tps-steps__item tps-reveal" key={step.title} style={{ '--tps-delay': `${index * 140}ms` }}>
                                    <span className="tps-steps__num">{['I', 'II', 'III', 'IV'][index]}</span>
                                    <h3>{step.title}</h3>
                                    <p>{step.text}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* ── Not a photo booth ───────────────────────────── */}
                <section className="tps-section tps-section--dark">
                    <div className="tps-container tps-difference">
                        {/* PHOTOS (hidden until first event photos): replace placeholder with <div className="tps-photo"><img src={...} alt="..." /></div>
                        <div className="tps-difference__media tps-reveal">
                            <ImagePlaceholder
                                className="tps-placeholder--dark"
                                label="Photographer directing a guest on set"
                                ratio="Portrait · 4:5 · black and white"
                            />
                        </div>
                        */}

                        <div className="tps-difference__copy">
                            <header className="tps-heading tps-heading--left tps-reveal">
                                <span className="tps-label">The Difference</span>
                                <h2 className="tps-title">Not a photo booth</h2>
                                <span className="tps-rule" aria-hidden="true"></span>
                                <p className="tps-heading__intro">
                                    An editorial portrait session, run at the pace of your event.
                                </p>
                            </header>

                            <ul className="tps-difference__list">
                                {differences.map((item, index) => (
                                    <li className="tps-reveal" key={item.title} style={{ '--tps-delay': `${index * 100}ms` }}>
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ── Experiences ─────────────────────────────────── */}
                <section className="tps-section" id="experiences">
                    <div className="tps-container">
                        <header className="tps-heading tps-reveal">
                            <span className="tps-label">The Experiences</span>
                            <h2 className="tps-title">Three ways to host the studio</h2>
                            <span className="tps-rule" aria-hidden="true"></span>
                        </header>

                        <div className="tps-experiences">
                            {experiences.map((item, index) => (
                                <article
                                    className={`tps-experience tps-reveal${item.featured ? ' tps-experience--featured' : ''}`}
                                    key={item.name}
                                    style={{ '--tps-delay': `${index * 160}ms` }}
                                >
                                    <span className="tps-label">{item.duration}</span>
                                    <h3 className="tps-experience__name">{item.name}</h3>
                                    <span className="tps-rule tps-rule--short" aria-hidden="true"></span>
                                    <p className="tps-experience__summary">{item.summary}</p>
                                    <ul>
                                        {item.features.map(feature => (
                                            <li key={feature}>{feature}</li>
                                        ))}
                                    </ul>
                                    <a href="#enquire" className="tps-btn tps-btn--gold" onClick={() => setExperience(item.name)}>
                                        Enquire
                                    </a>
                                </article>
                            ))}
                        </div>

                        <div className="tps-included tps-reveal">
                            <h3 className="tps-label">Included in every experience</h3>
                            <ul>
                                {included.map(item => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="tps-experiences__note tps-reveal">
                            <p>Every event is tailored. Enquire for availability and pricing.</p>
                            <span>Additional hours available on request.</span>
                        </div>
                    </div>
                </section>

                {/* ── After the event ─────────────────────────────── */}
                <section className="tps-section tps-section--flush" id="after">
                    <div className="tps-container tps-after">
                        <div className="tps-after__copy">
                            <header className="tps-heading tps-heading--left tps-reveal">
                                <span className="tps-label">After the Event</span>
                                <h2 className="tps-title">The full collection, delivered</h2>
                                <span className="tps-rule" aria-hidden="true"></span>
                                <p className="tps-heading__intro">
                                    The print is only the beginning. Once the night is over, every portrait from the evening is delivered to you through a private link, so you decide how and where they&apos;re shared.
                                </p>
                            </header>

                            <ul className="tps-after__list">
                                {galleryPoints.map((point, index) => (
                                    <li className="tps-reveal" key={point.title} style={{ '--tps-delay': `${index * 120}ms` }}>
                                        <h3>{point.title}</h3>
                                        <p>{point.text}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* PHOTOS (hidden until first event photos): replace placeholder with <div className="tps-photo"><img src={...} alt="..." /></div>
                        <div className="tps-after__media tps-reveal">
                            <ImagePlaceholder
                                label="Open folio with a finished print"
                                ratio="Portrait · 4:5 · black and white"
                            />
                        </div>
                        */}
                    </div>
                </section>

                {/* ── Ideal for ───────────────────────────────────── */}
                <section className="tps-section tps-section--flush">
                    <div className="tps-container">
                        <header className="tps-heading tps-reveal">
                            <span className="tps-label">Ideal For</span>
                        </header>
                        <ul className="tps-occasions tps-reveal">
                            {occasions.map(occasion => (
                                <li key={occasion}>{occasion}</li>
                            ))}
                        </ul>

                        {/* PHOTOS (hidden until first event photos): replace placeholders with <div className="tps-photo"><img src={...} alt="..." /></div>
                        <div className="tps-gallery">
                            <ImagePlaceholder
                                className="tps-reveal"
                                label="Guest portrait, finished print"
                                ratio="Portrait · 4:5 · black and white"
                            />
                            <ImagePlaceholder
                                className="tps-reveal tps-gallery__offset"
                                label="Print presented in the folio"
                                ratio="Portrait · 4:5 · black and white"
                            />
                        </div>
                        */}
                    </div>
                </section>

                {/* ── FAQ ─────────────────────────────────────────── */}
                <section className="tps-section" id="faq">
                    <div className="tps-container tps-faq">
                        <header className="tps-heading tps-heading--left tps-reveal">
                            <span className="tps-label">Questions</span>
                            <h2 className="tps-title">The details</h2>
                            <span className="tps-rule" aria-hidden="true"></span>
                        </header>

                        <div className="tps-faq__list tps-reveal">
                            {faqs.map(faq => (
                                <details className="tps-faq__item" key={faq.question}>
                                    <summary>
                                        <span>{faq.question}</span>
                                        <span className="tps-faq__icon" aria-hidden="true"></span>
                                    </summary>
                                    <p>{faq.answer}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Enquire ─────────────────────────────────────── */}
                <section className="tps-section tps-section--dark tps-enquire" id="enquire">
                    <div className="tps-container">
                        <div className="tps-enquire__logo tps-reveal">
                            <Logo />
                        </div>
                        <header className="tps-heading tps-reveal">
                            <span className="tps-label">Enquire</span>
                            <h2 className="tps-title">Host the studio</h2>
                            <p className="tps-heading__intro">
                                Tell us about your event and we&apos;ll be in touch with availability and a tailored proposal.
                            </p>
                        </header>

                        <div className="tps-reveal">
                            <EnquiryForm experience={experience} onExperienceChange={setExperience} />
                        </div>
                    </div>
                </section>
            </main>

            {/* ── Footer ──────────────────────────────────────────── */}
            <footer className="tps-footer">
                <div className="tps-container tps-footer__inner">
                    <span>&copy; {new Date().getFullYear()} The Portrait Studio</span>
                    <span>
                        by <a href="https://www.kmixc.com">Kmixc Studio</a>
                    </span>
                </div>
            </footer>
        </div>
    );
}
