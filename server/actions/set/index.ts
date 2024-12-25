import { entriesDictionary } from "../../entries-dictionary";
import type { ActionHandler } from "../types";
import type { setActionSchema } from "./consts";

export const setAction: ActionHandler<typeof setActionSchema> = ({ data }) => {
  const { key, value, expiresIn } = data;

  // if value already added on dictionary and isnt persistent,
  // clear its timeout so it doenst get erased
  const current = entriesDictionary.get(key);
  if (current?.timeoutId) {
    clearTimeout(current.timeoutId);
  }

  // add a new timeout to remove the value after
  // the time user submitted
  const createdAt = new Date();
  let timeoutId: number | undefined = undefined;
  if (expiresIn) {
    timeoutId = setTimeout(() => {
      entriesDictionary.delete(key);
    }, expiresIn) as unknown as number;
  }

  entriesDictionary.set(key, {
    value: value,
    createdAt,
    timeoutId,
    expiresIn,
  });

  return null;
};
