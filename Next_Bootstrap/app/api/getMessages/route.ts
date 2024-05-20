import UserModel from "@/model/UserModel";
import dbConnect from "@/lib/dbConnect";
import { User } from "@/model/UserModel";
import { getServerSession } from "next-auth/next";
import { nextAuthOptions } from "../auth/[...nextauth]/nextAuth-Options";
import mongoose from "mongoose";

export async function GET(req: Request) {
  const session = await getServerSession(nextAuthOptions);
  if (!session || !session.user) {
    return Response.json(
      {
        success: false,
        message: "User Not Authorized",
      },
      { status: 400 }
    );
  }
  const user = session.user as User;
  const userID = new mongoose.Types.ObjectId(user._id);
  try {
    await dbConnect();
    const resUser = await UserModel.aggregate([
      { $match: { _id: userID } },
      { $unwind: "$messages" },
      { $sort: { "messages.createdAt": -1 } },
      { $group: { _id: "$_id", messages: { $push: "$messages" } } },
    ]);
    if (!resUser || resUser.length === 0) {
      return Response.json(
        {
          success: false,
          message: "No Messages Found",
        },
        { status: 500 }
      );
    }
    return Response.json({ success: true, messages: resUser[0].messages });
  } catch (err: any) {
    return Response.json(
      {
        success: false,
        message: err.message,
      },
      { status: 400 }
    );
  }
}
