import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Today from '../Today/Today';
import PropTypes from 'prop-types';
import Menu from '../Menu/Menu';
import Fivedays from '../Fivedays/Fivedays';
import styles from './Info.css';

const Info = ({time, data, quote, cityForFiveDay}) => {
    return (
        <div className={styles.info}>
            <Menu/>
            <Switch>
                <Route exact path='/' render={ () => <Today time={time} data={data} quote={quote}/>}/> 
                <Route path='/five_day' render={ () => <Fivedays data={data} cityForFiveDay={cityForFiveDay}/>}/> 
            </Switch>
        </div>
    );
};

Info.propTypes = {
    time: PropTypes.string,
    data: PropTypes.object.isRequired,
    quote: PropTypes.object.isRequired,
    cityForFiveDay: PropTypes.string.isRequired,
}

export default Info;