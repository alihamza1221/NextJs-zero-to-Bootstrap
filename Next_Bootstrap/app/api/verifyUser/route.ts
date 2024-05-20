import UserModel from "@/model/UserModel";
import dbConnect from "@/lib/dbConnect";
import { verificationCodeSchema } from "@/schemas/verificationCodeSchema";

export async function POST(req: Request) {
  try {
    const { username, verificationCode } = await req.json();
    const res = verificationCodeSchema.safeParse({ code: verificationCode });
    if (!res.success) throw new Error(res.error.toString());
    await dbConnect();
    const user = await UserModel.findOne({ username });
    if (!user) throw new Error("User not found");
    const isValid = user.verificationCode === verificationCode;
    const isExpired = user.verificationCodeExpiration < new Date();

    if (isValid && !isExpired) {
      user.isVerified = true;
      await user.save();
      return Response.json(
        { success: true, message: "User verified" },
        { status: 200 }
      );
    }

    throw new Error("Invalid or expired verification code");
  } catch (err: any) {
    console.log(err.message);
    return Response.json(
      { success: false, message: err.message },
      { status: 400 }
    );
  }
}
