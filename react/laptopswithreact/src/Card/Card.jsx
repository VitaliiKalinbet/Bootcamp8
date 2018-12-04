import React from 'react';
import PropTypes from 'prop-types'; // ES6
import './Card.css';

const Card = ({name, descr, size,
    color, price, release_date, img, increment }) => {
    return (
        <div className="product-item"> 
            <img src={img} alt="notebook"/>
            <div className="product-list">
                <h3>{name}</h3>
                <p className="price">&#8372; {price}</p>
                <p className="size">Monitor size: {size}</p>
                <p className="color">Color: {color}</p>
                <p className="release_date">Release date: {release_date}</p>
                <p className="descr">{descr}</p>
            </div>
            <button className="add" onClick={increment} data-name={name}>Add to cart</button>
        </div>
    );
};

Card.propTypes = {
    name: PropTypes.string.isRequired,
    descr: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    release_date: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
};

export default Card;