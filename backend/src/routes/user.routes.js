import User from "../models/user.models.js";
import express from "express";
import { apiResponse } from "../utils/apiResponse.js";
import {
  userRegister,
  userLogin,
  validateToken,
} from "../controllers/user.controller.js";
const userRouter = express.Router();

userRouter.post("/register", userRegister);

userRouter.post("/sign-in", userLogin);

userRouter.get("/validate-token", validateToken, (req, res) => {
  res.status(200).json({ message:"all set" , _id: req._id});
});

export default userRouter;
