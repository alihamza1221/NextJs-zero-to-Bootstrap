import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/UserModel";
import { usernameValidation } from "@/schemas/userSignUpSchema";
import { z } from "zod";

const usernameQueryValidation = z.object({
  username: usernameValidation,
});

export async function GET(req: Request): Promise<any> {
  try {
    const { searchParams } = new URL(req.url);
    const queryParam = {
      username: searchParams.get("username"),
    };
    const res = usernameQueryValidation.safeParse(queryParam);
    if (!res.success) {
      return Response.json(
        {
          success: false,
          message: res.error.format().username?._errors || [],
        },
        { status: 400 }
      );
    } else {
      await dbConnect();
      const { username } = res.data;
      const user = await UserModel.findOne({ username, isVerified: true });
      if (user) {
        return Response.json(
          {
            success: false,
            message: "Username already exists",
          },
          { status: 400 }
        );
      }
    }
  } catch (err: any) {
    console.log(err.message);
    return Response.json(
      {
        success: false,
        message: err.message,
      },
      { status: 500 }
    );
  }
  return Response.json(
    {
      success: true,
      message: "Username available",
    },
    { status: 200 }
  );
}
