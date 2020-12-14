const jobService = require("../services/jobs")
const express = require('express')
const router = express.Router()

router.get("/", async (req, res) => {
    const jobs = await jobService.getJobs(req.query);
    res.json(jobs)
})

router.get("/all" , async(req , res) => {

    const jobs = await jobService.getAllJobs()
    res.json(jobs)
})

router.get("/selected" , async(req , res) => {
    
    const jobs = await jobService.getSelectedJobs(req.query.id)
    res.json(jobs)
})

router.get("/jobDetail" , async(req , res) => {
    const job = await jobService.getDetailJobs(req.query.job , req.query.companyName)
    res.json(job)
})

router.get("/field" ,  async (req , res) => {
    const job = await jobService.getFieldJobs(req.query.field)
    res.json(job)
})

router.get("/located" , async (req , res) => {
    const job = await jobService.getJobsLocated(req.query.located, req.query.salary)
    res.json(job)
    
})
module.exports = router