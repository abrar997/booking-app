import { z } from "zod";

const schema = z.object({
  username: z.string().min(1, { message: "username is required" }),
  email: z.string().min(1, { message: "email is required" }),
  password: z
    .string()
    .min(6, { message: "password must be at least 6 characters" }),
});

export { schema };
