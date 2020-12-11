const db = require("./index");

exports.getCompanies = async () => {
  const companies = await db.companies.find({}).toArray();
  return companies;
};

exports.getPage = async (skip, PAGE_SIZE) => {
  const onePage = await db.companies
    .aggregate([
      {
        $lookup: {
          from: "jobs",
          localField: "name",
          foreignField: "companyName",
          as: "jobs",
        },
      },
    ])
    .skip(skip)
    .limit(PAGE_SIZE)
    .toArray();
  return onePage;
};

exports.getSelectedCompany = async (name) => {
  // .findOne({ name: id })
  const selectedCompany = await db.companies
    .aggregate([
      {
        $match: { name: `${name}` },
      },
      {
        $lookup: {
          from: "jobs",
          localField: "name",
          foreignField: "companyName",
          as: "jobs",
        },
      },
    ])
    .toArray()
  return selectedCompany;
};

exports.getInfo = async (name) => {
  const info = await await db.companies
  .aggregate([
    {
      $match: { name: `${name}` },
    },
    {
      $lookup: {
        from: "jobs",
        localField: "name",
        foreignField: "companyName",
        as: "jobs",
      },
    },
  ])
  .toArray()
  return info;
};

exports.createCompany = () => {};
