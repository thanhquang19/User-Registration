import {React, useRef, useState} from 'react'

import { findAuthUser, updatePassword } from '../../utilsFunction';
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

  const handleChangePassword = async  (e) => {
    e.preventDefault();
    if(newPass.current.value !== confirmedPass.current.value 
        || newPass.current.value.length === 0 
        || confirmedPass.current.value.length === 0) {
          getConfirmMsg('the new passwords does not match')
        }
    else {
      // here is the GET method to check if the input current password matches the record
      const checkUsernameAndPasswordByFindUser = await findAuthUser(props.currentUser.authentication.username, oldPass.current.value)
      
      // the above return an empty object if the password doesn't match
      // if that's the case, return an errMsg
      if(!checkUsernameAndPasswordByFindUser) {
        getConfirmMsg('the current password is not correct')
      }
      else {
        // PUT method to update password
        const updateSuccessful = await updatePassword(props.currentUser._id, newPass.current.value)
        
        if(updateSuccessful) {
          getConfirmMsg('password updated')
        }
        else (
          getConfirmMsg('error occurs, try again')
        )
      }
      
    }

  }
  return (
    <form id='user-profile'>
      <h3>{props.currentUser.authentication.username}</h3>
      <h3>{props.currentUser.email}</h3>
      <button className='btn' id='signout-btn' onClick={handleSignOut}>sign out</button>
      <br/>
      <button className='btn' id='showChangePass-btn' onClick={showChangePass}>change password</button>
      <fieldset id='change-password-set' hidden={isChangePassShowed}>
        <label for='old-pass'>current password</label>
        <input type='password' ref={oldPass} id='old-password'></input>
        <label for='new-pass'>new password</label>
        <input type='password' ref={newPass} id='new-password'></input>
        <label for='confirmed-pass'>retype the new password</label>
        
        <input type='password' ref={confirmedPass} id='confirmed-password'></input>
        <br/>
        <button id='changePass=btn' onClick={handleChangePassword}>click to change</button>
        <p className='err'>{confirmMsg}</p>
      </fieldset>
    </form> 
     
  )
}


// step to update password
// step 1: 
// 	- check if new password and retype new password match
// 	- yes? >> step 2	
// 	- no? >> errMsg
// step 2:
// 	- check if the current password match the record (get method using current id)
// 	- yes? >> step 3
// 	- no? >> errMsg
// step 3:
// 	- update password (post method)
// 	- yes? >> confirm
// 	- no? errMsg
