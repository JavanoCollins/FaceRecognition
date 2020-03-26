import React from "react";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3'>
            {'This Magic Brain will detect faces in your pictures. Give it a try!'}
            </p>
            <div>
                <input className='pa2' type="text" placeholder='URL' onChange={onInputChange}/>
                <button 
                className='pa2 grow pointer'
                onClick ={ onButtonSubmit }
                style={{border: 'none', background: '#fc65f4', color: '#fff' }}>Detect</button>
            </div>
        </div>
    );
};

export default ImageLinkForm;
