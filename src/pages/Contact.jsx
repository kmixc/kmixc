import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../css/Contact.css';

import Preloader from '../components/Preloader';
import Footer from '../components/Footer';

export default function Contact() {
    const [state, handleSubmit] = useForm("xpqknrjj");

    return (
        <div className='contact-page'>
            <Preloader />
            <div className='contact-container'>
                <div className='contact-info'>
                    <h1>Contact Us</h1>
                    <p className='subtext'>FOR BUSINESS INQUIRIES</p>
                    <a href='mailto:oliver.kmixc@gmail.com' className='contact-link'>oliver.kmixc@gmail.com</a>
                    <p className='subtext'>SCHEDULE A CALL</p>
                    <a href='https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1SqVFfx3zs2lGoBdVfsfDYqdxb9QiF8-bwpy_992TauerAHMR2DVrSyq_glCfMfW4jpCErrDog' target='_blank' rel='noreferrer' className='contact-link'>Book a Time</a>
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
                    {state.succeeded ? (
                        <p className='success-message fade-in'>Your message has been sent successfully!</p>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className='form-row'>
                                <div className='form-field'>
                                    <input type='text' name='name' placeholder='Full Name' required />
                                    <ValidationError prefix='Name' field='name' errors={state.errors} />
                                </div>
                                <div className='form-field'>
                                    <input type='email' name='email' placeholder='Email' required />
                                    <ValidationError prefix='Email' field='email' errors={state.errors} />
                                </div>
                            </div>
                            <input type='text' name='organization' placeholder='Organization/Business Name' required />
                            <ValidationError prefix='Organization' field='organization' errors={state.errors} />
                            <div className='services-group'>
                                <p className='services-label'>Services Required <span>click to select</span></p>
                                <div className='services-checkboxes'>
                                    {['Videography', 'Photography', 'Website Development', 'Social Media Management', 'General Marketing', 'SEO'].map((service) => (
                                        <label key={service} className='service-option'>
                                            <input type='checkbox' name='services' value={service} />
                                            {service}
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <textarea name='message' placeholder='Message' required></textarea>
                            <ValidationError prefix='Message' field='message' errors={state.errors} />
                            <button type='submit' disabled={state.submitting}>SEND</button>
                        </form>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
