import React from 'react'
import '../css/ContactCard.css';

import IMG from '../img/team/kmixcvisuals-4.jpg'
import VCF from '../assets/kmixc-contact.vcf'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGlobe, faPhone, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

//COMPONENTS
import Preloader from '../components/Preloader';
import Footer from '../components/Footer.jsx'

export default function ContactCard() {
    return (
        <div>
            <div className="qr-card-wrapper">
                <Preloader />
                <div className="qr-card">
                    <section className="about">
                        <img
                            src={IMG}
                            alt="Oliver Kmiec"
                            className="profile-pic"
                        />
                        <div className="text">
                            <h2>Kmixc Visuals</h2>
                            <p className="title">CEO</p>
                        </div>
                        <p>Your one-stop shop for all digital marketing needs.</p>
                    </section>


                    <div className="action-list">
                        <a href={VCF} download className="action-item">
                            <FontAwesomeIcon icon={faUserPlus} size='xl' />
                            <div>
                                <strong>Add to Contacts</strong>
                            </div>
                        </a>

                        <a href="tel:+16474017166" className="action-item">
                            <FontAwesomeIcon className='' icon={faPhone} size='xl' />
                            <div>
                                <strong>Call now</strong>
                                <div className="subtext">+1 647-401-7166</div>
                            </div>
                        </a>

                        <a href="https://kmixc.com" target="_blank" rel="noreferrer" className="action-item">
                            <FontAwesomeIcon icon={faGlobe} size='xl' />
                            <div>
                                <strong>Website</strong>
                            </div>
                        </a>

                        <a href="mailto:oliver.kmixc@gmail.com" className="action-item">
                            <FontAwesomeIcon icon={faEnvelope} size='xl' />
                            <div>
                                <strong>Email Me</strong>
                                <div className="subtext">oliver.kmixc@gmail.com</div>
                            </div>
                        </a>

                        <a href="https://instagram.com/kmixcvisuals" target="_blank" rel="noreferrer" className="action-item">
                            <FontAwesomeIcon icon={faInstagram} size='xl' />
                            <div>
                                <strong>Instagram</strong>
                                <div className="subtext">@kmixcvisuals</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
