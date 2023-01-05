import {React, useState} from 'react'
import Login from '../Pages/Log-in/Login'

import UserProfile from '../Pages/UserProfile/UserProfile'
import { findAuthUser } from '../utilsFunction'

export default function PrivateRoutes() {
    
    // a bug here is that the currentUser is reset when page is refreshed
    // currentUser will be updated according to the response of the GET request

    const [errMsg, getErrMsg] = useState("sign in with username and password ")
    
    const [authUser, getAuthUSer] = useState();
    
    const findAndAssignAuthUser = async (username, password) => {
        const user = await findAuthUser(username, password);
        console.log(user);
        if(user != null) {
            getAuthUSer(user);
        }
        else {
            getErrMsg('unmatched username or password')
            getAuthUSer()
        }

    }
    
      
    
 
    return (
        authUser?
        <UserProfile/>
        :
        <Login validateUser={findAndAssignAuthUser} errMsg={errMsg}/>
        
    )

}
