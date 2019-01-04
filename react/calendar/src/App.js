import React, { Component } from 'react';
import './App.css';
import Calendar from './Calendar/Calendar';

class App extends Component {
  state = {
    showCalendar:false,
  }
  showCalendarHandler = () => {
    this.setState(prev => ({
      showCalendar: !prev.showCalendar,
    }))
  }
  render() {
    return (
      <div className="App">
      <button onClick={this.showCalendarHandler}>Show Calendar</button>
        {this.state.showCalendar && <Calendar/>}
      </div>
    );
  }
}

export default App;