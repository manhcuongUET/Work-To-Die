const db = require("./index")

// lấy dữ liệu từ database xuống còn database đc connect ở index.js rồi
exports.getJobs = async (skip, PAGE_SIZE) => {

    console.log(1)
    // const jobs = await db.jobs.find({})
    // .skip(skip)
    // .limit(PAGE_SIZE)
    // .toArray()


    const jobs = await db.jobs.aggregate([
        {
            $lookup: {
                from: "companies",
                localField: "companyName",
                foreignField: "name",
                as: "company"
            }
        }
    ]).skip(skip).limit(PAGE_SIZE).toArray()

    console.log(jobs)
    return jobs
}

exports.getAllJobs = async () => {
    const jobs = await db.jobs.find({}).toArray()
    return jobs
}

exports.getSelectedJobs = async (label) => {
    const jobs = await db.jobs.aggregate([
        {
            $match: { job: label }
        },
        {
            $lookup: {
                from: "companies",
                localField: "companyName",
                foreignField: "name",
                as: "company"
            }
        }
    ]).toArray()
    return jobs
} 

exports.getJobDetail = async (job , companyName) => {
    const jobs = await db.jobs.aggregate([
        {
            $match: { job: job , companyName : companyName }
        },
        {
            $lookup: {
                from: "companies",
                localField: "companyName",
                foreignField: "name",
                as: "company"
            }
        }
    ]).toArray()
    return jobs
}

exports.getJobsWithField = async (field) => {

    const jobs = await db.jobs.aggregate([
        {
            $match: { field : field }
        },
        {
            $lookup: {
                from: "companies",
                localField: "companyName",
                foreignField: "name",
                as: "company"
            }
        }
    ]).toArray()
    
    return jobs
}