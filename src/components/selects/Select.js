import React from 'react';
import './SelectStyles.css';

import Him4 from '../../assets/Him4.jpg';
import hunter2 from '../../assets/hunter2.jpg';
import Scram1 from '../../assets/Scram1.jpg';
import bg3 from '../../assets/bg3.jpg';
import Interceptor2 from '../../assets/Interceptor2.jpg';
import Gt4 from '../../assets/Gt4.jpg';

import SelectsImg from '../SelectImg/SelectsImg';
 
function Selects() {
  return (
    <div name="views" className='selects'>
      <div className='container'>
        <SelectsImg bgImg={Him4} text='Himalayan' />
        <SelectsImg bgImg={Scram1} text='Screm 411' />
        <SelectsImg bgImg={bg3} text='Bullet 350' />
        <SelectsImg bgImg={Interceptor2} text='Interceptor 650' />
        <SelectsImg bgImg={hunter2} text='Hunter 350' />
        <SelectsImg bgImg={Gt4} text='Continental GT 650' />
      </div>

    </div>
  )
}

export default Selects;