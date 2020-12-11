const express = require("express");
const router = express.Router();
const CompaniesService = require("../services/companies");

router.get("/", async (req, res) => {
    console.log(req.query);

    const result = await CompaniesService.getCompanies(req.query);
    res.json(result);
  
});

router.get("/info", async (req, res) => {
  const info = await CompaniesService.getInfo(req.query)
  res.json(info);
})


module.exports = router;