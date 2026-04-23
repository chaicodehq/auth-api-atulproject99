import mongoose from "mongoose";
import { User } from "../models/user.model.js";
/**
 * TODO: List all users (Admin only)
 *
 * 1. Find all users (password excluded by default)
 * 2. Return 200 with { users }
 */
export async function listUsers(req, res, next) {
  try {
    const users = await User.find();
    res.status(200).json({ users });
    // Your code here
  } catch (error) {
    next(error);
  }
}

/**
 * TODO: Get user by ID (Admin only)
 *
 * 1. Extract id from req.params
 * 2. Find user by id (password excluded by default)
 * 3. If not found: return 404 with { error: { message: "User not found" } }
 * 4. Return 200 with { user }
 */
export async function getUser(req, res, next) {
  try {
    const { id } = req.params;
    const userId = new mongoose.Types.ObjectId(id);
    const user = await User.findById(userId);
    if (!user)
      return res.status(404).json({ error: { message: "User not found" } });
    res.status(200).json({ user });
    // Your code here
  } catch (error) {
    next(error);
  }
}

/**
 * TODO: Delete user (Admin only)
 *
 * 1. Extract id from req.params
 * 2. Delete user by id
 * 3. If not found: return 404 with { error: { message: "User not found" } }
 * 4. Return 200 with { message: "User deleted successfully" }
 */
export async function deleteUser(req, res, next) {
  try {
    const { id } = req.params;
    const userId = new mongoose.Types.ObjectId(id);
    const deleteUser = await User.findByIdAndDelete(userId);
    if (!deleteUser)
      return res.status(404).json({ error: { message: "User not found" } });
    res.status(200).json({ message: "User deleted successfully" });
    // Your code here
  } catch (error) {
    next(error);
  }
}
