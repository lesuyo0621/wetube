import express from "express";
import routes from "../routes";
import { gHome } from "../controllers/globalControllers";
import { search } from "../controllers/videoControllers";
import { join, login, logout } from "../controllers/userControllers";

const globalRouter = express.Router();

globalRouter.get(routes.home, gHome);
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;
