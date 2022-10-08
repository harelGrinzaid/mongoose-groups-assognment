const mongoose = require("mongoose");
const User = require("./User.js");

mongoose.connect(
  "mongodb://localhost/testdb", //find the right url to connect to later
  () => {
    console.log("mongoose connected");
  },
  (e) => console.error(e)
);

// //for group

// const findSpecificUserRecursivelyInGroup = async (parentGroup, condition) => {}; //todo

// const findUsersRecursivelyInGroup = async (parentGroup, condition) => {}; //todo

// const deleteWithUsresRecursivelyGroup = async (parentGroup) => {}; //todo **has to delete the conections of the parentGroups to it

// const deleteWithoutUsresRecursivelyGroup = async (parentGroup) => {}; //todo **has to delete the connections of the users to the group and the conections of the parentGroups to it

// const getParentGroupsOfGroup = async (childGroup) => {}; //todo

// const getAllInGroupInHierarchy = async (parentGroup) => {}; //todo

// const checkGroupExistsInGroupAlready = async (parentGroup, childGroup) => {}; //todo

// const checkSelfInclusionRecursively = async (parentGroup, childGroup) => {}; //todo

// //for user

// const getParentGroupsOfUser = async (user) => {}; //todo

// const checkUserExistsInGroupAlready = async (parentGroup, user) => {}; //todo

// //for both //const getParentGroups = async (child) => {}; //todo
