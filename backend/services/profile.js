const profileRepo = require("../repositories/profile")
const Profile = require("../models/profile")
const createProfile =  async (data) => {
    const profile = await profileRepo.findProfileByEmail(data)
    if(profile) {
        throw new Error("Profile existed")
    }
    const a = data.certificate.specialized.split("\n")
    const b = data.certificate.language.split("\n")
    const c = data.experience.text.split("\n")
    const d = data.experience1.text.split("\n")

    data.certificate.language = b
    data.certificate.specialized = a
    data.experience.text = c
    data.experience1.text = d

    const newProfile = new Profile(data)
    const saveProfile = await profileRepo.saveProfile(newProfile);
    return saveProfile
}

const getProfile = async (data) => {
    const profileGeted = await profileRepo.findProfileByEmail(data)
    console.log(profileGeted)
    return profileGeted
}
module.exports = {createProfile,getProfile}