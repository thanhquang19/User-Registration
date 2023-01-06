const express = require('express');
const {findAuthUser, insertNewUser} = require('./dtbFunction')

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
    
  
   
})

userRouter.post('/', async (req, res, next) => {
    console.log(`post request`)
    console.log(req.body);
    try {
        const insertedID = await insertNewUser(
            req.body.fullname,
            req.body.email,
            req.body.username,
            req.body.password,
            req.body.question,
            req.body.secureAnswer
    
        )
        console.log(insertedID)
        res.send(insertedID);
    } catch(err) {
        console.log('404');
        res.status(404).send()
    }

   
})






module.exports = userRouter;