const { ObjectID } = require('bson');
const express = require('express');
const {findAuthUser, insertNewUser, findUserByUsername, updatePassword} = require('./dtbFunction')

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
    // this route is to create a new user
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

userRouter.get('/:username', async (req, res, next) => {
    // this route is to check if a username is already existing
    console.log(req.params.username);
    const user = await findUserByUsername(req.params.username);
    if(user.length == 0) {
        res.status(404).send(false) //username is not existing
    }
    else {
        res.send(true) // username is already existing
    }
    next();
})

userRouter.get('/password', async (req, res, next) => {
    console.log(req.query)
})

userRouter.put('/password', async (req, res, next) => {
    
    const confirmation = await updatePassword(ObjectID(req.body._id), req.body.password);

    res.send(confirmation)
})

module.exports = userRouter;