import { useEffect, useRef } from 'react';
import '../css/clientGrid.css'
import gsap from 'gsap';

//CLIENT LOGOS
import PycLogo from '../img/client_logos/pyc_logo.png'
import FPLogo from '../img/client_logos/facilityplus_logo.png'
import LululemonLogo from '../img/client_logos/lululemon_logo.png'
import MillworxLogo from '../img/client_logos/millworx_logo.png'
import CGRLogo from '../img/client_logos/customglassrailings_logo.png'
import RoundLogo from '../img/client_logos/9round_kickboxing_logo.png'
import OdinLogo from '../img/client_logos/odin_logo.png'
import NBOLogo from '../img/client_logos/NBO_logo.png'
import ImportFestLogo from '../img/client_logos/importfest_logo.png'
import RWBLogo from '../img/client_logos/rwb_logo.png'
import MckillansLogo from '../img/client_logos/mckillans_logo.png'
import UndergroundLogo from '../img/client_logos/underground_logo.png'
import CPCCLogo from '../img/client_logos/CPCC_logo.png'
import OrbisLogo from '../img/client_logos/orbis_logo.png'

const clients = [PycLogo, FPLogo, LululemonLogo, MillworxLogo, CGRLogo, RoundLogo, OdinLogo, NBOLogo, ImportFestLogo, RWBLogo, MckillansLogo, UndergroundLogo, CPCCLogo, OrbisLogo];


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
