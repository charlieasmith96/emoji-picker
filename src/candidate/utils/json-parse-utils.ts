import { Emoji } from "../interfaces";
import emojis from "../json/emojis.json";

export const loadEmojisJsonFile = (): Emoji[] => {
  return JSON.parse(JSON.stringify(emojis)) as Emoji[];
};
