import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import MenuItem from '../components/MenuItem.jsx';
import BackToTop from '../components/BackToTop.jsx';
import { MenuList } from '../helpers/MenuList.jsx';
import { MenuListDrinks } from '../helpers/MenuListDrinks.jsx';
import '../style/Menu.css';

const Menu = () => {
  return (
    <>
    <Navbar />
    <Header />
    <div className="menu-description">
    <h3>Wybierz cos dla siebie ...</h3>
    <p>Nasza pizza jest wyjątkowo smaczna i pełna włoskich tradycji</p>
    <h3>Pizza</h3>
    </div>
    <div className="menu-list">
      {MenuList.map((singleItem, key) => {
        return <MenuItem key={key} image={singleItem.image} name={singleItem.name} price={singleItem.price} />
      })}
    </div>
    <div className="menu-description">
    <h3>Napoje</h3>
    <p>Nasze napoje są orzeźwiające i pełne naturalnego smaku</p>
    </div>
    <div className="menu-list">
      {MenuListDrinks.map((singleItem, key) => {
        return <MenuItem key={key} image={singleItem.image} name={singleItem.name} price={singleItem.price} />
      })}
    </div>
    <BackToTop />
    <Footer />
    </>
  )
};

export default Menu;