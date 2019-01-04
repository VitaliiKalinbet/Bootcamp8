import React from 'react';
import { Button } from 'semantic-ui-react';

const ButtonClick = ({ text, onClickFunc }) => {
    return (
        <Button onClick={onClickFunc} style={{margin: '0.5rem'}}>{text}</Button>
    );
};

export default ButtonClick;