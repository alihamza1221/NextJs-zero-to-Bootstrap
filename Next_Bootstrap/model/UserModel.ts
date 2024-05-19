import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  content: string;
  createdAt: Date;
}

const messageSchema: Schema<Message> = new Schema({
  content: { type: String, required: [true, "Pleas add some content!"] },
  createdAt: { type: Date, required: true, default: Date.now },
});

export interface User extends Document {
  email: string;
  username: string;
  password: string;
  verificationCode: string;
  verificationCodeExpiration: Date;
  isVerified: boolean;
  isAcceptingMessages: boolean;
  messages: Message[];
}
const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

const UserSchema: Schema<User> = new Schema({
  email: {
    type: String,
    required: [true, "Pleas add some content!"],
    unique: true,
    trim: true,
    lowercase: true,
    match: [emailRegex, "Please fill a valid email address"],
  },
  username: { type: String, required: true, trim: true, minlength: 2 },
  password: {
    type: String,
    required: [true, "username can't be empty"],
    trim: true,
    minlength: 2,
  },
  verificationCode: {
    type: String,
    required: [true, "verification code is required"],
  },
  verificationCodeExpiration: {
    type: Date,
    required: [true, "verification code expiry is required"],
  },
  isVerified: { type: Boolean, default: false, required: true },
  isAcceptingMessages: { type: Boolean, default: true },
  messages: [messageSchema],
});

//defining model
const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
