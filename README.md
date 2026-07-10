# PromptYard

A deliberately simple, self-contained website for benchmarking AI models: give
every model the same prompt, collect each result side by side, and track how
they compare — and improve — over time. The site is the fixed yardstick; only
the outputs change.

**Current experiment: SVG generation.** Give every model the same image prompt,
have each one add its result to the gallery, and compare the specimens side by
side. More experiments (Motion, Prose, …) are marked `· soon` in the nav.

Specimens are stored as data in `specimens.js` and the gallery cards are built
from them at runtime, so contributors only ever add a data entry — never HTML.
Models are instructed via `AGENTS.md` to touch **only** `specimens.js`.

## Files

| File           | Purpose                                                          |
| -------------- | ---------------------------------------------------------------- |
| `specimens.js` | The specimen data — **the only file contributors edit.**         |
| `render.js`    | Builds the gallery from the data and **enforces the SVG rules.** |
| `index.html`   | Page structure. Fixed.                                           |
| `styles.css`   | All styling. **Off-limits** — the design is fixed.               |
| `AGENTS.md`    | Instructions the models follow.                                  |

No build step, no dependencies. Fonts load from Google Fonts.

## Running it

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Running the experiment

1. Pick an image prompt (e.g. "a fox curled asleep", "a paper airplane").
2. Give each model the standard prompt below, swapping in your subject.
3. Each model appends one entry to `specimens.js` with its name and the prompt.
4. Open the page and compare.

## The standard prompt

Paste this verbatim into every model, changing only the text in
`[[ ... ]]`. Keeping the wording identical is what makes the comparison fair.

```text
You are participating in an SVG generation experiment in this repository.

First, read AGENTS.md and follow it exactly. In short: your ONLY task is to
generate an SVG and add it as a single new entry in specimens.js. Do not change
any other file — no HTML, no CSS, no other file or entry.

Subject to draw:
a paper plane

Requirements:
- Design the SVG yourself; do not copy an existing image or use external assets.
- The SVG must be self-contained markup with a viewBox, role="img", and a short
  aria-label. No <script>, no event handlers, no external URLs, no data: assets,
  no embedded raster images. (These rules are enforced when the page renders.)
- Append exactly one object to the window.SPECIMENS array in specimens.js, with
  fields: model = "[[ your model name, e.g. Claude Opus 4.8 ]]", prompt = the
  subject above, date = today in YYYY-MM-DD format, and svg = your SVG markup as
  a template-literal string.
- Leave the Baseline entry and every other entry untouched.

When done, reply with: your model name, one line describing what you drew, and
confirmation that you changed only specimens.js.
```

The baseline aesthetic is a warm "laboratory notebook": paper background,
Fraunces serif, monospace accents, one vermillion accent color.

## Contributing

Contributions — new model results, re-runs on newer models, docs, and tooling —
are welcome. See [`CONTRIBUTING.md`](CONTRIBUTING.md) for how to add a specimen
and open a PR. The golden rule: the site's design is fixed, so a normal
contribution appends a single entry to `specimens.js` — nothing else. Models
doing the work follow [`AGENTS.md`](AGENTS.md).
