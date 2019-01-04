import React from 'react';
import { connect } from 'react-redux';
import './WeekDays.css';

const WeekDays = ({days}) => {
    return (
        <div className='row day-names'>
        {days.map(el => <span className="day" key={el}>{el}</span>)}
        </div>
    );
};

function mapStateToProps (state) {
    return {
        days: state.days,
    }
}

export default connect(mapStateToProps)(WeekDays);