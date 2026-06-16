/* global React */

/**
 * Eyebrow — an uppercase pill kicker that sits above a section heading.
 * Show a pulsing dot OR a leading icon, not both.
 */
export function Eyebrow({ children, dot = false, icon, ...rest }) {
  const { style, ...r } = rest;
  return (
    <span className="eyebrow" style={style} {...r}>
      {dot ? <span className="dot" /> : null}
      {icon ? <span aria-hidden="true" style={{ display: "inline-flex" }}>{icon}</span> : null}
      {children}
    </span>
  );
}
