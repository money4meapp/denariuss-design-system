/* global React, Reveal, CountUp, Icons, WAPhone */
const { useState: uS, useEffect: uE, useRef: uR } = React;

const LOGO = (typeof window !== "undefined" && window.__resources && window.__resources.logo) || "assets/denariuss-logo.png";

/* ============================ NAV ============================ */
function Nav() {
  const [scrolled, setScrolled] = uS(false);
  uE(() => {
    const f = () => setScrolled(window.scrollY > 24);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="wrap nav-inner">
        <a href="#top" aria-label="Denariuss"><img className="nav-logo" src={LOGO} alt="Denariuss" /></a>
        <div className="nav-links">
          <a href="#whatsapp">WhatsApp</a>
          <a href="#como">Como funciona</a>
          <a href="#recursos">Recursos</a>
          <a href="#precos">Preços</a>
        </div>
        <div className="nav-cta">
          <a href="#" className="btn btn-ghost btn-sm">Acessar</a>
          <a href="#precos" className="btn btn-primary btn-sm">Criar conta grátis</a>
        </div>
      </div>
    </nav>
  );
}

/* ===================== DASHBOARD MOCKUP ===================== */
function Dashboard() {
  const months = [
    { l: "Jan", i: 52, o: 40 }, { l: "Fev", i: 64, o: 46 }, { l: "Mar", i: 58, o: 52 },
    { l: "Abr", i: 70, o: 44 }, { l: "Mai", i: 66, o: 58 }, { l: "Jun", i: 84, o: 51 },
  ];
  const nav = [["glance","Dashboard",true],["repeat","Transações"],["budget","Orçamento"],["pie","Relatórios"],["card","Cartões"]];
  return (
    <div className="browser">
      <div className="browser-bar">
        <div className="lights"><i style={{background:"#ff5f57"}}/><i style={{background:"#febc2e"}}/><i style={{background:"#28c840"}}/></div>
        <div className="url">app.denariuss.com/dashboard</div>
      </div>
      <div className="dash">
        <aside className="dash-side">
          <img src={LOGO} alt="" style={{height:18,marginBottom:14,opacity:.95}} />
          {nav.map(([ic,label,on],i)=>{ const Ic = Icons[ic];
            return <div key={i} className={"di"+(on?" on":"")}><Ic s={17}/> {label}</div>; })}
        </aside>
        <div className="dash-main">
          <div className="kpis">
            <div className="kpi"><div className="lab"><span style={{color:"#3CE6A6"}}>↑</span> Entradas</div><div className="val">R$ <CountUp to={8400}/></div><div className="delta up">▲ +12% vs mês ant.</div></div>
            <div className="kpi"><div className="lab"><span style={{color:"#ff8a8a"}}>↓</span> Saídas</div><div className="val">R$ <CountUp to={5130}/></div><div className="delta down">▲ +4% vs mês ant.</div></div>
            <div className="kpi"><div className="lab">◎ Saldo livre</div><div className="val grad-green">R$ <CountUp to={3270}/></div><div className="delta up">Meta R$ 3.000 ✓</div></div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1.4fr 1fr",gap:14}}>
            <div className="panel">
              <div className="ph"><span>Entrada vs Saída</span><span className="muted" style={{fontSize:11,fontWeight:600}}>6 meses</span></div>
              <div className="bars">
                {months.map((m,i)=>(
                  <div className="barcol" key={i}>
                    <div className="pair">
                      <span className="b in" style={{height:m.i+"%"}}/>
                      <span className="b out" style={{height:m.o+"%"}}/>
                    </div>
                    <span className="lbl">{m.l}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="panel">
              <div className="ph"><span>Por categoria</span></div>
              <div className="donut-wrap">
                <div className="donut"><div className="ctr"><small>Total</small><b>R$ 5,1k</b></div></div>
                <div className="legend">
                  <div className="lg"><span className="sw" style={{background:"#2ECF95"}}/>Moradia 36%</div>
                  <div className="lg"><span className="sw" style={{background:"#2a9c79"}}/>Alimentação 22%</div>
                  <div className="lg"><span className="sw" style={{background:"#1f6e58"}}/>Transporte 15%</div>
                  <div className="lg"><span className="sw" style={{background:"#2c3b4f"}}/>Outros 27%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================ HERO ============================ */
function Hero({ variant, speed = 1 }) {
  const Heading = (
    <>
      <Reveal as="span" className="eyebrow"><span className="dot"/>Planejamento financeiro de verdade</Reveal>
      <Reveal as="h1" className="h-display" delay={1} style={{marginTop:24}}>
        Saiba para onde<br/>seu dinheiro vai<br/><span className="grad-green">com a Denariuss</span>
      </Reveal>
      <Reveal as="p" className="lead" delay={2} style={{marginTop:22,maxWidth:560}}>
        Pare de se perder em planilhas quebradas. Você monta o orçamento, prevê o fluxo dos próximos meses
        e registra gastos <strong style={{color:"var(--ink)"}}>mandando uma mensagem no WhatsApp</strong> — tudo num só lugar.
      </Reveal>
      <Reveal className="hero-actions" delay={3}>
        <a href="#precos" className="btn btn-primary btn-lg">Criar conta grátis <Icons.arrowR s={18}/></a>
        <a href="#whatsapp" className="btn btn-ghost btn-lg"><Icons.chat s={18}/> Ver o WhatsApp</a>
      </Reveal>
      <Reveal className="trust" delay={4}>
        <span><Icons.check s={16} sw={2.4}/> Plano grátis para começar</span>
        <span><Icons.check s={16} sw={2.4}/> Sem cartão de crédito</span>
      </Reveal>
    </>
  );

  if (variant === "whatsapp") {
    return (
      <header className="hero wrap" id="top">
        <div className="hero-split">
          <div>{Heading}</div>
          <Reveal delay={2} style={{display:"flex",justifyContent:"center",position:"relative"}}>
            <div className="float-tag" style={{top:8,left:-6,animationDelay:"0s"}}>🟢 IA respondeu em 2s</div>
            <div className="float-tag" style={{bottom:34,right:-10,animationDelay:"1.4s"}}>✅ Gasto lançado</div>
            <WAPhone speed={speed} />
          </Reveal>
        </div>
      </header>
    );
  }

  if (variant === "split") {
    return (
      <header className="hero wrap" id="top">
        <div className="hero-split">
          <div>{Heading}</div>
          <Reveal delay={2} style={{position:"relative"}}>
            <Dashboard/>
            <a href="#whatsapp" className="float-tag" style={{bottom:-18,left:18,textDecoration:"none",color:"var(--ink)"}}>📲 Registre por WhatsApp →</a>
          </Reveal>
        </div>
      </header>
    );
  }

  // default: centered + dashboard below
  return (
    <header className="hero wrap center" id="top" style={{paddingBottom:40}}>
      <div style={{maxWidth:880,margin:"0 auto"}}>{Heading}</div>
      <Reveal delay={2} style={{marginTop:54,position:"relative"}}>
        <Dashboard/>
        <a href="#whatsapp" className="float-tag" style={{top:-16,right:24,textDecoration:"none",color:"var(--ink)"}}>📲 Registre por WhatsApp →</a>
        <div className="float-tag" style={{bottom:-18,left:24}}>🟢 IA lançou seu gasto</div>
      </Reveal>
    </header>
  );
}

/* ========== social proof strip ========== */
function ProofStrip() {
  const stats = [
    { to: 12000, suffix: "+", cap: "gastos lançados por mês" },
    { to: 2, suffix: "s", cap: "tempo médio de resposta da IA", dec: 0 },
    { to: 3, suffix: " formatos", cap: "áudio, foto ou texto" },
    { to: 100, suffix: "%", cap: "dos dados criptografados" },
  ];
  return (
    <section className="wrap" style={{paddingTop:20}}>
      <Reveal className="card statline" style={{padding:"30px 34px",justifyContent:"space-between"}}>
        {stats.map((s,i)=>(
          <div className="stat" key={i}>
            <div className="num grad-green"><CountUp to={s.to} suffix={s.suffix} decimals={s.dec||0}/></div>
            <div className="cap">{s.cap}</div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

/* ===================== WHATSAPP SECTION ===================== */
function WhatsAppSection({ variant, speed = 1 }) {
  const [fmt, setFmt] = uS("texto");
  const formats = [
    { id:"texto", ic:"type", h:"Mande um texto", p:"Escreva \u201calmoço 35\u201d e pronto. A IA entende valor, descrição e categoria sozinha." },
    { id:"audio", ic:"mic",  h:"Grave um áudio", p:"Sem tempo de digitar? Fale naturalmente — a Denariuss transcreve e lança a despesa." },
    { id:"foto",  ic:"cam",  h:"Tire foto do comprovante", p:"Fotografe a nota ou o cupom fiscal. Ela lê o valor, o local e a data automaticamente." },
  ];
  const fIco = { type: window.DnIco.IcType, mic: window.DnIco.IcMic, cam: window.DnIco.IcCam };

  const Cards = (
    <div className="fmt-list">
      {formats.map((f)=>{ const Ic = fIco[f.ic]; const on = fmt===f.id;
        return (
          <div className={"fmt"+(on?" active":"")} key={f.id}>
            <div className="fmt-ic"><Ic s={24}/></div>
            <div><h4>{f.h}</h4><p>{f.p}</p></div>
          </div>
        );
      })}
    </div>
  );

  const Head = (
    <>
      <Reveal as="span" className="eyebrow"><Icons.chat s={14}/> WhatsApp &amp; Telegram</Reveal>
      <Reveal as="h2" className="h-section" delay={1} style={{marginTop:22}}>
        Registrar um gasto é tão simples<br/>quanto <span className="grad-green">mandar uma mensagem</span>
      </Reveal>
      <Reveal as="p" className="lead" delay={2} style={{marginTop:18,maxWidth:540}}>
        Envie <strong style={{color:"var(--ink)"}}>áudio</strong>, <strong style={{color:"var(--ink)"}}>foto do comprovante</strong> ou
        só um <strong style={{color:"var(--ink)"}}>texto</strong>. O assistente com IA lança a despesa, te responde na hora
        e ainda manda lembretes e o resumo do mês — sem você abrir o app.
      </Reveal>
    </>
  );

  return (
    <section className="section-pad" id="whatsapp" style={{background:"linear-gradient(180deg, transparent, rgba(46,207,149,0.04) 35%, transparent)"}}>
      <div className="wrap">
        {variant === "stacked" ? (
          <>
            <div className="section-head center" style={{marginBottom:48}}>{Head}</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr auto 1fr",gap:40,alignItems:"center"}} className="wa-3col">
              <Reveal delay={1}>{Cards.props.children.slice(0,2) && Cards}</Reveal>
              <Reveal delay={2} style={{display:"flex",justifyContent:"center"}}><WAPhone speed={speed} onFormat={setFmt} /></Reveal>
              <Reveal delay={3} style={{display:"flex",flexDirection:"column",gap:14}}>
                <Bene ic="spark" h="IA confirma na hora" p="Cada lançamento volta com valor, categoria e data — você confere e segue." />
                <Bene ic="bell" h="Lembretes na conversa" p="Contas a vencer e o resumo do mês chegam direto no seu WhatsApp." />
                <Bene ic="check" h="Zero fricção" p="Nada de abrir app, achar a tela e digitar. Só mandar mensagem." />
              </Reveal>
            </div>
          </>
        ) : (
          <div style={{display:"grid",gridTemplateColumns:"1fr 1.05fr",gap:54,alignItems:"center"}} className="wa-2col">
            <div>
              {Head}
              <div style={{marginTop:30}}>{Cards}</div>
            </div>
            <Reveal delay={1} style={{display:"flex",justifyContent:"center",position:"relative"}}>
              <div className="float-tag" style={{top:18,right:0}}>🎙 Áudio transcrito</div>
              <div className="float-tag" style={{bottom:60,left:-8,animationDelay:"1.6s"}}>📄 Nota lida pela IA</div>
              <WAPhone speed={speed} onFormat={setFmt} />
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}

function Bene({ ic, h, p }) {
  const map = { spark: window.DnIco.IcSpark, bell: Icons.bell, check: Icons.check };
  const Ic = map[ic];
  return (
    <div className="fmt">
      <div className="fmt-ic"><Ic s={22}/></div>
      <div><h4>{h}</h4><p>{p}</p></div>
    </div>
  );
}

window.Nav = Nav; window.Hero = Hero; window.WhatsAppSection = WhatsAppSection;
window.Dashboard = Dashboard; window.ProofStrip = ProofStrip;
