import React from 'react';
import styles from './Area.css';

const Area = ({area, status}) => {
    return (
        <p className={status ? styles.abs : null}>{area}</p>
    );
};

export default Area;