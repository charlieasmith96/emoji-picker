import { Emoji } from "../interfaces";
import { StatefulMenu } from "baseui/menu";

export const EmojiList: React.FC<{
  emojis: Emoji[];
  onItemSelect: (item: Emoji) => void;
}> = ({ emojis, onItemSelect }) => {
  return (
    <StatefulMenu
      items={emojis}
      onItemSelect={(item) => onItemSelect(item.item)}
      overrides={{
        List: {
          style: {
            maxHeight: "200px",
            width: "300px",
          },
        },
        Option: {
          props: {
            getItemLabel: (item: Emoji) => {
              const emojiDisplay = `${item.emoji} ${item.description}`;
              return emojiDisplay;
            },
          },
        },
      }}
    />
  );
};
