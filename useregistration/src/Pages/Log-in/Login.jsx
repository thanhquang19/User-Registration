import React from 'react';
import './Login.css';


export default function Login() {
  return (
    <form id='login-form'>
      <div>err msg</div>
      <label for="username"> User Name</label>
      <input id='username' type="text"></input>
      <br/>
      <label for="password">Password</label>
      <input id='password' type="password"></input>
      <br/>

      <button> Sign-in</button>
      <div> nw user? Register here</div>
    </form>

  )
}
