import express from "express";
import {
  bookAppointment,
  getUserData,
  loginUser,
  registerUser,
  updateUserData,
} from "../controllers/userController.js";
import authUser from "../middlewares/authUser.js";
import upload from "../middlewares/multer.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/profile", authUser, getUserData);
userRouter.post(
  "/update-profile",
  upload.single("image"),
  authUser,
  updateUserData
);
userRouter.post("/book-appointment", authUser, bookAppointment);
export default userRouter;
