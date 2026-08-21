---
description: Produce visual concepts (and generate images, if an image-gen tool is available) for a post
argument-hint: <path to draft, or paste post text/topic> [-- count: default 3]
---

Produce visual concepts for: `$ARGUMENTS`

## Steps
1. Resolve the source post: if `$ARGUMENTS` is a path, read it from `content/drafts/` or `content/repurposed/`; otherwise treat it as the topic/text directly.
2. Read `brand/brief.md` for any visual/brand style notes (colors, mood, do/don't) — if none are recorded, ask once for the brand's visual style (photo vs. illustration vs. typographic, color palette, mood) and suggest adding it to the brief.
3. Draft the number of visual concepts requested (default 3), each with:
   - **Concept**: one line describing the shot/composition and why it fits the post's message.
   - **Prompt**: a detailed, ready-to-use image-generation prompt (subject, composition, lighting, style, aspect ratio suited to the target platform).
   - **Alt text**: a concise, accurate description for accessibility.

## If an image-generation tool is available in this session
Offer to actually generate the visuals using it, but only after the user confirms which concept(s) to run — don't spend generation credits speculatively. Use the platform's native aspect ratio (e.g. 1:1 or 4:5 for Instagram, 16:9 for X/LinkedIn link posts, 9:16 for Stories/Reels/TikTok). Save any generated output's reference/path into `content/visuals/`.

## If no image-generation tool is available
Just deliver the concepts and prompts — the user can run them through their own tool. Say so plainly rather than pretending an image was made.

## Output
Save the concepts (prompts + alt text) to `content/visuals/<slug>.md`. Show them in the response.
