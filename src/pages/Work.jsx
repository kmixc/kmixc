import { useState } from "react";
import '../css/Projects.css'
import '../css/Work.css'

//IMAGES
import CompanyShowcase from '../img/client_imgs/Millworx-1.jpg'
import Event from '../img/client_imgs/Event-3.jpg'
import EventTwo from '../img/client_imgs/Yoga.jpg'
import EventThree from '../img/client_imgs/Event.jpg'
import EventFour from '../img/client_imgs/Event-4.jpg'
import EventFive from '../img/client_imgs/Event-5.jpg'
import EventSix from '../assets/img/projects/chamber_of_commerce/chamberofcommerce1.jpg'
import EventSeven from '../assets/img/projects/brilliant_minded_women/brilliantmindedwomen11.jpg'
import EventEight from '../img/client_imgs/Event-6.jpg'
import EventNine from '../img/client_imgs/Event-7.jpg'
import Renovation from '../img/client_imgs/cgr_cover.jpg'
import SpecialEventOne from '../img/client_imgs/Special_Event_1.jpg'
import SpecialEventTwo from '../img/client_imgs/Special_Event_2.jpg'
import SpecialEventThree from '../img/client_imgs/Special_Event_3.jpg'
import SpecialEventFour from '../img/client_imgs/Special_Event_4.jpg'
import DentalOne from '../img/client_imgs/Dental_1.jpg'
import DentalTwo from '../img/client_imgs/Dental_2.jpg'
import DentalThree from '../img/client_imgs/Dental_3.jpg'
import DentalFour from '../img/client_imgs/Dental_4.jpg'
import DentalFive from '../img/client_imgs/Dental_5.jpg'
import ConstructionTwo from '../assets/img/projects/the_doors_ltd/thedoorsltd1.jpg'
import Restaurant from '../img/client_imgs/Finkle.jpg'

//COMPONENTS
import Preloader from '../components/Preloader';
import Footer from '../components/Footer.jsx'

const CATEGORIES = [
    { key: "all", label: "ALL" },
    { key: "commercial", label: "COMMERCIAL" },
    { key: "events", label: "EVENTS" },
    { key: "weddings", label: "WEDDINGS" },
    { key: "construction", label: "CONSTRUCTION" },
];

const allProjects = [
    { id: 1, title: "Millworx", img: CompanyShowcase, description: "Company Showcase", category: "construction", route: "/projects/millworx" },
    { id: 2, title: "LZ World Tour", img: Event, description: "Event Coverage", category: "events", route: "/projects/lz-world-tour" },
    { id: 3, title: "Custom Glass Railings", img: Renovation, description: "Company Showcase", category: "construction", route: "/projects/custom-glass-railings" },
    { id: 4, title: "Facility Plus", img: EventThree, description: "Company Showcase", category: "events", route: "/projects/facility-plus" },
    { id: 5, title: "Power Yoga Canada", img: EventTwo, description: "Promotional & Event", category: "commercial", route: "/projects/power-yoga-canada" },
    { id: 6, title: "Tommy & Victoria", img: SpecialEventOne, description: "Wedding Videography", category: "weddings", route: "/projects/tommy-&-victoria" },
    { id: 7, title: "Mike & Brittany", img: SpecialEventTwo, description: "Engagement Videography", category: "weddings", route: "/projects/mike-&-brittany" },
    { id: 8, title: "Janine & Lucas", img: SpecialEventThree, description: "Engagement Videography", category: "weddings", route: "/projects/janine-&-lucas" },
    { id: 9, title: "Roberto & Lorena", img: SpecialEventFour, description: "Engagement Videography", category: "weddings", route: "/projects/roberto-&-lorena" },
    { id: 10, title: "Luka Dental Care", img: DentalThree, description: "Dental Practice Coverage", category: "commercial", route: "/projects/luka-dental-care" },
    { id: 11, title: "Queen Street Dental", img: DentalOne, description: "Dental Practice Coverage", category: "commercial", route: "/projects/queen-street-dental" },
    { id: 12, title: "North York Dental", img: DentalTwo, description: "Dental Practice Coverage", category: "commercial", route: "/projects/north-york-dental" },
    { id: 13, title: "Waterloo Family Dental", img: DentalFour, description: "Dental Practice Coverage", category: "commercial", route: "/projects/waterloo-family-dental" },
    { id: 14, title: "Dentistry On Lawrence", img: DentalFive, description: "Dental Practice Coverage", category: "commercial", route: "/projects/dentistry-on-lawrence" },
    { id: 16, title: "Finkle Street Tap & Grill", img: Restaurant, description: "Restaurant Coverage", category: "commercial", route: "/projects/finkle-street-tap-&-grill" },
    { id: 17, title: "Slammedenuff Sevierville", img: EventNine, description: "Automotive Event", category: "events", route: "/projects/slammedenuff-sevierville-2024" },
    { id: 18, title: "The Doors Ltd", img: ConstructionTwo, description: "Company Showcase", category: "construction", route: "/projects/the-doors-ltd" },
    { id: 19, title: "Copernicus Lodge Galaxy Ball", img: EventFour, description: "Event Coverage", category: "events", route: "/projects/copernicus-lodge-galaxy-ball" },
    { id: 20, title: "Lululemon Madness", img: EventEight, description: "Event Coverage", category: "events", route: "/projects/lululemon-madness" },
    { id: 21, title: "JDRF Walk", img: EventFive, description: "Event Coverage", category: "events", route: "/projects/JDRF-walk" },
    { id: 22, title: "Chamber of Commerce", img: EventSix, description: "Event Coverage", category: "events", route: "/projects/chamber-of-commerce" },
    { id: 23, title: "Brilliant Minded Women", img: EventSeven, description: "Event Coverage", category: "events", route: "/projects/brilliant-minded-women" },
];

export default function Work() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filtered = activeCategory === "all"
        ? allProjects
        : allProjects.filter(p => p.category === activeCategory);

    return (
        <div className='projects-page work-page'>
            <Preloader />
            <div className='work-header'>
                <p className='work-header-sub'>PORTFOLIO</p>
                <h1 className='work-header-title'>WORK</h1>
            </div>

            <div className='work-filter'>
                {CATEGORIES.map(cat => (
                    <button
                        key={cat.key}
                        className={activeCategory === cat.key ? 'active' : ''}
                        onClick={() => setActiveCategory(cat.key)}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            <div className='projects-section'>
                <section className="projects">
                    <div className="work-grid" key={activeCategory}>
                        {filtered.map((project) => (
                            <a key={project.id} href={project.route} className="work-card">
                                <div className="work-card-media">
                                    <img src={project.img} alt={project.title} />
                                </div>
                                <div className="work-card-info">
                                    <span className="work-card-category">{project.category}</span>
                                    <h3 className="work-card-title">{project.title}</h3>
                                    <p className="work-card-desc">{project.description}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}
