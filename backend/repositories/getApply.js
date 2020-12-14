const db = require("./index")

exports.getApply =  async (companyName) => {
    const apply = await db.companies.findOne({name : companyName})
    return apply
}