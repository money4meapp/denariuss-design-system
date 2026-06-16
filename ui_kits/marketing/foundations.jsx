/* global React */
const { useState: useS, useEffect: useE, useRef: useR } = React;

/* shared scroll ticker — IntersectionObserver is unreliable in sandboxed
   preview iframes, so we use rect checks on a throttled scroll/resize loop. */
const _watchers = new Set();
let _ticking = false;
function _runWatchers() {
  _ticking = false;
  _watchers.forEach((fn) => fn());
}
function _schedule() {
  if (_ticking) return;
  _ticking = true;
  requestAnimationFrame(_runWatchers);
}
if (typeof window !== "undefined") {
  window.addEventListener("scroll", _schedule, { passive: true });
  window.addEventListener("resize", _schedule);
}
function watchInView(getEl, onIn, ratio = 0.88) {
  const fn = () => {
    const el = getEl();
    if (!el) return;
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (r.top < vh * ratio && r.bottom > 0) { onIn(); _watchers.delete(fn); }
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
function Reveal({ children, as = "div", delay = 0, className = "", style, ...rest }) {
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
  return <Tag ref={ref} className={cls} style={style} {...rest}>{children}</Tag>;
}

/* Count-up number — animates when scrolled into view */
function CountUp({ to, prefix = "", suffix = "", dur = 1500, decimals = 0 }) {
  const ref = useR(null);
  const [val, setVal] = useS(0);
  useE(() => {
    let raf, snap;
    const stop = watchInView(() => ref.current, () => {
      const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) { setVal(to); return; }
      const t0 = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / dur);
        const e2 = 1 - Math.pow(1 - p, 3);
        setVal(to * e2);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      // fallback: if rAF is throttled, snap to final value
      snap = setTimeout(() => setVal(to), dur + 700);
    }, 0.96);
    return () => { stop(); cancelAnimationFrame(raf); clearTimeout(snap); };
  }, [to]);
  const shown = decimals
    ? val.toFixed(decimals).replace(".", ",")
    : Math.round(val).toLocaleString("pt-BR");
  return <span ref={ref}>{prefix}{shown}{suffix}</span>;
}

/* feature / ui icons (24-grid) */
function I({ children, s = 22, sw = 1.8 }) {
  return <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">{children}</svg>;
}
const Icons = {
  glance: (p) => <I {...p}><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></I>,
  repeat: (p) => <I {...p}><path d="M17 2l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></I>,
  pie: (p) => <I {...p}><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></I>,
  flow: (p) => <I {...p}><path d="M3 17l6-6 4 4 8-8"/><path d="M17 7h4v4"/></I>,
  bell: (p) => <I {...p}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></I>,
  card: (p) => <I {...p}><rect x="2" y="5" width="20" height="14" rx="2.5"/><path d="M2 10h20"/></I>,
  budget: (p) => <I {...p}><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></I>,
  chat: (p) => <I {...p}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"/></I>,
  lock: (p) => <I {...p}><rect x="3" y="11" width="18" height="11" rx="2.5"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></I>,
  shield: (p) => <I {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></I>,
  nobank: (p) => <I {...p}><path d="M3 21h18M5 21V10M19 21V10M12 3L4 8h16z"/><path d="M9 21v-6h6v6"/></I>,
  arrowR: (p) => <I {...p}><path d="M5 12h14M13 6l6 6-6 6"/></I>,
  check: (p) => <I {...p}><path d="M20 6L9 17l-5-5"/></I>,
};

Object.assign(window, { Reveal, CountUp, Icons, watchInView });
