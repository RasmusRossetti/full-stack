import express from "express";
/**
 * Imports of functions from controllers folder
 */
import {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";
/**
 * creating different endpoints for the CRUD
 */
const router = express.Router();
router.get("/users", getUsers);
router.post("/user", createUser);
router.get("/user/:id", getUser);
router.delete("/user/:id", deleteUser);
router.put("/user/:id", updateUser);

export default router;
