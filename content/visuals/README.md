# Visuals

Specs live as `<slug>.md`. Cards that have been built live as
`<slug>.html` + `<slug>.png`.

## Rebuilding / making a new card

The objection-card system is a fixed typographic layout, so it is **built in
code, not generated**. An image model approximates type; a browser renders it
exactly, and the result is reproducible.

Requires Playwright once per machine:

```
npm install playwright          # Chromium itself is already on the image
node content/visuals/render-card.js content/visuals/<slug>.png
```

It renders the matching `<slug>.html` at 1080x1080. Copy an existing `<slug>.html`
as the starting point for a new card and edit the two text blocks.
Everything else (palette, tick rule, chevron, footer, spacing) is fixed
furniture and should not change. See `content/reference/visual-style.md`.

`fonts/` holds Montserrat 500/600/700/800 (SIL Open Font License), pulled from
Google Fonts so the card renders identically anywhere without a network call.

## Two gotchas, already fixed in the template

- Every direct child of `.inner` needs `flex:0 0 auto`. Without it the flex
  column shrinks items when content runs tall, and the gold tick rule silently
  collapses to nothing.
- Keep the bottom quarter empty. If the payoff text grows past two lines, reduce
  type size rather than eating that space — the emptiness is part of the design.
