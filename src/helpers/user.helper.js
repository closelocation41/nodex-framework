const {UserModel}=  require("../models/user.model")

const getUserByID = async (id)=>{
    try { 
       return await UserModel.findById(id)
    } catch (error) {
        throw error
    }
}
const getUserDetails = async (filter)=>{
    try { 
        console.log(filter)
       return await UserModel.find(filter);
    } catch (error) {
        throw error
    }
}

module.exports =  {getUserByID,getUserDetails}