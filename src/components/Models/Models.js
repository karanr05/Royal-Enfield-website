import React from 'react';
import  './ModelsStyles.css';

import Him2 from '../../assets/Him2.jpg';
import Scram3 from '../../assets/Scram3.jpg';
import hunter3 from '../../assets/hunter3.jpg';
import Him5 from '../../assets/Him5.jpg';
import Scram2 from '../../assets/Scram2.jpg';
import Interceptor2 from '../../assets/Interceptor2.jpg';
import bullet350 from '../../assets/bullet350.jpg';
import bullet351 from '../../assets/bullet351.jpg';


const Destination = () => {
  return (
    <div name='destinations'  className='look'> 
        <div className='container'>
            <h1> All new models of " 2023 " </h1>
            <p>Best motorbike of all time </p>
            <div className='img-container'>
                <img className='span-3 image-grid-row-2' src={Him2} alt='/' />
                <img src={Scram3} alt='/' />
                <img src={hunter3} alt='/' />
                <img src={Him5} alt='/' />
                <img src={Scram2} alt='/' />
                <img src={Interceptor2} alt='/' />
                <img src={bullet350} alt='/' />
                <img src={bullet351} alt='/' />
            </div>
        </div>
    </div>
  )
}

export default Destination