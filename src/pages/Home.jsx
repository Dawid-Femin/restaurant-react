import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Gallery from '../components/Gallery.jsx';
import PizzaPhoto from '../assets/restaurant-photo.jpg';
import '../style/Home.css';
import { photosGallery } from '../helpers/photosGallery.js';
import BackToTop from '../components/BackToTop.jsx';


const Home = () => {
  return (
    <>
    <Navbar />
    <Header />
    <div className="about-us-container">
      <div className="about-us-sections">
        <div className="about-us-left">
        <h3>Kilka słów o nas ...</h3>
          <p>Restauracja specjalizuje się w przygotowywaniu tradycyjnych włoskich pizz, które są przygotowywane z najlepszych składników i pieczone w specjalnym piecu na drewno. W menu znajdują się różne rodzaje pizz, od klasycznych smaków takich jak margherita, po bardziej wykwintne opcje z dodatkami takimi jak świeże owoce i wędliny. Klienci mogą także zamówić pizze na miejscu lub zabrać je do domu dzięki opcji dostawy. Restauracja posiada przytulne i kameralne wnętrze, w którym goście mogą cieszyć się swoimi posiłkami w spokojnej atmosferze. Obsługa jest miła i profesjonalna, a kucharze są gotowi doradzić w wyborze najlepszej pizzy dla każdego gościa.</p>
        </div>
        <div className="about-us-right">
          <img src={PizzaPhoto} alt="pizza" />
        </div>
      </div>
    </div>
    <Gallery photosGallery={photosGallery} />
    <BackToTop />
    <Footer />
    </>
  )
};

export default Home;