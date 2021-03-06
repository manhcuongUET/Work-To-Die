const express = require("express");
const router = express.Router();
const employersService = require("../services/employers");
const emMdw = require("../middlewares/employer");

router.post("/sign-up", async (req, res) => {
  // const { email, password } = req.body;
  const data = req.body;
  try {
    const userEm = await employersService.signUpEm(data);
    res.json(userEm.toJson());
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post("/sign-in", async (req, res) => {
  const { email, password } = req.body;
  try {
    const { jwt, userEm } = await employersService.signInEm(email, password);

    res.json({
      jwt: jwt,
      userEm: userEm.toJson(),
    });
  } catch (err) {
    res.status(401).send(err.message);
  }
});

router.post("/me", emMdw, (req, res) => {
  res.json(req.user.toJson());
});

router.post("/new-job", async (req, res) => {
  const newJob = await employersService.uploadNewJob(req.body);

  res.json("success");
});

module.exports = router;

router.post("/new-company", async (req, res) => {
  const newCompany = await employersService.uploadNewCompany(req.body);
  res.json("success");
});
