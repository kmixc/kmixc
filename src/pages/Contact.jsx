import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../css/Contact.css'
import Logo from '../img/logos/logo.svg'
import { Link } from 'react-router-dom'

//COMPONENTS
import Preloader from '../components/Preloader.jsx'
import Footer from '../components/Footer.jsx'

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Your EmailJS service ID, template ID, and Public Key
        const serviceId = process.env.REACT_APP_SERVICE_ID;
        const formId = process.env.REACT_APP_FORM_ID;
        const publicKey = process.env.REACT_APP_PUBLIC_KEY;

        // Create a new object that contains dynamic template params
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Kmixc Visuals',
            message: message,
        };

        // Send the email using EmailJS
        emailjs.send(serviceId, formId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    }

    return (
        <div className='contact-page'>
            <Preloader />
            <div className='contact-top-bar' id='#top'>
                <Link to="/home"><img className='logo' src={Logo} alt="kmixcvisuals" /></Link>
            </div>
            <div className='title'>
                <p>LET'S <span className='underline'>START</span> SOMETHING.</p>
            </div>

            <div className='form-section'>
                <a href="mailto:oliver.kmixc@gmail.com" className='round-button'>
                    <div className='round-button-circle'>
                        <p className='round-button'>GET IN TOUCH</p>
                    </div>
                </a>

                <div className='form-offset'>
                    <div className='desc'>
                        <p>Ready to discuss <span className='underline'>your project</span>?</p>
                        <p>Feel like we might be a <span className='underline'>great</span> fit?</p>
                        <p>We <span className='text-change'>would love</span> to <span className='text-change'>hear</span> about it!</p>
                    </div>
                    <form className='form' onSubmit={handleSubmit}>
                        <div className='form-flex'>
                            <div className='form-input'>
                                <input type="text" placeholder='NAME' name="user_name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className='form-input'>
                                <input type="email" placeholder='EMAIL*' required name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className='form-input'>
                            <textarea name="message" placeholder='PROJECT INFORMATION*' required cols="45" rows="8" value={message} onChange={(e) => setMessage(e.target.value)} />
                        </div>
                        <input className='form-btn' type="submit" value="SEND AWAY" />
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
