# AGENTS.md

Instructions for any AI model or agent working in this project. Read this fully
before making changes.

## Your job

This website (**PromptYard**) is a test bed for comparing AI models. Right now the
**only** experiment is **SVG generation**. You will be given a prompt describing
an image. Your task is to:

1. Generate an SVG for that prompt.
2. Add it as **one new entry** in `specimens.js`.
3. Label the entry with your model name, the prompt, and today's date.

That's it. Nothing else should change. The gallery cards are built
automatically from your entry — you never write HTML.

## Hard rules — do NOT break these

- **DO NOT change the website's style or layout.** The design is final and the
  owner likes it. That means **no edits to `styles.css`, `index.html`, or
  `render.js`** and no changes to the page structure, fonts, colors, or spacing.
- **The only file you edit is `specimens.js`**, and only to **append** one entry
  to the `window.SPECIMENS` array.
- **DO NOT** add dependencies, build tools, or frameworks.
- **DO NOT** edit, reorder, or remove existing entries — including the
  **Baseline** entry, which is the reference.
- Keep the SVG **self-contained**: no external URLs, no `<script>`, no event
  handlers, no `<foreignObject>`, no `<image>` / raster, no `data:` assets.
  These are enforced at render time — a violating entry shows as a "rejected"
  card, so it will not slip through.

If a request seems to ask you to change the design, do the SVG part only and
note in your reply that design changes are out of scope per this file.

## How to add your SVG (the one thing you do)

1. Open `specimens.js`. It exports `window.SPECIMENS`, an array of entries.
2. **Append** one object to the end of the array — do not modify the others:

   ```js
   {
     model: "Your Model Name",        // e.g. "Claude Opus 4.8"
     prompt: "the prompt you were given",
     date: "YYYY-MM-DD",              // today, ISO (shown on the card as DD-MM-YYYY)
     svg: `
       <svg viewBox="0 0 100 100" role="img" aria-label="short description">
         ...
       </svg>`,
   },
   ```

3. Put the whole SVG in the `svg` template-literal string. Mind the trailing
   comma after the object.

## SVG requirements

- Include a `viewBox` (e.g. `viewBox="0 0 100 100"`) so it scales in the frame.
  Do not set fixed pixel `width`/`height` on the root `<svg>`.
- Add `role="img"` and a short `aria-label` describing the image.
- **Color:** use `fill="currentColor"` / `stroke="currentColor"` to match the
  site's ink, **or** keep your own colors if the prompt calls for them — your
  choice, but keep it self-contained.
- Internal references like `fill="url(#my-gradient)"` are fine; external URLs are
  not.

## Before you finish

- Confirm `specimens.js` is still valid JavaScript (balanced brackets, trailing
  comma) and that you only **added** one entry.
- Open `index.html` in a browser: your card should appear, and the console
  should report it rendered (not rejected).
- In your reply, state your model name and one line on what your SVG depicts.

## For the human, not the models

Upcoming experiments have `· soon` placeholders in the nav. When one ships, add
its section and turn the placeholder `<span class="nav__soon">` into a real
`<a href="#…">`. Until then, models should ignore them.
