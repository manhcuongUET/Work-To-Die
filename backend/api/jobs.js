const jobService = require("../services/jobs")
const express = require('express')
const router = express.Router()

router.get("/", async (req, res) => {
    const jobs = await jobService.getJobs();
    res.json(jobs)
})
module.exports = router