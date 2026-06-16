Dark form fields used in lead-capture forms and app settings.

```jsx
<Input label="Melhor e-mail" type="email" placeholder="voce@email.com" />
<Select
  label="Qual seu maior desafio?"
  placeholder="Selecione…"
  options={["Sair das dívidas", "Organizar meus gastos", "Começar a investir"]}
/>
```

Both fields sit on a `rgba(0,0,0,0.25)` inset surface and turn the border green on focus. `Input` supports `helper` text and an `error` state (red border + red helper). `Select` accepts plain strings or `{value,label}` objects.
