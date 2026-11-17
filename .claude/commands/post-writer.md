---
description: Draft a social post from a topic/idea, on-brand and platform-appropriate
argument-hint: <topic or idea> [-- platform: e.g. linkedin, x, instagram, tiktok-script]
---

Write one or more draft posts for: `$ARGUMENTS`

## Before writing
1. Read `brand/brief.md` for voice, pillars, CTA, and platform format notes. If the brief is largely empty, proceed but flag that output quality is limited without it.
1b. Check `content/reference/` for past posts and style examples. Treat anything there as the voice made concrete — match its sentence rhythm, structure, and formatting conventions, not just the abstract adjectives in the brief. Where a reference example and the brief conflict, the brief wins; say so rather than silently picking one.
2. Determine the target platform from `$ARGUMENTS` if stated; otherwise ask which platform(s), unless the brief clearly implies one primary platform.
3. Identify which content pillar this topic maps to. If it doesn't map to any pillar, say so before writing — don't silently force-fit it.

## Write the draft
- Open with a strong hook line (first sentence must earn the second — no throat-clearing like "In today's world..."). Use `/viral-hooks` conventions: specific, concrete, tension or curiosity, no generic claims.
- Match the platform's format conventions from the brief (length, line breaks, hashtags or none, emoji use).
- Match the brand's voice rules exactly — don't default to generic "friendly marketing" tone.
- End with the CTA from the brief unless the topic calls for a different, stated CTA.
- Produce 2 variants when the platform or topic is ambiguous enough that angle matters (e.g. different hooks on the same idea); otherwise one strong draft beats three mediocre ones.

## Output
- Save the draft to `content/drafts/<slug>.md` with a short frontmatter block (topic, platform, pillar, date created, status: draft).
- Show the draft(s) in the response.
- Mention that `/post-grader` can score it before it goes on the calendar.
