---
name: denariuss-design
description: Use this skill to generate well-branded interfaces and assets for Denariuss (a Brazilian personal-finance app — "Domine o fluxo do seu dinheiro"), either for production or throwaway prototypes/mocks/decks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

Denariuss is a dark-fintech personal-finance product in **pt-BR**: deep navy canvas, one signal **green** (`#2ECF95`), big Sora headings, glass cards, pill buttons. People log expenses by messaging WhatsApp (text/voice/photo). Match that voice ("você", warm, plain-spoken, green payoff word in headlines).

Key files:
- `styles.css` — link this once; it pulls in all tokens + fonts. Tokens live in `tokens/`.
- `components/` — React primitives (`Button`, `Card`, `Eyebrow`, `Chip`, `Badge`, `Input`, `Select`, `KpiCard`), exported on `window.DenariussDesignSystem_a1c3fa`.
- `ui_kits/marketing/` — the real landing page recreation. `ui_kits/app/` — the dashboard.
- `assets/` — logos (white wordmark on navy, green on light, D$ mark) and woff2 fonts.
- `readme.md` — content fundamentals, visual foundations, iconography.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
