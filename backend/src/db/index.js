import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const instance = await mongoose.connect(process.env.MONGODB_URL);
    console.log("MONGODB CONNECTED SUCCESSFULLY");
    return instance;
  } catch (error) {
    console.log("src/db/mongodb connection error function name :: connectDB");
    console.table(error.message);
    process.exit(1); // Exit the process if DB connection fails
  }
};

export default connectDB;
