---
description: Build or update the brand brief that all other content commands rely on
argument-hint: [optional: paste raw notes/answers to fill the brief from]
---

Read `brand/brief.md` first to see what's already filled in.

Goal: produce a complete, specific `brand/brief.md`. A vague brief produces vague content downstream, so push for concrete answers, not platitudes.

## If `$ARGUMENTS` is non-empty
Treat it as raw notes/answers from the user. Extract everything it tells you into the matching sections of the brief. Then ask (in a single batch, via `AskUserQuestion` if available, otherwise as a numbered list) only about the sections still missing or too vague after that extraction.

## If `$ARGUMENTS` is empty
Walk through the brief section by section (Identity, Audience, Voice & Tone, Content Pillars, Offers/CTA, Platforms, Competitors, Do/Don't). Ask focused questions a few sections at a time rather than one giant form. For any section already filled in from a prior run, confirm it's still accurate instead of re-asking from scratch.

## Rules
- Voice adjectives must be paired with a concrete rule (e.g. "direct — one idea per sentence, no hedging") not just an abstract word.
- Content pillars should be specific enough that a topic clearly maps to one of them or doesn't.
- Don't invent facts about the brand, audience, or offers. Leave a section marked `(needs input)` rather than guessing.
- After updating, write the result back to `brand/brief.md`, preserving the file's existing structure/headings.
- Finish by summarizing what changed and flagging any section still marked `(needs input)`.
