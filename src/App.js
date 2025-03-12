import './App.css';
import { Route, Routes } from 'react-router-dom';


//PAGES
import Home from './pages/home.jsx';
import Projects from './pages/Projects.jsx';
import Services from './pages/Services.jsx'
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound';

//SERVICE PAGES
import Videography from './pages/services/Videography';
import WebsiteDevelopment from './pages/services/Website_Development.jsx';
import SocialMediaManagement from './pages/services/Social_Media_Management.jsx';
import Photography from './pages/services/Photography.jsx';

//COMPONENTS
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop.jsx'
import PageTransition from './components/PageTransition';

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <PageTransition />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/videography' element={<Videography />} />
        <Route path='/services/photography' element={<Photography />} />
        <Route path='/services/website-development' element={<WebsiteDevelopment />} />
        <Route path='/services/social-media-management' element={<SocialMediaManagement />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
