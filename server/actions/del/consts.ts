import { z } from "zod";

export const delActionSchema = z
  .object({
    keys: z.array(z.string()),
  })
  .or(
    z.object({
      key: z.string(),
    }),
  );
