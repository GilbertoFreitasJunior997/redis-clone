import { entriesDictionary } from "../../entries-dictionary";
import type { ActionHandler } from "../types";
import type { getActionSchema } from "./consts";

export const getAction: ActionHandler<typeof getActionSchema> = ({ data }) => {
  const { key } = data;

  const entry = entriesDictionary.get(key);

  return entry?.value ?? null;
};
