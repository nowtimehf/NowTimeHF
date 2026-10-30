---
description: Score a draft post against a hook/clarity/brand-fit/CTA rubric with actionable fixes
argument-hint: <path to draft in content/drafts/, or paste the post text directly>
---

Grade this post: `$ARGUMENTS`

If `$ARGUMENTS` looks like a file path, read it from `content/drafts/`. Otherwise treat `$ARGUMENTS` as the post text itself. Also read `brand/brief.md` for the rubric's brand-fit checks.

## Rubric — score each 1-5, with one line of justification
1. **Hook (first line)** — does it earn a read within 1 second? Specific/concrete beats vague/abstract.
2. **Clarity** — one clear idea, no muddled structure, no jargon the audience wouldn't know.
3. **Brand fit** — matches the voice rules and maps to a stated content pillar in the brief.
4. **Platform fit** — length, format, and structure match the platform's conventions (from the brief or platform norms if the brief is silent).
5. **CTA / payoff** — ends with a clear next step or satisfying takeaway; doesn't trail off.

## Output format
- **Overall score: X/25**
- Per-criterion score + one-line reason (above)
- **Top 3 fixes**, ordered by impact, each concrete enough to act on directly (not "make it punchier" — show the actual rewritten line)
- **Verdict**: ready to schedule / needs one more pass / needs a rewrite

## Rules
- Be a tough, specific grader — a 5/5 should be rare and earned. Generic praise is not feedback.
- Don't rewrite the whole post unless asked; give the fixes, let `/post-writer` or the user apply them.
- If reading from a file, update its frontmatter `status:` field to reflect the verdict (e.g. `graded`, `needs-rewrite`).
