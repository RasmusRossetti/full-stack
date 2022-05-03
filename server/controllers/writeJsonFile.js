// import { v4 as uuid } from "uuid";
// import fs from "fs";
// const dataPath = "./users.json";

// export const getUsers = (req, res) => {
//   const users = getUserData();
//   res.send(users);
// };
// export const createUser = (req, res) => {
//   //get the existing user data
//   const existUsers = getUserData();

//   const user = req.body;

//   //check if the user fields are missing
//   if (user.name == null || user.email == null || user.contact == null) {
//     return res.status(401).send({ error: true, msg: "User data missing" });
//   }

//   existUsers.push({ ...user, id: uuid() });

//   saveUserData(existUsers);
//   res.send("User Added Successfully");
//   // users.push({ ...user, id: uuid() });
//   // res.send("User Added Successfully");
// };

// export const getUser = (req, res) => {
//   const existUsers = getUserData();
//   const singleUser = existUsers.filter((user) => user.id === req.params.id);
//   res.send(singleUser);
// };

// export const deleteUser = (req, res) => {
//   const name = req.params.id;
//   //get the existing userdata
//   const existUsers = getUserData();
//   //filter the userdata to remove it
//   const filterUser = existUsers.filter((user) => user.id !== name);

//   //save the filtered data
//   saveUserData(filterUser);
//   res.send({ success: true, msg: "User removed successfully" });
// };
// export const updateUser = (req, res) => {
//   // get the existing user data
//   const existUsers = getUserData();

//   saveUserData(existUsers);

//   const filterUser = existUsers.find((user) => user.id === req.params.id);
//   filterUser.name = req.body.name;
//   filterUser.email = req.body.email;
//   filterUser.contact = req.body.contact;

//   const updateUser = existUsers.push({ ...filterUser });
//   saveUserData(updateUser);
//   res.send("User Updated successfully");
// };
// const getUserData = () => {
//   const jsonData = fs.readFileSync(dataPath);
//   return JSON.parse(jsonData);
// };

// const saveUserData = (data) => {
//   const stringifyData = JSON.stringify(data);
//   fs.writeFileSync(dataPath, stringifyData);
// };
