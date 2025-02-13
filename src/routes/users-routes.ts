import { UserController } from "@/controllers/users-controller";
import { Router } from "express";

const userRoutes = Router()
const usersControllers = new UserController()

userRoutes.get("/", usersControllers.create)


export { userRoutes }

