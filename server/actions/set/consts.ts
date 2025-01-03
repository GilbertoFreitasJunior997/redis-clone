import { z } from "zod";

export const setActionSchema = z.object({
  key: z.string(),
  expiresIn: z.number().optional(),
  value: z.any().refine((data) => data !== undefined && data !== null),
});
