import React from 'react';
import '../style/MenuItem.css';


const MenuItem = ({ image, name, price }) => {
  return (
    <div className="single-element">
        <img src={image} alt="pizza" />
        <h3>{name}</h3>
        <h4>{price}</h4>
    </div>
  )
};

export default MenuItem;