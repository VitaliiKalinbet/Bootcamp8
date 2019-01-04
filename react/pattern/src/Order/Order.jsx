import React from 'react';
import Modal from '../Modal/Modal';

const Order = ({close, id}) => {
    return (
        <Modal close={close} id={id}>
            <h2>Order</h2>
            <form action="">
                <input type="text" placeholder="City"/>
                <input type="text" placeholder="Post"/>
                <input type="text" placeholder="Phone number"/>
            </form>
        </Modal>
    );
};

export default Order;