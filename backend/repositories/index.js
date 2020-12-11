const mongodb = require('mongodb');

const db ={}

const client = new mongodb.MongoClient("mongodb+srv://admin:admin123@cluster0.zjc74.mongodb.net/test");
client.connect().then((connectedClient) => {
    console.log("mongodb connected");
    const database = connectedClient.db("work_to_die")
    db.companies = database.collection("companies")
    db.jobs = database.collection("jobs")
    db.profiles = database.collection("profile")
})

module.exports = db