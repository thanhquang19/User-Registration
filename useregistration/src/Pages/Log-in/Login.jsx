import {React, useRef, useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import './Login.css';


export default function Login(props) {
  
  const username = useRef();
  const password = useRef();

  const handleSignin = (e) => {
    e.preventDefault();
    props.validateUser(username.current.value, password.current.value)
  }

  const [isModalOpen, getIsModalOpen] = useState();


  const openModal = (e) => {
  
    getIsModalOpen(true);

  }

  const closeModal = (e) => {
    getIsModalOpen(false);
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
      
      <div onClick={() => openModal()} style={{cursor: 'pointer'}}>forget username or password?</div>
      <ForgotPassword isOpen={isModalOpen} isClose={closeModal}/>
      <br/>
      
      <button id='singin-btn' onClick={handleSignin}> sign in</button>
      <br/>
      <Link to='/registration'>new user? Register here</Link>
      <Outlet/>
       
    </form>

  )
}
