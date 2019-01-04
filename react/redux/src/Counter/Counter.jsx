import React, { Component } from 'react';
import { connect } from 'react-redux'; // мы подключили, подключили компонент к стейту
import { plus, minus, reset } from '../redux/actions/counterAction.js';
import './Counter.css';

class Counter extends Component {

    // state = {
    //     count: 0,
    // }

    // increment = () => {
    //     this.setState(prev => ({
    //         count: prev.count - 1,
    //     }))
    // }

    // decrement = () => {
    //     this.setState(prev => ({
    //         count: prev.count + 1,
    //     }))
    // }

    // reset = () => {
    //     this.setState({
    //         count: 0,
    //     })
    // }

    numberUp = () => {
        this.props.plus(5);
    }
    
    render() {
        console.log(this.props);
        // let {count} = this.state;
        return (
            <div className='container'>
                <p className="count">{this.props.count}</p>
                <div className="buttons">
                    <button className="btn" onClick={() => this.props.minus(3)}>-</button>
                    <button className="btn" onClick={this.props.reset}>reset</button>
                    <button className="btn" onClick={this.numberUp}>+</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        count: state.count,

    }
}

function mapDispatchToProps (dispatch) {
    return {
        plus: function (number) {
            dispatch(plus(number));
        },
        minus: function (number) {
            dispatch(minus(number));
        },
        reset: function () {
            dispatch(reset);
        }
    }
}
//dispatch - отправить (внутрення функция редакса, помогает передать информацию от экшена редюсеру)

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// Cхема:!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// props ()

// mapStateToProps = {count: 0}
// mapDispatchToProps = {plus: func, minus: func, reset: obj}
// connect =
//         props = {
//             count: 0,
//             plus: func,
//             minus: func,
//             reset: obj,
//         }