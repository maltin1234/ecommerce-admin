import mongoose from "mongoose";

// Create a function to connect to the database
const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    // Connection is already open, no need to reconnect
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Failed to connect to the database");
  }
};

// Export the connection
export { connectDB };
