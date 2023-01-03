import {React, useState} from 'react'
import Login from '../Pages/Log-in/Login'

import UserProfile from '../Pages/UserProfile/UserProfile'

export default function PrivateRoutes() {
    const [currentUser, getCurrentUser] = useState()
    // a bug here is that the currentUser is reset when page is refreshed
    // currentUser will be updated according to the response of the GET request

    const [errMsg, getErrMsg] = useState("sign in with username and password ")
    
    const registeredUser = {
        username: 'thanh',
        password: '12345'
    }
    const validateUser = (username, password) => {
        
        // the following will be replaced with a GET method request
        // the concern is how to hide the password while the GET request doesn't have a body

        if(
          username === registeredUser.username
          &&
          password === registeredUser.password
        ) {

          getCurrentUser({username: username, password: password})
    
        }
        else {
          getErrMsg('unmatch username or password')
        }
      }
 
    return (
        currentUser?
        <UserProfile/>
        :
        <Login validateUser={validateUser} errMsg={errMsg}/>
        
    )

}
