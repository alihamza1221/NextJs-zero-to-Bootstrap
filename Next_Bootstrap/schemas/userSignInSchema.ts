import { z } from "zod";

export const userSignInSchema = z.object({
  identifier: z.string(),
  password: z.string(),
});
