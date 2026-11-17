# Visual Style

**System A below is the brand standard going forward.** It is the current,
in-house objection-card system, confirmed against the live posts. System B is
retained as history — earlier outsourced work, not the direction.

---

## System A — Objection cards (current standard)

Square 1:1 (1080×1080), flat vector, text-only. No photography.

### Palette

**Confirmed values, 2026-08-21** — supplied by the brand owner, not sampled or
estimated. These are authoritative; use them exactly.

| Role | Hex | Used for |
|---|---|---|
| Ground | `#0B1B3D` dark navy | full background |
| Ground overlay | `#13264F` | the diagonal geometric block, top-right corner only |
| Accent | `#DCA43B` gold | top accent bar, double chevron, "THE ANSWER" label, the answer text |
| Primary text | `#FFFFFF` | the quote text, company name |
| Muted | `#9AA3B2` blue-grey | the whole `OBJECTION 01 / WHAT HR DIRECTORS ASK` subtitle, hairlines, credential line |

Two-color discipline: **white asks, gold answers.** The objection is always
white; the reframe is always gold. That contrast is the whole idea — don't
invert it or introduce a third text color.

**The subtitle is one flat tone.** An earlier build rendered the `OBJECTION 07`
half brighter than `WHAT HR DIRECTORS ASK`; that was wrong. The entire eyebrow
line is `#9AA3B2`.

### Layout, top to bottom

1. **Short thick gold rule**, top-left — roughly 120 px wide, a tick mark
2. **Eyebrow**: `OBJECTION 06  /  WHAT HR DIRECTORS ASK` — small, heavily
   letterspaced caps, entirely in `#9AA3B2`, separated by a spaced slash
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

Geometric sans, Montserrat (or Montserrat-class). Two weights only: **Bold** for
the quote, answer, and company name; **Medium/Regular** with wide tracking for
the eyebrow, "THE ANSWER", and credential line.

Montserrat 500/600/700/800 ships in `content/visuals/fonts/` under the SIL Open
Font License, so cards render identically anywhere with no network call. The
typeface is still the one item not confirmed by the brand owner — if the
original cards use a different face, swap the four files and re-run the builder;
nothing else changes.

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

## System D — Stat cards (current, for LinkedIn)

The evidence series. Same furniture as System A — tick rule, numbered eyebrow,
chevron divider, full credential block — with the figure carrying the card.

Built from `stats-cards.json`: `node content/visuals/build-cards.js stat`

```
▬
THE NUMBER 01  /  WHAT THE DATA SAYS

76%                          ← oversized, gold
of employees hit burnout     ← white
at work at least sometimes.

⌃⌃ ————————————————
The average wellness         ← gold
program reaches 8% of them.

SOURCE: GALLUP               ← muted
```

**The source line is part of the template, not optional.** A brand whose
differentiator is "I sell engagement reporting" cannot post an uncited number,
and putting the citation on the card means it survives being screenshotted and
reshared without the caption.

**The figure is gold, not white** — the one place System D inverts System A.
Here the number is the assertion and the white claim explains it; the gold
implication below still lands the argument. Only figures from
`content/reference/stats.md` may be used.

## System C — Quote cards (current, for social)

The consumer sibling of System A. Same brand family, different job: these run on
Facebook and Instagram in the individual voice, where the reader is a person
managing their own health, not an HR director evaluating a purchase.

Built from `quotes.json` by the same script:
`node content/visuals/build-cards.js quote`

### What carries over from System A
Navy ground `#0B1B3D`, corner overlay `#13264F`, gold `#DCA43B`, muted `#9AA3B2`,
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

**Pick the system from the post's voice, not its topic:**

- LinkedIn / buyer voice, answering an objection → **System A**. Add an entry to
  `cards.json` and run `node content/visuals/build-cards.js objection`.
- LinkedIn / buyer voice, leading with a statistic → **System D**. Add an entry
  to `stats-cards.json` and run `node content/visuals/build-cards.js stat`.
  Never invent a figure or a source.
- Facebook / Instagram / individual voice → **System C**. Add an entry to
  `quotes.json` and run `node content/visuals/build-cards.js quote`.
- **System B** only if a post is deliberately in the retired reflective
  register — say so when proposing it.

These are built in code, not generated. An image model approximates type; the
browser renders it exactly and reproducibly. Don't spend generation credits on
a fixed typographic layout.

The palette is confirmed — no caveats needed. Never substitute a colour that
isn't in the table above.
