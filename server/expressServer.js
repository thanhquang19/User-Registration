const express = require('express');
const cors = require('cors');
const {MongoClient} = require('mongodb')
const userRouter = require('./userRouter');
const emailRouter = require('./emailRouter')

const server = express();
const port = process.env.port || 3001;



server.use(cors());
server.use(express.json());


server.use('/user', userRouter)

server.use('/email', emailRouter)


server.listen(port, ()=> {
    console.log(`server is listening on port ${port}`)
})