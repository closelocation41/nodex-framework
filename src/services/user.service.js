const bcrypt = require('bcrypt');
const {UserModel} = require("../models/user.model");
const {ERROR} = require("../config/error.config");
const userHelper =  require('../helpers/user.helper');

const getUsers = async (req)=>{
    try { 
        let limit = parseInt(req?.query?.limit, 10) || 10;

        // Set the offset (page number or starting point) based on the query params
        let offset = parseInt(req?.query?.offset, 10) || 0;
       return await UserModel.find()
      .select('username email')  // Selecting only the username and email fields
      .limit(limit)
      .skip(offset);
    } catch (error) {
        throw error
    }
}
const createUser = async (body)=>{
    try { 
       let {email,username,password} = body; 
       const user = await userHelper.getUserDetails({ email: body.email });
        if (user?.length !== 0) {
            throw ERROR.EXIST;
        }
        password = await bcrypt.hash(password, 10);
       return await UserModel.insertMany([{email,username,password}]);
    } catch (error) {
        throw error
    }
}

const updateUser = async (req)=>{
    try { 
        const { id } = req.params; // The user's _id from the URL
        const { username, email } = req.body; // The data to update
      
       const user = await userHelper.getUserDetails({_id:id});
        if (user?.length === 0) {
            throw ERROR.NOT_FOUND;
        }else{
            return await UserModel.findByIdAndUpdate(
                id, // The _id of the document to update
                { username, email }, // The update object containing the fields to update
                { new: true } // Optional: returns the updated document, not the old one
              ); 
        }
       
    } catch (error) {
        throw error
    }
}


module.exports =  {getUsers,createUser,updateUser}