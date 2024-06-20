import React, { useRef, useState } from 'react';
import '../css/ourWork.css'
import Logo from '../img/logo.svg'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap';
import CountUp from 'react-countup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

import { InstagramEmbed } from 'react-social-media-embed';

import Demo_Reel from '../img/Demo_Reel_2023_Website.mp4'

export default function Our_Work() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    const countEnd = () => {
        const tl = gsap.timeline();
        const overlay = document.querySelector('.overlay');
        tl.to(overlay, { duration: 1, ease: "power4.inOut", y: -4100 });

        const text_tl = gsap.timeline();
        const text_overlay = document.querySelector('.overlay-transparent');
        text_tl.to(text_overlay, { duration: 1, ease: "power4.inOut", y: -4100 });

        const logoTl = gsap.timeline();
        const logo = document.querySelector('.logo');
        logoTl.set([logo], { autoAlpha: 0, y: 50 });
        logoTl.to(logo, { autoAlpha: 1, duration: 1, delay: 0.2, ease: "power4.inOut", y: 0 });
    };

    return (
        <div className='our-work-page'>

            <div className="overlay-transparent">
                <CountUp onEnd={countEnd} className='countup-overlay' suffix='%' end={100} />
            </div>
            <div className="overlay"></div>
            <div className='top-bar' id='#top'>
                <Link to="/"><img className='logo' src={Logo} alt="kmixcvisuals" /></Link>
            </div>
            <div className='top'>
                <div className='our-work-title'>
                    <h1 className='date'>2023</h1>
                    <h1 className='title'>DEMO REEL</h1>
                </div>

                <div className='video-background'>
                    <video autoplay="autoplay" loop="loop" muted defaultMuted playsInline style={{ maxWidth: "1000%" }} id='myVideo'>
                        <source src={Demo_Reel} />
                    </video>
                </div>
            </div>


            <div className='youtube-content'>
                <h1>HIGHLIGHTS</h1>
                <div className='section-rev'>
                    <iframe width="900" height="540" src="https://www.youtube.com/embed/ABxbSUmVDAg?si=DAO-HtJSNDFhY92R&showinfo=0&rel=0" frameBorder='0' allowFullScreen></iframe>
                    <div className='text'>
                        <h1>LZ World Tour 2023</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a t</p>
                    </div>
                </div>

                <div>
                    <p>home & companies</p>
                    <div className='gallery'>
                        <iframe src="https://www.youtube.com/embed/e75xO0AavQQ?si=OEMAv27ECtJSyWGb&showinfo=0&rel=0" frameBorder='0' allowFullScreen></iframe>
                        <iframe src="https://www.youtube.com/embed/sPkOKKX9NQA?si=TUhnFYrBpSg0haEU&showinfo=0&rel=0" frameBorder='0' allowFullScreen></iframe>
                        <iframe src="https://www.youtube.com/embed/RA_snXyzdzE?si=ASMU970senIJhNKT&showinfo=0&rel=0" frameBorder='0' allowFullScreen></iframe>
                        <iframe src="https://www.youtube.com/embed/Do0sUfW5SU0?si=L7c1PUjeRH4uh2-2&showinfo=0&rel=0" frameBorder='0' allowFullScreen></iframe>
                        <iframe src="https://www.youtube.com/embed/JuOrkGhKwbc?si=5xXio095zuq4bt_c&showinfo=0&rel=0" frameBorder='0' allowFullScreen></iframe>
                        <iframe src="https://www.youtube.com/embed/eGEUnLA9v6A?si=AykSzxE6R-QAxBke&showinfo=0&rel=0" frameBorder='0' allowFullScreen></iframe>
                        <iframe src="https://www.youtube.com/embed/hnaYiIUzJaA?si=OelgQqk5gBZnG6wn" frameBorder='0' allowFullScreen></iframe>
                        <iframe src="https://www.youtube.com/embed/2S7qwty2A24?si=c-yebtukGr1a-ACX" frameBorder='0' allowFullScreen></iframe>
                    </div>
                </div>

                <div className='section'>
                    <iframe width="900" height="540" src="https://www.youtube.com/embed/9zDUE2rVqrk?si=axII55wRMRNLiXzW&showinfo=0&rel=0" frameBorder='0' allowFullScreen></iframe>
                    <div className='text'>
                        <h1>Boxing Cinematic</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a t</p>
                    </div>
                </div>
            </div>

            <div className='instagram-content'>

                <div className='section'>
                    <h1>younger generations now turn to social networks to research brands more than search engines.</h1>
                    <InstagramEmbed className='video' url="https://www.instagram.com/p/C5qwW6MrZuC/" width={328} />
                    <InstagramEmbed className='video' url="https://www.instagram.com/p/C5GNZQ3uHWz/" width={328} />
                </div>

                <div className='section'>
                    <InstagramEmbed className='video' url="https://www.instagram.com/p/C5ZUmX8r160/" width={328} />
                    <InstagramEmbed className='video' url="https://www.instagram.com/p/C5en2ySryXd/" width={328} />
                    <h1>brands that partner wisely with creators are connecting with new audiences, earning their trust, and gaining cultural capital.</h1>
                </div>

                <div className='section'>
                    <InstagramEmbed className='video' url="https://www.instagram.com/p/C0SjExyA5cH/" width={328} />
                    <InstagramEmbed className='video' url="https://www.instagram.com/p/CrdcROoAhaI/" width={328} />
                    <InstagramEmbed className='video' url="https://www.instagram.com/p/C4_FPMLOEFJ/" width={328} />
                </div>

                <InstagramEmbed className='video' url="https://www.instagram.com/p/C3-4ueiu63i/" width={328} />

            </div>
        </div>
    )
}
