import type { ZodSchema, z } from "zod";
import type { ParseBodyOptions } from "./types";

export const parseBody = async <TSchema extends ZodSchema>({
  raw,
  schema,
}: ParseBodyOptions<TSchema>): Promise<z.infer<TSchema>> => {
  try {
    const data = schema.safeParse(raw);

    return data.data;
  } catch {
    throw new Error("Invalid request body");
  }
};
