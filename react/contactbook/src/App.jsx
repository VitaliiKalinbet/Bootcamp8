import React, { Component } from 'react';
import Modal from './Modal/Modal';
import Card from './Card/Card';
import Button from './Button/Button';
import uuidv4 from 'uuid/v4';
import './App.css';

class App extends Component {

  state = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    dateOfBirth: '',
    showModal: false,
    contact: JSON.parse(localStorage.getItem("contact")) || [],
    id: '',
    isEdit: false,
    textAdd: 'Add contact',
    textSave: 'Save contact',
}

handlerChange = (evt) => {
  let value = evt.target.value;
  let name = evt.target.name;
  this.setState({
    [name]: value,
  })
}

toggleModal = (e) => {
  // if (e.target.className === "img2" || e.target.className === "add" || e.target.className === "form" || e.target.className === "btn-add" || e.target.className === "owerlay" || e.target.className === "close" || e.target.className === "openModal") {  
    this.setState( prev => ({
      showModal: !prev.showModal
    }))
  // } else {
  //   return
  // }
}

createObj = async (evt) => {
  evt.preventDefault();
  let item = {
    id: uuidv4(),
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    phoneNumber: this.state.phoneNumber,
    emailAddress: this.state.emailAddress,
    dateOfBirth: this.state.dateOfBirth,
  }
  await this.setState( prevState => ({
    contact: [item, ...prevState.contact],
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    dateOfBirth: '',
  }))
  localStorage.setItem("contact", JSON.stringify(this.state.contact));
  this.toggleModal(evt);
}

deleteCard = async (e) => {
  let id = e.target.dataset.id;
  await this.setState({
    contact: this.state.contact.filter(el => el.id !== id),
  })
  localStorage.setItem("contact", JSON.stringify(this.state.contact));
}

showCardWithInfo = (evt) => {
  let id = evt.target.dataset.id;
  let objFromContact = this.state.contact.find(el => el.id === id);
  this.setState({
    firstName: objFromContact.firstName,
    lastName: objFromContact.lastName,
    phoneNumber: objFromContact.phoneNumber,
    emailAddress: objFromContact.emailAddress,
    dateOfBirth: objFromContact.dateOfBirth,
    id: id,
    isEdit: true,
  })
  this.toggleModal(evt);
}

editCard  = (evt) => {
  evt.preventDefault();
  this.setState({
    contact: this.state.contact.map(el => el.id === this.state.id ? {...el, 
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      emailAddress: this.state.emailAddress,
      dateOfBirth: this.state.dateOfBirth,
    } : el),
    isEdit: false,
  });
  this.toggleModal(evt);
}

  render() {
    const { showModal } = this.state;
    return (
      <div className="contact-books">
        {showModal && <Modal textSave={this.state.textSave} isEdit={this.state.isEdit} editCard={this.editCard} createObj={this.createObj} firstName={this.state.firstName} lastName={this.state.lastName} phoneNumber={this.state.phoneNumber} emailAddress={this.state.emailAddress} dateOfBirth={this.state.dateOfBirth} handlerChange={this.handlerChange} toggleModal={this.toggleModal}/>}
        <div className="info">
          {this.state.contact.map(el => <Card showCardWithInfo={this.showCardWithInfo} key={el.id} firstName={el.firstName} lastName={el.lastName} phoneNumber={el.phoneNumber} emailAddress={el.emailAddress} id={el.id} deleteCard={this.deleteCard}/>)}
        </div>
        <div className="divbtnAdd">
          <Button clickFunc={this.toggleModal} text={this.state.textAdd}/>
        </div>
      </div>
    );
  }
}

export default App;