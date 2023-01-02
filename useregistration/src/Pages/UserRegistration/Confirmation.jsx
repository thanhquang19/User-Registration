import React from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom';

Modal.setAppElement('#root');


export default function Confirmation(props) {

  return (
    <Modal 
        isOpen={props.isOpen}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
        onRequestClose={props.isClose}
    >
        <p>your account has been successfully created</p>
        <Link to='/'> <h3>return to log-in</h3></Link>
    </Modal>
  )
}
