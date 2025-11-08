import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
       const connection =  await mongoose.connect
       (`${process.env.MONGO_URL}`);      
       console.log("Database connected successfully");
       console.log(`MongoDB connected !! DB HOST:${connection.host}`);
       
    } catch (error) {
        console.error("Database connection error: ", error);
        process.exit(1);
        throw error;
    }   
};
export default connectDB;