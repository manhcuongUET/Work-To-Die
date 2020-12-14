const getApplyRepo = require("../repositories/getApply")

module.exports.getApply = async (companyName) => {
    const get = getApplyRepo.getApply(companyName)
    return get
}