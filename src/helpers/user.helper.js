const {UserModel} =  require("../models/user.model")

const getUserByID = async (id)=>{
    try { 
       return await UserModel.findById(id)
    } catch (error) {
        throw error
    }
}
const getUserDetail = async (filter)=>{
    try { 
       return await UserModel.findById(filter)
    } catch (error) {
        throw error
    }
}

module.exports =  {getUserByID,getUserDetail}