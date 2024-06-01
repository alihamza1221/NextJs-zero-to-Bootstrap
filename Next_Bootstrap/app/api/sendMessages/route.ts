import UserModel from "@/model/UserModel";
import dbConnect from "@/lib/dbConnect";
import { Message } from "@/model/UserModel";

export async function POST(req: Request) {
  const { username, content }: { username: string; content: string } =
    await req.json();

  try {
    await dbConnect();
    const user = await UserModel.findOne({ username });
    if (!user) {
      return Response.json(
        {
          success: false,
          message: "User Not found",
        },
        { status: 500 }
      );
    }
    if (!user.isAcceptingMessages) {
      return Response.json(
        {
          success: false,
          message: "User doesn't allow messages",
        },
        { status: 500 }
      );
    }
    const curMessage: Message = {
      content: content,
      createdAt: new Date(),
    } as Message;
    user.messages.push(curMessage);
    await user.save();

    return Response.json(
      { success: true, message: "Message Sent" },
      { status: 200 }
    );
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
