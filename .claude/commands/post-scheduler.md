---
description: Slot drafted posts into the content calendar with dates, platforms, and pillar balance
argument-hint: [optional: date range or constraints, e.g. "next 2 weeks, 3x/week on linkedin"]
---

Update `content/calendar.md` using the drafts in `content/drafts/`.

## Steps
1. Read `brand/brief.md` for each active platform's posting cadence.
2. Read `content/calendar.md` to see what's already scheduled (don't duplicate or silently overwrite existing rows).
3. List drafts in `content/drafts/` (check frontmatter `status:` — prefer `graded`/`ready` drafts over ungraded ones; flag ungraded drafts instead of scheduling them blind).
4. Parse `$ARGUMENTS` for constraints (date range, cadence override, specific platform). Default to the cadence in the brief and start from the next open slot after today.
5. Assign each eligible draft a date and platform, balancing content pillars across the period — don't schedule three posts from the same pillar back-to-back if others are available.

## Output
- Append the new rows to the table in `content/calendar.md` (Date, Platform, Pillar, Title/Hook, Draft path, Status=scheduled).
- Show the updated section of the calendar in the response.
- List any drafts that were skipped and why (not graded, no clear pillar, platform not in brief, etc.).
- If there aren't enough ready drafts to fill the requested cadence, say so explicitly rather than leaving gaps unexplained.
