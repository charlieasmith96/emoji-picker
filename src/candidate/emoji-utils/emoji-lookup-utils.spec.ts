import { lookupEmojisBasedOnAliasAndTagAndDescription } from "./emoji-lookup-utils";
import { Emoji } from "../interfaces";

describe("emoji-lookup-utils", () => {
  // arrange
  const emojis: Emoji[] = [
    {
      emoji: "😀",
      description: "grinning face",
      aliases: ["grinning"],
      tags: ["smile", "happy"],
    },
    {
      emoji: "😕",
      description: "confused face",
      aliases: ["confused"],
      tags: ["lost", "malcontent", "bored"],
    },
    {
      emoji: "😵",
      description: "dizzy face",
      aliases: ["dead"],
      tags: ["shocked", "bored"],
    },
  ];
  describe("searchEmojisByAlias", () => {
    it("should return an array of emojis that match the alias", () => {
      // act
      const result = lookupEmojisBasedOnAliasAndTagAndDescription(
        emojis,
        "confused"
      );

      // assert
      expect(result).toHaveLength(1);
      expect(result).toEqual([
        {
          emoji: "😕",
          description: "confused face",
          aliases: ["confused"],
          tags: ["lost", "malcontent", "bored"],
        },
      ]);
    });

    it("should return an empty list when no emojis match the alias", () => {
      // act
      const result = lookupEmojisBasedOnAliasAndTagAndDescription(
        emojis,
        "perplexed"
      );

      // assert
      expect(result).toHaveLength(0);
    });

    it("should return an array of emojis that match the description", () => {
      // act
      const result = lookupEmojisBasedOnAliasAndTagAndDescription(
        emojis,
        "face"
      );

      // assert
      expect(result).toHaveLength(3);
      expect(result).toEqual(emojis);
    });

    it("should return an array of emojis that match the tag", () => {
      // act
      const result = lookupEmojisBasedOnAliasAndTagAndDescription(
        emojis,
        "bored"
      );

      // assert
      expect(result).toHaveLength(2);
      expect(result).toEqual([
        {
          emoji: "😕",
          description: "confused face",
          aliases: ["confused"],
          tags: ["lost", "malcontent", "bored"],
        },
        {
          emoji: "😵",
          description: "dizzy face",
          aliases: ["dead"],
          tags: ["shocked", "bored"],
        },
      ]);
    });
  });
});
