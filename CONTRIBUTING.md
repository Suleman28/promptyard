# Contributing to PromptYard

Thanks for helping build the yard. PromptYard is a benchmark: every model gets
the **same prompt**, and their outputs sit side by side so we can compare them —
and watch them improve over time. The value of the project depends entirely on
keeping that comparison **fair and consistent**, so most of these guidelines
exist to protect that.

There are two audiences here:

- **AI models** doing the work follow [`AGENTS.md`](AGENTS.md) — the exact spec
  for generating a specimen.
- **Humans** opening pull requests follow this file.

---

## The one rule

**Do not change the site's design.** `styles.css` and the page layout,
structure, fonts, colors, and spacing are fixed on purpose — the website is the
constant against which every model is measured. If the ruler changes, old and
new results are no longer comparable.

That means a normal contribution touches **only** the gallery list in
`index.html`. PRs that restyle the site, add build tooling, add dependencies, or
edit unrelated sections will be asked to trim back to scope.

(Genuine improvements to the design or tooling are welcome too — but as their
own, clearly-labeled PR that we can discuss, never bundled with a specimen.)

---

## Ways to contribute

1. **Add a model's result** to the current experiment (the common case).
2. **Re-run an existing prompt on a newer model** to track improvement over time.
3. **Propose a new experiment** (see [Adding a new experiment](#adding-a-new-experiment)).
4. **Docs, fixes, and tooling** — corrections, clarity, automation.

---

## Adding a specimen (the common case)

The current experiment is **SVG generation**. Specimens live in
[`specimens.js`](specimens.js) as data; `render.js` builds the gallery cards
from them. **You only ever edit `specimens.js`** — never the HTML or CSS.

To add a result:

1. Use the **standard prompt** from the [README](README.md#the-standard-prompt)
   verbatim, changing only the subject and the model name. Using the exact same
   wording for every model is what keeps the benchmark honest — don't paraphrase
   it or add hints.
2. **Append one entry** to the `window.SPECIMENS` array in `specimens.js`:

   ```js
   {
     model: "Claude Sonnet 5",
     prompt: "a paper plane",
     date: "2026-07-10",
     svg: `
       <svg viewBox="0 0 100 100" role="img" aria-label="a paper plane">
         ...
       </svg>`,
   },
   ```

3. Fill in the fields (see [conventions](#field-conventions) below).
4. Leave the **Baseline** entry and every other entry exactly as they are —
   never edit, reorder, or "improve" someone else's specimen.

The full technical spec for the SVG itself (viewBox, `role`/`aria-label`,
self-contained markup, no scripts or external assets) lives in
[`AGENTS.md`](AGENTS.md). Those rules are also **enforced at render time**: an
entry that violates them shows up as a "rejected" card with the reason, and a
warning in the browser console — so out-of-scope submissions are obvious.

### Field conventions

- `model` — `Vendor Model Version`, precise enough to reproduce.
  - Good: `Claude Sonnet 5`, `Gemini 3.1 Pro (High)`, `GPT-5 Codex (5.6 Terra)`
  - Avoid: `gpt`, `the new gemini`, `latest`
  - If a reasoning/effort setting matters to the result, note it in parentheses,
    e.g. `(High)`, `(Low)`.
- `prompt` — the subject **exactly as written** in the prompt, e.g.
  `a paper plane`. This is how we group results for the same challenge.
- `date` — when the specimen was generated, in ISO `YYYY-MM-DD` format (the card
  displays it day-first as `DD-MM-YYYY` automatically). This is what lets us
  track how a model's output changes over time, so use the real generation date,
  not the PR date if they differ.
- `svg` — the self-contained SVG markup as a template-literal string.

One model + one prompt = one entry. If you run the same model twice, pick the
single result you want to represent it, or open separate PRs and say why.

---

## Running it locally

No build step, no dependencies. Just open `index.html` in a browser, or serve
the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Before opening a PR, confirm your card appears in the gallery and the browser
console reports it **rendered** (not rejected), with no other errors.

---

## Opening a pull request

- **One specimen (or one focused change) per PR.** Small PRs are easy to review
  and easy to revert if a model went out of scope.
- **Branch** off `main`, e.g. `add/claude-sonnet-5-paper-plane`.
- **Title:** `Add <Model> — <prompt>` (e.g. `Add Claude Sonnet 5 — a paper plane`).
- **In the description**, include:
  - the model and the exact prompt you used;
  - any non-default settings (reasoning effort, temperature) that affected it;
  - a note if the model deviated from `AGENTS.md` (e.g. used its own colors).
- **A screenshot** of your card in the gallery is appreciated but optional.

### PR checklist

- [ ] Only `specimens.js` was changed — a single appended entry (no `index.html`,
      `styles.css`, or `render.js`).
- [ ] The SVG is self-contained: has a `viewBox`, `role="img"`, and `aria-label`;
      no `<script>`, event handlers, external URLs, `data:` assets, or raster.
- [ ] The entry has a precise `model`, the exact `prompt` text, and a
      `date` (`YYYY-MM-DD`).
- [ ] Existing entries (including Baseline) are untouched.
- [ ] The card renders locally (console reports it rendered, not rejected).

---

## Adding a new experiment

Upcoming experiments appear as `· soon` placeholders in the nav (Motion, Prose,
…). Adding one is a larger change and touches the design, so please **open an
issue first** to discuss it before sending a PR. When an experiment ships, its
nav placeholder (`<span class="nav__soon">`) becomes a real `<a href="#…">`, and
its section should reuse the existing `.section-head` pattern and design tokens —
no new visual language.

---

## What we won't merge

- Restyling, re-theming, or layout changes bundled with a specimen.
- New dependencies, frameworks, or a build step.
- SVGs that aren't self-contained, or that embed external/raster assets.
- Edits to other contributors' cards or the Baseline reference.
- Vague or missing model labels.

Keeping the yard tidy is what makes the comparison worth trusting. Thanks for
respecting that. ✳
