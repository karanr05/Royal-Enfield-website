import React from 'react';
import './HeroStyle.css';

import Video2 from '../../assets/Video2.mp4';

const Hero = () => {
  return (
    <div className='hero'>
           <video autoPlay muted loop id='video'>
            <source src={Video2} type='video/mp4' />
           </video>
           <div className='overlay'></div>
           <div className='content'>
            <h1> Made like a gun</h1>
            <h2> Goes like a bullet.</h2>
           </div>
    </div>
  )
}

export default Hero;