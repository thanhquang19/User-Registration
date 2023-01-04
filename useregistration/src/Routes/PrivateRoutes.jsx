import {React, useState} from 'react'
import Login from '../Pages/Log-in/Login'

import UserProfile from '../Pages/UserProfile/UserProfile'

export default function PrivateRoutes() {
    
    // a bug here is that the currentUser is reset when page is refreshed
    // currentUser will be updated according to the response of the GET request

    const [errMsg, getErrMsg] = useState("sign in with username and password ")
    
    const [authUser, getAuthUSer] = useState();
    

    const findAuthUser = async (username, password) => {
        const userSearchParam = new URLSearchParams();
        userSearchParam.append('username', username);
        userSearchParam.append('password', password)
        try {
            const user = await fetch(`http://localhost:3001/user?${userSearchParam.toString()}`, {
            method: 'GET',
            headers : {
                'Content-Type' :'application/json'
            }
        })
        .then (response => response.json())

        getAuthUSer(user);

        }
        catch(err) {
           
            getAuthUSer()
            getErrMsg('unmatched username or password')
        }
      
    }
 
    return (
        authUser?
        <UserProfile/>
        :
        <Login validateUser={findAuthUser} errMsg={errMsg}/>
        
    )

}
