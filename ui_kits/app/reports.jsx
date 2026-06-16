/* global React */
const { useState: repS } = React;
const DSr = window.DenariussDesignSystem_a1c3fa;
const { brl: repBrl } = window.AppData;
const { IcSpark: RIcSpark, IcDownload: RIcDownload } = window.AppIcons;

/* ---------------- report data (junho/2026, consistent w/ dashboard) ---------------- */
const REP = {
  despesas: 5130, receitas: 8400, saldo: 3270, cartao: 1840,
  despesasAnt: 5596,
  orcado: 5000,
  // category — current vs previous month
  cats: [
    { icon: "🏠", name: "Moradia",     cur: 1500, ant: 1500 },
    { icon: "🛒", name: "Mercado",     cur: 940,  ant: 880 },
    { icon: "🍽", name: "Alimentação", cur: 820,  ant: 910 },
    { icon: "🧾", name: "Contas",      cur: 680,  ant: 660 },
    { icon: "🛍", name: "Compras",     cur: 480,  ant: 600 },
    { icon: "🚗", name: "Transporte",  cur: 310,  ant: 280 },
    { icon: "⚕️", name: "Saúde",       cur: 220,  ant: 156 },
    { icon: "🎬", name: "Assinaturas", cur: 180,  ant: 180 },
  ],
  // 6-month trend
  trendLabels: ["jan", "fev", "mar", "abr", "mai", "jun"],
  trendReceitas: [7800, 8000, 8400, 8200, 8400, 8400],
  trendDespesas: [5200, 5600, 4900, 6100, 5596, 5130],
  // future commitments winding down
  futLabels: ["jun", "jul", "ago", "set", "out", "nov"],
  futParcelas: [1840, 1620, 1180, 760, 320, 0],
  futRecorrentes: [890, 890, 890, 890, 890, 890],
  // receita x despesa por conta (banco)
  accounts: [
    { name: "Nubank",   color: "#820AD1", rec: 6400, desp: 2980 },
    { name: "Itaú",     color: "#EC7000", rec: 2000, desp: 1240 },
    { name: "Inter",    color: "#FF7A00", rec: 0,    desp: 610 },
    { name: "C6 Bank",  color: "#B9A300", rec: 0,    desp: 180 },
    { name: "Carteira", color: "#93A1B5", rec: 0,    desp: 120 },
  ],
  // formas de pagamento (donut)
  methods: [
    { name: "Pix",      val: 1890, color: "#2ECF95" },
    { name: "Crédito",  val: 1840, color: "#3CE6A6" },
    { name: "Débito",   val: 760,  color: "#5BC8FF" },
    { name: "Boleto",   val: 520,  color: "#B98BFF" },
    { name: "Dinheiro", val: 120,  color: "#FEBC2E" },
  ],
  // saldo da conta acumulado ao longo do mês (sempre positivo, dá um mergulho antes do salário)
  balLabels: ["1", "5", "10", "15", "20", "25", "30"],
  balData: [1800, 1100, 600, 7000, 5200, 4100, 3270],
  balLow: { val: 600, day: 10 },
  // gasto por dia da semana
  wdLabels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
  wdData: [620, 410, 530, 480, 980, 1240, 870],
  // maiores gastos
  top: [
    { icon: "🏠", name: "Aluguel", cat: "Moradia", val: 1500 },
    { icon: "💳", name: "Fatura cartão Itaú", cat: "Cartão", val: 1240 },
    { icon: "🧾", name: "Conta de luz + água", cat: "Contas", val: 312 },
    { icon: "🛒", name: "Pão de Açúcar", cat: "Mercado", val: 213 },
    { icon: "📱", name: "Plano Vivo", cat: "Contas", val: 80 },
  ],
};

const REP_AI = [
  "Você fechou junho no azul: superávit de R$ 3.270 (entradas R$ 8.400 contra R$ 5.130 de gastos) — é o 2º mês seguido positivo.",
  "As despesas caíram R$ 466 em relação a maio (−8%), puxadas por Compras (−R$ 120) e Alimentação (−R$ 90). Bom sinal de controle.",
  "Moradia (R$ 1.500) e Mercado (R$ 940) concentram 48% de tudo que saiu. É aqui que pequenos ajustes rendem mais economia.",
  "Atenção: Saúde subiu de R$ 156 para R$ 220 (+41%). Se foi um gasto pontual, tudo bem — se virar recorrente, vale revisar.",
  "Seus parcelamentos zeram em novembro, liberando cerca de R$ 1.840/mês de fôlego no caixa a partir de dezembro.",
];

/* ============================================================
   Reusable line chart (SVG) — area + line, multi-series
   ============================================================ */
function LineChart({ id, labels, series, height = 188, money = true }) {
  const W = 560, H = height, padL = 10, padR = 12, padT = 16, padB = 30;
  const iw = W - padL - padR, ih = H - padT - padB;
  const max = Math.max(1, ...series.flatMap((s) => s.data)) * 1.15;
  const x = (i) => padL + (i / (labels.length - 1)) * iw;
  const y = (v) => padT + ih - (v / max) * ih;
  const grid = [0, 0.5, 1];
  return (
    <svg className="rep-svg" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" role="img">
      <defs>
        {series.map((s, si) => (
          <linearGradient key={si} id={`${id}-g${si}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={s.color} stopOpacity="0.32" />
            <stop offset="100%" stopColor={s.color} stopOpacity="0" />
          </linearGradient>
        ))}
      </defs>
      {grid.map((g, i) => (
        <line key={i} x1={padL} x2={W - padR} y1={padT + ih - g * ih} y2={padT + ih - g * ih}
          stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="3 5" />
      ))}
      {series.map((s, si) => {
        const pts = s.data.map((v, i) => `${x(i)},${y(v)}`).join(" ");
        const area = `M ${x(0)},${padT + ih} L ${pts.split(" ").join(" L ")} L ${x(labels.length - 1)},${padT + ih} Z`;
        return (
          <g key={si}>
            <path d={area} fill={`url(#${id}-g${si})`} />
            <polyline points={pts} fill="none" stroke={s.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {s.data.map((v, i) => <circle key={i} cx={x(i)} cy={y(v)} r="3.5" fill="var(--navy)" stroke={s.color} strokeWidth="2.5" />)}
          </g>
        );
      })}
      {labels.map((l, i) => (
        <text key={i} x={x(i)} y={H - 9} fill="var(--faint)" fontSize="12" textAnchor="middle"
          fontFamily="var(--font-numeric)">{l}</text>
      ))}
    </svg>
  );
}

function Legend({ items }) {
  return (
    <div className="app-legend">
      {items.map((it) => <span key={it.label}><i style={{ background: it.color }} />{it.label}</span>)}
    </div>
  );
}

/* ============================================================
   Section 1 — control bar
   ============================================================ */
function ControlBar({ onGenerate, onDownload, sections, toggle }) {
  const opts = [
    { id: "cats", label: "Categorias" },
    { id: "accounts", label: "Contas" },
    { id: "methods", label: "Pagamento" },
    { id: "trend", label: "Tendência" },
    { id: "future", label: "Comprometimento" },
    { id: "ai", label: "Resumo IA" },
  ];
  return (
    <DSr.Card padding={24} style={{ gridColumn: "span 3" }}>
      <div className="rep-control">
        <div className="rep-control-main">
          <div className="app-card-kicker">Relatório mensal</div>
          <h3 className="app-card-title">Escolha o mês e gere os indicadores</h3>
          <p className="rep-sub">Os gráficos aparecem na hora. O resumo com IA é gerado só quando você pedir.</p>
          <div className="rep-control-row">
            <div className="rep-month">
              <label>Mês</label>
              <select defaultValue="2026-06">
                <option value="2026-06">Junho 2026</option>
                <option value="2026-05">Maio 2026</option>
                <option value="2026-04">Abril 2026</option>
              </select>
            </div>
            <DSr.Button variant="primary" onClick={onGenerate}>Gerar relatório</DSr.Button>
            <DSr.Button variant="ghost" icon={<RIcDownload s={18} />} onClick={onDownload}>Baixar PDF</DSr.Button>
          </div>
        </div>
        <div className="rep-sections">
          <span className="rep-sections-lab">Incluir no relatório</span>
          <div className="rep-chips">
            {opts.map((o) => (
              <button key={o.id} className={"rep-chip" + (sections[o.id] ? " on" : "")} onClick={() => toggle(o.id)}>
                <span className="rep-check">{sections[o.id] ? "✓" : ""}</span>{o.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </DSr.Card>
  );
}

/* ============================================================
   Section 2 — KPIs
   ============================================================ */
function Kpis() {
  const comp = REP.despesas - REP.despesasAnt;
  return (
    <div style={{ gridColumn: "span 3" }} className="rep-kpis">
      <DSr.KpiCard label="↓ Despesas no mês" value={repBrl(REP.despesas)} delta={`▼ ${repBrl(comp)} vs maio`} trend="up" />
      <DSr.KpiCard label="↑ Receitas no mês" value={repBrl(REP.receitas)} delta="▲ estável vs maio" trend="up" />
      <DSr.KpiCard label="◎ Saldo do mês" value={repBrl(REP.saldo)} delta="Superávit ✓" accent />
      <DSr.KpiCard label="▤ Cartão de crédito" value={repBrl(REP.cartao)} delta="36% do limite" trend="down" />
    </div>
  );
}

/* ============================================================
   Section 3 — category compare (grouped bars)
   ============================================================ */
function CategoryCompare() {
  const max = Math.max(...REP.cats.flatMap((c) => [c.cur, c.ant]));
  return (
    <DSr.Card padding={24} style={{ gridColumn: "span 2" }}>
      <div className="app-card-head">
        <div>
          <div className="app-card-kicker">Comparativo</div>
          <h3 className="app-card-title">Categorias: mês atual x anterior</h3>
        </div>
        <Legend items={[{ label: "Anterior", color: "rgba(255,255,255,0.22)" }, { label: "Atual", color: "var(--green)" }]} />
      </div>
      <div className="rep-bars">
        {REP.cats.map((c) => (
          <div className="rep-bar-col" key={c.name}>
            <div className="rep-bar-pair">
              <div className="rep-bar ant" style={{ height: (c.ant / max) * 150 }} title={`Anterior ${repBrl(c.ant)}`} />
              <div className="rep-bar cur" style={{ height: (c.cur / max) * 150 }} title={`Atual ${repBrl(c.cur)}`} />
            </div>
            <span className="rep-bar-emoji">{c.icon}</span>
            <span className="rep-bar-name">{c.name}</span>
          </div>
        ))}
      </div>
    </DSr.Card>
  );
}

/* ============================================================
   Section 4 — distribution (horizontal % bars)
   ============================================================ */
function Distribution() {
  const total = REP.cats.reduce((s, c) => s + c.cur, 0);
  const sorted = [...REP.cats].sort((a, b) => b.cur - a.cur);
  const max = sorted[0].cur;
  return (
    <DSr.Card padding={24}>
      <div className="app-card-head">
        <div>
          <div className="app-card-kicker">Onde foi o dinheiro</div>
          <h3 className="app-card-title">Distribuição do mês</h3>
        </div>
      </div>
      <div className="rep-dist">
        {sorted.map((c) => (
          <div className="rep-dist-row" key={c.name}>
            <span className="rep-dist-name">{c.icon} {c.name}</span>
            <div className="rep-dist-track"><div className="rep-dist-fill" style={{ width: (c.cur / max) * 100 + "%" }} /></div>
            <span className="rep-dist-pct">{Math.round((c.cur / total) * 100)}%</span>
          </div>
        ))}
      </div>
    </DSr.Card>
  );
}

/* ============================================================
   Section 5 & 6 — trend + future commitment
   ============================================================ */
function Trend() {
  return (
    <DSr.Card padding={24} style={{ gridColumn: "span 2" }}>
      <div className="app-card-head">
        <div>
          <div className="app-card-kicker">Tendência · 6 meses</div>
          <h3 className="app-card-title">Receitas x despesas</h3>
        </div>
        <Legend items={[{ label: "Receitas", color: "var(--green)" }, { label: "Despesas", color: "#FF8A8A" }]} />
      </div>
      <LineChart id="trend" labels={REP.trendLabels}
        series={[
          { color: "var(--green)", data: REP.trendReceitas },
          { color: "#FF8A8A", data: REP.trendDespesas },
        ]} />
    </DSr.Card>
  );
}

function FutureChart() {
  return (
    <DSr.Card padding={24}>
      <div className="app-card-head">
        <div>
          <div className="app-card-kicker">Próximos meses</div>
          <h3 className="app-card-title">Comprometimento futuro</h3>
        </div>
      </div>
      <LineChart id="fut" labels={REP.futLabels} height={170}
        series={[
          { color: "#5BC8FF", data: REP.futParcelas },
          { color: "#B98BFF", data: REP.futRecorrentes },
        ]} />
      <Legend items={[{ label: "Parcelamentos", color: "#5BC8FF" }, { label: "Recorrentes", color: "#B98BFF" }]} />
    </DSr.Card>
  );
}

/* ============================================================
   Section 7 — AI summary (on demand)
   ============================================================ */
function AiSummary() {
  const [state, setState] = repS("idle"); // idle · loading · done
  const generate = () => { setState("loading"); setTimeout(() => setState("done"), 1700); };

  return (
    <DSr.Card padding={26} accent style={{ gridColumn: "span 3" }}>
      <div className="rep-ai-head">
        <div className="rep-ai-title"><span className="rep-ai-spark"><RIcSpark s={18} /></span> Resumo por IA</div>
        {state === "done"
          ? <button className="app-link" onClick={generate}>↻ Gerar de novo</button>
          : null}
      </div>

      {state === "idle" && (
        <div className="rep-ai-empty">
          <p>A IA da Denariuss lê os números acima e te explica, em português claro, o que aconteceu no seu mês — e o que fazer a seguir.</p>
          <DSr.Button variant="primary" icon={<RIcSpark s={18} />} onClick={generate}>Gerar resumo com IA</DSr.Button>
        </div>
      )}

      {state === "loading" && (
        <div className="rep-ai-loading">
          <div className="rep-ai-dots"><i /><i /><i /></div>
          <span>Analisando suas movimentações de junho…</span>
        </div>
      )}

      {state === "done" && (
        <ul className="rep-ai-list">
          {REP_AI.map((t, i) => (
            <li key={i} style={{ animationDelay: i * 90 + "ms" }}><span className="rep-ai-bullet" />{t}</li>
          ))}
        </ul>
      )}
    </DSr.Card>
  );
}

/* ============================================================
   Section — Receita x Despesa por conta (diverging bars)
   ============================================================ */
function AccountsChart() {
  const max = Math.max(...REP.accounts.flatMap((a) => [a.rec, a.desp]));
  return (
    <DSr.Card padding={24} style={{ gridColumn: "span 2" }}>
      <div className="app-card-head">
        <div>
          <div className="app-card-kicker">Por conta</div>
          <h3 className="app-card-title">Receita x despesa por conta</h3>
        </div>
        <Legend items={[{ label: "Despesa", color: "#FF8A8A" }, { label: "Receita", color: "var(--green)" }]} />
      </div>
      <div className="rep-acc">
        {REP.accounts.map((a) => (
          <div className="rep-acc-row" key={a.name}>
            <div className="rep-acc-side neg">
              <span className="rep-acc-val">{a.desp ? repBrl(a.desp) : "—"}</span>
              <div className="rep-acc-bar desp" style={{ width: (a.desp / max) * 100 + "%" }} />
            </div>
            <div className="rep-acc-mid"><i style={{ background: a.color }} />{a.name}</div>
            <div className="rep-acc-side pos">
              <div className="rep-acc-bar rec" style={{ width: (a.rec / max) * 100 + "%" }} />
              <span className="rep-acc-val">{a.rec ? repBrl(a.rec) : "—"}</span>
            </div>
          </div>
        ))}
      </div>
    </DSr.Card>
  );
}

/* ============================================================
   Section — Formas de pagamento (donut)
   ============================================================ */
function PaymentMethods() {
  const total = REP.methods.reduce((s, m) => s + m.val, 0);
  let acc = 0;
  const stops = REP.methods.map((m) => {
    const start = (acc / total) * 360; acc += m.val;
    const end = (acc / total) * 360;
    return `${m.color} ${start}deg ${end}deg`;
  }).join(", ");
  return (
    <DSr.Card padding={24}>
      <div className="app-card-head">
        <div>
          <div className="app-card-kicker">Como você pagou</div>
          <h3 className="app-card-title">Formas de pagamento</h3>
        </div>
      </div>
      <div className="rep-donut-wrap">
        <div className="rep-donut" style={{ background: `conic-gradient(${stops})` }}>
          <div className="rep-donut-hole">
            <span className="rep-donut-total">{repBrl(total)}</span>
            <span className="rep-donut-lab">no mês</span>
          </div>
        </div>
        <div className="rep-donut-legend">
          {REP.methods.map((m) => (
            <div className="rep-donut-item" key={m.name}>
              <i style={{ background: m.color }} />
              <span className="rep-donut-name">{m.name}</span>
              <span className="rep-donut-pct">{Math.round((m.val / total) * 100)}%</span>
            </div>
          ))}
        </div>
      </div>
    </DSr.Card>
  );
}

/* ============================================================
   Section — Saldo acumulado no mês
   ============================================================ */
function BalanceFlow() {
  return (
    <DSr.Card padding={24} style={{ gridColumn: "span 2" }}>
      <div className="app-card-head">
        <div>
          <div className="app-card-kicker">No mês · dia a dia</div>
          <h3 className="app-card-title">Saldo acumulado da conta</h3>
        </div>
        <span className="rep-flag">▼ Menor saldo {repBrl(REP.balLow.val)} · dia {REP.balLow.day}</span>
      </div>
      <LineChart id="bal" labels={REP.balLabels} height={178}
        series={[{ color: "var(--green)", data: REP.balData }]} />
    </DSr.Card>
  );
}

/* ============================================================
   Section — Gasto por dia da semana
   ============================================================ */
function WeekdaySpending() {
  const max = Math.max(...REP.wdData);
  return (
    <DSr.Card padding={24}>
      <div className="app-card-head">
        <div>
          <div className="app-card-kicker">Padrão</div>
          <h3 className="app-card-title">Gasto por dia da semana</h3>
        </div>
      </div>
      <div className="rep-wd">
        {REP.wdLabels.map((l, i) => {
          const weekend = i >= 5;
          return (
            <div className="rep-wd-col" key={l}>
              <div className={"rep-wd-bar" + (weekend ? " wknd" : "")} style={{ height: (REP.wdData[i] / max) * 132 }} title={repBrl(REP.wdData[i])} />
              <span className={"rep-wd-lab" + (weekend ? " wknd" : "")}>{l}</span>
            </div>
          );
        })}
      </div>
      <p className="rep-foot-note">Fim de semana concentra <b className="down">41%</b> dos seus gastos.</p>
    </DSr.Card>
  );
}

/* ============================================================
   Section — Maiores gastos do mês
   ============================================================ */
function TopExpenses() {
  const max = REP.top[0].val;
  return (
    <DSr.Card padding={24} style={{ gridColumn: "span 3" }}>
      <div className="app-card-head">
        <div>
          <div className="app-card-kicker">Destaques</div>
          <h3 className="app-card-title">Maiores gastos do mês</h3>
        </div>
      </div>
      <div className="rep-top">
        {REP.top.map((t, i) => (
          <div className="rep-top-row" key={t.name}>
            <span className="rep-top-rank">{i + 1}</span>
            <div className="app-tx-ic">{t.icon}</div>
            <div className="rep-top-main">
              <div className="app-tx-name">{t.name}</div>
              <div className="app-tx-meta">{t.cat}</div>
            </div>
            <div className="rep-top-track"><div className="rep-top-fill" style={{ width: (t.val / max) * 100 + "%" }} /></div>
            <div className="app-tx-val">{repBrl(t.val)}</div>
          </div>
        ))}
      </div>
    </DSr.Card>
  );
}

/* ============================================================
   SCREEN
   ============================================================ */
window.Reports = function Reports() {
  const [sections, setSections] = repS({ cats: true, accounts: true, methods: true, trend: true, future: true, ai: true });
  const [toast, setToast] = repS("");
  const toggle = (id) => setSections((s) => ({ ...s, [id]: !s[id] }));
  const flash = (msg) => { setToast(msg); setTimeout(() => setToast(""), 2200); };

  return (
    <div className="app-grid">
      <ControlBar sections={sections} toggle={toggle}
        onGenerate={() => flash("Relatório atualizado para junho 2026")}
        onDownload={() => flash("Gerando PDF do relatório…")} />
      <Kpis />
      {/* IA logo no topo — aparece sem precisar rolar */}
      {sections.ai && <AiSummary />}
      {/* gráficos seguem abaixo */}
      {sections.accounts && <AccountsChart />}
      {sections.methods && <PaymentMethods />}
      <BalanceFlow />
      <WeekdaySpending />
      {sections.cats && <CategoryCompare />}
      {sections.cats && <Distribution />}
      {sections.trend && <Trend />}
      {sections.future && <FutureChart />}
      <TopExpenses />
      {toast && <div className="app-toast"><span className="tick">✓</span> {toast}</div>}
    </div>
  );
};
