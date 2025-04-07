import React from 'react'
import Marquee from "react-fast-marquee";

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
import Lululemon_Logo from '../img/client_logos/lululemon_logo.png'
import newhamburg from '../img/client_logos/newhamburg_logo.png'
import odin from '../img/client_logos/odin_logo.png'
import pyc from '../img/client_logos/pyc_logo.png'
import wfd from '../img/client_logos/waterloofamilydental_logo.png'
import cardp from '../img/client_logos/cardp_logo.png'
import luka from '../img/client_logos/lukadental_logo.png'

export default function clientMarquee() {
    return (
        <Marquee pauseOnHover={true} speed={150} loop={10} className='marquee-clients'>
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

            <div>
                <img src={Lululemon_Logo} alt="Lululemon" />
            </div>
            <div>
                <img src={newhamburg} alt="New_Hamburg" />
            </div>
            <div>
                <img src={odin} alt="ODIN" />
            </div>
            <div>
                <img src={pyc} alt="Power_Yoga_Canada" />
            </div>
            <div>
                <img src={wfd} alt="Waterloo_Family_Dental" />
            </div>
            <div>
                <img src={cardp} alt="Waterloo_Family_Dental" />
            </div>
            <div>
                <img src={luka} alt="Waterloo_Family_Dental" />
            </div>
            <a href='https://gtaexotics.ca/' target='client_site'>
                <img src={GTA_Logo} alt="GTA_Logo" />
            </a>
            <div>
                <img src={Chair_Logo} alt="Chair_Logo" />
            </div>
            <a href='https://www.instagram.com/optimal.trim.carpentry/' target='client_site'>
                <img src={OTP_Logo} alt="OTP_Logo" />
            </a>
            <a href='https://www.instagram.com/bobbybulletss/' target='client_site'>
                <img src={BB_Logo} alt="BB_Logo" />
            </a>
        </Marquee>
    )
}
