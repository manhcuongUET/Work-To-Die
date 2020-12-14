const db = require("./index")


exports.updateApply = async (email , companyName , job) => {
    
    console.log(email)
    const insertApply =  await db.companies.findOneAndUpdate (
        {
            name : companyName,
            'emailApply.email' : {$ne : email} 
        } , 
        {
            $push: {
                emailApply : {
                    email : email,
                    job : job
                }
            }
        })
        return insertApply

}