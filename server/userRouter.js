const express = require('express');
const {findAuthUser} = require('./dtbFunction')

const userRouter = express.Router();


userRouter.get('/', async (req, res, next) => {
    //this route is used for authentication
    //the query string in req contains username and password
    const requestedUsername = req.query.username;
    const requestedPassword = req.query.password;
    
    console.log(requestedPassword, requestedUsername)
    
    const authUser = await findAuthUser(requestedUsername, requestedPassword)
    // as the findAuthUser returns an array
    // if the array is empty, return an err
    // if the array's length is 1, return array[0]
    console.log(authUser);
    if(authUser.length == 0) {
        res.status(404).send();
    }
    else {
        res.send(authUser[0])
    }
    
   

    next();
   
})

userRouter.post('/', (req, res, next)=> {
 
    next();
})






module.exports = userRouter;