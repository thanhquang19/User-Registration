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

    const authUser =  await userCollection.find(
        {
            authentication : {
                username: username,
                password: password
            }

        }
    ).project(
        
        {
            '_id': 1,
            'authentication.username': 1,
            'fullname': 1,
            'email' :1
        }
    ).toArray()

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
    }).toArray()

    return registerEmail;

}

const insertNewUser = async(
    fullname, 
    email,
    username,
    password,
    secureQuestion,
    secureAnswer
    
) => {
        connectToDatabase();
        const newUserCreated = await userCollection.insertOne( {
            fullname: fullname,
            email: email,
            authentication: {
                username: username,
                password: password
            },
            secureQuestion: {
                question: secureQuestion,
                answer: secureAnswer
            }
        }).then(result => result.insertedId)
        
        return newUserCreated;
    
}


const findUserByUsername = async (username) => {
    connectToDatabase();
    const user = userCollection.find(
        {'authentication.username': username}
    ).project( {
        'authentication.username': 1
    }).toArray()

    return user;
}

const updatePassword  = async (_id, newpassword) => {
    connectToDatabase();
    const confirmation = await userCollection.updateOne(
        {_id: _id},
        {$set: {
            'authentication.password': newpassword
        }}
    )
    if(confirmation.modifiedCount === 1) {
        return true
    }
    return false;
}
module.exports.findAuthUser = findAuthUser;
module.exports.findRegisterEmail = findRegisterEmail;
module.exports.disconnectToDatabase = disconnectToDatabase;
module.exports.insertNewUser = insertNewUser;
module.exports.findUserByUsername = findUserByUsername;
module.exports.updatePassword = updatePassword;
