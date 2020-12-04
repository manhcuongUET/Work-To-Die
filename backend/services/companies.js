const CompanyRepo = require("../repositories/company")

module.exports.getAllCompanies = async ()=>{
   const allCompanies = await CompanyRepo.getAllCompanies() 
   console.log(allCompanies);
   return allCompanies
}
