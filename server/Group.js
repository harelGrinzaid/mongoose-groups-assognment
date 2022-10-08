const mongoose = require("mongoose");

const gruopSchema = new mongoose.Schema({
  gruopName: {
    type: String,
    required: true,
  },
  groupDescription: {
    type: String,
    required: true,
  },

  /*, members\users:
    {
        [type: mongoose.SchemaTypes:ObjectId,ref:"User"]
    }
  \\ that needs to be a connection to the users db or the ids of the users that are in it*/

  /*, childGroups:
    {
        [type: mongoose.SchemaTypes:ObjectId,ref:"Group"]
    }
  \\ that needs to be a connection to the gruops db or the ids of the groups that are in it*/

  /*, parentGroups:
    {
        [type: mongoose.SchemaTypes:ObjectId,ref:"Group"]
        
    }
  \\ that needs to be a connection to the gruops db or the ids of the groups that they are in*/
});

userSchema.statics.findSpecificUserRecursivelyInGroup = function () {}; //todo

userSchema.statics.findUsersRecursivelyInGroup = function () {}; //todo

userSchema.statics.getParentGroupsOfGroup = function () {}; //todo

userSchema.statics.getAllInGroupInHierarchy = function () {}; //todo

userSchema.statics.checkGroupExistsInGroupAlready = function () {}; //todo

userSchema.statics.checkSelfInclusionRecursively = function () {}; //todo

userSchema.statics.updateGroupUsers = function () {}; //todo

userSchema.statics.addUsersToGroup = function () {}; //todo

userSchema.statics.removeGroupFromGroup = function () {}; //todo

userSchema.statics.removeUserFromGroup = function () {}; //todo

userSchema.statics.updateGroupName = function () {}; //todo

userSchema.statics.updateGroupDescription = function () {}; //todo

userSchema.statics.updateParentGroups = function () {}; //todo

userSchema.statics.addParentGroups = function () {}; //todo

userSchema.statics.updateChildGroups = function () {}; //todo

userSchema.statics.addChildGroups = function () {}; //todo

userSchema.statics.deleteGroup = function () {}; //todo

userSchema.statics.deleteWithUsresRecursivelyGroup = function () {}; //todo

userSchema.statics.deleteWithoutUsresRecursivelyGroup = function () {}; //todo

userSchema.statics.deleteUsersThatAreInGroup = function () {}; //todo

userSchema.statics.deleteAllUsersNonRecursivelyInGroup = function () {}; //todo

userSchema.statics.deleteUsersThatAreInGroup = function () {}; //todo

userSchema.statics.deleteAllChildGroupsNonRecursively = function () {}; //todo

userSchema.statics.deleteChildGroups = function () {}; //todo

module.exports = mongoose.model("Group", gruopSchema);
