/* ============================================================
   PromptYard — specimen data
   ------------------------------------------------------------
   THIS is the only file you edit to add a result. Append one
   object to the array below. The renderer (render.js) builds
   the gallery card for you and enforces the rules, so you never
   touch index.html or styles.css.

   Each entry:
     model:  "Vendor Model Version"   (precise, reproducible)
     prompt: "the exact prompt text"  (groups results together)
     date:   "YYYY-MM-DD"             (ISO; shown on the card as DD-MM-YYYY)
     svg:    `<svg …>…</svg>`         (self-contained, inline)

   SVG rules (enforced at render time — violations show as a
   rejected card and a console warning):
     • must be an <svg> with a viewBox
     • no <script>, on* handlers, <foreignObject>, <image>
     • no external URLs (http/https) or data: assets
   Use fill/stroke="currentColor" to match the site ink, or keep
   your own colors — your choice, but keep it self-contained.
   ============================================================ */

window.SPECIMENS = [
  {
    model: "Baseline",
    prompt: "reference crosshair",
    date: "2026-07-10",
    baseline: true,
    svg: `
      <svg viewBox="0 0 100 100" role="img" aria-label="Baseline specimen">
        <circle cx="50" cy="50" r="30" fill="none"
                stroke="currentColor" stroke-width="2" />
        <line x1="50" y1="20" x2="50" y2="80"
              stroke="currentColor" stroke-width="2" />
        <line x1="20" y1="50" x2="80" y2="50"
              stroke="currentColor" stroke-width="2" />
      </svg>`,
  },

  {
    model: "Claude Fable 5",
    prompt: "a paper plane",
    date: "2026-07-10",
    svg: `
      <svg viewBox="0 0 100 100" role="img" aria-label="A paper plane flying upward with a looping dashed trail">
        <path d="M6 88 C 20 92 28 82 20 76 C 12 70 4 78 12 84 C 20 90 34 78 40 68"
              fill="none" stroke="currentColor" stroke-width="1.5"
              stroke-dasharray="3 3" stroke-linecap="round" />
        <path d="M88 22 L16 50 L44 58 Z"
              fill="none" stroke="currentColor" stroke-width="2"
              stroke-linejoin="round" />
        <path d="M88 22 L44 58 L56 82 Z"
              fill="currentColor" fill-opacity="0.15"
              stroke="currentColor" stroke-width="2"
              stroke-linejoin="round" />
        <path d="M44 58 L48 70"
              fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" />
      </svg>`,
  },

  {
    model: "Claude Sonnet 5",
    prompt: "a paper plane",
    date: "2026-07-10",
    svg: `
      <svg viewBox="0 0 100 100" role="img" aria-label="A folded paper plane banking to the right with visible fold creases">
        <path d="M10 62 L92 22 L60 90 L48 66 L10 62 Z"
              fill="none" stroke="currentColor" stroke-width="2"
              stroke-linejoin="round" />
        <path d="M92 22 L48 66"
              fill="none" stroke="currentColor" stroke-width="1.5"
              stroke-linejoin="round" />
        <path d="M48 66 L60 90 L64 74 Z"
              fill="currentColor" fill-opacity="0.18"
              stroke="currentColor" stroke-width="1.5"
              stroke-linejoin="round" />
        <path d="M10 62 L48 66 L36 50 Z"
              fill="currentColor" fill-opacity="0.08"
              stroke="currentColor" stroke-width="1.5"
              stroke-linejoin="round" />
        <path d="M18 40 C 30 38 40 42 46 50"
              fill="none" stroke="currentColor" stroke-width="1.2"
              stroke-linecap="round" stroke-dasharray="1 4" />
      </svg>`,
  },

  {
    model: "Claude Haiku 4.5",
    prompt: "a paper plane",
    date: "2026-07-10",
    svg: `
      <svg viewBox="0 0 100 100" role="img" aria-label="A geometric paper plane with visible folds and central crease">
        <path d="M 50 18 L 20 68 L 50 58 L 80 68 Z"
              fill="none" stroke="currentColor" stroke-width="2.5"
              stroke-linejoin="round" stroke-linecap="round" />
        <path d="M 50 18 L 50 58"
              fill="none" stroke="currentColor" stroke-width="1.5"
              stroke-linejoin="round" />
        <path d="M 50 18 L 20 68"
              fill="none" stroke="currentColor" stroke-width="1"
              stroke-linejoin="round" stroke-dasharray="2 2" />
        <path d="M 50 18 L 80 68"
              fill="none" stroke="currentColor" stroke-width="1"
              stroke-linejoin="round" stroke-dasharray="2 2" />
        <path d="M 20 68 L 50 58 L 80 68 Z"
              fill="currentColor" fill-opacity="0.08" />
        <circle cx="50" cy="18" r="2.5" fill="currentColor" fill-opacity="0.3" />
      </svg>`,
  },

  {
    model: "Gemini 3.5 Flash",
    prompt: "a paper plane",
    date: "2026-07-10",
    svg: `
      <svg viewBox="0 0 100 100" role="img" aria-label="A paper plane flying towards the top right with technical fold lines and a looping flight trail">
        <defs>
          <linearGradient id="gemini-plane-grad-left" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="currentColor" stop-opacity="0.02" />
            <stop offset="100%" stop-color="currentColor" stop-opacity="0.12" />
          </linearGradient>
          <linearGradient id="gemini-plane-grad-right" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="currentColor" stop-opacity="0.06" />
            <stop offset="100%" stop-color="currentColor" stop-opacity="0.18" />
          </linearGradient>
          <linearGradient id="gemini-plane-grad-fuselage" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="currentColor" stop-opacity="0.15" />
            <stop offset="100%" stop-color="currentColor" stop-opacity="0.32" />
          </linearGradient>
        </defs>
        <ellipse cx="48" cy="90" rx="20" ry="3" fill="currentColor" fill-opacity="0.04" />
        <path d="M 12 88 C 22 92, 32 82, 26 74 C 20 66, 10 74, 18 80 C 26 86, 34 76, 38 68"
              fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 4" stroke-linecap="round" opacity="0.6" />
        <path d="M 8 92 C 18 96, 28 86, 22 78 C 16 70, 6 78, 14 84 C 22 90, 30 80, 33 74"
              fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="2 3" stroke-linecap="round" opacity="0.3" />
        <line x1="88" y1="11" x2="88" y2="15" stroke="currentColor" stroke-width="0.8" opacity="0.35" />
        <line x1="86" y1="13" x2="90" y2="13" stroke="currentColor" stroke-width="0.8" opacity="0.35" />
        <line x1="76" y1="5" x2="76" y2="9" stroke="currentColor" stroke-width="0.8" opacity="0.35" />
        <line x1="74" y1="7" x2="78" y2="7" stroke="currentColor" stroke-width="0.8" opacity="0.35" />
        <circle cx="92" cy="27" r="1.8" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.3" />
        <circle cx="92" cy="27" r="0.4" fill="currentColor" opacity="0.3" />
        <polygon points="82,18 22,45 48,55" fill="url(#gemini-plane-grad-left)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
        <polygon points="82,18 48,55 38,68" fill="url(#gemini-plane-grad-fuselage)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
        <polygon points="82,18 48,55 58,78" fill="url(#gemini-plane-grad-right)" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
        <line x1="82" y1="18" x2="48" y2="55" stroke="currentColor" stroke-width="1" stroke-dasharray="1.5 2.5" opacity="0.5" />
      </svg>`,
  },

  {
    model: "Gemini 3.1 Pro (Low)",
    prompt: "a paper plane",
    date: "2026-07-10",
    svg: `
      <svg viewBox="0 0 100 100" role="img" aria-label="A crisp paper plane ascending, showing internal folds">
        <path d="M20 70 L85 15 L50 85 L42 60 L85 15 L28 45 Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
        <path d="M42 60 L50 85 L35 70 Z" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
        <path d="M85 15 L42 60" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
      </svg>`,
  },

  {
    model: "Gemini 3.1 Pro (High)",
    prompt: "a paper plane",
    date: "2026-07-10",
    svg: `
      <svg viewBox="0 0 100 100" role="img" aria-label="A minimalist paper plane with a subtle flight path">
        <path d="M 10 80 Q 25 90 40 70 T 45 50" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 4" opacity="0.5" stroke-linecap="round" />
        <path d="M 45 50 L 20 55 L 75 15 Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
        <path d="M 45 50 L 60 85 L 75 15 Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
        <path d="M 45 50 L 52 62 L 75 15 Z" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
      </svg>`,
  },

  {
    model: "GPT-5 Codex (5.6 Terra)",
    prompt: "a paper plane",
    date: "2026-07-10",
    svg: `
      <svg viewBox="0 0 100 100" role="img" aria-label="A paper plane gliding upward with a curved flight trail">
        <path d="M12 80 C18 92 38 90 35 76 C33 65 18 69 24 78 C30 88 43 75 49 64"
              fill="none" stroke="currentColor" stroke-width="1.5"
              stroke-dasharray="2 3" stroke-linecap="round" />
        <path d="M18 58 L84 20 L52 78 L43 58 Z"
              fill="none" stroke="currentColor" stroke-width="2"
              stroke-linejoin="round" />
        <path d="M84 20 L43 58 L52 78 Z"
              fill="currentColor" fill-opacity="0.16"
              stroke="currentColor" stroke-width="2"
              stroke-linejoin="round" />
        <path d="M18 58 L43 58 L84 20"
              fill="none" stroke="currentColor" stroke-width="1.25"
              stroke-linejoin="round" />
        <path d="M43 58 L55 55"
              fill="none" stroke="currentColor" stroke-width="1.25"
              stroke-linecap="round" />
      </svg>`,
  },

  {
    model: "GPT-5 Codex (5.5)",
    prompt: "a paper plane",
    date: "2026-07-10",
    svg: `
      <svg viewBox="0 0 100 100" role="img" aria-label="A folded paper plane with a dotted flight trail">
        <path d="M10 82 C20 68 31 90 43 74 C52 62 55 52 69 56"
              fill="none" stroke="currentColor" stroke-width="1.4"
              stroke-dasharray="2 4" stroke-linecap="round" opacity="0.55" />
        <path d="M13 47 L88 18 L57 84 L47 60 Z"
              fill="none" stroke="currentColor" stroke-width="2"
              stroke-linejoin="round" />
        <path d="M88 18 L47 60 L57 84 Z"
              fill="currentColor" fill-opacity="0.14"
              stroke="currentColor" stroke-width="2"
              stroke-linejoin="round" />
        <path d="M13 47 L47 60 L38 70 Z"
              fill="currentColor" fill-opacity="0.08"
              stroke="currentColor" stroke-width="1.5"
              stroke-linejoin="round" />
        <path d="M13 47 L47 60 L88 18"
              fill="none" stroke="currentColor" stroke-width="1.25"
              stroke-linejoin="round" />
        <path d="M47 60 L61 55"
              fill="none" stroke="currentColor" stroke-width="1.25"
              stroke-linecap="round" />
      </svg>`,
  },

  {
    model: "GPT-5 Codex",
    prompt: "a paper plane",
    date: "2026-07-10",
    svg: `
      <svg viewBox="0 0 100 100" role="img" aria-label="A folded paper plane gliding upward with a curved trail">
        <path d="M15 79 C23 67 33 64 40 68 C46 71 46 81 39 84 C31 87 21 85 15 79"
              fill="none" stroke="currentColor" stroke-width="1.4"
              stroke-dasharray="3 4" stroke-linecap="round" opacity="0.55" />
        <polygon points="84,18 19,46 49,55"
                 fill="currentColor" fill-opacity="0.10"
                 stroke="currentColor" stroke-width="2"
                 stroke-linejoin="round" />
        <polygon points="84,18 49,55 58,82"
                 fill="currentColor" fill-opacity="0.18"
                 stroke="currentColor" stroke-width="2"
                 stroke-linejoin="round" />
        <polygon points="19,46 49,55 40,72"
                 fill="currentColor" fill-opacity="0.06"
                 stroke="currentColor" stroke-width="1.2"
                 stroke-linejoin="round" />
        <path d="M84 18 L49 55"
              fill="none" stroke="currentColor" stroke-width="1.2"
              stroke-dasharray="2 3" opacity="0.45" />
        <path d="M49 55 L40 72"
              fill="none" stroke="currentColor" stroke-width="1.2"
              stroke-linecap="round" />
        <circle cx="84" cy="18" r="1.6" fill="currentColor" fill-opacity="0.28" />
      </svg>`,
  },
  {
    model: "Grok 4.5 Fast",
    prompt: "a paper plane",
    date: "2026-07-28",
    svg: `<svg viewBox="0 0 160 100" width="160" height="100" role="img" aria-label="A paper airplane">
    <path d="M10 50 L150 16 L105 50 L150 84 Z" fill="#f8f8f8" stroke="#222" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M10 50 L105 50 L150 16 Z" fill="#ffffff"/>
    <path d="M10 50 L105 50 L150 84 Z" fill="#d4d4d4"/>
    <path d="M10 50 L105 50" stroke="#444" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M105 50 L132 30" stroke="#888" stroke-width="0.9" stroke-dasharray="2.5 1.5"/>
    <path d="M105 50 L132 70" stroke="#888" stroke-width="0.9" stroke-dasharray="2.5 1.5"/>
    <path d="M150 16 L138 28 L150 22 Z" fill="#c8c8c8"/>
    <path d="M150 84 L138 72 L150 78 Z" fill="#b0b0b0"/>
    <circle cx="10" cy="50" r="2.4" fill="#222"/>
    <path d="M28 50 L95 42 L95 58 Z" fill="#ececec" opacity="0.7"/>
  </svg>`
  },

  {
    model: "Kimi K3",
    prompt: "a paper plane",
    date: "2026-07-29",
    svg: `
      <svg viewBox="0 0 100 100" role="img" aria-label="A paper plane climbing past small clouds with a looping dashed trail">
        <path d="M6 88 C 14 95 26 92 25 83 C 24 75 12 75 14 82 C 16 89 28 86 34 70"
              fill="none" stroke="currentColor" stroke-width="1.5"
              stroke-dasharray="3 3.5" stroke-linecap="round" opacity="0.55" />
        <path d="M64 80 C 60 80 58 77 60 74 C 61 71 65 71 66 73 C 67 69 73 68 75 71 C 78 70 81 72 80 75 C 84 76 83 80 79 80 Z"
              fill="none" stroke="currentColor" stroke-width="1.2"
              stroke-linejoin="round" opacity="0.35" />
        <path d="M14 28 C 11 28 10 25 12 23 C 13 21 16 21 17 23 C 18 20 22 19 24 22 C 26 21 28 23 27 25 C 30 26 29 28 26 28 Z"
              fill="none" stroke="currentColor" stroke-width="1.2"
              stroke-linejoin="round" opacity="0.35" />
        <path d="M86 20 L16 48 L44 58 Z"
              fill="currentColor" fill-opacity="0.06"
              stroke="currentColor" stroke-width="2"
              stroke-linejoin="round" />
        <path d="M86 20 L44 58 L56 84 Z"
              fill="currentColor" fill-opacity="0.2"
              stroke="currentColor" stroke-width="2"
              stroke-linejoin="round" />
        <path d="M86 20 L44 58"
              fill="none" stroke="currentColor" stroke-width="1"
              stroke-dasharray="2 3" opacity="0.5" />
      </svg>`,
  },

  {
    model: "big-pickle",
    prompt: "a paper plane",
    date: "2026-07-29",
    svg: `
      <svg viewBox="0 0 100 100" role="img" aria-label="A folded paper plane gliding upward with origami creases">
        <path d="M85 12 L18 54 L46 54 Z" fill="currentColor" fill-opacity="0.07" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
        <path d="M85 12 L46 54 L54 84 Z" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
        <path d="M46 54 L54 84 L58 72 Z" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
        <path d="M18 54 L46 54 L38 66 Z" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round" />
        <path d="M85 12 L46 54" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M46 54 L54 84" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M46 54 L38 66" fill="none" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 2" stroke-linecap="round" />
      </svg>`,
  },

  {
    model: "MiMo V2.5 Pro",
    prompt: "a paper plane",
    date: "2026-07-29",
    svg: `
      <svg viewBox="0 0 100 100" role="img" aria-label="A paper plane diving forward with a swirling motion trail">
        <path d="M8 72 C 12 68 18 76 24 70 C 30 64 32 58 38 56 C 44 54 50 58 52 52"
              fill="none" stroke="currentColor" stroke-width="1.2"
              stroke-dasharray="3 3" stroke-linecap="round" opacity="0.45" />
        <path d="M82 24 L22 52 L48 60 Z"
              fill="currentColor" fill-opacity="0.08"
              stroke="currentColor" stroke-width="2"
              stroke-linejoin="round" />
        <path d="M82 24 L48 60 L62 86 Z"
              fill="currentColor" fill-opacity="0.22"
              stroke="currentColor" stroke-width="2"
              stroke-linejoin="round" />
        <path d="M82 24 L48 60"
              fill="none" stroke="currentColor" stroke-width="1.4"
              stroke-dasharray="2 2" opacity="0.6" />
        <path d="M48 60 L42 74"
              fill="none" stroke="currentColor" stroke-width="1.2"
              stroke-linecap="round" opacity="0.7" />
        <circle cx="82" cy="24" r="2" fill="currentColor" fill-opacity="0.25" />
      </svg>`,
  },

  {
    model: "DeepSeek V4 Flash",
    prompt: "a paper plane",
    date: "2026-07-29",
    svg: `
      <svg viewBox="0 0 100 100" role="img" aria-label="A paper plane climbing upward with origami-style folds">
        <path d="M82 18 L22 48 L44 56 Z"
              fill="currentColor" fill-opacity="0.06"
              stroke="currentColor" stroke-width="2"
              stroke-linejoin="round" />
        <path d="M82 18 L44 56 L54 82 Z"
              fill="currentColor" fill-opacity="0.22"
              stroke="currentColor" stroke-width="2"
              stroke-linejoin="round" />
        <path d="M82 18 L44 56"
              fill="none" stroke="currentColor" stroke-width="1.2"
              stroke-linecap="round" />
        <path d="M44 56 L54 82"
              fill="none" stroke="currentColor" stroke-width="1"
              stroke-linecap="round" />
        <path d="M22 48 L44 56 L34 68 Z"
              fill="currentColor" fill-opacity="0.03"
              stroke="currentColor" stroke-width="1.2"
              stroke-linejoin="round" />
        <path d="M10 84 C 18 88 28 80 24 72 C 20 64 10 70 16 76 C 22 82 32 74 36 66"
              fill="none" stroke="currentColor" stroke-width="1.2"
              stroke-dasharray="2.5 3"
stroke-linecap="round" opacity="0.5" />
      </svg>`,
  },

  {
    model: "GLM 5.2",
    prompt: "a paper plane",
    date: "2026-07-29",
    svg: `
      <svg viewBox="0 0 100 100" role="img" aria-label="A paper plane banking upward with a looping dashed trail">
        <path d="M10 86 C 20 90 26 82 22 76 C 17 70 9 76 14 81 C 19 86 30 78 36 68"
              fill="none" stroke="currentColor" stroke-width="1.5"
              stroke-dasharray="3 3" stroke-linecap="round" opacity="0.5" />
        <polygon points="86,30 16,56 48,54"
                 fill="currentColor" fill-opacity="0.08"
                 stroke="currentColor" stroke-width="2"
                 stroke-linejoin="round" />
        <polygon points="86,30 48,54 56,82"
                 fill="currentColor" fill-opacity="0.22"
                 stroke="currentColor" stroke-width="2"
                 stroke-linejoin="round" />
        <path d="M86 30 L48 54"
              fill="none" stroke="currentColor" stroke-width="1.2"
              stroke-dasharray="2 3" opacity="0.55" />
        <path d="M48 54 L40 70"
              fill="none" stroke="currentColor" stroke-width="1.2"
              stroke-linecap="round" />
        <path d="M16 56 L36 64 L48 54"
              fill="currentColor" fill-opacity="0.04"
              stroke="currentColor" stroke-width="1.2"
              stroke-linejoin="round" />
      </svg>`,
  },

  {
    model: "Grok 4.5",
    prompt: "a paper plane",
    date: "2026-07-29",
    svg: `
      <svg viewBox="0 0 100 100" role="img" aria-label="A paper plane soaring diagonally with layered wing folds and a soft motion trail">
        <path d="M8 78 C 16 86 28 84 30 74 C 32 64 20 62 18 70 C 16 78 26 80 38 62"
              fill="none" stroke="currentColor" stroke-width="1.4"
              stroke-dasharray="2.5 3.5" stroke-linecap="round" opacity="0.45" />
        <path d="M88 16 L14 46 L46 56 Z"
              fill="currentColor" fill-opacity="0.07"
              stroke="currentColor" stroke-width="2"
              stroke-linejoin="round" />
        <path d="M88 16 L46 56 L58 86 Z"
              fill="currentColor" fill-opacity="0.2"
              stroke="currentColor" stroke-width="2"
              stroke-linejoin="round" />
        <path d="M14 46 L46 56 L36 70 Z"
              fill="currentColor" fill-opacity="0.05"
              stroke="currentColor" stroke-width="1.3"
              stroke-linejoin="round" />
        <path d="M46 56 L58 86 L62 72 Z"
              fill="currentColor" fill-opacity="0.1"
              stroke="currentColor" stroke-width="1.2"
              stroke-linejoin="round" />
        <path d="M88 16 L46 56"
              fill="none" stroke="currentColor" stroke-width="1.15"
              stroke-linecap="round" />
        <path d="M46 56 L52 66"
              fill="none" stroke="currentColor" stroke-width="1"
              stroke-linecap="round" opacity="0.7" />
        <circle cx="88" cy="16" r="1.8" fill="currentColor" fill-opacity="0.28" />
      </svg>`,
  },

  {
    model: "Nemotron 3 Ultra",
    prompt: "a paper plane",
    date: "2026-07-29",
    svg: `
      <svg viewBox="0 0 100 100" role="img" aria-label="A paper plane banking upward with sharp origami folds and a looping motion trail">
        <path d="M10 85 C 18 92 30 88 32 78 C 34 68 22 66 20 74 C 18 82 28 80 38 68"
              fill="none" stroke="currentColor" stroke-width="1.4"
              stroke-dasharray="3 4" stroke-linecap="round" opacity="0.5" />
        <polygon points="84,18 16,50 46,50"
                 fill="currentColor" fill-opacity="0.08"
                 stroke="currentColor" stroke-width="2"
                 stroke-linejoin="round" />
        <polygon points="84,18 46,50 54,82"
                 fill="currentColor" fill-opacity="0.22"
                 stroke="currentColor" stroke-width="2"
                 stroke-linejoin="round" />
        <polygon points="16,50 46,50 38,66"
                 fill="currentColor" fill-opacity="0.04"
                 stroke="currentColor" stroke-width="1.2"
                 stroke-linejoin="round" />
        <path d="M84 18 L46 50"
              fill="none" stroke="currentColor" stroke-width="1.2"
              stroke-dasharray="2 3" opacity="0.55" />
        <path d="M46 50 L38 66"
              fill="none" stroke="currentColor" stroke-width="1"
              stroke-dasharray="1.5 2.5" stroke-linecap="round" opacity="0.6" />
        <path d="M46 50 L54 82"
              fill="none" stroke="currentColor" stroke-width="1.2"
              stroke-linecap="round" opacity="0.7" />
        <circle cx="84" cy="18" r="1.6" fill="currentColor" fill-opacity="0.25" />
      </svg>`,
  },

  {
    model: "Claude Opus 5 (80k tokens)",
    prompt: "a paper plane",
    date: "2026-07-29",
    svg: `
      <svg viewBox="0 0 100 100" role="img" aria-label="A folded paper dart climbing, seen from above and behind">
        <g fill="none" stroke="currentColor" stroke-linecap="round">
          <path d="M25.5 64 C 18 65.9 11.1 69.2 5 74"
                stroke-width="1.2" opacity="0.34" />
          <path d="M28.5 72.5 C 21.1 74.3 14.5 77.4 8.5 82"
                stroke-width="1.1" opacity="0.24" />
          <path d="M34 80 C 28.6 81.1 23.7 83.3 19.5 86.8"
                stroke-width="1" opacity="0.16" />
        </g>
        <g fill="currentColor" stroke="currentColor"
           stroke-linejoin="round" stroke-linecap="round">
          <path d="M88 27.1 L8 34.8 L33.9 54.7 Z"
                fill-opacity="0.05" stroke-width="1.5" />
          <path d="M88 27.1 L22.5 45.9" fill="none" stroke-width="0.9"
                stroke-dasharray="4.5 2.5" opacity="0.3" />
          <path d="M57.3 54.1 L35.8 72.9 L33.9 54.7 Z"
                fill-opacity="0.28" stroke-width="1.5" />
          <path d="M88 27.1 L59.3 54 L33.9 54.7 Z"
                fill-opacity="0.14" stroke-width="1.9" />
          <path d="M88 27.1 L45.1 54.4" fill="none" stroke-width="1"
                stroke-dasharray="4.5 2.5" opacity="0.5" />
        </g>
      </svg>`,
  },

  {
    model: "Claude Opus 5 v2",
    prompt: "a paper plane",
    date: "2026-07-29",
    svg: `
      <svg viewBox="0 0 100 100" role="img" aria-label="A folded paper dart climbing steeply, seen from above and behind">
        <g fill="none" stroke="currentColor" stroke-linecap="round">
          <path d="M29.7 68.6 C 22.6 71.8 16.2 76 10.4 81.1"
                stroke-width="1.2" opacity="0.34" />
          <path d="M33.5 76.3 C 26.7 79.3 20.5 83.3 15 88.3"
                stroke-width="1.1" opacity="0.24" />
          <path d="M39.2 83.3 C 34.1 85.2 29.6 88.1 25.8 92"
                stroke-width="1" opacity="0.16" />
        </g>
        <g fill="currentColor" stroke="currentColor"
           stroke-linejoin="round" stroke-linecap="round">
          <path d="M93 22.1 L7 39.6 L37.3 58.3 Z"
                fill-opacity="0.05" stroke-width="1.5" />
          <path d="M93 22.1 L24 50.1" fill="none" stroke-width="0.9"
                stroke-dasharray="4.5 2.5" opacity="0.3" />
          <path d="M62.7 54.9 L41.6 77.9 L37.3 58.3 Z"
                fill-opacity="0.28" stroke-width="1.5" />
          <path d="M93 22.1 L64.9 54.6 L37.3 58.3 Z"
                fill-opacity="0.14" stroke-width="1.9" />
          <path d="M93 22.1 L49.5 56.7" fill="none" stroke-width="1"
                stroke-dasharray="4.5 2.5" opacity="0.5" />
        </g>
      </svg>`,
  },

];
