const CompanyRepo = require("../repositories/company");
const _ = require("lodash");

module.exports.getCompanies = async (query) => {
  if (_.isEmpty(query)) {
    //get all
    const companies = await CompanyRepo.getCompanies();
    // console.log(companies);
    return companies;
  } else if (query.page && query.limit) {
    //get page

    const PAGE_SIZE = parseInt(query.limit);
    let page = parseInt(query.page);
    let skip = (page - 1) * PAGE_SIZE;
    const onePage = await CompanyRepo.getPage(skip, PAGE_SIZE);
    return onePage;
  } else if (query.name) {
    const selectedCompany = await CompanyRepo.getSelectedCompany(query.name);
    // console.log(selectedCompany);
    return selectedCompany;
  }
};

module.exports.getInfo = async (query) => {
  const info = await CompanyRepo.getInfo(query.name);
  return info;
};
