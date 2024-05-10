import express from "express";
import {
  fetchUserCount,
  loginUser,
  registerUser,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/list", fetchUserCount);

export default userRouter;
