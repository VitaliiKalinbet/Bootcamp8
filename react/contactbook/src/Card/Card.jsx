import React from 'react';
import './Card.css';
import PropTypes from "prop-types";
import trash from '../trash.png';
import icons from '../icons.png';

const Card = ({firstName, lastName, phoneNumber, emailAddress, id, deleteCard, showCardWithInfo}) => {
    return (
        <div className="card">
            <p>{firstName} {lastName}</p>
            <p>{phoneNumber}</p>
            <p>{emailAddress}</p>
            <img className="img" src={trash} alt="deletebox" data-id={id} onClick={deleteCard}/>
            <img className="img2" src={icons} alt="correcting" data-id={id} onClick={showCardWithInfo}/>
        </div>
    );
};

Card.protoTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    emailAddress: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    deleteCard: PropTypes.func.isRequired,
    showCardWithInfo: PropTypes.func.isRequired,
};

export default Card;