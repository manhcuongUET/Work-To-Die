const express= require('express');
const companiesRouter = require("./companies")
const jobsRouter = require("./jobs")
const profile = require("./profile")

const router= express.Router();

router.use("/companies", companiesRouter);
router.use("/jobs" , jobsRouter)
router.use("/profile" , profile )

module.exports = router