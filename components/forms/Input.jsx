/* global React */

const dnFieldStyle = {
  width: "100%",
  padding: "15px 16px",
  borderRadius: "var(--r-sm)",
  background: "rgba(0,0,0,0.25)",
  border: "1px solid var(--line)",
  color: "var(--ink)",
  fontFamily: "var(--font-body)",
  fontSize: 15,
  outline: "none",
  transition: "border-color .2s",
};

/**
 * Text input on the dark fintech surface. Optional label and helper/error text.
 * Focus turns the border green.
 */
export function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  helper,
  error = false,
  id,
  ...rest
}) {
  const fieldId = id || (label ? "in-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const { style, ...r } = rest;
  return (
    <label htmlFor={fieldId} style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      {label ? (
        <span style={{ fontFamily: "var(--font-body)", fontSize: 13.5, fontWeight: 600, color: "var(--ink-2)" }}>
          {label}
        </span>
      ) : null}
      <input
        id={fieldId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          ...dnFieldStyle,
          borderColor: error ? "var(--negative)" : dnFieldStyle.border,
          ...style,
        }}
        onFocus={(e) => { if (!error) e.target.style.borderColor = "var(--green)"; }}
        onBlur={(e) => { e.target.style.borderColor = error ? "var(--negative)" : "var(--line)"; }}
        {...r}
      />
      {helper ? (
        <span style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: error ? "var(--negative)" : "var(--faint)" }}>
          {helper}
        </span>
      ) : null}
    </label>
  );
}
