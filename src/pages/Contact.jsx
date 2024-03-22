import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../css/Contact.css'
import Logo from '../img/logo.svg'
import { Link } from 'react-router-dom'


export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Your EmailJS service ID, template ID, and Public Key
        const serviceId = 'service_z8y12vk';
        const templateId = 'kmixc_form';
        const publicKey = 'FB7tjAxo2Zs8SQ3nS';

        // Create a new object that contains dynamic template params
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Kmixc Visuals',
            message: message,
        };

        // Send the email using EmailJS
        emailjs.send(serviceId, templateId, templateParams, publicKey)
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
            <div className='contact-top-bar'>
                <Link to="/"><img className='logo' src={Logo} alt="kmixcvisuals" /></Link>
            </div>
            <div className='title'>
                <p>LET'S <span className='underline'>START</span> SOMETHING.</p>
            </div>

            <div className='form-offset'>
                <div className='desc'>
                    <p>Ready to discuss your project? Feel like we might be a great fit? We would love to hear about it!</p>
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
            <div className='contact-page-2'>

            </div>
        </div>
    )
}
