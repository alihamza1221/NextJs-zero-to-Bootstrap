import UserModel from "@/model/UserModel";
import { NextApiRequest, NextApiResponse } from "next";
import sendVerificationEmail from "@/helpers/sendVerificationEmail";
import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export default async function POST(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  await dbConnect();
  const { username, email, password } = req.body;
  try {
    const existingUserAlreadyVerified = await UserModel.findOne({
      username,
      isVerified: true,
    });
    if (existingUserAlreadyVerified) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "username already exists",
      });
    }
    const existUserByEmail = await UserModel.findOne({ email });
    const verificationCode = Math.random().toString(36).substring(7);
    const hashedPassword = await bcrypt.hash(password, 10);
    const expiryDate = new Date();
    expiryDate.setHours(expiryDate.getHours() + 1);

    if (existUserByEmail) {
      if (existUserByEmail.isVerified) {
        return res.status(400).json({
          success: false,
          status: 400,
          message: "User already exists",
        });
      } else {
        const updatedUser = await UserModel.findOneAndUpdate(
          { email },
          {
            username,
            password: hashedPassword,
            verificationCode,
            verificationCodeExpiration: expiryDate,
          },
          { new: true }
        );
      }
    } else {
      const newUser = new UserModel({
        username,
        email,
        password: hashedPassword,
        verificationCode,
        verificationCodeExpiration: expiryDate,
      });
      const res = await newUser.save();
    }

    const emailResponse = await sendVerificationEmail({
      email,
      username,
      verificationCode,
    });
    if (emailResponse.success) {
      return res.status(201).json(emailResponse.message);
    }
    throw new Error(emailResponse.message?.toString());
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      status: 500,
      message: err?.message,
    });
  }
}
