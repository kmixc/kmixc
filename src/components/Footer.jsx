import React from 'react'
import '../css/Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-section">
                <div className="footer-links" id='hide-mobile'>
                    <Link to="/projects">Projects</Link>
                    <Link to="/about">About</Link>
                    <Link to="/videography">Videography</Link>
                    <Link to="/website-development">Web Design</Link>
                </div>

                <h2 className="footer-title" >
                    We collaborate with ambitious brands and people to create, capture, and grow.
                </h2>
            </div>

            <div className="footer-section" id='hide-mobile'>
                <div className="footer-links">
                    <p>Strategy</p>
                    <p>SMM</p>
                    <p>Marketing</p>
                </div>

                <Link to="/contact" className="footer-link">Start the project</Link>

                <div className="footer-socials">
                    <a href="https://instagram.com/kmixcvisuals" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.linkedin.com/in/oliver-kmiec-5b601b1b0/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://www.youtube.com/@kmixc" target="_blank" rel="noopener noreferrer">YouTube</a>
                </div>
            </div>

            <div className='footer-section' id='hide-desktop'>
                <div className="footer-links">
                    <Link to="/projects">Projects</Link>
                    <Link to="/about">About</Link>
                    <Link to="/videography">Videography</Link>
                    <Link to="/website-development">Web Design</Link>
                </div>

                <Link to="/contact" className="footer-link">Start the project</Link>

            </div>

            <div className='footer-section' id='hide-desktop'>
                <div className="footer-links">
                    <p>Strategy</p>
                    <p>SMM</p>
                    <p>Marketing</p>
                </div>

                <div className="footer-socials">
                    <a href="https://instagram.com/kmixcvisuals" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.linkedin.com/in/oliver-kmiec-5b601b1b0/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://www.youtube.com/@kmixc" target="_blank" rel="noopener noreferrer">YouTube</a>
                </div>
            </div>


            <div className="footer-bottom">
                <span>© KMIXCVISUALS</span>
                <span id='hide-mobile'>IN GOOD MARKETING WE TRUST</span>
                <div>
                    <a href="/terms">TERMS,</a>
                    <a href="/terms"> PRIVACY POLICY</a>
                </div>
            </div>
        </footer>
    )
}