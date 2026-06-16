/* global React */
const { useState: uS } = React;
const { IcGrid, IcFlow, IcList, IcWallet, IcChat, IcGear, IcBell, IcPlus } = window.AppIcons;
const { TX, BUDGETS, brl } = window.AppData;
const DSb = window.DenariussDesignSystem_a1c3fa;

/* ===================== Sidebar ===================== */
function Sidebar({ active, setActive }) {
  const { IcGrid, IcFlow, IcList, IcWallet, IcChat, IcGear, IcBell, IcPlus, IcReport, IcCardIcon } = window.AppIcons;
  const items = [
    { id: "dash", label: "Visão geral", icon: IcGrid },
    { id: "flow", label: "Fluxo de caixa", icon: IcFlow },
    { id: "mov", label: "Movimentação", icon: IcCardIcon },
    { id: "budget", label: "Orçamento", icon: IcWallet },
    { id: "reports", label: "Relatórios", icon: IcReport },
    { id: "wa", label: "WhatsApp", icon: IcChat },
  ];
  return (
    <aside className="app-side">
      <div className="app-brand">
        <img src={(window.__resources && window.__resources.logo) || "../../assets/denariuss-logo-white.png"} alt="Denariuss" />
      </div>
      <nav className="app-nav">
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <button key={it.id}
              className={"app-nav-item" + (active === it.id ? " is-active" : "")}
              onClick={() => setActive(it.id)}>
              <Icon s={19} /> <span>{it.label}</span>
            </button>
          );
        })}
      </nav>
      <div className="app-side-foot">
        <button className="app-nav-item"><IcGear s={19} /> <span>Configurações</span></button>
        <div className="app-plan">
          <div className="app-plan-row">
            <span className="chip" style={{ fontSize: 12 }}>Plano Pro</span>
          </div>
          <p>Renova em 24 dias</p>
        </div>
      </div>
    </aside>
  );
}

/* ===================== Topbar ===================== */
function Topbar({ onAdd, kicker = "Junho 2026", title = "Olá, Marina 👋" }) {
  const { IcEye, IcEyeOff } = window.AppIcons;
  const [hidden, setHidden] = uS(false);
  const toggleEye = () => {
    const next = !hidden;
    setHidden(next);
    document.body.classList.toggle("dn-hide-values", next);
  };
  return (
    <header className="app-top">
      <div>
        <div className="app-top-kicker">{kicker}</div>
        <h1 className="app-top-title">{title}</h1>
      </div>
      <div className="app-top-actions">
        <button className="app-icon-btn" aria-label="Ocultar valores" onClick={toggleEye} title="Ocultar valores">{hidden ? <IcEyeOff s={19} /> : <IcEye s={19} />}</button>
        <button className="app-icon-btn" aria-label="Notificações"><IcBell s={19} /><i className="app-dot" /></button>
        <DSb.Button variant="primary" size="sm" icon={<IcPlus s={18} />} onClick={onAdd}>Novo lançamento</DSb.Button>
        <div className="app-avatar">M</div>
      </div>
    </header>
  );
}

window.Sidebar = Sidebar;
window.Topbar = Topbar;
