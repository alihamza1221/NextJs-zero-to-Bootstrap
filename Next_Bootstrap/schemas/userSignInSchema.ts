import { z } from "zod";

export const userSignUpSchema = z.object({
  identifier: z.string(),
  password: z.string(),
});
