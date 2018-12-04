import React from 'react';
import styles from './Card.css';
import Image from '../Image/Image';
import Addres from '../Addres/Addres';
import Area from '../Area/Area';
import Price from '../Price/Price';

const Card = ({templates, full_address, image, area, price}) => {
    const paint = (str, el, status) => {
        return str === "IMAGE" ? <Image image={image} pr={el.hasOwnProperty('children') ? paint(el.children[0].component, el, true)  : null} status={status}/> : str === "ADDRESS" ? <Addres full_address={full_address} status={status}/> : str === "PRICE" ? <Price price={price} status={status}/> : str === "AREA" ? <Area area={area} status={status}/> : null;
    }
        return (
        <div className={styles.card}>
            {templates[2].template.map(el => paint(el.component, el , false))}
        </div>
    );
};

export default Card;