import { useState } from 'react';
import {React, useRef }from 'react';
import './Login.css';


export default function Login() {

 

  const username=useRef();
  const password=useRef();

  const RegisterUser={
    username:"hoang",
    password:"12345"
  }

  const handlesignIn=(e)=>{
    e.preventDefault();
    if(
      username.current.value===RegisterUser.username
      &&
      password.current.value===RegisterUser.password 

    )
    {
      updateIsValid(true);
    }

    

  }

  
  return (
    <form id='login-form'>
      <div>err msg</div>
      <label for="username"> User Name</label>
      <input ref={username} id='username' type="text"></input>
      <br/>
      <label for="password">Password</label>
      <input ref={password} id='password' type="password"></input>
      <br/>

      <button onClick={handlesignIn}> Sign-in</button>
      <div> nw user? Register here</div>
    </form>

  )
}
