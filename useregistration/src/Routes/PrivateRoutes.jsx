import {React, useState} from 'react'
import Login from '../Pages/Log-in/Login'
import UserProfile from '../Pages/UserProfile/UserProfile';
import UserRegistration from '../Pages/UserRegistration/UserRegistration'

export default function PrivateRoutes() {
    const[isValid, updateIsValid]= useState(false);
    const currentUser='';
  return (
    currentUser? //ternary condition, if true go to profile, if false go to login
    <UserProfile/>
    :
    <Login/>
    
  )
}
