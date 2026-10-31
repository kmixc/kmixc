import './App.css';
import { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

//COMPONENTS
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop.jsx'
import PageTransition from './components/PageTransition';

//PAGES
const Home = lazy(() => import('./pages/home.jsx'));
const Projects = lazy(() => import('./pages/Projects.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const ContactCard = lazy(() => import('./pages/ContactCard.jsx'));
const WebsiteDevelopment = lazy(() => import('./pages/WebsiteDevelopment.jsx'));
const VisualContent = lazy(() => import('./pages/VisualContent.jsx'));
const SocialMedia = lazy(() => import('./pages/SocialMedia.jsx'));
const Work = lazy(() => import('./pages/Work.jsx'));
const PortraitStudio = lazy(() => import('./pages/PortraitStudio.jsx'));
const Redirect = lazy(() => import('./components/redirect.jsx'));

// Standalone-brand pages render without the main site's navbar and page transition
const STANDALONE_PATHS = ['/portraitstudio'];

function App() {
  const { pathname } = useLocation();
  const isStandalone = STANDALONE_PATHS.includes(pathname.replace(/\/+$/, ''));

  return (
    <>
      {!isStandalone && <Navbar />}
      <ScrollToTop />
      {!isStandalone && <PageTransition />}
      <Suspense fallback={null}>
        <Routes>
          <Route path='/' element={<Home />} />
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
          <Route path='/portraitstudio' element={<PortraitStudio />} />
          <Route path='/dist/redirect.html' element={<Redirect />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
