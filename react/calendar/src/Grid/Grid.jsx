import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Day from '../Day/Day';

const Grid = (props) => {

    const calcDays = () => {
        const start = moment(props.now.startOf('month')).startOf('week');
        const end = moment(props.now.endOf('month')).endOf('week');
        let days = Math.round(moment.duration(end - start).asDays());
        const matrix = [];
        for (let i = 0; i < days; i++) {
        let result = start.format("DD");
        matrix.push(result)
        result = start.add(1, "days").format("DD");
        }
        return matrix;
    } 

    return (
        <div className='row'>
            {calcDays().map((el,i)=> <Day day={el} key={el + i}/>)}
        </div>
    );
};

function mapStateToProps (state) {
    return {
        now: state.now,
    }
}

export default connect(mapStateToProps)(Grid);