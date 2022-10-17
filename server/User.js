const mongoose = require("mongoose");
const Group = require("./Group.js");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    //required: true,
  },
  age: {
    type: Number,
    //required: true,
  },
  // createdAt: {
  //   type: Date,
  //   immutable: true,
  //   default: () => Date.now,
  // },
  // updatedAt: {
  //   type: Date,
  //   default: () => Date.now,
  // },

  /*, ethnicity:
  // that needs to be an enum */

  parentGroups: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Group" }] /*
  \\ that needs to be a connection to the gruops db or the ids of the groups that they are in*/,
});

//need to check how to have a function on a specific user, not on the whole collection********************************************************************************************************************************************************************************************************************

userSchema.methods.getParentGroupsOfUser = async function () {
  const parentGroupsIDsArray = this.parentGroups;
  let parentGroupsArray = await Promise.all(
    await parentGroupsIDsArray.map(async (id) => {
      let parentGroup = await Group.findById(id);
      return await parentGroup;
    })
  );
  return await parentGroupsArray;
};

//this may need to happen in group.js
//userSchema.methods.checkUserExistsInGroupAlready = function () {}; //todo

//this may need to happen in group.js
//userSchema.methods.addUserToGroup = function (groupID) {}; //todo

userSchema.pre("save", function (next) {
  //add valadation here
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("User", userSchema);
