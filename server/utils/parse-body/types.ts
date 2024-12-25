import type { ZodSchema } from "zod";

export type ParseBodyOptions<TSchema extends ZodSchema> = {
  raw: unknown;
  schema: TSchema;
};
