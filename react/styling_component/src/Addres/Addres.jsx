import React from 'react';
import styles from './Addres';

const Addres = ({full_address, status}) => {
    return (
        <p className={status ? styles.abs : null}>{full_address}</p>
    );
};

export default Addres;