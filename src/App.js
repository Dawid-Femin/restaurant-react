import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';


function App() {

  const location = useLocation();

  return (
    <>
    <Navbar />
    <Header />
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      <Route path='/' exact element={<Home />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </AnimatePresence>
    <Footer />
    </>
  )
};

export default App;