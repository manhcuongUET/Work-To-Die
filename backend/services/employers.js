const EmployersRepo = require("../repositories/employers");
const Employer = require("../models/employer");


module.exports.uploadNewJob = async (data) => {
  const newJob = await EmployersRepo.uploadNewJob(data);
  return newJob;
};

module.exports.signInEm = async (email, password) => {
  const userEm = await EmployersRepo.findUserByEmail(email);  
  if (!userEm) {
    throw new Error("Email not existed !");
  }
  if (!userEm.verifyPassword(password)) {
    throw new Error("Password not correct");
  }
  const jwt = userEm.generateToken();
  return { jwt, userEm };
};

module.exports.signUpEm = async (email, password) => {
  const userEm = await EmployersRepo.findUserByEmail(email);
  if (userEm) {
    throw new Error("email existed!");
  }
  const newUserEmployer = new Employer(email);
  newUserEmployer.generagePassword(password);
  const savedEm = await EmployersRepo.createUserEmployers(newUserEmployer);
  return savedEm;
};
