const applyRepo = require("../repositories/apply")

module.exports.updateApply = async (email , companyName , job) => {

    const apply = applyRepo.updateApply(email , companyName , job)
    return apply
}