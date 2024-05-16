import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  content: string;
  sendDate: Date;
}

const messageSchema: Schema<Message> = new Schema({
  content: { type: String, required: [true, "Pleas add some content!"] },
  sendDate: { type: Date, required: true, default: Date.now },
});

export interface User extends Document {
  email: string;
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
  password: { type: String, required: true, trim: true, minlength: 2 },
  verificationCode: {
    type: String,
    required: [true, "verification code is required"],
  },
  verificationCodeExpiration: {
    type: Date,
    required: [true, "verification code expiry is required"],
  },
  isVerified: { type: Boolean, default: false },
  isAcceptingMessages: { type: Boolean, default: true },
  messages: [messageSchema],
});

//defining model
const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);
