import './App.css';
import { Route, Routes } from 'react-router-dom';


//PAGES
import Navbar from './components/Navbar';
import Home from './pages/home.jsx';
import About from './pages/About.jsx';
import OurWork from './pages/Our_Work.jsx';
import Videography from './pages/Videography';
import WebsiteDevelopment from './pages/Website_Development.jsx';
import SocialMediaManagement from './pages/Social_Media_Management.jsx';
import Contact from './pages/Contact';

import NotFound from './pages/NotFound';
import Icon from './components/Icon';

function App() {
  return (
    <>
      <Navbar />
      <Icon></Icon>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/our-work' element={<OurWork />} />
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
