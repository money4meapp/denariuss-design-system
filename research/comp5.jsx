/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakSelect, TweakSlider, TweakToggle,
   Nav, Hero, ProofStrip, WhatsAppSection, Steps, Features, Pricing, Bonus, Security, FinalCTA, Footer */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "whatsapp",
  "waVariant": "side",
  "speed": 1,
  "glow": true,
  "headingFont": "Sora"
}/*EDITMODE-END*/;

const FONTS = {
  "Sora": "'Sora', sans-serif",
  "Space Grotesk": "'Space Grotesk', sans-serif",
  "Plus Jakarta": "'Plus Jakarta Sans', sans-serif",
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.style.setProperty("--font-display", FONTS[t.headingFont] || FONTS.Sora);
  }, [t.headingFont]);

  React.useEffect(() => {
    document.body.classList.toggle("glow-off", !t.glow);
  }, [t.glow]);

  return (
    <div>
      <Nav />
      <Hero variant={t.heroVariant} speed={t.speed} />
      <ProofStrip />
      <WhatsAppSection variant={t.waVariant} speed={t.speed} />
      <Steps />
      <Features />
      <Pricing />
      <Bonus />
      <Security />
      <FinalCTA />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Layout" />
        <TweakRadio label="Hero" value={t.heroVariant}
          options={["whatsapp","dashboard","split"]}
          onChange={(v)=>setTweak("heroVariant", v)} />
        <TweakRadio label="Seção WhatsApp" value={t.waVariant}
          options={["side","stacked"]}
          onChange={(v)=>setTweak("waVariant", v)} />
        <TweakSection label="Movimento" />
        <TweakSlider label="Velocidade da conversa" value={t.speed} min={0.6} max={1.8} step={0.1} unit="×"
          onChange={(v)=>setTweak("speed", v)} />
        <TweakToggle label="Brilho verde (glow)" value={t.glow}
          onChange={(v)=>setTweak("glow", v)} />
        <TweakSection label="Tipografia" />
        <TweakSelect label="Fonte dos títulos" value={t.headingFont}
          options={["Sora","Space Grotesk","Plus Jakarta"]}
          onChange={(v)=>setTweak("headingFont", v)} />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
