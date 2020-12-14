const applyService = require("../services/apply")
const express = require('express')
const router = express.Router()


router.post("/" ,  (req , res) => {
    const {email , companyName , job} = req.query
    const a = applyService.updateApply(email , companyName , job)
    res.json(a)
})
module.exports = router