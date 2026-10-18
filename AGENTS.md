# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Current visual direction

- The home hero follows the supplied “WELCOME TO MY UNIVERSE” crayon poster: left-aligned tall hand lettering, compact bilingual role copy, four outlined pill links, and a large purple planet illustration on the right.
- The site protagonist remains the cute short-haired little girl astronaut. A small black-and-white tuxedo/cow cat sits at her feet as her companion; the cat does not replace the girl.
- The hero contains no dog, and all visible interface copy is English-only.
- The small tuxedo/cow cat in the hero is an interactive entrance to a separate pink floral photo-garden view. That gallery uses the user's real cat photos with previous/next, thumbnail, keyboard-arrow, Escape, and back-to-home interactions.
- The hero sky includes looping hand-drawn raster meteors with staggered motion, with a calm static fallback for reduced-motion visitors.
- The English hero lettering should feel visibly wax-crayon/chalk drawn; prefer Chalkduster/Chalkboard-style lettering over a clean geometric display face.
