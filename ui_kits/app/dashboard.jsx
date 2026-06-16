/* global React */
const { IcChat: WIcChat, IcWallet: WIcWallet, IcSpark: WIcSpark, IcBell: WIcBell, IcUp: WIcUp } = window.AppIcons;
const { TX: WTX, BUDGETS: WBUDGETS, BUDGET_META: WBM, DAILY: WDAILY, brl: wbrl, brlShort: wbrlS } = window.AppData;
const DSc = window.DenariussDesignSystem_a1c3fa;

/* ===================== KPI row (budget-aware) ===================== */
function KpiRow() {
  const restante = WBM.limit - WBM.spent;
  const usedPct = Math.round((WBM.spent / WBM.limit) * 100);
  return (
    <div className="app-kpis">
      <DSc.KpiCard label="↑ Entradas" value="R$ 8.400" delta="▲ +12% vs maio" trend="up" />
      <DSc.KpiCard label="↓ Saídas" value="R$ 5.130" delta={usedPct + "% do orçamento"} trend="down" />
      <DSc.KpiCard label="◎ Sobra do orçamento" value={wbrl(restante).replace(",00", "")} delta={"de R$ 6.000 · faltam " + (WBM.daysInMonth - WBM.dayOfMonth) + " dias"} accent />
    </div>
  );
}

/* ===================== Assistente financeiro ===================== */
const TIPS = [
  {
    kind: "feature", badge: "I.A",
    title: "Lance despesas pelo WhatsApp",
    body: "Mande movimentações ou pergunte sobre seu financeiro pelo +55 11 92509-6090. A IA categoriza e atualiza seu orçamento sozinha.",
    cta: "Abrir WhatsApp",
  },
  {
    kind: "alert", ic: "🛒",
    title: "Mercado passou do limite",
    body: "Você já gastou R$ 940 dos R$ 900 planejados — R$ 40 acima do teto da categoria neste mês.",
    cta: "Ajustar orçamento",
  },
  {
    kind: "tip", ic: "🎯",
    title: "No ritmo pra fechar no azul",
    body: "Faltam 12 dias e ainda sobram R$ 870 do orçamento. Mantendo o passo, junho fecha positivo.",
    cta: "Ver orçamento",
  },
];

function AssistantPanel() {
  return (
    <DSc.Card padding={26} style={{ gridColumn: "span 3" }}>
      <div className="app-card-head">
        <div>
          <div className="app-card-kicker">Assistente financeiro</div>
          <h3 className="app-card-title">Dicas e alertas do momento</h3>
        </div>
        <button className="app-link" style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
          Ver tudo <WIcBell s={15} />
        </button>
      </div>
      <div className="dash-tips">
        {TIPS.map((t) => (
          <div className={"dash-tip dash-tip--" + t.kind} key={t.title}>
            <div className="dash-tip-top">
              <div className={"dash-tip-ic dash-tip-ic--" + t.kind}>
                {t.kind === "feature" ? <WIcChat s={20} /> : <span>{t.ic}</span>}
              </div>
              {t.badge ? <span className="dash-tip-badge"><WIcSpark s={12} /> {t.badge}</span> : null}
            </div>
            <h4 className="dash-tip-title">{t.title}</h4>
            <p className="dash-tip-body">{t.body}</p>
            <button className="dash-tip-cta">{t.cta} <span aria-hidden="true">→</span></button>
          </div>
        ))}
      </div>
    </DSc.Card>
  );
}

/* ===================== Movimentação financeira do mês (diária) ===================== */
function DailyFlow() {
  const maxScale = 1500;
  const totalIn = WDAILY.reduce((s, d) => s + d.in, 0);
  const totalOut = WDAILY.reduce((s, d) => s + d.out, 0);
  const ticks = [1, 5, 10, 15, 20, 25, 30];
  const H = 150;
  return (
    <DSc.Card padding={24}>
      <div className="app-card-head">
        <div>
          <div className="app-card-kicker">Últimos 30 dias · junho</div>
          <h3 className="app-card-title">Movimentação financeira do mês</h3>
        </div>
        <div className="dash-daily-tot">
          <span><i className="dash-sw in" /> Entradas <b className="up">{wbrlS(totalIn)}</b></span>
          <span><i className="dash-sw out" /> Saídas <b className="down">{wbrlS(totalOut)}</b></span>
        </div>
      </div>
      <div className="dash-daily" style={{ height: H + 30 }}>
        <div className="dash-daily-cols" style={{ height: H }}>
          {WDAILY.map((d) => {
            const inH = Math.min(d.in, maxScale) / maxScale * H;
            const outH = Math.min(d.out, maxScale) / maxScale * H;
            const clip = d.in > maxScale;
            return (
              <div className="dash-daily-col" key={d.d}>
                {clip ? <span className="dash-daily-cap">{wbrlS(d.in)}</span> : null}
                <div className="dash-daily-bars">
                  {d.in > 0 ? <div className="dash-bar in" style={{ height: Math.max(3, inH) }} /> : null}
                  {d.out > 0 ? <div className="dash-bar out" style={{ height: Math.max(3, outH) }} /> : null}
                </div>
              </div>
            );
          })}
        </div>
        <div className="dash-daily-x">
          {WDAILY.map((d) => (
            <span key={d.d} className="dash-daily-xlab">{ticks.includes(d.d) ? String(d.d).padStart(2, "0") : ""}</span>
          ))}
        </div>
      </div>
    </DSc.Card>
  );
}

/* ===================== Tendência mensal (entradas x saídas por mês) ===================== */
const FLOW = [
  { m: "Jan", in: 78, out: 52 }, { m: "Fev", in: 72, out: 60 },
  { m: "Mar", in: 84, out: 49 }, { m: "Abr", in: 80, out: 64 },
  { m: "Mai", in: 75, out: 51 }, { m: "Jun", in: 84, out: 51 },
  { m: "Jul", in: 70, out: 55, fut: true }, { m: "Ago", in: 75, out: 58, fut: true },
];
function MonthlyFlow() {
  const max = 100;
  return (
    <DSc.Card padding={24} style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div className="app-card-head">
        <div>
          <div className="app-card-kicker">Tendência · 2026</div>
          <h3 className="app-card-title">Entradas x saídas por mês</h3>
        </div>
        <div className="app-legend">
          <span><i style={{ background: "var(--green-bright)" }} />Entradas</span>
          <span><i style={{ background: "rgba(255,138,138,.7)" }} />Saídas</span>
          <span><i style={{ background: "var(--line)" }} />Previsto</span>
        </div>
      </div>
      <div className="app-flow" style={{ flex: 1 }}>
        {FLOW.map((d) => (
          <div className="app-flow-col" key={d.m}>
            <div className="app-bars">
              <div className="app-bar in" style={{ height: (d.in / max) * 140, opacity: d.fut ? 0.4 : 1 }} />
              <div className="app-bar out" style={{ height: (d.out / max) * 140, opacity: d.fut ? 0.4 : 1 }} />
            </div>
            <span className={"app-flow-m" + (d.fut ? " fut" : "")}>{d.m}</span>
          </div>
        ))}
      </div>
    </DSc.Card>
  );
}

/* ===================== Progresso do orçamento (gauge) ===================== */
function BudgetGauge() {
  const { limit, spent, dayOfMonth, daysInMonth } = WBM;
  const usedPct = Math.round((spent / limit) * 100);
  const timePct = Math.round((dayOfMonth / daysInMonth) * 100);
  const restante = limit - spent;
  const diasRest = daysInMonth - dayOfMonth;
  const overPace = usedPct > timePct;
  const ringColor = overPace ? "var(--warning)" : "var(--green-bright)";
  return (
    <DSc.Card padding={24}>
      <div className="app-card-head">
        <div>
          <div className="app-card-kicker">Orçamento mensal</div>
          <h3 className="app-card-title">Progresso do orçamento</h3>
        </div>
      </div>
      <div className="dash-gauge-wrap">
        <div className="dash-gauge" style={{ background: `conic-gradient(from -90deg, ${ringColor} 0 ${usedPct}%, rgba(255,255,255,0.07) ${usedPct}% 100%)` }}>
          <div className="dash-gauge-pace" style={{ transform: `rotate(${timePct / 100 * 360}deg)` }}><i /></div>
          <div className="dash-gauge-hole">
            <span className="dash-gauge-pct">{usedPct}%</span>
            <span className="dash-gauge-lab">usado</span>
          </div>
        </div>
      </div>
      <div className="dash-gauge-stats">
        <div className="dash-gstat">
          <span className="dash-gstat-lab">Gasto</span>
          <span className="dash-gstat-val">{wbrl(spent).replace(",00", "")}</span>
        </div>
        <div className="dash-gstat">
          <span className="dash-gstat-lab">Limite</span>
          <span className="dash-gstat-val">{wbrl(limit).replace(",00", "")}</span>
        </div>
        <div className="dash-gstat">
          <span className="dash-gstat-lab">Sobra</span>
          <span className={"dash-gstat-val " + (restante < 0 ? "down" : "up")}>{wbrl(restante).replace(",00", "")}</span>
        </div>
      </div>
      <div className={"dash-gauge-verdict " + (overPace ? "warn" : "ok")}>
        <span className="tick">{overPace ? "!" : "✓"}</span>
        {overPace
          ? <>Acima do ritmo — no passo de hoje você passaria do teto. Faltam <b>{diasRest} dias</b>.</>
          : <>Dentro do ritmo — {usedPct}% gasto em {timePct}% do mês. Faltam <b>{diasRest} dias</b>.</>}
      </div>
    </DSc.Card>
  );
}

/* ===================== Orçamento por categoria (vs planejado) ===================== */
function statusOf(spent, limit) {
  if (spent > limit) return { tone: "danger", label: "Estourou" };
  if (spent / limit >= 0.9) return { tone: "warn", label: "Quase lá" };
  return { tone: "ok", label: "Tranquilo" };
}
function BudgetPanel() {
  const timePct = Math.round((WBM.dayOfMonth / WBM.daysInMonth) * 100);
  return (
    <DSc.Card padding={24} style={{ gridColumn: "span 3" }}>
      <div className="app-card-head">
        <div>
          <div className="app-card-kicker">Orçamento · junho</div>
          <h3 className="app-card-title">Por categoria — comparado ao planejado</h3>
        </div>
        <div className="dash-bud-legend">
          <span className="dash-bud-marker" /> esperado até hoje (dia {WBM.dayOfMonth})
        </div>
      </div>
      <div className="dash-bud-grid">
        {WBUDGETS.map((b) => {
          const pct = Math.min(100, (b.spent / b.limit) * 100);
          const st = statusOf(b.spent, b.limit);
          const over = b.spent > b.limit;
          const diff = b.limit - b.spent;
          return (
            <div className="dash-bud" key={b.cat}>
              <div className="dash-bud-top">
                <span className="dash-bud-name">{b.icon} {b.cat}</span>
                <span className={"dash-bud-status " + st.tone}>{st.label}</span>
              </div>
              <div className="dash-bud-track">
                <div className={"dash-bud-fill " + st.tone} style={{ width: pct + "%" }} />
                <div className="dash-bud-pace" style={{ left: timePct + "%" }} />
              </div>
              <div className="dash-bud-foot">
                <span className="dash-bud-amount">{wbrl(b.spent).replace(",00", "")} <em>/ {wbrl(b.limit).replace(",00", "")}</em></span>
                <span className={over ? "down" : "muted"}>{over ? "+" + wbrl(-diff).replace(",00", "") + " acima" : wbrl(diff).replace(",00", "") + " livre"}</span>
              </div>
            </div>
          );
        })}
      </div>
    </DSc.Card>
  );
}

/* ===================== Transactions ===================== */
function TxList() {
  const viaLabel = { foto: "📷 Foto", "áudio": "🎙 Áudio", texto: "💬 Texto", auto: "⚙ Auto" };
  return (
    <DSc.Card padding={24} style={{ gridColumn: "span 3" }}>
      <div className="app-card-head">
        <div>
          <div className="app-card-kicker">Lançamentos</div>
          <h3 className="app-card-title">Atividade recente</h3>
        </div>
        <button className="app-link">Ver todos</button>
      </div>
      <div className="app-tx">
        {WTX.map((t, i) => (
          <div className="app-tx-row" key={i}>
            <div className="app-tx-ic">{t.icon}</div>
            <div className="app-tx-main">
              <div className="app-tx-name">{t.name}</div>
              <div className="app-tx-meta">{t.cat} · {t.date}</div>
            </div>
            <DSc.Chip>{viaLabel[t.via]}</DSc.Chip>
            <div className={"app-tx-val " + (t.val > 0 ? "up" : "")}>{t.val > 0 ? "+" : ""}{wbrl(t.val)}</div>
          </div>
        ))}
      </div>
    </DSc.Card>
  );
}

window.Dashboard = function Dashboard({ onAdd }) {
  return (
    <div className="app-grid">
      <div style={{ gridColumn: "span 3" }}><KpiRow /></div>
      <AssistantPanel />
      <div className="dash-leftcol" style={{ gridColumn: "span 2", display: "flex", flexDirection: "column", gap: 16 }}>
        <DailyFlow />
        <MonthlyFlow />
      </div>
      <BudgetGauge />
      <BudgetPanel />
      <TxList />
    </div>
  );
};
