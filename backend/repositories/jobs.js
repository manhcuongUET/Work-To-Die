const db = require("./index")

// lấy dữ liệu từ database xuống còn database đc connect ở index.js rồi
exports.getJobs = async (skip, PAGE_SIZE) => {


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

exports.getJobDetail = async (job, companyName) => {
    const jobs = await db.jobs.aggregate([
        {
            $match: { job: job, companyName: companyName }
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
            $match: { field: field }
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

exports.getJobsLocated = async (located, salary) => {
    if (located.localeCompare("vietnam") != 0 && parseInt(salary) === 0) {
       
        const jobs = await db.jobs.aggregate([
            {
                $lookup: {
                    from: "companies",
                    localField: "companyName",
                    foreignField: "name",
                    as: "company"
                }
            },
            {
                $match: {
                    company: { $elemMatch: { location: located } }
                }
            }
        ]).toArray()
        return jobs
    }

    if (located.localeCompare("vietnam") == 0 && salary > 0) {
        const jobs = await db.jobs.aggregate([
            {
                $lookup: {
                    from: "companies",
                    localField: "companyName",
                    foreignField: "name",
                    as: "company"
                }
            },
            {
                $match: {
                    salary : {$lt : parseInt(salary)}
                }
            }
        ]).toArray()
        return jobs
    }

    if (located.localeCompare("vietnam") != 0 && salary > 0) {
        const jobs = await db.jobs.aggregate([
            {
                $lookup: {
                    from: "companies",
                    localField: "companyName",
                    foreignField: "name",
                    as: "company"
                }
            },
            {
                $match: {
                    salary : {$lt : parseInt(salary)},
                    company: { $elemMatch: { location: located } }
                }
            }
        ]).toArray()
        return jobs
    }

    
}