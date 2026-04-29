# ChatGPT Bingo

A tiny static bingo card generator for ChatGPT habits, quirks, and recurring crimes against clarity.

## What Ships

- `index.html`: the app
- `card-pool.js`: the default suggestion pool people can improve via pull request

## Local Use

Open `index.html` in a browser.

## Meaningful Contributions

Contribute in ways that improve the default card pool, not just increase its size.

- Add phrases that are broadly recognizable to ChatGPT users, not one-off private jokes.
- Prefer short entries that fit on a bingo tile without becoming unreadable.
- Keep the tone sharp, but avoid duplicates unless repetition is intentional for weighting.
- Use quote marks intentionally:
  - `"double quotes"` render as italic quote-style entries
  - `'single quotes'` render as code-style entries
  - plain text renders as bold default entries
- If you add a duplicate on purpose, mention that in the PR so it is not "cleaned up" by mistake.
- Avoid entries that depend on current events, private conversations, or obscure repo-specific context.

## How To Contribute Defaults

1. Edit `card-pool.js`.
2. Keep one entry per line inside the template string.
3. Preview the board locally in a browser.
4. Open a pull request explaining:
   - what you added
   - why it is broadly recognizable
   - whether any duplicates are intentional

## GitHub Pages

This repo is intended to publish directly with GitHub Pages from the `main` branch.
