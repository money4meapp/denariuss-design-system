/* global React */

/**
 * Badge — a tiny solid label. `popular` is the green-gradient ribbon used on
 * the featured pricing plan; `positive`/`negative`/`warning`/`neutral` are
 * soft status pills.
 */
export function Badge({ children, tone = "neutral", ...rest }) {
  const { style, ...r } = rest;
  const tones = {
    popular: {
      color: "var(--green-ink)",
      background: "linear-gradient(180deg, var(--green-bright), var(--green))",
      boxShadow: "var(--shadow-pop)",
      textTransform: "uppercase",
      letterSpacing: "0.04em",
    },
    positive: { color: "var(--positive)", background: "var(--green-150)" },
    negative: { color: "var(--negative)", background: "rgba(255,138,138,0.14)" },
    warning: { color: "var(--warning)", background: "rgba(254,188,46,0.14)" },
    neutral: { color: "var(--ink-2)", background: "rgba(255,255,255,0.06)" },
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontFamily: "var(--font-body)",
    fontWeight: 800,
    fontSize: 12,
    padding: "5px 12px",
    borderRadius: "var(--r-pill)",
    whiteSpace: "nowrap",
    ...tones[tone],
    ...style,
  };
  return <span style={base} {...r}>{children}</span>;
}
