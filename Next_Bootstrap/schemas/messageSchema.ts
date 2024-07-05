import { z } from "zod";

export const messageSchema = z.object({
  message: z
    .string()
    .min(2, { message: "Message must be at least 2 character long" })
    .max(100, {
      message: "Message must be at most 100 characters long",
    }), //
});
