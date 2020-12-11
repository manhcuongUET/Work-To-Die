const JobsRepo = require("../repositories/jobs")

// viết thuật toán cho dữ liệu 
module.exports.getJobs = async (query) => {

    const PAGE_SIZE = parseInt(query.limit);
    const page = parseInt(query.page)
    const skip = (page - 1) * PAGE_SIZE
    const onePage = await JobsRepo.getJobs(skip, PAGE_SIZE);
    return onePage
}

module.exports.getAllJobs = async () => {
    const allJobs = await JobsRepo.getAllJobs()

    return allJobs
}

module.exports.getSelectedJobs = async (label) => {
    const selectedJobs = await JobsRepo.getSelectedJobs(label)
    return selectedJobs
}

module.exports.getDetailJobs = async (job, companyName) => {

    const getJobDetail = await JobsRepo.getJobDetail(job, companyName)
    return getJobDetail
}

module.exports.getFieldJobs = async (field) => {
    const getJobs = await JobsRepo.getJobsWithField(field)
    return getJobs
}