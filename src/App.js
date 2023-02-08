import './App.css';
// import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx';
import Contact from './pages/Contact.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  )
};

export default App;