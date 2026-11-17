---
description: Turn one piece of content into platform-native variants (thread, caption, script, newsletter, etc.)
argument-hint: <path to source content, or paste the source text> [-- targets: e.g. x-thread, linkedin, ig-caption, tiktok-script, newsletter]
---

Repurpose this source into new platform-native pieces: `$ARGUMENTS`

## Steps
1. Resolve the source: if `$ARGUMENTS` looks like a path, read it (check `content/drafts/` and `content/repurposed/` too); otherwise treat the text after the source as the content itself.
2. Read `brand/brief.md` for voice and platform format notes.
3. Determine target formats: use whatever's specified after `--targets`; if none given, pick 2-3 sensible formats based on the source's length/depth and the platforms listed in the brief (e.g. a long post → X/Twitter thread + LinkedIn post + IG caption; a script/transcript → pull-quote posts + a newsletter recap).

## Repurposing rules
- Don't just chop the source into pieces — re-derive the best hook and structure for each target format; a thread's opening tweet and an Instagram caption's opening line are different jobs even from the same idea.
- Preserve the core insight/argument; cut supporting material that doesn't fit the shorter format rather than compressing every sentence.
- Match each target platform's native conventions (thread numbering, caption length, line breaks, script pacing/cues for video).
- Flag if the source doesn't have enough substance for a requested format (e.g. a one-line post can't become a 10-tweet thread) instead of padding it.

## Output
- Save each repurposed piece to `content/repurposed/<slug>-<platform>.md` with frontmatter (source, platform, date).
- Show all variants in the response, clearly labeled by platform.
