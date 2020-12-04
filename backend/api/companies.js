const express = require("express")
const router = express.Router()
const CompaniesService = require("../services/companies")

router.get("/", async (req, res) =>{
    const allCompanies= await CompaniesService.getAllCompanies()
    res.send(allCompanies)
})

module.exports = router