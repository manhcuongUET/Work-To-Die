const db = require("./index")

exports.getAllCompanies = async () =>{
    const allCompanies= db.companies.find({}).toArray()
    return allCompanies
}

exports.createCompany=() =>{}