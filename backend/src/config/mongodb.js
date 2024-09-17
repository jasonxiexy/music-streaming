import mongoose from "mongoose";

const connectedDB = async () => {


    mongoose.connection.on('connected', () => {
        console.log("Database connection is established.")
    })

    await mongoose.connect(`${process.env.MONGODB_URL}/spotify`);
}

export default connectedDB;