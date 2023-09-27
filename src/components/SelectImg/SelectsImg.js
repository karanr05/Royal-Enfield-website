import React from 'react'
import './SelectImgStyles.css'

function SelectsImg({bgImg, text}) {
    return (
        <div className='selects-bikes'>
            <img src={bgImg} alt='/' />
            <div className="overlay">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default SelectsImg;