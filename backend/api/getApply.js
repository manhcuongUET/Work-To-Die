const express = require('express')
const router = express.Router()
const getApplyService = require("../services/getApply")

router.get("/" , async (req , res) => {
    const get = await getApplyService.getApply(req.query.companyName)
    res.json(get)
})
module.exports = router