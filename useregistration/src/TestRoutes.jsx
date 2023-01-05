import {React, useState} from 'react'

export default function TestRoutes() {
    const [authUser, getAuthUSer] = useState();
    
    // to depreciate this function

    const findAuthUser = async (username='thanhquang', password='thanhquang12345') => {
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
            getAuthUSer(null)
        }
      
    }

    const handleClick = (e)=> {
        e.preventDefault();
        findAuthUser();
    }
    return (
        <div>
        TestRoutes
            <p>
                {JSON.stringify(authUser)}
            </p>
            <button
                onClick={handleClick}
                style={{border: 'black 2px solid'}}
            >click to test</button>
        </div>
    )
}
