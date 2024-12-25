import { z } from "zod";

export const getActionSchema = z.object({
  key: z.string(),
});
