A compact metric tile for the dashboard — label, a big Sora figure, and a colored delta line. Use `accent` on the single most important figure (e.g. free balance) to render it in the green gradient.

```jsx
<KpiCard label="Entradas" value="R$ 8.400" delta="▲ +12% vs mês ant." trend="up" />
<KpiCard label="Saídas"   value="R$ 5.130" delta="▲ +4% vs mês ant."  trend="down" />
<KpiCard label="Saldo livre" value="R$ 3.270" delta="Meta R$ 3.000 ✓" accent />
```

Lay them out in a `repeat(3, 1fr)` grid with a 12px gap, as on `app.denariuss.com/dashboard`.
