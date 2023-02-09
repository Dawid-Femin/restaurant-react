import React from 'react';
import HeaderImage from '../assets/pizza-food.jpg';
import '../style/Header.css';


const Header = () => {
  return (
    <>
    <div className="header">
      <img src={HeaderImage} alt="" />
    </div>
    </>
  )
};

export default Header;