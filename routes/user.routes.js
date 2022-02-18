import { Router } from "express";
import {
  getUsers,
  getUsersById,
  postUsers,
} from "../controller/user.controller.js";

const routes = Router();

routes.get("/users/:id", getUsersById);
routes.get("/users", getUsers);
routes.post("/api/users", postUsers);

export default routes;
