/* global React */

/**
 * Select dropdown matching the Denariuss dark field style. Pass `options`
 * as strings or {value,label}; `placeholder` renders a disabled first option.
 */
export function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder,
  id,
  ...rest
}) {
  const fieldId = id || (label ? "sel-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const { style, ...r } = rest;
  const norm = options.map((o) =>
    typeof o === "string" ? { value: o, label: o } : o
  );
  return (
    <label htmlFor={fieldId} style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      {label ? (
        <span style={{ fontFamily: "var(--font-body)", fontSize: 13.5, fontWeight: 600, color: "var(--ink-2)" }}>
          {label}
        </span>
      ) : null}
      <select
        id={fieldId}
        value={value}
        onChange={onChange}
        defaultValue={value === undefined && placeholder ? "" : undefined}
        style={{
          width: "100%",
          padding: "15px 16px",
          borderRadius: "var(--r-sm)",
          background: "rgba(0,0,0,0.25)",
          border: "1px solid var(--line)",
          color: "var(--ink)",
          fontFamily: "var(--font-body)",
          fontSize: 15,
          outline: "none",
          appearance: "none",
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%2393A1B5' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'><path d='M6 9l6 6 6-6'/></svg>\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 14px center",
          ...style,
        }}
        onFocus={(e) => { e.target.style.borderColor = "var(--green)"; }}
        onBlur={(e) => { e.target.style.borderColor = "var(--line)"; }}
        {...r}
      >
        {placeholder ? <option value="" disabled>{placeholder}</option> : null}
        {norm.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </label>
  );
}
