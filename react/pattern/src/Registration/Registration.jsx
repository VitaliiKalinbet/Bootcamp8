import React from 'react';
import Modal from '../Modal/Modal';

const Registration = ({close, id}) => {
    return (
        <Modal close={close} id={id}>
            <h2>Registration</h2>
            <form action="">
                <input type="text" placeholder="Login"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Confirm password"/>
                <input type="email" placeholder="E-mail"/>
            </form>
        </Modal>
    );
};

export default Registration;