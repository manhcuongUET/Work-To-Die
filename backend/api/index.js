const express = require("express");
const companiesRouter = require("./companies");
const jobsRouter = require("./jobs");
const profile = require("./profile");
const authRouter = require("./auth")
const employersRouter = require("./employers")
const apply = require("./apply")
const getApply = require("./getApply")

const router = express.Router();

router.use("/companies", companiesRouter);
router.use("/jobs", jobsRouter);
router.use("/profile", profile);
router.use("/auth", authRouter);
router.use("/employers", employersRouter)
router.use("/apply" , apply )
router.use("/getApply" , getApply)

module.exports = router;
