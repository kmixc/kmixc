import React from 'react'
import '../css/ourWork.css'
import Logo from '../img/logo.svg'
import { Link } from 'react-router-dom'

export default function Our_Work() {
    return (
        <div>
            <div className='contact-top-bar' id='#top'>
                <Link to="/"><img className='logo' src={Logo} alt="kmixcvisuals" /></Link>
            </div>
        </div>
    )
}
