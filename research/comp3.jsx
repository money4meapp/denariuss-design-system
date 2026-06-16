/* global React */
const { useState, useEffect, useRef, useCallback } = React;

/* ---------- tiny icon set ---------- */
function Ico({ d, s = 18, fill = "none", stroke = "currentColor", sw = 1.8, children }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={fill} stroke={stroke}
         strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      {d ? <path d={d} /> : children}
    </svg>
  );
}
const IcCheck = (p) => <Ico {...p} d="M20 6L9 17l-5-5" />;
const IcMic = (p) => <Ico {...p} fill="currentColor" stroke="none"><path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3z"/><path d="M19 11a7 7 0 0 1-14 0" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M12 18v3" fill="none" stroke="currentColor" strokeWidth="1.8"/></Ico>;
const IcPlay = (p) => <Ico {...p} fill="currentColor" stroke="none"><path d="M8 5v14l11-7z"/></Ico>;
const IcCam = (p) => <Ico {...p}><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></Ico>;
const IcType = (p) => <Ico {...p}><path d="M4 7V5h16v2M9 19h6M12 5v14"/></Ico>;
const IcSpark = (p) => <Ico {...p} fill="currentColor" stroke="none"><path d="M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6z"/><path d="M19 14l.8 2.6L22 17l-2.2.4L19 20l-.8-2.6L16 17l2.2-.4z"/></Ico>;

const WAVE = [9,15,7,18,11,20,8,14,6,17,10,19,7,13,9,16,8,12,15,6,18,10,7,14,9];

/* ===========================================================
   The animated WhatsApp phone
   =========================================================== */
function WAPhone({ speed = 1, onFormat }) {
  const [msgs, setMsgs] = useState([]);
  const [typing, setTyping] = useState(false);
  const bodyRef = useRef(null);
  const timers = useRef([]);

  const reduce = typeof window !== "undefined" &&
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // conversation script — each step pushes a message (or toggles typing)
  const script = [
    { wait: 700,  fmt: "texto", push: { who: "me", kind: "text", text: "almoço 35", time: "09:41" } },
    { wait: 600,  typing: true },
    { wait: 1100, typing: false, push: { who: "bot", kind: "card", title: "Despesa registrada",
        rows: [["Descrição","Almoço"],["Valor","R$ 35,00"]], cat: "🍽 Alimentação", time: "09:41" } },

    { wait: 1300, fmt: "audio", push: { who: "me", kind: "audio", dur: "0:06", time: "12:08" } },
    { wait: 700,  typing: true },
    { wait: 1300, typing: false, push: { who: "bot", kind: "text",
        text: "🎙 Transcrevi: \u201cpaguei 120 no Uber esse mês\u201d", time: "12:08" } },
    { wait: 500,  typing: true },
    { wait: 900,  typing: false, push: { who: "bot", kind: "card", title: "Registrado por áudio",
        rows: [["Descrição","Uber"],["Valor","R$ 120,00"]], cat: "🚗 Transporte", time: "12:08" } },

    { wait: 1300, fmt: "foto", push: { who: "me", kind: "image", time: "19:23" } },
    { wait: 800,  typing: true },
    { wait: 1500, typing: false, push: { who: "bot", kind: "card", title: "Comprovante lido",
        rows: [["Local","Supermercado"],["Data","12/jun"]], amt: "R$ 213,40", cat: "🛒 Mercado", time: "19:23" } },

    { wait: 1400, push: { who: "bot", kind: "summary", time: "19:24" } },
    { wait: 4200, reset: true },
  ];

  const run = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setMsgs([]); setTyping(false);
    let t = 0;
    const base = reduce ? 0.55 : 1;
    script.forEach((s) => {
      t += (s.wait || 0) * base / speed;
      const id = setTimeout(() => {
        if (s.reset) { run(); return; }
        if ("typing" in s) setTyping(s.typing);
        if (s.fmt && onFormat) onFormat(s.fmt);
        if (s.push) setMsgs((m) => [...m, { ...s.push, id: Math.random() }]);
      }, t);
      timers.current.push(id);
    });
  }, [speed, reduce, onFormat]);

  useEffect(() => { run(); return () => timers.current.forEach(clearTimeout); }, [run]);

  // keep chat pinned to bottom (no scrollIntoView)
  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight + 200;
  }, [msgs, typing]);

  return (
    <div className="phone">
      <div className="phone-screen">
        <div className="phone-notch" />
        {/* status bar */}
        <div className="wa-status">
          <span>9:41</span>
          <span className="ic">
            <svg width="16" height="11" viewBox="0 0 18 12" fill="#cfe9df"><rect x="0" y="7" width="3" height="5" rx="1"/><rect x="5" y="4" width="3" height="8" rx="1"/><rect x="10" y="1" width="3" height="11" rx="1" opacity=".5"/><rect x="15" y="1" width="3" height="11" rx="1" opacity=".3"/></svg>
            <svg width="16" height="12" viewBox="0 0 20 14" fill="none" stroke="#cfe9df" strokeWidth="1.6"><path d="M1 5a13 13 0 0 1 18 0M4 8a9 9 0 0 1 12 0M7 11a4 4 0 0 1 6 0"/></svg>
            <svg width="22" height="12" viewBox="0 0 26 13"><rect x="1" y="1" width="21" height="11" rx="3" fill="none" stroke="#cfe9df" strokeWidth="1.3"/><rect x="3" y="3" width="15" height="7" rx="1.5" fill="#5fbf9b"/><rect x="23" y="4" width="2" height="5" rx="1" fill="#cfe9df"/></svg>
          </span>
        </div>
        {/* header */}
        <div className="wa-header">
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none" stroke="#8fa6b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flex:"none"}}><path d="M8 1L1 8l7 7"/></svg>
          <div className="wa-avatar">D</div>
          <div className="wa-title">
            <span className="wa-name">Denariuss <span className="wa-verify"><IcCheck s={13} sw={3} /></span></span>
            <span className="wa-presence">assistente • online</span>
          </div>
          <span className="wa-head-ic">
            <IcCam s={20} />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </span>
        </div>
        {/* body */}
        <div className="wa-body" ref={bodyRef}>
          <div className="wa-daybadge">🔒 HOJE</div>
          {msgs.map((m) => <Message key={m.id} m={m} />)}
          {typing && <div className="wa-row bot"><div className="wa-typing"><span/><span/><span/></div></div>}
        </div>
        {/* input */}
        <div className="wa-input">
          <div className="field"><IcSpark s={15} /> <span>Mensagem para a Denariuss…</span></div>
          <div className="mic"><IcMic s={20} /></div>
        </div>
      </div>
    </div>
  );
}

/* ---------- a single message ---------- */
function Message({ m }) {
  const Meta = () => (
    <span className="meta">{m.time}{m.who === "me" && <span className="tick"><IcCheck s={13} sw={3} /></span>}</span>
  );

  if (m.kind === "text")
    return <div className={"wa-row " + m.who}><div className={"bubble " + m.who}><span className="t">{m.text}</span><Meta /></div></div>;

  if (m.kind === "audio")
    return (
      <div className={"wa-row " + m.who}><div className={"bubble " + m.who}>
        <div className="wa-audio">
          <span className="play"><IcPlay s={13} /></span>
          <span className="wa-wave">{WAVE.map((h,i)=><span key={i} style={{height:h}}/>)}</span>
          <span className="dur">{m.dur}</span>
        </div><Meta />
      </div></div>
    );

  if (m.kind === "image")
    return (
      <div className={"wa-row " + m.who}><div className={"bubble " + m.who} style={{padding:5}}>
        <div className="wa-receipt"><div className="receipt-img">
          <div className="receipt-paper">
            <div className="rp-h">SUPERMERCADO</div>
            <div className="rp-l"><span>Arroz 5kg</span><span>28,90</span></div>
            <div className="rp-l"><span>Café 500g</span><span>19,50</span></div>
            <div className="rp-l"><span>Frutas</span><span>34,00</span></div>
            <div className="rp-l"><span>Limpeza</span><span>45,10</span></div>
            <div className="rp-l"><span>Outros</span><span>85,90</span></div>
            <div className="rp-tot"><span>TOTAL</span><span>213,40</span></div>
          </div>
          <span className="receipt-tag">📄 comprovante.jpg</span>
        </div></div>
        <Meta />
      </div></div>
    );

  if (m.kind === "card")
    return (
      <div className={"wa-row " + m.who}><div className={"bubble " + m.who + " wa-card"}>
        <div className="cc-top"><IcCheck s={15} sw={3} /> {m.title}</div>
        {m.amt && <div className="cc-row"><span className="k">Valor</span><span className="cc-amt">{m.amt}</span></div>}
        {m.rows.map(([k,v],i)=><div className="cc-row" key={i}><span className="k">{k}</span><span className="v">{v}</span></div>)}
        <div className="cc-div" />
        <span className="wa-cat">{m.cat}</span>
        <Meta />
      </div></div>
    );

  if (m.kind === "summary")
    return (
      <div className={"wa-row bot"}><div className="bubble bot wa-card">
        <div className="cc-top"><IcSpark s={15} /> Resumo do seu mês</div>
        <div className="cc-row"><span className="k">Entradas</span><span className="v" style={{color:"#3CE6A6"}}>R$ 8.400</span></div>
        <div className="cc-row"><span className="k">Saídas</span><span className="v">R$ 5.130</span></div>
        <div className="cc-div" />
        <div className="cc-row"><span className="k">Saldo livre</span><span className="cc-amt">R$ 3.270 🟢</span></div>
        <Meta />
      </div></div>
    );

  return null;
}

window.WAPhone = WAPhone;
window.DnIco = { IcCheck, IcMic, IcPlay, IcCam, IcType, IcSpark };
