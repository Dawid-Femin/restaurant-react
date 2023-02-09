import React from 'react';
import { Link } from 'react-router-dom';
import HeaderImage from '../assets/pizza-food.jpg';
import '../style/Header.css';


const Header = () => {
  return (
    <>
    <div className="homePage" style={{backgroundImage:`url(${HeaderImage})`, backgroundPosition:'center', backgroundSize:'cover'}}>
      <div className="headerContainer">
        <h1>Pizza Restaurant</h1>
        <p> PIZZA DLA KAŻDEGO</p>
        <Link>
          <button>ZAMÓW TERAZ</button>
        </Link>
      </div>
    </div>
    </>
  )
};

export default Header;