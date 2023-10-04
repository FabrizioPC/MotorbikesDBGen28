import { Router } from "express";
//faltan controladores
import {
   findAllUsers,
   findUserById,
   createUser,
   updateUser,
   deleteUser,
} from "./users.controller.js";
export const router = Router();

//Rutas
router.route("/").get(findAllUsers).post(createUser);
router.route("/:id").get(findUserById).patch(updateUser).delete(deleteUser);
