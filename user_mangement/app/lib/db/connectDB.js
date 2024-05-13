import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const connection = { isConnected: false };

const connectDB = async () => {
  if (connection.isConnected) return true;

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    connection.isConnected = conn.connections[0].readyState;
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return { error: error.message };
  }
};

export default connectDB;
