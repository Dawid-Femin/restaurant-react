import React, { useEffect } from 'react';
import BackToTop from '../components/BackToTop.jsx';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import Navbar from '../components/Navbar.jsx';
import '../style/Contact.css';

const Contact = () => {
  useEffect(() => {
    const iFrameData=document.getElementById('iFrameID');
    const latitude = 50.03386542862901;
    const longitude = 22.006992770986663;
    iFrameData.src=`https://maps.google.com/maps?q=${latitude},${longitude}&hl=es;&output=embed`
  })
  return (
    <>
    <Navbar />
    <Header />
    <div className="contact-container">
      <div className="contact-section">
        <div className="left-info">
          <h3>Informacje kontaktowe</h3>
          <p>Warszawa, PL</p>
          <p>ul. Mazowiecka 14</p>
          <p>Telefon: +48 888 999 777</p>
          <p>Godziny otwarcia:</p>
          <p>Pn.-Pt.: 11:30 - 22:00</p>
          <p>Sb.-Nd.: 14:30 - 23:30</p>
        </div>
        <div className="right-info">
          <h3>Formularz kontaktowy</h3>
          <form action="POST" title='Formularz kontaktowy'>
            <input type="text" placeholder='Imię i nazwisko' />
            <input type="text" placeholder='Adres e-mail' />
            <textarea placeholder='Wiadomość' rows="4" cols="50"></textarea>
            <button>Wyślij wiadomość</button>
          </form>
        </div>
      </div>
    </div>
    <div className="map">
      <iframe title='map-google' id='iFrameID' height='500px' width='100%'></iframe>
    </div>
    <BackToTop />
    <Footer />
    </>
  )
};

export default Contact;