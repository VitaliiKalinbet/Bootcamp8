import React, { Component } from 'react';
import './App.css';
import Registration from './Registration/Registration';
import Order from './Order/Order';
import Container from './Container/Container';

class App extends Component {

  state = {
    registration: false,
    order: false,
  }

  showModal = (e) => {
    let id = e.target.id;
    this.setState(prev => ({
      [id]: !prev[id],
    }))
  }

  render() {
    return (
      // <div className="App">
      //   <button onClick={this.showModal} className='btn' id='registration'>Registration</button>
      //   <button onClick={this.showModal} className='btn' id='order'>Order</button>
      //   {this.state.registration && <Registration close={this.showModal} id='registration'/>}
      //   {this.state.order && <Order close={this.showModal} id='order'/>}    
      // </div>

      <Container>
      <h2>Hello world!</h2>
      <p>346 34634 346534 dfgdfg dfhbd fhvdsfgvdfg 
      </p>
      </Container>
    );
  }
}

export default App;
