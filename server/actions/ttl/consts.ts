import { z } from "zod";

export const ttlActionSchema = z.object({
  key: z.string(),
});
