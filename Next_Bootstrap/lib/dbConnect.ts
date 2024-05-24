import mongoose from "mongoose";

type connectionObject = {
  isConnected?: number;
};

const connection: connectionObject = {};

export default async function dbConnect() {
  if (connection.isConnected) {
    console.log("using existing connection");
    return true;
  }
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || "");
    connection.isConnected = conn.connections[0].readyState;
    console.log("new connection: " + connection.isConnected);
    return connection.isConnected == 1
      ? true
      : new Error("DB connection failed");
  } catch (err) {
    console.log(err);
    return false;
  }
}
