import mongoose from "mongoose";
import { number } from "zod";

type connectionObject = {
  isConnected?: number;
};

const connection: connectionObject = {};

export default async function dbConnect() {
  if (connection.isConnected) {
    return true;
  }
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || "", {});
    connection.isConnected = conn.connections[0].readyState;
    return connection.isConnected ? true : new Error("DB connection failed");
  } catch (err) {
    console.log(err);
    return false;
  }
}
