import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { showNextMonth, showPrevMonth } from '../redux/actions/nowActions';
import './Calendar.css';
import WeekDays from '../WeekDays/WeekDays'
import Grid from '../Grid/Grid';

class Calendar extends Component {

    // state = {
    //     // now: moment(),
    //     // days: ['SUN','MON', 'TUE', 'WED', 'THU', 'FRI','SAT']
    // }

    // nextMonth = () => {
    //     let today = this.state.now.clone()
    //     this.setState({
    //         now: today.add(1, 'M'),
    //     })
    // }

    // prevMonth = () => {
    //     this.setState({
    //         now: this.state.now.subtract(1, 'M'),
    //     })
    // }

     render() {
        // this.calcDays();
        // const {days, now} = this.state;
        return (
            <div className='calendar'>
                <header className="header">
                <div className="month-display row">
                <span className='arrow' onClick= {this.props.showPrevMonth}>&#8656;</span>
                <span className="month-label">{`${this.props.now.format('MMMM')} ${this.props.now.year()}`}</span>
                <span className='arrow' onClick={this.props.showNextMonth}>&#8658;</span>
                </div>
                <WeekDays/>
                </header>
                <Grid/>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        now: state.now,
        days: state.days,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        showNextMonth: function () {
            dispatch(showNextMonth());
        },
        showPrevMonth: function () {
            dispatch(showPrevMonth());
        },

    }
}

// Calendar.propTypes = {

// };

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);