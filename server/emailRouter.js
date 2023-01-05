const express = require('express');
const { findRegisterEmail}  = require('./dtbFunction')
const emailRouter = express.Router();

emailRouter.get('/:email', async (req, res, next) => {
    console.log(req.params.email)
    const email = await findRegisterEmail(req.params.email)
    // as the findRegisterEmail return an arr
    // if the array is empty, send an err
    // else, send the array[0]
    console.log(email);
    if (email.length == 0) {
        res.status(404).send();
    }
    else {
        res.send(email[0]);
    }
        
    
}) 





module.exports = emailRouter;