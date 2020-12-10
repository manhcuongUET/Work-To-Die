const CompanyRepo = require("../repositories/company")
const _ = require("lodash")

module.exports.getCompanies = async (query)=>{
   if(_.isEmpty(query)){
      const companies = await CompanyRepo.getCompanies() 
      console.log(companies);
      return companies
    } 
    //else {
   //    //const companiesPage = await CompanyRepo.getCompaniesPage(query.limit)
   //    return query.limit
   // }
}
