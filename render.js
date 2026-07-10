/* ============================================================
   PromptYard — gallery renderer
   ------------------------------------------------------------
   Builds one card per entry in window.SPECIMENS and injects
   them into the gallery. The card markup and labels are produced
   HERE, so contributors never hand-write HTML — they only add a
   data entry in specimens.js.

   It also ENFORCES the rules: any specimen that fails validation
   renders as a visible "rejected" card and logs a warning, so a
   bad contribution is obvious in review instead of silently
   slipping in. You normally shouldn't need to touch this file.
   ============================================================ */

(function () {
  "use strict";

  // --- Rule checks (mirror AGENTS.md) -----------------------
  // Each returns an error string if the value is invalid, else "".
  // Dates are stored ISO (YYYY-MM-DD) — valid for <time datetime> — and
  // displayed day-first (DD-MM-YYYY) via formatDate() below.
  const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

  function formatDate(iso) {
    const [y, m, d] = iso.split("-");
    return d + "-" + m + "-" + y;
  }

  const SVG_RULES = [
    [/<\s*svg[\s>]/i, false, "must contain an <svg> element"],
    [/viewbox\s*=/i, false, "the <svg> must have a viewBox"],
    [/<\s*script/i, true, "contains a <script> tag"],
    [/<\s*foreignobject/i, true, "contains a <foreignObject>"],
    [/<\s*(iframe|object|embed)[\s>]/i, true, "contains an embedded frame/object"],
    [/<\s*image[\s>]/i, true, "contains an <image> (embedded raster)"],
    [/\son\w+\s*=/i, true, "contains an inline event handler (on*)"],
    [/javascript:/i, true, "contains a javascript: URI"],
    [/https?:\/\//i, true, "references an external URL"],
    [/data:/i, true, "embeds a data: asset"],
  ];

  function validate(spec) {
    if (!spec || typeof spec !== "object") return "entry is not an object";
    if (!spec.model || typeof spec.model !== "string") return "missing model name";
    if (!spec.prompt || typeof spec.prompt !== "string") return "missing prompt";
    if (!ISO_DATE.test(spec.date || "")) return "date must be YYYY-MM-DD";
    if (!spec.svg || typeof spec.svg !== "string") return "missing svg markup";

    for (const [pattern, forbidden, message] of SVG_RULES) {
      const found = pattern.test(spec.svg);
      // `forbidden` true  -> pattern must NOT match
      // `forbidden` false -> pattern MUST match
      if (forbidden ? found : !found) return message;
    }
    return "";
  }

  // --- DOM builders -----------------------------------------
  function metaEl(spec) {
    const meta = document.createElement("div");
    meta.className = "svg-card__meta";

    const model = document.createElement("span");
    model.className = "svg-card__model";
    model.textContent = spec.model || "Unknown";

    const prompt = document.createElement("span");
    prompt.className = "svg-card__prompt";
    prompt.textContent = spec.prompt || "—";

    const date = document.createElement("time");
    date.className = "svg-card__date";
    if (ISO_DATE.test(spec.date || "")) {
      date.dateTime = spec.date;              // machine-readable ISO
      date.textContent = formatDate(spec.date); // day-first display
    } else {
      date.textContent = spec.date || "—";
    }

    meta.append(model, prompt, date);
    return meta;
  }

  // Parse the (already-validated) SVG string and scrub it as
  // defense-in-depth before inserting: we never assign a raw string
  // to innerHTML. Returns a live <svg> node, or null if unparseable.
  function buildSvgNode(svgString) {
    const parsed = new DOMParser().parseFromString(svgString, "text/html");
    const svg = parsed.body.querySelector("svg");
    if (!svg) return null;

    const nodes = [svg, ...svg.querySelectorAll("*")];
    for (const node of nodes) {
      const tag = node.tagName.toLowerCase();
      if (["script", "foreignobject", "image", "iframe", "object", "embed"].includes(tag)) {
        node.remove();
        continue;
      }
      for (const attr of [...node.attributes]) {
        const name = attr.name.toLowerCase();
        const value = attr.value.replace(/\s+/g, "").toLowerCase();
        const isUrlAttr = name === "href" || name === "xlink:href" || name === "src";
        if (
          name.startsWith("on") ||
          (isUrlAttr && /^(javascript:|data:|https?:)/.test(value)) ||
          /url\((['"]?)(javascript:|https?:|data:)/.test(value)
        ) {
          node.removeAttribute(attr.name);
        }
      }
    }
    return document.importNode(svg, true);
  }

  function specimenCard(spec) {
    const li = document.createElement("li");
    li.className = "svg-card";

    const frame = document.createElement("div");
    frame.className = "svg-frame";
    const node = buildSvgNode(spec.svg);
    if (node) {
      frame.appendChild(node);
    } else {
      return rejectedCard(spec, "SVG markup could not be parsed");
    }

    li.append(frame, metaEl(spec));
    return li;
  }

  function rejectedCard(spec, reason) {
    const li = document.createElement("li");
    li.className = "svg-card svg-card--empty";

    const frame = document.createElement("div");
    frame.className = "svg-frame";
    const note = document.createElement("span");
    note.className = "svg-frame__placeholder";
    note.textContent = "⚠ rejected — " + reason;
    frame.append(note);

    li.append(frame, metaEl(spec || {}));
    return li;
  }

  // --- Render -----------------------------------------------
  function render() {
    const grid = document.getElementById("svg-grid");
    if (!grid) return;

    const specimens = Array.isArray(window.SPECIMENS) ? window.SPECIMENS : [];
    const frag = document.createDocumentFragment();
    let ok = 0;
    const rejected = [];

    specimens.forEach((spec, i) => {
      const reason = validate(spec);
      if (reason) {
        rejected.push({ i, model: (spec && spec.model) || "(entry " + i + ")", reason });
        frag.appendChild(rejectedCard(spec, reason));
      } else {
        ok++;
        frag.appendChild(specimenCard(spec));
      }
    });

    grid.replaceChildren(frag);

    if (rejected.length) {
      console.warn(
        "PromptYard: " + rejected.length + " specimen(s) rejected:\n" +
          rejected.map((r) => "  • " + r.model + " — " + r.reason).join("\n")
      );
    }
    console.info("PromptYard: rendered " + ok + " specimen(s).");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
