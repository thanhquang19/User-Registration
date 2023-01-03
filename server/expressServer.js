const express = require('express');
const cors = require('cors');
const {MongoClient} = require('mongodb')
const userRouter = require('./userRouter');
const emailRouter = require('./emailRouter')

const server = express();
const port = process.env.port || 3001;

const uri = `mongodb+srv://bobacorp:uhcl123456@cluster0.laoajmy.mongodb.net/?retryWrites=true&w=majority`

const mongoCluster = new MongoClient(uri);
const database = 'Snails'

const connectToDatabase = async () => {
    await mongoCluster.connect();
    console.log(`sucessfully connected to ${database}`)
  
}

server.use(cors());
server.use(express.json());

server.use((req, res, next) => {
    connectToDatabase();
    next();
})

// concenr: can userRouter access to the database 
// (here is the mongoCluser)
// which is defined in the server, not the router

server.use('/user', userRouter)

server.use(async (req, res, next) => {
    await mongoCluster.close();
    console.log('disconnect to ${database}')
})
 

server.listen(port, ()=> {
    console.log(`server is listening on port ${port}`)
})