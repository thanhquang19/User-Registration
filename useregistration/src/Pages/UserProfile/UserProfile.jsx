import {React, useRef, useState} from 'react'
import './UserProfile.css'

export default function UserProfile(props) {
  const oldPass = useRef();
  const newPass = useRef();
  const confirmedPass = useRef();
  const [isChangePassShowed, getIsChangePassShowed] = useState(true);
  const [confirmMsg, getConfirmMsg] = useState();

  const handleSignOut = (e) => {
    e.preventDefault();
    props.signOut();
  }

  const showChangePass = (e) => {
    e.preventDefault();
    getIsChangePassShowed(!isChangePassShowed);
  }
  return (
    <form id='user-profile'>
      <h3>{props.currentUser.authentication.username}</h3>
      <h3>{props.currentUser.email}</h3>
      <button className='btn' id='signout-btn' onClick={handleSignOut}>sign out</button>
      <br/>
      <button className='btn' id='changePass-btn' onClick={showChangePass}>change password</button>
      <fieldset id='change-password-set' hidden={isChangePassShowed}>
        <label for='old-pass'>current password</label>
        <input ref={oldPass} id='old-password'></input>
        <label for='new-pass'>new password</label>
        <input ref={newPass} id='new-password'></input>
        <label for='confirmed-pass'>retype the new password</label>
        <input ref={confirmedPass} id='confirmed-password'></input>
        <button>click to change</button>
      </fieldset>
    </form> 
    // at least add sign-out button to this page
  )
}
