import { entriesDictionary } from "../../entries-dictionary";
import type { ActionHandler } from "../types";
import type { delActionSchema } from "./consts";

export const delAction: ActionHandler<typeof delActionSchema> = ({ data }) => {
  const keys = "keys" in data ? data.keys : [data.key];

  let removeCount = 0;
  for (const key of keys) {
    const hasRemoved = entriesDictionary.delete(key);

    if (hasRemoved) {
      removeCount++;
    }
  }

  return removeCount;
};
