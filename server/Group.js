const mongoose = require("mongoose");
const User = require("./User.js");
const Group = require("./Group.js");

mongoose.connect(
  "mongodb://localhost/testdb", //find the right url to connect to later
  () => {
    console.log("mongoose connected");
  },
  (e) => console.error(e)
);

const groupSchema = new mongoose.Schema({
  groupName: {
    type: String,
    //required: true,
  },
  groupDescription: {
    type: String,
    //required: true,
  },

  users: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  ],
  // that needs to be a connection to the users db or the ids of the users that are in it

  childGroups: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Group",
    },
  ],
  // that needs to be a connection to the gruops db or the ids of the groups that are in it

  parentGroups: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Group",
    },
  ],
  // that needs to be a connection to the gruops db or the ids of the groups that they are in
});

groupSchema.methods.findSpecificUserRecursivelyInGroup = function (user) {
  userName = user.userName;
  //finish at the enddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
}; //todo

groupSchema.methods.findUsersRecursivelyInGroup = function () {
  //finish at the enddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
}; //todo

groupSchema.methods.getParentGroupsOfGroup = async function () {
  const parentGroupsIDsArray = this.parentGroups;
  console.log("parentGroupsIDsArray", parentGroupsIDsArray);
  let parentGroupsArray = await Promise.all(
    await parentGroupsIDsArray.map(async (id) => {
      console.log("typeoffffffffffffffffffffffffffff\n", typeof Group);
      let parentGroup = await Group.findById(id);
      return await parentGroup;
    })
  );
  return await parentGroupsArray;
}; //todo

groupSchema.methods.getAllInGroupInHierarchy = function () {}; //todo

groupSchema.methods.checkGroupExistsInGroupAlready = function () {}; //todo

groupSchema.methods.checkSelfInclusionRecursively = function () {}; //todo

groupSchema.methods.updateGroupUsers = function () {}; //todo

groupSchema.methods.addUsersToGroup = function () {}; //todo

groupSchema.methods.removeGroupFromGroup = function () {}; //todo

groupSchema.methods.removeUserFromGroup = function () {}; //todo

groupSchema.methods.updateGroupName = function () {}; //todo

groupSchema.methods.updateGroupDescription = function () {}; //todo

groupSchema.methods.updateParentGroups = function () {}; //todo

groupSchema.methods.addParentGroups = function () {}; //todo

groupSchema.methods.updateChildGroups = function () {}; //todo

groupSchema.methods.addChildGroups = function () {}; //todo

groupSchema.methods.deleteGroup = function () {}; //todo

groupSchema.methods.deleteWithUsresRecursivelyGroup = function () {}; //todo

groupSchema.methods.deleteWithoutUsresRecursivelyGroup = function () {}; //todo

groupSchema.methods.deleteUsersThatAreInGroup = function () {}; //todo

groupSchema.methods.deleteAllUsersNonRecursivelyInGroup = function () {}; //todo

groupSchema.methods.deleteUsersThatAreInGroup = function () {}; //todo

groupSchema.methods.deleteAllChildGroupsNonRecursively = function () {}; //todo

groupSchema.methods.deleteChildGroups = function () {}; //todo

module.exports = mongoose.model("Group", groupSchema);
