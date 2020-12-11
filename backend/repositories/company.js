const db = require("./index");

exports.getCompanies = async () => {
  const companies = await db.companies.find({}).toArray();
  return companies;
};

exports.getPage = async (skip, PAGE_SIZE) => {
  const onePage = await db.companies
    .aggregate([
      {$lookup: {
        from: 'jobs',
        localField: 'name',
        foreignField: 'companyName',
        as: 'jobs'
      }}
    ])
    .skip(skip)
    .limit(PAGE_SIZE)
    .toArray();
  return onePage;
};

exports.getSelectedCompany = async (id) => {
  const selectedCompany = await db.companies.findOne({ name: id });
  return selectedCompany;
};

exports.getInfo = async (id) => {
  const info = await db.companies.findOne({ name: id });
  return info;
};

exports.createCompany = () => {};
