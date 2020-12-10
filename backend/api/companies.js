const express = require("express");
const router = express.Router();
const CompaniesService = require("../services/companies");

router.get("/", async (req, res) => {
    console.log(req.query);

    const companies = await CompaniesService.getCompanies(req.query);
    res.json(companies);
  
});

module.exports = router;
