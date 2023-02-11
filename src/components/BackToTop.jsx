import React from 'react';
import { useEffect, useState } from 'react';
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import '../style/BackToTop.css';


const BackToTop = () => {

    const [backToTopBtn, setBackToTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => window.scrollY > 100 ? setBackToTopBtn(true) : setBackToTopBtn(false))
    },[])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

  return (
    <>
    {backToTopBtn && (
        <button className='back-to-top-btn' onClick={scrollUp}>
            <BsFillArrowUpCircleFill style={{
            position: 'fixed',
            bottom: '40px',
            right: '40px',
            fontSize: '48px',
        }} /></button>
        )}
    </>
  )
}

export default BackToTop;