# Visual Style

**System A below is the brand standard going forward.** It is the current,
in-house objection-card system, confirmed against the live posts. System B is
retained as history — earlier outsourced work, not the direction.

---

## System A — Objection cards (current standard)

Square 1:1 (1080×1080), flat vector, text-only. No photography.

### Palette

| Role | Approx. hex | Used for |
|---|---|---|
| Ground | `#0B1A2E` deep navy | full background |
| Ground highlight | `#132840` | subtle diagonal wedge, top-right corner only |
| Accent | `#C9A227` brass/gold | top rule, chevron mark, "THE ANSWER" label, the answer text |
| Primary text | `#FFFFFF` | the objection quote, company name |
| Muted | `#8FA3BF` slate blue | "WHAT HR DIRECTORS ASK", hairlines, credential line |

Two-color discipline: **white asks, gold answers.** The objection is always
white; the reframe is always gold. That contrast is the whole idea — don't
invert it or introduce a third text color.

> Hexes are read by eye off the rendered PNGs, not sampled from source. Close
> enough to design against; confirm from the original file if you need an exact
> match for print.

### Layout, top to bottom

1. **Short thick gold rule**, top-left — roughly 120 px wide, a tick mark
2. **Eyebrow**: `OBJECTION 06  /  WHAT HR DIRECTORS ASK` — small, heavily
   letterspaced caps. Number in white, the rest in slate blue, separated by a
   spaced slash
3. **The objection** — large bold white, in curly quotes, sentence case, wraps
   to 2 lines
4. **Divider band** — gold double-chevron (USMC rank insignia) at left, thin
   slate hairline running right to the margin
5. **`THE ANSWER`** — small letterspaced gold caps
6. **The answer** — large bold gold, sentence case, 2–3 lines
7. **Deliberate empty space** — roughly the bottom quarter stays blank. Don't
   fill it; the breathing room is what makes these read as confident
8. **Slate hairline**, full width
9. **Footer** — `NOW TIME HEALTH + FITNESS` in white bold caps, then
   `USMC Veteran-Owned · SDVOSB Certified · nowtimehf.com` in slate, separated
   by middots

Generous left margin, consistent across every element. Everything is
left-aligned — nothing centered.

### Typography

Geometric sans throughout, Montserrat-like (double-story `a`, straight-tail
`y`, circular `o`). Two weights only: **Bold** for the quote, answer, and
company name; **Medium/Regular** with wide tracking for the eyebrow, "THE
ANSWER", and credential line. Confirm the exact face with whoever built the
template before commissioning new cards.

### Card copy is tighter than the source pack

The cards compress the lines from `objection-crusher-pack.md`. This is an
editorial rule, not drift — **the card gets the shortest version that survives.**

| # | Card says | Source pack says |
|---|---|---|
| 02 | You don't have a benefits problem. You have a usage problem. | You don't have a *fitness benefit* problem… |
| 04 | Most wellness perks don't touch burnout. They decorate it. | Most *corporate wellness doesn't* touch burnout. *It decorates* it. |
| 05 | Vague goals protect vendors. Specific goals protect you. | (same, but the card's *question* is trimmed to "How do you even define success?") |
| 06 | A free app is a tool. You're hiring the contractor. | A free app is a tool. *I'm a contractor.* |

Note 06 flips to second person on the card — "**you're** hiring the contractor"
puts the reader in the sentence. Worth copying.

### Confirmed set

| # | File | Objection | Answer |
|---|---|---|---|
| 01 | `01-classpass.png` | "Why not just give everyone ClassPass?" | Access isn't the problem. Accountability is. |
| 02 | `02-gym-membership.png` | "Why not just get gym memberships?" | You don't have a benefits problem. You have a usage problem. |
| 03 | `03-roi.png` | "How do I know the actual ROI?" | I don't sell engagement promises. I sell engagement reporting. |
| 04 | `04-burnout.png` | "How does this actually fix burnout?" | Most wellness perks don't touch burnout. They decorate it. |
| 05 | `05-success.png` | "How do you even define success?" | Vague goals protect vendors. Specific goals protect you. |
| 06 | `06-free-trials.png` | "Other apps have free trials. Why you?" | A free app is a tool. You're hiring the contractor. |

### Extending the series

Keep numbering sequential (`OBJECTION 07 /` next). The eyebrow, chevron,
footer, and palette are fixed furniture — only the two text blocks change. The
constraint is the point: a scrolling HR director should recognize card 09 as
part of the same set as card 01.

---

## System C — Quote cards (current, for social)

The consumer sibling of System A. Same brand family, different job: these run on
Facebook and Instagram in the individual voice, where the reader is a person
managing their own health, not an HR director evaluating a purchase.

Built from `quotes.json` by the same script:
`node content/visuals/build-cards.js quote`

### What carries over from System A
Navy ground `#0B1A2E`, corner wedge, brass gold `#C9A227`, slate `#8FA3BF`,
Montserrat in two weights, 1080×1080, left alignment, generous negative space —
and critically, **white states, gold lands.** The opening line is white; the
line that turns it is gold. Same logic as white-asks/gold-answers.

### What changes, and why
| | System A (objection) | System C (quote) |
|---|---|---|
| Top mark | gold tick bar + numbered eyebrow | gold chevron alone |
| Series number | yes, sequential | none — these aren't a set to collect |
| Labels | "THE ANSWER" | none |
| Credential line | USMC · **SDVOSB** · nowtimehf.com | USMC · nowtimehf.com |
| Text anchor | flows from the top | **bottom-anchored** |

**SDVOSB is dropped on purpose.** It's a federal procurement credential. It
earns trust with an HR director evaluating a vendor and means nothing to an
individual on Facebook — carrying it there is noise that makes a warm post look
like a capability statement. USMC Veteran-Owned stays: that's identity, not
paperwork.

**The quote block is bottom-anchored**, not centered. Every card in the set ends
its text at the same baseline regardless of length, so a grid view or a scroll
reads as one system. Centering made short quotes float and long ones sit low.

### Sizing
Defaults are 74px for the white line, 54px for the gold. Long quotes override
downward per-card in `quotes.json` (`lineSize` / `landSize`). The builder warns
if text passes 880px — reduce the override rather than eating the lower space.

---

## System B — Pull-quote posters (2025–early 2026, superseded)

The graphics attached to the 52 posts in `past-posts.md`. PNG ~1.3 MB, produced
by an external contractor, not in-house.

- One line lifted near-verbatim from the caption, set large in all caps over
  workplace/office photography
- The quote is the caption's **payoff line, not its hook**
- No credential block — mood pieces, not sales assets

Retained for reference only. New work follows System A.

---

## Rule for /generate-visuals

Default to **System A** and follow the spec above exactly — palette, layout
order, two-weight type, white-asks/gold-answers. State that hex values are
eyeballed approximations if exact brand matching matters.

Only use System B if a post is explicitly reflective/organic in the
`past-posts.md` register, and say so when proposing it.
