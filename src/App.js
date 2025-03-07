import './App.css';
import { Route, Routes } from 'react-router-dom';


//PAGES
import Navbar from './components/Navbar';
import Home from './pages/home.jsx';
import Projects from './pages/Projects.jsx';
import Services from './pages/Services.jsx'
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Videography from './pages/Videography';
import WebsiteDevelopment from './pages/Website_Development.jsx';
import SocialMediaManagement from './pages/Social_Media_Management.jsx';

import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/services' element={<Services />} />
        <Route path='/videography' element={<Videography />} />
        <Route path='/website-development' element={<WebsiteDevelopment />} />
        <Route path='/social-media-management' element={<SocialMediaManagement />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
