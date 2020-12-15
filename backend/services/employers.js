const EmployersRepo = require("../repositories/employers");
const Employer = require("../models/employer");


module.exports.uploadNewJob = async (data) => {
  const newJob = await EmployersRepo.uploadNewJob(data);
  return newJob;
};

module.exports.signInEm = async (email, password) => {
  const user = await EmployersRepo.findUserByEmail(email);
  if (!user) {
    throw new Error("Username not existed !");
  }
  if (!user.verifyPassword(password)) {
    throw new Error("Password not correct");
  }
  const jwt = user.generateToken();
  return { jwt, user };
};

module.exports.signUpEm = async (email, password) => {
  const user = await EmployersRepo.findUserByEmail(email);
  if (user) {
    throw new Error("email existed!");
  }
  const newUserEmployer = new Employer(email);
  newUserEmployer.generagePassword(password);
  const savedEm = await EmployersRepo.createUserEmployers(newUserEmployer);
  return savedEm;
};
