Surface primitives that sit on the navy canvas.

```jsx
<Eyebrow dot>Como funciona</Eyebrow>
<Card hover accent padding={30}>
  <Badge tone="popular">Mais popular</Badge>
  <h3>Orçamento completo</h3>
  <Chip icon={<Lock />}>Dados criptografados</Chip>
  <Chip accent>🍽 Alimentação</Chip>
</Card>
```

- **Card** — glass panel; `hover` lifts it, `accent` gives the green-tinted featured fill.
- **Eyebrow** — uppercase kicker above a heading; `dot` or `icon`.
- **Chip** — neutral metadata tag, or `accent` for a green category label.
- **Badge** — solid label; `popular` is the gradient ribbon, plus `positive`/`negative`/`warning`/`neutral` status pills.
