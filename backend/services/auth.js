const UserRepo = require("../repositories/user");
const User = require("../models/user");

module.exports.signIn = async (username, password) => {
  const user = await UserRepo.findUserByUsername(username);
  if (!user) {
    throw new Error("Username not existed !");
  }
  if (!user.verifyPassword(password)) {
    throw new Error("Password not correct");        
  }
  const jwt = user.generateToken();
  return {jwt, user}
};

module.exports.signUp = async (username, password) => {
  const user = await UserRepo.findUserByUsername(username);
  if (user) {
    throw new Error("Username existed!");   
  }
  const newUser = new User(username);
  newUser.generagePassword(password);
  const savedUser = await UserRepo.createUser(newUser);
  return savedUser;
};
