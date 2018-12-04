import React from 'react';
import styles from './Price.css';

const Price = ({price, status}) => {
    return (
        <p className={status ? styles.abs : null}>{price}</p>
    );
};

export default Price;