import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    users: [],
    findUsers: [],
    inputWithUsername: '',
    inputUsername: '',
    inputPassword: '',
    answerServer: '',
    idForDelete: '',
    answerDelete: '',
    idForUpdate: '',
    answerUpdate: '',
    usernameForUpdate: '',
    passwordForUpdate: '',
  }

  handlerChangeInput = (e) => {
    let name = e.target.name;
    let inputValue = e.target.value;
    this.setState({
      [name]: inputValue,
    })
  }

  getAxiosAllUsers () {
    axios.get('http://localhost:3002/users/')
      .then(res => {
        this.setState({
          users: [...res.data],
        })
      })
      .catch(err => console.log(err))
  }

  findUsersForUsername = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3002/user_username/${this.state.inputWithUsername}`)
      .then(res => {
        this.setState({
          findUsers: [...res.data],
        })
      })
      .catch(err => console.log(err))
  }

  postUser = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3002/user/', {
      username: this.state.inputUsername,
      password: this.state.inputPassword,
    })
    .then(res => {
       this.setState({
        answerServer: res.data,
      }, this.getAxiosAllUsers())
    })
    .catch(err => console.log(err))
  }

  deleteUser = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:3002/users_id/${this.state.idForDelete}`)
    .then(res => {
      this.setState(prev =>({
        answerDelete: res.data,
        users: prev.users.filter(el => el._id !== this.state.idForDelete),
        idForDelete: '',
      }))
    })
    .catch(err => console.log(err));
  }

  updateUser = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3002/users_put/${this.state.idForUpdate}`, {
      username: this.state.usernameForUpdate,
      password: this.state.passwordForUpdate,
    })
    .then(res => {
      this.setState({
        answerUpdate: res.data,
        idForUpdate: '',
      }, this.getAxiosAllUsers())
    })
    .catch(err => { console.log(err) })
  }

  componentDidMount () {
    this.getAxiosAllUsers();
  }

  render() {

    const { users, findUsers, answerServer, idForDelete, answerDelete, answerUpdate, idForUpdate, usernameForUpdate, passwordForUpdate } = this.state;

    return (
      <div className="App">
        <h2>Список пользователей</h2>
        <ul>
          {users.map(el => <li key={el._id}> {el.username} </li>)}
        </ul>

        <h2>Поиск по имени пользователя</h2>
        <form>
          <input name="inputWithUsername" placeholder="Enter username for search" value={this.state.inputWithUsername} onChange={this.handlerChangeInput} type="text"/>
          <input onClick={this.findUsersForUsername} type="submit"/>
          {findUsers.map(el => <li key={el._id}> {el.username} </li>)}
        </form>

        <h2>Запись пользователя в базу данных</h2>
        <form>
          {answerServer && <p>{answerServer}</p>}
          <input name="inputUsername" placeholder="Enter username" value={this.state.inputUsername} onChange={this.handlerChangeInput} type="text"/>
          <input name="inputPassword" placeholder="Enter password" value={this.state.inputPassword} onChange={this.handlerChangeInput} type="text"/>
          <input onClick={this.postUser} type="submit"/>
        </form>

        <h2>Удалить пользователя из БД по id</h2>
        <form>
          {answerDelete && <p>{answerDelete}</p>}
          <input name="idForDelete" placeholder="Enter user id" value={idForDelete} onChange={this.handlerChangeInput} type="text"/>
          <input onClick={this.deleteUser} type="submit"/>
        </form>

        <h2>Редактировать пользователя по id</h2>
        <form>
          {answerUpdate && <p>{answerUpdate}</p>}
          <input name="idForUpdate" placeholder="Enter user id for search" value={idForUpdate} onChange={this.handlerChangeInput} type="text"/>
          <input name="usernameForUpdate" placeholder="Enter username for update" value={usernameForUpdate} onChange={this.handlerChangeInput} type="text"/>
          <input name="passwordForUpdate" placeholder="Enter password for update" value={passwordForUpdate} onChange={this.handlerChangeInput} type="text"/>
          <input onClick={this.updateUser} type="submit"/>
        </form>
      </div>
    );
  }
}

export default App;