import {React, useState} from 'react'
import Modal from 'react-modal'
 

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
        onRequestClose={props.isClose}> 
                 <form id='forgotpwd-form'>
                    <h4>enter your registered email</h4>
                    <input type='email' ></input>
                    <br/>
                    <button id='getPwd-btn' onClick={handleGetPwd}>get new password</button>
                    <div>{confirmation}</div>
                    
                 </form>
        </Modal>
    )
}
