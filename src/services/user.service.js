const bcrypt = require('bcrypt')
const {UserModel} = require("../models/user.model")
const {ERROR} = require("../config/error.config")

const getUsers = async ()=>{
    try { 
       return await UserModel.find();
    } catch (error) {
        throw error
    }
}
const createUser = async (body)=>{
    try { 
       let {useremail,username,password} = body; 
       const user = await userHelper.getUserDetail({ useremail:useremail});
        if (!user) {
            throw ERROR.EXIST
        }
        password = await bcrypt.hash(password, 10);
       return await UserModel.insertMany([{useremail,username,password}]);
    } catch (error) {
        throw error
    }
}

module.exports =  {getUsers,createUser}