/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'

import { FancyInput } from "../FancyInput"

test('search, selects and inserts smiling face, whilst hiding popover', async () => {
    render(<FancyInput placeholder="test-placeholder" />)
  
    const input = await screen.queryByRole('textbox') as HTMLInputElement;

    await userEvent.type(input, 'dog :smile')

    const firstOption = await screen.queryByRole('option', { name: /grinning face with smiling eyes/i });

    await userEvent.click(firstOption as HTMLElement);

    expect(firstOption).not.toBeInTheDocument();

    expect(input).toHaveDisplayValue('dog 😄');
  })

  test('should hide popover on left arrow press', async () => {
    render(<FancyInput placeholder="test-placeholder" />)
  
    const input = await screen.queryByRole('textbox') as HTMLInputElement;

    await userEvent.type(input, 'dog :smile')

    const firstOption = await screen.queryByRole('option', { name: /grinning face with smiling eyes/i });

    await userEvent.type(input, '{arrowleft}')

    expect(firstOption).not.toBeInTheDocument();
  })

  test('should hide popover on right arrow press', async () => {
    render(<FancyInput placeholder="test-placeholder" />)
  
    const input = await screen.queryByRole('textbox') as HTMLInputElement;

    await userEvent.type(input, 'dog :smile')

    const firstOption = await screen.queryByRole('option', { name: /grinning face with smiling eyes/i });

    await userEvent.type(input, '{arrowright}')

    expect(firstOption).not.toBeInTheDocument();
  })


  test('should hide popover on escape key press', async () => {
    render(<FancyInput placeholder="test-placeholder" />)
  
    const input = await screen.queryByRole('textbox') as HTMLInputElement;

    await userEvent.type(input, 'dog :smile')

    const firstOption = await screen.queryByRole('option', { name: /grinning face with smiling eyes/i });

    await userEvent.type(input, '{escape}')

    expect(firstOption).not.toBeInTheDocument();
  })


