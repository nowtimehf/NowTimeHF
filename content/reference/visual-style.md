# Visual Style

Two distinct graphic systems are in use. Match the system to the post's job —
don't blend them.

---

## System A — Objection cards (current, in-house)

Source: `01-classpass.png` … `06-free-trials.png`, paired with
`objection-crusher-pack.md`. Owned by the NowTimeHF account, ~60 KB each.

**The template is fixed and verified.** Text layout, read off the files:

```
OBJECTION 0N/ WHAT HR DIRECTORS ASK

"[the objection, in quotation marks]"

THE ANSWER

[one-line reframe]

NOW TIME HEALTH + FITNESS
USMC Veteran-Owned
SDVOSB Certified            nowtimehf.com
```

Two confirmed instances:

| File | Objection | Answer |
|---|---|---|
| `01-classpass.png` | "Why not just give everyone ClassPass?" | Access isn't the problem. Accountability is. |
| `03-roi.png` | "How do I know the actual ROI?" | I don't sell engagement promises. I sell engagement reporting. |

Notes:
- **Numbered series** (`OBJECTION 01/`, `03/`) — reads as a collectable set,
  which is why they work as a rotating campaign.
- **Every card carries the credential block**: company name, USMC Veteran-Owned,
  SDVOSB Certified, nowtimehf.com. The trust markers are in the graphic, not
  left to the caption.
- The answer line on the card is the same line that anchors the post — the card
  is the post's thesis, extracted.
- Auto-labels ("Website; Mobile device; Text; Screenshot") suggest a clean,
  flat, text-forward design rather than photography.

**To extend the series**, follow the template exactly and keep the numbering
sequential. The structure is the brand asset here.

---

## System B — Pull-quote posters (2025–early 2026, outsourced)

Source: the graphics attached to the 52 posts in `past-posts.md`. PNG, ~1.3 MB,
produced by an outside content writer (an external contractor, not in-house).

- **Type:** one line lifted near-verbatim from the caption, set large in **all
  caps** over workplace/office imagery.
- **The quote is the payoff line, not the hook.** Confirmed — the Feb 10 post's
  card uses the caption's resolution:

  > CARE AT WORK DOESN'T MEAN LOWERING EXPECTATIONS OR DOING LESS. IT MEANS
  > HELPING PEOPLE WORK IN A WAY THAT DOESN'T DRAIN THEM OVER TIME.

- No credential block — these are mood pieces, not sales assets.
- Produced externally, so matching this style in-house may not be practical.

---

## Still unverified (both systems)

Not readable from the files available — most PNGs returned no extractable text,
and the images themselves can't be viewed from this toolchain:

- Exact color palette, and whether it's consistent
- Typeface
- Logo mark (as opposed to the wordmark, which System A clearly carries)
- Aspect ratio — LinkedIn-native 1200×627 vs. square

**To close these:** commit 2–3 representative PNGs into this folder, or paste
hex values and the font name.

## Working rule for /generate-visuals

- Sales/objection content → **System A**. Follow the template above verbatim,
  including the credential block. This is safe to generate.
- Reflective/organic content → **System B**. Propose an all-caps pull-quote from
  the caption's payoff line over workplace imagery.
- In either case, state that palette and typeface are unverified rather than
  inventing brand colors.
