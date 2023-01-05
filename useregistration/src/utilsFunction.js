export const findAuthUser = async (username, password) => {
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

        return user;

    }
    catch(err) {
        console.log(JSON.stringify(err));
    }
}

export const findRegisterEmail = async (email) => {
    try {
        const registerEmail = await fetch (`http://localhost:3001/email/${email}`, {
            method: 'GET',
            headers: {
                'Content-Type' :'application/json'
            }
        }).then(response => response.json())
        .then(data => data.email)
        
        return registerEmail; 

    }
    catch(err) {
        return null;
    }

}