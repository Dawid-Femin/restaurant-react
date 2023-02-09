import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../style/Navbar.css';

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive-nav');
  };

  return (
    <div className='navBar'>
        <div className="navBarLeft">
            <img src="https://parspng.com/wp-content/uploads/2022/05/pizzapng.parspng.com-5.png" alt="pizzaslice" />
        </div>
        <div className="navBarRight">
          <nav ref={navRef}>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/contact">Contact</Link>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button className='nav-btn' onClick={showNavbar}>
          <FaBars />
          </button>
        </div>
    </div>
  )
};

export default Navbar;