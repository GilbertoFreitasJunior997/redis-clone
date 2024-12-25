import { ZodSchema, z } from "zod";
import type { ActionHandler } from "../../actions/types";
import type { actionBodySchema } from "./consts";

export type ActionType = z.infer<typeof actionBodySchema>["action"];

export type ActionCallerActions = {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  action: ActionHandler<any>;
  type: ActionType;
  schema: ZodSchema;
};
