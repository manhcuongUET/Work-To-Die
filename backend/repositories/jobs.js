const db = require("./index")

// lấy dữ liệu từ database xuống còn database đc connect ở index.js rồi
exports.getJobs = async () => {
    const jobs = db.jobs.find({}).toArray()
    return jobs
}