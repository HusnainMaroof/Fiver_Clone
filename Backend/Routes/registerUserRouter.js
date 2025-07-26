import express, { Router } from "express"
import { checkMail, registerUsers } from "../Controller/registerUserController.js";


export const usersRouter = express.Router();




usersRouter.post('/register-user', registerUsers)
usersRouter.post('/verify-mail', checkMail) 