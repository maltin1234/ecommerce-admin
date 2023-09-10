import mongoose from "mongoose";

let isConnected = false; // A flag to track the connection status

export const connectDB = async () => {
  if (isConnected) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true; // Set the flag to true when successfully connected
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
    throw error; // Rethrow the error to handle it elsewhere if needed
  }
};
