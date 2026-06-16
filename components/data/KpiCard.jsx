/* global React */

/**
 * KpiCard — a single metric tile used across the Denariuss dashboard:
 * a small label, a big Sora figure, and a colored delta line.
 */
export function KpiCard({
  label,
  value,
  delta,
  trend = "up",
  accent = false,
  icon,
  ...rest
}) {
  const { style, ...r } = rest;
  return (
    <div
      style={{
        padding: 16,
        borderRadius: "var(--r-sm)",
        background: "var(--card)",
        border: "1px solid var(--line-soft)",
        ...style,
      }}
      {...r}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12.5, color: "var(--muted)", fontWeight: 600 }}>
        {icon ? <span aria-hidden="true" style={{ display: "inline-flex" }}>{icon}</span> : null}
        {label}
      </div>
      <div
        className={accent ? "grad-green" : ""}
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: 28,
          letterSpacing: "-0.02em",
          margin: "8px 0 4px",
          color: accent ? undefined : "var(--ink)",
        }}
      >
        {value}
      </div>
      {delta ? (
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: trend === "down" ? "var(--negative)" : "var(--positive)",
          }}
        >
          {delta}
        </div>
      ) : null}
    </div>
  );
}
