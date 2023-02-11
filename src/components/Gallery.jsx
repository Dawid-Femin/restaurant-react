import React, { useState } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsFillXCircleFill } from "react-icons/bs";
import '../style/Gallery.css';

const Gallery = ({photosGallery}) => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = (id) => {
        setSlideNumber(id)
        setOpenModal(true);
    }

    const nextImage = () => {
        slideNumber === photosGallery.length-1 ? setSlideNumber(0) : setSlideNumber(slideNumber +1);
    }

    const prevImage = () => {
        slideNumber === 0 ? setSlideNumber(photosGallery.length -1 ) : setSlideNumber(slideNumber - 1 )
    }
    
    
    const handleCloseModal = () => {
        setOpenModal(false);
    }

  return (
    <div>

        {openModal &&
            <div className="slider-wrap">
                <BsFillArrowLeftCircleFill className='btn-left-arrow' onClick={prevImage} />
                <BsFillArrowRightCircleFill className='btn-right-arrow' onClick={nextImage}/>
                <BsFillXCircleFill className='btn-close' onClick={handleCloseModal}/>
                <div className="full-screen-image">
                    <img src={photosGallery[slideNumber].img} alt="restaurant" />
                </div>
            </div>
        }

        <div className="gallery-wrap">
            {
                photosGallery && photosGallery.map((photo, id) => {
                    return(
                        <div 
                        className="single-image" 
                        key={id}
                        onClick={ () => handleOpenModal(id) }>
                            <img src={photo.img} alt="restaurant" />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Gallery;