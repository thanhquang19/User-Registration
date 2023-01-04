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
    connectToDatabase();

    const authUser = userCollection.find(
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

module.exports.findAuthUser = findAuthUser;