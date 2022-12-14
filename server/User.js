const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now,
  },
  updatedAt: {
    type: Date,
    default: () => Date.now,
  },

  /*, ethnicity:
  // that needs to be an enum */

  /*, parentGroups:
    {[type: mongoose.SchemaTypes:ObjectId,ref:"Group"]}
  \\ that needs to be a connection to the gruops db or the ids of the groups that they are in*/
});

//need to check how to have a function on a specific user, not on the whole collection********************************************************************************************************************************************************************************************************************

userSchema.statics.getParentGroupsOfUser = function () {}; //todo

userSchema.statics.checkUserExistsInGroupAlready = function () {}; //todo

userSchema.statics.addUserToGroup = function () {}; //todo

userSchema.pre("save", function (next) {
  //add valadation here
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("User", userSchema);
