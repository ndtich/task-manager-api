// CURD

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)


    // ------------- Create -------------

    // db.collection('users').insertOne({
    //     name: 'Tom',
    //     age: 10
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Learn Nodejs',
    //         completed: true
    //     }, {
    //         description: 'Learn Mongodb',
    //         completed: false
    //     }, {
    //         description: 'Learn Golang',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert collections')
    //     }
    //     console.log(result.ops)
    // })


    // ------------- Read -------------
    // db.collection('users').findOne({
    //     _id: new ObjectID('5e90fc99e29542183a6e09f8')
    // }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({ age: 24}).toArray((error, users) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(users)
    // })
    // db.collection('users').find({ age: 24}).count((error, count) => {
    //     if (error) {
    //         return console.log('Unable to count')
    //     }
    //     console.log(count)
    // })

    // db.collection('tasks').findOne({ _id: ObjectID("5e910b37260dc1188d881277")}, (error, task) => {
    //     if (error) {
    //         return console.log('Uable to fetch')
    //     }
    //     console.log(task)
    // })
    // db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
    //     if (error) {
    //         return console.log('Uable to count')
    //     }
    //     console.log(tasks)
    // })


    // ------------- Update -------------
    // db.collection('users').updateOne({
    //     _id: new ObjectID('5e90fc99e29542183a6e09f8')
    // }, {
    //     $set: {
    //         name: 'Mike'
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    
    // db.collection('users').updateOne({
    //     _id: new ObjectID('5e90fc99e29542183a6e09f8')
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({}, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })


    // ------------- Delete -------------
    // db.collection('users').deleteMany({
    //     age: 10
    // }).then(result => {
    //     console.log(result)
    // }).catch(error => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: 'Learn Nodejs'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
    
})