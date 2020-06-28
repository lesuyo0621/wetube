import express from "express";
import routes from "../routes";
import {
  editProfile,
  changePassword,
  userDetail,
  uHome,
} from "../controllers/userControllers";

const userRouter = express.Router();

userRouter.get(routes.home, uHome);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
