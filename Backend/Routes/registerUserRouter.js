import express, { Router } from "express"
import { checkMail, checkUserName, registerUsers, verifyOtp } from "../Controller/registerUserController.js";


export const usersRouter = express.Router();




usersRouter.post('/register-user', registerUsers)
usersRouter.post('/verify-mail', checkMail)
usersRouter.post('/verify-UserName', checkUserName) 
usersRouter.post('/verify-otp/:id', verifyOtp) 