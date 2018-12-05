import React from 'react';
import Price from '../Price/Price';
import styles from './Image.css';

const Image = ({image, pr, status}) => {
    return (
        <div className={styles.box} >
            <img className={styles.img} src={image} alt="some_place"/>
            {pr}
            {/* <Price .../> */}
        </div>
    );
};

export default Image;