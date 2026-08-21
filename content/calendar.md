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

## September 2026 — Facebook + Instagram

Cadence: 3x/week (Tue/Thu/Sat), interleaved with LinkedIn so something ships
six days a week without two posts landing the same day.

**Written in the individual voice, not the buyer voice.** These are not
translations of the LinkedIn posts — same underlying idea where one exists,
rewritten for a reader who is a person managing their own health, not an HR
director evaluating a purchase. Two run standalone because the LinkedIn post
that week (committed budget, leadership sign-off) has no honest consumer
analogue; forcing one would have produced filler.

Format per the brief is identical for both platforms — short caption plus a
graphic — so each draft serves both.

| Date | Day | Title / Hook | Draft | Pairs with (LinkedIn) |
|------|-----|--------------|-------|----------------------|
| Sep 2 | Tue | You don't need an hour | `fb-no-hour-social.md` | Sep 1 — no time |
| Sep 4 | Thu | Burnout doesn't announce itself | `fb-burnout-quiet-social.md` | Sep 3 — 76% |
| Sep 6 | Sat | What NOW TIME actually means | `fb-now-time-meaning-social.md` | Sep 5 — No Other Way |
| Sep 9 | Tue | You don't have to wait until it's bad | `fb-before-it-gets-bad-social.md` | Sep 8 — EAP |
| Sep 11 | Thu | Say it out loud | `fb-say-something-social.md` | Sep 10 — 42% silent |
| Sep 13 | Sat | Three questions for your own routine | `fb-three-questions-social.md` | Sep 12 — the audit |
| Sep 16 | Tue | The cheapest thing you can do | `fb-cheapest-thing-social.md` | standalone |
| Sep 18 | Thu | Working from home is quietly hard | `fb-working-from-home-social.md` | Sep 17 — remote |
| Sep 20 | Sat | Why it didn't stick last time | `fb-why-you-quit-social.md` | Sep 19 — 6–8% |
| Sep 23 | Tue | 60 seconds to reset | `fb-box-breathing-social.md` | standalone |
| Sep 25 | Thu | I answer my own messages | `fb-i-answer-my-own-social.md` | Sep 24 — one-person |
| Sep 27 | Sat | Marine. Coach. Founder. | `fb-marine-coach-founder-social.md` | Sep 26 — same theme |

### Notes on the social track

**No statistics.** Deliberately. The individual voice earns trust through
recognition, not evidence — "you're still hitting deadlines, you're just not
enjoying any of it" does the work a percentage would do on LinkedIn. This also
sidesteps the sourcing problem entirely on the channel where citations read
as stiff.

**Every post ends with a real question**, not a pitch. Only two mention the
program at all, and neither links out. The social track's job is reach and
warmth; LinkedIn carries the selling.

**Graphics still needed.** These are captions; the objection-card system is
wrong for this voice (it's a B2B sales asset). Simple quote cards in the same
palette would work — spec them with `/generate-visuals` before scheduling.

## Full-month view

Six posting days a week: LinkedIn Mon/Wed/Fri, Facebook + Instagram Tue/Thu/Sat.
24 posts total, 6 objection cards, both voices covered.

## Before publishing

- [ ] Confirm the 6–8% participation figure's primary source, or soften to
      "single-digit participation" (see `content/reference/stats.md`)
- [ ] Confirm Pilot Sprint pricing is still $1,500–$2,500 before Sep 15 runs
- [ ] Sample exact brand hexes and typeface, then re-run `build-cards.js`
