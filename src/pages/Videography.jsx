import React, { useEffect } from 'react'
import '../css/Videography.css'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.svg'
import Circle from '../img/circle_text_for_video.svg'
import $ from 'jquery'

//COMPONENTS
import VideographyGallery from '../components/videographyGallery'
import ClientMarquee from '../components/clientMarquee'

//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

import Y2K_1 from '../img/svg_icons/8.svg'
import Y2K_2 from '../img/svg_icons/7.svg'
import Y2K_3 from '../img/svg_icons/23.svg'

//GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Videography() {

    useEffect(() => {
        const tl = gsap.timeline();
        const squareOne = document.querySelector('.square-one');
        const squareTwo = document.querySelector('.square-two');

        tl.set([squareOne], { x: -1000 });
        tl.set([squareTwo], { x: 1000 });

        tl.to([squareOne, squareTwo], { duration: 2, ease: "power3.inOut", x: 0 });
    }, []);

    useEffect(() => {
        gsap.fromTo(".square-three", { xPercent: 100, display: 'none' }, {
            xPercent: 0,
            duration: 1.5,
            display: 'flex',
            ease: 'power4.inOut',
            scrollTrigger: {
                trigger: ".video"
            }
        });

        gsap.fromTo(".square-four", { xPercent: -100, display: 'none' }, {
            xPercent: 0,
            duration: 1.5,
            display: 'flex',
            ease: 'power4.inOut',
            scrollTrigger: {
                trigger: ".desc"
            }
        });

        gsap.fromTo(".square-five", { xPercent: 100, display: 'none' }, {
            xPercent: 0,
            duration: 1.5,
            display: 'flex',
            ease: 'power4.inOut',
            scrollTrigger: {
                trigger: ".desc"
            }
        });

        gsap.fromTo(".name", { color: "#000", display: 'none' }, {
            color: "#FF7300",
            duration: 1.5,
            display: 'inline',
            ease: 'power4.inOut',
            scrollTrigger: {
                trigger: ".desc"
            }
        });

    }, []);

    function toggleDivOne() {
        $(".topOne").toggleClass('top-1')
        $(".div-hide-one").slideToggle(500)
        if ($('.topOne').hasClass('top-1')) {
            gsap.fromTo('.num-1', { x: 0 }, {
                x: -30,
                duration: 0.3
            })
            gsap.fromTo('.text-1', { opacity: 0, y: 30 }, {
                y: 0,
                opacity: 1,
                duration: 0.3,
                ease: 'power1.inOut'
            })
        } else {
            gsap.fromTo('.num-1', { x: -30 }, {
                x: 0,
                duration: 0.3,
                ease: 'power1.inOut'
            })
            gsap.fromTo('.text-1', { opacity: 1, y: 0 }, {
                y: 10,
                opacity: 0,
                duration: 0.3,
                ease: 'power1.inOut'
            })
        }
    }

    function toggleDivTwo() {
        $(".topTwo").toggleClass('top-2')
        $(".div-hide-two").slideToggle(500)
        if ($('.topTwo').hasClass('top-2')) {
            gsap.fromTo('.num-2', { x: 0 }, {
                x: -30,
                duration: 0.3
            })
            gsap.fromTo('.text-2', { opacity: 0, y: 30 }, {
                y: 0,
                opacity: 1,
                duration: 0.3,
                ease: 'power1.inOut'
            })
        } else {
            gsap.fromTo('.num-2', { x: -30 }, {
                x: 0,
                duration: 0.3,
                ease: 'power1.inOut'
            })
            gsap.fromTo('.text-2', { opacity: 1, y: 0 }, {
                y: 10,
                opacity: 0,
                duration: 0.3,
                ease: 'power1.inOut'
            })
        }
    }

    function toggleDivThree() {
        $(".topThree").toggleClass('top-3')
        $(".div-hide-three").slideToggle(500)
        if ($('.topThree').hasClass('top-3')) {
            gsap.fromTo('.num-3', { x: 0 }, {
                x: -30,
                duration: 0.3
            })
            gsap.fromTo('.text-3', { opacity: 0, y: 30 }, {
                y: 0,
                opacity: 1,
                duration: 0.3,
                ease: 'power1.inOut'
            })
        } else {
            gsap.fromTo('.num-3', { x: -30 }, {
                x: 0,
                duration: 0.3,
                ease: 'power1.inOut'
            })
            gsap.fromTo('.text-3', { opacity: 1, y: 0 }, {
                y: 10,
                opacity: 0,
                duration: 0.3,
                ease: 'power1.inOut'
            })
        }
    }

    function toggleDivFour() {
        $(".topFour").toggleClass('top-4')
        $(".div-hide-four").slideToggle(500)
        if ($('.topFour').hasClass('top-4')) {
            gsap.fromTo('.num-4', { x: 0 }, {
                x: -30,
                duration: 0.3
            })
            gsap.fromTo('.text-4', { opacity: 0, y: 30 }, {
                y: 0,
                opacity: 1,
                duration: 0.3,
                ease: 'power1.inOut'
            })
        } else {
            gsap.fromTo('.num-4', { x: -30 }, {
                x: 0,
                duration: 0.3,
                ease: 'power1.inOut'
            })
            gsap.fromTo('.text-4', { opacity: 1, y: 0 }, {
                y: 10,
                opacity: 0,
                duration: 0.3,
                ease: 'power1.inOut'
            })
        }
    }

    return (
        <div className='videography-page'>
            <div className='top-bar'>
                <Link to="/"><img className='logo' src={Logo} alt="kmixcvisuals" /></Link>
            </div>
            <div className='videography-title'>
                <img className='y2k-1' src={Y2K_2} alt="" />
                <img className='y2k-2' src={Y2K_3} alt="" />
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
                    <h1><span className='text-change underline'>next</span></h1>
                </div>
                <div className='title-4 flex-right'>
                    <h1>LEVEL</h1>
                    <div class="square-two"></div>
                </div>
                <div className='scroll'>
                    <p>scroll for more</p>
                    <FontAwesomeIcon icon={faSortDown} />
                </div>
            </div>

            <div className='videography-two'>
                <h1>IDEAS THAT MOVE</h1>
                <div className='video-section'>
                    <p>FILMED IN CANADA</p>
                    <div className='video'>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ABxbSUmVDAg?si=S7LW23n9ltn7_ADi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className='square-three'>
                        <img src={Y2K_1} alt="" />
                    </div>
                    <div className='vid-circ'>
                        <img className='circle' src={Circle} alt="customized video creation" />
                    </div>
                </div>
            </div>

            <div className='videography-three'>
                <h1>why me?</h1>
            </div>
            

            
            <div className='videography-four'>
                <div>
                    <div className='square-four'></div>
                    <p className='desc'>
                        <span className='name'>→kmixcvisuals</span> specializes in creating <span className='underline'>customized videos</span> that make your <span className='text-change'>company</span> stand out.
                        With our <span className='text-change'>skilled team</span>, We ensure your <span className='underline'>brand connects effectively</span> with the <span className='text-change'>audience</span>.
                    </p>
                    <div className='square-five'></div>
                </div>
            </div>

            <div className='videography-five'>
                <VideographyGallery />
            </div>

            <div className='videography-six'>
                <div className='title-area'>
                    <p className='title'>SERVICES</p>
                    <p className='text-change'>What we're good at</p>
                </div>
                <div className='expand'>
                    <div className='dropdown' onClick={toggleDivOne}>
                        <div className='top topOne'>
                            <p className='text'>DESIGN</p>
                            <p className='num num-1'>01</p>
                        </div>
                        <div className='div-hide div-hide-one'>
                            <div className='list-item'>
                                <div className="first">
                                    <FontAwesomeIcon className='text-1' color='#FF7300' icon={faSquare} />
                                    <p className='text-1'>Creative Development</p>
                                </div>
                                <p className='text-1'>01.1</p>
                            </div>
                            <div className='list-item'>
                                <div className="first">
                                    <FontAwesomeIcon className='text-1' color='#FF7300' icon={faSquare} />
                                    <p className='text-1'>Script Writing</p>
                                </div>
                                <p className='text-1'>01.2</p>
                            </div>
                            <div className='list-item'>
                                <div className='first'>
                                    <FontAwesomeIcon className='text-1' color='#FF7300' icon={faSquare} />
                                    <p className='text-1'>Storyboarding & Pre-VIS</p>
                                </div>
                                <p className='text-1'>01.3</p>
                            </div>
                        </div>
                    </div>
                    <div className='dropdown' onClick={toggleDivTwo}>
                        <div className='top topTwo'>
                            <p className='text'>PRE-PRODUCTION</p>
                            <p className='num num-2'>02</p>
                        </div>
                        <div className='div-hide div-hide-two'>
                            <div className='list-item'>
                                <div className="first">
                                    <FontAwesomeIcon className='text-2' color='#FF7300' icon={faSquare} />
                                    <p className='text-2'>Project Management</p>
                                </div>
                                <p className='text-2'>02.1</p>
                            </div>
                            <div className='list-item'>
                                <div className="first">
                                    <FontAwesomeIcon className='text-2' color='#FF7300' icon={faSquare} />
                                    <p className='text-2'>Administration & Logistics</p>
                                </div>
                                <p className='text-2'>02.2</p>
                            </div>
                            <div className='list-item'>
                                <div className="first">
                                    <FontAwesomeIcon className='text-2' color='#FF7300' icon={faSquare} />
                                    <p className='text-2'>Location Scouting</p>
                                </div>
                                <p className='text-2'>02.3</p>
                            </div>
                            <div className='list-item'>
                                <div className="first">
                                    <FontAwesomeIcon className='text-2' color='#FF7300' icon={faSquare} />
                                    <p className='text-2'>Talent Casting</p>
                                </div>
                                <p className='text-2'>02.4</p>
                            </div>
                            <div className='list-item'>
                                <div className="first">
                                    <FontAwesomeIcon className='text-2' color='#FF7300' icon={faSquare} />
                                    <p className='text-2'>Crew Sourcing</p>
                                </div>
                                <p className='text-2'>02.4</p>
                            </div>
                        </div>
                    </div>
                    <div className='dropdown' onClick={toggleDivThree}>
                        <div className='top topThree'>
                            <p className='text'>PRODUCTION</p>
                            <p className='num num-3'>03</p>
                        </div>
                        <div className='div-hide div-hide-three'>
                            <div className='list-item'>
                                <div className="first">
                                    <FontAwesomeIcon className='text-3' color='#FF7300' icon={faSquare} />
                                    <p className='text-3'>Scalable Serive Production</p>
                                </div>
                                <p className='text-3'>03.1</p>
                            </div>
                            <div className='list-item'>
                                <div className="first">
                                    <FontAwesomeIcon className='text-3' color='#FF7300' icon={faSquare} />
                                    <p className='text-3'>Award winning Directors & Producers</p>
                                </div>
                                <p className='text-3'>03.2</p>
                            </div>
                            <div className='list-item'>
                                <div className="first">
                                    <FontAwesomeIcon className='text-3' color='#FF7300' icon={faSquare} />
                                    <p className='text-3'>In-House Cinema Gear</p>
                                </div>
                                <p className='text-3'>03.3</p>
                            </div>
                            <div className='list-item'>
                                <div className="first">
                                    <FontAwesomeIcon className='text-3' color='#FF7300' icon={faSquare} />
                                    <p className='text-3'>On-set Culture of Collaboration</p>
                                </div>
                                <p className='text-3'>03.4</p>
                            </div>
                            <div className='list-item'>
                                <div className="first">
                                    <FontAwesomeIcon className='text-3' color='#FF7300' icon={faSquare} />
                                    <p className='text-3'>Studio Space & Rentals</p>
                                </div>
                                <p className='text-3'>03.5</p>
                            </div>
                        </div>
                    </div>
                    <div className='dropdown' onClick={toggleDivFour}>
                        <div className='top topFour'>
                            <p className='text'>POST</p>
                            <p className='num num-4'>04</p>
                        </div>
                        <div className='div-hide div-hide-four'>
                            <div className='list-item'>
                                <div className="first">
                                    <FontAwesomeIcon className='text-4' color='#FF7300' icon={faSquare} />
                                    <p className='text-4'>Editing</p>
                                </div>
                                <p className='text-4'>04.1</p>
                            </div>
                            <div className='list-item'>
                                <div className="first">
                                    <FontAwesomeIcon className='text-4' color='#FF7300' icon={faSquare} />
                                    <p className='text-4'>Motion Graphics & Animation</p>
                                </div>
                                <p className='text-4'>04.2</p>
                            </div>
                            <div className='list-item'>
                                <div className="first">
                                    <FontAwesomeIcon className='text-4' color='#FF7300' icon={faSquare} />
                                    <p className='text-4'>Sound Design</p>
                                </div>
                                <p className='text-4'>04.3</p>
                            </div>
                            <div className='list-item'>
                                <div className="first">
                                    <FontAwesomeIcon className='text-4' color='#FF7300' icon={faSquare} />
                                    <p className='text-4'>Colour Grading</p>
                                </div>
                                <p className='text-4'>04.4</p>
                            </div>
                            <div className='list-item'>
                                <div className="first">
                                    <FontAwesomeIcon className='text-4' color='#FF7300' icon={faSquare} />
                                    <p className='text-4'>Multi-Platform Mastering & Delivery</p>
                                </div>
                                <p className='text-4'>04.5</p>
                            </div>
                        </div>
                    </div>
                </div>
                <ClientMarquee />
            </div>
        </div >
    )
}
