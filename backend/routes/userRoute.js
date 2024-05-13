import express from "express";
import {
  fetchUserCount,
  loginUser,
  registerUser,
} from "../controllers/userController.js";
import {authMiddleware, AuthorizedAdmin} from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/list", authMiddleware, AuthorizedAdmin, fetchUserCount);

export default userRouter;
