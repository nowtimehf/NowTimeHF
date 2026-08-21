# NowTimeHF Content Toolkit

A set of Claude Code slash commands for running a content pipeline end to
end: define the brand once, then write, grade, schedule, repurpose, and
illustrate posts against it.

## Setup

Run this first, before anything else:

```
/brand-brief
```

It fills in `brand/brief.md` — voice, audience, content pillars, offers,
platforms, and do/don't rules. Every other command reads this file, so
output quality depends on it being specific rather than generic.

## Commands

| Command | Purpose |
|---|---|
| `/brand-brief` | Build or update the brand brief. |
| `/content-coach` | Strategy session: reviews recent content against the brief, flags gaps, suggests next post ideas. |
| `/viral-hooks` | Generates a batch of on-brand hook/opening-line options for a topic. |
| `/post-writer` | Drafts a full post for a topic and platform. Saves to `content/drafts/`. |
| `/post-grader` | Scores a draft against a hook/clarity/brand-fit/CTA rubric with concrete fixes. |
| `/repurpose` | Turns one piece of content into platform-native variants (thread, caption, script, newsletter...). Saves to `content/repurposed/`. |
| `/generate-visuals` | Produces visual concepts and ready-to-use image prompts for a post; generates images directly if an image tool is available. Saves to `content/visuals/`. |
| `/post-scheduler` | Slots graded, ready drafts into `content/calendar.md`, balancing pillars and cadence. |

## Typical flow

```
/brand-brief                       # once, then whenever the brand shifts
/content-coach                     # get next post ideas
/viral-hooks "topic"                # pick a strong opening
/post-writer "topic" -- platform: linkedin
/post-grader content/drafts/<slug>.md
/generate-visuals content/drafts/<slug>.md
/post-scheduler                    # add graded drafts to the calendar
/repurpose content/drafts/<slug>.md -- targets: x-thread, ig-caption
```

## Folder structure

```
brand/brief.md            source of truth for voice/audience/pillars
content/drafts/           post drafts written by /post-writer
content/repurposed/       platform variants from /repurpose
content/visuals/          visual concepts/prompts from /generate-visuals
content/calendar.md       scheduled posts from /post-scheduler
.claude/commands/         the slash command definitions themselves
```
