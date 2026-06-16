A pill-shaped call-to-action button — the primary one carries the Denariuss green gradient with a soft glow; use it for the single most important action on a view.

```jsx
<Button variant="primary" size="lg" href="#precos" iconRight={<Arrow />}>
  Criar conta grátis
</Button>
<Button variant="ghost" size="lg" icon={<Chat />}>
  Ver o WhatsApp
</Button>
```

Variants: `primary` (green gradient, dark ink text — max one per section) and `ghost` (translucent glass outline, for secondary actions). Sizes: `sm` / `md` / `lg`. Pass `href` to render an `<a>`; `icon` / `iconRight` take SVG nodes; `fullWidth` stretches it inside cards and forms.
