import React from 'react'
import '../css/Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-section">
                <div className="footer-links" id='hide-mobile'>
                    <a href="/our-work">Our Work</a>
                    <a href="/about">About</a>
                    <a href="/videography">Videography</a>
                    <a href="/web-development">Web Design</a>
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

                <a href="/contact" className="footer-link">Start the project</a>

                <div className="footer-socials">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
                </div>
            </div>

            <div className='footer-section' id='hide-desktop'>
                <div className="footer-links">
                    <a href="/our-work">Our Work</a>
                    <a href="/about">About</a>
                    <a href="/videography">Videography</a>
                    <a href="/web-development">Web Design</a>
                </div>

                <a href="/contact" className="footer-link">Start the project</a>

            </div>

            <div className='footer-section' id='hide-desktop'>
                <div className="footer-links">
                    <p>Strategy</p>
                    <p>SMM</p>
                    <p>Marketing</p>
                </div>

                <div className="footer-socials">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
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