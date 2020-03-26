import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ( {imageURL} ) => {
    return (
        <div>
            <img className='predictImg' src={imageURL} alt=""/>
        </div>
    )
}

export default FaceRecognition;