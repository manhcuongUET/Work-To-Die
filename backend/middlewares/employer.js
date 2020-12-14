const jwt = require("jsonwebtoken");
const  EmployersRepo = require('../repositories/employers')

const emMdw = (req, res, next) => {
  const bearerToken = req.headers.authorization;
  if (!bearerToken) {
    res.status(401).send("JWT not found!");
    return;
  }
  jwt.verify(
    bearerToken.split(" ")[1],
    process.env.JWT_SECRET,
    async (err, data) => {
      if (err) {
        res.status(401).send("Invalid token");
      } else {
        const user = await EmployersRepo.findUserByEmail(data.email);
        if (!user) {
          res.status(401).send("User not found");
        } else {
          req.user = user;
          next();
        }
      }
    }
  );
};

module.exports = emMdw;
