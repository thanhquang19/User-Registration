import {React, useState} from 'react'
import Modal from 'react-modal'
import './ForgotPassword.css'
 

Modal.setAppElement('#root');
export default function ForgotPassword(props) {

   const [confirmation, getConfirmation]  = useState('click to get a new password');

   const handleGetPwd = (e) => {
    e.preventDefault();
    getConfirmation('a new password has been sent to your email');
   }

    return (
        <Modal isOpen={props.isOpen} 
        shouldCloseOnEsc shouldCloseOnOverlayClick
        onRequestClose={()=> {
            getConfirmation('')
            props.isClose();
        }}
        className='modal'
        > 
                 <form id='forgotpwd-form'>
                    <p>enter your registered email</p>
                    <input type='email' ></input>
                    <br/>
                    <button id='getPwd-btn' onClick={handleGetPwd}>get new password</button>                
                    <div id='confirmation'>{confirmation}</div>
                 </form>
                 
        </Modal>
    )
}
