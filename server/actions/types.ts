import type { ZodSchema, z } from "zod";
import type { Promisable } from "../utils/types";

export type ActionHandlerOptions<TSchema extends ZodSchema> = {
  data: z.infer<TSchema>;
};

export type ActionHandler<
  TSchema extends ZodSchema = ZodSchema,
  TData = unknown,
> = (options: ActionHandlerOptions<TSchema>) => Promisable<TData | null>;
