import { entriesDictionary } from "../../entries-dictionary";
import type { ActionHandler } from "../types";
import type { existsActionSchema } from "./consts";

export const existsAction: ActionHandler<typeof existsActionSchema> = ({
  data,
}) => {
  const keys = "keys" in data ? data.keys : [data.key];

  let existsCount = 0;
  for (const key of keys) {
    const hasEntry = entriesDictionary.has(key);

    if (hasEntry) {
      existsCount++;
    }
  }

  return existsCount;
};
