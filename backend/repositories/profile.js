const Profile = require("../models/profile")
const db = require("./index")

//push len

const findProfileByEmail = async (data) => {
    const rawProfile = await db.profiles.findOne({email : data.email})
    return rawProfile
}



const saveProfile = (profile) => {
    const insertProfile = db.profiles.insertOne(profile.data) 
    const profilee = new Profile(insertProfile.data)
    return profilee  
}



module.exports = {saveProfile , findProfileByEmail}