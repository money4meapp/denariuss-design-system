/* @ds-bundle: {"format":3,"namespace":"DenariussDesignSystem_a1c3fa","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"KpiCard","sourcePath":"components/data/KpiCard.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Badge","sourcePath":"components/surfaces/Badge.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Chip","sourcePath":"components/surfaces/Chip.jsx"},{"name":"Eyebrow","sourcePath":"components/surfaces/Eyebrow.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"1c9e20535af4","components/data/KpiCard.jsx":"dc9c559f5635","components/forms/Input.jsx":"2bb5c60dc8ed","components/forms/Select.jsx":"2058d2d58906","components/surfaces/Badge.jsx":"3a32a2ebdbcc","components/surfaces/Card.jsx":"fcc116f0ec97","components/surfaces/Chip.jsx":"9a108f9a7f63","components/surfaces/Eyebrow.jsx":"d1d00fccd8e8","research/comp1.jsx":"6591467622ed","research/comp2.jsx":"ae1ba4e95822","research/comp3.jsx":"db4855d1f7c1","research/comp4.jsx":"417f151f9931","research/comp5.jsx":"a430d6b90b06","research/comp6.jsx":"6bed6a7a4693","ui_kits/app/app.jsx":"97d0c8f23cf3","ui_kits/app/budget.jsx":"2f6c73c325b5","ui_kits/app/chrome.jsx":"55af2669e8e7","ui_kits/app/dashboard.jsx":"bfdcdac6ef2b","ui_kits/app/data.jsx":"81a4180d4591","ui_kits/app/movimentacao.jsx":"6b2b29daea4b","ui_kits/app/reports.jsx":"93d551bcc52c","ui_kits/marketing/foundations.jsx":"ae1ba4e95822","ui_kits/marketing/layout.jsx":"6bed6a7a4693","ui_kits/marketing/phone.jsx":"db4855d1f7c1","ui_kits/marketing/sections.jsx":"417f151f9931"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DenariussDesignSystem_a1c3fa = window.DenariussDesignSystem_a1c3fa || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */

/**
 * Denariuss Button — pill-shaped CTA. Primary uses the green gradient
 * with a glow shadow; ghost is a translucent glass outline on navy.
 * Renders as <a> when `href` is provided, else <button>.
 */
function Button({
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
  const cls = ["btn", variant === "ghost" ? "btn-ghost" : "btn-primary", size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : ""].filter(Boolean).join(" ");
  const style = {
    ...(fullWidth ? {
      width: "100%"
    } : null),
    ...(disabled ? {
      opacity: 0.5,
      pointerEvents: "none"
    } : null),
    ...(rest.style || {})
  };
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon ? /*#__PURE__*/React.createElement("span", {
    className: "btn-ic",
    "aria-hidden": "true"
  }, icon) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    className: "btn-ic",
    "aria-hidden": "true"
  }, iconRight) : null);
  if (href && !disabled) {
    const {
      style: _s,
      ...anchorRest
    } = rest;
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: cls,
      style: style,
      onClick: onClick
    }, anchorRest), inner);
  }
  const {
    style: _s,
    ...btnRest
  } = rest;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    style: style,
    disabled: disabled,
    onClick: onClick
  }, btnRest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/data/KpiCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */

/**
 * KpiCard — a single metric tile used across the Denariuss dashboard:
 * a small label, a big Sora figure, and a colored delta line.
 */
function KpiCard({
  label,
  value,
  delta,
  trend = "up",
  accent = false,
  icon,
  ...rest
}) {
  const {
    style,
    ...r
  } = rest;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: 16,
      borderRadius: "var(--r-sm)",
      background: "var(--card)",
      border: "1px solid var(--line-soft)",
      ...style
    }
  }, r), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: 12.5,
      color: "var(--muted)",
      fontWeight: 600
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex"
    }
  }, icon) : null, label), /*#__PURE__*/React.createElement("div", {
    className: accent ? "grad-green" : "",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 28,
      letterSpacing: "-0.02em",
      margin: "8px 0 4px",
      color: accent ? undefined : "var(--ink)"
    }
  }, value), delta ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: trend === "down" ? "var(--negative)" : "var(--positive)"
    }
  }, delta) : null);
}
Object.assign(__ds_scope, { KpiCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/KpiCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  transition: "border-color .2s"
};

/**
 * Text input on the dark fintech surface. Optional label and helper/error text.
 * Focus turns the border green.
 */
function Input({
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
  const {
    style,
    ...r
  } = rest;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13.5,
      fontWeight: 600,
      color: "var(--ink-2)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    style: {
      ...dnFieldStyle,
      borderColor: error ? "var(--negative)" : dnFieldStyle.border,
      ...style
    },
    onFocus: e => {
      if (!error) e.target.style.borderColor = "var(--green)";
    },
    onBlur: e => {
      e.target.style.borderColor = error ? "var(--negative)" : "var(--line)";
    }
  }, r)), helper ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: error ? "var(--negative)" : "var(--faint)"
    }
  }, helper) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */

/**
 * Select dropdown matching the Denariuss dark field style. Pass `options`
 * as strings or {value,label}; `placeholder` renders a disabled first option.
 */
function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder,
  id,
  ...rest
}) {
  const fieldId = id || (label ? "sel-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const {
    style,
    ...r
  } = rest;
  const norm = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13.5,
      fontWeight: 600,
      color: "var(--ink-2)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    value: value,
    onChange: onChange,
    defaultValue: value === undefined && placeholder ? "" : undefined,
    style: {
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
      backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%2393A1B5' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'><path d='M6 9l6 6 6-6'/></svg>\")",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 14px center",
      ...style
    },
    onFocus: e => {
      e.target.style.borderColor = "var(--green)";
    },
    onBlur: e => {
      e.target.style.borderColor = "var(--line)";
    }
  }, r), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder) : null, norm.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */

/**
 * Badge — a tiny solid label. `popular` is the green-gradient ribbon used on
 * the featured pricing plan; `positive`/`negative`/`warning`/`neutral` are
 * soft status pills.
 */
function Badge({
  children,
  tone = "neutral",
  ...rest
}) {
  const {
    style,
    ...r
  } = rest;
  const tones = {
    popular: {
      color: "var(--green-ink)",
      background: "linear-gradient(180deg, var(--green-bright), var(--green))",
      boxShadow: "var(--shadow-pop)",
      textTransform: "uppercase",
      letterSpacing: "0.04em"
    },
    positive: {
      color: "var(--positive)",
      background: "var(--green-150)"
    },
    negative: {
      color: "var(--negative)",
      background: "rgba(255,138,138,0.14)"
    },
    warning: {
      color: "var(--warning)",
      background: "rgba(254,188,46,0.14)"
    },
    neutral: {
      color: "var(--ink-2)",
      background: "rgba(255,255,255,0.06)"
    }
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
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base
  }, r), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Badge.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */

/**
 * Denariuss Card — glass panel on navy. Optional hover lift and a
 * green-tinted "accent" treatment for highlighted/featured cards.
 */
function Card({
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
    ...(accent ? {
      background: "linear-gradient(135deg, var(--green-100), var(--card))",
      borderColor: "var(--green-400)"
    } : null),
    ...(rest.style || {})
  };
  const {
    style: _s,
    ...tagRest
  } = rest;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: "card" + (hover ? " card-hover" : ""),
    style: style,
    onClick: onClick
  }, tagRest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */

/**
 * Chip — small rounded tag for inline metadata (e.g. "🔒 Dados criptografados").
 * Neutral by default; pass `accent` for the green-tinted variant used as a
 * category label inside chat / dashboard surfaces.
 */
function Chip({
  children,
  icon,
  accent = false,
  ...rest
}) {
  const {
    style,
    ...r
  } = rest;
  const accentStyle = accent ? {
    background: "var(--green-150)",
    color: "var(--green-bright)",
    borderColor: "transparent",
    fontWeight: 700
  } : null;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "chip",
    style: {
      ...accentStyle,
      ...style
    }
  }, r), icon ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex"
    }
  }, icon) : null, children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Chip.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */

/**
 * Eyebrow — an uppercase pill kicker that sits above a section heading.
 * Show a pulsing dot OR a leading icon, not both.
 */
function Eyebrow({
  children,
  dot = false,
  icon,
  ...rest
}) {
  const {
    style,
    ...r
  } = rest;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "eyebrow",
    style: style
  }, r), dot ? /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }) : null, icon ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex"
    }
  }, icon) : null, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// research/comp1.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "research/comp1.jsx", error: String((e && e.message) || e) }); }

// research/comp2.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
const {
  useState: useS,
  useEffect: useE,
  useRef: useR
} = React;

/* shared scroll ticker — IntersectionObserver is unreliable in sandboxed
   preview iframes, so we use rect checks on a throttled scroll/resize loop. */
const _watchers = new Set();
let _ticking = false;
function _runWatchers() {
  _ticking = false;
  _watchers.forEach(fn => fn());
}
function _schedule() {
  if (_ticking) return;
  _ticking = true;
  requestAnimationFrame(_runWatchers);
}
if (typeof window !== "undefined") {
  window.addEventListener("scroll", _schedule, {
    passive: true
  });
  window.addEventListener("resize", _schedule);
}
function watchInView(getEl, onIn, ratio = 0.88) {
  const fn = () => {
    const el = getEl();
    if (!el) return;
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (r.top < vh * ratio && r.bottom > 0) {
      onIn();
      _watchers.delete(fn);
    }
  };
  _watchers.add(fn);
  // initial checks (fonts/layout may settle a beat late)
  fn();
  requestAnimationFrame(fn);
  setTimeout(fn, 120);
  setTimeout(fn, 500);
  return () => _watchers.delete(fn);
}

/* Reveal-on-scroll wrapper */
function Reveal({
  children,
  as = "div",
  delay = 0,
  className = "",
  style,
  ...rest
}) {
  const ref = useR(null);
  const [shown, setShown] = useS(false);
  const [safe, setSafe] = useS(false);
  useE(() => watchInView(() => ref.current, () => setShown(true)), []);
  // guaranteed end-state: setTimeout fires even when rAF/transitions are
  // throttled (offscreen tabs), so content can never stay invisible.
  useE(() => {
    if (!shown) return;
    const id = setTimeout(() => setSafe(true), 900);
    return () => clearTimeout(id);
  }, [shown]);
  const Tag = as;
  const cls = "reveal " + (shown ? "in " : "") + (safe ? "reveal-safe " : "") + (delay ? "d" + delay + " " : "") + className;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    className: cls,
    style: style
  }, rest), children);
}

/* Count-up number — animates when scrolled into view */
function CountUp({
  to,
  prefix = "",
  suffix = "",
  dur = 1500,
  decimals = 0
}) {
  const ref = useR(null);
  const [val, setVal] = useS(0);
  useE(() => {
    let raf, snap;
    const stop = watchInView(() => ref.current, () => {
      const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        setVal(to);
        return;
      }
      const t0 = performance.now();
      const tick = now => {
        const p = Math.min(1, (now - t0) / dur);
        const e2 = 1 - Math.pow(1 - p, 3);
        setVal(to * e2);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      // fallback: if rAF is throttled, snap to final value
      snap = setTimeout(() => setVal(to), dur + 700);
    }, 0.96);
    return () => {
      stop();
      cancelAnimationFrame(raf);
      clearTimeout(snap);
    };
  }, [to]);
  const shown = decimals ? val.toFixed(decimals).replace(".", ",") : Math.round(val).toLocaleString("pt-BR");
  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, prefix, shown, suffix);
}

/* feature / ui icons (24-grid) */
function I({
  children,
  s = 22,
  sw = 1.8
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, children);
}
const Icons = {
  glance: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "9",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "3",
    width: "7",
    height: "5",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "12",
    width: "7",
    height: "9",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "16",
    width: "7",
    height: "5",
    rx: "1.5"
  })),
  repeat: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M17 2l4 4-4 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 11V9a4 4 0 0 1 4-4h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 22l-4-4 4-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 13v2a4 4 0 0 1-4 4H3"
  })),
  pie: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M21.21 15.89A10 10 0 1 1 8 2.83"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 12A10 10 0 0 0 12 2v10z"
  })),
  flow: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M3 17l6-6 4 4 8-8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 7h4v4"
  })),
  bell: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.7 21a2 2 0 0 1-3.4 0"
  })),
  card: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "5",
    width: "20",
    height: "14",
    rx: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 10h20"
  })),
  budget: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
  })),
  chat: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"
  })),
  lock: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "11",
    width: "18",
    height: "11",
    rx: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4"
  })),
  shield: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  })),
  nobank: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M3 21h18M5 21V10M19 21V10M12 3L4 8h16z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 21v-6h6v6"
  })),
  arrowR: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  })),
  check: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }))
};
Object.assign(window, {
  Reveal,
  CountUp,
  Icons,
  watchInView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "research/comp2.jsx", error: String((e && e.message) || e) }); }

// research/comp3.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
const {
  useState,
  useEffect,
  useRef,
  useCallback
} = React;

/* ---------- tiny icon set ---------- */
function Ico({
  d,
  s = 18,
  fill = "none",
  stroke = "currentColor",
  sw = 1.8,
  children
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: stroke,
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, d ? /*#__PURE__*/React.createElement("path", {
    d: d
  }) : children);
}
const IcCheck = p => /*#__PURE__*/React.createElement(Ico, _extends({}, p, {
  d: "M20 6L9 17l-5-5"
}));
const IcMic = p => /*#__PURE__*/React.createElement(Ico, _extends({}, p, {
  fill: "currentColor",
  stroke: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 11a7 7 0 0 1-14 0",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 18v3",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8"
}));
const IcPlay = p => /*#__PURE__*/React.createElement(Ico, _extends({}, p, {
  fill: "currentColor",
  stroke: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 5v14l11-7z"
}));
const IcCam = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("path", {
  d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "13",
  r: "4"
}));
const IcType = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("path", {
  d: "M4 7V5h16v2M9 19h6M12 5v14"
}));
const IcSpark = p => /*#__PURE__*/React.createElement(Ico, _extends({}, p, {
  fill: "currentColor",
  stroke: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 14l.8 2.6L22 17l-2.2.4L19 20l-.8-2.6L16 17l2.2-.4z"
}));
const WAVE = [9, 15, 7, 18, 11, 20, 8, 14, 6, 17, 10, 19, 7, 13, 9, 16, 8, 12, 15, 6, 18, 10, 7, 14, 9];

/* ===========================================================
   The animated WhatsApp phone
   =========================================================== */
function WAPhone({
  speed = 1,
  onFormat
}) {
  const [msgs, setMsgs] = useState([]);
  const [typing, setTyping] = useState(false);
  const bodyRef = useRef(null);
  const timers = useRef([]);
  const reduce = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // conversation script — each step pushes a message (or toggles typing)
  const script = [{
    wait: 700,
    fmt: "texto",
    push: {
      who: "me",
      kind: "text",
      text: "almoço 35",
      time: "09:41"
    }
  }, {
    wait: 600,
    typing: true
  }, {
    wait: 1100,
    typing: false,
    push: {
      who: "bot",
      kind: "card",
      title: "Despesa registrada",
      rows: [["Descrição", "Almoço"], ["Valor", "R$ 35,00"]],
      cat: "🍽 Alimentação",
      time: "09:41"
    }
  }, {
    wait: 1300,
    fmt: "audio",
    push: {
      who: "me",
      kind: "audio",
      dur: "0:06",
      time: "12:08"
    }
  }, {
    wait: 700,
    typing: true
  }, {
    wait: 1300,
    typing: false,
    push: {
      who: "bot",
      kind: "text",
      text: "🎙 Transcrevi: \u201cpaguei 120 no Uber esse mês\u201d",
      time: "12:08"
    }
  }, {
    wait: 500,
    typing: true
  }, {
    wait: 900,
    typing: false,
    push: {
      who: "bot",
      kind: "card",
      title: "Registrado por áudio",
      rows: [["Descrição", "Uber"], ["Valor", "R$ 120,00"]],
      cat: "🚗 Transporte",
      time: "12:08"
    }
  }, {
    wait: 1300,
    fmt: "foto",
    push: {
      who: "me",
      kind: "image",
      time: "19:23"
    }
  }, {
    wait: 800,
    typing: true
  }, {
    wait: 1500,
    typing: false,
    push: {
      who: "bot",
      kind: "card",
      title: "Comprovante lido",
      rows: [["Local", "Supermercado"], ["Data", "12/jun"]],
      amt: "R$ 213,40",
      cat: "🛒 Mercado",
      time: "19:23"
    }
  }, {
    wait: 1400,
    push: {
      who: "bot",
      kind: "summary",
      time: "19:24"
    }
  }, {
    wait: 4200,
    reset: true
  }];
  const run = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setMsgs([]);
    setTyping(false);
    let t = 0;
    const base = reduce ? 0.55 : 1;
    script.forEach(s => {
      t += (s.wait || 0) * base / speed;
      const id = setTimeout(() => {
        if (s.reset) {
          run();
          return;
        }
        if ("typing" in s) setTyping(s.typing);
        if (s.fmt && onFormat) onFormat(s.fmt);
        if (s.push) setMsgs(m => [...m, {
          ...s.push,
          id: Math.random()
        }]);
      }, t);
      timers.current.push(id);
    });
  }, [speed, reduce, onFormat]);
  useEffect(() => {
    run();
    return () => timers.current.forEach(clearTimeout);
  }, [run]);

  // keep chat pinned to bottom (no scrollIntoView)
  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight + 200;
  }, [msgs, typing]);
  return /*#__PURE__*/React.createElement("div", {
    className: "phone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "phone-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "phone-notch"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wa-status"
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "11",
    viewBox: "0 0 18 12",
    fill: "#cfe9df"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7",
    width: "3",
    height: "5",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "4",
    width: "3",
    height: "8",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "10",
    y: "1",
    width: "3",
    height: "11",
    rx: "1",
    opacity: ".5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "15",
    y: "1",
    width: "3",
    height: "11",
    rx: "1",
    opacity: ".3"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "12",
    viewBox: "0 0 20 14",
    fill: "none",
    stroke: "#cfe9df",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 5a13 13 0 0 1 18 0M4 8a9 9 0 0 1 12 0M7 11a4 4 0 0 1 6 0"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "12",
    viewBox: "0 0 26 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "1",
    width: "21",
    height: "11",
    rx: "3",
    fill: "none",
    stroke: "#cfe9df",
    strokeWidth: "1.3"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "15",
    height: "7",
    rx: "1.5",
    fill: "#5fbf9b"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "23",
    y: "4",
    width: "2",
    height: "5",
    rx: "1",
    fill: "#cfe9df"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "wa-header"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "16",
    viewBox: "0 0 9 16",
    fill: "none",
    stroke: "#8fa6b0",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 1L1 8l7 7"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wa-avatar"
  }, "D"), /*#__PURE__*/React.createElement("div", {
    className: "wa-title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wa-name"
  }, "Denariuss ", /*#__PURE__*/React.createElement("span", {
    className: "wa-verify"
  }, /*#__PURE__*/React.createElement(IcCheck, {
    s: 13,
    sw: 3
  }))), /*#__PURE__*/React.createElement("span", {
    className: "wa-presence"
  }, "assistente \u2022 online")), /*#__PURE__*/React.createElement("span", {
    className: "wa-head-ic"
  }, /*#__PURE__*/React.createElement(IcCam, {
    s: 20
  }), /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "wa-body",
    ref: bodyRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "wa-daybadge"
  }, "\uD83D\uDD12 HOJE"), msgs.map(m => /*#__PURE__*/React.createElement(Message, {
    key: m.id,
    m: m
  })), typing && /*#__PURE__*/React.createElement("div", {
    className: "wa-row bot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wa-typing"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)))), /*#__PURE__*/React.createElement("div", {
    className: "wa-input"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement(IcSpark, {
    s: 15
  }), " ", /*#__PURE__*/React.createElement("span", null, "Mensagem para a Denariuss\u2026")), /*#__PURE__*/React.createElement("div", {
    className: "mic"
  }, /*#__PURE__*/React.createElement(IcMic, {
    s: 20
  })))));
}

/* ---------- a single message ---------- */
function Message({
  m
}) {
  const Meta = () => /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, m.time, m.who === "me" && /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }, /*#__PURE__*/React.createElement(IcCheck, {
    s: 13,
    sw: 3
  })));
  if (m.kind === "text") return /*#__PURE__*/React.createElement("div", {
    className: "wa-row " + m.who
  }, /*#__PURE__*/React.createElement("div", {
    className: "bubble " + m.who
  }, /*#__PURE__*/React.createElement("span", {
    className: "t"
  }, m.text), /*#__PURE__*/React.createElement(Meta, null)));
  if (m.kind === "audio") return /*#__PURE__*/React.createElement("div", {
    className: "wa-row " + m.who
  }, /*#__PURE__*/React.createElement("div", {
    className: "bubble " + m.who
  }, /*#__PURE__*/React.createElement("div", {
    className: "wa-audio"
  }, /*#__PURE__*/React.createElement("span", {
    className: "play"
  }, /*#__PURE__*/React.createElement(IcPlay, {
    s: 13
  })), /*#__PURE__*/React.createElement("span", {
    className: "wa-wave"
  }, WAVE.map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      height: h
    }
  }))), /*#__PURE__*/React.createElement("span", {
    className: "dur"
  }, m.dur)), /*#__PURE__*/React.createElement(Meta, null)));
  if (m.kind === "image") return /*#__PURE__*/React.createElement("div", {
    className: "wa-row " + m.who
  }, /*#__PURE__*/React.createElement("div", {
    className: "bubble " + m.who,
    style: {
      padding: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wa-receipt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "receipt-img"
  }, /*#__PURE__*/React.createElement("div", {
    className: "receipt-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rp-h"
  }, "SUPERMERCADO"), /*#__PURE__*/React.createElement("div", {
    className: "rp-l"
  }, /*#__PURE__*/React.createElement("span", null, "Arroz 5kg"), /*#__PURE__*/React.createElement("span", null, "28,90")), /*#__PURE__*/React.createElement("div", {
    className: "rp-l"
  }, /*#__PURE__*/React.createElement("span", null, "Caf\xE9 500g"), /*#__PURE__*/React.createElement("span", null, "19,50")), /*#__PURE__*/React.createElement("div", {
    className: "rp-l"
  }, /*#__PURE__*/React.createElement("span", null, "Frutas"), /*#__PURE__*/React.createElement("span", null, "34,00")), /*#__PURE__*/React.createElement("div", {
    className: "rp-l"
  }, /*#__PURE__*/React.createElement("span", null, "Limpeza"), /*#__PURE__*/React.createElement("span", null, "45,10")), /*#__PURE__*/React.createElement("div", {
    className: "rp-l"
  }, /*#__PURE__*/React.createElement("span", null, "Outros"), /*#__PURE__*/React.createElement("span", null, "85,90")), /*#__PURE__*/React.createElement("div", {
    className: "rp-tot"
  }, /*#__PURE__*/React.createElement("span", null, "TOTAL"), /*#__PURE__*/React.createElement("span", null, "213,40"))), /*#__PURE__*/React.createElement("span", {
    className: "receipt-tag"
  }, "\uD83D\uDCC4 comprovante.jpg"))), /*#__PURE__*/React.createElement(Meta, null)));
  if (m.kind === "card") return /*#__PURE__*/React.createElement("div", {
    className: "wa-row " + m.who
  }, /*#__PURE__*/React.createElement("div", {
    className: "bubble " + m.who + " wa-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cc-top"
  }, /*#__PURE__*/React.createElement(IcCheck, {
    s: 15,
    sw: 3
  }), " ", m.title), m.amt && /*#__PURE__*/React.createElement("div", {
    className: "cc-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Valor"), /*#__PURE__*/React.createElement("span", {
    className: "cc-amt"
  }, m.amt)), m.rows.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    className: "cc-row",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, k), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, v))), /*#__PURE__*/React.createElement("div", {
    className: "cc-div"
  }), /*#__PURE__*/React.createElement("span", {
    className: "wa-cat"
  }, m.cat), /*#__PURE__*/React.createElement(Meta, null)));
  if (m.kind === "summary") return /*#__PURE__*/React.createElement("div", {
    className: "wa-row bot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bubble bot wa-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cc-top"
  }, /*#__PURE__*/React.createElement(IcSpark, {
    s: 15
  }), " Resumo do seu m\xEAs"), /*#__PURE__*/React.createElement("div", {
    className: "cc-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Entradas"), /*#__PURE__*/React.createElement("span", {
    className: "v",
    style: {
      color: "#3CE6A6"
    }
  }, "R$ 8.400")), /*#__PURE__*/React.createElement("div", {
    className: "cc-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Sa\xEDdas"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "R$ 5.130")), /*#__PURE__*/React.createElement("div", {
    className: "cc-div"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cc-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Saldo livre"), /*#__PURE__*/React.createElement("span", {
    className: "cc-amt"
  }, "R$ 3.270 \uD83D\uDFE2")), /*#__PURE__*/React.createElement(Meta, null)));
  return null;
}
window.WAPhone = WAPhone;
window.DnIco = {
  IcCheck,
  IcMic,
  IcPlay,
  IcCam,
  IcType,
  IcSpark
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "research/comp3.jsx", error: String((e && e.message) || e) }); }

// research/comp4.jsx
try { (() => {
/* global React, Reveal, CountUp, Icons */
const {
  useState: pS
} = React;

/* ===================== COMO FUNCIONA ===================== */
function Steps() {
  const items = [{
    n: "1",
    h: "Crie sua conta",
    p: "Em segundos, no plano grátis. Seus dados ficam só com você."
  }, {
    n: "2",
    h: "Mande uma mensagem",
    p: "Lance gastos por texto, áudio ou foto no WhatsApp — ou pelo app, como preferir."
  }, {
    n: "3",
    h: "Veja para onde vai",
    p: "Acompanhe o resumo do mês e descubra com clareza onde dá pra economizar."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    id: "como"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head center",
    style: {
      marginBottom: 54
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    as: "span",
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Como funciona"), /*#__PURE__*/React.createElement(Reveal, {
    as: "h2",
    className: "h-section",
    delay: 1,
    style: {
      marginTop: 20
    }
  }, "Do caos \xE0 clareza em 3 passos"), /*#__PURE__*/React.createElement(Reveal, {
    as: "p",
    className: "lead muted",
    delay: 2,
    style: {
      marginTop: 14
    }
  }, "Sem f\xF3rmula complicada. Voc\xEA come\xE7a hoje e j\xE1 v\xEA resultado no fim do m\xEAs.")), /*#__PURE__*/React.createElement("div", {
    className: "steps"
  }, items.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    className: "card card-hover step",
    delay: i + 1,
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "step-n"
  }, s.n), /*#__PURE__*/React.createElement("h3", null, s.h), /*#__PURE__*/React.createElement("p", null, s.p))))));
}

/* ======================== RECURSOS ======================== */
function Features() {
  const feats = [{
    ic: "glance",
    h: "Visão geral do mês",
    p: "Entradas, saídas e saldo num único painel, com leitura clara do seu dinheiro."
  }, {
    ic: "repeat",
    h: "Recorrentes e parcelados",
    p: "Lance uma vez — o Denariuss repete e projeta tudo automaticamente nos próximos meses."
  }, {
    ic: "pie",
    h: "Gastos por categoria",
    p: "Seus lançamentos organizados pra você enxergar onde dá pra economizar."
  }, {
    ic: "flow",
    h: "Fluxo futuro",
    p: "Uma prévia do que entra e sai nos próximos meses, sem surpresas no fim."
  }, {
    ic: "bell",
    h: "Lembretes automáticos",
    p: "Avisos das suas contas e do seu mês para agir cedo e não deixar nada vencer."
  }, {
    ic: "card",
    h: "Controle de cartões",
    p: "Faturas, limites e vencimentos numa visão fácil de acompanhar."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    id: "recursos"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head",
    style: {
      marginBottom: 48,
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    as: "span",
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Recursos"), /*#__PURE__*/React.createElement(Reveal, {
    as: "h2",
    className: "h-section",
    delay: 1,
    style: {
      marginTop: 20
    }
  }, "N\xE3o \xE9 s\xF3 registrar.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "grad-green"
  }, "\xC9 planejar o que vem.")), /*#__PURE__*/React.createElement(Reveal, {
    as: "p",
    className: "lead muted",
    delay: 2,
    style: {
      marginTop: 14
    }
  }, "A maioria dos apps s\xF3 mostra o que voc\xEA j\xE1 gastou. O Denariuss te ajuda a planejar os pr\xF3ximos meses \u2014 or\xE7amento, previs\xE3o e organiza\xE7\xE3o num s\xF3 lugar.")), /*#__PURE__*/React.createElement("div", {
    className: "feat-grid"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "card card-hover feat wide",
    delay: 1,
    style: {
      background: "linear-gradient(135deg, rgba(46,207,149,0.1), var(--card))",
      borderColor: "rgba(46,207,149,0.3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "feat-ic"
  }, /*#__PURE__*/React.createElement(Icons.budget, {
    s: 22
  })), /*#__PURE__*/React.createElement("h3", null, "Or\xE7amento completo"), /*#__PURE__*/React.createElement("p", null, "Defina quanto pretende gastar por categoria, simule cen\xE1rios e veja se vai fechar o m\xEAs no azul \u2014 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ink)"
    }
  }, "antes de ele acabar"), ". \xC9 o que os apps que s\xF3 monitoram gastos n\xE3o fazem.")), feats.slice(0, 1).map((f, i) => /*#__PURE__*/React.createElement(FeatCard, {
    key: "a" + i,
    f: f,
    d: 2
  })), feats.slice(1).map((f, i) => /*#__PURE__*/React.createElement(FeatCard, {
    key: "b" + i,
    f: f,
    d: i % 3 + 1
  })))));
}
function FeatCard({
  f,
  d
}) {
  const Ic = Icons[f.ic];
  return /*#__PURE__*/React.createElement(Reveal, {
    className: "card card-hover feat",
    delay: d
  }, /*#__PURE__*/React.createElement("div", {
    className: "feat-ic"
  }, /*#__PURE__*/React.createElement(Ic, {
    s: 22
  })), /*#__PURE__*/React.createElement("h3", null, f.h), /*#__PURE__*/React.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: f.p
    }
  }));
}

/* ========================= PREÇOS ========================= */
function Pricing() {
  const [annual, setAnnual] = pS(true);
  const plans = [{
    name: "Free",
    tag: "Grátis para sempre",
    mo: "0,00",
    yr: "0,00",
    econ: "",
    bill: "Sem cartão de crédito",
    cta: "Começar grátis",
    pop: false,
    feats: ["Dashboard básico", "Movimentação simples (gastos e recebimentos)", "Categorias essenciais"]
  }, {
    name: "PRO",
    tag: "Mais completo",
    mo: "29,90",
    yr: "19,90",
    econ: "Economize R$ 120,00 por ano",
    bill: "Anual · R$ 238,80 cobrado uma vez",
    cta: "Escolher PRO",
    pop: true,
    feats: ["Dashboard com análises financeiras", "Importação de faturas e extratos", "Orçamento completo (simulação e previsão)", "Assistente com IA no WhatsApp e Telegram", "Envio por áudio, imagem ou texto"]
  }, {
    name: "Black Premium",
    tag: "Para PF + PJ",
    mo: "39,90",
    yr: "34,90",
    econ: "Economize R$ 60,00 por ano",
    bill: "Anual · R$ 418,80 cobrado uma vez",
    cta: "Assinar agora",
    pop: false,
    feats: ["Tudo do PRO", "2 perfis de uso (separe PF e PJ)", "Perfis adicionais sob demanda", "Open Finance (em breve)"]
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    id: "precos"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head center",
    style: {
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    as: "span",
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Pre\xE7os"), /*#__PURE__*/React.createElement(Reveal, {
    as: "h2",
    className: "h-section",
    delay: 1,
    style: {
      marginTop: 20
    }
  }, "Comece de gra\xE7a.", /*#__PURE__*/React.createElement("br", null), "Evolua no seu ritmo."), /*#__PURE__*/React.createElement(Reveal, {
    as: "p",
    className: "lead muted",
    delay: 2,
    style: {
      marginTop: 14
    }
  }, "Mais completo que apps que s\xF3 monitoram gastos \u2014 a partir de R$ 19,90/m\xEAs no plano anual.")), /*#__PURE__*/React.createElement(Reveal, {
    className: "center",
    delay: 1,
    style: {
      marginBottom: 42,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "toggle"
  }, /*#__PURE__*/React.createElement("button", {
    className: annual ? "on" : "",
    onClick: () => setAnnual(true)
  }, "Anual"), /*#__PURE__*/React.createElement("button", {
    className: !annual ? "on" : "",
    onClick: () => setAnnual(false)
  }, "Mensal")), annual && /*#__PURE__*/React.createElement("span", {
    className: "save-pill"
  }, "\uD83D\uDFE2 2 meses gr\xE1tis no anual")), /*#__PURE__*/React.createElement("div", {
    className: "plans"
  }, plans.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    className: "card plan" + (p.pop ? " pop" : ""),
    delay: i + 1,
    key: i
  }, p.pop && /*#__PURE__*/React.createElement("div", {
    className: "plan-badge"
  }, "Mais popular"), /*#__PURE__*/React.createElement("div", {
    className: "plan-name"
  }, p.name), /*#__PURE__*/React.createElement("div", {
    className: "plan-tag"
  }, p.tag), /*#__PURE__*/React.createElement("div", {
    className: "plan-price"
  }, "R$ ", annual ? p.yr : p.mo, /*#__PURE__*/React.createElement("small", null, " /m\xEAs")), /*#__PURE__*/React.createElement("div", {
    className: "plan-econ"
  }, annual ? p.econ : ""), /*#__PURE__*/React.createElement("div", {
    className: "plan-bill"
  }, annual ? p.bill : p.name === "Free" ? "Sempre grátis" : "Cobrança mensal, cancele quando quiser"), /*#__PURE__*/React.createElement("ul", null, p.feats.map((f, j) => /*#__PURE__*/React.createElement("li", {
    key: j
  }, /*#__PURE__*/React.createElement(Icons.check, {
    s: 17,
    sw: 2.6
  }), f))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn " + (p.pop ? "btn-primary" : "btn-ghost")
  }, p.cta))))));
}

/* ========================= BÔNUS ========================= */
function Bonus() {
  const mods = [["Módulo 1", "Organize seu fluxo de caixa em 30 minutos"], ["Módulo 2", "Corte gastos sem abrir mão do que importa"], ["Módulo 3", "Tesouro, CDB e Fundos — o que escolher primeiro"]];
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "card bonus",
    style: {
      background: "linear-gradient(135deg, rgba(46,207,149,0.08), var(--card))",
      borderColor: "rgba(46,207,149,0.25)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      marginBottom: 18
    }
  }, "\uD83C\uDF81 B\xF4nus gratuito"), /*#__PURE__*/React.createElement("h2", {
    className: "h-sub",
    style: {
      fontSize: "clamp(26px,3.4vw,38px)",
      marginTop: 16,
      lineHeight: 1.1
    }
  }, "Do caos financeiro ao", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "grad-green"
  }, "primeiro investimento")), /*#__PURE__*/React.createElement("p", {
    className: "lead muted",
    style: {
      marginTop: 14
    }
  }, "Um mini-curso para acompanhar sua jornada no Denariuss: em menos de 2 horas voc\xEA organiza as finan\xE7as do zero e d\xE1 o primeiro passo nos investimentos \u2014 mesmo que hoje sobre R$ 0 no fim do m\xEAs."), /*#__PURE__*/React.createElement("div", {
    className: "bonus-mods"
  }, mods.map(([m, t], i) => /*#__PURE__*/React.createElement("div", {
    className: "m",
    key: i
  }, /*#__PURE__*/React.createElement(Icons.arrowR, {
    s: 18,
    style: {
      color: "var(--green)",
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, m, ":"), " ", t))))), /*#__PURE__*/React.createElement("form", {
    className: "card",
    style: {
      padding: 26,
      background: "rgba(0,0,0,0.25)"
    },
    onSubmit: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("h3", {
    className: "h-sub",
    style: {
      fontSize: 21,
      marginBottom: 16
    }
  }, "Quero minha vaga gratuita"), /*#__PURE__*/React.createElement("div", {
    className: "lead-form"
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Nome completo"
  }), /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "Melhor e-mail"
  }), /*#__PURE__*/React.createElement("select", {
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Qual seu maior desafio?"), /*#__PURE__*/React.createElement("option", null, "Sair das d\xEDvidas"), /*#__PURE__*/React.createElement("option", null, "Organizar meus gastos"), /*#__PURE__*/React.createElement("option", null, "Come\xE7ar a investir"), /*#__PURE__*/React.createElement("option", null, "Aumentar minha renda")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    style: {
      width: "100%",
      marginTop: 4
    }
  }, "Garantir acesso gratuito ", /*#__PURE__*/React.createElement(Icons.arrowR, {
    s: 18
  })), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: 12.5,
      textAlign: "center"
    }
  }, "Zero spam. Cancele quando quiser."))))));
}

/* ======================= SEGURANÇA ======================= */
function Security() {
  const items = [{
    ic: "lock",
    h: "Dados criptografados",
    p: "As informações trafegam por conexão segura (HTTPS) e ficam armazenadas de forma criptografada."
  }, {
    ic: "shield",
    h: "Você no controle (LGPD)",
    p: "Seus dados são seus: exporte ou exclua sua conta quando quiser, seguindo a LGPD."
  }, {
    ic: "nobank",
    h: "Sem acesso ao seu banco",
    p: "Você registra o que quiser. Nunca pedimos a senha da sua conta bancária."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head center",
    style: {
      marginBottom: 46
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    as: "span",
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement(Icons.lock, {
    s: 14
  }), " Seguran\xE7a & Privacidade"), /*#__PURE__*/React.createElement(Reveal, {
    as: "h2",
    className: "h-section",
    delay: 1,
    style: {
      marginTop: 20
    }
  }, "Seus dados financeiros, protegidos"), /*#__PURE__*/React.createElement(Reveal, {
    as: "p",
    className: "lead muted",
    delay: 2,
    style: {
      marginTop: 14
    }
  }, "Lidar com dinheiro exige confian\xE7a. Veja, de forma concreta, como cuidamos disso.")), /*#__PURE__*/React.createElement("div", {
    className: "sec-grid"
  }, items.map((s, i) => {
    const Ic = Icons[s.ic];
    return /*#__PURE__*/React.createElement(Reveal, {
      className: "card card-hover feat",
      delay: i + 1,
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "feat-ic"
    }, /*#__PURE__*/React.createElement(Ic, {
      s: 22
    })), /*#__PURE__*/React.createElement("h3", null, s.h), /*#__PURE__*/React.createElement("p", null, s.p));
  }))));
}

/* ====================== FINAL CTA ====================== */
function FinalCTA() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "final"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      maxWidth: 760,
      margin: "0 auto"
    }
  }, "Pronto para saber para onde", /*#__PURE__*/React.createElement("br", null), "seu dinheiro vai?"), /*#__PURE__*/React.createElement("p", {
    className: "lead muted",
    style: {
      maxWidth: 560,
      margin: "18px auto 0"
    }
  }, "Crie sua conta gr\xE1tis e organize o m\xEAs em poucos minutos. Seu primeiro gasto pode ser uma mensagem no WhatsApp."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      justifyContent: "center",
      marginTop: 34,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn btn-primary btn-lg"
  }, "Criar conta gr\xE1tis ", /*#__PURE__*/React.createElement(Icons.arrowR, {
    s: 18
  })), /*#__PURE__*/React.createElement("a", {
    href: "#whatsapp",
    className: "btn btn-ghost btn-lg"
  }, /*#__PURE__*/React.createElement(Icons.chat, {
    s: 18
  }), " Ver o WhatsApp em a\xE7\xE3o")))));
}

/* ========================= FOOTER ========================= */
function Footer() {
  const cols = [["Produto", [["WhatsApp", "#whatsapp"], ["Recursos", "#recursos"], ["Preços", "#precos"], ["Como funciona", "#como"]]], ["Empresa", [["Sobre nós", "#"], ["Blog", "#"], ["Contato", "#"]]], ["Legal", [["Privacidade", "#"], ["Termos de uso", "#"], ["Cookies", "#"], ["LGPD", "#"]]]];
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot-col"
  }, /*#__PURE__*/React.createElement("img", {
    src: typeof window !== "undefined" && window.__resources && window.__resources.logo || "assets/denariuss-logo.png",
    alt: "Denariuss",
    style: {
      height: 24,
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: 14.5,
      maxWidth: 300
    }
  }, "Controle financeiro de verdade, para quem quer organizar os gastos e decidir melhor \u2014 com clareza."), /*#__PURE__*/React.createElement("div", {
    className: "chip",
    style: {
      marginTop: 18
    }
  }, "\uD83D\uDD12 Dados criptografados")), cols.map(([h, links], i) => /*#__PURE__*/React.createElement("div", {
    className: "foot-col",
    key: i
  }, /*#__PURE__*/React.createElement("h5", null, h), links.map(([t, href], j) => /*#__PURE__*/React.createElement("a", {
    href: href,
    key: j
  }, t))))), /*#__PURE__*/React.createElement("div", {
    className: "foot-bottom"
  }, /*#__PURE__*/React.createElement("span", {
    className: "muted",
    style: {
      fontSize: 13.5
    }
  }, "\xA9 2026 Denariuss. Todos os direitos reservados. Indaiatuba, SP \u2014 Brasil."), /*#__PURE__*/React.createElement("div", {
    className: "socials"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Instagram"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "5.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.4",
    cy: "6.6",
    r: "1.1",
    fill: "currentColor",
    stroke: "none"
  }))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "LinkedIn"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.5 8h4V24h-4zM8 8h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2C19.6 8 21 10 21 14v10h-4v-9c0-2.1-.8-3.2-2.3-3.2-1.3 0-2 .9-2.35 1.8-.13.3-.16.75-.16 1.2V24H8z"
  }))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "YouTube"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M23 7.5a3 3 0 0 0-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 0 0 1 7.5 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1C5 19 12 19 12 19s7 0 8.9-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23.5 12 31 31 0 0 0 23 7.5zM9.8 15.3V8.7l5.7 3.3z"
  })))))));
}
Object.assign(window, {
  Steps,
  Features,
  Pricing,
  Bonus,
  Security,
  FinalCTA,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "research/comp4.jsx", error: String((e && e.message) || e) }); }

// research/comp5.jsx
try { (() => {
/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakSelect, TweakSlider, TweakToggle,
   Nav, Hero, ProofStrip, WhatsAppSection, Steps, Features, Pricing, Bonus, Security, FinalCTA, Footer */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "whatsapp",
  "waVariant": "side",
  "speed": 1,
  "glow": true,
  "headingFont": "Sora"
} /*EDITMODE-END*/;
const FONTS = {
  "Sora": "'Sora', sans-serif",
  "Space Grotesk": "'Space Grotesk', sans-serif",
  "Plus Jakarta": "'Plus Jakarta Sans', sans-serif"
};
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(() => {
    document.documentElement.style.setProperty("--font-display", FONTS[t.headingFont] || FONTS.Sora);
  }, [t.headingFont]);
  React.useEffect(() => {
    document.body.classList.toggle("glow-off", !t.glow);
  }, [t.glow]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, {
    variant: t.heroVariant,
    speed: t.speed
  }), /*#__PURE__*/React.createElement(ProofStrip, null), /*#__PURE__*/React.createElement(WhatsAppSection, {
    variant: t.waVariant,
    speed: t.speed
  }), /*#__PURE__*/React.createElement(Steps, null), /*#__PURE__*/React.createElement(Features, null), /*#__PURE__*/React.createElement(Pricing, null), /*#__PURE__*/React.createElement(Bonus, null), /*#__PURE__*/React.createElement(Security, null), /*#__PURE__*/React.createElement(FinalCTA, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Layout"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Hero",
    value: t.heroVariant,
    options: ["whatsapp", "dashboard", "split"],
    onChange: v => setTweak("heroVariant", v)
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Se\xE7\xE3o WhatsApp",
    value: t.waVariant,
    options: ["side", "stacked"],
    onChange: v => setTweak("waVariant", v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Movimento"
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "Velocidade da conversa",
    value: t.speed,
    min: 0.6,
    max: 1.8,
    step: 0.1,
    unit: "\xD7",
    onChange: v => setTweak("speed", v)
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Brilho verde (glow)",
    value: t.glow,
    onChange: v => setTweak("glow", v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Tipografia"
  }), /*#__PURE__*/React.createElement(TweakSelect, {
    label: "Fonte dos t\xEDtulos",
    value: t.headingFont,
    options: ["Sora", "Space Grotesk", "Plus Jakarta"],
    onChange: v => setTweak("headingFont", v)
  })));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "research/comp5.jsx", error: String((e && e.message) || e) }); }

// research/comp6.jsx
try { (() => {
/* global React, Reveal, CountUp, Icons, WAPhone */
const {
  useState: uS,
  useEffect: uE,
  useRef: uR
} = React;
const LOGO = typeof window !== "undefined" && window.__resources && window.__resources.logo || "assets/denariuss-logo.png";

/* ============================ NAV ============================ */
function Nav() {
  const [scrolled, setScrolled] = uS(false);
  uE(() => {
    const f = () => setScrolled(window.scrollY > 24);
    f();
    window.addEventListener("scroll", f, {
      passive: true
    });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav" + (scrolled ? " scrolled" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap nav-inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    "aria-label": "Denariuss"
  }, /*#__PURE__*/React.createElement("img", {
    className: "nav-logo",
    src: LOGO,
    alt: "Denariuss"
  })), /*#__PURE__*/React.createElement("div", {
    className: "nav-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#whatsapp"
  }, "WhatsApp"), /*#__PURE__*/React.createElement("a", {
    href: "#como"
  }, "Como funciona"), /*#__PURE__*/React.createElement("a", {
    href: "#recursos"
  }, "Recursos"), /*#__PURE__*/React.createElement("a", {
    href: "#precos"
  }, "Pre\xE7os")), /*#__PURE__*/React.createElement("div", {
    className: "nav-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn btn-ghost btn-sm"
  }, "Acessar"), /*#__PURE__*/React.createElement("a", {
    href: "#precos",
    className: "btn btn-primary btn-sm"
  }, "Criar conta gr\xE1tis"))));
}

/* ===================== DASHBOARD MOCKUP ===================== */
function Dashboard() {
  const months = [{
    l: "Jan",
    i: 52,
    o: 40
  }, {
    l: "Fev",
    i: 64,
    o: 46
  }, {
    l: "Mar",
    i: 58,
    o: 52
  }, {
    l: "Abr",
    i: 70,
    o: 44
  }, {
    l: "Mai",
    i: 66,
    o: 58
  }, {
    l: "Jun",
    i: 84,
    o: 51
  }];
  const nav = [["glance", "Dashboard", true], ["repeat", "Transações"], ["budget", "Orçamento"], ["pie", "Relatórios"], ["card", "Cartões"]];
  return /*#__PURE__*/React.createElement("div", {
    className: "browser"
  }, /*#__PURE__*/React.createElement("div", {
    className: "browser-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lights"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      background: "#ff5f57"
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      background: "#febc2e"
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      background: "#28c840"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "url"
  }, "app.denariuss.com/dashboard")), /*#__PURE__*/React.createElement("div", {
    className: "dash"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "dash-side"
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO,
    alt: "",
    style: {
      height: 18,
      marginBottom: 14,
      opacity: .95
    }
  }), nav.map(([ic, label, on], i) => {
    const Ic = Icons[ic];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "di" + (on ? " on" : "")
    }, /*#__PURE__*/React.createElement(Ic, {
      s: 17
    }), " ", label);
  })), /*#__PURE__*/React.createElement("div", {
    className: "dash-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kpis"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kpi"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lab"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#3CE6A6"
    }
  }, "\u2191"), " Entradas"), /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, "R$ ", /*#__PURE__*/React.createElement(CountUp, {
    to: 8400
  })), /*#__PURE__*/React.createElement("div", {
    className: "delta up"
  }, "\u25B2 +12% vs m\xEAs ant.")), /*#__PURE__*/React.createElement("div", {
    className: "kpi"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lab"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#ff8a8a"
    }
  }, "\u2193"), " Sa\xEDdas"), /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, "R$ ", /*#__PURE__*/React.createElement(CountUp, {
    to: 5130
  })), /*#__PURE__*/React.createElement("div", {
    className: "delta down"
  }, "\u25B2 +4% vs m\xEAs ant.")), /*#__PURE__*/React.createElement("div", {
    className: "kpi"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lab"
  }, "\u25CE Saldo livre"), /*#__PURE__*/React.createElement("div", {
    className: "val grad-green"
  }, "R$ ", /*#__PURE__*/React.createElement(CountUp, {
    to: 3270
  })), /*#__PURE__*/React.createElement("div", {
    className: "delta up"
  }, "Meta R$ 3.000 \u2713"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph"
  }, /*#__PURE__*/React.createElement("span", null, "Entrada vs Sa\xEDda"), /*#__PURE__*/React.createElement("span", {
    className: "muted",
    style: {
      fontSize: 11,
      fontWeight: 600
    }
  }, "6 meses")), /*#__PURE__*/React.createElement("div", {
    className: "bars"
  }, months.map((m, i) => /*#__PURE__*/React.createElement("div", {
    className: "barcol",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "pair"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b in",
    style: {
      height: m.i + "%"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "b out",
    style: {
      height: m.o + "%"
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, m.l))))), /*#__PURE__*/React.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph"
  }, /*#__PURE__*/React.createElement("span", null, "Por categoria")), /*#__PURE__*/React.createElement("div", {
    className: "donut-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "donut"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ctr"
  }, /*#__PURE__*/React.createElement("small", null, "Total"), /*#__PURE__*/React.createElement("b", null, "R$ 5,1k"))), /*#__PURE__*/React.createElement("div", {
    className: "legend"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw",
    style: {
      background: "#2ECF95"
    }
  }), "Moradia 36%"), /*#__PURE__*/React.createElement("div", {
    className: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw",
    style: {
      background: "#2a9c79"
    }
  }), "Alimenta\xE7\xE3o 22%"), /*#__PURE__*/React.createElement("div", {
    className: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw",
    style: {
      background: "#1f6e58"
    }
  }), "Transporte 15%"), /*#__PURE__*/React.createElement("div", {
    className: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw",
    style: {
      background: "#2c3b4f"
    }
  }), "Outros 27%"))))))));
}

/* ============================ HERO ============================ */
function Hero({
  variant,
  speed = 1
}) {
  const Heading = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Reveal, {
    as: "span",
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Planejamento financeiro de verdade"), /*#__PURE__*/React.createElement(Reveal, {
    as: "h1",
    className: "h-display",
    delay: 1,
    style: {
      marginTop: 24
    }
  }, "Saiba para onde", /*#__PURE__*/React.createElement("br", null), "seu dinheiro vai", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "grad-green"
  }, "com a Denariuss")), /*#__PURE__*/React.createElement(Reveal, {
    as: "p",
    className: "lead",
    delay: 2,
    style: {
      marginTop: 22,
      maxWidth: 560
    }
  }, "Pare de se perder em planilhas quebradas. Voc\xEA monta o or\xE7amento, prev\xEA o fluxo dos pr\xF3ximos meses e registra gastos ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ink)"
    }
  }, "mandando uma mensagem no WhatsApp"), " \u2014 tudo num s\xF3 lugar."), /*#__PURE__*/React.createElement(Reveal, {
    className: "hero-actions",
    delay: 3
  }, /*#__PURE__*/React.createElement("a", {
    href: "#precos",
    className: "btn btn-primary btn-lg"
  }, "Criar conta gr\xE1tis ", /*#__PURE__*/React.createElement(Icons.arrowR, {
    s: 18
  })), /*#__PURE__*/React.createElement("a", {
    href: "#whatsapp",
    className: "btn btn-ghost btn-lg"
  }, /*#__PURE__*/React.createElement(Icons.chat, {
    s: 18
  }), " Ver o WhatsApp")), /*#__PURE__*/React.createElement(Reveal, {
    className: "trust",
    delay: 4
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icons.check, {
    s: 16,
    sw: 2.4
  }), " Plano gr\xE1tis para come\xE7ar"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icons.check, {
    s: 16,
    sw: 2.4
  }), " Sem cart\xE3o de cr\xE9dito")));
  if (variant === "whatsapp") {
    return /*#__PURE__*/React.createElement("header", {
      className: "hero wrap",
      id: "top"
    }, /*#__PURE__*/React.createElement("div", {
      className: "hero-split"
    }, /*#__PURE__*/React.createElement("div", null, Heading), /*#__PURE__*/React.createElement(Reveal, {
      delay: 2,
      style: {
        display: "flex",
        justifyContent: "center",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "float-tag",
      style: {
        top: 8,
        left: -6,
        animationDelay: "0s"
      }
    }, "\uD83D\uDFE2 IA respondeu em 2s"), /*#__PURE__*/React.createElement("div", {
      className: "float-tag",
      style: {
        bottom: 34,
        right: -10,
        animationDelay: "1.4s"
      }
    }, "\u2705 Gasto lan\xE7ado"), /*#__PURE__*/React.createElement(WAPhone, {
      speed: speed
    }))));
  }
  if (variant === "split") {
    return /*#__PURE__*/React.createElement("header", {
      className: "hero wrap",
      id: "top"
    }, /*#__PURE__*/React.createElement("div", {
      className: "hero-split"
    }, /*#__PURE__*/React.createElement("div", null, Heading), /*#__PURE__*/React.createElement(Reveal, {
      delay: 2,
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(Dashboard, null), /*#__PURE__*/React.createElement("a", {
      href: "#whatsapp",
      className: "float-tag",
      style: {
        bottom: -18,
        left: 18,
        textDecoration: "none",
        color: "var(--ink)"
      }
    }, "\uD83D\uDCF2 Registre por WhatsApp \u2192"))));
  }

  // default: centered + dashboard below
  return /*#__PURE__*/React.createElement("header", {
    className: "hero wrap center",
    id: "top",
    style: {
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: "0 auto"
    }
  }, Heading), /*#__PURE__*/React.createElement(Reveal, {
    delay: 2,
    style: {
      marginTop: 54,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Dashboard, null), /*#__PURE__*/React.createElement("a", {
    href: "#whatsapp",
    className: "float-tag",
    style: {
      top: -16,
      right: 24,
      textDecoration: "none",
      color: "var(--ink)"
    }
  }, "\uD83D\uDCF2 Registre por WhatsApp \u2192"), /*#__PURE__*/React.createElement("div", {
    className: "float-tag",
    style: {
      bottom: -18,
      left: 24
    }
  }, "\uD83D\uDFE2 IA lan\xE7ou seu gasto")));
}

/* ========== social proof strip ========== */
function ProofStrip() {
  const stats = [{
    to: 12000,
    suffix: "+",
    cap: "gastos lançados por mês"
  }, {
    to: 2,
    suffix: "s",
    cap: "tempo médio de resposta da IA",
    dec: 0
  }, {
    to: 3,
    suffix: " formatos",
    cap: "áudio, foto ou texto"
  }, {
    to: 100,
    suffix: "%",
    cap: "dos dados criptografados"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "wrap",
    style: {
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "card statline",
    style: {
      padding: "30px 34px",
      justifyContent: "space-between"
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "stat",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "num grad-green"
  }, /*#__PURE__*/React.createElement(CountUp, {
    to: s.to,
    suffix: s.suffix,
    decimals: s.dec || 0
  })), /*#__PURE__*/React.createElement("div", {
    className: "cap"
  }, s.cap)))));
}

/* ===================== WHATSAPP SECTION ===================== */
function WhatsAppSection({
  variant,
  speed = 1
}) {
  const [fmt, setFmt] = uS("texto");
  const formats = [{
    id: "texto",
    ic: "type",
    h: "Mande um texto",
    p: "Escreva \u201calmoço 35\u201d e pronto. A IA entende valor, descrição e categoria sozinha."
  }, {
    id: "audio",
    ic: "mic",
    h: "Grave um áudio",
    p: "Sem tempo de digitar? Fale naturalmente — a Denariuss transcreve e lança a despesa."
  }, {
    id: "foto",
    ic: "cam",
    h: "Tire foto do comprovante",
    p: "Fotografe a nota ou o cupom fiscal. Ela lê o valor, o local e a data automaticamente."
  }];
  const fIco = {
    type: window.DnIco.IcType,
    mic: window.DnIco.IcMic,
    cam: window.DnIco.IcCam
  };
  const Cards = /*#__PURE__*/React.createElement("div", {
    className: "fmt-list"
  }, formats.map(f => {
    const Ic = fIco[f.ic];
    const on = fmt === f.id;
    return /*#__PURE__*/React.createElement("div", {
      className: "fmt" + (on ? " active" : ""),
      key: f.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "fmt-ic"
    }, /*#__PURE__*/React.createElement(Ic, {
      s: 24
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, f.h), /*#__PURE__*/React.createElement("p", null, f.p)));
  }));
  const Head = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Reveal, {
    as: "span",
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement(Icons.chat, {
    s: 14
  }), " WhatsApp & Telegram"), /*#__PURE__*/React.createElement(Reveal, {
    as: "h2",
    className: "h-section",
    delay: 1,
    style: {
      marginTop: 22
    }
  }, "Registrar um gasto \xE9 t\xE3o simples", /*#__PURE__*/React.createElement("br", null), "quanto ", /*#__PURE__*/React.createElement("span", {
    className: "grad-green"
  }, "mandar uma mensagem")), /*#__PURE__*/React.createElement(Reveal, {
    as: "p",
    className: "lead",
    delay: 2,
    style: {
      marginTop: 18,
      maxWidth: 540
    }
  }, "Envie ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ink)"
    }
  }, "\xE1udio"), ", ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ink)"
    }
  }, "foto do comprovante"), " ou s\xF3 um ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ink)"
    }
  }, "texto"), ". O assistente com IA lan\xE7a a despesa, te responde na hora e ainda manda lembretes e o resumo do m\xEAs \u2014 sem voc\xEA abrir o app."));
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    id: "whatsapp",
    style: {
      background: "linear-gradient(180deg, transparent, rgba(46,207,149,0.04) 35%, transparent)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, variant === "stacked" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "section-head center",
    style: {
      marginBottom: 48
    }
  }, Head), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
      gap: 40,
      alignItems: "center"
    },
    className: "wa-3col"
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 1
  }, Cards.props.children.slice(0, 2) && Cards), /*#__PURE__*/React.createElement(Reveal, {
    delay: 2,
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(WAPhone, {
    speed: speed,
    onFormat: setFmt
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 3,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Bene, {
    ic: "spark",
    h: "IA confirma na hora",
    p: "Cada lan\xE7amento volta com valor, categoria e data \u2014 voc\xEA confere e segue."
  }), /*#__PURE__*/React.createElement(Bene, {
    ic: "bell",
    h: "Lembretes na conversa",
    p: "Contas a vencer e o resumo do m\xEAs chegam direto no seu WhatsApp."
  }), /*#__PURE__*/React.createElement(Bene, {
    ic: "check",
    h: "Zero fric\xE7\xE3o",
    p: "Nada de abrir app, achar a tela e digitar. S\xF3 mandar mensagem."
  })))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.05fr",
      gap: 54,
      alignItems: "center"
    },
    className: "wa-2col"
  }, /*#__PURE__*/React.createElement("div", null, Head, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30
    }
  }, Cards)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 1,
    style: {
      display: "flex",
      justifyContent: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "float-tag",
    style: {
      top: 18,
      right: 0
    }
  }, "\uD83C\uDF99 \xC1udio transcrito"), /*#__PURE__*/React.createElement("div", {
    className: "float-tag",
    style: {
      bottom: 60,
      left: -8,
      animationDelay: "1.6s"
    }
  }, "\uD83D\uDCC4 Nota lida pela IA"), /*#__PURE__*/React.createElement(WAPhone, {
    speed: speed,
    onFormat: setFmt
  })))));
}
function Bene({
  ic,
  h,
  p
}) {
  const map = {
    spark: window.DnIco.IcSpark,
    bell: Icons.bell,
    check: Icons.check
  };
  const Ic = map[ic];
  return /*#__PURE__*/React.createElement("div", {
    className: "fmt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fmt-ic"
  }, /*#__PURE__*/React.createElement(Ic, {
    s: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, h), /*#__PURE__*/React.createElement("p", null, p)));
}
window.Nav = Nav;
window.Hero = Hero;
window.WhatsAppSection = WhatsAppSection;
window.Dashboard = Dashboard;
window.ProofStrip = ProofStrip;
})(); } catch (e) { __ds_ns.__errors.push({ path: "research/comp6.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/app.jsx
try { (() => {
/* global React */
const {
  useState: appS
} = React;
const DSapp = window.DenariussDesignSystem_a1c3fa;
const {
  Sidebar,
  Topbar,
  Dashboard,
  Budget,
  Reports,
  Movimentacao
} = window;
function AddModal({
  onClose,
  onSave
}) {
  const [via, setVia] = appS("texto");
  return /*#__PURE__*/React.createElement("div", {
    className: "app-modal-veil",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("h3", null, "Novo lan\xE7amento"), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "No app real, basta mandar no WhatsApp. Aqui voc\xEA tamb\xE9m registra manualmente."), /*#__PURE__*/React.createElement("div", {
    className: "app-seg",
    style: {
      marginBottom: 16
    }
  }, ["texto", "áudio", "foto"].map(v => /*#__PURE__*/React.createElement("button", {
    key: v,
    className: via === v ? "on" : "",
    onClick: () => setVia(v)
  }, v === "texto" ? "💬 Texto" : v === "áudio" ? "🎙 Áudio" : "📷 Foto"))), /*#__PURE__*/React.createElement("div", {
    className: "fields"
  }, /*#__PURE__*/React.createElement(DSapp.Input, {
    label: "Descri\xE7\xE3o",
    placeholder: "Ex.: Almo\xE7o, Uber, Sal\xE1rio\u2026",
    defaultValue: "Caf\xE9 com cliente"
  }), /*#__PURE__*/React.createElement(DSapp.Input, {
    label: "Valor",
    placeholder: "R$ 0,00",
    defaultValue: "R$ 24,00"
  }), /*#__PURE__*/React.createElement(DSapp.Select, {
    label: "Categoria",
    options: ["🍽 Alimentação", "🛒 Mercado", "🚗 Transporte", "💼 Renda", "📱 Contas"]
  })), /*#__PURE__*/React.createElement("div", {
    className: "actions"
  }, /*#__PURE__*/React.createElement(DSapp.Button, {
    variant: "ghost",
    onClick: onClose,
    fullWidth: true
  }, "Cancelar"), /*#__PURE__*/React.createElement(DSapp.Button, {
    variant: "primary",
    onClick: onSave,
    fullWidth: true
  }, "Salvar"))));
}
const SCREENS = {
  dash: {
    kicker: "Junho 2026",
    title: "Olá, Marina 👋",
    render: p => /*#__PURE__*/React.createElement(Dashboard, p)
  },
  budget: {
    kicker: "Orçamento · junho 2026",
    title: "Seu plano do mês",
    render: () => /*#__PURE__*/React.createElement(Budget, null)
  },
  reports: {
    kicker: "Relatórios Mensais",
    title: "Relatório de junho 2026",
    render: () => /*#__PURE__*/React.createElement(Reports, null)
  },
  mov: {
    kicker: "Junho 2026",
    title: "Movimentação",
    render: p => /*#__PURE__*/React.createElement(Movimentacao, p)
  }
};
function App() {
  const init = typeof window !== "undefined" && window.__initialScreen || "dash";
  const [active, setActive] = appS(init);
  const [modal, setModal] = appS(false);
  const [toast, setToast] = appS(false);
  const save = () => {
    setModal(false);
    setToast(true);
    setTimeout(() => setToast(false), 2400);
  };

  // screens not yet built fall back to the dashboard so nav never dead-ends
  const screen = SCREENS[active] || SCREENS.dash;
  return /*#__PURE__*/React.createElement("div", {
    className: "app-shell"
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: active,
    setActive: setActive
  }), /*#__PURE__*/React.createElement("main", {
    className: "app-main"
  }, /*#__PURE__*/React.createElement(Topbar, {
    kicker: screen.kicker,
    title: screen.title,
    onAdd: () => setModal(true)
  }), screen.render({
    onAdd: () => setModal(true)
  })), modal && /*#__PURE__*/React.createElement(AddModal, {
    onClose: () => setModal(false),
    onSave: save
  }), toast && /*#__PURE__*/React.createElement("div", {
    className: "app-toast"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }, "\u2713"), " Lan\xE7amento registrado"));
}

// NOTE: rendering is triggered by an inline script in each HTML *after* all
// component scripts run. We only expose App here — never render at module load,
// because this file is also pulled into _ds_bundle.js and a top-level render()
// would execute (with components still undefined) the moment the bundle loads.
window.DenariussApp = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/budget.jsx
try { (() => {
/* global React */
const {
  useState: budS
} = React;
const DSB = window.DenariussDesignSystem_a1c3fa;
const {
  brl: budBrl
} = window.AppData;
const {
  IcTrash: BIcTrash,
  IcChevron: BIcChevron
} = window.AppIcons;
const INCOME = 8400;

/* os três baldes do plano — agora cada um guarda itens individuais e editáveis */
const BUCKETS = [{
  id: "nec",
  icon: "🏠",
  name: "Contas e essenciais",
  help: "moradia, mercado, contas fixas",
  color: "#15806A",
  items: [{
    id: "nec-aluguel",
    name: "Aluguel",
    value: 1800
  }, {
    id: "nec-mercado",
    name: "Mercado",
    value: 900
  }, {
    id: "nec-saude",
    name: "Plano de saúde",
    value: 600
  }, {
    id: "nec-transporte",
    name: "Transporte",
    value: 320
  }, {
    id: "nec-farmacia",
    name: "Farmácia",
    value: 250
  }, {
    id: "nec-luz",
    name: "Luz",
    value: 200
  }, {
    id: "nec-internet",
    name: "Internet",
    value: 130
  }]
}, {
  id: "des",
  icon: "🎉",
  name: "Vida e lazer",
  help: "delivery, streaming, rolês, compras",
  color: "#2ECF95",
  items: [{
    id: "des-restaurantes",
    name: "Restaurantes",
    value: 620
  }, {
    id: "des-compras",
    name: "Compras",
    value: 560
  }, {
    id: "des-delivery",
    name: "Delivery",
    value: 480
  }, {
    id: "des-roles",
    name: "Rolês",
    value: 230
  }, {
    id: "des-academia",
    name: "Academia",
    value: 120
  }, {
    id: "des-streaming",
    name: "Streaming",
    value: 90
  }]
}, {
  id: "fut",
  icon: "🎯",
  name: "Guardar e metas",
  help: "reserva, sonhos, futuro",
  color: "#3CE6A6",
  items: [{
    id: "fut-reserva",
    name: "Reserva de emergência",
    value: 900
  }, {
    id: "fut-invest",
    name: "Investimentos",
    value: 600
  }, {
    id: "fut-viagem",
    name: "Meta · viagem",
    value: 180
  }]
}];
const cloneBuckets = () => BUCKETS.map(b => ({
  ...b,
  open: b.id === "nec",
  items: b.items.map(it => ({
    ...it
  }))
}));
const bucketTotal = b => b.items.reduce((s, it) => s + it.value, 0);
let _itemSeq = 0;
const newItemId = () => "novo-" + ++_itemSeq + "-" + Date.now().toString(36);

/* média real detectada nos últimos 3 meses (bate com a soma inicial dos itens) */
const DETECTED = {
  nec: 4200,
  des: 2100,
  fut: 1680
};
const MES = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
const addMonths = (m, y, add) => {
  const t = m + add;
  return {
    m: (t % 12 + 12) % 12,
    y: y + Math.floor(t / 12)
  };
};
function rangeFill(v, max, color) {
  const p = Math.max(0, Math.min(100, v / max * 100));
  return {
    background: `linear-gradient(90deg, ${color} ${p}%, rgba(255,255,255,0.08) ${p}%)`
  };
}

/* ============================================================
   PLANO DO MÊS — interactive allocation simulator
   ============================================================ */
function PlanCard({
  buckets,
  setBuckets
}) {
  const totals = {};
  buckets.forEach(b => {
    totals[b.id] = bucketTotal(b);
  });
  const used = buckets.reduce((s, b) => s + totals[b.id], 0);
  const livre = INCOME - used;
  const over = livre < 0;
  const guardaPer100 = Math.round((totals.fut || 0) / INCOME * 100);
  const mutate = fn => setBuckets(bs => bs.map(fn));
  const toggle = bid => mutate(b => b.id === bid ? {
    ...b,
    open: !b.open
  } : b);
  const setItemVal = (bid, iid, v) => mutate(b => b.id === bid ? {
    ...b,
    items: b.items.map(it => it.id === iid ? {
      ...it,
      value: v
    } : it)
  } : b);
  const renameItem = (bid, iid, name) => mutate(b => b.id === bid ? {
    ...b,
    items: b.items.map(it => it.id === iid ? {
      ...it,
      name
    } : it)
  } : b);
  const delItem = (bid, iid) => mutate(b => b.id === bid ? {
    ...b,
    items: b.items.filter(it => it.id !== iid)
  } : b);
  const addItem = bid => mutate(b => b.id === bid ? {
    ...b,
    open: true,
    items: [...b.items, {
      id: newItemId(),
      name: "Novo item",
      value: 200
    }]
  } : b);
  const useReal = () => setBuckets(cloneBuckets());
  const seg = [...buckets.map(b => ({
    id: b.id,
    name: b.name,
    v: totals[b.id],
    color: b.color
  })), {
    id: "livre",
    name: "Livre",
    v: Math.max(0, livre),
    color: "rgba(255,255,255,0.10)"
  }];
  return /*#__PURE__*/React.createElement(DSB.Card, {
    padding: 24,
    style: {
      gridColumn: "span 2"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-card-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "app-card-kicker"
  }, "Plano do m\xEAs \xB7 junho"), /*#__PURE__*/React.createElement("h3", {
    className: "app-card-title"
  }, "Para onde vai cada real")), /*#__PURE__*/React.createElement("button", {
    className: "app-link",
    onClick: useReal
  }, "\u21BB Usar minha m\xE9dia real")), /*#__PURE__*/React.createElement("p", {
    className: "bud-eli5"
  }, "De cada ", /*#__PURE__*/React.createElement("b", null, "R$ 100"), " que entram, voc\xEA guarda ", /*#__PURE__*/React.createElement("b", {
    className: "up"
  }, "R$ ", guardaPer100), " e pode gastar ", /*#__PURE__*/React.createElement("b", null, "R$ ", 100 - guardaPer100), ". Abra um balde pra ajustar item a item."), /*#__PURE__*/React.createElement("div", {
    className: "bud-bar"
  }, seg.map(s => s.v > 0 && /*#__PURE__*/React.createElement("div", {
    key: s.id,
    className: "bud-bar-seg",
    style: {
      flexGrow: s.v,
      background: s.color
    },
    title: s.name
  }, s.v / INCOME > 0.12 ? /*#__PURE__*/React.createElement("span", null, Math.round(s.v / INCOME * 100), "%") : null))), /*#__PURE__*/React.createElement("div", {
    className: "bud-buckets"
  }, buckets.map(b => /*#__PURE__*/React.createElement("div", {
    className: "bud-bucket" + (b.open ? " is-open" : ""),
    key: b.id
  }, /*#__PURE__*/React.createElement("button", {
    className: "bud-bucket-head",
    onClick: () => toggle(b.id),
    "aria-expanded": b.open
  }, /*#__PURE__*/React.createElement("span", {
    className: "bud-bucket-dot",
    style: {
      background: b.color
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "bud-bucket-id"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bud-bucket-name"
  }, b.icon, " ", b.name), /*#__PURE__*/React.createElement("span", {
    className: "bud-bucket-help"
  }, b.items.length, " ", b.items.length === 1 ? "item" : "itens", " \xB7 ", b.help)), /*#__PURE__*/React.createElement("span", {
    className: "bud-bucket-total"
  }, budBrl(totals[b.id])), /*#__PURE__*/React.createElement("span", {
    className: "bud-bucket-chev" + (b.open ? "" : " is-closed")
  }, /*#__PURE__*/React.createElement(BIcChevron, {
    s: 17
  }))), b.open ? /*#__PURE__*/React.createElement("div", {
    className: "bud-bucket-body"
  }, b.items.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "bud-bucket-empty"
  }, "Nenhum item ainda \u2014 adicione abaixo.") : null, b.items.map(it => /*#__PURE__*/React.createElement("div", {
    className: "bud-item",
    key: it.id
  }, /*#__PURE__*/React.createElement("div", {
    className: "bud-item-top"
  }, /*#__PURE__*/React.createElement("input", {
    className: "bud-item-name",
    value: it.name,
    placeholder: "Nome do item",
    onChange: e => renameItem(b.id, it.id, e.target.value)
  }), /*#__PURE__*/React.createElement("span", {
    className: "bud-item-val"
  }, budBrl(it.value)), /*#__PURE__*/React.createElement("button", {
    className: "bud-item-del",
    title: "Excluir item",
    onClick: () => delItem(b.id, it.id)
  }, /*#__PURE__*/React.createElement(BIcTrash, {
    s: 15
  }))), /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "bud-range bud-range--sm",
    min: "0",
    max: "3000",
    step: "50",
    value: it.value,
    style: rangeFill(it.value, 3000, b.color),
    onChange: e => setItemVal(b.id, it.id, +e.target.value)
  }))), /*#__PURE__*/React.createElement("button", {
    className: "bud-additem",
    onClick: () => addItem(b.id)
  }, "+ Adicionar item em ", b.name.toLowerCase())) : null))), /*#__PURE__*/React.createElement("div", {
    className: "bud-result" + (over ? " is-over" : "")
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bud-result-lab"
  }, over ? "Passou do orçamento" : "Sobra livre no fim do mês"), /*#__PURE__*/React.createElement("div", {
    className: "bud-result-sub"
  }, over ? "Tire de algum balde acima" : "dinheiro sem destino — pode guardar ou aproveitar")), /*#__PURE__*/React.createElement("div", {
    className: "bud-result-val"
  }, over ? "−" : "", budBrl(Math.abs(livre)))));
}

/* ============================================================
   RESUMO AUTOMÁTICO — read from movements
   ============================================================ */
function AutoCard({
  alloc
}) {
  const rows = [{
    icon: "💼",
    lab: "Entram por mês",
    val: budBrl(INCOME),
    note: "salário + freela (auto)"
  }, {
    icon: "🏠",
    lab: "Essenciais (média real)",
    val: budBrl(DETECTED.nec),
    note: "últimos 3 meses"
  }, {
    icon: "🎉",
    lab: "Lazer (média real)",
    val: budBrl(DETECTED.des),
    note: "últimos 3 meses"
  }];
  const guardando = alloc.fut;
  return /*#__PURE__*/React.createElement(DSB.Card, {
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-card-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "app-card-kicker"
  }, "Autom\xE1tico"), /*#__PURE__*/React.createElement("h3", {
    className: "app-card-title"
  }, "Lido das suas movimenta\xE7\xF5es"))), /*#__PURE__*/React.createElement("div", {
    className: "bud-auto"
  }, rows.map(r => /*#__PURE__*/React.createElement("div", {
    className: "bud-auto-row",
    key: r.lab
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-tx-ic"
  }, r.icon), /*#__PURE__*/React.createElement("div", {
    className: "app-tx-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-tx-name"
  }, r.lab), /*#__PURE__*/React.createElement("div", {
    className: "app-tx-meta"
  }, r.note)), /*#__PURE__*/React.createElement("div", {
    className: "app-tx-val"
  }, r.val)))), /*#__PURE__*/React.createElement("div", {
    className: "bud-auto-foot"
  }, /*#__PURE__*/React.createElement(DSB.Chip, {
    accent: true
  }, "\uD83C\uDFAF Guardando R$ ", guardando.toLocaleString("pt-BR"), "/m\xEAs"), /*#__PURE__*/React.createElement("p", null, "No ritmo atual, voc\xEA junta ", /*#__PURE__*/React.createElement("b", {
    className: "up"
  }, budBrl(guardando * 12)), " em 12 meses.")));
}

/* ============================================================
   PLANEJADOR DE COMPRA GRANDE — "quando eu consigo?"
   ============================================================ */
const GOALS = [{
  icon: "💻",
  name: "Notebook novo",
  val: 4000
}, {
  icon: "✈️",
  name: "Viagem",
  val: 6500
}, {
  icon: "📱",
  name: "iPhone",
  val: 7200
}, {
  icon: "🛟",
  name: "Reserva de emergência",
  val: 12000
}];
function PlannerCard({
  alloc
}) {
  const [goal, setGoal] = budS(GOALS[0]);
  const [monthly, setMonthly] = budS(1680);
  const [custom, setCustom] = budS(GOALS[0].val);
  const target = custom;
  const months = Math.max(1, Math.ceil(target / monthly));
  const when = addMonths(5, 2026, months); // base junho/2026
  const folga = alloc.fut + Math.max(0, INCOME - alloc.nec - alloc.des - alloc.fut) - monthly;
  const cabe = folga >= 0;
  const dots = Math.min(months, 14);
  const pick = g => {
    setGoal(g);
    setCustom(g.val);
  };
  return /*#__PURE__*/React.createElement(DSB.Card, {
    padding: 26,
    style: {
      gridColumn: "span 3"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-card-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "app-card-kicker"
  }, "E se eu quisesse\u2026"), /*#__PURE__*/React.createElement("h3", {
    className: "app-card-title"
  }, "Planejar uma compra grande")), /*#__PURE__*/React.createElement("span", {
    className: "bud-pill-hint"
  }, "Simule sem compromisso")), /*#__PURE__*/React.createElement("div", {
    className: "bud-plan"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bud-plan-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bud-goal-chips"
  }, GOALS.map(g => /*#__PURE__*/React.createElement("button", {
    key: g.name,
    className: "bud-goal" + (goal.name === g.name ? " on" : ""),
    onClick: () => pick(g)
  }, /*#__PURE__*/React.createElement("span", {
    className: "bud-goal-ic"
  }, g.icon), /*#__PURE__*/React.createElement("span", {
    className: "bud-goal-name"
  }, g.name), /*#__PURE__*/React.createElement("span", {
    className: "bud-goal-val"
  }, budBrl(g.val))))), /*#__PURE__*/React.createElement("div", {
    className: "bud-field"
  }, /*#__PURE__*/React.createElement("label", null, "Quanto custa"), /*#__PURE__*/React.createElement("div", {
    className: "bud-stepper"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setCustom(c => Math.max(500, c - 500))
  }, "\u2212"), /*#__PURE__*/React.createElement("span", null, budBrl(custom)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCustom(c => c + 500)
  }, "+"))), /*#__PURE__*/React.createElement("div", {
    className: "bud-field"
  }, /*#__PURE__*/React.createElement("label", null, "Guardo por m\xEAs ", /*#__PURE__*/React.createElement("b", null, budBrl(monthly))), /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "bud-range",
    min: "200",
    max: "4000",
    step: "100",
    value: monthly,
    style: rangeFill(monthly, 4000, "var(--green)"),
    onChange: e => setMonthly(+e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bud-plan-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bud-answer-top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bud-answer-lab"
  }, "Voc\xEA compra em"), /*#__PURE__*/React.createElement("span", {
    className: "bud-answer-when"
  }, MES[when.m].charAt(0).toUpperCase() + MES[when.m].slice(1), " ", when.y), /*#__PURE__*/React.createElement("span", {
    className: "bud-answer-months"
  }, months, " ", months === 1 ? "mês" : "meses", " guardando")), /*#__PURE__*/React.createElement("div", {
    className: "bud-timeline"
  }, Array.from({
    length: dots
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "bud-tl-dot",
    style: {
      animationDelay: i * 40 + "ms"
    }
  })), months > 14 ? /*#__PURE__*/React.createElement("span", {
    className: "bud-tl-more"
  }, "+", months - 14) : null), /*#__PURE__*/React.createElement("div", {
    className: "bud-verdict " + (cabe ? "ok" : "no")
  }, cabe ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }, "\u2713"), " Cabe no seu plano \u2014 sobra ", budBrl(folga), " de folga por m\xEAs.") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "tick warn"
  }, "!"), " Aperta \u2014 corte ", budBrl(-folga), "/m\xEAs em lazer pra dar conta.")))));
}

/* ============================================================
   SCREEN
   ============================================================ */
window.Budget = function Budget() {
  const [buckets, setBuckets] = budS(cloneBuckets);
  const alloc = {
    nec: 0,
    des: 0,
    fut: 0
  };
  buckets.forEach(b => {
    alloc[b.id] = bucketTotal(b);
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "app-grid"
  }, /*#__PURE__*/React.createElement(PlanCard, {
    buckets: buckets,
    setBuckets: setBuckets
  }), /*#__PURE__*/React.createElement(AutoCard, {
    alloc: alloc
  }), /*#__PURE__*/React.createElement(PlannerCard, {
    alloc: alloc
  }));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/budget.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/chrome.jsx
try { (() => {
/* global React */
const {
  useState: uS
} = React;
const {
  IcGrid,
  IcFlow,
  IcList,
  IcWallet,
  IcChat,
  IcGear,
  IcBell,
  IcPlus
} = window.AppIcons;
const {
  TX,
  BUDGETS,
  brl
} = window.AppData;
const DSb = window.DenariussDesignSystem_a1c3fa;

/* ===================== Sidebar ===================== */
function Sidebar({
  active,
  setActive
}) {
  const {
    IcGrid,
    IcFlow,
    IcList,
    IcWallet,
    IcChat,
    IcGear,
    IcBell,
    IcPlus,
    IcReport,
    IcCardIcon
  } = window.AppIcons;
  const items = [{
    id: "dash",
    label: "Visão geral",
    icon: IcGrid
  }, {
    id: "flow",
    label: "Fluxo de caixa",
    icon: IcFlow
  }, {
    id: "mov",
    label: "Movimentação",
    icon: IcCardIcon
  }, {
    id: "budget",
    label: "Orçamento",
    icon: IcWallet
  }, {
    id: "reports",
    label: "Relatórios",
    icon: IcReport
  }, {
    id: "wa",
    label: "WhatsApp",
    icon: IcChat
  }];
  return /*#__PURE__*/React.createElement("aside", {
    className: "app-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.logo || "../../assets/denariuss-logo-white.png",
    alt: "Denariuss"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "app-nav"
  }, items.map(it => {
    const Icon = it.icon;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      className: "app-nav-item" + (active === it.id ? " is-active" : ""),
      onClick: () => setActive(it.id)
    }, /*#__PURE__*/React.createElement(Icon, {
      s: 19
    }), " ", /*#__PURE__*/React.createElement("span", null, it.label));
  })), /*#__PURE__*/React.createElement("div", {
    className: "app-side-foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "app-nav-item"
  }, /*#__PURE__*/React.createElement(IcGear, {
    s: 19
  }), " ", /*#__PURE__*/React.createElement("span", null, "Configura\xE7\xF5es")), /*#__PURE__*/React.createElement("div", {
    className: "app-plan"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-plan-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip",
    style: {
      fontSize: 12
    }
  }, "Plano Pro")), /*#__PURE__*/React.createElement("p", null, "Renova em 24 dias"))));
}

/* ===================== Topbar ===================== */
function Topbar({
  onAdd,
  kicker = "Junho 2026",
  title = "Olá, Marina 👋"
}) {
  const {
    IcEye,
    IcEyeOff
  } = window.AppIcons;
  const [hidden, setHidden] = uS(false);
  const toggleEye = () => {
    const next = !hidden;
    setHidden(next);
    document.body.classList.toggle("dn-hide-values", next);
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "app-top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "app-top-kicker"
  }, kicker), /*#__PURE__*/React.createElement("h1", {
    className: "app-top-title"
  }, title)), /*#__PURE__*/React.createElement("div", {
    className: "app-top-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "app-icon-btn",
    "aria-label": "Ocultar valores",
    onClick: toggleEye,
    title: "Ocultar valores"
  }, hidden ? /*#__PURE__*/React.createElement(IcEyeOff, {
    s: 19
  }) : /*#__PURE__*/React.createElement(IcEye, {
    s: 19
  })), /*#__PURE__*/React.createElement("button", {
    className: "app-icon-btn",
    "aria-label": "Notifica\xE7\xF5es"
  }, /*#__PURE__*/React.createElement(IcBell, {
    s: 19
  }), /*#__PURE__*/React.createElement("i", {
    className: "app-dot"
  })), /*#__PURE__*/React.createElement(DSb.Button, {
    variant: "primary",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(IcPlus, {
      s: 18
    }),
    onClick: onAdd
  }, "Novo lan\xE7amento"), /*#__PURE__*/React.createElement("div", {
    className: "app-avatar"
  }, "M")));
}
window.Sidebar = Sidebar;
window.Topbar = Topbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/dashboard.jsx
try { (() => {
/* global React */
const {
  IcChat: WIcChat,
  IcWallet: WIcWallet,
  IcSpark: WIcSpark,
  IcBell: WIcBell,
  IcUp: WIcUp
} = window.AppIcons;
const {
  TX: WTX,
  BUDGETS: WBUDGETS,
  BUDGET_META: WBM,
  DAILY: WDAILY,
  brl: wbrl,
  brlShort: wbrlS
} = window.AppData;
const DSc = window.DenariussDesignSystem_a1c3fa;

/* ===================== KPI row (budget-aware) ===================== */
function KpiRow() {
  const restante = WBM.limit - WBM.spent;
  const usedPct = Math.round(WBM.spent / WBM.limit * 100);
  return /*#__PURE__*/React.createElement("div", {
    className: "app-kpis"
  }, /*#__PURE__*/React.createElement(DSc.KpiCard, {
    label: "\u2191 Entradas",
    value: "R$ 8.400",
    delta: "\u25B2 +12% vs maio",
    trend: "up"
  }), /*#__PURE__*/React.createElement(DSc.KpiCard, {
    label: "\u2193 Sa\xEDdas",
    value: "R$ 5.130",
    delta: usedPct + "% do orçamento",
    trend: "down"
  }), /*#__PURE__*/React.createElement(DSc.KpiCard, {
    label: "\u25CE Sobra do or\xE7amento",
    value: wbrl(restante).replace(",00", ""),
    delta: "de R$ 6.000 · faltam " + (WBM.daysInMonth - WBM.dayOfMonth) + " dias",
    accent: true
  }));
}

/* ===================== Assistente financeiro ===================== */
const TIPS = [{
  kind: "feature",
  badge: "I.A",
  title: "Lance despesas pelo WhatsApp",
  body: "Mande movimentações ou pergunte sobre seu financeiro pelo +55 11 92509-6090. A IA categoriza e atualiza seu orçamento sozinha.",
  cta: "Abrir WhatsApp"
}, {
  kind: "alert",
  ic: "🛒",
  title: "Mercado passou do limite",
  body: "Você já gastou R$ 940 dos R$ 900 planejados — R$ 40 acima do teto da categoria neste mês.",
  cta: "Ajustar orçamento"
}, {
  kind: "tip",
  ic: "🎯",
  title: "No ritmo pra fechar no azul",
  body: "Faltam 12 dias e ainda sobram R$ 870 do orçamento. Mantendo o passo, junho fecha positivo.",
  cta: "Ver orçamento"
}];
function AssistantPanel() {
  return /*#__PURE__*/React.createElement(DSc.Card, {
    padding: 26,
    style: {
      gridColumn: "span 3"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-card-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "app-card-kicker"
  }, "Assistente financeiro"), /*#__PURE__*/React.createElement("h3", {
    className: "app-card-title"
  }, "Dicas e alertas do momento")), /*#__PURE__*/React.createElement("button", {
    className: "app-link",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7
    }
  }, "Ver tudo ", /*#__PURE__*/React.createElement(WIcBell, {
    s: 15
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dash-tips"
  }, TIPS.map(t => /*#__PURE__*/React.createElement("div", {
    className: "dash-tip dash-tip--" + t.kind,
    key: t.title
  }, /*#__PURE__*/React.createElement("div", {
    className: "dash-tip-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dash-tip-ic dash-tip-ic--" + t.kind
  }, t.kind === "feature" ? /*#__PURE__*/React.createElement(WIcChat, {
    s: 20
  }) : /*#__PURE__*/React.createElement("span", null, t.ic)), t.badge ? /*#__PURE__*/React.createElement("span", {
    className: "dash-tip-badge"
  }, /*#__PURE__*/React.createElement(WIcSpark, {
    s: 12
  }), " ", t.badge) : null), /*#__PURE__*/React.createElement("h4", {
    className: "dash-tip-title"
  }, t.title), /*#__PURE__*/React.createElement("p", {
    className: "dash-tip-body"
  }, t.body), /*#__PURE__*/React.createElement("button", {
    className: "dash-tip-cta"
  }, t.cta, " ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"))))));
}

/* ===================== Movimentação financeira do mês (diária) ===================== */
function DailyFlow() {
  const maxScale = 1500;
  const totalIn = WDAILY.reduce((s, d) => s + d.in, 0);
  const totalOut = WDAILY.reduce((s, d) => s + d.out, 0);
  const ticks = [1, 5, 10, 15, 20, 25, 30];
  const H = 150;
  return /*#__PURE__*/React.createElement(DSc.Card, {
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-card-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "app-card-kicker"
  }, "\xDAltimos 30 dias \xB7 junho"), /*#__PURE__*/React.createElement("h3", {
    className: "app-card-title"
  }, "Movimenta\xE7\xE3o financeira do m\xEAs")), /*#__PURE__*/React.createElement("div", {
    className: "dash-daily-tot"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "dash-sw in"
  }), " Entradas ", /*#__PURE__*/React.createElement("b", {
    className: "up"
  }, wbrlS(totalIn))), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "dash-sw out"
  }), " Sa\xEDdas ", /*#__PURE__*/React.createElement("b", {
    className: "down"
  }, wbrlS(totalOut))))), /*#__PURE__*/React.createElement("div", {
    className: "dash-daily",
    style: {
      height: H + 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dash-daily-cols",
    style: {
      height: H
    }
  }, WDAILY.map(d => {
    const inH = Math.min(d.in, maxScale) / maxScale * H;
    const outH = Math.min(d.out, maxScale) / maxScale * H;
    const clip = d.in > maxScale;
    return /*#__PURE__*/React.createElement("div", {
      className: "dash-daily-col",
      key: d.d
    }, clip ? /*#__PURE__*/React.createElement("span", {
      className: "dash-daily-cap"
    }, wbrlS(d.in)) : null, /*#__PURE__*/React.createElement("div", {
      className: "dash-daily-bars"
    }, d.in > 0 ? /*#__PURE__*/React.createElement("div", {
      className: "dash-bar in",
      style: {
        height: Math.max(3, inH)
      }
    }) : null, d.out > 0 ? /*#__PURE__*/React.createElement("div", {
      className: "dash-bar out",
      style: {
        height: Math.max(3, outH)
      }
    }) : null));
  })), /*#__PURE__*/React.createElement("div", {
    className: "dash-daily-x"
  }, WDAILY.map(d => /*#__PURE__*/React.createElement("span", {
    key: d.d,
    className: "dash-daily-xlab"
  }, ticks.includes(d.d) ? String(d.d).padStart(2, "0") : "")))));
}

/* ===================== Tendência mensal (entradas x saídas por mês) ===================== */
const FLOW = [{
  m: "Jan",
  in: 78,
  out: 52
}, {
  m: "Fev",
  in: 72,
  out: 60
}, {
  m: "Mar",
  in: 84,
  out: 49
}, {
  m: "Abr",
  in: 80,
  out: 64
}, {
  m: "Mai",
  in: 75,
  out: 51
}, {
  m: "Jun",
  in: 84,
  out: 51
}, {
  m: "Jul",
  in: 70,
  out: 55,
  fut: true
}, {
  m: "Ago",
  in: 75,
  out: 58,
  fut: true
}];
function MonthlyFlow() {
  const max = 100;
  return /*#__PURE__*/React.createElement(DSc.Card, {
    padding: 24,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-card-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "app-card-kicker"
  }, "Tend\xEAncia \xB7 2026"), /*#__PURE__*/React.createElement("h3", {
    className: "app-card-title"
  }, "Entradas x sa\xEDdas por m\xEAs")), /*#__PURE__*/React.createElement("div", {
    className: "app-legend"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: {
      background: "var(--green-bright)"
    }
  }), "Entradas"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: {
      background: "rgba(255,138,138,.7)"
    }
  }), "Sa\xEDdas"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: {
      background: "var(--line)"
    }
  }), "Previsto"))), /*#__PURE__*/React.createElement("div", {
    className: "app-flow",
    style: {
      flex: 1
    }
  }, FLOW.map(d => /*#__PURE__*/React.createElement("div", {
    className: "app-flow-col",
    key: d.m
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-bars"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-bar in",
    style: {
      height: d.in / max * 140,
      opacity: d.fut ? 0.4 : 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "app-bar out",
    style: {
      height: d.out / max * 140,
      opacity: d.fut ? 0.4 : 1
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "app-flow-m" + (d.fut ? " fut" : "")
  }, d.m)))));
}

/* ===================== Progresso do orçamento (gauge) ===================== */
function BudgetGauge() {
  const {
    limit,
    spent,
    dayOfMonth,
    daysInMonth
  } = WBM;
  const usedPct = Math.round(spent / limit * 100);
  const timePct = Math.round(dayOfMonth / daysInMonth * 100);
  const restante = limit - spent;
  const diasRest = daysInMonth - dayOfMonth;
  const overPace = usedPct > timePct;
  const ringColor = overPace ? "var(--warning)" : "var(--green-bright)";
  return /*#__PURE__*/React.createElement(DSc.Card, {
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-card-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "app-card-kicker"
  }, "Or\xE7amento mensal"), /*#__PURE__*/React.createElement("h3", {
    className: "app-card-title"
  }, "Progresso do or\xE7amento"))), /*#__PURE__*/React.createElement("div", {
    className: "dash-gauge-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dash-gauge",
    style: {
      background: `conic-gradient(from -90deg, ${ringColor} 0 ${usedPct}%, rgba(255,255,255,0.07) ${usedPct}% 100%)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dash-gauge-pace",
    style: {
      transform: `rotate(${timePct / 100 * 360}deg)`
    }
  }, /*#__PURE__*/React.createElement("i", null)), /*#__PURE__*/React.createElement("div", {
    className: "dash-gauge-hole"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dash-gauge-pct"
  }, usedPct, "%"), /*#__PURE__*/React.createElement("span", {
    className: "dash-gauge-lab"
  }, "usado")))), /*#__PURE__*/React.createElement("div", {
    className: "dash-gauge-stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dash-gstat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dash-gstat-lab"
  }, "Gasto"), /*#__PURE__*/React.createElement("span", {
    className: "dash-gstat-val"
  }, wbrl(spent).replace(",00", ""))), /*#__PURE__*/React.createElement("div", {
    className: "dash-gstat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dash-gstat-lab"
  }, "Limite"), /*#__PURE__*/React.createElement("span", {
    className: "dash-gstat-val"
  }, wbrl(limit).replace(",00", ""))), /*#__PURE__*/React.createElement("div", {
    className: "dash-gstat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dash-gstat-lab"
  }, "Sobra"), /*#__PURE__*/React.createElement("span", {
    className: "dash-gstat-val " + (restante < 0 ? "down" : "up")
  }, wbrl(restante).replace(",00", "")))), /*#__PURE__*/React.createElement("div", {
    className: "dash-gauge-verdict " + (overPace ? "warn" : "ok")
  }, /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }, overPace ? "!" : "✓"), overPace ? /*#__PURE__*/React.createElement(React.Fragment, null, "Acima do ritmo \u2014 no passo de hoje voc\xEA passaria do teto. Faltam ", /*#__PURE__*/React.createElement("b", null, diasRest, " dias"), ".") : /*#__PURE__*/React.createElement(React.Fragment, null, "Dentro do ritmo \u2014 ", usedPct, "% gasto em ", timePct, "% do m\xEAs. Faltam ", /*#__PURE__*/React.createElement("b", null, diasRest, " dias"), ".")));
}

/* ===================== Orçamento por categoria (vs planejado) ===================== */
function statusOf(spent, limit) {
  if (spent > limit) return {
    tone: "danger",
    label: "Estourou"
  };
  if (spent / limit >= 0.9) return {
    tone: "warn",
    label: "Quase lá"
  };
  return {
    tone: "ok",
    label: "Tranquilo"
  };
}
function BudgetPanel() {
  const timePct = Math.round(WBM.dayOfMonth / WBM.daysInMonth * 100);
  return /*#__PURE__*/React.createElement(DSc.Card, {
    padding: 24,
    style: {
      gridColumn: "span 3"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-card-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "app-card-kicker"
  }, "Or\xE7amento \xB7 junho"), /*#__PURE__*/React.createElement("h3", {
    className: "app-card-title"
  }, "Por categoria \u2014 comparado ao planejado")), /*#__PURE__*/React.createElement("div", {
    className: "dash-bud-legend"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dash-bud-marker"
  }), " esperado at\xE9 hoje (dia ", WBM.dayOfMonth, ")")), /*#__PURE__*/React.createElement("div", {
    className: "dash-bud-grid"
  }, WBUDGETS.map(b => {
    const pct = Math.min(100, b.spent / b.limit * 100);
    const st = statusOf(b.spent, b.limit);
    const over = b.spent > b.limit;
    const diff = b.limit - b.spent;
    return /*#__PURE__*/React.createElement("div", {
      className: "dash-bud",
      key: b.cat
    }, /*#__PURE__*/React.createElement("div", {
      className: "dash-bud-top"
    }, /*#__PURE__*/React.createElement("span", {
      className: "dash-bud-name"
    }, b.icon, " ", b.cat), /*#__PURE__*/React.createElement("span", {
      className: "dash-bud-status " + st.tone
    }, st.label)), /*#__PURE__*/React.createElement("div", {
      className: "dash-bud-track"
    }, /*#__PURE__*/React.createElement("div", {
      className: "dash-bud-fill " + st.tone,
      style: {
        width: pct + "%"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "dash-bud-pace",
      style: {
        left: timePct + "%"
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "dash-bud-foot"
    }, /*#__PURE__*/React.createElement("span", {
      className: "dash-bud-amount"
    }, wbrl(b.spent).replace(",00", ""), " ", /*#__PURE__*/React.createElement("em", null, "/ ", wbrl(b.limit).replace(",00", ""))), /*#__PURE__*/React.createElement("span", {
      className: over ? "down" : "muted"
    }, over ? "+" + wbrl(-diff).replace(",00", "") + " acima" : wbrl(diff).replace(",00", "") + " livre")));
  })));
}

/* ===================== Transactions ===================== */
function TxList() {
  const viaLabel = {
    foto: "📷 Foto",
    "áudio": "🎙 Áudio",
    texto: "💬 Texto",
    auto: "⚙ Auto"
  };
  return /*#__PURE__*/React.createElement(DSc.Card, {
    padding: 24,
    style: {
      gridColumn: "span 3"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-card-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "app-card-kicker"
  }, "Lan\xE7amentos"), /*#__PURE__*/React.createElement("h3", {
    className: "app-card-title"
  }, "Atividade recente")), /*#__PURE__*/React.createElement("button", {
    className: "app-link"
  }, "Ver todos")), /*#__PURE__*/React.createElement("div", {
    className: "app-tx"
  }, WTX.map((t, i) => /*#__PURE__*/React.createElement("div", {
    className: "app-tx-row",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-tx-ic"
  }, t.icon), /*#__PURE__*/React.createElement("div", {
    className: "app-tx-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-tx-name"
  }, t.name), /*#__PURE__*/React.createElement("div", {
    className: "app-tx-meta"
  }, t.cat, " \xB7 ", t.date)), /*#__PURE__*/React.createElement(DSc.Chip, null, viaLabel[t.via]), /*#__PURE__*/React.createElement("div", {
    className: "app-tx-val " + (t.val > 0 ? "up" : "")
  }, t.val > 0 ? "+" : "", wbrl(t.val))))));
}
window.Dashboard = function Dashboard({
  onAdd
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "app-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span 3"
    }
  }, /*#__PURE__*/React.createElement(KpiRow, null)), /*#__PURE__*/React.createElement(AssistantPanel, null), /*#__PURE__*/React.createElement("div", {
    className: "dash-leftcol",
    style: {
      gridColumn: "span 2",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(DailyFlow, null), /*#__PURE__*/React.createElement(MonthlyFlow, null)), /*#__PURE__*/React.createElement(BudgetGauge, null), /*#__PURE__*/React.createElement(BudgetPanel, null), /*#__PURE__*/React.createElement(TxList, null));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/data.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React, DenariussDesignSystem_a1c3fa */
const {
  useState
} = React;
const DS = window.DenariussDesignSystem_a1c3fa;
const {
  KpiCard,
  Card,
  Button,
  Badge,
  Chip
} = DS;

/* ---------- icon set (matches the DS line-icon language) ---------- */
function I({
  d,
  s = 20,
  sw = 1.8,
  fill = "none",
  children
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: "currentColor",
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, d ? /*#__PURE__*/React.createElement("path", {
    d: d
  }) : children);
}
const IcGrid = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "3",
  width: "7",
  height: "7",
  rx: "1.5"
}), /*#__PURE__*/React.createElement("rect", {
  x: "14",
  y: "3",
  width: "7",
  height: "7",
  rx: "1.5"
}), /*#__PURE__*/React.createElement("rect", {
  x: "14",
  y: "14",
  width: "7",
  height: "7",
  rx: "1.5"
}), /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "14",
  width: "7",
  height: "7",
  rx: "1.5"
}));
const IcFlow = p => /*#__PURE__*/React.createElement(I, _extends({}, p, {
  d: "M3 17l5-5 4 4 8-9"
}));
const IcList = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
}));
const IcWallet = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 10h18M17 14h.01"
}));
const IcChat = p => /*#__PURE__*/React.createElement(I, _extends({}, p, {
  d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"
}));
const IcGear = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
}));
const IcBell = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"
}));
const IcPlus = p => /*#__PURE__*/React.createElement(I, _extends({}, p, {
  d: "M12 5v14M5 12h14"
}));
const IcReport = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 2v6h6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 13h5M8 17h8"
}));
const IcSpark = p => /*#__PURE__*/React.createElement(I, _extends({}, p, {
  fill: "currentColor",
  sw: 0
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2l1.7 5.3L19 9l-5.3 1.7L12 16l-1.7-5.3L5 9l5.3-1.7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 13l.8 2.5L22 16l-2.2.8L19 19l-.8-2.2L16 16l2.2-.5z"
}));
const IcDownload = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 3v12M7 11l5 5 5-5M5 21h14"
}));
const IcClock = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "9"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 7v5l3 2"
}));
const IcFolder = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
}));
const IcPencil = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 20h9"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"
}));
const IcTrash = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M6 6l1 14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-14"
}));
const IcEye = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}));
const IcEyeOff = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M17.94 17.94A10 10 0 0 1 12 20C5 20 1 12 1 12a18 18 0 0 1 5.06-5.94M9.9 4.24A9 9 0 0 1 12 4c7 0 11 8 11 8a18 18 0 0 1-2.16 3.19M14.12 14.12a3 3 0 1 1-4.24-4.24M1 1l22 22"
}));
const IcSliders = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"
}));
const IcRefresh = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M23 4v6h-6M1 20v-6h6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
}));
const IcChevron = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M6 9l6 6 6-6"
}));
const IcCheck = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M20 6L9 17l-5-5"
}));
const IcUp = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 19V5M5 12l7-7 7 7"
}));
const IcDown = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 5v14M5 12l7 7 7-7"
}));
const IcCardIcon = p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("rect", {
  x: "2",
  y: "5",
  width: "20",
  height: "14",
  rx: "2.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 10h20"
}));
window.AppIcons = {
  IcGrid,
  IcFlow,
  IcList,
  IcWallet,
  IcChat,
  IcGear,
  IcBell,
  IcPlus,
  IcReport,
  IcSpark,
  IcDownload,
  IcClock,
  IcFolder,
  IcPencil,
  IcTrash,
  IcEye,
  IcEyeOff,
  IcSliders,
  IcRefresh,
  IcChevron,
  IcCheck,
  IcUp,
  IcDown,
  IcCardIcon
};

/* ---------- transactions data ---------- */
const TX = [{
  icon: "🛒",
  name: "Supermercado Pão de Açúcar",
  cat: "Mercado",
  date: "12 jun",
  val: -213.40,
  via: "foto"
}, {
  icon: "🚗",
  name: "Uber",
  cat: "Transporte",
  date: "12 jun",
  val: -28.90,
  via: "áudio"
}, {
  icon: "💼",
  name: "Salário · Empresa LTDA",
  cat: "Renda",
  date: "10 jun",
  val: 6400.00,
  via: "auto"
}, {
  icon: "🍽",
  name: "Almoço",
  cat: "Alimentação",
  date: "10 jun",
  val: -35.00,
  via: "texto"
}, {
  icon: "📱",
  name: "Plano Vivo",
  cat: "Contas",
  date: "08 jun",
  val: -79.90,
  via: "auto"
}, {
  icon: "🎬",
  name: "Netflix",
  cat: "Assinaturas",
  date: "07 jun",
  val: -44.90,
  via: "auto"
}, {
  icon: "💸",
  name: "Freela · design",
  cat: "Renda",
  date: "05 jun",
  val: 2000.00,
  via: "texto"
}];

/* per-category orçamento — soma fecha em R$ 5.130 gasto / R$ 6.000 limite,
   batendo com os KPIs (saídas R$ 5.130) e o orçamento mensal total */
const BUDGETS = [{
  cat: "Moradia",
  icon: "🏠",
  spent: 1850,
  limit: 1900
}, {
  cat: "Compras",
  icon: "🛍",
  spent: 1230,
  limit: 1700
}, {
  cat: "Mercado",
  icon: "🛒",
  spent: 940,
  limit: 900
}, {
  cat: "Alimentação",
  icon: "🍽",
  spent: 620,
  limit: 800
}, {
  cat: "Transporte",
  icon: "🚗",
  spent: 310,
  limit: 500
}, {
  cat: "Assinaturas",
  icon: "🎬",
  spent: 180,
  limit: 200
}];

/* orçamento mensal global — junho 2026, dia 18 de 30 */
const BUDGET_META = {
  limit: 6000,
  // teto planejado do mês
  spent: 5130,
  // já gasto (= soma de BUDGETS = saídas)
  dayOfMonth: 18,
  daysInMonth: 30
};

/* movimentação diária do mês — entradas x saídas por dia (junho 2026).
   determinístico; totais batem com os KPIs (entradas R$ 8.400 / saídas R$ 5.130) */
const _seed = n => {
  const x = Math.sin(n * 99.137) * 10000;
  return x - Math.floor(x);
};
const _rawDaily = Array.from({
  length: 30
}, (_, i) => {
  const d = i + 1;
  return {
    d,
    out: d % 7 === 0 ? 0 : Math.round(40 + _seed(d) * 360)
  }; // domingos sem gasto
});
const _outSum = _rawDaily.reduce((s, x) => s + x.out, 0);
const _outK = 5130 / _outSum;
const DAILY = _rawDaily.map(x => ({
  d: x.d,
  in: {
    5: 2000,
    10: 6400
  }[x.d] || 0,
  // freela dia 5 + salário dia 10 = 8.400
  out: Math.round(x.out * _outK)
}));
const brl = n => (n < 0 ? "-" : "") + "R$ " + Math.abs(n).toLocaleString("pt-BR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
const brlShort = n => {
  const a = Math.abs(n);
  if (a >= 1000) return "R$ " + (a / 1000).toLocaleString("pt-BR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1
  }) + "k";
  return "R$ " + a.toLocaleString("pt-BR");
};
window.AppData = {
  TX,
  BUDGETS,
  BUDGET_META,
  DAILY,
  brl,
  brlShort
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/movimentacao.jsx
try { (() => {
/* global React */
const {
  useState: movS
} = React;
const DSm = window.DenariussDesignSystem_a1c3fa;
const {
  brl: movBrl
} = window.AppData;
const MI = window.AppIcons;

/* ---------------- data (junho/2026) ---------------- */
const MOV_KPI = {
  saldo: 6375,
  receitas: 8977,
  despesas: 2602,
  recebidoPct: 56,
  pagoPct: 87,
  faltamRec: 3977,
  faltamRecItens: 1,
  pendDesp: 2,
  autoSaldo: 3977
};
const MOV_GROUPS = [{
  cat: "Saldo Inicial",
  icon: "💰",
  kind: "receita",
  share: "44% das Receitas",
  items: [{
    id: "g1a",
    name: "Saldo inicial do mês",
    val: 3977,
    status: "recebido",
    date: "01/06/2026",
    acct: "Nubank"
  }]
}, {
  cat: "Salário",
  icon: "💼",
  kind: "receita",
  share: "56% das Receitas",
  items: [{
    id: "g2a",
    name: "Salário · Empresa LTDA",
    val: 5000,
    status: "recebido",
    date: "05/06/2026",
    acct: "Itaú",
    recurring: true
  }]
}, {
  cat: "Educação - Pessoal",
  icon: "📚",
  kind: "despesa",
  share: "8% das Despesas",
  relief: true,
  items: [{
    id: "e1",
    name: "Faculdade",
    val: 1320.44,
    status: "pago",
    date: "10/06/2026",
    acct: "Itaú",
    recurring: true
  }, {
    id: "e2",
    name: "Curso de inglês",
    val: 190,
    status: "pendente",
    date: "20/06/2026",
    acct: "Nubank"
  }]
}, {
  cat: "Imposto - Pessoal",
  icon: "🧾",
  kind: "despesa",
  share: "5% das Despesas",
  items: [{
    id: "i1",
    name: "IRPF",
    val: 949.76,
    status: "pendente",
    date: "25/05/2026",
    acct: "Cartão Sicoob",
    parcela: "2/8",
    total: 7598.08
  }, {
    id: "i2",
    name: "Imposto MEI",
    val: 80,
    status: "pendente",
    date: "20/06/2026",
    acct: "Geral",
    recurring: true
  }]
}, {
  cat: "Transporte - Pessoal",
  icon: "🚗",
  kind: "despesa",
  share: "5% das Despesas",
  items: [{
    id: "t1",
    name: "Combustível",
    val: 620,
    status: "pago",
    date: "09/06/2026",
    acct: "Nubank"
  }, {
    id: "t2",
    name: "Uber",
    val: 359.94,
    status: "pago",
    date: "12/06/2026",
    acct: "Nubank"
  }]
}, {
  cat: "Compras Internet - Pessoal",
  icon: "🛒",
  kind: "despesa",
  share: "5% das Despesas",
  items: [{
    id: "c1",
    name: "Amazon",
    val: 544.61,
    status: "pago",
    date: "07/06/2026",
    acct: "Nubank"
  }, {
    id: "c2",
    name: "Mercado Livre",
    val: 400,
    status: "pendente",
    date: "16/06/2026",
    acct: "Itaú"
  }]
}, {
  cat: "Vestuário - Pessoal",
  icon: "👕",
  kind: "despesa",
  share: "3% das Despesas",
  relief: true,
  items: [{
    id: "v1",
    name: "Renner",
    val: 425.23,
    status: "pago",
    date: "06/06/2026",
    acct: "Nubank",
    parcela: "1/3",
    total: 1275.69
  }, {
    id: "v2",
    name: "Tênis",
    val: 200,
    status: "pendente",
    date: "22/06/2026",
    acct: "Itaú"
  }]
}, {
  cat: "Pets - Pessoal",
  icon: "🐾",
  kind: "despesa",
  share: "3% das Despesas",
  relief: true,
  items: [{
    id: "p1",
    name: "Ração",
    val: 312.34,
    status: "pago",
    date: "08/06/2026",
    acct: "Nubank",
    recurring: true
  }, {
    id: "p2",
    name: "Veterinário",
    val: 180,
    status: "pendente",
    date: "19/06/2026",
    acct: "Itaú"
  }]
}, {
  cat: "Saúde - Pessoal",
  icon: "💊",
  kind: "despesa",
  share: "3% das Despesas",
  items: [{
    id: "s1",
    name: "Plano de saúde",
    val: 365.66,
    status: "pago",
    date: "05/06/2026",
    acct: "Itaú",
    recurring: true
  }, {
    id: "s2",
    name: "Farmácia",
    val: 120,
    status: "pago",
    date: "13/06/2026",
    acct: "Nubank"
  }]
}, {
  cat: "Carro Gol - Pessoal",
  icon: "🚙",
  kind: "despesa",
  share: "2% das Despesas",
  relief: true,
  items: [{
    id: "cg1",
    name: "Seguro do carro",
    val: 268.25,
    status: "pendente",
    date: "28/06/2026",
    acct: "Itaú",
    parcela: "3/12",
    total: 3219
  }, {
    id: "cg2",
    name: "Revisão",
    val: 180,
    status: "pago",
    date: "04/06/2026",
    acct: "Nubank"
  }]
}, {
  cat: "Lazer - Pessoal",
  icon: "🎉",
  kind: "despesa",
  share: "2% das Despesas",
  items: [{
    id: "l1",
    name: "Cinema",
    val: 88.38,
    status: "pago",
    date: "14/06/2026",
    acct: "Nubank"
  }, {
    id: "l2",
    name: "Show",
    val: 300,
    status: "pendente",
    date: "27/06/2026",
    acct: "Itaú"
  }]
}, {
  cat: "Presentes - Pessoal",
  icon: "🎁",
  kind: "despesa",
  share: "2% das Despesas",
  items: [{
    id: "pr1",
    name: "Aniversário mãe",
    val: 381.96,
    status: "pago",
    date: "11/06/2026",
    acct: "Nubank"
  }]
}, {
  cat: "Assinaturas - Pessoal",
  icon: "🎬",
  kind: "despesa",
  share: "2% das Despesas",
  items: [{
    id: "as1",
    name: "Netflix",
    val: 44.9,
    status: "pago",
    date: "07/06/2026",
    acct: "Nubank",
    recurring: true
  }, {
    id: "as2",
    name: "Spotify",
    val: 34.9,
    status: "pago",
    date: "07/06/2026",
    acct: "Nubank",
    recurring: true
  }, {
    id: "as3",
    name: "iCloud + YouTube",
    val: 218.09,
    status: "pendente",
    date: "21/06/2026",
    acct: "Itaú",
    recurring: true
  }]
}, {
  cat: "Fono Louise - Pessoal",
  icon: "🩺",
  kind: "despesa",
  share: "2% das Despesas",
  items: [{
    id: "f1",
    name: "Fonoaudióloga",
    val: 292.38,
    status: "pendente",
    date: "18/06/2026",
    acct: "Itaú",
    recurring: true
  }]
}, {
  cat: "Restaurante - Pessoal",
  icon: "🍽",
  kind: "despesa",
  share: "1% das Despesas",
  items: [{
    id: "r1",
    name: "Jantar fora",
    val: 285.33,
    status: "pago",
    date: "15/06/2026",
    acct: "Nubank"
  }]
}, {
  cat: "Almoço - Pessoal",
  icon: "🍱",
  kind: "despesa",
  share: "1% das Despesas",
  items: [{
    id: "al1",
    name: "Almoço trabalho",
    val: 240,
    status: "pago",
    date: "12/06/2026",
    acct: "Nubank",
    recurring: true
  }]
}, {
  cat: "Academia - Pessoal",
  icon: "🏋️",
  kind: "despesa",
  share: "1% das Despesas",
  items: [{
    id: "ac1",
    name: "Mensalidade",
    val: 218,
    status: "pago",
    date: "05/06/2026",
    acct: "Itaú",
    recurring: true
  }]
}, {
  cat: "Utensílios Casa - Pessoal",
  icon: "🍳",
  kind: "despesa",
  share: "1% das Despesas",
  relief: true,
  items: [{
    id: "u1",
    name: "Panela + pratos",
    val: 200,
    status: "pendente",
    date: "23/06/2026",
    acct: "Nubank"
  }]
}, {
  cat: "Apostas - Pessoal",
  icon: "🎲",
  kind: "despesa",
  share: "1% das Despesas",
  items: [{
    id: "ap1",
    name: "Loteria",
    val: 142,
    status: "pago",
    date: "10/06/2026",
    acct: "Carteira"
  }]
}, {
  cat: "Educação",
  icon: "📖",
  kind: "despesa",
  share: "1% das Despesas",
  items: [{
    id: "ed1",
    name: "Livros",
    val: 97,
    status: "pago",
    date: "08/06/2026",
    acct: "Nubank"
  }]
}, {
  cat: "Geral - Pessoal",
  icon: "📦",
  kind: "despesa",
  share: "0% das Despesas",
  items: [{
    id: "ge1",
    name: "Diversos",
    val: 70.47,
    status: "pago",
    date: "13/06/2026",
    acct: "Nubank"
  }]
}, {
  cat: "Seguro - Pessoal",
  icon: "🛡",
  kind: "despesa",
  share: "0% das Despesas",
  items: [{
    id: "se1",
    name: "Seguro celular",
    val: 33.04,
    status: "pago",
    date: "05/06/2026",
    acct: "Itaú",
    recurring: true
  }]
}];
const groupTotal = g => g.items.reduce((s, it) => s + it.val, 0);
const STATUS = {
  recebido: {
    label: "Recebido",
    cls: "ok"
  },
  pago: {
    label: "Pago",
    cls: "ok"
  },
  pendente: {
    label: "Pendente",
    cls: "warn"
  },
  vencido: {
    label: "Vencido",
    cls: "danger"
  }
};

/* mask helper so the topbar eye toggle can blur values */
const Amount = ({
  children,
  className = ""
}) => /*#__PURE__*/React.createElement("span", {
  className: "mov-amount " + className
}, children);

/* ============================================================
   KPIs
   ============================================================ */
function MovKpis() {
  return /*#__PURE__*/React.createElement("div", {
    className: "mov-kpis",
    style: {
      gridColumn: "span 3"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mov-kpi accent"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mov-kpi-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mov-kpi-ic"
  }, /*#__PURE__*/React.createElement(MI.IcWallet, {
    s: 18
  })), " Saldo atual"), /*#__PURE__*/React.createElement(Amount, {
    className: "mov-kpi-val grad-green"
  }, movBrl(MOV_KPI.saldo)), /*#__PURE__*/React.createElement("div", {
    className: "mov-kpi-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mov-kpi-fill",
    style: {
      width: "100%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "mov-kpi-foot"
  }, /*#__PURE__*/React.createElement("span", null, "Saldo positivo no per\xEDodo"), /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "Sem or\xE7amento de refer\xEAncia"))), /*#__PURE__*/React.createElement("div", {
    className: "mov-kpi"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mov-kpi-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mov-kpi-ic up"
  }, /*#__PURE__*/React.createElement(MI.IcUp, {
    s: 18
  })), " Receitas do m\xEAs"), /*#__PURE__*/React.createElement(Amount, {
    className: "mov-kpi-val"
  }, movBrl(MOV_KPI.receitas)), /*#__PURE__*/React.createElement("div", {
    className: "mov-kpi-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mov-kpi-fill",
    style: {
      width: MOV_KPI.recebidoPct + "%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "mov-kpi-foot"
  }, /*#__PURE__*/React.createElement("span", null, MOV_KPI.recebidoPct, "% recebido"), /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "Faltam ", movBrl(MOV_KPI.faltamRec), " (", MOV_KPI.faltamRecItens, " item)"))), /*#__PURE__*/React.createElement("div", {
    className: "mov-kpi"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mov-kpi-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mov-kpi-ic down"
  }, /*#__PURE__*/React.createElement(MI.IcDown, {
    s: 18
  })), " Despesas do m\xEAs"), /*#__PURE__*/React.createElement(Amount, {
    className: "mov-kpi-val"
  }, movBrl(MOV_KPI.despesas)), /*#__PURE__*/React.createElement("div", {
    className: "mov-kpi-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mov-kpi-fill down",
    style: {
      width: MOV_KPI.pagoPct + "%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "mov-kpi-foot"
  }, /*#__PURE__*/React.createElement("span", null, MOV_KPI.pagoPct, "% pago"), /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, MOV_KPI.pendDesp, " itens pendentes"))));
}

/* ============================================================
   Quick actions
   ============================================================ */
function MovActions({
  onAdd,
  flash,
  selectedCount
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mov-toolbar",
    style: {
      gridColumn: "span 3"
    }
  }, /*#__PURE__*/React.createElement(DSm.Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(MI.IcPlus, {
      s: 18
    }),
    onClick: onAdd
  }, "Novo lan\xE7amento"), /*#__PURE__*/React.createElement("div", {
    className: "mov-tool-group"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => flash("Selecione o arquivo do extrato…")
  }, /*#__PURE__*/React.createElement(MI.IcDownload, {
    s: 16
  }), " Importar extrato"), /*#__PURE__*/React.createElement("button", {
    onClick: () => flash("Selecione a fatura do cartão…")
  }, /*#__PURE__*/React.createElement(MI.IcCardIcon, {
    s: 16
  }), " Importar fatura"), /*#__PURE__*/React.createElement("button", {
    onClick: () => flash("Abrindo histórico de alterações…")
  }, /*#__PURE__*/React.createElement(MI.IcClock, {
    s: 16
  }), " Hist\xF3rico")), /*#__PURE__*/React.createElement("button", {
    className: "mov-markall" + (selectedCount ? " has-sel" : ""),
    onClick: () => flash(selectedCount ? `${selectedCount} marcados como pagos/recebidos` : "Tudo marcado como pago/recebido")
  }, /*#__PURE__*/React.createElement(MI.IcCheck, {
    s: 16
  }), " ", selectedCount ? `Marcar ${selectedCount} selecionados` : "Marcar todos pagos/recebidos"));
}

/* ============================================================
   Filters
   ============================================================ */
function MovFilters({
  flash
}) {
  const [open, setOpen] = movS(true);
  const Pill = ({
    label
  }) => /*#__PURE__*/React.createElement("button", {
    className: "mov-pill-btn",
    onClick: () => flash("Abrir filtro: " + label)
  }, label, " ", /*#__PURE__*/React.createElement(MI.IcChevron, {
    s: 14
  }));
  return /*#__PURE__*/React.createElement(DSm.Card, {
    padding: 18,
    style: {
      gridColumn: "span 3"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mov-filterbar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mov-fil-ic"
  }, /*#__PURE__*/React.createElement(MI.IcSliders, {
    s: 18
  })), /*#__PURE__*/React.createElement("span", {
    className: "mov-fil-title"
  }, "Filtros"), open && /*#__PURE__*/React.createElement("div", {
    className: "mov-pills"
  }, /*#__PURE__*/React.createElement("input", {
    type: "month",
    className: "mov-pill-select mov-pill-month",
    defaultValue: "2026-06"
  }), /*#__PURE__*/React.createElement(Pill, {
    label: "Todas as contas"
  }), /*#__PURE__*/React.createElement(Pill, {
    label: "Todos os cart\xF5es"
  }), /*#__PURE__*/React.createElement(Pill, {
    label: "Todos os tipos"
  }), /*#__PURE__*/React.createElement(Pill, {
    label: "Todas as categorias"
  }), /*#__PURE__*/React.createElement("button", {
    className: "mov-morefilters",
    onClick: () => flash("Mais filtros: status, valor, recorrência…")
  }, /*#__PURE__*/React.createElement(MI.IcSliders, {
    s: 15
  }), " Mais filtros")), /*#__PURE__*/React.createElement("button", {
    className: "mov-collapse" + (open ? "" : " is-closed"),
    onClick: () => setOpen(!open),
    "aria-label": "Recolher filtros"
  }, /*#__PURE__*/React.createElement(MI.IcChevron, {
    s: 18
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mov-auto"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mov-auto-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "mov-auto-lab"
  }, "Lan\xE7amento autom\xE1tico ativo \xB7 ", /*#__PURE__*/React.createElement("b", null, movBrl(MOV_KPI.autoSaldo))), /*#__PURE__*/React.createElement("button", {
    className: "mov-auto-btn",
    onClick: () => flash("Saldo atualizado")
  }, /*#__PURE__*/React.createElement(MI.IcRefresh, {
    s: 15
  }), " Atualizar saldo"), /*#__PURE__*/React.createElement("button", {
    className: "mov-auto-btn ghost",
    onClick: () => flash("Lançamento ignorado no mês atual")
  }, "N\xE3o considerar no m\xEAs atual")));
}

/* ============================================================
   View bar
   ============================================================ */
function MovViewBar({
  view,
  setView,
  onCollapseAll
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mov-viewbar",
    style: {
      gridColumn: "span 3"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mov-viewbar-left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mov-viewbar-txt"
  }, "Visualizando ", /*#__PURE__*/React.createElement("b", null, MOV_GROUPS.length, " categorias"), " \xB7 agrupadas por bloco"), /*#__PURE__*/React.createElement("button", {
    className: "mov-collapse-all",
    onClick: onCollapseAll
  }, /*#__PURE__*/React.createElement(MI.IcChevron, {
    s: 15,
    style: {
      transform: "rotate(180deg)"
    }
  }), " Recolher todos")), /*#__PURE__*/React.createElement("div", {
    className: "mov-viewbar-right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mov-viewbar-lab"
  }, "Visualiza\xE7\xE3o"), /*#__PURE__*/React.createElement("div", {
    className: "mov-viewtoggle"
  }, /*#__PURE__*/React.createElement("button", {
    className: view === "grid" ? "on" : "",
    onClick: () => setView("grid"),
    "aria-label": "Grade"
  }, /*#__PURE__*/React.createElement(MI.IcGrid, {
    s: 16
  })), /*#__PURE__*/React.createElement("button", {
    className: view === "list" ? "on" : "",
    onClick: () => setView("list"),
    "aria-label": "Lista"
  }, /*#__PURE__*/React.createElement(MI.IcList, {
    s: 16
  })))));
}

/* ============================================================
   Item (inside an expanded category block) + Block card
   ============================================================ */
function MovItem({
  it,
  kind,
  selected,
  toggleSel,
  flash
}) {
  const st = STATUS[it.status];
  return /*#__PURE__*/React.createElement("div", {
    className: "mov-bitem " + st.cls + (selected ? " is-sel" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "mov-bitem-head"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mov-check" + (selected ? " on" : ""),
    onClick: () => toggleSel(it.id),
    "aria-label": "Selecionar"
  }, selected ? /*#__PURE__*/React.createElement(MI.IcCheck, {
    s: 12
  }) : null), /*#__PURE__*/React.createElement("span", {
    className: "mov-bitem-name"
  }, it.name), it.parcela ? /*#__PURE__*/React.createElement("span", {
    className: "mov-parcela"
  }, it.parcela) : null, it.recurring ? /*#__PURE__*/React.createElement("span", {
    className: "mov-recur",
    title: "Recorrente"
  }, /*#__PURE__*/React.createElement(MI.IcRefresh, {
    s: 13
  })) : null, /*#__PURE__*/React.createElement(Amount, {
    className: "mov-bitem-val " + kind
  }, kind === "despesa" ? "-" : "", movBrl(it.val))), /*#__PURE__*/React.createElement("div", {
    className: "mov-bitem-meta"
  }, it.date, " \xB7 ", it.acct), it.parcela ? /*#__PURE__*/React.createElement("div", {
    className: "mov-bitem-total"
  }, "Total: ", movBrl(it.total)) : null, /*#__PURE__*/React.createElement("div", {
    className: "mov-bitem-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mov-status " + st.cls
  }, st.label), /*#__PURE__*/React.createElement("div", {
    className: "mov-bitem-acts"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => flash("Editar lançamento"),
    "aria-label": "Editar"
  }, /*#__PURE__*/React.createElement(MI.IcPencil, {
    s: 14
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => flash("Histórico do lançamento"),
    "aria-label": "Hist\xF3rico"
  }, /*#__PURE__*/React.createElement(MI.IcClock, {
    s: 14
  })), /*#__PURE__*/React.createElement("button", {
    className: "danger",
    onClick: () => flash("Lançamento excluído"),
    "aria-label": "Excluir"
  }, /*#__PURE__*/React.createElement(MI.IcTrash, {
    s: 14
  })))));
}
function MovGroup({
  g,
  collapsed,
  toggleGroup,
  selected,
  toggleSel,
  flash
}) {
  const total = groupTotal(g);
  return /*#__PURE__*/React.createElement("div", {
    className: "mov-block " + g.kind + (collapsed ? "" : " is-open")
  }, /*#__PURE__*/React.createElement("button", {
    className: "mov-block-head",
    onClick: () => toggleGroup(g.cat)
  }, /*#__PURE__*/React.createElement("span", {
    className: "mov-block-ic"
  }, g.icon), /*#__PURE__*/React.createElement("div", {
    className: "mov-block-id"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mov-block-name"
  }, g.cat), /*#__PURE__*/React.createElement("div", {
    className: "mov-block-sub"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mov-block-share"
  }, g.share), g.relief ? /*#__PURE__*/React.createElement("span", {
    className: "mov-relief"
  }, /*#__PURE__*/React.createElement(MI.IcSpark, {
    s: 12
  }), " Al\xEDvio no pr\xF3ximo m\xEAs") : null)), /*#__PURE__*/React.createElement("span", {
    className: "mov-block-right"
  }, /*#__PURE__*/React.createElement(Amount, {
    className: "mov-block-total " + g.kind
  }, g.kind === "despesa" ? "-" : "", movBrl(total)), /*#__PURE__*/React.createElement("span", {
    className: "mov-block-chev" + (collapsed ? " is-closed" : "")
  }, /*#__PURE__*/React.createElement(MI.IcChevron, {
    s: 18
  })))), !collapsed && /*#__PURE__*/React.createElement("div", {
    className: "mov-block-items"
  }, g.items.map(it => /*#__PURE__*/React.createElement(MovItem, {
    key: it.id,
    it: it,
    kind: g.kind,
    selected: selected.has(it.id),
    toggleSel: toggleSel,
    flash: flash
  }))));
}

/* ============================================================
   SCREEN
   ============================================================ */
window.Movimentacao = function Movimentacao({
  onAdd
}) {
  const [view, setView] = movS("grid");
  // start with everything collapsed except one expanded, to show the pattern
  const [collapsed, setCollapsed] = movS(() => new Set(MOV_GROUPS.map(g => g.cat).filter(c => c !== "Imposto - Pessoal")));
  const [selected, setSelected] = movS(() => new Set());
  const [toast, setToast] = movS("");
  const flash = msg => {
    setToast(msg);
    setTimeout(() => setToast(""), 2200);
  };
  const toggleGroup = cat => setCollapsed(s => {
    const n = new Set(s);
    n.has(cat) ? n.delete(cat) : n.add(cat);
    return n;
  });
  const allCats = MOV_GROUPS.map(g => g.cat);
  const collapseAll = () => setCollapsed(s => s.size >= allCats.length ? new Set() : new Set(allCats));
  const toggleSel = id => setSelected(s => {
    const n = new Set(s);
    n.has(id) ? n.delete(id) : n.add(id);
    return n;
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "app-grid"
  }, /*#__PURE__*/React.createElement(MovKpis, null), /*#__PURE__*/React.createElement(MovActions, {
    onAdd: onAdd,
    flash: flash,
    selectedCount: selected.size
  }), /*#__PURE__*/React.createElement(MovFilters, {
    flash: flash
  }), /*#__PURE__*/React.createElement(MovViewBar, {
    view: view,
    setView: setView,
    onCollapseAll: collapseAll
  }), /*#__PURE__*/React.createElement("div", {
    className: "mov-blocks " + (view === "grid" ? "as-grid" : "as-list"),
    style: {
      gridColumn: "span 3"
    }
  }, MOV_GROUPS.map(g => /*#__PURE__*/React.createElement(MovGroup, {
    key: g.cat,
    g: g,
    collapsed: collapsed.has(g.cat),
    toggleGroup: toggleGroup,
    selected: selected,
    toggleSel: toggleSel,
    flash: flash
  }))), toast && /*#__PURE__*/React.createElement("div", {
    className: "app-toast"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }, "\u2713"), " ", toast));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/movimentacao.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/reports.jsx
try { (() => {
/* global React */
const {
  useState: repS
} = React;
const DSr = window.DenariussDesignSystem_a1c3fa;
const {
  brl: repBrl
} = window.AppData;
const {
  IcSpark: RIcSpark,
  IcDownload: RIcDownload
} = window.AppIcons;

/* ---------------- report data (junho/2026, consistent w/ dashboard) ---------------- */
const REP = {
  despesas: 5130,
  receitas: 8400,
  saldo: 3270,
  cartao: 1840,
  despesasAnt: 5596,
  orcado: 5000,
  // category — current vs previous month
  cats: [{
    icon: "🏠",
    name: "Moradia",
    cur: 1500,
    ant: 1500
  }, {
    icon: "🛒",
    name: "Mercado",
    cur: 940,
    ant: 880
  }, {
    icon: "🍽",
    name: "Alimentação",
    cur: 820,
    ant: 910
  }, {
    icon: "🧾",
    name: "Contas",
    cur: 680,
    ant: 660
  }, {
    icon: "🛍",
    name: "Compras",
    cur: 480,
    ant: 600
  }, {
    icon: "🚗",
    name: "Transporte",
    cur: 310,
    ant: 280
  }, {
    icon: "⚕️",
    name: "Saúde",
    cur: 220,
    ant: 156
  }, {
    icon: "🎬",
    name: "Assinaturas",
    cur: 180,
    ant: 180
  }],
  // 6-month trend
  trendLabels: ["jan", "fev", "mar", "abr", "mai", "jun"],
  trendReceitas: [7800, 8000, 8400, 8200, 8400, 8400],
  trendDespesas: [5200, 5600, 4900, 6100, 5596, 5130],
  // future commitments winding down
  futLabels: ["jun", "jul", "ago", "set", "out", "nov"],
  futParcelas: [1840, 1620, 1180, 760, 320, 0],
  futRecorrentes: [890, 890, 890, 890, 890, 890],
  // receita x despesa por conta (banco)
  accounts: [{
    name: "Nubank",
    color: "#820AD1",
    rec: 6400,
    desp: 2980
  }, {
    name: "Itaú",
    color: "#EC7000",
    rec: 2000,
    desp: 1240
  }, {
    name: "Inter",
    color: "#FF7A00",
    rec: 0,
    desp: 610
  }, {
    name: "C6 Bank",
    color: "#B9A300",
    rec: 0,
    desp: 180
  }, {
    name: "Carteira",
    color: "#93A1B5",
    rec: 0,
    desp: 120
  }],
  // formas de pagamento (donut)
  methods: [{
    name: "Pix",
    val: 1890,
    color: "#2ECF95"
  }, {
    name: "Crédito",
    val: 1840,
    color: "#3CE6A6"
  }, {
    name: "Débito",
    val: 760,
    color: "#5BC8FF"
  }, {
    name: "Boleto",
    val: 520,
    color: "#B98BFF"
  }, {
    name: "Dinheiro",
    val: 120,
    color: "#FEBC2E"
  }],
  // saldo da conta acumulado ao longo do mês (sempre positivo, dá um mergulho antes do salário)
  balLabels: ["1", "5", "10", "15", "20", "25", "30"],
  balData: [1800, 1100, 600, 7000, 5200, 4100, 3270],
  balLow: {
    val: 600,
    day: 10
  },
  // gasto por dia da semana
  wdLabels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
  wdData: [620, 410, 530, 480, 980, 1240, 870],
  // maiores gastos
  top: [{
    icon: "🏠",
    name: "Aluguel",
    cat: "Moradia",
    val: 1500
  }, {
    icon: "💳",
    name: "Fatura cartão Itaú",
    cat: "Cartão",
    val: 1240
  }, {
    icon: "🧾",
    name: "Conta de luz + água",
    cat: "Contas",
    val: 312
  }, {
    icon: "🛒",
    name: "Pão de Açúcar",
    cat: "Mercado",
    val: 213
  }, {
    icon: "📱",
    name: "Plano Vivo",
    cat: "Contas",
    val: 80
  }]
};
const REP_AI = ["Você fechou junho no azul: superávit de R$ 3.270 (entradas R$ 8.400 contra R$ 5.130 de gastos) — é o 2º mês seguido positivo.", "As despesas caíram R$ 466 em relação a maio (−8%), puxadas por Compras (−R$ 120) e Alimentação (−R$ 90). Bom sinal de controle.", "Moradia (R$ 1.500) e Mercado (R$ 940) concentram 48% de tudo que saiu. É aqui que pequenos ajustes rendem mais economia.", "Atenção: Saúde subiu de R$ 156 para R$ 220 (+41%). Se foi um gasto pontual, tudo bem — se virar recorrente, vale revisar.", "Seus parcelamentos zeram em novembro, liberando cerca de R$ 1.840/mês de fôlego no caixa a partir de dezembro."];

/* ============================================================
   Reusable line chart (SVG) — area + line, multi-series
   ============================================================ */
function LineChart({
  id,
  labels,
  series,
  height = 188,
  money = true
}) {
  const W = 560,
    H = height,
    padL = 10,
    padR = 12,
    padT = 16,
    padB = 30;
  const iw = W - padL - padR,
    ih = H - padT - padB;
  const max = Math.max(1, ...series.flatMap(s => s.data)) * 1.15;
  const x = i => padL + i / (labels.length - 1) * iw;
  const y = v => padT + ih - v / max * ih;
  const grid = [0, 0.5, 1];
  return /*#__PURE__*/React.createElement("svg", {
    className: "rep-svg",
    viewBox: `0 0 ${W} ${H}`,
    preserveAspectRatio: "none",
    role: "img"
  }, /*#__PURE__*/React.createElement("defs", null, series.map((s, si) => /*#__PURE__*/React.createElement("linearGradient", {
    key: si,
    id: `${id}-g${si}`,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: s.color,
    stopOpacity: "0.32"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: s.color,
    stopOpacity: "0"
  })))), grid.map((g, i) => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: padL,
    x2: W - padR,
    y1: padT + ih - g * ih,
    y2: padT + ih - g * ih,
    stroke: "rgba(255,255,255,0.07)",
    strokeWidth: "1",
    strokeDasharray: "3 5"
  })), series.map((s, si) => {
    const pts = s.data.map((v, i) => `${x(i)},${y(v)}`).join(" ");
    const area = `M ${x(0)},${padT + ih} L ${pts.split(" ").join(" L ")} L ${x(labels.length - 1)},${padT + ih} Z`;
    return /*#__PURE__*/React.createElement("g", {
      key: si
    }, /*#__PURE__*/React.createElement("path", {
      d: area,
      fill: `url(#${id}-g${si})`
    }), /*#__PURE__*/React.createElement("polyline", {
      points: pts,
      fill: "none",
      stroke: s.color,
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), s.data.map((v, i) => /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: x(i),
      cy: y(v),
      r: "3.5",
      fill: "var(--navy)",
      stroke: s.color,
      strokeWidth: "2.5"
    })));
  }), labels.map((l, i) => /*#__PURE__*/React.createElement("text", {
    key: i,
    x: x(i),
    y: H - 9,
    fill: "var(--faint)",
    fontSize: "12",
    textAnchor: "middle",
    fontFamily: "var(--font-numeric)"
  }, l)));
}
function Legend({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "app-legend"
  }, items.map(it => /*#__PURE__*/React.createElement("span", {
    key: it.label
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      background: it.color
    }
  }), it.label)));
}

/* ============================================================
   Section 1 — control bar
   ============================================================ */
function ControlBar({
  onGenerate,
  onDownload,
  sections,
  toggle
}) {
  const opts = [{
    id: "cats",
    label: "Categorias"
  }, {
    id: "accounts",
    label: "Contas"
  }, {
    id: "methods",
    label: "Pagamento"
  }, {
    id: "trend",
    label: "Tendência"
  }, {
    id: "future",
    label: "Comprometimento"
  }, {
    id: "ai",
    label: "Resumo IA"
  }];
  return /*#__PURE__*/React.createElement(DSr.Card, {
    padding: 24,
    style: {
      gridColumn: "span 3"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rep-control"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rep-control-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-card-kicker"
  }, "Relat\xF3rio mensal"), /*#__PURE__*/React.createElement("h3", {
    className: "app-card-title"
  }, "Escolha o m\xEAs e gere os indicadores"), /*#__PURE__*/React.createElement("p", {
    className: "rep-sub"
  }, "Os gr\xE1ficos aparecem na hora. O resumo com IA \xE9 gerado s\xF3 quando voc\xEA pedir."), /*#__PURE__*/React.createElement("div", {
    className: "rep-control-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rep-month"
  }, /*#__PURE__*/React.createElement("label", null, "M\xEAs"), /*#__PURE__*/React.createElement("select", {
    defaultValue: "2026-06"
  }, /*#__PURE__*/React.createElement("option", {
    value: "2026-06"
  }, "Junho 2026"), /*#__PURE__*/React.createElement("option", {
    value: "2026-05"
  }, "Maio 2026"), /*#__PURE__*/React.createElement("option", {
    value: "2026-04"
  }, "Abril 2026"))), /*#__PURE__*/React.createElement(DSr.Button, {
    variant: "primary",
    onClick: onGenerate
  }, "Gerar relat\xF3rio"), /*#__PURE__*/React.createElement(DSr.Button, {
    variant: "ghost",
    icon: /*#__PURE__*/React.createElement(RIcDownload, {
      s: 18
    }),
    onClick: onDownload
  }, "Baixar PDF"))), /*#__PURE__*/React.createElement("div", {
    className: "rep-sections"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rep-sections-lab"
  }, "Incluir no relat\xF3rio"), /*#__PURE__*/React.createElement("div", {
    className: "rep-chips"
  }, opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.id,
    className: "rep-chip" + (sections[o.id] ? " on" : ""),
    onClick: () => toggle(o.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "rep-check"
  }, sections[o.id] ? "✓" : ""), o.label))))));
}

/* ============================================================
   Section 2 — KPIs
   ============================================================ */
function Kpis() {
  const comp = REP.despesas - REP.despesasAnt;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span 3"
    },
    className: "rep-kpis"
  }, /*#__PURE__*/React.createElement(DSr.KpiCard, {
    label: "\u2193 Despesas no m\xEAs",
    value: repBrl(REP.despesas),
    delta: `▼ ${repBrl(comp)} vs maio`,
    trend: "up"
  }), /*#__PURE__*/React.createElement(DSr.KpiCard, {
    label: "\u2191 Receitas no m\xEAs",
    value: repBrl(REP.receitas),
    delta: "\u25B2 est\xE1vel vs maio",
    trend: "up"
  }), /*#__PURE__*/React.createElement(DSr.KpiCard, {
    label: "\u25CE Saldo do m\xEAs",
    value: repBrl(REP.saldo),
    delta: "Super\xE1vit \u2713",
    accent: true
  }), /*#__PURE__*/React.createElement(DSr.KpiCard, {
    label: "\u25A4 Cart\xE3o de cr\xE9dito",
    value: repBrl(REP.cartao),
    delta: "36% do limite",
    trend: "down"
  }));
}

/* ============================================================
   Section 3 — category compare (grouped bars)
   ============================================================ */
function CategoryCompare() {
  const max = Math.max(...REP.cats.flatMap(c => [c.cur, c.ant]));
  return /*#__PURE__*/React.createElement(DSr.Card, {
    padding: 24,
    style: {
      gridColumn: "span 2"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-card-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "app-card-kicker"
  }, "Comparativo"), /*#__PURE__*/React.createElement("h3", {
    className: "app-card-title"
  }, "Categorias: m\xEAs atual x anterior")), /*#__PURE__*/React.createElement(Legend, {
    items: [{
      label: "Anterior",
      color: "rgba(255,255,255,0.22)"
    }, {
      label: "Atual",
      color: "var(--green)"
    }]
  })), /*#__PURE__*/React.createElement("div", {
    className: "rep-bars"
  }, REP.cats.map(c => /*#__PURE__*/React.createElement("div", {
    className: "rep-bar-col",
    key: c.name
  }, /*#__PURE__*/React.createElement("div", {
    className: "rep-bar-pair"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rep-bar ant",
    style: {
      height: c.ant / max * 150
    },
    title: `Anterior ${repBrl(c.ant)}`
  }), /*#__PURE__*/React.createElement("div", {
    className: "rep-bar cur",
    style: {
      height: c.cur / max * 150
    },
    title: `Atual ${repBrl(c.cur)}`
  })), /*#__PURE__*/React.createElement("span", {
    className: "rep-bar-emoji"
  }, c.icon), /*#__PURE__*/React.createElement("span", {
    className: "rep-bar-name"
  }, c.name)))));
}

/* ============================================================
   Section 4 — distribution (horizontal % bars)
   ============================================================ */
function Distribution() {
  const total = REP.cats.reduce((s, c) => s + c.cur, 0);
  const sorted = [...REP.cats].sort((a, b) => b.cur - a.cur);
  const max = sorted[0].cur;
  return /*#__PURE__*/React.createElement(DSr.Card, {
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-card-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "app-card-kicker"
  }, "Onde foi o dinheiro"), /*#__PURE__*/React.createElement("h3", {
    className: "app-card-title"
  }, "Distribui\xE7\xE3o do m\xEAs"))), /*#__PURE__*/React.createElement("div", {
    className: "rep-dist"
  }, sorted.map(c => /*#__PURE__*/React.createElement("div", {
    className: "rep-dist-row",
    key: c.name
  }, /*#__PURE__*/React.createElement("span", {
    className: "rep-dist-name"
  }, c.icon, " ", c.name), /*#__PURE__*/React.createElement("div", {
    className: "rep-dist-track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rep-dist-fill",
    style: {
      width: c.cur / max * 100 + "%"
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "rep-dist-pct"
  }, Math.round(c.cur / total * 100), "%")))));
}

/* ============================================================
   Section 5 & 6 — trend + future commitment
   ============================================================ */
function Trend() {
  return /*#__PURE__*/React.createElement(DSr.Card, {
    padding: 24,
    style: {
      gridColumn: "span 2"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-card-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "app-card-kicker"
  }, "Tend\xEAncia \xB7 6 meses"), /*#__PURE__*/React.createElement("h3", {
    className: "app-card-title"
  }, "Receitas x despesas")), /*#__PURE__*/React.createElement(Legend, {
    items: [{
      label: "Receitas",
      color: "var(--green)"
    }, {
      label: "Despesas",
      color: "#FF8A8A"
    }]
  })), /*#__PURE__*/React.createElement(LineChart, {
    id: "trend",
    labels: REP.trendLabels,
    series: [{
      color: "var(--green)",
      data: REP.trendReceitas
    }, {
      color: "#FF8A8A",
      data: REP.trendDespesas
    }]
  }));
}
function FutureChart() {
  return /*#__PURE__*/React.createElement(DSr.Card, {
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-card-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "app-card-kicker"
  }, "Pr\xF3ximos meses"), /*#__PURE__*/React.createElement("h3", {
    className: "app-card-title"
  }, "Comprometimento futuro"))), /*#__PURE__*/React.createElement(LineChart, {
    id: "fut",
    labels: REP.futLabels,
    height: 170,
    series: [{
      color: "#5BC8FF",
      data: REP.futParcelas
    }, {
      color: "#B98BFF",
      data: REP.futRecorrentes
    }]
  }), /*#__PURE__*/React.createElement(Legend, {
    items: [{
      label: "Parcelamentos",
      color: "#5BC8FF"
    }, {
      label: "Recorrentes",
      color: "#B98BFF"
    }]
  }));
}

/* ============================================================
   Section 7 — AI summary (on demand)
   ============================================================ */
function AiSummary() {
  const [state, setState] = repS("idle"); // idle · loading · done
  const generate = () => {
    setState("loading");
    setTimeout(() => setState("done"), 1700);
  };
  return /*#__PURE__*/React.createElement(DSr.Card, {
    padding: 26,
    accent: true,
    style: {
      gridColumn: "span 3"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rep-ai-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rep-ai-title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rep-ai-spark"
  }, /*#__PURE__*/React.createElement(RIcSpark, {
    s: 18
  })), " Resumo por IA"), state === "done" ? /*#__PURE__*/React.createElement("button", {
    className: "app-link",
    onClick: generate
  }, "\u21BB Gerar de novo") : null), state === "idle" && /*#__PURE__*/React.createElement("div", {
    className: "rep-ai-empty"
  }, /*#__PURE__*/React.createElement("p", null, "A IA da Denariuss l\xEA os n\xFAmeros acima e te explica, em portugu\xEAs claro, o que aconteceu no seu m\xEAs \u2014 e o que fazer a seguir."), /*#__PURE__*/React.createElement(DSr.Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(RIcSpark, {
      s: 18
    }),
    onClick: generate
  }, "Gerar resumo com IA")), state === "loading" && /*#__PURE__*/React.createElement("div", {
    className: "rep-ai-loading"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rep-ai-dots"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)), /*#__PURE__*/React.createElement("span", null, "Analisando suas movimenta\xE7\xF5es de junho\u2026")), state === "done" && /*#__PURE__*/React.createElement("ul", {
    className: "rep-ai-list"
  }, REP_AI.map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      animationDelay: i * 90 + "ms"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rep-ai-bullet"
  }), t))));
}

/* ============================================================
   Section — Receita x Despesa por conta (diverging bars)
   ============================================================ */
function AccountsChart() {
  const max = Math.max(...REP.accounts.flatMap(a => [a.rec, a.desp]));
  return /*#__PURE__*/React.createElement(DSr.Card, {
    padding: 24,
    style: {
      gridColumn: "span 2"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-card-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "app-card-kicker"
  }, "Por conta"), /*#__PURE__*/React.createElement("h3", {
    className: "app-card-title"
  }, "Receita x despesa por conta")), /*#__PURE__*/React.createElement(Legend, {
    items: [{
      label: "Despesa",
      color: "#FF8A8A"
    }, {
      label: "Receita",
      color: "var(--green)"
    }]
  })), /*#__PURE__*/React.createElement("div", {
    className: "rep-acc"
  }, REP.accounts.map(a => /*#__PURE__*/React.createElement("div", {
    className: "rep-acc-row",
    key: a.name
  }, /*#__PURE__*/React.createElement("div", {
    className: "rep-acc-side neg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rep-acc-val"
  }, a.desp ? repBrl(a.desp) : "—"), /*#__PURE__*/React.createElement("div", {
    className: "rep-acc-bar desp",
    style: {
      width: a.desp / max * 100 + "%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "rep-acc-mid"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      background: a.color
    }
  }), a.name), /*#__PURE__*/React.createElement("div", {
    className: "rep-acc-side pos"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rep-acc-bar rec",
    style: {
      width: a.rec / max * 100 + "%"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "rep-acc-val"
  }, a.rec ? repBrl(a.rec) : "—"))))));
}

/* ============================================================
   Section — Formas de pagamento (donut)
   ============================================================ */
function PaymentMethods() {
  const total = REP.methods.reduce((s, m) => s + m.val, 0);
  let acc = 0;
  const stops = REP.methods.map(m => {
    const start = acc / total * 360;
    acc += m.val;
    const end = acc / total * 360;
    return `${m.color} ${start}deg ${end}deg`;
  }).join(", ");
  return /*#__PURE__*/React.createElement(DSr.Card, {
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-card-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "app-card-kicker"
  }, "Como voc\xEA pagou"), /*#__PURE__*/React.createElement("h3", {
    className: "app-card-title"
  }, "Formas de pagamento"))), /*#__PURE__*/React.createElement("div", {
    className: "rep-donut-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rep-donut",
    style: {
      background: `conic-gradient(${stops})`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rep-donut-hole"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rep-donut-total"
  }, repBrl(total)), /*#__PURE__*/React.createElement("span", {
    className: "rep-donut-lab"
  }, "no m\xEAs"))), /*#__PURE__*/React.createElement("div", {
    className: "rep-donut-legend"
  }, REP.methods.map(m => /*#__PURE__*/React.createElement("div", {
    className: "rep-donut-item",
    key: m.name
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      background: m.color
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "rep-donut-name"
  }, m.name), /*#__PURE__*/React.createElement("span", {
    className: "rep-donut-pct"
  }, Math.round(m.val / total * 100), "%"))))));
}

/* ============================================================
   Section — Saldo acumulado no mês
   ============================================================ */
function BalanceFlow() {
  return /*#__PURE__*/React.createElement(DSr.Card, {
    padding: 24,
    style: {
      gridColumn: "span 2"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-card-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "app-card-kicker"
  }, "No m\xEAs \xB7 dia a dia"), /*#__PURE__*/React.createElement("h3", {
    className: "app-card-title"
  }, "Saldo acumulado da conta")), /*#__PURE__*/React.createElement("span", {
    className: "rep-flag"
  }, "\u25BC Menor saldo ", repBrl(REP.balLow.val), " \xB7 dia ", REP.balLow.day)), /*#__PURE__*/React.createElement(LineChart, {
    id: "bal",
    labels: REP.balLabels,
    height: 178,
    series: [{
      color: "var(--green)",
      data: REP.balData
    }]
  }));
}

/* ============================================================
   Section — Gasto por dia da semana
   ============================================================ */
function WeekdaySpending() {
  const max = Math.max(...REP.wdData);
  return /*#__PURE__*/React.createElement(DSr.Card, {
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-card-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "app-card-kicker"
  }, "Padr\xE3o"), /*#__PURE__*/React.createElement("h3", {
    className: "app-card-title"
  }, "Gasto por dia da semana"))), /*#__PURE__*/React.createElement("div", {
    className: "rep-wd"
  }, REP.wdLabels.map((l, i) => {
    const weekend = i >= 5;
    return /*#__PURE__*/React.createElement("div", {
      className: "rep-wd-col",
      key: l
    }, /*#__PURE__*/React.createElement("div", {
      className: "rep-wd-bar" + (weekend ? " wknd" : ""),
      style: {
        height: REP.wdData[i] / max * 132
      },
      title: repBrl(REP.wdData[i])
    }), /*#__PURE__*/React.createElement("span", {
      className: "rep-wd-lab" + (weekend ? " wknd" : "")
    }, l));
  })), /*#__PURE__*/React.createElement("p", {
    className: "rep-foot-note"
  }, "Fim de semana concentra ", /*#__PURE__*/React.createElement("b", {
    className: "down"
  }, "41%"), " dos seus gastos."));
}

/* ============================================================
   Section — Maiores gastos do mês
   ============================================================ */
function TopExpenses() {
  const max = REP.top[0].val;
  return /*#__PURE__*/React.createElement(DSr.Card, {
    padding: 24,
    style: {
      gridColumn: "span 3"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-card-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "app-card-kicker"
  }, "Destaques"), /*#__PURE__*/React.createElement("h3", {
    className: "app-card-title"
  }, "Maiores gastos do m\xEAs"))), /*#__PURE__*/React.createElement("div", {
    className: "rep-top"
  }, REP.top.map((t, i) => /*#__PURE__*/React.createElement("div", {
    className: "rep-top-row",
    key: t.name
  }, /*#__PURE__*/React.createElement("span", {
    className: "rep-top-rank"
  }, i + 1), /*#__PURE__*/React.createElement("div", {
    className: "app-tx-ic"
  }, t.icon), /*#__PURE__*/React.createElement("div", {
    className: "rep-top-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-tx-name"
  }, t.name), /*#__PURE__*/React.createElement("div", {
    className: "app-tx-meta"
  }, t.cat)), /*#__PURE__*/React.createElement("div", {
    className: "rep-top-track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rep-top-fill",
    style: {
      width: t.val / max * 100 + "%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "app-tx-val"
  }, repBrl(t.val))))));
}

/* ============================================================
   SCREEN
   ============================================================ */
window.Reports = function Reports() {
  const [sections, setSections] = repS({
    cats: true,
    accounts: true,
    methods: true,
    trend: true,
    future: true,
    ai: true
  });
  const [toast, setToast] = repS("");
  const toggle = id => setSections(s => ({
    ...s,
    [id]: !s[id]
  }));
  const flash = msg => {
    setToast(msg);
    setTimeout(() => setToast(""), 2200);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "app-grid"
  }, /*#__PURE__*/React.createElement(ControlBar, {
    sections: sections,
    toggle: toggle,
    onGenerate: () => flash("Relatório atualizado para junho 2026"),
    onDownload: () => flash("Gerando PDF do relatório…")
  }), /*#__PURE__*/React.createElement(Kpis, null), sections.ai && /*#__PURE__*/React.createElement(AiSummary, null), sections.accounts && /*#__PURE__*/React.createElement(AccountsChart, null), sections.methods && /*#__PURE__*/React.createElement(PaymentMethods, null), /*#__PURE__*/React.createElement(BalanceFlow, null), /*#__PURE__*/React.createElement(WeekdaySpending, null), sections.cats && /*#__PURE__*/React.createElement(CategoryCompare, null), sections.cats && /*#__PURE__*/React.createElement(Distribution, null), sections.trend && /*#__PURE__*/React.createElement(Trend, null), sections.future && /*#__PURE__*/React.createElement(FutureChart, null), /*#__PURE__*/React.createElement(TopExpenses, null), toast && /*#__PURE__*/React.createElement("div", {
    className: "app-toast"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }, "\u2713"), " ", toast));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/reports.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/foundations.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
const {
  useState: useS,
  useEffect: useE,
  useRef: useR
} = React;

/* shared scroll ticker — IntersectionObserver is unreliable in sandboxed
   preview iframes, so we use rect checks on a throttled scroll/resize loop. */
const _watchers = new Set();
let _ticking = false;
function _runWatchers() {
  _ticking = false;
  _watchers.forEach(fn => fn());
}
function _schedule() {
  if (_ticking) return;
  _ticking = true;
  requestAnimationFrame(_runWatchers);
}
if (typeof window !== "undefined") {
  window.addEventListener("scroll", _schedule, {
    passive: true
  });
  window.addEventListener("resize", _schedule);
}
function watchInView(getEl, onIn, ratio = 0.88) {
  const fn = () => {
    const el = getEl();
    if (!el) return;
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (r.top < vh * ratio && r.bottom > 0) {
      onIn();
      _watchers.delete(fn);
    }
  };
  _watchers.add(fn);
  // initial checks (fonts/layout may settle a beat late)
  fn();
  requestAnimationFrame(fn);
  setTimeout(fn, 120);
  setTimeout(fn, 500);
  return () => _watchers.delete(fn);
}

/* Reveal-on-scroll wrapper */
function Reveal({
  children,
  as = "div",
  delay = 0,
  className = "",
  style,
  ...rest
}) {
  const ref = useR(null);
  const [shown, setShown] = useS(false);
  const [safe, setSafe] = useS(false);
  useE(() => watchInView(() => ref.current, () => setShown(true)), []);
  // guaranteed end-state: setTimeout fires even when rAF/transitions are
  // throttled (offscreen tabs), so content can never stay invisible.
  useE(() => {
    if (!shown) return;
    const id = setTimeout(() => setSafe(true), 900);
    return () => clearTimeout(id);
  }, [shown]);
  const Tag = as;
  const cls = "reveal " + (shown ? "in " : "") + (safe ? "reveal-safe " : "") + (delay ? "d" + delay + " " : "") + className;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    className: cls,
    style: style
  }, rest), children);
}

/* Count-up number — animates when scrolled into view */
function CountUp({
  to,
  prefix = "",
  suffix = "",
  dur = 1500,
  decimals = 0
}) {
  const ref = useR(null);
  const [val, setVal] = useS(0);
  useE(() => {
    let raf, snap;
    const stop = watchInView(() => ref.current, () => {
      const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        setVal(to);
        return;
      }
      const t0 = performance.now();
      const tick = now => {
        const p = Math.min(1, (now - t0) / dur);
        const e2 = 1 - Math.pow(1 - p, 3);
        setVal(to * e2);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      // fallback: if rAF is throttled, snap to final value
      snap = setTimeout(() => setVal(to), dur + 700);
    }, 0.96);
    return () => {
      stop();
      cancelAnimationFrame(raf);
      clearTimeout(snap);
    };
  }, [to]);
  const shown = decimals ? val.toFixed(decimals).replace(".", ",") : Math.round(val).toLocaleString("pt-BR");
  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, prefix, shown, suffix);
}

/* feature / ui icons (24-grid) */
function I({
  children,
  s = 22,
  sw = 1.8
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, children);
}
const Icons = {
  glance: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "9",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "3",
    width: "7",
    height: "5",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "12",
    width: "7",
    height: "9",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "16",
    width: "7",
    height: "5",
    rx: "1.5"
  })),
  repeat: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M17 2l4 4-4 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 11V9a4 4 0 0 1 4-4h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 22l-4-4 4-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 13v2a4 4 0 0 1-4 4H3"
  })),
  pie: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M21.21 15.89A10 10 0 1 1 8 2.83"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 12A10 10 0 0 0 12 2v10z"
  })),
  flow: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M3 17l6-6 4 4 8-8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 7h4v4"
  })),
  bell: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.7 21a2 2 0 0 1-3.4 0"
  })),
  card: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "5",
    width: "20",
    height: "14",
    rx: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 10h20"
  })),
  budget: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
  })),
  chat: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"
  })),
  lock: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "11",
    width: "18",
    height: "11",
    rx: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4"
  })),
  shield: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  })),
  nobank: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M3 21h18M5 21V10M19 21V10M12 3L4 8h16z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 21v-6h6v6"
  })),
  arrowR: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  })),
  check: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }))
};
Object.assign(window, {
  Reveal,
  CountUp,
  Icons,
  watchInView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/foundations.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/layout.jsx
try { (() => {
/* global React, Reveal, CountUp, Icons, WAPhone */
const {
  useState: uS,
  useEffect: uE,
  useRef: uR
} = React;
const LOGO = typeof window !== "undefined" && window.__resources && window.__resources.logo || "assets/denariuss-logo.png";

/* ============================ NAV ============================ */
function Nav() {
  const [scrolled, setScrolled] = uS(false);
  uE(() => {
    const f = () => setScrolled(window.scrollY > 24);
    f();
    window.addEventListener("scroll", f, {
      passive: true
    });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav" + (scrolled ? " scrolled" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap nav-inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    "aria-label": "Denariuss"
  }, /*#__PURE__*/React.createElement("img", {
    className: "nav-logo",
    src: LOGO,
    alt: "Denariuss"
  })), /*#__PURE__*/React.createElement("div", {
    className: "nav-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#whatsapp"
  }, "WhatsApp"), /*#__PURE__*/React.createElement("a", {
    href: "#como"
  }, "Como funciona"), /*#__PURE__*/React.createElement("a", {
    href: "#recursos"
  }, "Recursos"), /*#__PURE__*/React.createElement("a", {
    href: "#precos"
  }, "Pre\xE7os")), /*#__PURE__*/React.createElement("div", {
    className: "nav-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn btn-ghost btn-sm"
  }, "Acessar"), /*#__PURE__*/React.createElement("a", {
    href: "#precos",
    className: "btn btn-primary btn-sm"
  }, "Criar conta gr\xE1tis"))));
}

/* ===================== DASHBOARD MOCKUP ===================== */
function Dashboard() {
  const months = [{
    l: "Jan",
    i: 52,
    o: 40
  }, {
    l: "Fev",
    i: 64,
    o: 46
  }, {
    l: "Mar",
    i: 58,
    o: 52
  }, {
    l: "Abr",
    i: 70,
    o: 44
  }, {
    l: "Mai",
    i: 66,
    o: 58
  }, {
    l: "Jun",
    i: 84,
    o: 51
  }];
  const nav = [["glance", "Dashboard", true], ["repeat", "Transações"], ["budget", "Orçamento"], ["pie", "Relatórios"], ["card", "Cartões"]];
  return /*#__PURE__*/React.createElement("div", {
    className: "browser"
  }, /*#__PURE__*/React.createElement("div", {
    className: "browser-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lights"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      background: "#ff5f57"
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      background: "#febc2e"
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      background: "#28c840"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "url"
  }, "app.denariuss.com/dashboard")), /*#__PURE__*/React.createElement("div", {
    className: "dash"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "dash-side"
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO,
    alt: "",
    style: {
      height: 18,
      marginBottom: 14,
      opacity: .95
    }
  }), nav.map(([ic, label, on], i) => {
    const Ic = Icons[ic];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "di" + (on ? " on" : "")
    }, /*#__PURE__*/React.createElement(Ic, {
      s: 17
    }), " ", label);
  })), /*#__PURE__*/React.createElement("div", {
    className: "dash-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kpis"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kpi"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lab"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#3CE6A6"
    }
  }, "\u2191"), " Entradas"), /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, "R$ ", /*#__PURE__*/React.createElement(CountUp, {
    to: 8400
  })), /*#__PURE__*/React.createElement("div", {
    className: "delta up"
  }, "\u25B2 +12% vs m\xEAs ant.")), /*#__PURE__*/React.createElement("div", {
    className: "kpi"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lab"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#ff8a8a"
    }
  }, "\u2193"), " Sa\xEDdas"), /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, "R$ ", /*#__PURE__*/React.createElement(CountUp, {
    to: 5130
  })), /*#__PURE__*/React.createElement("div", {
    className: "delta down"
  }, "\u25B2 +4% vs m\xEAs ant.")), /*#__PURE__*/React.createElement("div", {
    className: "kpi"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lab"
  }, "\u25CE Saldo livre"), /*#__PURE__*/React.createElement("div", {
    className: "val grad-green"
  }, "R$ ", /*#__PURE__*/React.createElement(CountUp, {
    to: 3270
  })), /*#__PURE__*/React.createElement("div", {
    className: "delta up"
  }, "Meta R$ 3.000 \u2713"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph"
  }, /*#__PURE__*/React.createElement("span", null, "Entrada vs Sa\xEDda"), /*#__PURE__*/React.createElement("span", {
    className: "muted",
    style: {
      fontSize: 11,
      fontWeight: 600
    }
  }, "6 meses")), /*#__PURE__*/React.createElement("div", {
    className: "bars"
  }, months.map((m, i) => /*#__PURE__*/React.createElement("div", {
    className: "barcol",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "pair"
  }, /*#__PURE__*/React.createElement("span", {
    className: "b in",
    style: {
      height: m.i + "%"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "b out",
    style: {
      height: m.o + "%"
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, m.l))))), /*#__PURE__*/React.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph"
  }, /*#__PURE__*/React.createElement("span", null, "Por categoria")), /*#__PURE__*/React.createElement("div", {
    className: "donut-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "donut"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ctr"
  }, /*#__PURE__*/React.createElement("small", null, "Total"), /*#__PURE__*/React.createElement("b", null, "R$ 5,1k"))), /*#__PURE__*/React.createElement("div", {
    className: "legend"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw",
    style: {
      background: "#2ECF95"
    }
  }), "Moradia 36%"), /*#__PURE__*/React.createElement("div", {
    className: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw",
    style: {
      background: "#2a9c79"
    }
  }), "Alimenta\xE7\xE3o 22%"), /*#__PURE__*/React.createElement("div", {
    className: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw",
    style: {
      background: "#1f6e58"
    }
  }), "Transporte 15%"), /*#__PURE__*/React.createElement("div", {
    className: "lg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw",
    style: {
      background: "#2c3b4f"
    }
  }), "Outros 27%"))))))));
}

/* ============================ HERO ============================ */
function Hero({
  variant,
  speed = 1
}) {
  const Heading = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Reveal, {
    as: "span",
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Planejamento financeiro de verdade"), /*#__PURE__*/React.createElement(Reveal, {
    as: "h1",
    className: "h-display",
    delay: 1,
    style: {
      marginTop: 24
    }
  }, "Saiba para onde", /*#__PURE__*/React.createElement("br", null), "seu dinheiro vai", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "grad-green"
  }, "com a Denariuss")), /*#__PURE__*/React.createElement(Reveal, {
    as: "p",
    className: "lead",
    delay: 2,
    style: {
      marginTop: 22,
      maxWidth: 560
    }
  }, "Pare de se perder em planilhas quebradas. Voc\xEA monta o or\xE7amento, prev\xEA o fluxo dos pr\xF3ximos meses e registra gastos ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ink)"
    }
  }, "mandando uma mensagem no WhatsApp"), " \u2014 tudo num s\xF3 lugar."), /*#__PURE__*/React.createElement(Reveal, {
    className: "hero-actions",
    delay: 3
  }, /*#__PURE__*/React.createElement("a", {
    href: "#precos",
    className: "btn btn-primary btn-lg"
  }, "Criar conta gr\xE1tis ", /*#__PURE__*/React.createElement(Icons.arrowR, {
    s: 18
  })), /*#__PURE__*/React.createElement("a", {
    href: "#whatsapp",
    className: "btn btn-ghost btn-lg"
  }, /*#__PURE__*/React.createElement(Icons.chat, {
    s: 18
  }), " Ver o WhatsApp")), /*#__PURE__*/React.createElement(Reveal, {
    className: "trust",
    delay: 4
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icons.check, {
    s: 16,
    sw: 2.4
  }), " Plano gr\xE1tis para come\xE7ar"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icons.check, {
    s: 16,
    sw: 2.4
  }), " Sem cart\xE3o de cr\xE9dito")));
  if (variant === "whatsapp") {
    return /*#__PURE__*/React.createElement("header", {
      className: "hero wrap",
      id: "top"
    }, /*#__PURE__*/React.createElement("div", {
      className: "hero-split"
    }, /*#__PURE__*/React.createElement("div", null, Heading), /*#__PURE__*/React.createElement(Reveal, {
      delay: 2,
      style: {
        display: "flex",
        justifyContent: "center",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "float-tag",
      style: {
        top: 8,
        left: -6,
        animationDelay: "0s"
      }
    }, "\uD83D\uDFE2 IA respondeu em 2s"), /*#__PURE__*/React.createElement("div", {
      className: "float-tag",
      style: {
        bottom: 34,
        right: -10,
        animationDelay: "1.4s"
      }
    }, "\u2705 Gasto lan\xE7ado"), /*#__PURE__*/React.createElement(WAPhone, {
      speed: speed
    }))));
  }
  if (variant === "split") {
    return /*#__PURE__*/React.createElement("header", {
      className: "hero wrap",
      id: "top"
    }, /*#__PURE__*/React.createElement("div", {
      className: "hero-split"
    }, /*#__PURE__*/React.createElement("div", null, Heading), /*#__PURE__*/React.createElement(Reveal, {
      delay: 2,
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(Dashboard, null), /*#__PURE__*/React.createElement("a", {
      href: "#whatsapp",
      className: "float-tag",
      style: {
        bottom: -18,
        left: 18,
        textDecoration: "none",
        color: "var(--ink)"
      }
    }, "\uD83D\uDCF2 Registre por WhatsApp \u2192"))));
  }

  // default: centered + dashboard below
  return /*#__PURE__*/React.createElement("header", {
    className: "hero wrap center",
    id: "top",
    style: {
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      margin: "0 auto"
    }
  }, Heading), /*#__PURE__*/React.createElement(Reveal, {
    delay: 2,
    style: {
      marginTop: 54,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Dashboard, null), /*#__PURE__*/React.createElement("a", {
    href: "#whatsapp",
    className: "float-tag",
    style: {
      top: -16,
      right: 24,
      textDecoration: "none",
      color: "var(--ink)"
    }
  }, "\uD83D\uDCF2 Registre por WhatsApp \u2192"), /*#__PURE__*/React.createElement("div", {
    className: "float-tag",
    style: {
      bottom: -18,
      left: 24
    }
  }, "\uD83D\uDFE2 IA lan\xE7ou seu gasto")));
}

/* ========== social proof strip ========== */
function ProofStrip() {
  const stats = [{
    to: 12000,
    suffix: "+",
    cap: "gastos lançados por mês"
  }, {
    to: 2,
    suffix: "s",
    cap: "tempo médio de resposta da IA",
    dec: 0
  }, {
    to: 3,
    suffix: " formatos",
    cap: "áudio, foto ou texto"
  }, {
    to: 100,
    suffix: "%",
    cap: "dos dados criptografados"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "wrap",
    style: {
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "card statline",
    style: {
      padding: "30px 34px",
      justifyContent: "space-between"
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "stat",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "num grad-green"
  }, /*#__PURE__*/React.createElement(CountUp, {
    to: s.to,
    suffix: s.suffix,
    decimals: s.dec || 0
  })), /*#__PURE__*/React.createElement("div", {
    className: "cap"
  }, s.cap)))));
}

/* ===================== WHATSAPP SECTION ===================== */
function WhatsAppSection({
  variant,
  speed = 1
}) {
  const [fmt, setFmt] = uS("texto");
  const formats = [{
    id: "texto",
    ic: "type",
    h: "Mande um texto",
    p: "Escreva \u201calmoço 35\u201d e pronto. A IA entende valor, descrição e categoria sozinha."
  }, {
    id: "audio",
    ic: "mic",
    h: "Grave um áudio",
    p: "Sem tempo de digitar? Fale naturalmente — a Denariuss transcreve e lança a despesa."
  }, {
    id: "foto",
    ic: "cam",
    h: "Tire foto do comprovante",
    p: "Fotografe a nota ou o cupom fiscal. Ela lê o valor, o local e a data automaticamente."
  }];
  const fIco = {
    type: window.DnIco.IcType,
    mic: window.DnIco.IcMic,
    cam: window.DnIco.IcCam
  };
  const Cards = /*#__PURE__*/React.createElement("div", {
    className: "fmt-list"
  }, formats.map(f => {
    const Ic = fIco[f.ic];
    const on = fmt === f.id;
    return /*#__PURE__*/React.createElement("div", {
      className: "fmt" + (on ? " active" : ""),
      key: f.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "fmt-ic"
    }, /*#__PURE__*/React.createElement(Ic, {
      s: 24
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, f.h), /*#__PURE__*/React.createElement("p", null, f.p)));
  }));
  const Head = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Reveal, {
    as: "span",
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement(Icons.chat, {
    s: 14
  }), " WhatsApp & Telegram"), /*#__PURE__*/React.createElement(Reveal, {
    as: "h2",
    className: "h-section",
    delay: 1,
    style: {
      marginTop: 22
    }
  }, "Registrar um gasto \xE9 t\xE3o simples", /*#__PURE__*/React.createElement("br", null), "quanto ", /*#__PURE__*/React.createElement("span", {
    className: "grad-green"
  }, "mandar uma mensagem")), /*#__PURE__*/React.createElement(Reveal, {
    as: "p",
    className: "lead",
    delay: 2,
    style: {
      marginTop: 18,
      maxWidth: 540
    }
  }, "Envie ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ink)"
    }
  }, "\xE1udio"), ", ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ink)"
    }
  }, "foto do comprovante"), " ou s\xF3 um ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ink)"
    }
  }, "texto"), ". O assistente com IA lan\xE7a a despesa, te responde na hora e ainda manda lembretes e o resumo do m\xEAs \u2014 sem voc\xEA abrir o app."));
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    id: "whatsapp",
    style: {
      background: "linear-gradient(180deg, transparent, rgba(46,207,149,0.04) 35%, transparent)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, variant === "stacked" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "section-head center",
    style: {
      marginBottom: 48
    }
  }, Head), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
      gap: 40,
      alignItems: "center"
    },
    className: "wa-3col"
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 1
  }, Cards.props.children.slice(0, 2) && Cards), /*#__PURE__*/React.createElement(Reveal, {
    delay: 2,
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(WAPhone, {
    speed: speed,
    onFormat: setFmt
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 3,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Bene, {
    ic: "spark",
    h: "IA confirma na hora",
    p: "Cada lan\xE7amento volta com valor, categoria e data \u2014 voc\xEA confere e segue."
  }), /*#__PURE__*/React.createElement(Bene, {
    ic: "bell",
    h: "Lembretes na conversa",
    p: "Contas a vencer e o resumo do m\xEAs chegam direto no seu WhatsApp."
  }), /*#__PURE__*/React.createElement(Bene, {
    ic: "check",
    h: "Zero fric\xE7\xE3o",
    p: "Nada de abrir app, achar a tela e digitar. S\xF3 mandar mensagem."
  })))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.05fr",
      gap: 54,
      alignItems: "center"
    },
    className: "wa-2col"
  }, /*#__PURE__*/React.createElement("div", null, Head, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30
    }
  }, Cards)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 1,
    style: {
      display: "flex",
      justifyContent: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "float-tag",
    style: {
      top: 18,
      right: 0
    }
  }, "\uD83C\uDF99 \xC1udio transcrito"), /*#__PURE__*/React.createElement("div", {
    className: "float-tag",
    style: {
      bottom: 60,
      left: -8,
      animationDelay: "1.6s"
    }
  }, "\uD83D\uDCC4 Nota lida pela IA"), /*#__PURE__*/React.createElement(WAPhone, {
    speed: speed,
    onFormat: setFmt
  })))));
}
function Bene({
  ic,
  h,
  p
}) {
  const map = {
    spark: window.DnIco.IcSpark,
    bell: Icons.bell,
    check: Icons.check
  };
  const Ic = map[ic];
  return /*#__PURE__*/React.createElement("div", {
    className: "fmt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fmt-ic"
  }, /*#__PURE__*/React.createElement(Ic, {
    s: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, h), /*#__PURE__*/React.createElement("p", null, p)));
}
window.Nav = Nav;
window.Hero = Hero;
window.WhatsAppSection = WhatsAppSection;
window.Dashboard = Dashboard;
window.ProofStrip = ProofStrip;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/layout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/phone.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
const {
  useState,
  useEffect,
  useRef,
  useCallback
} = React;

/* ---------- tiny icon set ---------- */
function Ico({
  d,
  s = 18,
  fill = "none",
  stroke = "currentColor",
  sw = 1.8,
  children
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: stroke,
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, d ? /*#__PURE__*/React.createElement("path", {
    d: d
  }) : children);
}
const IcCheck = p => /*#__PURE__*/React.createElement(Ico, _extends({}, p, {
  d: "M20 6L9 17l-5-5"
}));
const IcMic = p => /*#__PURE__*/React.createElement(Ico, _extends({}, p, {
  fill: "currentColor",
  stroke: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 11a7 7 0 0 1-14 0",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 18v3",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8"
}));
const IcPlay = p => /*#__PURE__*/React.createElement(Ico, _extends({}, p, {
  fill: "currentColor",
  stroke: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 5v14l11-7z"
}));
const IcCam = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("path", {
  d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "13",
  r: "4"
}));
const IcType = p => /*#__PURE__*/React.createElement(Ico, p, /*#__PURE__*/React.createElement("path", {
  d: "M4 7V5h16v2M9 19h6M12 5v14"
}));
const IcSpark = p => /*#__PURE__*/React.createElement(Ico, _extends({}, p, {
  fill: "currentColor",
  stroke: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 14l.8 2.6L22 17l-2.2.4L19 20l-.8-2.6L16 17l2.2-.4z"
}));
const WAVE = [9, 15, 7, 18, 11, 20, 8, 14, 6, 17, 10, 19, 7, 13, 9, 16, 8, 12, 15, 6, 18, 10, 7, 14, 9];

/* ===========================================================
   The animated WhatsApp phone
   =========================================================== */
function WAPhone({
  speed = 1,
  onFormat
}) {
  const [msgs, setMsgs] = useState([]);
  const [typing, setTyping] = useState(false);
  const bodyRef = useRef(null);
  const timers = useRef([]);
  const reduce = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // conversation script — each step pushes a message (or toggles typing)
  const script = [{
    wait: 700,
    fmt: "texto",
    push: {
      who: "me",
      kind: "text",
      text: "almoço 35",
      time: "09:41"
    }
  }, {
    wait: 600,
    typing: true
  }, {
    wait: 1100,
    typing: false,
    push: {
      who: "bot",
      kind: "card",
      title: "Despesa registrada",
      rows: [["Descrição", "Almoço"], ["Valor", "R$ 35,00"]],
      cat: "🍽 Alimentação",
      time: "09:41"
    }
  }, {
    wait: 1300,
    fmt: "audio",
    push: {
      who: "me",
      kind: "audio",
      dur: "0:06",
      time: "12:08"
    }
  }, {
    wait: 700,
    typing: true
  }, {
    wait: 1300,
    typing: false,
    push: {
      who: "bot",
      kind: "text",
      text: "🎙 Transcrevi: \u201cpaguei 120 no Uber esse mês\u201d",
      time: "12:08"
    }
  }, {
    wait: 500,
    typing: true
  }, {
    wait: 900,
    typing: false,
    push: {
      who: "bot",
      kind: "card",
      title: "Registrado por áudio",
      rows: [["Descrição", "Uber"], ["Valor", "R$ 120,00"]],
      cat: "🚗 Transporte",
      time: "12:08"
    }
  }, {
    wait: 1300,
    fmt: "foto",
    push: {
      who: "me",
      kind: "image",
      time: "19:23"
    }
  }, {
    wait: 800,
    typing: true
  }, {
    wait: 1500,
    typing: false,
    push: {
      who: "bot",
      kind: "card",
      title: "Comprovante lido",
      rows: [["Local", "Supermercado"], ["Data", "12/jun"]],
      amt: "R$ 213,40",
      cat: "🛒 Mercado",
      time: "19:23"
    }
  }, {
    wait: 1400,
    push: {
      who: "bot",
      kind: "summary",
      time: "19:24"
    }
  }, {
    wait: 4200,
    reset: true
  }];
  const run = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setMsgs([]);
    setTyping(false);
    let t = 0;
    const base = reduce ? 0.55 : 1;
    script.forEach(s => {
      t += (s.wait || 0) * base / speed;
      const id = setTimeout(() => {
        if (s.reset) {
          run();
          return;
        }
        if ("typing" in s) setTyping(s.typing);
        if (s.fmt && onFormat) onFormat(s.fmt);
        if (s.push) setMsgs(m => [...m, {
          ...s.push,
          id: Math.random()
        }]);
      }, t);
      timers.current.push(id);
    });
  }, [speed, reduce, onFormat]);
  useEffect(() => {
    run();
    return () => timers.current.forEach(clearTimeout);
  }, [run]);

  // keep chat pinned to bottom (no scrollIntoView)
  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight + 200;
  }, [msgs, typing]);
  return /*#__PURE__*/React.createElement("div", {
    className: "phone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "phone-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "phone-notch"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wa-status"
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "11",
    viewBox: "0 0 18 12",
    fill: "#cfe9df"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7",
    width: "3",
    height: "5",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "4",
    width: "3",
    height: "8",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "10",
    y: "1",
    width: "3",
    height: "11",
    rx: "1",
    opacity: ".5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "15",
    y: "1",
    width: "3",
    height: "11",
    rx: "1",
    opacity: ".3"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "12",
    viewBox: "0 0 20 14",
    fill: "none",
    stroke: "#cfe9df",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 5a13 13 0 0 1 18 0M4 8a9 9 0 0 1 12 0M7 11a4 4 0 0 1 6 0"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "12",
    viewBox: "0 0 26 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "1",
    width: "21",
    height: "11",
    rx: "3",
    fill: "none",
    stroke: "#cfe9df",
    strokeWidth: "1.3"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "15",
    height: "7",
    rx: "1.5",
    fill: "#5fbf9b"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "23",
    y: "4",
    width: "2",
    height: "5",
    rx: "1",
    fill: "#cfe9df"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "wa-header"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "16",
    viewBox: "0 0 9 16",
    fill: "none",
    stroke: "#8fa6b0",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 1L1 8l7 7"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wa-avatar"
  }, "D"), /*#__PURE__*/React.createElement("div", {
    className: "wa-title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wa-name"
  }, "Denariuss ", /*#__PURE__*/React.createElement("span", {
    className: "wa-verify"
  }, /*#__PURE__*/React.createElement(IcCheck, {
    s: 13,
    sw: 3
  }))), /*#__PURE__*/React.createElement("span", {
    className: "wa-presence"
  }, "assistente \u2022 online")), /*#__PURE__*/React.createElement("span", {
    className: "wa-head-ic"
  }, /*#__PURE__*/React.createElement(IcCam, {
    s: 20
  }), /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "wa-body",
    ref: bodyRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "wa-daybadge"
  }, "\uD83D\uDD12 HOJE"), msgs.map(m => /*#__PURE__*/React.createElement(Message, {
    key: m.id,
    m: m
  })), typing && /*#__PURE__*/React.createElement("div", {
    className: "wa-row bot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wa-typing"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)))), /*#__PURE__*/React.createElement("div", {
    className: "wa-input"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement(IcSpark, {
    s: 15
  }), " ", /*#__PURE__*/React.createElement("span", null, "Mensagem para a Denariuss\u2026")), /*#__PURE__*/React.createElement("div", {
    className: "mic"
  }, /*#__PURE__*/React.createElement(IcMic, {
    s: 20
  })))));
}

/* ---------- a single message ---------- */
function Message({
  m
}) {
  const Meta = () => /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, m.time, m.who === "me" && /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }, /*#__PURE__*/React.createElement(IcCheck, {
    s: 13,
    sw: 3
  })));
  if (m.kind === "text") return /*#__PURE__*/React.createElement("div", {
    className: "wa-row " + m.who
  }, /*#__PURE__*/React.createElement("div", {
    className: "bubble " + m.who
  }, /*#__PURE__*/React.createElement("span", {
    className: "t"
  }, m.text), /*#__PURE__*/React.createElement(Meta, null)));
  if (m.kind === "audio") return /*#__PURE__*/React.createElement("div", {
    className: "wa-row " + m.who
  }, /*#__PURE__*/React.createElement("div", {
    className: "bubble " + m.who
  }, /*#__PURE__*/React.createElement("div", {
    className: "wa-audio"
  }, /*#__PURE__*/React.createElement("span", {
    className: "play"
  }, /*#__PURE__*/React.createElement(IcPlay, {
    s: 13
  })), /*#__PURE__*/React.createElement("span", {
    className: "wa-wave"
  }, WAVE.map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      height: h
    }
  }))), /*#__PURE__*/React.createElement("span", {
    className: "dur"
  }, m.dur)), /*#__PURE__*/React.createElement(Meta, null)));
  if (m.kind === "image") return /*#__PURE__*/React.createElement("div", {
    className: "wa-row " + m.who
  }, /*#__PURE__*/React.createElement("div", {
    className: "bubble " + m.who,
    style: {
      padding: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wa-receipt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "receipt-img"
  }, /*#__PURE__*/React.createElement("div", {
    className: "receipt-paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rp-h"
  }, "SUPERMERCADO"), /*#__PURE__*/React.createElement("div", {
    className: "rp-l"
  }, /*#__PURE__*/React.createElement("span", null, "Arroz 5kg"), /*#__PURE__*/React.createElement("span", null, "28,90")), /*#__PURE__*/React.createElement("div", {
    className: "rp-l"
  }, /*#__PURE__*/React.createElement("span", null, "Caf\xE9 500g"), /*#__PURE__*/React.createElement("span", null, "19,50")), /*#__PURE__*/React.createElement("div", {
    className: "rp-l"
  }, /*#__PURE__*/React.createElement("span", null, "Frutas"), /*#__PURE__*/React.createElement("span", null, "34,00")), /*#__PURE__*/React.createElement("div", {
    className: "rp-l"
  }, /*#__PURE__*/React.createElement("span", null, "Limpeza"), /*#__PURE__*/React.createElement("span", null, "45,10")), /*#__PURE__*/React.createElement("div", {
    className: "rp-l"
  }, /*#__PURE__*/React.createElement("span", null, "Outros"), /*#__PURE__*/React.createElement("span", null, "85,90")), /*#__PURE__*/React.createElement("div", {
    className: "rp-tot"
  }, /*#__PURE__*/React.createElement("span", null, "TOTAL"), /*#__PURE__*/React.createElement("span", null, "213,40"))), /*#__PURE__*/React.createElement("span", {
    className: "receipt-tag"
  }, "\uD83D\uDCC4 comprovante.jpg"))), /*#__PURE__*/React.createElement(Meta, null)));
  if (m.kind === "card") return /*#__PURE__*/React.createElement("div", {
    className: "wa-row " + m.who
  }, /*#__PURE__*/React.createElement("div", {
    className: "bubble " + m.who + " wa-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cc-top"
  }, /*#__PURE__*/React.createElement(IcCheck, {
    s: 15,
    sw: 3
  }), " ", m.title), m.amt && /*#__PURE__*/React.createElement("div", {
    className: "cc-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Valor"), /*#__PURE__*/React.createElement("span", {
    className: "cc-amt"
  }, m.amt)), m.rows.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    className: "cc-row",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, k), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, v))), /*#__PURE__*/React.createElement("div", {
    className: "cc-div"
  }), /*#__PURE__*/React.createElement("span", {
    className: "wa-cat"
  }, m.cat), /*#__PURE__*/React.createElement(Meta, null)));
  if (m.kind === "summary") return /*#__PURE__*/React.createElement("div", {
    className: "wa-row bot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bubble bot wa-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cc-top"
  }, /*#__PURE__*/React.createElement(IcSpark, {
    s: 15
  }), " Resumo do seu m\xEAs"), /*#__PURE__*/React.createElement("div", {
    className: "cc-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Entradas"), /*#__PURE__*/React.createElement("span", {
    className: "v",
    style: {
      color: "#3CE6A6"
    }
  }, "R$ 8.400")), /*#__PURE__*/React.createElement("div", {
    className: "cc-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Sa\xEDdas"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, "R$ 5.130")), /*#__PURE__*/React.createElement("div", {
    className: "cc-div"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cc-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Saldo livre"), /*#__PURE__*/React.createElement("span", {
    className: "cc-amt"
  }, "R$ 3.270 \uD83D\uDFE2")), /*#__PURE__*/React.createElement(Meta, null)));
  return null;
}
window.WAPhone = WAPhone;
window.DnIco = {
  IcCheck,
  IcMic,
  IcPlay,
  IcCam,
  IcType,
  IcSpark
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/phone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/sections.jsx
try { (() => {
/* global React, Reveal, CountUp, Icons */
const {
  useState: pS
} = React;

/* ===================== COMO FUNCIONA ===================== */
function Steps() {
  const items = [{
    n: "1",
    h: "Crie sua conta",
    p: "Em segundos, no plano grátis. Seus dados ficam só com você."
  }, {
    n: "2",
    h: "Mande uma mensagem",
    p: "Lance gastos por texto, áudio ou foto no WhatsApp — ou pelo app, como preferir."
  }, {
    n: "3",
    h: "Veja para onde vai",
    p: "Acompanhe o resumo do mês e descubra com clareza onde dá pra economizar."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    id: "como"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head center",
    style: {
      marginBottom: 54
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    as: "span",
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Como funciona"), /*#__PURE__*/React.createElement(Reveal, {
    as: "h2",
    className: "h-section",
    delay: 1,
    style: {
      marginTop: 20
    }
  }, "Do caos \xE0 clareza em 3 passos"), /*#__PURE__*/React.createElement(Reveal, {
    as: "p",
    className: "lead muted",
    delay: 2,
    style: {
      marginTop: 14
    }
  }, "Sem f\xF3rmula complicada. Voc\xEA come\xE7a hoje e j\xE1 v\xEA resultado no fim do m\xEAs.")), /*#__PURE__*/React.createElement("div", {
    className: "steps"
  }, items.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    className: "card card-hover step",
    delay: i + 1,
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "step-n"
  }, s.n), /*#__PURE__*/React.createElement("h3", null, s.h), /*#__PURE__*/React.createElement("p", null, s.p))))));
}

/* ======================== RECURSOS ======================== */
function Features() {
  const feats = [{
    ic: "glance",
    h: "Visão geral do mês",
    p: "Entradas, saídas e saldo num único painel, com leitura clara do seu dinheiro."
  }, {
    ic: "repeat",
    h: "Recorrentes e parcelados",
    p: "Lance uma vez — o Denariuss repete e projeta tudo automaticamente nos próximos meses."
  }, {
    ic: "pie",
    h: "Gastos por categoria",
    p: "Seus lançamentos organizados pra você enxergar onde dá pra economizar."
  }, {
    ic: "flow",
    h: "Fluxo futuro",
    p: "Uma prévia do que entra e sai nos próximos meses, sem surpresas no fim."
  }, {
    ic: "bell",
    h: "Lembretes automáticos",
    p: "Avisos das suas contas e do seu mês para agir cedo e não deixar nada vencer."
  }, {
    ic: "card",
    h: "Controle de cartões",
    p: "Faturas, limites e vencimentos numa visão fácil de acompanhar."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    id: "recursos"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head",
    style: {
      marginBottom: 48,
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    as: "span",
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Recursos"), /*#__PURE__*/React.createElement(Reveal, {
    as: "h2",
    className: "h-section",
    delay: 1,
    style: {
      marginTop: 20
    }
  }, "N\xE3o \xE9 s\xF3 registrar.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "grad-green"
  }, "\xC9 planejar o que vem.")), /*#__PURE__*/React.createElement(Reveal, {
    as: "p",
    className: "lead muted",
    delay: 2,
    style: {
      marginTop: 14
    }
  }, "A maioria dos apps s\xF3 mostra o que voc\xEA j\xE1 gastou. O Denariuss te ajuda a planejar os pr\xF3ximos meses \u2014 or\xE7amento, previs\xE3o e organiza\xE7\xE3o num s\xF3 lugar.")), /*#__PURE__*/React.createElement("div", {
    className: "feat-grid"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "card card-hover feat wide",
    delay: 1,
    style: {
      background: "linear-gradient(135deg, rgba(46,207,149,0.1), var(--card))",
      borderColor: "rgba(46,207,149,0.3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "feat-ic"
  }, /*#__PURE__*/React.createElement(Icons.budget, {
    s: 22
  })), /*#__PURE__*/React.createElement("h3", null, "Or\xE7amento completo"), /*#__PURE__*/React.createElement("p", null, "Defina quanto pretende gastar por categoria, simule cen\xE1rios e veja se vai fechar o m\xEAs no azul \u2014 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ink)"
    }
  }, "antes de ele acabar"), ". \xC9 o que os apps que s\xF3 monitoram gastos n\xE3o fazem.")), feats.slice(0, 1).map((f, i) => /*#__PURE__*/React.createElement(FeatCard, {
    key: "a" + i,
    f: f,
    d: 2
  })), feats.slice(1).map((f, i) => /*#__PURE__*/React.createElement(FeatCard, {
    key: "b" + i,
    f: f,
    d: i % 3 + 1
  })))));
}
function FeatCard({
  f,
  d
}) {
  const Ic = Icons[f.ic];
  return /*#__PURE__*/React.createElement(Reveal, {
    className: "card card-hover feat",
    delay: d
  }, /*#__PURE__*/React.createElement("div", {
    className: "feat-ic"
  }, /*#__PURE__*/React.createElement(Ic, {
    s: 22
  })), /*#__PURE__*/React.createElement("h3", null, f.h), /*#__PURE__*/React.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: f.p
    }
  }));
}

/* ========================= PREÇOS ========================= */
function Pricing() {
  const [annual, setAnnual] = pS(true);
  const plans = [{
    name: "Free",
    tag: "Grátis para sempre",
    mo: "0,00",
    yr: "0,00",
    econ: "",
    bill: "Sem cartão de crédito",
    cta: "Começar grátis",
    pop: false,
    feats: ["Dashboard básico", "Movimentação simples (gastos e recebimentos)", "Categorias essenciais"]
  }, {
    name: "PRO",
    tag: "Mais completo",
    mo: "29,90",
    yr: "19,90",
    econ: "Economize R$ 120,00 por ano",
    bill: "Anual · R$ 238,80 cobrado uma vez",
    cta: "Escolher PRO",
    pop: true,
    feats: ["Dashboard com análises financeiras", "Importação de faturas e extratos", "Orçamento completo (simulação e previsão)", "Assistente com IA no WhatsApp e Telegram", "Envio por áudio, imagem ou texto"]
  }, {
    name: "Black Premium",
    tag: "Para PF + PJ",
    mo: "39,90",
    yr: "34,90",
    econ: "Economize R$ 60,00 por ano",
    bill: "Anual · R$ 418,80 cobrado uma vez",
    cta: "Assinar agora",
    pop: false,
    feats: ["Tudo do PRO", "2 perfis de uso (separe PF e PJ)", "Perfis adicionais sob demanda", "Open Finance (em breve)"]
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    id: "precos"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head center",
    style: {
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    as: "span",
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Pre\xE7os"), /*#__PURE__*/React.createElement(Reveal, {
    as: "h2",
    className: "h-section",
    delay: 1,
    style: {
      marginTop: 20
    }
  }, "Comece de gra\xE7a.", /*#__PURE__*/React.createElement("br", null), "Evolua no seu ritmo."), /*#__PURE__*/React.createElement(Reveal, {
    as: "p",
    className: "lead muted",
    delay: 2,
    style: {
      marginTop: 14
    }
  }, "Mais completo que apps que s\xF3 monitoram gastos \u2014 a partir de R$ 19,90/m\xEAs no plano anual.")), /*#__PURE__*/React.createElement(Reveal, {
    className: "center",
    delay: 1,
    style: {
      marginBottom: 42,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "toggle"
  }, /*#__PURE__*/React.createElement("button", {
    className: annual ? "on" : "",
    onClick: () => setAnnual(true)
  }, "Anual"), /*#__PURE__*/React.createElement("button", {
    className: !annual ? "on" : "",
    onClick: () => setAnnual(false)
  }, "Mensal")), annual && /*#__PURE__*/React.createElement("span", {
    className: "save-pill"
  }, "\uD83D\uDFE2 2 meses gr\xE1tis no anual")), /*#__PURE__*/React.createElement("div", {
    className: "plans"
  }, plans.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    className: "card plan" + (p.pop ? " pop" : ""),
    delay: i + 1,
    key: i
  }, p.pop && /*#__PURE__*/React.createElement("div", {
    className: "plan-badge"
  }, "Mais popular"), /*#__PURE__*/React.createElement("div", {
    className: "plan-name"
  }, p.name), /*#__PURE__*/React.createElement("div", {
    className: "plan-tag"
  }, p.tag), /*#__PURE__*/React.createElement("div", {
    className: "plan-price"
  }, "R$ ", annual ? p.yr : p.mo, /*#__PURE__*/React.createElement("small", null, " /m\xEAs")), /*#__PURE__*/React.createElement("div", {
    className: "plan-econ"
  }, annual ? p.econ : ""), /*#__PURE__*/React.createElement("div", {
    className: "plan-bill"
  }, annual ? p.bill : p.name === "Free" ? "Sempre grátis" : "Cobrança mensal, cancele quando quiser"), /*#__PURE__*/React.createElement("ul", null, p.feats.map((f, j) => /*#__PURE__*/React.createElement("li", {
    key: j
  }, /*#__PURE__*/React.createElement(Icons.check, {
    s: 17,
    sw: 2.6
  }), f))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn " + (p.pop ? "btn-primary" : "btn-ghost")
  }, p.cta))))));
}

/* ========================= BÔNUS ========================= */
function Bonus() {
  const mods = [["Módulo 1", "Organize seu fluxo de caixa em 30 minutos"], ["Módulo 2", "Corte gastos sem abrir mão do que importa"], ["Módulo 3", "Tesouro, CDB e Fundos — o que escolher primeiro"]];
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "card bonus",
    style: {
      background: "linear-gradient(135deg, rgba(46,207,149,0.08), var(--card))",
      borderColor: "rgba(46,207,149,0.25)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      marginBottom: 18
    }
  }, "\uD83C\uDF81 B\xF4nus gratuito"), /*#__PURE__*/React.createElement("h2", {
    className: "h-sub",
    style: {
      fontSize: "clamp(26px,3.4vw,38px)",
      marginTop: 16,
      lineHeight: 1.1
    }
  }, "Do caos financeiro ao", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "grad-green"
  }, "primeiro investimento")), /*#__PURE__*/React.createElement("p", {
    className: "lead muted",
    style: {
      marginTop: 14
    }
  }, "Um mini-curso para acompanhar sua jornada no Denariuss: em menos de 2 horas voc\xEA organiza as finan\xE7as do zero e d\xE1 o primeiro passo nos investimentos \u2014 mesmo que hoje sobre R$ 0 no fim do m\xEAs."), /*#__PURE__*/React.createElement("div", {
    className: "bonus-mods"
  }, mods.map(([m, t], i) => /*#__PURE__*/React.createElement("div", {
    className: "m",
    key: i
  }, /*#__PURE__*/React.createElement(Icons.arrowR, {
    s: 18,
    style: {
      color: "var(--green)",
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, m, ":"), " ", t))))), /*#__PURE__*/React.createElement("form", {
    className: "card",
    style: {
      padding: 26,
      background: "rgba(0,0,0,0.25)"
    },
    onSubmit: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("h3", {
    className: "h-sub",
    style: {
      fontSize: 21,
      marginBottom: 16
    }
  }, "Quero minha vaga gratuita"), /*#__PURE__*/React.createElement("div", {
    className: "lead-form"
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Nome completo"
  }), /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "Melhor e-mail"
  }), /*#__PURE__*/React.createElement("select", {
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Qual seu maior desafio?"), /*#__PURE__*/React.createElement("option", null, "Sair das d\xEDvidas"), /*#__PURE__*/React.createElement("option", null, "Organizar meus gastos"), /*#__PURE__*/React.createElement("option", null, "Come\xE7ar a investir"), /*#__PURE__*/React.createElement("option", null, "Aumentar minha renda")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    style: {
      width: "100%",
      marginTop: 4
    }
  }, "Garantir acesso gratuito ", /*#__PURE__*/React.createElement(Icons.arrowR, {
    s: 18
  })), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: 12.5,
      textAlign: "center"
    }
  }, "Zero spam. Cancele quando quiser."))))));
}

/* ======================= SEGURANÇA ======================= */
function Security() {
  const items = [{
    ic: "lock",
    h: "Dados criptografados",
    p: "As informações trafegam por conexão segura (HTTPS) e ficam armazenadas de forma criptografada."
  }, {
    ic: "shield",
    h: "Você no controle (LGPD)",
    p: "Seus dados são seus: exporte ou exclua sua conta quando quiser, seguindo a LGPD."
  }, {
    ic: "nobank",
    h: "Sem acesso ao seu banco",
    p: "Você registra o que quiser. Nunca pedimos a senha da sua conta bancária."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head center",
    style: {
      marginBottom: 46
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    as: "span",
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement(Icons.lock, {
    s: 14
  }), " Seguran\xE7a & Privacidade"), /*#__PURE__*/React.createElement(Reveal, {
    as: "h2",
    className: "h-section",
    delay: 1,
    style: {
      marginTop: 20
    }
  }, "Seus dados financeiros, protegidos"), /*#__PURE__*/React.createElement(Reveal, {
    as: "p",
    className: "lead muted",
    delay: 2,
    style: {
      marginTop: 14
    }
  }, "Lidar com dinheiro exige confian\xE7a. Veja, de forma concreta, como cuidamos disso.")), /*#__PURE__*/React.createElement("div", {
    className: "sec-grid"
  }, items.map((s, i) => {
    const Ic = Icons[s.ic];
    return /*#__PURE__*/React.createElement(Reveal, {
      className: "card card-hover feat",
      delay: i + 1,
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "feat-ic"
    }, /*#__PURE__*/React.createElement(Ic, {
      s: 22
    })), /*#__PURE__*/React.createElement("h3", null, s.h), /*#__PURE__*/React.createElement("p", null, s.p));
  }))));
}

/* ====================== FINAL CTA ====================== */
function FinalCTA() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section-pad",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "final"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-section",
    style: {
      maxWidth: 760,
      margin: "0 auto"
    }
  }, "Pronto para saber para onde", /*#__PURE__*/React.createElement("br", null), "seu dinheiro vai?"), /*#__PURE__*/React.createElement("p", {
    className: "lead muted",
    style: {
      maxWidth: 560,
      margin: "18px auto 0"
    }
  }, "Crie sua conta gr\xE1tis e organize o m\xEAs em poucos minutos. Seu primeiro gasto pode ser uma mensagem no WhatsApp."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      justifyContent: "center",
      marginTop: 34,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "btn btn-primary btn-lg"
  }, "Criar conta gr\xE1tis ", /*#__PURE__*/React.createElement(Icons.arrowR, {
    s: 18
  })), /*#__PURE__*/React.createElement("a", {
    href: "#whatsapp",
    className: "btn btn-ghost btn-lg"
  }, /*#__PURE__*/React.createElement(Icons.chat, {
    s: 18
  }), " Ver o WhatsApp em a\xE7\xE3o")))));
}

/* ========================= FOOTER ========================= */
function Footer() {
  const cols = [["Produto", [["WhatsApp", "#whatsapp"], ["Recursos", "#recursos"], ["Preços", "#precos"], ["Como funciona", "#como"]]], ["Empresa", [["Sobre nós", "#"], ["Blog", "#"], ["Contato", "#"]]], ["Legal", [["Privacidade", "#"], ["Termos de uso", "#"], ["Cookies", "#"], ["LGPD", "#"]]]];
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot-col"
  }, /*#__PURE__*/React.createElement("img", {
    src: typeof window !== "undefined" && window.__resources && window.__resources.logo || "assets/denariuss-logo.png",
    alt: "Denariuss",
    style: {
      height: 24,
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: 14.5,
      maxWidth: 300
    }
  }, "Controle financeiro de verdade, para quem quer organizar os gastos e decidir melhor \u2014 com clareza."), /*#__PURE__*/React.createElement("div", {
    className: "chip",
    style: {
      marginTop: 18
    }
  }, "\uD83D\uDD12 Dados criptografados")), cols.map(([h, links], i) => /*#__PURE__*/React.createElement("div", {
    className: "foot-col",
    key: i
  }, /*#__PURE__*/React.createElement("h5", null, h), links.map(([t, href], j) => /*#__PURE__*/React.createElement("a", {
    href: href,
    key: j
  }, t))))), /*#__PURE__*/React.createElement("div", {
    className: "foot-bottom"
  }, /*#__PURE__*/React.createElement("span", {
    className: "muted",
    style: {
      fontSize: 13.5
    }
  }, "\xA9 2026 Denariuss. Todos os direitos reservados. Indaiatuba, SP \u2014 Brasil."), /*#__PURE__*/React.createElement("div", {
    className: "socials"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Instagram"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "5.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.4",
    cy: "6.6",
    r: "1.1",
    fill: "currentColor",
    stroke: "none"
  }))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "LinkedIn"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.5 8h4V24h-4zM8 8h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2C19.6 8 21 10 21 14v10h-4v-9c0-2.1-.8-3.2-2.3-3.2-1.3 0-2 .9-2.35 1.8-.13.3-.16.75-.16 1.2V24H8z"
  }))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "YouTube"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M23 7.5a3 3 0 0 0-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 0 0 1 7.5 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1C5 19 12 19 12 19s7 0 8.9-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23.5 12 31 31 0 0 0 23 7.5zM9.8 15.3V8.7l5.7 3.3z"
  })))))));
}
Object.assign(window, {
  Steps,
  Features,
  Pricing,
  Bonus,
  Security,
  FinalCTA,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.KpiCard = __ds_scope.KpiCard;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

})();
