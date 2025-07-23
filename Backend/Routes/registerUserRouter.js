import express, { Router } from "express"
import { registerUsers } from "../Controller/registerUserController.js";


export const usersRouter = express.Router();




usersRouter.post('/register-user', registerUsers) 