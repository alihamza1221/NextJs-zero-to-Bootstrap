import UserModel from "@/model/UserModel";
import dbConnect from "@/lib/dbConnect";

export const POST = async (req: Request) => {
  const { username, isAcceptingMessages } = await req.json();
  if (!username) {
    return Response.json(
      { success: false, message: "username is required" },
      { status: 400 }
    );
  }
  try {
    await dbConnect();
    const user = await UserModel.findOne({
      username: username,
      isVerified: true,
    });

    if (!user) {
      return Response.json(
        { success: false, message: "User Not Found" },
        { status: 404 }
      );
    }
    if (user.isAcceptingMessages === isAcceptingMessages)
      return Response.json(
        { success: true, message: "No Change in Message Acceptance" },
        { status: 200 }
      );
    user.isAcceptingMessages = isAcceptingMessages;
    await user.save();
    return Response.json(
      { success: true, message: "Message Acceptance Updated" },
      { status: 200 }
    );
  } catch (err: any) {
    return Response.json(
      { success: false, message: err.message },
      { status: 400 }
    );
  }
};
