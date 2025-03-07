import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import Hamburger from "hamburger-react";
import "../css/Navbar.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const overlayRef = useRef(null);
    const linksRef = useRef([]);

    useEffect(() => {
        if (menuOpen) {
            gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, display: "block" });
            gsap.to(menuRef.current, { x: 0, duration: 0.6, ease: "power2.out" });
            gsap.fromTo(
                linksRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, stagger: 0.15, duration: 0.5, delay: 0.3 }
            );
        } else {
            gsap.to(menuRef.current, { x: "100%", duration: 0.5, ease: "power2.in" });
            gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, display: "none", delay: 0.5 });
        }
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <div className="navbar">
            {/* Hamburger Menu Button */}
            <div className="menu-btn">
                <Hamburger toggled={menuOpen} toggle={setMenuOpen} size={40} />
            </div>

            {/* Overlay */}
            <div ref={overlayRef} className="nav__overlay" onClick={closeMenu}></div>

            {/* Menu */}
            <div ref={menuRef} className="nav__menu">
                {/* Close Button (Hamburger) */}
                <div className="menu-btn">
                    <Hamburger toggled={menuOpen} toggle={setMenuOpen} size={40} />
                </div>

                <div className="nav__links">
                    {["Home", "Projects", "Services", "About"].map((text, i) => (
                        <Link
                            key={text}
                            to={text}
                            ref={el => (linksRef.current[i] = el)}
                            className="nav__link"
                            onClick={closeMenu} // Closes menu when clicked
                        >
                            <span className="nav__linkInner">{text}</span>
                        </Link>
                    ))}
                </div>

                <div className="nav__buttons">
                    <Link to="/contact" onClick={closeMenu} className="button nav__menuButton">
                        <span className="button__inner">Start a Project</span>
                    </Link>
                </div>

                <div className="nav__footer">
                    <span>© Kmixc Visuals 2025</span>
                    <span className="footer__spacer"> | </span>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </div>
    );
}
