import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("users"));
userRouter.get(routes.editProfile, (req, res) => res.send("editProfile"));
userRouter.get(routes.changePassword, (req, res) => res.send("changePassword"));
userRouter.get(routes.userDetail, (req, res) => res.send("userDetail"));

export default userRouter;
