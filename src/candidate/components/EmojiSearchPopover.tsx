import { EmojiList } from "./EmojiList";
import { searchEmojis } from "../emoji-utils/emoji-lookup-utils";
import { styled } from "styletron-react";
import { Emoji } from "../interfaces";

export const EmojiSearchPopover: React.FC<{ searchQuery?: string, onSelect: (item: Emoji) => void; }> = ({
  searchQuery,
  onSelect
}) => {
  const emojis = searchEmojis(searchQuery);

  return (
    <EmojiListContainer>
      <EmojiList emojis={emojis} onItemSelect={onSelect} />
    </EmojiListContainer>
  );
};

const EmojiListContainer = styled("div", {
  position: "absolute",
  zIndex: 1000,
});
