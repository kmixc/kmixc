import React from 'react'
import '../../css/Videography.css'

//COMPONENTS
import Footer from '../../components/Footer.jsx'

//ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

//GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Videography() {

    return (
        <div className='videography-page'>
            <div className='scroll'>
                <p>scroll for more</p>
                <FontAwesomeIcon icon={faSortDown} />
            </div>
            <Footer />
        </div >
    )
}
