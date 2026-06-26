import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import Hamburger from "hamburger-react";
import Logo from "../img/logos/logo-white_2.svg";
import "../css/Navbar.css";

const TRANSPARENT_COLOR = "rgba(0, 0, 0, 0)";

function isTransparentColor(color) {
    return !color || color === "transparent" || color === TRANSPARENT_COLOR;
}

function getBackgroundColor(element) {
    let currentElement = element;

    while (currentElement) {
        const backgroundColor = window.getComputedStyle(currentElement).backgroundColor;

        if (!isTransparentColor(backgroundColor)) {
            return backgroundColor;
        }

        currentElement = currentElement.parentElement;
    }

    const bodyBackground = window.getComputedStyle(document.body).backgroundColor;

    if (!isTransparentColor(bodyBackground)) {
        return bodyBackground;
    }

    const documentBackground = window.getComputedStyle(document.documentElement).backgroundColor;

    if (!isTransparentColor(documentBackground)) {
        return documentBackground;
    }

    return "rgb(255, 255, 255)";
}

function getLuminance(color) {
    const matches = color.match(/[\d.]+/g);

    if (!matches || matches.length < 3) {
        return 255;
    }

    const [red, green, blue] = matches.slice(0, 3).map(Number);
    return (red * 0.299) + (green * 0.587) + (blue * 0.114);
}

function getExplicitNavbarTheme(elements) {
    for (const element of elements) {
        if (element.closest(".navbar")) {
            continue;
        }

        const themedElement = element.closest("[data-navbar-theme]");
        const theme = themedElement?.getAttribute("data-navbar-theme");

        if (theme === "light" || theme === "dark") {
            return theme;
        }
    }

    return null;
}

function getNavbarTheme() {
    const samplePoints = [0.25, 0.5, 0.75].map(position => ({
        x: Math.round(window.innerWidth * position),
        y: 48
    }));

    const themeSamples = samplePoints.map(({ x, y }) => {
        const elements = document.elementsFromPoint(x, y);
        const explicitTheme = getExplicitNavbarTheme(elements);

        if (explicitTheme) {
            return explicitTheme;
        }

        const targetElement = elements.find(element => !element.closest(".navbar"));
        const backgroundColor = getBackgroundColor(targetElement || document.body);

        return getLuminance(backgroundColor) > 170 ? "dark" : "light";
    });

    const darkVotes = themeSamples.filter(theme => theme === "dark").length;

    return darkVotes >= Math.ceil(themeSamples.length / 2) ? "dark" : "light";
}

export default function Navbar() {
    const location = useLocation();
    const navLinks = [
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Visual Content", path: "/visual-content" },
        { name: "Web Design", path: "/website-development" }
    ];

    const [menuOpen, setMenuOpen] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [navTheme, setNavTheme] = useState("light");
    const triggerRef = useRef(null);
    const overlayRef = useRef(null);
    const menuRef = useRef(null);
    const menuBrandRef = useRef(null);
    const cursorGlowRef = useRef(null);
    const closeButtonRef = useRef(null);
    const footerRef = useRef(null);
    const linkRefs = useRef([]);

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = menuVisible ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuVisible]);

    useEffect(() => {
        if (menuVisible) {
            return undefined;
        }

        let frameId = null;

        const updateTheme = () => {
            frameId = null;
            setNavTheme(getNavbarTheme());
        };

        const requestThemeUpdate = () => {
            if (frameId !== null) {
                return;
            }

            frameId = window.requestAnimationFrame(updateTheme);
        };

        requestThemeUpdate();
        window.addEventListener("scroll", requestThemeUpdate, { passive: true });
        window.addEventListener("resize", requestThemeUpdate);

        return () => {
            window.removeEventListener("scroll", requestThemeUpdate);
            window.removeEventListener("resize", requestThemeUpdate);

            if (frameId !== null) {
                window.cancelAnimationFrame(frameId);
            }
        };
    }, [location.pathname, menuVisible]);

    useEffect(() => {
        if (!menuVisible || !menuRef.current || !cursorGlowRef.current) {
            return undefined;
        }

        const menuElement = menuRef.current;
        const glowElement = cursorGlowRef.current;
        const moveX = gsap.quickTo(glowElement, "x", { duration: 0.18, ease: "power3.out" });
        const moveY = gsap.quickTo(glowElement, "y", { duration: 0.18, ease: "power3.out" });

        gsap.set(glowElement, {
            xPercent: -50,
            yPercent: -50,
            opacity: 0,
            scale: 0.7
        });

        const handlePointerEnter = event => {
            const bounds = menuElement.getBoundingClientRect();
            moveX(event.clientX - bounds.left);
            moveY(event.clientY - bounds.top);
            gsap.to(glowElement, { opacity: 0.65, scale: 1, duration: 0.22, ease: "power2.out" });
        };

        const handlePointerMove = event => {
            const bounds = menuElement.getBoundingClientRect();
            moveX(event.clientX - bounds.left);
            moveY(event.clientY - bounds.top);
        };

        const handlePointerLeave = () => {
            gsap.to(glowElement, { opacity: 0, scale: 0.75, duration: 0.2, ease: "power2.out" });
        };

        menuElement.addEventListener("pointerenter", handlePointerEnter);
        menuElement.addEventListener("pointermove", handlePointerMove);
        menuElement.addEventListener("pointerleave", handlePointerLeave);

        return () => {
            menuElement.removeEventListener("pointerenter", handlePointerEnter);
            menuElement.removeEventListener("pointermove", handlePointerMove);
            menuElement.removeEventListener("pointerleave", handlePointerLeave);
        };
    }, [menuVisible]);

    useLayoutEffect(() => {
        if (!menuVisible || !triggerRef.current || !menuRef.current || !overlayRef.current) {
            return undefined;
        }

        const triggerBounds = triggerRef.current.getBoundingClientRect();
        const linkElements = linkRefs.current.filter(Boolean);
        const scaleX = triggerBounds.width / window.innerWidth;
        const scaleY = triggerBounds.height / window.innerHeight;

        gsap.killTweensOf([overlayRef.current, menuRef.current, menuBrandRef.current, closeButtonRef.current, footerRef.current, ...linkElements]);

        if (menuOpen) {
            gsap.set(overlayRef.current, { opacity: 0 });
            gsap.set(menuRef.current, {
                x: triggerBounds.left,
                y: triggerBounds.top,
                scaleX,
                scaleY,
                opacity: 1,
                transformOrigin: "top left",
                force3D: true
            });
            gsap.set(menuBrandRef.current, { opacity: 0, y: 16 });
            gsap.set(closeButtonRef.current, { opacity: 0, y: -10 });
            gsap.set(footerRef.current, { opacity: 0, y: 24 });
            gsap.set(linkElements, { opacity: 0, y: 30 });

            const openTimeline = gsap.timeline();
            openTimeline
                .to(overlayRef.current, {
                    opacity: 1,
                    duration: 0.22,
                    ease: "power2.out"
                }, 0)
                .to(menuRef.current, {
                    x: 0,
                    y: 0,
                    scaleX: 1,
                    scaleY: 1,
                    duration: 0.72,
                    ease: "power2.inOut",
                    force3D: true
                }, 0)
                .to(menuBrandRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.24,
                    ease: "power3.out"
                }, 0.72)
                .to(closeButtonRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.2,
                    ease: "power2.out"
                }, 0.76)
                .to(linkElements, {
                    opacity: 1,
                    y: 0,
                    stagger: 0.05,
                    duration: 0.38,
                    ease: "power3.out"
                }, 0.82)
                .to(footerRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    ease: "power3.out"
                }, 0.96);

            return () => openTimeline.kill();
        }

        gsap.set(overlayRef.current, { opacity: 1 });
        gsap.set(menuRef.current, {
            x: 0,
            y: 0,
            scaleX: 1,
            scaleY: 1,
            opacity: 1,
            transformOrigin: "top left",
            force3D: true
        });

        const closeTimeline = gsap.timeline({
            onComplete: () => {
                setMenuVisible(false);
            }
        });

        closeTimeline
            .to([footerRef.current, ...linkElements, menuBrandRef.current, closeButtonRef.current], {
                opacity: 0,
                y: 16,
                duration: 0.18,
                stagger: 0.03,
                ease: "power2.in"
            }, 0)
            .to(menuRef.current, {
                x: triggerBounds.left,
                y: triggerBounds.top,
                scaleX,
                scaleY,
                duration: 0.62,
                ease: "power2.inOut",
                force3D: true
            }, 0.08)
            .to(overlayRef.current, {
                opacity: 0,
                duration: 0.16,
                ease: "power2.in"
            }, 0.14);

        return () => closeTimeline.kill();
    }, [menuOpen, menuVisible]);

    const toggleMenu = () => {
        if (menuOpen) {
            setMenuOpen(false);
            return;
        }

        setMenuVisible(true);
        setMenuOpen(true);
    };

    const closeMenu = () => setMenuOpen(false);

    return (
        <div className={`navbar navbar--${navTheme}`}>
            <div className="navbar__bar">
                <Link to="/" className="navbar__brand" aria-label="Kmixc Visuals home">
                    <img src={Logo} alt="Kmixc Visuals" className="navbar__logo" />
                </Link>

                <button
                    ref={triggerRef}
                    type="button"
                    className="menu-btn"
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    onClick={toggleMenu}
                >
                    <Hamburger toggled={menuOpen} toggle={() => { }} size={28} rounded distance="sm" color="currentColor" />
                </button>
            </div>

            {menuVisible && (
                <>
                    <div ref={overlayRef} className="nav__overlay"></div>

                    <div ref={menuRef} className="nav__menu">
                        <div ref={cursorGlowRef} className="nav__cursorGlow" aria-hidden="true"></div>

                        <div className="nav__menuTop">
                            <Link ref={menuBrandRef} to="/" className="nav__menuBrand" onClick={closeMenu} aria-label="Kmixc Visuals home">
                                <img src={Logo} alt="Kmixc Visuals" className="navbar__logo navbar__logo--menu" />
                            </Link>

                            <button
                                ref={closeButtonRef}
                                type="button"
                                className="nav__closeButton"
                                onClick={closeMenu}
                                aria-label="Close navigation menu"
                            >
                                <span className="nav__closeIcon" aria-hidden="true">
                                    <span></span>
                                    <span></span>
                                </span>
                                <span className="nav__closeLabel">Close</span>
                            </button>
                        </div>

                        <div className="nav__links">
                            {navLinks.map((link, i) => {
                                const isActive = location.pathname === link.path;

                                return (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        ref={element => {
                                            linkRefs.current[i] = element;
                                        }}
                                        className={`nav__link${isActive ? " is-active" : ""}`}
                                        onClick={closeMenu}
                                    >
                                        <span className="nav__linkInner">{link.name}</span>
                                    </Link>
                                );
                            })}
                        </div>

                        <div ref={footerRef} className="nav__footer">
                            <Link to="/contact" onClick={closeMenu} className="nav__menuButton">
                                <span className="nav__menuButtonText">Let&apos;s connect</span>
                                <span className="nav__menuButtonArrow" aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
