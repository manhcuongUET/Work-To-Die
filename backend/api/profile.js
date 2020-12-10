const express = require('express')
const router = express.Router()
const profileService = require("../services/profile")

router.post("/" , (req , res) => {
    const data  = req.body;
    const profile = profileService.createProfile(data)
    res.json(profile)
})
router.get("/" , async (req , res) => {
    const data = req.query
    const profile = await profileService.getProfile(data)
    res.json(profile)
})
module.exports = router