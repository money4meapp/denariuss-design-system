# Denariuss — Design System

> **Denariuss — Domine o fluxo do seu dinheiro.**
> Sistema de gestão financeira pessoal (early-stage). Site: `denariuss.com` · App: `app.denariuss.com`.

Denariuss helps people see **where their money goes** and **forecast the months ahead**. Its signature trick: you log expenses by **sending a WhatsApp message** — text, voice note, or a photo of a receipt — and the AI files it for you. The product is in Portuguese (pt-BR) and speaks to an individual ("você").

This design system captures the brand's dark-fintech visual language so any agent can produce on-brand screens, landing pages, decks and mocks.

---

## Sources used to build this system

| Source | What it gave us |
|---|---|
| `uploads/Denariuss Landing (offline).html` | The **live marketing site** — bundled offline export. The real CSS (tokens, components, sections) and the React source for the hero, animated WhatsApp phone, steps, features, pricing and footer were extracted from it into `research/` and `ui_kits/marketing/`. |
| `uploads/Logo Denariuss.png` | Primary wordmark **Denariu$$** in brand green (for light backgrounds). → `assets/denariuss-logo-green.png` |
| `uploads/logodenariussbranco.png` | White wordmark for dark/navy backgrounds (the one used on the site). → `assets/denariuss-logo-white.png` |
| `uploads/Logo Denariuss Abreviado.png` | Abbreviated **D$** mark (avatars, app icon, favicon). → `assets/denariuss-mark-green.png` |
| Fonts inside the bundle | Sora, Hanken Grotesk, Plus Jakarta Sans, Space Grotesk (woff2). → `assets/fonts/` |

> The marketing UI kit is a **faithful recreation built from the real site code**, not from screenshots.

---

## Content fundamentals — how Denariuss writes

- **Language:** Portuguese (pt-BR), always. Currency is `R$` with `.` thousands and `,` decimals (`R$ 8.400`, `R$ 213,40`).
- **Voice:** second person, direct and warm — addresses **"você"**. Confident and reassuring, never preachy. "Pare de se perder em planilhas quebradas." "Saiba para onde seu dinheiro vai."
- **Tone:** plain-spoken empowerment. Names the pain (dívidas, planilhas, não saber pra onde o dinheiro foi) then offers relief. Avoids jargon and finance-bro hype.
- **Casing:** sentence case for headings and body. **UPPERCASE only** for the tracked eyebrow kickers ("PLANEJAMENTO FINANCEIRO DE VERDADE", "COMO FUNCIONA").
- **Headline pattern:** short, two-to-three lines, with the **last phrase in green** as the payoff ("…com a **Denariuss**", "…seu **dinheiro**").
- **Emoji:** used sparingly and purposefully — as **category markers** (🍽 Alimentação, 🛒 Mercado, 🚗 Transporte), channel markers (🎙 áudio, 📷 foto, 💬 texto), and the occasional friendly wave (👋). Never decorative confetti.
- **Microcopy:** trust-building and low-friction — "Zero spam. Cancele quando quiser.", "Dados criptografados", "Criar conta grátis". CTAs are imperative verbs: *Criar conta grátis, Começar agora, Garantir acesso.*
- **Numbers as proof:** concrete money figures and deltas (▲ +12% vs mês ant.) over vague claims.

---

## Visual foundations

**Overall vibe:** premium **dark fintech**. A deep navy canvas, one electric **signal green** (the "$$"), generous space, big confident Sora headings, and soft glass cards that float on subtle green ambient glows. Calm, trustworthy, modern — closer to a private-bank app than a budgeting toy.

- **Color:** Navy canvas (`#0F172A` → `#0A101F`) carries everything. A single brand green (`#2ECF95`, bright `#3CE6A6`, deep `#1E9D72`) is the *only* accent — used for CTAs, highlights, positive figures, focus rings and the wordmark's `$$`. Text is a 4-step cool-white ramp (`#EEF4F1` → `#5E6E84`). Money signals: green = positive/entradas, soft coral `#FF8A8A` = negative/saídas, amber `#FEBC2E` = warning.
- **Backgrounds:** never flat. A fixed **ambient field** layers radial green glows (top-center + corners) over a navy-to-deeper-navy vertical gradient, plus an optional faint dot-grain at ~5% opacity in overlay blend. No photography in the core brand; illustration is replaced by the live product UI (the animated phone) as the hero visual.
- **Type:** **Sora** (700–800, tight `-0.035em` tracking) for all display, headings and money figures; **Hanken Grotesk** (400–700, line-height 1.55) for body and UI. Space Grotesk is available for tabular numerals. Headlines are big and fluid (`clamp(40px, 6.6vw, 82px)`).
- **Corner radii:** soft and large. Inputs 12px, panels 18px, cards 26px, hero/feature blocks 34px. **Buttons, eyebrows, chips and badges are full pills (999px).**
- **Cards:** translucent glass — `rgba(255,255,255,0.035)` fill, `1px rgba(255,255,255,0.09)` border, `blur(10px)`, 26px radius. Featured cards switch to a green-tinted gradient fill with a green border. On hover they lift 4px and the border turns green.
- **Shadows:** two systems. (1) Deep ambient drops for floating elements (`0 50px 100px -40px rgba(0,0,0,.8)`). (2) A reserved **green glow** (`var(--green-glow)`) used *only* on primary buttons and featured/popular elements — never on plain cards.
- **Buttons:** primary = vertical green gradient (`#3CE6A6→#2ECF95`), dark-ink text, glow shadow + inner top highlight; hover lifts 2px and intensifies the glow. Ghost = translucent white 4% fill, hairline border, blur; hover brightens fill/border. Press = `translateY(1px) scale(.99)`.
- **Hover / press:** hovers brighten (lighter fill, green border, slight lift). Presses shrink slightly and settle down. Focus on fields turns the border green.
- **Borders:** hairline white at 9% (`--line`) is the default; 5.5% (`--line-soft`) for internal dividers; green at 22–40% for accented/featured edges.
- **Transparency & blur:** used deliberately — sticky nav, sidebar, glass cards and modals all use `backdrop-filter: blur(8–12px)` over the navy so the ambient glow reads through.
- **Motion:** restrained and physical. Scroll-reveal blocks fade up 26px over `0.7s cubic-bezier(.2,.7,.2,1)`. Buttons/cards use fast `0.18–0.25s` ease. The one *looping* animation is the WhatsApp phone demo (messages typing in). The brand dot pulses with a soft green glow. No bounces, no spinners-as-decoration. Respect `prefers-reduced-motion`.

---

## Iconography

- **Style:** thin **line icons**, `1.8` stroke weight, round caps and joins, `24×24` viewBox, `currentColor` — inline SVGs hand-built in the codebase (no icon-font dependency). They sit at 18–20px next to text. This system ships a small matching set inside the UI kits (`ui_kits/*/...jsx`); when you need more, use **[Lucide](https://lucide.dev)** — identical stroke language — and keep `stroke-width: 1.8`.
- **Emoji as functional icons:** category and channel markers use emoji (🍽 🛒 🚗 💼 📱 🎬 / 🎙 📷 💬) rather than custom glyphs — this is intentional brand vocabulary, not decoration. Keep them confined to those roles.
- **Unicode marks:** small triangles/markers for deltas and status (▲ ▼ ● ✓ ↑ ↓) appear in figures and KPI lines.
- **Logo / symbol:** the **D$** contraction is the icon form of the brand — use it for avatars, app icons and collapsed nav. Full **Denariu$$** wordmark for headers and footers. White wordmark on navy; green wordmark on light.
- **Never** hand-roll decorative illustration SVGs or invent a new icon style — stay on the Lucide-compatible line set.

---

## Index — what's in this system

**Foundations**
- `styles.css` — the entry point consumers link. `@import`s everything below.
- `tokens/colors.css` · `typography.css` · `spacing.css` · `fonts.css` · `base.css` — custom properties, font-faces, and the shared helper classes (`.btn`, `.card`, `.eyebrow`, `.chip`, `.grad-green`, `.dn-bg-field`).
- `guidelines/*.html` — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

**Components** (React, `window.DenariussDesignSystem_a1c3fa.*`)
- `components/buttons/Button` — pill CTA, primary/ghost, sm/md/lg, icon slots.
- `components/surfaces/` — `Card` (glass / accent), `Eyebrow` (kicker), `Chip` (tag), `Badge` (ribbon + status pills).
- `components/forms/` — `Input`, `Select` (dark fields, green focus).
- `components/data/KpiCard` — dashboard metric tile.

**UI kits**
- `ui_kits/marketing/` — faithful recreation of the **denariuss.com landing** (nav, hero, animated WhatsApp phone, proof strip, steps, features, pricing, security, footer). Built from the real site code.
- `ui_kits/app/` — the **Denariuss web app dashboard** (sidebar, topbar, KPIs, cash-flow chart, budget bars, transactions, add-transaction modal + toast). Composes the DS components.

**Assets**
- `assets/denariuss-logo-white.png` · `denariuss-logo-green.png` · `denariuss-mark-green.png` · `assets/fonts/*.woff2`

**Other**
- `SKILL.md` — makes this downloadable/usable as a Claude Code Agent Skill.
- `research/` — extracted source from the offline landing bundle (reference only).
