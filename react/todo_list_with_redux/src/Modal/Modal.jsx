import React from 'react';
import './Modal.css';

const Modal = ({toggleModal}) => {
    return (
        <div className="owerlay" onDoubleClick={toggleModal}>
            <div className ="modal">
                <span className="close" onClick={toggleModal}>x</span>
            </div>
        </div>
    );
};

export default Modal;