import React from 'react'
import '../css/clientGrid.css'

//CLIENT LOGOS
import Millworx_Logo from '../img/client_logos/millworx_logo.png'
import Cedonia_Logo from '../img/client_logos/cedonia_logo.png'
import BB_Logo from '../img/client_logos/bobbybullets_logo.png'
import FP_Logo from '../img/client_logos/facilityplus_logo.png'
import Duralock_Logo from '../img/client_logos/duralock_logo.png'
import BH_Logo from '../img/client_logos/basemhanna_logo.png'
import Renogurus_Logo from '../img/client_logos/renogurus_logo.png'
import Chair_Logo from '../img/client_logos/chair_logo.png'
import OTP_Logo from '../img/client_logos/otp_logo.png'
import GTA_Logo from '../img/client_logos/gtaexotics_logo.png'
import CGR_Logo from '../img/client_logos/customglassrailings_logo.png'

export default function clientGrid() {
    return (
        <div className='client-grid'>
            <a href='https://cgrcanada.com/' target='client_site'>
                <img src={CGR_Logo} alt="CGR LOGO" />
            </a>
            <a href='http://www.cedonia.ca/' target='client_site'>
                <img src={Cedonia_Logo} alt="CEDONIA" />
            </a>
            <a href='https://www.millworx.ca/' target='client_site'>
                <img src={Millworx_Logo} alt="Millworx_Logo" />
            </a>
            <a href='https://duralockinterlocking.ca/' target='client_site'>
                <img src={Duralock_Logo} alt="Duralock_Logo" />
            </a>
            <a href='https://renogurus.ca/' target='client_site'>
                <img src={Renogurus_Logo} alt="Renogurus_Logo" />
            </a>
            <a href='https://basemhanna.com/' target='client_site'>
                <img src={BH_Logo} alt="BH_Logo" />
            </a>
            <a href='https://facilityplus.ca/' target='client_site'>
                <img src={FP_Logo} alt="FP_Logo" />
            </a>
            <a href='https://gtaexotics.ca/' target='client_site'>
                <img src={GTA_Logo} alt="GTA_Logo" />
            </a>
            <a href='https://www.instagram.com/bobbybulletss/' target='client_site'>
                <img src={BB_Logo} alt="BB_Logo" />
            </a>
            <div>
                <img src={Chair_Logo} alt="Chair_Logo" />
            </div>
            <a href='https://www.instagram.com/optimal.trim.carpentry/' target='client_site'>
                <img src={OTP_Logo} alt="OTP_Logo" />
            </a>
        </div>
    )
}
