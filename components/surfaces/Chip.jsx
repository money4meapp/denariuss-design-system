/* global React */

/**
 * Chip — small rounded tag for inline metadata (e.g. "🔒 Dados criptografados").
 * Neutral by default; pass `accent` for the green-tinted variant used as a
 * category label inside chat / dashboard surfaces.
 */
export function Chip({ children, icon, accent = false, ...rest }) {
  const { style, ...r } = rest;
  const accentStyle = accent
    ? {
        background: "var(--green-150)",
        color: "var(--green-bright)",
        borderColor: "transparent",
        fontWeight: 700,
      }
    : null;
  return (
    <span className="chip" style={{ ...accentStyle, ...style }} {...r}>
      {icon ? <span aria-hidden="true" style={{ display: "inline-flex" }}>{icon}</span> : null}
      {children}
    </span>
  );
}
