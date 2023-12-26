import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { Link } from 'react-router-dom'
import Logo from '../img/logo.svg'
import Circle from '../img/circle_text_for_video.svg'

export default function Videography() {

    useEffect(() => {
        const tl = gsap.timeline();
        const squareOne = document.querySelector('.square-one');
        const squareTwo = document.querySelector('.square-two');

        tl.set([squareOne], { x: -1000 });
        tl.set([squareTwo], { x: 1000 });

        tl.to([squareOne, squareTwo], { duration: 2, ease: "power3.inOut", x: 0 });
    }, []);

    return (
        <div className='videography-page'>
            <div className='top-bar'>
                <Link to="/"><img className='logo' src={Logo} alt="kmixcvisuals" /></Link>
            </div>
            <div className='videography-title'>
                <div className='title-1'>
                    <h1>TAKE</h1>
                    <h1><span className='text-change'>your</span></h1>
                </div>
                <div className='title-2 flex'>
                    <div class="square-one"></div>
                    <h1>VIDEOS</h1>
                </div>
                <div className='title-3'>
                    <h1><span className='text-change'>to</span></h1>
                    <h1>THE</h1>
                    <h1><span className='text-change'>next</span></h1>
                </div>
                <div className='title-4 flex-right'>
                    <h1>LEVEL</h1>
                    <div class="square-two"></div>
                </div>
                <p>scroll for more</p>
            </div>

            <div className='videography-two'>
                <h1>IDEAS THAT MOVE</h1>
                <div className='video-section'>
                    <p>FILMED IN CANADA 🇨🇦</p>
                    <div className='video'>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ABxbSUmVDAg?si=S7LW23n9ltn7_ADi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className='vid-circ'>
                        <img className='circle' src={Circle} alt="customized video creation" />
                    </div>
                </div>
            </div>

            <div className='videography-three'>
                <h1>section 3</h1>
            </div>
        </div>
    )
}
