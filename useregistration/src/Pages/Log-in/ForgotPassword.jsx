import {React, useRef, useState} from 'react'
import Modal from 'react-modal'
import './ForgotPassword.css'
import  {findRegisterEmail} from '../../utilsFunction';
 

Modal.setAppElement('#root');
export default function ForgotPassword(props) {

    const [confirmation, getConfirmation]  = useState('click to get a new password');
// the confirmation returns
// 'click to get a new pwd' as default
// a sent confirmation as the handleGetPwd function
// an err where the email is not registered
    const email = useRef();
    const handleGetPwd = async (e) => {
        e.preventDefault();
        
        if(await findRegisterEmail(email.current.value)) {
            getConfirmation('a new password has been sent to your email');
        }
        else {
            getConfirmation('the above email has not been registered');
        }

        
    }

    return (
        <Modal isOpen={props.isOpen} 
        shouldCloseOnEsc shouldCloseOnOverlayClick
        onRequestClose={()=> {
            getConfirmation('click to get a new password')
            props.isClose();
        }}
        className='modal'
        > 
                 <form id='forgotpwd-form'>
                    <p>enter your registered email</p>
                    <input type='email' ref={email} required></input>
                    <br/>
                    <button id='getPwd-btn' onClick={handleGetPwd}>get new password</button>                
                    <div id='confirmation'>{confirmation}</div>
                 </form>
                 
        </Modal>
    )
}
