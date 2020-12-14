const db = require("./index")


exports.uploadNewJob = async (data) => {
    const newJob = await db.jobs.insertOne(data)
    return newJob
}