const JobsRepo = require("../repositories/jobs")

// viết thuật toán cho dữ liệu 
module.exports.getJobs = async () => {
    const jobs = await JobsRepo.getJobs(); 
    console.log(jobs)
    return jobs
}