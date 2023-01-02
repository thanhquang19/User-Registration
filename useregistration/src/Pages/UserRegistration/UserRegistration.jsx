import React from 'react'

export default function UserRegistration() {
  return (
    <div>
      <form id='regist-form'>
        <label for='fullname'>fullname</label>
        <input type='text' id='fullname'></input>
        <br/>
        <label for='email'>email</label>
        <input type='text' id='email'></input>
        <br/>
        <label for='secure-question'>secure question</label>
        <input type='text' id='secure-question' list='question-list'></input>
        <input type='text' id='secure-answer'></input>
        <datalist id='question-list'>
          <option>In what city were you born?</option>
          <option>What is the name of your favorite pet?</option>
          <option>What high school did you attend?</option>
          <option>What was the name of your elementary school?</option>
          <option>What was the make of your first car?</option>
        </datalist>
        <label for='username'>username</label>
        <input type='text' id='username'></input>
        <label for='password'>password</label>
        <input type='text' id='password'></input>
        <button id='signup-btn'>sign up</button>
      </form>
    </div>
  )
}
