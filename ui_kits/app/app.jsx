/* global React */
const { useState: appS } = React;
const DSapp = window.DenariussDesignSystem_a1c3fa;
const { Sidebar, Topbar, Dashboard, Budget, Reports, Movimentacao } = window;

function AddModal({ onClose, onSave }) {
  const [via, setVia] = appS("texto");
  return (
    <div className="app-modal-veil" onClick={onClose}>
      <div className="app-modal" onClick={(e) => e.stopPropagation()}>
        <h3>Novo lançamento</h3>
        <p className="sub">No app real, basta mandar no WhatsApp. Aqui você também registra manualmente.</p>
        <div className="app-seg" style={{ marginBottom: 16 }}>
          {["texto", "áudio", "foto"].map((v) => (
            <button key={v} className={via === v ? "on" : ""} onClick={() => setVia(v)}>
              {v === "texto" ? "💬 Texto" : v === "áudio" ? "🎙 Áudio" : "📷 Foto"}
            </button>
          ))}
        </div>
        <div className="fields">
          <DSapp.Input label="Descrição" placeholder="Ex.: Almoço, Uber, Salário…" defaultValue="Café com cliente" />
          <DSapp.Input label="Valor" placeholder="R$ 0,00" defaultValue="R$ 24,00" />
          <DSapp.Select label="Categoria" options={["🍽 Alimentação", "🛒 Mercado", "🚗 Transporte", "💼 Renda", "📱 Contas"]} />
        </div>
        <div className="actions">
          <DSapp.Button variant="ghost" onClick={onClose} fullWidth>Cancelar</DSapp.Button>
          <DSapp.Button variant="primary" onClick={onSave} fullWidth>Salvar</DSapp.Button>
        </div>
      </div>
    </div>
  );
}

const SCREENS = {
  dash:   { kicker: "Junho 2026", title: "Olá, Marina 👋", render: (p) => <Dashboard {...p} /> },
  budget: { kicker: "Orçamento · junho 2026", title: "Seu plano do mês", render: () => <Budget /> },
  reports: { kicker: "Relatórios Mensais", title: "Relatório de junho 2026", render: () => <Reports /> },
  mov: { kicker: "Junho 2026", title: "Movimentação", render: (p) => <Movimentacao {...p} /> },
};

function App() {
  const init = (typeof window !== "undefined" && window.__initialScreen) || "dash";
  const [active, setActive] = appS(init);
  const [modal, setModal] = appS(false);
  const [toast, setToast] = appS(false);
  const save = () => { setModal(false); setToast(true); setTimeout(() => setToast(false), 2400); };

  // screens not yet built fall back to the dashboard so nav never dead-ends
  const screen = SCREENS[active] || SCREENS.dash;

  return (
    <div className="app-shell">
      <Sidebar active={active} setActive={setActive} />
      <main className="app-main">
        <Topbar kicker={screen.kicker} title={screen.title} onAdd={() => setModal(true)} />
        {screen.render({ onAdd: () => setModal(true) })}
      </main>
      {modal && <AddModal onClose={() => setModal(false)} onSave={save} />}
      {toast && (
        <div className="app-toast"><span className="tick">✓</span> Lançamento registrado</div>
      )}
    </div>
  );
}

// NOTE: rendering is triggered by an inline script in each HTML *after* all
// component scripts run. We only expose App here — never render at module load,
// because this file is also pulled into _ds_bundle.js and a top-level render()
// would execute (with components still undefined) the moment the bundle loads.
window.DenariussApp = App;
