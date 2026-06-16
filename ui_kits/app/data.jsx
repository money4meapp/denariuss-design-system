/* global React, DenariussDesignSystem_a1c3fa */
const { useState } = React;
const DS = window.DenariussDesignSystem_a1c3fa;
const { KpiCard, Card, Button, Badge, Chip } = DS;

/* ---------- icon set (matches the DS line-icon language) ---------- */
function I({ d, s = 20, sw = 1.8, fill = "none", children }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={fill} stroke="currentColor"
         strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      {d ? <path d={d} /> : children}
    </svg>
  );
}
const IcGrid = (p) => <I {...p}><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></I>;
const IcFlow = (p) => <I {...p} d="M3 17l5-5 4 4 8-9"/>;
const IcList = (p) => <I {...p}><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></I>;
const IcWallet = (p) => <I {...p}><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 10h18M17 14h.01"/></I>;
const IcChat = (p) => <I {...p} d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"/>;
const IcGear = (p) => <I {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></I>;
const IcBell = (p) => <I {...p}><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"/></I>;
const IcPlus = (p) => <I {...p} d="M12 5v14M5 12h14"/>;
const IcReport = (p) => <I {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h5M8 17h8"/></I>;
const IcSpark = (p) => <I {...p} fill="currentColor" sw={0}><path d="M12 2l1.7 5.3L19 9l-5.3 1.7L12 16l-1.7-5.3L5 9l5.3-1.7z"/><path d="M19 13l.8 2.5L22 16l-2.2.8L19 19l-.8-2.2L16 16l2.2-.5z"/></I>;
const IcDownload = (p) => <I {...p}><path d="M12 3v12M7 11l5 5 5-5M5 21h14"/></I>;
const IcClock = (p) => <I {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></I>;
const IcFolder = (p) => <I {...p}><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></I>;
const IcPencil = (p) => <I {...p}><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/></I>;
const IcTrash = (p) => <I {...p}><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M6 6l1 14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-14"/></I>;
const IcEye = (p) => <I {...p}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></I>;
const IcEyeOff = (p) => <I {...p}><path d="M17.94 17.94A10 10 0 0 1 12 20C5 20 1 12 1 12a18 18 0 0 1 5.06-5.94M9.9 4.24A9 9 0 0 1 12 4c7 0 11 8 11 8a18 18 0 0 1-2.16 3.19M14.12 14.12a3 3 0 1 1-4.24-4.24M1 1l22 22"/></I>;
const IcSliders = (p) => <I {...p}><path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/></I>;
const IcRefresh = (p) => <I {...p}><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></I>;
const IcChevron = (p) => <I {...p}><path d="M6 9l6 6 6-6"/></I>;
const IcCheck = (p) => <I {...p}><path d="M20 6L9 17l-5-5"/></I>;
const IcUp = (p) => <I {...p}><path d="M12 19V5M5 12l7-7 7 7"/></I>;
const IcDown = (p) => <I {...p}><path d="M12 5v14M5 12l7 7 7-7"/></I>;
const IcCardIcon = (p) => <I {...p}><rect x="2" y="5" width="20" height="14" rx="2.5"/><path d="M2 10h20"/></I>;

window.AppIcons = { IcGrid, IcFlow, IcList, IcWallet, IcChat, IcGear, IcBell, IcPlus, IcReport, IcSpark, IcDownload, IcClock, IcFolder, IcPencil, IcTrash, IcEye, IcEyeOff, IcSliders, IcRefresh, IcChevron, IcCheck, IcUp, IcDown, IcCardIcon };

/* ---------- transactions data ---------- */
const TX = [
  { icon: "🛒", name: "Supermercado Pão de Açúcar", cat: "Mercado", date: "12 jun", val: -213.40, via: "foto" },
  { icon: "🚗", name: "Uber", cat: "Transporte", date: "12 jun", val: -28.90, via: "áudio" },
  { icon: "💼", name: "Salário · Empresa LTDA", cat: "Renda", date: "10 jun", val: 6400.00, via: "auto" },
  { icon: "🍽", name: "Almoço", cat: "Alimentação", date: "10 jun", val: -35.00, via: "texto" },
  { icon: "📱", name: "Plano Vivo", cat: "Contas", date: "08 jun", val: -79.90, via: "auto" },
  { icon: "🎬", name: "Netflix", cat: "Assinaturas", date: "07 jun", val: -44.90, via: "auto" },
  { icon: "💸", name: "Freela · design", cat: "Renda", date: "05 jun", val: 2000.00, via: "texto" },
];

/* per-category orçamento — soma fecha em R$ 5.130 gasto / R$ 6.000 limite,
   batendo com os KPIs (saídas R$ 5.130) e o orçamento mensal total */
const BUDGETS = [
  { cat: "Moradia", icon: "🏠", spent: 1850, limit: 1900 },
  { cat: "Compras", icon: "🛍", spent: 1230, limit: 1700 },
  { cat: "Mercado", icon: "🛒", spent: 940, limit: 900 },
  { cat: "Alimentação", icon: "🍽", spent: 620, limit: 800 },
  { cat: "Transporte", icon: "🚗", spent: 310, limit: 500 },
  { cat: "Assinaturas", icon: "🎬", spent: 180, limit: 200 },
];

/* orçamento mensal global — junho 2026, dia 18 de 30 */
const BUDGET_META = {
  limit: 6000,        // teto planejado do mês
  spent: 5130,        // já gasto (= soma de BUDGETS = saídas)
  dayOfMonth: 18,
  daysInMonth: 30,
};

/* movimentação diária do mês — entradas x saídas por dia (junho 2026).
   determinístico; totais batem com os KPIs (entradas R$ 8.400 / saídas R$ 5.130) */
const _seed = (n) => { const x = Math.sin(n * 99.137) * 10000; return x - Math.floor(x); };
const _rawDaily = Array.from({ length: 30 }, (_, i) => {
  const d = i + 1;
  return { d, out: d % 7 === 0 ? 0 : Math.round(40 + _seed(d) * 360) }; // domingos sem gasto
});
const _outSum = _rawDaily.reduce((s, x) => s + x.out, 0);
const _outK = 5130 / _outSum;
const DAILY = _rawDaily.map((x) => ({
  d: x.d,
  in: { 5: 2000, 10: 6400 }[x.d] || 0, // freela dia 5 + salário dia 10 = 8.400
  out: Math.round(x.out * _outK),
}));

const brl = (n) => (n < 0 ? "-" : "") + "R$ " + Math.abs(n).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const brlShort = (n) => {
  const a = Math.abs(n);
  if (a >= 1000) return "R$ " + (a / 1000).toLocaleString("pt-BR", { minimumFractionDigits: 0, maximumFractionDigits: 1 }) + "k";
  return "R$ " + a.toLocaleString("pt-BR");
};

window.AppData = { TX, BUDGETS, BUDGET_META, DAILY, brl, brlShort };
