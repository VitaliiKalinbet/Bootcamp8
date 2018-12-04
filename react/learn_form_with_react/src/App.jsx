import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import Modal from './Modal/Modal';
import './App.css';
import trash from './trash.png';

class App extends Component {
  state = {
      text: '',
      password: '',
      tasks: [],
      showModal: false,
  }

  handlerChange = (evt) => {
    let value = evt.target.value;
    let name = evt.target.name;
    this.setState({
      [name]: value,
    }) 
  }

  createObj = (evt) => {
    evt.preventDefault();
    let item = {
      id: uuidv4(),
      text: this.state.text,
      complete: false,
    }
    this.setState( prevState => ({
      tasks: [item, ...prevState.tasks],
      text: '',
    }))
  }

  toggleComplete = (e) => {
    let id = e.target.id;
    this.setState({
      tasks: this.state.tasks.map(el => el.id === id ? {...el, complete: !el.complete}: el)
    })
  }

  deleteLi = (e) => {
    let id = e.target.dataset.id;
    this.setState({
      tasks: this.state.tasks.filter(el => el.id !== id),
    })
  }

  toggleModal = (e) => {
    if (e.target.className === "owerlay" || e.target.className === "close" || e.target.className === "openModal") {  
      this.setState( prev => ({
        showModal: !prev.showModal
      }))
    } else {
      return
    }
  }

  // passwordChange = (evt) => {
  //   let value = evt.target.value;
  //   this.setState({
  //     password: value,
  //   })
  // }

  render() {
    const { tasks, showModal } = this.state;
    return (
      <div className="App">
      {/* {showModal ? <Modal/> : null} - вариант добавления модальки*/}
      {showModal && <Modal toggleModal={this.toggleModal} />}
          <form action="" className="form" onSubmit={this.createObj}>
            <input type="text" className="text" value={this.state.text} onChange={this.handlerChange} name='text' placeholder="Name"/>
            {/* <input type="password" className="text" placeholder="Password" value={this.state.password} onChange={this.handlerChange} name='password'/> */}
            <input type="submit" value="Add" className="add"/>
          </form>
          <ul className="list">
            {tasks.map(el => <li key={el.id} id={el.id} className={el.complete ? 'list__item done' : 'list__item'} onClickCapture={this.toggleComplete}> {el.text} <img className="img" src={trash} alt="deletebox" data-id={el.id} onClick={this.deleteLi}/></li>)}
          </ul>
          <button className="openModal" onClick={this.toggleModal}>Show Modal</button>
      </div>
    );
  }
}

export default App;