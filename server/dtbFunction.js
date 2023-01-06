const {MongoClient} = require('mongodb')

const uri = `mongodb+srv://bobacorp:uhcl123456@cluster0.laoajmy.mongodb.net/?retryWrites=true&w=majority`

const mongoCluster = new MongoClient(uri);

const database = 'Snails';
const userCollection = mongoCluster.db(database).collection('User');

const connectToDatabase = async () => {
    await mongoCluster.connect();
    console.log(`sucessfully connected to ${database}`)
  
}

const disconnectToDatabase = async () => {
    await mongoCluster.close();
    console.log(`disconnect to ${database}`)
}


const findAuthUser = async (username, password) => {

    await connectToDatabase();

    const authUser =  await userCollection.find(
        {
            authentication : {
                username: username,
                password: password
            }

        }
    ).project(
        
        {
            '_id': 0,
            'authentication.username': 1,
            'fullname': 1,
            'email' :1
        }
    ).toArray();

    // still cannot close connection to the database
    //disconnectToDatabase();

    return authUser;

}


const findRegisterEmail = async (email) => {
    connectToDatabase();
    const registerEmail = userCollection.find(
        {email: email}
    ).project( {
        email: 1
    }).toArray();

    return registerEmail;

}
module.exports.findAuthUser = findAuthUser;
module.exports.findRegisterEmail = findRegisterEmail;
module.exports.disconnectToDatabase = disconnectToDatabase;