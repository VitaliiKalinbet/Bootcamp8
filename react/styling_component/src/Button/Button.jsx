import React from 'react';
import styles from './Button.css';

const Button = ( {text} ) => {
    console.log(styles)
    return (
        <button className={ `${styles.button} ${styles.text}` }>{text}</button>
    );
};

export default Button;