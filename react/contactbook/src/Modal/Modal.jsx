import React from 'react';
import Button from '../Button/Button';
import PropTypes from "prop-types";
import './Modal.css';

const Modal = ({firstName, lastName, phoneNumber, emailAddress, dateOfBirth, handlerChange, toggleModal, createObj, editCard, isEdit, textSave}) => {
    return (
        <div className="owerlay" onDoubleClick={toggleModal}>
            <div className ="modal">
                <span className="close" onClick={toggleModal}>x</span>
                <form action="" className="form" onSubmit={isEdit ? editCard : createObj}>
                    <label>First Name: <input value={firstName} onChange={handlerChange} name="firstName" type="text" required/></label>
                    <label>Last Name: <input value={lastName} onChange={handlerChange} name="lastName" type="text" required/></label>
                    <label>Phone Name: <input value={phoneNumber} onChange={handlerChange} name="phoneNumber" type="tel" required/></label>
                    <label>Email Addres: <input value={emailAddress} onChange={handlerChange} name="emailAddress" type="email" required/></label>
                    <label>Date of birth: <input value={dateOfBirth} onChange={handlerChange} name="dateOfBirth" type="date" required/></label>
                    <Button clickFunc={null} text={textSave}/>
                </form>
            </div>
        </div>
    );
};

Modal.protoTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    emailAddress: PropTypes.string.isRequired,
    dateOfBirth: PropTypes.string.isRequired,
    handlerChange: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired,
    createObj: PropTypes.func.isRequired,
    editCard: PropTypes.func.isRequired,
    isEdit: PropTypes.bool.isRequired,
    textSave: PropTypes.string.isRequired,
};

export default Modal;