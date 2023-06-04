/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react"

import { EmojiList } from "../EmojiList"
import { emojiTestFixture } from "./test-fixture"

test('loads and displays all options', async () => {
    render(<EmojiList emojis={emojiTestFixture} onItemSelect={() => console.log('test')}/>)
  
  
    const firstOption = await screen.queryByRole('option', { name: /grinning face/i });
    const secondOption = await screen.queryByRole('option', { name: /confused face/i });
    const thirdOption = await screen.queryByRole('option', { name: /dizzy face/i });
  
    expect(firstOption).toBeTruthy();
    expect(secondOption).toBeTruthy();
    expect(thirdOption).toBeTruthy();
  })
