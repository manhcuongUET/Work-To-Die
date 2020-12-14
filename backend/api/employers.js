const express = require("express");
const router = express.Router();
const employersService = require("../services/employers")

router.post("/new-job" , async(req , res) => {
    const newJob  =  await employersService.uploadNewJob(req.body)
    
    res.json("success")
})

module.exports = router