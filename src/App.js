import './App.css';
import { Route, Routes } from 'react-router-dom';

//PAGES
import Navbar from './components/Navbar';
import Home from './pages/home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact';
import Videography from './pages/Videography';
import Website_Development from './pages/Website_Development.jsx';

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
        <Route path='/videography' element={<Videography />} />
        <Route path='/website-development' element={<Website_Development />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
