import { Input } from "baseui/input";
import { EmojiSearchPopover } from "./EmojiSearchPopover";
import { useEffect, useMemo, useState } from "react";
import { checkIfStringContains2AlphanumericCharactersAfterColon } from "../utils/regular-expression-utils";
import { Emoji } from "../interfaces";

interface FancyInputProps {
  placeholder: string;
}

function FancyInput({ placeholder }: FancyInputProps) {
  const [value, setValue] = useState("");
  const [shouldShowEmojiSearchPopover, setShouldShowEmojiSearchPopover] =
    useState(false);

  const regexMatches = useMemo(() => {
    return checkIfStringContains2AlphanumericCharactersAfterColon(value) ?? [];
  }, [value]);

  useEffect(() => {
    if (regexMatches.length > 0) {
      setShouldShowEmojiSearchPopover(true);
    } else {
      setShouldShowEmojiSearchPopover(false);
    }
  }, [regexMatches]);

  const firstRegexMatch = regexMatches[0] ?? "";
  const emojiSearchQuery = firstRegexMatch.replace(":", "");

  const onSelect = (item: Emoji) => {
    setValue(value.replace(firstRegexMatch, item.emoji));
  };

  return (
    <div>
      <Input
        placeholder={placeholder}
        onKeyDown={(event) => {
          if (
            event.key === "ArrowLeft" ||
            event.key === "ArrowRight" ||
            event.key === "Escape"
          ) {
            setShouldShowEmojiSearchPopover(false);
          }
        }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {shouldShowEmojiSearchPopover && (
        <EmojiSearchPopover
          searchQuery={emojiSearchQuery}
          onSelect={onSelect}
        />
      )}
    </div>
  );
}

export { FancyInput };
