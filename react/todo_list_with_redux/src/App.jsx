import React, { Component } from 'react';
import { connect } from 'react-redux'; //мы подключили
// import { handlerChange } from './redux/actions/showModalAction';
import { handlerChange, clearInput } from './redux/actions/textAction';
import { createObj, toggleComplete, deleteLi} from './redux/actions/tasksAction';
import { showCompleteTasks, showNotCompleteTasks, clearPaint } from './redux/actions/paintAction';
import Modal from './Modal/Modal';
import './App.css';
import trash from './trash.png';

class App extends Component {
  state = {
      // text: '',
      // tasks: [],
      showModal: false,
  }

  // handlerChange = (evt) => {
  //   let value = evt.target.value;
  //   this.setState({
  //     text: value,
  //   }) 
  // }

  // createObj = (evt) => {
  //   evt.preventDefault();
  //   let item = {
  //     id: uuidv4(),
  //     text: this.state.text,
  //     complete: false,
  //   }
  //   this.setState( prevState => ({
  //     tasks: [item, ...prevState.tasks],
  //     text: '',
  //   }))
  // }

  // toggleComplete = (e) => {
  //   let id = e.target.id;
  //   this.setState({
  //     tasks: this.state.tasks.map(el => el.id === id ? {...el, complete: !el.complete}: el)
  //   })
  // }

  // deleteLi = (e) => {
  //   let id = e.target.dataset.id;
  //   this.setState({
  //     tasks: this.state.tasks.filter(el => el.id !== id),
  //   })
  // }

  toggleModal = (e) => {
    if (e.target.className === "owerlay" || e.target.className === "close" || e.target.className === "openModal") {  
      this.setState( prev => ({
        showModal: !prev.showModal
      }))
    } else {
      return
    }
  }

  formSubmit = (evt) => {
    evt.preventDefault();
    this.props.createObj(this.props.text);
    this.props.clearInput();
  }

  filterTasksOnComplete = () => {
    this.props.showCompleteTasks(this.props.tasks);
  }

  filterTasksOnNotComplete = () => {
    this.props.showNotCompleteTasks(this.props.tasks);
  }

  render() {
    const { showModal } = this.state;
    return (
      <div className="App">
      {/* {showModal ? <Modal/> : null} - вариант добавления модальки */}
      {showModal && <Modal toggleModal={this.toggleModal} />}
          <form className="form" onSubmit={this.formSubmit}>
            <input type="text" className="text" value={this.props.text} onChange={this.props.handlerChange} name='text' placeholder="Name"/>
            <input type="submit" value="Add" className="add"/>
          </form>
          <ul className="list">
            {this.props.paint.length > 0 ? this.props.paint.map(el => <li key={el.id} id={el.id} className={el.complete ? 'list__item done' : 'list__item'} onClickCapture={this.props.toggleComplete}> {el.text} <img className="img" src={trash} alt="deletebox" data-id={el.id} onClick={this.props.deleteLi}/></li> )
            : 
            this.props.tasks.map(el => <li key={el.id} id={el.id} className={el.complete ? 'list__item done' : 'list__item'} onClickCapture={this.props.toggleComplete}> {el.text} <img className="img" src={trash} alt="deletebox" data-id={el.id} onClick={this.props.deleteLi}/></li>
            )}
          </ul>
          <button className="openModal" onClick={this.toggleModal}>Show Modal</button>
          <div className="three-btn">
            <button className="add all" onClick={this.props.clearPaint}>All tasks</button>
            <button className="add complete" onClick={this.filterTasksOnComplete}>Complete tasks</button>
            <button className="add not-complete" onClick={this.filterTasksOnNotComplete}>Not complete tasks</button>
          </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
      text: state.text,
      tasks: state.tasks,
      // showModal: state.showModal,
      paint: state.paint,
  }
}

function mapDispatchToProps (dispatch) {
  return {
      clearInput: function () {
      dispatch(clearInput());
      },
      handlerChange: function (evt) {
        dispatch(handlerChange(evt));
      },
      createObj: function (text) { 
        dispatch(createObj(text));
      },
      deleteLi: function (evt) {
        dispatch(deleteLi(evt));
      },
      toggleComplete: function (evt) {
        dispatch(toggleComplete(evt));
      },
      showCompleteTasks: function (tasks) {
        dispatch(showCompleteTasks(tasks));
      },
      showNotCompleteTasks: function (tasks) {
        dispatch(showNotCompleteTasks(tasks));
      },
      clearPaint: function () {
        dispatch(clearPaint());
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);