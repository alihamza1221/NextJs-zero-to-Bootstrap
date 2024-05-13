import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

let UserModel;

try {
  UserModel = mongoose.model("User");
} catch {
  UserModel = mongoose.model("User", userSchema);
}

export default UserModel;
