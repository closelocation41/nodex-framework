const {COLLECTIONS} =  require("../config/db.config")
const mongoose =  require("mongoose")
const Schema =  mongoose.Schema;
const UserSchema =  new Schema ({
    username: {type:String},
    password: {type:String},
    email: {type:String},
    createdBy: {type:String},
    createdOn: {type:Date, default:Date.now()},
    modifiedBy: {type:String},
    modifiedOn: {type:Date, default:Date.now()}
}, {_id:true, strict:false, collation:COLLECTIONS.USERS});


const UserModel = mongoose.model('UserModel', UserSchema);
module.exports = {UserModel}