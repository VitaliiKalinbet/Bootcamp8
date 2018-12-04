import React from 'react';
import PropTypes from "prop-types";
import './Button.css';

const Button = ({clickFunc, text}) => {
    return (
        <button className="btn-add" onClick={clickFunc}>{text}</button>
    );
};

Button.protoTypes = {
    text: PropTypes.string.isRequired,
    clickFunc: PropTypes.func.isRequired,
};

export default Button;