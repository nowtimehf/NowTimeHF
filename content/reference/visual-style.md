# Visual Style

Source: the graphics attached to each post in the social content calendar. Every
one of the 52 catalogued LinkedIn posts ships with a paired graphic — **a post
without a graphic is the exception, not the norm.**

## Verified pattern

- **Format:** PNG, roughly 1.3 MB, produced ahead of the post.
- **Type:** typographic pull-quote poster. The graphic carries one line lifted
  near-verbatim from the caption, set large in **all caps**, over a background
  image.
- **The quote is the payoff line, not the opening line.** Confirmed example —
  the Feb 10 "What care at work actually looks like" post uses the caption's
  resolution, not its hook:

  > CARE AT WORK DOESN'T MEAN LOWERING EXPECTATIONS OR DOING LESS. IT MEANS
  > HELPING PEOPLE WORK IN A WAY THAT DOESN'T DRAIN THEM OVER TIME.

- **Background:** workplace/office imagery behind the type (that example's
  auto-labels: office, writing, presentation, education, poster).
- **Produced by an outside content writer**, not in-house — the files are owned
  by `an external contractor`. Worth knowing before assuming new
  graphics can be generated in the same style.

## Not yet determined

The following could not be read from the files available — most graphics
returned no extractable text, and the images themselves aren't viewable from
this toolchain:

- Exact color palette and whether it's consistent across posts
- Typeface
- Logo placement and whether branding appears at all
- Aspect ratio (LinkedIn-native 1200×627 vs. square)

**To fill these in:** drop 3–4 representative PNGs into this folder, or paste
their hex colors and font name. `/generate-visuals` will otherwise improvise
these and produce graphics that don't match the existing library.

## Working rule for /generate-visuals

Until the gaps above are filled: propose a typographic pull-quote poster built on
the caption's payoff line in all caps, over workplace imagery. Flag explicitly
that palette and typeface are unverified rather than inventing brand colors.
