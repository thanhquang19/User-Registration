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


export const createNewUser = async (
    fullname, 
    email,
    secureQuestion,
    secureAnswer,
    username,
    password
    ) => {
    const newUserInfo = {
        
            fullname: fullname,
            email: email,
            username: username,
            password: password,
            question: secureQuestion,
            secureAnswer: secureAnswer
           
    }
    console.log(JSON.stringify(newUserInfo))
    try {
        const newUserCreated = await fetch (`http://localhost:3001/user`, {
            method: 'POST',
            headers: {
                'Content-Type' :'application/json'
            },
            body: JSON.stringify(newUserInfo)
        }).then(response => response.json())
        return newUserCreated;
    } catch(err) {
        return null;
    }
}

export const checkUserNameExisting = async (username) => {
 
    try {
        const isUsernameExisting = await fetch(`http://localhost:3001/user/${username}`, {
        method:'GET',
        headers: {
            'Content-Type' :'application/json'
        }
        }).then(response => response.json())

        console.log(isUsernameExisting);
        return isUsernameExisting;
    } catch (err) {
        return  false;
    }
}

export const checkEmptyInputs = (
    a, b, c, d, e, f  
) => {
    const inputArray = [a, b, c, d, e, f];
    for(let input of inputArray) {
        if(input.current.value.length === 0) {
            return true;
        }
    }
    return false;
}

export const updatePassword = async(_id, newPassword) => {
    const updateInfo = {
        _id: _id,
        password: newPassword
    }
    const updateConfirmation = await fetch(`http://localhost:3001/user/password`, {
        method: 'PUT',
        headers : {
            'Content-Type' :'application/json'
        },
        body: JSON.stringify(updateInfo)
    }).then(response => response.json())

    return updateConfirmation;

}
// export const checkPassword = async (_id, pwd) => {
//     const passwordSearchParam = new URLSearchParams();
//     passwordSearchParam.append('_id', _id);
//     passwordSearchParam.append('password', pwd)
//     try {
//         const passwordMatch = await fetch (`http://localhost:3001/user/password?${passwordSearchParam.toString()}`, {
//             method: 'GET',        
//         }).then(response => response.json);
//         console.log(passwordMatch);
//         return passwordMatch;
//     } catch(err) {
//         return false;
//     }
// } not needed, reuse the findAuthUser 