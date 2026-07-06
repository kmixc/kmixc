import './App.css';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

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
const Redirect = lazy(() => import('./components/redirect.jsx'));

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <PageTransition />
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
          <Route path='/dist/redirect.html' element={<Redirect />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
