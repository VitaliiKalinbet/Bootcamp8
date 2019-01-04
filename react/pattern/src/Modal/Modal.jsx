import React from 'react';
import './Modal.css';

const Modal = (props) => {
    return (
        <div className='overlay' onClick={props.close} id={props.id}>
            <div className='modal'>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;