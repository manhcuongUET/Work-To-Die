const Employer = require("../models/employer");
const db = require("./index");

exports.findUserByEmail = async (email) => {
  const rawUserEm = await db.employers.findOne({ email: email });
  if (!rawUserEm) {
    return null;
  }
  const userEm = new Employer(
    rawUserEm.email,
    "",
    rawUserEm.companyName,
    rawUserEm.field,
    rawUserEm.location,
    rawUserEm.website,
    rawUserEm.overview
  );
  userEm.password = rawUserEm.password;
  userEm.salt = rawUserEm.salt;
  console.log(userEm);
  return userEm;
};

exports.createUserEmployers = async (employer) => {
  const dbResult = await db.employers.insertOne({
    email: employer.email,
    password: employer.password,
    salt: employer.salt,
    companyName: employer.companyName,
    location: employer.location,
    website: employer.website,
    field: employer.field,
    overview: employer.overview,
  });
  const insertedRawUserEm = dbResult.ops[0];
  
  const savedUserEm = new Employer(
    insertedRawUserEm.email,
    insertedRawUserEm.companyName,
    insertedRawUserEm.location,
    insertedRawUserEm.website,
    insertedRawUserEm.field,
    insertedRawUserEm.overview,
  );
  return savedUserEm;
};

exports.uploadNewJob = async (data) => {
  const newJob = await db.jobs.insertOne(data);
  return newJob;
};

exports.uploadNewCompany = async (data) => {
  const newCompany = await db.companies.insertOne(data);
  return newCompany;
};

