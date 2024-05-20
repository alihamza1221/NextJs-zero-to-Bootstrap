import { z } from "zod";

export const verificationCodeSchema = z.object({
  code: z.string().min(3, { message: "Code must be 3 characters long" }),
});
