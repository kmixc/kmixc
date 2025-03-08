import { useEffect, useRef } from 'react';
import '../css/clientGrid.css'
import gsap from 'gsap';

//CLIENT LOGOS
import Client1 from '../img/client_logos/millworx_logo.png'
import Client2 from '../img/client_logos/cedonia_logo.png'
import Client3 from '../img/client_logos/bobbybullets_logo.png'
import Client4 from '../img/client_logos/facilityplus_logo.png'
import Client5 from '../img/client_logos/duralock_logo.png'
import Client6 from '../img/client_logos/basemhanna_logo.png'
import Client7 from '../img/client_logos/renogurus_logo.png'
import Client8 from '../img/client_logos/chair_logo.png'
import Client9 from '../img/client_logos/otp_logo.png'
import Client10 from '../img/client_logos/gtaexotics_logo.png'
import Client11 from '../img/client_logos/customglassrailings_logo.png'

const clients = [Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8, Client9, Client10, Client11];


export default function clientGrid() {

    return (
        <section className="about-special">
            <div className="client-grid">
                {clients.map((logo, index) => (
                    <div key={index} className="client-item">
                        <img src={logo} alt={`Client ${index + 1}`} />
                    </div>
                ))}
            </div>
        </section>
    )
}
