import { z } from "zod";

export const existsActionSchema = z
  .object({
    keys: z.array(z.string()),
  })
  .or(
    z.object({
      key: z.string(),
    }),
  );
