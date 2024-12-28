const { COLLECTIONS } = require("../config/db.config");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    createdBy: { type: String },
    createdOn: { type: Date, default: Date.now },
    modifiedBy: { type: String },
    modifiedOn: { type: Date, default: Date.now },
  },
  { collection: COLLECTIONS.USERS } // Specify collection name
);

const UserModel = mongoose.model("UserModel", UserSchema);
module.exports = { UserModel };
