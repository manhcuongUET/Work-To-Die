const { snakeCase } = require("lodash");
const User = require("../models/user");
const db = require("./index");

exports.findUserByUsername = async (username) => {
  const rawUser = await db.users.findOne({ username: username });
  if(!rawUser){
      return null;
  }
  const user = new User(
    rawUser.username,
    rawUser.displayName,
    rawUser.photoUrl
  );
  user.password = rawUser.password;
  user.salt = rawUser.salt;
  return user;
};

exports.createUser = async (user) => {
  const dbResult = await db.users.insertOne({
    username: user.username,
    password: user.password,
    salt: user.salt,
    displayName: user.displayName,
    photoUrl: user.photoUrl,
  });
  const insertedRawUser = dbResult.ops[0];
  const savedUser = new User(
    insertedRawUser.username,
    insertedRawUser.displayName,
    insertedRawUser.photoUrl
  );
  return savedUser;
};
