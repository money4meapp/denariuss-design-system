/* global React */
const { useState: budS } = React;
const DSB = window.DenariussDesignSystem_a1c3fa;
const { brl: budBrl } = window.AppData;
const { IcTrash: BIcTrash, IcChevron: BIcChevron } = window.AppIcons;

const INCOME = 8400;

/* os três baldes do plano — agora cada um guarda itens individuais e editáveis */
const BUCKETS = [
  { id: "nec", icon: "🏠", name: "Contas e essenciais", help: "moradia, mercado, contas fixas", color: "#15806A",
    items: [
      { id: "nec-aluguel", name: "Aluguel", value: 1800 },
      { id: "nec-mercado", name: "Mercado", value: 900 },
      { id: "nec-saude", name: "Plano de saúde", value: 600 },
      { id: "nec-transporte", name: "Transporte", value: 320 },
      { id: "nec-farmacia", name: "Farmácia", value: 250 },
      { id: "nec-luz", name: "Luz", value: 200 },
      { id: "nec-internet", name: "Internet", value: 130 },
    ] },
  { id: "des", icon: "🎉", name: "Vida e lazer", help: "delivery, streaming, rolês, compras", color: "#2ECF95",
    items: [
      { id: "des-restaurantes", name: "Restaurantes", value: 620 },
      { id: "des-compras", name: "Compras", value: 560 },
      { id: "des-delivery", name: "Delivery", value: 480 },
      { id: "des-roles", name: "Rolês", value: 230 },
      { id: "des-academia", name: "Academia", value: 120 },
      { id: "des-streaming", name: "Streaming", value: 90 },
    ] },
  { id: "fut", icon: "🎯", name: "Guardar e metas", help: "reserva, sonhos, futuro", color: "#3CE6A6",
    items: [
      { id: "fut-reserva", name: "Reserva de emergência", value: 900 },
      { id: "fut-invest", name: "Investimentos", value: 600 },
      { id: "fut-viagem", name: "Meta · viagem", value: 180 },
    ] },
];

const cloneBuckets = () => BUCKETS.map((b) => ({ ...b, open: b.id === "nec", items: b.items.map((it) => ({ ...it })) }));
const bucketTotal = (b) => b.items.reduce((s, it) => s + it.value, 0);
let _itemSeq = 0;
const newItemId = () => "novo-" + (++_itemSeq) + "-" + Date.now().toString(36);

/* média real detectada nos últimos 3 meses (bate com a soma inicial dos itens) */
const DETECTED = { nec: 4200, des: 2100, fut: 1680 };

const MES = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
const addMonths = (m, y, add) => { const t = m + add; return { m: ((t % 12) + 12) % 12, y: y + Math.floor(t / 12) }; };

function rangeFill(v, max, color) {
  const p = Math.max(0, Math.min(100, (v / max) * 100));
  return { background: `linear-gradient(90deg, ${color} ${p}%, rgba(255,255,255,0.08) ${p}%)` };
}

/* ============================================================
   PLANO DO MÊS — interactive allocation simulator
   ============================================================ */
function PlanCard({ buckets, setBuckets }) {
  const totals = {};
  buckets.forEach((b) => { totals[b.id] = bucketTotal(b); });
  const used = buckets.reduce((s, b) => s + totals[b.id], 0);
  const livre = INCOME - used;
  const over = livre < 0;
  const guardaPer100 = Math.round(((totals.fut || 0) / INCOME) * 100);

  const mutate = (fn) => setBuckets((bs) => bs.map(fn));
  const toggle = (bid) => mutate((b) => (b.id === bid ? { ...b, open: !b.open } : b));
  const setItemVal = (bid, iid, v) => mutate((b) => (b.id === bid ? { ...b, items: b.items.map((it) => (it.id === iid ? { ...it, value: v } : it)) } : b));
  const renameItem = (bid, iid, name) => mutate((b) => (b.id === bid ? { ...b, items: b.items.map((it) => (it.id === iid ? { ...it, name } : it)) } : b));
  const delItem = (bid, iid) => mutate((b) => (b.id === bid ? { ...b, items: b.items.filter((it) => it.id !== iid) } : b));
  const addItem = (bid) => mutate((b) => (b.id === bid ? { ...b, open: true, items: [...b.items, { id: newItemId(), name: "Novo item", value: 200 }] } : b));
  const useReal = () => setBuckets(cloneBuckets());

  const seg = [
    ...buckets.map((b) => ({ id: b.id, name: b.name, v: totals[b.id], color: b.color })),
    { id: "livre", name: "Livre", v: Math.max(0, livre), color: "rgba(255,255,255,0.10)" },
  ];

  return (
    <DSB.Card padding={24} style={{ gridColumn: "span 2" }}>
      <div className="app-card-head">
        <div>
          <div className="app-card-kicker">Plano do mês · junho</div>
          <h3 className="app-card-title">Para onde vai cada real</h3>
        </div>
        <button className="app-link" onClick={useReal}>↻ Usar minha média real</button>
      </div>

      {/* ELI5 one-liner */}
      <p className="bud-eli5">
        De cada <b>R$ 100</b> que entram, você guarda <b className="up">R$ {guardaPer100}</b> e
        pode gastar <b>R$ {100 - guardaPer100}</b>. Abra um balde pra ajustar item a item.
      </p>

      {/* stacked money bar */}
      <div className="bud-bar">
        {seg.map((s) => s.v > 0 && (
          <div key={s.id} className="bud-bar-seg" style={{ flexGrow: s.v, background: s.color }} title={s.name}>
            {s.v / INCOME > 0.12 ? <span>{Math.round((s.v / INCOME) * 100)}%</span> : null}
          </div>
        ))}
      </div>

      {/* expandable buckets with per-item sliders */}
      <div className="bud-buckets">
        {buckets.map((b) => (
          <div className={"bud-bucket" + (b.open ? " is-open" : "")} key={b.id}>
            <button className="bud-bucket-head" onClick={() => toggle(b.id)} aria-expanded={b.open}>
              <span className="bud-bucket-dot" style={{ background: b.color }} />
              <span className="bud-bucket-id">
                <span className="bud-bucket-name">{b.icon} {b.name}</span>
                <span className="bud-bucket-help">{b.items.length} {b.items.length === 1 ? "item" : "itens"} · {b.help}</span>
              </span>
              <span className="bud-bucket-total">{budBrl(totals[b.id])}</span>
              <span className={"bud-bucket-chev" + (b.open ? "" : " is-closed")}><BIcChevron s={17} /></span>
            </button>
            {b.open ? (
              <div className="bud-bucket-body">
                {b.items.length === 0 ? <p className="bud-bucket-empty">Nenhum item ainda — adicione abaixo.</p> : null}
                {b.items.map((it) => (
                  <div className="bud-item" key={it.id}>
                    <div className="bud-item-top">
                      <input className="bud-item-name" value={it.name} placeholder="Nome do item"
                        onChange={(e) => renameItem(b.id, it.id, e.target.value)} />
                      <span className="bud-item-val">{budBrl(it.value)}</span>
                      <button className="bud-item-del" title="Excluir item" onClick={() => delItem(b.id, it.id)}><BIcTrash s={15} /></button>
                    </div>
                    <input type="range" className="bud-range bud-range--sm" min="0" max="3000" step="50"
                      value={it.value} style={rangeFill(it.value, 3000, b.color)}
                      onChange={(e) => setItemVal(b.id, it.id, +e.target.value)} />
                  </div>
                ))}
                <button className="bud-additem" onClick={() => addItem(b.id)}>+ Adicionar item em {b.name.toLowerCase()}</button>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      {/* live result */}
      <div className={"bud-result" + (over ? " is-over" : "")}>
        <div>
          <div className="bud-result-lab">{over ? "Passou do orçamento" : "Sobra livre no fim do mês"}</div>
          <div className="bud-result-sub">{over ? "Tire de algum balde acima" : "dinheiro sem destino — pode guardar ou aproveitar"}</div>
        </div>
        <div className="bud-result-val">{over ? "−" : ""}{budBrl(Math.abs(livre))}</div>
      </div>
    </DSB.Card>
  );
}

/* ============================================================
   RESUMO AUTOMÁTICO — read from movements
   ============================================================ */
function AutoCard({ alloc }) {
  const rows = [
    { icon: "💼", lab: "Entram por mês", val: budBrl(INCOME), note: "salário + freela (auto)" },
    { icon: "🏠", lab: "Essenciais (média real)", val: budBrl(DETECTED.nec), note: "últimos 3 meses" },
    { icon: "🎉", lab: "Lazer (média real)", val: budBrl(DETECTED.des), note: "últimos 3 meses" },
  ];
  const guardando = alloc.fut;
  return (
    <DSB.Card padding={24}>
      <div className="app-card-head">
        <div>
          <div className="app-card-kicker">Automático</div>
          <h3 className="app-card-title">Lido das suas movimentações</h3>
        </div>
      </div>
      <div className="bud-auto">
        {rows.map((r) => (
          <div className="bud-auto-row" key={r.lab}>
            <div className="app-tx-ic">{r.icon}</div>
            <div className="app-tx-main">
              <div className="app-tx-name">{r.lab}</div>
              <div className="app-tx-meta">{r.note}</div>
            </div>
            <div className="app-tx-val">{r.val}</div>
          </div>
        ))}
      </div>
      <div className="bud-auto-foot">
        <DSB.Chip accent>🎯 Guardando R$ {guardando.toLocaleString("pt-BR")}/mês</DSB.Chip>
        <p>No ritmo atual, você junta <b className="up">{budBrl(guardando * 12)}</b> em 12 meses.</p>
      </div>
    </DSB.Card>
  );
}

/* ============================================================
   PLANEJADOR DE COMPRA GRANDE — "quando eu consigo?"
   ============================================================ */
const GOALS = [
  { icon: "💻", name: "Notebook novo", val: 4000 },
  { icon: "✈️", name: "Viagem", val: 6500 },
  { icon: "📱", name: "iPhone", val: 7200 },
  { icon: "🛟", name: "Reserva de emergência", val: 12000 },
];

function PlannerCard({ alloc }) {
  const [goal, setGoal] = budS(GOALS[0]);
  const [monthly, setMonthly] = budS(1680);
  const [custom, setCustom] = budS(GOALS[0].val);

  const target = custom;
  const months = Math.max(1, Math.ceil(target / monthly));
  const when = addMonths(5, 2026, months); // base junho/2026
  const folga = (alloc.fut + Math.max(0, INCOME - alloc.nec - alloc.des - alloc.fut)) - monthly;
  const cabe = folga >= 0;

  const dots = Math.min(months, 14);

  const pick = (g) => { setGoal(g); setCustom(g.val); };

  return (
    <DSB.Card padding={26} style={{ gridColumn: "span 3" }}>
      <div className="app-card-head">
        <div>
          <div className="app-card-kicker">E se eu quisesse…</div>
          <h3 className="app-card-title">Planejar uma compra grande</h3>
        </div>
        <span className="bud-pill-hint">Simule sem compromisso</span>
      </div>

      <div className="bud-plan">
        {/* left: choose + adjust */}
        <div className="bud-plan-left">
          <div className="bud-goal-chips">
            {GOALS.map((g) => (
              <button key={g.name} className={"bud-goal" + (goal.name === g.name ? " on" : "")} onClick={() => pick(g)}>
                <span className="bud-goal-ic">{g.icon}</span>
                <span className="bud-goal-name">{g.name}</span>
                <span className="bud-goal-val">{budBrl(g.val)}</span>
              </button>
            ))}
          </div>

          <div className="bud-field">
            <label>Quanto custa</label>
            <div className="bud-stepper">
              <button onClick={() => setCustom((c) => Math.max(500, c - 500))}>−</button>
              <span>{budBrl(custom)}</span>
              <button onClick={() => setCustom((c) => c + 500)}>+</button>
            </div>
          </div>

          <div className="bud-field">
            <label>Guardo por mês <b>{budBrl(monthly)}</b></label>
            <input type="range" className="bud-range" min="200" max="4000" step="100"
              value={monthly} style={rangeFill(monthly, 4000, "var(--green)")}
              onChange={(e) => setMonthly(+e.target.value)} />
          </div>
        </div>

        {/* right: the answer */}
        <div className="bud-plan-right">
          <div className="bud-answer-top">
            <span className="bud-answer-lab">Você compra em</span>
            <span className="bud-answer-when">{MES[when.m].charAt(0).toUpperCase() + MES[when.m].slice(1)} {when.y}</span>
            <span className="bud-answer-months">{months} {months === 1 ? "mês" : "meses"} guardando</span>
          </div>

          <div className="bud-timeline">
            {Array.from({ length: dots }).map((_, i) => (
              <div key={i} className="bud-tl-dot" style={{ animationDelay: (i * 40) + "ms" }} />
            ))}
            {months > 14 ? <span className="bud-tl-more">+{months - 14}</span> : null}
          </div>

          <div className={"bud-verdict " + (cabe ? "ok" : "no")}>
            {cabe
              ? <><span className="tick">✓</span> Cabe no seu plano — sobra {budBrl(folga)} de folga por mês.</>
              : <><span className="tick warn">!</span> Aperta — corte {budBrl(-folga)}/mês em lazer pra dar conta.</>}
          </div>
        </div>
      </div>
    </DSB.Card>
  );
}

/* ============================================================
   SCREEN
   ============================================================ */
window.Budget = function Budget() {
  const [buckets, setBuckets] = budS(cloneBuckets);
  const alloc = { nec: 0, des: 0, fut: 0 };
  buckets.forEach((b) => { alloc[b.id] = bucketTotal(b); });
  return (
    <div className="app-grid">
      <PlanCard buckets={buckets} setBuckets={setBuckets} />
      <AutoCard alloc={alloc} />
      <PlannerCard alloc={alloc} />
    </div>
  );
};
