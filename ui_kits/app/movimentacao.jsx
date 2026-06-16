/* global React */
const { useState: movS } = React;
const DSm = window.DenariussDesignSystem_a1c3fa;
const { brl: movBrl } = window.AppData;
const MI = window.AppIcons;

/* ---------------- data (junho/2026) ---------------- */
const MOV_KPI = {
  saldo: 6375, receitas: 8977, despesas: 2602,
  recebidoPct: 56, pagoPct: 87,
  faltamRec: 3977, faltamRecItens: 1, pendDesp: 2,
  autoSaldo: 3977,
};

const MOV_GROUPS = [
  { cat: "Saldo Inicial", icon: "💰", kind: "receita", share: "44% das Receitas", items: [
    { id: "g1a", name: "Saldo inicial do mês", val: 3977, status: "recebido", date: "01/06/2026", acct: "Nubank" },
  ]},
  { cat: "Salário", icon: "💼", kind: "receita", share: "56% das Receitas", items: [
    { id: "g2a", name: "Salário · Empresa LTDA", val: 5000, status: "recebido", date: "05/06/2026", acct: "Itaú", recurring: true },
  ]},
  { cat: "Educação - Pessoal", icon: "📚", kind: "despesa", share: "8% das Despesas", relief: true, items: [
    { id: "e1", name: "Faculdade", val: 1320.44, status: "pago", date: "10/06/2026", acct: "Itaú", recurring: true },
    { id: "e2", name: "Curso de inglês", val: 190, status: "pendente", date: "20/06/2026", acct: "Nubank" },
  ]},
  { cat: "Imposto - Pessoal", icon: "🧾", kind: "despesa", share: "5% das Despesas", items: [
    { id: "i1", name: "IRPF", val: 949.76, status: "pendente", date: "25/05/2026", acct: "Cartão Sicoob", parcela: "2/8", total: 7598.08 },
    { id: "i2", name: "Imposto MEI", val: 80, status: "pendente", date: "20/06/2026", acct: "Geral", recurring: true },
  ]},
  { cat: "Transporte - Pessoal", icon: "🚗", kind: "despesa", share: "5% das Despesas", items: [
    { id: "t1", name: "Combustível", val: 620, status: "pago", date: "09/06/2026", acct: "Nubank" },
    { id: "t2", name: "Uber", val: 359.94, status: "pago", date: "12/06/2026", acct: "Nubank" },
  ]},
  { cat: "Compras Internet - Pessoal", icon: "🛒", kind: "despesa", share: "5% das Despesas", items: [
    { id: "c1", name: "Amazon", val: 544.61, status: "pago", date: "07/06/2026", acct: "Nubank" },
    { id: "c2", name: "Mercado Livre", val: 400, status: "pendente", date: "16/06/2026", acct: "Itaú" },
  ]},
  { cat: "Vestuário - Pessoal", icon: "👕", kind: "despesa", share: "3% das Despesas", relief: true, items: [
    { id: "v1", name: "Renner", val: 425.23, status: "pago", date: "06/06/2026", acct: "Nubank", parcela: "1/3", total: 1275.69 },
    { id: "v2", name: "Tênis", val: 200, status: "pendente", date: "22/06/2026", acct: "Itaú" },
  ]},
  { cat: "Pets - Pessoal", icon: "🐾", kind: "despesa", share: "3% das Despesas", relief: true, items: [
    { id: "p1", name: "Ração", val: 312.34, status: "pago", date: "08/06/2026", acct: "Nubank", recurring: true },
    { id: "p2", name: "Veterinário", val: 180, status: "pendente", date: "19/06/2026", acct: "Itaú" },
  ]},
  { cat: "Saúde - Pessoal", icon: "💊", kind: "despesa", share: "3% das Despesas", items: [
    { id: "s1", name: "Plano de saúde", val: 365.66, status: "pago", date: "05/06/2026", acct: "Itaú", recurring: true },
    { id: "s2", name: "Farmácia", val: 120, status: "pago", date: "13/06/2026", acct: "Nubank" },
  ]},
  { cat: "Carro Gol - Pessoal", icon: "🚙", kind: "despesa", share: "2% das Despesas", relief: true, items: [
    { id: "cg1", name: "Seguro do carro", val: 268.25, status: "pendente", date: "28/06/2026", acct: "Itaú", parcela: "3/12", total: 3219 },
    { id: "cg2", name: "Revisão", val: 180, status: "pago", date: "04/06/2026", acct: "Nubank" },
  ]},
  { cat: "Lazer - Pessoal", icon: "🎉", kind: "despesa", share: "2% das Despesas", items: [
    { id: "l1", name: "Cinema", val: 88.38, status: "pago", date: "14/06/2026", acct: "Nubank" },
    { id: "l2", name: "Show", val: 300, status: "pendente", date: "27/06/2026", acct: "Itaú" },
  ]},
  { cat: "Presentes - Pessoal", icon: "🎁", kind: "despesa", share: "2% das Despesas", items: [
    { id: "pr1", name: "Aniversário mãe", val: 381.96, status: "pago", date: "11/06/2026", acct: "Nubank" },
  ]},
  { cat: "Assinaturas - Pessoal", icon: "🎬", kind: "despesa", share: "2% das Despesas", items: [
    { id: "as1", name: "Netflix", val: 44.9, status: "pago", date: "07/06/2026", acct: "Nubank", recurring: true },
    { id: "as2", name: "Spotify", val: 34.9, status: "pago", date: "07/06/2026", acct: "Nubank", recurring: true },
    { id: "as3", name: "iCloud + YouTube", val: 218.09, status: "pendente", date: "21/06/2026", acct: "Itaú", recurring: true },
  ]},
  { cat: "Fono Louise - Pessoal", icon: "🩺", kind: "despesa", share: "2% das Despesas", items: [
    { id: "f1", name: "Fonoaudióloga", val: 292.38, status: "pendente", date: "18/06/2026", acct: "Itaú", recurring: true },
  ]},
  { cat: "Restaurante - Pessoal", icon: "🍽", kind: "despesa", share: "1% das Despesas", items: [
    { id: "r1", name: "Jantar fora", val: 285.33, status: "pago", date: "15/06/2026", acct: "Nubank" },
  ]},
  { cat: "Almoço - Pessoal", icon: "🍱", kind: "despesa", share: "1% das Despesas", items: [
    { id: "al1", name: "Almoço trabalho", val: 240, status: "pago", date: "12/06/2026", acct: "Nubank", recurring: true },
  ]},
  { cat: "Academia - Pessoal", icon: "🏋️", kind: "despesa", share: "1% das Despesas", items: [
    { id: "ac1", name: "Mensalidade", val: 218, status: "pago", date: "05/06/2026", acct: "Itaú", recurring: true },
  ]},
  { cat: "Utensílios Casa - Pessoal", icon: "🍳", kind: "despesa", share: "1% das Despesas", relief: true, items: [
    { id: "u1", name: "Panela + pratos", val: 200, status: "pendente", date: "23/06/2026", acct: "Nubank" },
  ]},
  { cat: "Apostas - Pessoal", icon: "🎲", kind: "despesa", share: "1% das Despesas", items: [
    { id: "ap1", name: "Loteria", val: 142, status: "pago", date: "10/06/2026", acct: "Carteira" },
  ]},
  { cat: "Educação", icon: "📖", kind: "despesa", share: "1% das Despesas", items: [
    { id: "ed1", name: "Livros", val: 97, status: "pago", date: "08/06/2026", acct: "Nubank" },
  ]},
  { cat: "Geral - Pessoal", icon: "📦", kind: "despesa", share: "0% das Despesas", items: [
    { id: "ge1", name: "Diversos", val: 70.47, status: "pago", date: "13/06/2026", acct: "Nubank" },
  ]},
  { cat: "Seguro - Pessoal", icon: "🛡", kind: "despesa", share: "0% das Despesas", items: [
    { id: "se1", name: "Seguro celular", val: 33.04, status: "pago", date: "05/06/2026", acct: "Itaú", recurring: true },
  ]},
];

const groupTotal = (g) => g.items.reduce((s, it) => s + it.val, 0);

const STATUS = {
  recebido: { label: "Recebido", cls: "ok" },
  pago: { label: "Pago", cls: "ok" },
  pendente: { label: "Pendente", cls: "warn" },
  vencido: { label: "Vencido", cls: "danger" },
};

/* mask helper so the topbar eye toggle can blur values */
const Amount = ({ children, className = "" }) => (
  <span className={"mov-amount " + className}>{children}</span>
);

/* ============================================================
   KPIs
   ============================================================ */
function MovKpis() {
  return (
    <div className="mov-kpis" style={{ gridColumn: "span 3" }}>
      <div className="mov-kpi accent">
        <div className="mov-kpi-head"><span className="mov-kpi-ic"><MI.IcWallet s={18} /></span> Saldo atual</div>
        <Amount className="mov-kpi-val grad-green">{movBrl(MOV_KPI.saldo)}</Amount>
        <div className="mov-kpi-bar"><div className="mov-kpi-fill" style={{ width: "100%" }} /></div>
        <div className="mov-kpi-foot"><span>Saldo positivo no período</span><span className="muted">Sem orçamento de referência</span></div>
      </div>

      <div className="mov-kpi">
        <div className="mov-kpi-head"><span className="mov-kpi-ic up"><MI.IcUp s={18} /></span> Receitas do mês</div>
        <Amount className="mov-kpi-val">{movBrl(MOV_KPI.receitas)}</Amount>
        <div className="mov-kpi-bar"><div className="mov-kpi-fill" style={{ width: MOV_KPI.recebidoPct + "%" }} /></div>
        <div className="mov-kpi-foot"><span>{MOV_KPI.recebidoPct}% recebido</span><span className="muted">Faltam {movBrl(MOV_KPI.faltamRec)} ({MOV_KPI.faltamRecItens} item)</span></div>
      </div>

      <div className="mov-kpi">
        <div className="mov-kpi-head"><span className="mov-kpi-ic down"><MI.IcDown s={18} /></span> Despesas do mês</div>
        <Amount className="mov-kpi-val">{movBrl(MOV_KPI.despesas)}</Amount>
        <div className="mov-kpi-bar"><div className="mov-kpi-fill down" style={{ width: MOV_KPI.pagoPct + "%" }} /></div>
        <div className="mov-kpi-foot"><span>{MOV_KPI.pagoPct}% pago</span><span className="muted">{MOV_KPI.pendDesp} itens pendentes</span></div>
      </div>
    </div>
  );
}

/* ============================================================
   Quick actions
   ============================================================ */
function MovActions({ onAdd, flash, selectedCount }) {
  return (
    <div className="mov-toolbar" style={{ gridColumn: "span 3" }}>
      <DSm.Button variant="primary" icon={<MI.IcPlus s={18} />} onClick={onAdd}>Novo lançamento</DSm.Button>
      <div className="mov-tool-group">
        <button onClick={() => flash("Selecione o arquivo do extrato…")}><MI.IcDownload s={16} /> Importar extrato</button>
        <button onClick={() => flash("Selecione a fatura do cartão…")}><MI.IcCardIcon s={16} /> Importar fatura</button>
        <button onClick={() => flash("Abrindo histórico de alterações…")}><MI.IcClock s={16} /> Histórico</button>
      </div>
      <button className={"mov-markall" + (selectedCount ? " has-sel" : "")} onClick={() => flash(selectedCount ? `${selectedCount} marcados como pagos/recebidos` : "Tudo marcado como pago/recebido")}>
        <MI.IcCheck s={16} /> {selectedCount ? `Marcar ${selectedCount} selecionados` : "Marcar todos pagos/recebidos"}
      </button>
    </div>
  );
}

/* ============================================================
   Filters
   ============================================================ */
function MovFilters({ flash }) {
  const [open, setOpen] = movS(true);
  const Pill = ({ label }) => (
    <button className="mov-pill-btn" onClick={() => flash("Abrir filtro: " + label)}>
      {label} <MI.IcChevron s={14} />
    </button>
  );
  return (
    <DSm.Card padding={18} style={{ gridColumn: "span 3" }}>
      <div className="mov-filterbar">
        <span className="mov-fil-ic"><MI.IcSliders s={18} /></span>
        <span className="mov-fil-title">Filtros</span>
        {open && (
          <div className="mov-pills">
            <input type="month" className="mov-pill-select mov-pill-month" defaultValue="2026-06" />
            <Pill label="Todas as contas" />
            <Pill label="Todos os cartões" />
            <Pill label="Todos os tipos" />
            <Pill label="Todas as categorias" />
            <button className="mov-morefilters" onClick={() => flash("Mais filtros: status, valor, recorrência…")}>
              <MI.IcSliders s={15} /> Mais filtros
            </button>
          </div>
        )}
        <button className={"mov-collapse" + (open ? "" : " is-closed")} onClick={() => setOpen(!open)} aria-label="Recolher filtros">
          <MI.IcChevron s={18} />
        </button>
      </div>

      <div className="mov-auto">
        <span className="mov-auto-dot" />
        <span className="mov-auto-lab">Lançamento automático ativo · <b>{movBrl(MOV_KPI.autoSaldo)}</b></span>
        <button className="mov-auto-btn" onClick={() => flash("Saldo atualizado")}><MI.IcRefresh s={15} /> Atualizar saldo</button>
        <button className="mov-auto-btn ghost" onClick={() => flash("Lançamento ignorado no mês atual")}>Não considerar no mês atual</button>
      </div>
    </DSm.Card>
  );
}

/* ============================================================
   View bar
   ============================================================ */
function MovViewBar({ view, setView, onCollapseAll }) {
  return (
    <div className="mov-viewbar" style={{ gridColumn: "span 3" }}>
      <div className="mov-viewbar-left">
        <span className="mov-viewbar-txt">Visualizando <b>{MOV_GROUPS.length} categorias</b> · agrupadas por bloco</span>
        <button className="mov-collapse-all" onClick={onCollapseAll}><MI.IcChevron s={15} style={{ transform: "rotate(180deg)" }} /> Recolher todos</button>
      </div>
      <div className="mov-viewbar-right">
        <span className="mov-viewbar-lab">Visualização</span>
        <div className="mov-viewtoggle">
          <button className={view === "grid" ? "on" : ""} onClick={() => setView("grid")} aria-label="Grade"><MI.IcGrid s={16} /></button>
          <button className={view === "list" ? "on" : ""} onClick={() => setView("list")} aria-label="Lista"><MI.IcList s={16} /></button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Item (inside an expanded category block) + Block card
   ============================================================ */
function MovItem({ it, kind, selected, toggleSel, flash }) {
  const st = STATUS[it.status];
  return (
    <div className={"mov-bitem " + st.cls + (selected ? " is-sel" : "")}>
      <div className="mov-bitem-head">
        <button className={"mov-check" + (selected ? " on" : "")} onClick={() => toggleSel(it.id)} aria-label="Selecionar">
          {selected ? <MI.IcCheck s={12} /> : null}
        </button>
        <span className="mov-bitem-name">{it.name}</span>
        {it.parcela ? <span className="mov-parcela">{it.parcela}</span> : null}
        {it.recurring ? <span className="mov-recur" title="Recorrente"><MI.IcRefresh s={13} /></span> : null}
        <Amount className={"mov-bitem-val " + kind}>{kind === "despesa" ? "-" : ""}{movBrl(it.val)}</Amount>
      </div>
      <div className="mov-bitem-meta">{it.date} · {it.acct}</div>
      {it.parcela ? <div className="mov-bitem-total">Total: {movBrl(it.total)}</div> : null}
      <div className="mov-bitem-foot">
        <span className={"mov-status " + st.cls}>{st.label}</span>
        <div className="mov-bitem-acts">
          <button onClick={() => flash("Editar lançamento")} aria-label="Editar"><MI.IcPencil s={14} /></button>
          <button onClick={() => flash("Histórico do lançamento")} aria-label="Histórico"><MI.IcClock s={14} /></button>
          <button className="danger" onClick={() => flash("Lançamento excluído")} aria-label="Excluir"><MI.IcTrash s={14} /></button>
        </div>
      </div>
    </div>
  );
}

function MovGroup({ g, collapsed, toggleGroup, selected, toggleSel, flash }) {
  const total = groupTotal(g);
  return (
    <div className={"mov-block " + g.kind + (collapsed ? "" : " is-open")}>
      <button className="mov-block-head" onClick={() => toggleGroup(g.cat)}>
        <span className="mov-block-ic">{g.icon}</span>
        <div className="mov-block-id">
          <span className="mov-block-name">{g.cat}</span>
          <div className="mov-block-sub">
            <span className="mov-block-share">{g.share}</span>
            {g.relief ? <span className="mov-relief"><MI.IcSpark s={12} /> Alívio no próximo mês</span> : null}
          </div>
        </div>
        <span className="mov-block-right">
          <Amount className={"mov-block-total " + g.kind}>{g.kind === "despesa" ? "-" : ""}{movBrl(total)}</Amount>
          <span className={"mov-block-chev" + (collapsed ? " is-closed" : "")}><MI.IcChevron s={18} /></span>
        </span>
      </button>
      {!collapsed && (
        <div className="mov-block-items">
          {g.items.map((it) => (
            <MovItem key={it.id} it={it} kind={g.kind} selected={selected.has(it.id)} toggleSel={toggleSel} flash={flash} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ============================================================
   SCREEN
   ============================================================ */
window.Movimentacao = function Movimentacao({ onAdd }) {
  const [view, setView] = movS("grid");
  // start with everything collapsed except one expanded, to show the pattern
  const [collapsed, setCollapsed] = movS(() => new Set(MOV_GROUPS.map((g) => g.cat).filter((c) => c !== "Imposto - Pessoal")));
  const [selected, setSelected] = movS(() => new Set());
  const [toast, setToast] = movS("");

  const flash = (msg) => { setToast(msg); setTimeout(() => setToast(""), 2200); };
  const toggleGroup = (cat) => setCollapsed((s) => { const n = new Set(s); n.has(cat) ? n.delete(cat) : n.add(cat); return n; });
  const allCats = MOV_GROUPS.map((g) => g.cat);
  const collapseAll = () => setCollapsed((s) => (s.size >= allCats.length ? new Set() : new Set(allCats)));
  const toggleSel = (id) => setSelected((s) => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; });

  return (
    <div className="app-grid">
      <MovKpis />
      <MovActions onAdd={onAdd} flash={flash} selectedCount={selected.size} />
      <MovFilters flash={flash} />
      <MovViewBar view={view} setView={setView} onCollapseAll={collapseAll} />
      <div className={"mov-blocks " + (view === "grid" ? "as-grid" : "as-list")} style={{ gridColumn: "span 3" }}>
        {MOV_GROUPS.map((g) => (
          <MovGroup key={g.cat} g={g}
            collapsed={collapsed.has(g.cat)} toggleGroup={toggleGroup}
            selected={selected} toggleSel={toggleSel} flash={flash} />
        ))}
      </div>
      {toast && <div className="app-toast"><span className="tick">✓</span> {toast}</div>}
    </div>
  );
};
