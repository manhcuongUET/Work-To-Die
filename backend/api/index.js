const express = require("express");
const companiesRouter = require("./companies");
const jobsRouter = require("./jobs");
const profile = require("./profile");
const authRouter = require("./auth")
const apply = require("./apply")

const router = express.Router();

router.use("/companies", companiesRouter);
router.use("/jobs", jobsRouter);
router.use("/profile", profile);
router.use("/auth", authRouter);
router.use("/apply" , apply )

module.exports = router;
