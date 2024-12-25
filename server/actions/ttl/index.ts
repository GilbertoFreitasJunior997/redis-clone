import { entriesDictionary } from "../../entries-dictionary";
import type { ActionHandler } from "../types";
import type { ttlActionSchema } from "./consts";

export const ttlAction: ActionHandler<typeof ttlActionSchema> = ({ data }) => {
  const { key } = data;

  const entry = entriesDictionary.get(key);
  if (!entry) {
    return -2;
  }
  if (entry.expiresIn === undefined) {
    return -1;
  }

  const elapsedTime = new Date().getTime() - entry.createdAt.getTime();
  const remainingTime = entry.expiresIn - elapsedTime;

  return remainingTime;
};
