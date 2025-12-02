import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  const mongoURL = process.env.MONGO_URI;

  await mongoose
    .connect(mongoURL)
    .then(() => console.log("DB Connected"))
    .catch((error) => console.log("DB connection error:", error));
};


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.