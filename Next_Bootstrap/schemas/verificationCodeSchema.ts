import { z } from "zod";
import { usernameValidation } from "./userSignUpSchema";

export const verificationCodeSchema = z.object({
  code: z.string().min(3, { message: "Code must be 3 characters long" }),
});
export const verifyUserSchema = z.object({
  username: usernameValidation,
  verificationCode: verificationCodeSchema,
});
