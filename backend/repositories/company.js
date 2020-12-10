const db = require("./index")

exports.getCompanies = async () =>{
    const companies= db.companies.find({}).toArray()
    return companies
}

exports.createCompany=() =>{}