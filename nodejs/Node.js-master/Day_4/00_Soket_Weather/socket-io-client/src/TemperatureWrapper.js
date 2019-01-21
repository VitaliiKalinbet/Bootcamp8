import React from 'react';
import PropTypes from 'prop-types';

const TemperatureWrapper = props => {
    return (
        <h1>
            The temperature in Bengaluru is: {props.temp} °F
        </h1>
    );
}

TemperatureWrapper.propTypes = {
    temp: PropTypes.number.isRequired
}

export default TemperatureWrapper;