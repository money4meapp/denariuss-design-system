/* global React, Reveal, CountUp, Icons */
const { useState: pS } = React;

/* ===================== COMO FUNCIONA ===================== */
function Steps() {
  const items = [
    { n:"1", h:"Crie sua conta", p:"Em segundos, no plano grátis. Seus dados ficam só com você." },
    { n:"2", h:"Mande uma mensagem", p:"Lance gastos por texto, áudio ou foto no WhatsApp — ou pelo app, como preferir." },
    { n:"3", h:"Veja para onde vai", p:"Acompanhe o resumo do mês e descubra com clareza onde dá pra economizar." },
  ];
  return (
    <section className="section-pad" id="como">
      <div className="wrap">
        <div className="section-head center" style={{marginBottom:54}}>
          <Reveal as="span" className="eyebrow"><span className="dot"/>Como funciona</Reveal>
          <Reveal as="h2" className="h-section" delay={1} style={{marginTop:20}}>Do caos à clareza em 3 passos</Reveal>
          <Reveal as="p" className="lead muted" delay={2} style={{marginTop:14}}>Sem fórmula complicada. Você começa hoje e já vê resultado no fim do mês.</Reveal>
        </div>
        <div className="steps">
          {items.map((s,i)=>(
            <Reveal className="card card-hover step" delay={i+1} key={i}>
              <div className="step-n">{s.n}</div>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ======================== RECURSOS ======================== */
function Features() {
  const feats = [
    { ic:"glance", h:"Visão geral do mês", p:"Entradas, saídas e saldo num único painel, com leitura clara do seu dinheiro." },
    { ic:"repeat", h:"Recorrentes e parcelados", p:"Lance uma vez — o Denariuss repete e projeta tudo automaticamente nos próximos meses." },
    { ic:"pie", h:"Gastos por categoria", p:"Seus lançamentos organizados pra você enxergar onde dá pra economizar." },
    { ic:"flow", h:"Fluxo futuro", p:"Uma prévia do que entra e sai nos próximos meses, sem surpresas no fim." },
    { ic:"bell", h:"Lembretes automáticos", p:"Avisos das suas contas e do seu mês para agir cedo e não deixar nada vencer." },
    { ic:"card", h:"Controle de cartões", p:"Faturas, limites e vencimentos numa visão fácil de acompanhar." },
  ];
  return (
    <section className="section-pad" id="recursos">
      <div className="wrap">
        <div className="section-head" style={{marginBottom:48,maxWidth:760}}>
          <Reveal as="span" className="eyebrow"><span className="dot"/>Recursos</Reveal>
          <Reveal as="h2" className="h-section" delay={1} style={{marginTop:20}}>Não é só registrar.<br/><span className="grad-green">É planejar o que vem.</span></Reveal>
          <Reveal as="p" className="lead muted" delay={2} style={{marginTop:14}}>A maioria dos apps só mostra o que você já gastou. O Denariuss te ajuda a planejar os próximos meses — orçamento, previsão e organização num só lugar.</Reveal>
        </div>
        <div className="feat-grid">
          {/* highlighted budget card spanning 2 */}
          <Reveal className="card card-hover feat wide" delay={1} style={{background:"linear-gradient(135deg, rgba(46,207,149,0.1), var(--card))",borderColor:"rgba(46,207,149,0.3)"}}>
            <div className="feat-ic"><Icons.budget s={22}/></div>
            <h3>Orçamento completo</h3>
            <p>Defina quanto pretende gastar por categoria, simule cenários e veja se vai fechar o mês no azul — <strong style={{color:"var(--ink)"}}>antes de ele acabar</strong>. É o que os apps que só monitoram gastos não fazem.</p>
          </Reveal>
          {feats.slice(0,1).map((f,i)=><FeatCard key={"a"+i} f={f} d={2}/>)}
          {feats.slice(1).map((f,i)=><FeatCard key={"b"+i} f={f} d={(i%3)+1}/>)}
        </div>
      </div>
    </section>
  );
}
function FeatCard({ f, d }) {
  const Ic = Icons[f.ic];
  return (
    <Reveal className="card card-hover feat" delay={d}>
      <div className="feat-ic"><Ic s={22}/></div>
      <h3>{f.h}</h3>
      <p dangerouslySetInnerHTML={{__html:f.p}} />
    </Reveal>
  );
}

/* ========================= PREÇOS ========================= */
function Pricing() {
  const [annual, setAnnual] = pS(true);
  const plans = [
    { name:"Free", tag:"Grátis para sempre", mo:"0,00", yr:"0,00", econ:"", bill:"Sem cartão de crédito",
      cta:"Começar grátis", pop:false,
      feats:["Dashboard básico","Movimentação simples (gastos e recebimentos)","Categorias essenciais"] },
    { name:"PRO", tag:"Mais completo", mo:"29,90", yr:"19,90", econ:"Economize R$ 120,00 por ano",
      bill:"Anual · R$ 238,80 cobrado uma vez", cta:"Escolher PRO", pop:true,
      feats:["Dashboard com análises financeiras","Importação de faturas e extratos","Orçamento completo (simulação e previsão)","Assistente com IA no WhatsApp e Telegram","Envio por áudio, imagem ou texto"] },
    { name:"Black Premium", tag:"Para PF + PJ", mo:"39,90", yr:"34,90", econ:"Economize R$ 60,00 por ano",
      bill:"Anual · R$ 418,80 cobrado uma vez", cta:"Assinar agora", pop:false,
      feats:["Tudo do PRO","2 perfis de uso (separe PF e PJ)","Perfis adicionais sob demanda","Open Finance (em breve)"] },
  ];
  return (
    <section className="section-pad" id="precos">
      <div className="wrap">
        <div className="section-head center" style={{marginBottom:36}}>
          <Reveal as="span" className="eyebrow"><span className="dot"/>Preços</Reveal>
          <Reveal as="h2" className="h-section" delay={1} style={{marginTop:20}}>Comece de graça.<br/>Evolua no seu ritmo.</Reveal>
          <Reveal as="p" className="lead muted" delay={2} style={{marginTop:14}}>Mais completo que apps que só monitoram gastos — a partir de R$ 19,90/mês no plano anual.</Reveal>
        </div>
        <Reveal className="center" delay={1} style={{marginBottom:42,display:"flex",justifyContent:"center",alignItems:"center",gap:14,flexWrap:"wrap"}}>
          <div className="toggle">
            <button className={annual?"on":""} onClick={()=>setAnnual(true)}>Anual</button>
            <button className={!annual?"on":""} onClick={()=>setAnnual(false)}>Mensal</button>
          </div>
          {annual && <span className="save-pill">🟢 2 meses grátis no anual</span>}
        </Reveal>
        <div className="plans">
          {plans.map((p,i)=>(
            <Reveal className={"card plan"+(p.pop?" pop":"")} delay={i+1} key={i}>
              {p.pop && <div className="plan-badge">Mais popular</div>}
              <div className="plan-name">{p.name}</div>
              <div className="plan-tag">{p.tag}</div>
              <div className="plan-price">R$ {annual?p.yr:p.mo}<small> /mês</small></div>
              <div className="plan-econ">{annual?p.econ:""}</div>
              <div className="plan-bill">{annual?p.bill:(p.name==="Free"?"Sempre grátis":"Cobrança mensal, cancele quando quiser")}</div>
              <ul>
                {p.feats.map((f,j)=><li key={j}><Icons.check s={17} sw={2.6}/>{f}</li>)}
              </ul>
              <a href="#" className={"btn "+(p.pop?"btn-primary":"btn-ghost")}>{p.cta}</a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= BÔNUS ========================= */
function Bonus() {
  const mods = [
    ["Módulo 1","Organize seu fluxo de caixa em 30 minutos"],
    ["Módulo 2","Corte gastos sem abrir mão do que importa"],
    ["Módulo 3","Tesouro, CDB e Fundos — o que escolher primeiro"],
  ];
  return (
    <section className="section-pad">
      <div className="wrap">
        <Reveal className="card bonus" style={{background:"linear-gradient(135deg, rgba(46,207,149,0.08), var(--card))",borderColor:"rgba(46,207,149,0.25)"}}>
          <div>
            <span className="eyebrow" style={{marginBottom:18}}>🎁 Bônus gratuito</span>
            <h2 className="h-sub" style={{fontSize:"clamp(26px,3.4vw,38px)",marginTop:16,lineHeight:1.1}}>Do caos financeiro ao<br/><span className="grad-green">primeiro investimento</span></h2>
            <p className="lead muted" style={{marginTop:14}}>Um mini-curso para acompanhar sua jornada no Denariuss: em menos de 2 horas você organiza as finanças do zero e dá o primeiro passo nos investimentos — mesmo que hoje sobre R$ 0 no fim do mês.</p>
            <div className="bonus-mods">
              {mods.map(([m,t],i)=>(<div className="m" key={i}><Icons.arrowR s={18} style={{color:"var(--green)",marginTop:2}}/><span><b>{m}:</b> {t}</span></div>))}
            </div>
          </div>
          <form className="card" style={{padding:26,background:"rgba(0,0,0,0.25)"}} onSubmit={(e)=>e.preventDefault()}>
            <h3 className="h-sub" style={{fontSize:21,marginBottom:16}}>Quero minha vaga gratuita</h3>
            <div className="lead-form">
              <input placeholder="Nome completo" />
              <input type="email" placeholder="Melhor e-mail" />
              <select defaultValue=""><option value="" disabled>Qual seu maior desafio?</option><option>Sair das dívidas</option><option>Organizar meus gastos</option><option>Começar a investir</option><option>Aumentar minha renda</option></select>
              <button className="btn btn-primary" style={{width:"100%",marginTop:4}}>Garantir acesso gratuito <Icons.arrowR s={18}/></button>
              <p className="muted" style={{fontSize:12.5,textAlign:"center"}}>Zero spam. Cancele quando quiser.</p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

/* ======================= SEGURANÇA ======================= */
function Security() {
  const items = [
    { ic:"lock", h:"Dados criptografados", p:"As informações trafegam por conexão segura (HTTPS) e ficam armazenadas de forma criptografada." },
    { ic:"shield", h:"Você no controle (LGPD)", p:"Seus dados são seus: exporte ou exclua sua conta quando quiser, seguindo a LGPD." },
    { ic:"nobank", h:"Sem acesso ao seu banco", p:"Você registra o que quiser. Nunca pedimos a senha da sua conta bancária." },
  ];
  return (
    <section className="section-pad">
      <div className="wrap">
        <div className="section-head center" style={{marginBottom:46}}>
          <Reveal as="span" className="eyebrow"><Icons.lock s={14}/> Segurança &amp; Privacidade</Reveal>
          <Reveal as="h2" className="h-section" delay={1} style={{marginTop:20}}>Seus dados financeiros, protegidos</Reveal>
          <Reveal as="p" className="lead muted" delay={2} style={{marginTop:14}}>Lidar com dinheiro exige confiança. Veja, de forma concreta, como cuidamos disso.</Reveal>
        </div>
        <div className="sec-grid">
          {items.map((s,i)=>{ const Ic = Icons[s.ic];
            return (
              <Reveal className="card card-hover feat" delay={i+1} key={i}>
                <div className="feat-ic"><Ic s={22}/></div>
                <h3>{s.h}</h3><p>{s.p}</p>
              </Reveal>
            );})}
        </div>
      </div>
    </section>
  );
}

/* ====================== FINAL CTA ====================== */
function FinalCTA() {
  return (
    <section className="section-pad" style={{paddingTop:0}}>
      <div className="wrap">
        <Reveal className="final">
          <h2 className="h-section" style={{maxWidth:760,margin:"0 auto"}}>Pronto para saber para onde<br/>seu dinheiro vai?</h2>
          <p className="lead muted" style={{maxWidth:560,margin:"18px auto 0"}}>Crie sua conta grátis e organize o mês em poucos minutos. Seu primeiro gasto pode ser uma mensagem no WhatsApp.</p>
          <div style={{display:"flex",gap:14,justifyContent:"center",marginTop:34,flexWrap:"wrap"}}>
            <a href="#" className="btn btn-primary btn-lg">Criar conta grátis <Icons.arrowR s={18}/></a>
            <a href="#whatsapp" className="btn btn-ghost btn-lg"><Icons.chat s={18}/> Ver o WhatsApp em ação</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ========================= FOOTER ========================= */
function Footer() {
  const cols = [
    ["Produto",[["WhatsApp","#whatsapp"],["Recursos","#recursos"],["Preços","#precos"],["Como funciona","#como"]]],
    ["Empresa",[["Sobre nós","#"],["Blog","#"],["Contato","#"]]],
    ["Legal",[["Privacidade","#"],["Termos de uso","#"],["Cookies","#"],["LGPD","#"]]],
  ];
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-col">
            <img src={(typeof window !== "undefined" && window.__resources && window.__resources.logo) || "assets/denariuss-logo.png"} alt="Denariuss" style={{height:24,marginBottom:16}} />
            <p className="muted" style={{fontSize:14.5,maxWidth:300}}>Controle financeiro de verdade, para quem quer organizar os gastos e decidir melhor — com clareza.</p>
            <div className="chip" style={{marginTop:18}}>🔒 Dados criptografados</div>
          </div>
          {cols.map(([h,links],i)=>(
            <div className="foot-col" key={i}>
              <h5>{h}</h5>
              {links.map(([t,href],j)=><a href={href} key={j}>{t}</a>)}
            </div>
          ))}
        </div>
        <div className="foot-bottom">
          <span className="muted" style={{fontSize:13.5}}>© 2026 Denariuss. Todos os direitos reservados. Indaiatuba, SP — Brasil.</span>
          <div className="socials">
            <a href="#" aria-label="Instagram"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg></a>
            <a href="#" aria-label="LinkedIn"><svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.5 8h4V24h-4zM8 8h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2C19.6 8 21 10 21 14v10h-4v-9c0-2.1-.8-3.2-2.3-3.2-1.3 0-2 .9-2.35 1.8-.13.3-.16.75-.16 1.2V24H8z"/></svg></a>
            <a href="#" aria-label="YouTube"><svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.5a3 3 0 0 0-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 0 0 1 7.5 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1C5 19 12 19 12 19s7 0 8.9-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23.5 12 31 31 0 0 0 23 7.5zM9.8 15.3V8.7l5.7 3.3z"/></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Steps, Features, Pricing, Bonus, Security, FinalCTA, Footer });
