import { Emoji } from "../interfaces";
import { loadEmojisJsonFile } from "../utils";

export const searchEmojis = (
  searchQuery?: string,
  maximumNumberOfResults?: number
) => {

    if (!searchQuery || searchQuery?.length < 2) {
        return [];
    }

  const emojisSearchTarget = loadEmojisJsonFile();

  return lookupEmojisBasedOnAliasAndTagAndDescription(
    emojisSearchTarget,
    searchQuery
  ).splice(0, maximumNumberOfResults ?? 5);
};

export const lookupEmojisBasedOnAliasAndTagAndDescription = (
  emojisSearchTarget: Emoji[],
  searchQuery: string
) => {
  return emojisSearchTarget.filter((emoji: Emoji) => {
    return (
      emoji.aliases.includes(searchQuery) ||
      emoji.tags.includes(searchQuery) ||
      emoji.description.includes(searchQuery)
    );
  });
};
