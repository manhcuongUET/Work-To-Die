const mongodb = require('mongodb');

const db ={}

const client = new mongodb.MongoClient("mongodb+srv://admin:admin123@cluster0.zjc74.mongodb.net/test");
client.connect().then((connectedClient) => {
    console.log("mongodb connected");
    const database = connectedClient.db("work_to_die")
    db.companies = database.collection("companies")
    const database1 = connectedClient.db("test")
    db.jobs = database1.collection("Info")
    db.profiles = database1.collection("profile")
})

module.exports = db