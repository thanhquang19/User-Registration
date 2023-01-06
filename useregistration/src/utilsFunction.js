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

// the default values to be removed
export const createNewUser = async (
    fullname='thanh', 
    email='thanh@gmail.com',
    secureQuestion='abd?',
    secureAnswer='c',
    username='thanh',
    password='12345'
    ) => {
    try {
        const newUserCreated = await fetch (`http://localhost:3001/user`, {
            method: 'POST',
            headers: {
                'Content-Type' :'application/json'
            },
            body: {
                fullname: fullname,
                email: email,
                authentication: {
                    username: username,
                    password: password
                },
                securequestion: {
                    question: secureQuestion,
                    secureAnswer: secureAnswer
                }
            }
        })
        return newUserCreated;
    } catch(err) {
        return null;
    }
}