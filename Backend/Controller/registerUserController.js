import { Users } from "../Models/usersModel.js"
import bcrypt from "bcrypt";
import { sendOTP } from "./Extras/Otp.js";

export const registerUsers = async (req, res) => {

    const { userName, email, password } = req.body

    if (!userName || !email || !password) {

        res.status(400)
        throw new Error('Please enter all the relavent fields')
    }



    const checkUserName = await Users.findOne({ userName })
    const checkEmail = await Users.findOne({ email })

    if (checkUserName) {
        res.status(409);
        throw new Error("Usere Name Already Exited ")
    }
    if (checkEmail) {
        res.status(409);
        throw new Error("Email Already Exited ")
    }

    const hashedPassword = await bcrypt.hash(password, 10);




    sendOTP(email)


    const createUsers = await Users.create({
        userName, email, password: hashedPassword
    })



    res.json(createUsers)

}