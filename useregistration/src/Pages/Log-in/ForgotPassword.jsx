import {React, useState} from 'react'
import Modal from 'react-modal'
 

Modal.setAppElement('#root');
export default function ForgotPassword(props) {

   

    return (
        <Modal isOpen={props.isOpen} 
        shouldCloseOnEsc shouldCloseOnOverlayClick
        onRequestClose={props.isClose}> 
                 <form id='forgotpwd-form'>
                    <h4>enter your registered email</h4>
                    <input type='email' ></input>
                    <br/>
                    <button id='getPwd-btn'>get new password</button>
                    <div>confirmation</div>
                    
                 </form>
        </Modal>
    )
}
