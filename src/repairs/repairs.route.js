import { Router } from "express";
import {
   findAllRepairs,
   findOneRepair,
   createRepair,
   updateRepair,
   deleteRepair,
} from "./repairs.controller.js";

export const router = Router();

//Rutas
router.route("/").get(findAllRepairs).post(createRepair);
router
   .route("/:id")
   .get(findOneRepair)
   .patch(updateRepair)
   .delete(deleteRepair);
