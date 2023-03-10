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
        className='modal'
        id='confirmation-modal'
    >
        {/* the confirmation here depends on the validation
        if the email is already register, return an error instead */}
        <p>your account has been successfully created</p>
        <Link className='link-route' to='/'> <h3>return to log-in</h3></Link>
    </Modal>
  )
}
