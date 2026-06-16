/* global React */

/**
 * Denariuss Card — glass panel on navy. Optional hover lift and a
 * green-tinted "accent" treatment for highlighted/featured cards.
 */
export function Card({
  children,
  hover = false,
  accent = false,
  as = "div",
  padding = 26,
  onClick,
  ...rest
}) {
  const Tag = as;
  const style = {
    padding,
    ...(accent
      ? {
          background: "linear-gradient(135deg, var(--green-100), var(--card))",
          borderColor: "var(--green-400)",
        }
      : null),
    ...(rest.style || {}),
  };
  const { style: _s, ...tagRest } = rest;
  return (
    <Tag
      className={"card" + (hover ? " card-hover" : "")}
      style={style}
      onClick={onClick}
      {...tagRest}
    >
      {children}
    </Tag>
  );
}
