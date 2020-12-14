const EmployersRepo = require("../repositories/employers")

module.exports.uploadNewJob = async (data) => {
    const newJob = await EmployersRepo.uploadNewJob(data)
    return newJob
}