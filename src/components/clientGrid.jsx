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
import Client11 from '../img/client_logos/customglassrailings_logo.png'
import Client12 from '../img/client_logos/lululemon_logo.png'
import Client13 from '../img/client_logos/newhamburg_logo.png'
import Client14 from '../img/client_logos/odin_logo.png'
import Client15 from '../img/client_logos/pyc_logo.png'
import Client16 from '../img/client_logos/waterloofamilydental_logo.png'
import Client17 from '../img/client_logos/cardp_logo.png'
import Client18 from '../img/client_logos/lukadental_logo.png'

const clients = [Client1, Client12, Client18, Client4, Client15, Client14, Client16, Client17, Client11, Client2, Client13, Client6, Client5, Client7, Client8, Client3];


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
