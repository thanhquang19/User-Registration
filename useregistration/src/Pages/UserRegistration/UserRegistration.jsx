
import {React, useState} from 'react'
import Confirmation from './Confirmation'
import './UserRegistration.css'


export default function UserRegistration() {

  // to consider write the below codes (to closeModal) into a separate file
  const [isModalOpen, getIsModalOpen] = useState();


  const openModal = (e) => {
  
    getIsModalOpen(true);

  }

  const closeModal = (e) => {
    getIsModalOpen(false);
  }
  
  const handleSignup = (e) => {
    e.preventDefault();
     /* the onClick Event for button will be re-written 
    so that it will send data to the server */

    openModal();
  }
  return (
    <div>
      <form id='regist-form'>
        <label for='fullname'>fullname</label>
        <input type='text' id='fullname'></input>

        <label for='email'>email</label>
        <input type='email' id='email'></input>
        {/* here at the email field, create a function to check if the email is associated with an already existing account
        promt the confirmation with an err*/}

        <label for='secure-question'>secure question</label>
        <input type='text' id='secure-question' list='question-list' placeholder='select a question or create your own'></input>
        <input type='text' id='secure-answer' placeholder='your response'></input>
        
        <datalist id='question-list'>
          <option>In what city were you born?</option>
          <option>What is the name of your favorite pet?</option>
          <option>What high school did you attend?</option>
          <option>What was the name of your elementary school?</option>
          <option>What was the make of your first car?</option>
        </datalist>
        
        <label for='username'>username</label>
        <input type='text' id='username'></input>
        {/* here at username field, create a function to check if username is already exist */}
        
        <label for='password'>password</label>
        <input type='text' id='password'></input>
        

        <br/>
        <button id='signup-btn' onClick={handleSignup}>sign up</button>
      </form>
      <Confirmation isOpen = {isModalOpen} isClose={closeModal}/>
    </div>

  )
}
