import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../css/Contact.css';
import { Link } from 'react-router-dom';
import Logo from '../img/logos/logo.svg';

import Preloader from '../components/Preloader';
import Footer from '../components/Footer';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [organization, setOrganization] = useState('');
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = process.env.REACT_APP_SERVICE_ID;
        const formId = process.env.REACT_APP_FORM_ID;
        const publicKey = "FB7tjAxo2Zs8SQ3nS";

        const templateParams = {
            from_name: name,
            from_email: email,
            from_organization: organization,
            message: message,
        };

        emailjs.send(serviceId, formId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setName('');
                setEmail('');
                setOrganization('');
                setMessage('');
                setSuccessMessage('Your message has been sent successfully!');
                setTimeout(() => setSuccessMessage(''), 5000);
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    };

    return (
        <div className='contact-page'>
            <Preloader />
            <Link to="/"><img className='logo' src={Logo} alt="Kmixc Visuals" /></Link>
            <div className='contact-container'>
                <div className='contact-info'>
                    <h1>Contact Us</h1>
                    <p className='subtext'>FOR BUSINESS INQUIRIES</p>
                    <a href='mailto:oliver.kmixc@gmail.com' className='contact-link'>oliver.kmixc@gmail.com</a>
                    <p className='subtext'>SCHEDULE A CALL</p>
                    <a href='https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1SqVFfx3zs2lGoBdVfsfDYqdxb9QiF8-bwpy_992TauerAHMR2DVrSyq_glCfMfW4jpCErrDog' target='_blank' className='contact-link'>Book a Time</a>
                    {
                        /*
                        <p className='subtext'>TO JOIN OUR TEAM</p>
                        <a href='mailto:oliver.kmixc@gmail.com' className='contact-link'>oliver.kmixc@gmail.com</a>
                        */
                    }
                </div>
                <div className='contact-form'>
                    <h2>LET'S START SOMETHING.</h2>
                    <p className='form-subtext'>Ready to discuss your project? Feel like we might be a great fit? We would love to hear about it!</p>
                    <form onSubmit={handleSubmit}>
                        <input type='text' placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} required />
                        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <input type='text' placeholder='Organization/Business Name' value={organization} onChange={(e) => setOrganization(e.target.value)} required />
                        <textarea placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                        <button type='submit'>SEND AWAY</button>
                    </form>
                    {successMessage && <p className='success-message fade-in'>{successMessage}</p>}
                </div>
            </div>
            <Footer />
        </div>
    );
}
