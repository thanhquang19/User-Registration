import {React, useRef} from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Login.css';


export default function Login(props) {
  
  const username = useRef();
  const password = useRef();

  const handleSignin = (e) => {
    e.preventDefault();
    props.validateUser(username.current.value, password.current.value)
  }

  return (
    <form id='login-form'>
      <div>{props.errMsg}</div>
      <label for="username"> username</label>
      <input  ref={username} id='username' type="text"></input>
      <br/>
      <label for="password">password</label>
      <input  ref={password} id='password' type="password"></input>
      <br/>
      
      <p>forget username or password?</p>
      <br/>
      
      <button id='singin-btn' onClick={handleSignin}> sign in</button>
      <br/>
      <Link to='/registration'>new user? Register here</Link>
      <Outlet/>
       
    </form>

  )
}
