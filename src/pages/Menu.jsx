import React from 'react';
import MenuItem from '../components/MenuItem.jsx';
import BackToTop from '../components/BackToTop.jsx';
import { MenuList } from '../helpers/MenuList.jsx';
import { MenuListDrinks } from '../helpers/MenuListDrinks.jsx';
import { motion } from 'framer-motion';
import '../style/Menu.css';


const Menu = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}>
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
    </motion.div>
  )
};

export default Menu;