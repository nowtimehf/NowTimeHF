# Content Calendar

> Generated/updated by `/post-scheduler`. Each row is one scheduled post.

## September 2026 — LinkedIn

Cadence: 3x/week (Mon/Wed/Fri), per `brand/brief.md`. Twelve posts, all in the
LinkedIn buyer voice. Six carry an objection card; six run as native text.

Pillar balance: Program Design 4 · HR Leader Playbook 3 · Business Case 2 ·
Engagement Gap 2 · (Client Results 0 — see note).

| Date | Day | Pillar | Title / Hook | Draft | Card | CTA | Status |
|------|-----|--------|--------------|-------|------|-----|--------|
| Sep 1 | Mon | Engagement Gap | "We tried this. Nobody had the time." | `obj-07-no-time-linkedin.md` | `card-07-no-time.png` | TIME | scheduled |
| Sep 3 | Wed | Business Case | 76% burnout → 6–9 months of salary | `stat-76-percent-linkedin.md` | — | question | scheduled |
| Sep 5 | Fri | Program Design | NOW = No Other Way | `now-no-other-way-linkedin.md` | `now-no-other-way-card.png` | TIME | scheduled |
| Sep 8 | Mon | Program Design | "We already have an EAP." | `obj-08-eap-linkedin.md` | `card-08-eap.png` | DATA | scheduled |
| Sep 10 | Wed | HR Leader Playbook | Only 42% tell their manager | `42-percent-silent-linkedin.md` | — | question | scheduled |
| Sep 12 | Fri | HR Leader Playbook | The 3-question wellness audit | `three-question-audit-linkedin.md` | — | AUDIT | scheduled |
| Sep 15 | Mon | Program Design | "Our budget is already committed." | `obj-09-budget-linkedin.md` | `card-09-budget.png` | PILOT | scheduled |
| Sep 17 | Wed | Program Design | "We're fully remote. This won't work." | `obj-10-remote-linkedin.md` | `card-10-remote.png` | — | scheduled |
| Sep 19 | Fri | Engagement Gap | The 6–8% problem | `six-to-eight-percent-linkedin.md` | — | DATA | scheduled |
| Sep 22 | Mon | HR Leader Playbook | "Leadership won't sign off." | `obj-11-leadership-linkedin.md` | `card-11-leadership-buy-in.png` | METRICS | scheduled |
| Sep 24 | Wed | Business Case | "You're a one-person company." | `obj-12-one-person-linkedin.md` | `card-12-one-person.png` | — | scheduled |
| Sep 26 | Fri | Program Design | Marine. Coach. Founder. | `marine-coach-founder-linkedin.md` | — | soft | scheduled |

Drafts live in `content/drafts/`, cards in `content/visuals/`.

## Notes on this month

**Rhythm.** Objection cards land Monday, so the week opens on a sales argument
with a graphic. Wednesday and Friday run native text, which LinkedIn favours.
No two card posts run back to back.

**CTA spread.** Six keyword CTAs (TIME ×2, DATA ×2, AUDIT, PILOT, METRICS),
three open questions, two with no ask, one soft. Every post asking for a DM is
separated by at least one that doesn't — a feed that asks every time reads as a
funnel, not a person.

**Client Results has no posts this month, deliberately.** There is still no case
study data, client permission, or outcome numbers in the archive. Posting to
that pillar would mean inventing proof, which is the one thing this brand cannot
afford given it sells on measurement. **This is the highest-value gap to close:**
one real engagement report from one Pilot Sprint unlocks an entire pillar.

**Not yet scheduled: Facebook and Instagram.** The brief calls for 3x/week
there too, in the individual voice — a different job from these. Run
`/repurpose` on the Business Case and Playbook posts, or commission a separate
batch in the register modelled by `content/reference/content-week-1.md`.

## Before publishing

- [ ] Confirm the 6–8% participation figure's primary source, or soften to
      "single-digit participation" (see `content/reference/stats.md`)
- [ ] Confirm Pilot Sprint pricing is still $1,500–$2,500 before Sep 15 runs
- [ ] Sample exact brand hexes and typeface, then re-run `build-cards.js`
