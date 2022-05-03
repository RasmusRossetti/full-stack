/**
 * import if dependencie to create unique ids
 */
import { v4 as uuid } from "uuid";
/**
 * database array
 */
let users = [];
/**
 * arrow function for handling the GET request
 * @param {json} req
 * @param {json} res
 */
export const getUsers = (req, res) => {
  res.send(users);
};
/**
 * arrow function for handling the POST request
 * @param {json} req
 * @param {json} res
 */
export const createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuid() });
  res.send("User Added Successfully");
};
/**
 * arrow function for handling the GET request for specific user
 * @param {json} req
 * @param {json} res
 */
export const getUser = (req, res) => {
  const singleUser = users.filter((user) => user.id === req.params.id);
  res.send(singleUser);
};
/**
 * arrow function for handling the DELETE request for specific user
 * @param {json} req
 * @param {json} res
 */
export const deleteUser = (req, res) => {
  users = users.filter((user) => user.id !== req.params.id);
  res.send("User Deleted Successfully");
};
/**
 * arrow function for handling the PUT request for specific user
 * @param {json} req
 * @param {json} res
 */
export const updateUser = (req, res) => {
  const user = users.find((user) => user.id === req.params.id);

  user.name = req.body.name;
  user.email = req.body.email;
  user.contact = req.body.contact;

  res.send("User Updated Successfully");
};
