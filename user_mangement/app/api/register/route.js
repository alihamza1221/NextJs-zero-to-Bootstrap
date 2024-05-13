import { NextResponse } from "next/server";
import UserModel from "@/app/lib/db/userModel";
import bcrypt from "bcrypt";
import connectDB from "@/app/lib/db/connectDB";

export async function POST(req, res) {
  const { username, email, password, confirmPassword } = await req.json();
  console.log("api/register/....", username, email, password, confirmPassword);
  if (!username || !email || !password || !confirmPassword) {
    return new NextResponse(
      JSON.stringify({ error: "All fields are required" }, { status: 400 })
    );
  }
  if (password !== confirmPassword) {
    return new NextResponse(
      JSON.stringify({ error: "Passwords do not match" }, { status: 400 })
    );
  }
  await connectDB();
  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    return new NextResponse(
      JSON.stringify({ error: "User already exists" }, { status: 400 })
    );
  }
  const hashedPass = await bcrypt.hash(password, 10);
  try {
    const user = new UserModel({ username, email, password: hashedPass });
    await user.save();
    return new NextResponse(
      JSON.stringify({ message: "User created successfully" }, { status: 200 })
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: error.message }, { status: 400 })
    );
  }
}
