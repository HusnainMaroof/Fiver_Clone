import mongoose from "mongoose"


export const connectDB = async () => {

    try {

        await mongoose.connect(process.env.MongooDBURL)

        console.log(`Data Base Connected on ${mongoose.connection.host.cyan}`);


    } catch (error) {
        console.log(error);

    }


}