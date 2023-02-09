import React from 'react';
import { BsInstagram, BsTwitter, BsYoutube, BsGoogle} from "react-icons/bs";
import { Link } from 'react-router-dom';
import '../style/Footer.css';

const Footer = () => {
  return (
    <footer>
        <div className="social-media">
            <Link to='https://instagram.com/' target="_blank"><BsInstagram /></Link>
            <Link to='https://twitter.com/' target="_blank"><BsTwitter /></Link>
            <Link to='https://youtube.com/' target="_blank"><BsYoutube /></Link>
            <Link to='https://google.com/' target="_blank"><BsGoogle /></Link>
        </div>
        <div className="copyright-info">
            <p>© 2023 Dawid Femin. All rights reserved.</p>
        </div>
    </footer>
  )
};

export default Footer;