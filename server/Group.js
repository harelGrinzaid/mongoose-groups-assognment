const mongoose = require("mongoose");
const User = require("./User.js");

const gruopSchema = new mongoose.Schema({
  groupName: {
    type: String,
    //required: true,
  },
  groupDescription: {
    type: String,
    //required: true,
  },

  /*, members\users:
        [{type: mongoose.SchemaTypes.ObjectId,ref:"User"}]
  \\ that needs to be a connection to the users db or the ids of the users that are in it*/

  /*, childGroups:
        [{type: mongoose.SchemaTypes.ObjectId,ref:"Group"}]
  \\ that needs to be a connection to the gruops db or the ids of the groups that are in it*/

  /*, parentGroups:
    {
        [type: mongoose.SchemaTypes.ObjectId,ref:"Group"]
        
    }
  \\ that needs to be a connection to the gruops db or the ids of the groups that they are in*/
});

gruopSchema.statics.findSpecificUserRecursivelyInGroup = function () {}; //todo

gruopSchema.statics.findUsersRecursivelyInGroup = function () {}; //todo

gruopSchema.statics.getParentGroupsOfGroup = function () {}; //todo

gruopSchema.statics.getAllInGroupInHierarchy = function () {}; //todo

gruopSchema.statics.checkGroupExistsInGroupAlready = function () {}; //todo

gruopSchema.statics.checkSelfInclusionRecursively = function () {}; //todo

gruopSchema.statics.updateGroupUsers = function () {}; //todo

gruopSchema.statics.addUsersToGroup = function () {}; //todo

gruopSchema.statics.removeGroupFromGroup = function () {}; //todo

gruopSchema.statics.removeUserFromGroup = function () {}; //todo

gruopSchema.statics.updateGroupName = function () {}; //todo

gruopSchema.statics.updateGroupDescription = function () {}; //todo

gruopSchema.statics.updateParentGroups = function () {}; //todo

gruopSchema.statics.addParentGroups = function () {}; //todo

gruopSchema.statics.updateChildGroups = function () {}; //todo

gruopSchema.statics.addChildGroups = function () {}; //todo

gruopSchema.statics.deleteGroup = function () {}; //todo

gruopSchema.statics.deleteWithUsresRecursivelyGroup = function () {}; //todo

gruopSchema.statics.deleteWithoutUsresRecursivelyGroup = function () {}; //todo

gruopSchema.statics.deleteUsersThatAreInGroup = function () {}; //todo

gruopSchema.statics.deleteAllUsersNonRecursivelyInGroup = function () {}; //todo

gruopSchema.statics.deleteUsersThatAreInGroup = function () {}; //todo

gruopSchema.statics.deleteAllChildGroupsNonRecursively = function () {}; //todo

gruopSchema.statics.deleteChildGroups = function () {}; //todo

module.exports = mongoose.model("Group", gruopSchema);
