import {React, useState} from 'react'
import Modal from 'react-modal'
import './ForgotPassword.css'
 

Modal.setAppElement('#root');
export default function ForgotPassword(props) {

   const [confirmation, getConfirmation]  = useState();

   const handleGetPwd = (e) => {
    e.preventDefault();
    getConfirmation('a new password has been sent to your registered email')
   }

    return (
        <Modal isOpen={props.isOpen} 
        shouldCloseOnEsc shouldCloseOnOverlayClick
        onRequestClose={props.isClose}
        className='modal'
        > 
                 <form id='forgotpwd-form'>
                    <p>enter your registered email</p>
                    <input type='email' ></input>
                    <br/>
                    <button id='getPwd-btn' onClick={handleGetPwd}>get new password</button>                
                 </form>
                 <div id='confirmation'>{confirmation}</div>
        </Modal>
    )
}
