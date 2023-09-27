import React from 'react';
import './ImgSlideStyles.css';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// import imgslide from '../../assets/imgslide.jpg';
import imgslide1 from '../../assets/imgslide1.jpg';
import imgslide2 from '../../assets/imgslide2.jpg';
import imgslide3 from '../../assets/imgslide.jpg';
import imgslide4 from '../../assets/imgslide4.jpg';
import imgslide5 from '../../assets/imgslide5.jpg';



const ImgSlide = () => {
  return (

    <div name='gallery' className='container'>
        <Carousel className='carousel' showArrows={true} autoPlay={true} infiniteLoop={true}>
       
        <div>
            <img src={imgslide1} alt='/' />
            {/* <p className="legend"> CONTINENTAL GT</p> */}
        </div><div>
            <img src={imgslide2} alt='/' />
            {/* <p className="legend"> CONTINENTAL GT</p> */}
        </div>
        <div>
            <img src={imgslide3} alt='/' />
            {/* <p className="legend"> CONTINENTAL GT</p> */}
        </div>
        <div>
            <img src={imgslide4} alt='/'/>
            {/* <p className="legend"> CLASSIC BULLET 350</p> */}
        </div>
        <div>
            <img src={imgslide5} alt='/' />
            {/* <p className="legend"> CONTINENTAL GT</p> */}
        </div>
        </Carousel>
    </div>
  )
}

export default ImgSlide;