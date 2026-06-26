import './App.css';
import { Route, Routes } from 'react-router-dom';


//PAGES
import ComingSoon from './pages/ComingSoon.jsx';
import Home from './pages/home.jsx';
import Projects from './pages/Projects.jsx';
import Services from './pages/Services.jsx'
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound';
import ProjectDetail from './pages/ProjectDetail';
import ContactCard from './pages/ContactCard.jsx';
import WebsiteDevelopment from './pages/WebsiteDevelopment.jsx';
import VisualContent from './pages/VisualContent.jsx';
import SocialMedia from './pages/SocialMedia.jsx';
import Work from './pages/Work.jsx';

//COMPONENTS
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop.jsx'
import PageTransition from './components/PageTransition';
import Redirect from './components/redirect.jsx';

function App() {
  return (
    <>
      <ScrollToTop />
      <PageTransition />
      <Routes>
        <Route path='/' element={<ComingSoon />} />
        <Route path='/dev' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path='/services' element={<Services />} />
        <Route path='/visual-content' element={<VisualContent />} />
        <Route path='/social-media' element={<SocialMedia />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contactcard' element={<ContactCard />} />
        <Route path='/website-development' element={<WebsiteDevelopment />} />
        <Route path='/work' element={<Work />} />
        <Route path='/dist/redirect.html' element={<Redirect />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
