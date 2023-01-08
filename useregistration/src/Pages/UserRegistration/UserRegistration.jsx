
import {React, useRef, useState} from 'react'
import Confirmation from './Confirmation'
import  { createNewUser, checkUserNameExisting, findRegisterEmail, checkEmptyInputs} from '../../utilsFunction'
import './UserRegistration.css'


export default function UserRegistration() {
  // states
  const [emailAvailable, getEmailAvailable] = useState('email');
  const [usernameAvailable, getUsernameAvailable] = useState('username');
  const [errMsg, getErrMsg] = useState(`complete the form`);
  // when there is an err in the form, the sign-up button is disabled
  // what event to trigger check form err
   
  // ref
  const fullname = useRef();
  const email = useRef();
  const secureQuestion = useRef();
  const secureAnswer = useRef();
  const username = useRef();
  const password = useRef();

  // the below is for form control to make sure no input field is empty


  // Confirmation Modal Control
  // to consider write the below codes (to closeModal) into a separate file
  const [isModalOpen, getIsModalOpen] = useState();


  const openModal = (e) => {
      getIsModalOpen(true);
  }

  const closeModal = (e) => {
     getIsModalOpen(false);
  }

  const usernameAvailableCheck = async () => {
      if(username.current.value.length > 0) 
      //only excecute code when the username field is not empty
      {
        const isUsernameExisting = await checkUserNameExisting(username.current.value)
        // if a username is already existing, it's not available
        if(isUsernameExisting) {
          console.log(isUsernameExisting)
          getUsernameAvailable('username has been taken');
                   
        }
        else {
          getUsernameAvailable('username');
          
        }
      }
  } 
  
  const emailAvailableCheck = async () => {
    if(email.current.value.length > 0) {
      const registerEmail = await findRegisterEmail(email.current.value);
      // the findRegisterEmail return a string rather than a boolean
      if(registerEmail) {
        // the email is already existing
        console.log(registerEmail)
        getEmailAvailable(`this email has been registered under another account`)
        
      }
      else {
        getEmailAvailable('email')
      }
    }
  }

  const handleSignup = async (e) => {
    e.preventDefault();
     /* the onClick Event for button will be re-written 
    so that it will send data to the server */
    // also the below is called only when there is no err on form

    const isAnyInputEmpty = checkEmptyInputs(
      fullname, email, secureQuestion, secureAnswer, username, password
    )
    if(isAnyInputEmpty || emailAvailable !== 'email' || usernameAvailable !== 'username') {
      getErrMsg(`error found`)
    }
    else {
      getErrMsg('complete the form')
      const newUser = await createNewUser(
        fullname.current.value,
        email.current.value,
        secureQuestion.current.value,
        secureAnswer.current.value,
        username.current.value,
        password.current.value    
        
      );
      
      console.log(newUser)
  
      openModal();
    }
    
  }
  return (
    <div>
      <form id='regist-form'>
        <h3>{errMsg}</h3>
        <label for='fullname'>full name</label>
        <input type='text' id='fullname' ref={fullname}></input>

        <label for='email'> {<span className='err'>{emailAvailable}</span>} </label> 
        <input type='email' id='email' ref={email} onBlur={emailAvailableCheck}></input> 
        {/* here at the email field, create a function to check if the email is associated with an already existing account
        promt the confirmation with an err*/}

        <label for='secure-question'>secure question</label>
        <input ref={secureQuestion} type='text' id='secure-question' list='question-list' placeholder='select a question or create your own'></input>
        <input ref={secureAnswer} type='text' id='secure-answer' placeholder='your response'></input>
        
        <datalist id='question-list'>
          <option>In what city were you born?</option>
          <option>What is the name of your favorite pet?</option>
          <option>What high school did you attend?</option>
          <option>What was the name of your elementary school?</option>
          <option>What was the make of your first car?</option>
        </datalist>
        
        <label for='username'></label> <span className='err'>{usernameAvailable}</span>
        <input ref={username} type='text' id='username' onBlur={usernameAvailableCheck}></input>
        {/* here at username field, create a function to check if username is already exist */}
        
        <label for='password'>password</label>
        <input ref={password} type='password' id='password'></input>
        

        <br/>
        <button id='signup-btn' onClick={handleSignup}>sign up</button>
      </form>
      <Confirmation isOpen = {isModalOpen} isClose={closeModal}/>
    </div>

  )
}
