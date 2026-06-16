/* global React */

/**
 * Denariuss Button — pill-shaped CTA. Primary uses the green gradient
 * with a glow shadow; ghost is a translucent glass outline on navy.
 * Renders as <a> when `href` is provided, else <button>.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  icon,
  iconRight,
  disabled = false,
  fullWidth = false,
  onClick,
  type = "button",
  ...rest
}) {
  const cls = [
    "btn",
    variant === "ghost" ? "btn-ghost" : "btn-primary",
    size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : "",
  ].filter(Boolean).join(" ");

  const style = {
    ...(fullWidth ? { width: "100%" } : null),
    ...(disabled ? { opacity: 0.5, pointerEvents: "none" } : null),
    ...(rest.style || {}),
  };

  const inner = (
    <>
      {icon ? <span className="btn-ic" aria-hidden="true">{icon}</span> : null}
      {children}
      {iconRight ? <span className="btn-ic" aria-hidden="true">{iconRight}</span> : null}
    </>
  );

  if (href && !disabled) {
    const { style: _s, ...anchorRest } = rest;
    return (
      <a href={href} className={cls} style={style} onClick={onClick} {...anchorRest}>
        {inner}
      </a>
    );
  }

  const { style: _s, ...btnRest } = rest;
  return (
    <button type={type} className={cls} style={style} disabled={disabled} onClick={onClick} {...btnRest}>
      {inner}
    </button>
  );
}
