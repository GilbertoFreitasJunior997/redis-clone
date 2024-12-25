import { z } from "zod";
import { delAction } from "../../actions/del";
import { delActionSchema } from "../../actions/del/consts";
import { existsAction } from "../../actions/exists";
import { existsActionSchema } from "../../actions/exists/consts";
import { getAction } from "../../actions/get";
import { getActionSchema } from "../../actions/get/consts";
import { setAction } from "../../actions/set";
import { setActionSchema } from "../../actions/set/consts";
import { ttlAction } from "../../actions/ttl";
import { ttlActionSchema } from "../../actions/ttl/consts";
import type { ActionCallerActions } from "./types";

export const actionBodySchema = z.object({
  action: z.enum(["get", "set", "ttl", "del", "exists"]),
});

export const routes: ActionCallerActions[] = [
  {
    action: getAction,
    type: "get",
    schema: getActionSchema,
  },
  {
    action: setAction,
    type: "set",
    schema: setActionSchema,
  },
  {
    action: ttlAction,
    type: "ttl",
    schema: ttlActionSchema,
  },
  {
    action: delAction,
    type: "del",
    schema: delActionSchema,
  },
  {
    action: existsAction,
    type: "exists",
    schema: existsActionSchema,
  },
];
