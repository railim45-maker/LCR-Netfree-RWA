import { Link } from "wouter";
import { ArrowRight, Sparkles, TreePine } from "lucide-react";
import { useState } from "react";

export default function NetFreeDeepDive() {
  const [activeFocusLevel, setActiveFocusLevel] = useState(1);
  const [lensLevels, setLensLevels] = useState([
    { level: 1, maxSteps: 1, currentSteps: 0, currentRad: 170, displayDots: 6, label: "L1 - Radice (6 Settori)" },
    { level: 2, maxSteps: 6, currentSteps: 0, currentRad: 190, displayDots: 36, label: "L2 - Sacrale (36 Settori)" },
    { level: 3, maxSteps: 6, currentSteps: 0, currentRad: 210, displayDots: 108, label: "L3 - Plesso (216 Settori)" },
    { level: 4, maxSteps: 6, currentSteps: 0, currentRad: 220, displayDots: 180, label: "L4 - Cuore (1.296 Set.)" },
    { level: 5, maxSteps: 6, currentSteps: 0, currentRad: 230, displayDots: 240, label: "L5 - Gola (7.776 Set.)" },
    { level: 6, maxSteps: 6, currentSteps: 0, currentRad: 240, displayDots: 300, label: "L6 - Terzo Occhio" },
    { level: 7, maxSteps: 6, currentSteps: 0, currentRad: 250, displayDots: 360, label: "L7 - Corona Alpha" }
  ]);

  const chakraColors = ['#E53E3E', '#DD6B20', '#D69E2E', '#38A169', '#3182CE', '#805AD5', '#FFFFFF'];
  const cx = 240;
  const cy = 240;

  const injectLensStep = (amount: number) => {
    setLensLevels(prevLevels => {
      let newLevels = prevLevels.map(lvl => ({ ...lvl }));
      let newFocus = activeFocusLevel;

      for (let k = 0; k < amount; k++) {
        let target = newLevels.find(s => s.currentSteps < s.maxSteps);
        if (!target) break;

        target.currentSteps++;

        if (target.currentSteps === target.maxSteps && newFocus === target.level && newFocus < 7) {
          newFocus++;
        }
      }
      setActiveFocusLevel(newFocus);
      return newLevels;
    });
  };

  const injectFullLensLevel = () => {
    let target = lensLevels.find(s => s.currentSteps < s.maxSteps);
    if (!target) return;
    let rimasti = target.maxSteps - target.currentSteps;
    injectLensStep(rimasti);
  };

  const hardResetLens = () => {
    setLensLevels(prev => prev.map(s => ({ ...s, currentSteps: 0 })));
    setActiveFocusLevel(1);
  };

  return (
    <div className="min-h-screen relative text-stone-800 space-y-20 pb-36 overflow-hidden bg-[#fcfbf9]">
      
      {/* SFONDO LUMINOSO E GRADIENTI ARMONICI */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gradient-to-r from-emerald-100/50 via-amber-100/40 to-sky-100/40 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute inset-0 z-0 opacity-30 bg-cover bg-center bg-fixed mix-blend-overlay filter brightness-110 pointer-events-none" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop')` }} />

      {/* HEADER DI NAVIGAZIONE INTERNA */}
      <header className="container max-w-5xl mx-auto px-6 pt-10 relative z-10">
        <div className="flex items-center justify-between p-4 rounded-3xl bg-white/85 border border-stone-200/80 shadow-sm backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-sm border border-emerald-100">🌿</span>
            <span className="font-bold text-xs uppercase tracking-wider text-stone-700 font-serif">Percorso Informativo • NetFree</span>
          </div>
          <nav className="flex items-center gap-4 text-xs font-semibold">
            <Link href="/">
              <span className="text-stone-600 hover:text-stone-900 cursor-pointer transition-colors">← Torna alla Home</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* CONTENUTO PRINCIPALE */}
      <main className="container max-w-5xl mx-auto px-6 space-y-12 relative z-10">
        
        {/* TITOLO E INTRODUZIONE */}
        <div className="text-center space-y-4 pt-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-medium tracking-wide shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Il Nuovo Concetto di Network
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-stone-900 leading-tight">
            NetFree: L'Infrastruttura Sintropica e Sociale
          </h1>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed font-light">
            L'unione di <strong>"Net"</strong> (la rete di persone) e <strong>"Free"</strong> (la libertà multidimensionale). Il passaggio definitivo dalla griglia dissipativa del vecchio mondo alla rete sintropica di coerenza collettiva.
          </p>
        </div>

        {/* CORPO DELL'APPROFONDIMENTO: LE LOGICHE STRUTTURALI */}
        <div className="rounded-3xl border border-stone-200/90 bg-white/95 backdrop-blur-xl p-8 md:p-12 shadow-xl space-y-10">
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center font-bold text-xs font-mono">1</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">La Struttura Frattale e il Sistema del Seme (Matrice 6-36-216)</h3>
            </div>
            <p className="text-stone-600 leading-relaxed pl-11 text-sm md:text-base font-light">
              La comunità si sviluppa tramite una divisione armonica e matematica basata sul <strong>Sistema del Seme (matrice 6-36-216)</strong>. Ogni partecipante riceve in dono il seme energetico iniziale (Chiave Railim)[cite: 1].
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center font-bold text-xs font-mono">2</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">La Regola della Tripartizione Rigida dei Flussi</h3>
            </div>
            <p className="text-stone-600 leading-relaxed pl-11 text-sm md:text-base font-light">
              Ogni consumo e risorsa primaria si scompone matematicamente in tre direzioni sinergiche: benessere individuale, auto-consumo di distretto e dono per alimentare i nuovi ingressi.
            </p>
          </div>

        </div>

        {/* ========================================================= */}
        {/* DASHBOARD INTERATTIVA: QUANTUM LENS MATRIX (6x6 e Matrice) */}
        {/* ========================================================= */}
        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 md:p-8 text-slate-100 shadow-2xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-purple-400 text-[10px] font-mono tracking-widest">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
              LCR-NETFREE QUANTUM LENS PROTOCOLO v6.0
            </div>
            <h3 className="text-xl md:text-2xl font-black text-white font-mono tracking-tight">
              LENTE FRATTALE AD ATTACCO RADIALE E POPOLAMENTO
            </h3>
            <p className="text-slate-400 text-xs font-light">
              Visualizza in tempo reale come il livello in corso di popolamento viene magnificato, mentre le orbite sature collassano verso il nucleo cristallino centrale.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-4">
            
            {/* PANNELLO DI CONTROLLO E MONITOR (SINISTRA) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              
              <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 backdrop-blur-md space-y-2">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Frequenze Relazionali</h4>
                  <span className="text-[9px] font-mono bg-purple-950 text-purple-400 px-2 py-0.5 rounded border border-purple-500/20">
                    LENTE SU: L{activeFocusLevel}
                  </span>
                </div>
                
                <div className="space-y-1.5 font-mono text-xs max-h-[260px] overflow-y-auto pr-1">
                  {lensLevels.map((lvl) => {
                    const isFocused = lvl.level === activeFocusLevel;
                    const isPast = lvl.level < activeFocusLevel;
                    const borderColor = chakraColors[lvl.level - 1];
                    
                    return (
                      <div 
                        key={lvl.level}
                        className={`p-2 bg-slate-950/60 rounded-xl border border-slate-800/60 flex justify-between items-center border-l-4 transition-all ${isPast || isFocused ? 'opacity-100' : 'opacity-40'}`}
                        style={{ borderLeftColor: borderColor }}
                      >
                        <span className={`${isFocused ? 'text-white font-bold' : 'text-slate-300'} text-[11px]`}>{lvl.label}</span>
                        <span className={`font-bold ${isPast || lvl.currentSteps === lvl.maxSteps ? 'text-white' : 'text-slate-400'}`}>
                          {lvl.currentSteps} / {lvl.maxSteps} passi
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* PULSANTI DI INIEZIONE PASSI */}
              <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 backdrop-blur-md space-y-2.5">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Iniezione per Sotto-Sestina</h4>
                <div className="space-y-2">
                  <button 
                    onClick={() => injectLensStep(1)} 
                    className="w-full py-2.5 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 rounded-xl text-xs font-mono font-bold text-purple-300 tracking-wider transition-all cursor-pointer shadow-lg"
                  >
                    [ +1 Punto per Sotto-Settore ]
                  </button>
                  <button 
                    onClick={injectFullLensLevel} 
                    className="w-full py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl text-[11px] font-mono text-cyan-400 transition-all cursor-pointer"
                  >
                    ++ Satura Orbita in Focus
                  </button>
                  <button 
                    onClick={hardResetLens} 
                    className="w-full py-1.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-xl text-[10px] font-mono text-red-400 transition-all cursor-pointer"
                  >
                    Reset Sistema
                  </button>
                </div>
              </div>

            </div>

            {/* REATTORE VISIVO SVG (DESTRA) */}
            <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800/60 rounded-2xl p-4 flex flex-col items-center justify-center relative shadow-inner overflow-hidden min-h-[440px]">
              <div className="absolute top-3 right-4 text-[9px] font-mono text-slate-500 tracking-widest">
                LENS_MODE: ACTIVE_FOCUS // RAYS: 6
              </div>
              <svg width="460" height="460" className="block overflow-visible">
                <circle cx={cx} cy={cy} r="8" fill="#ffffff" style={{ filter: 'drop-shadow(0 0 12px rgba(255,255,255,1))' }} />

                {lensLevels.map(lvl => {
                  let radius = lvl.level < activeFocusLevel ? 15 + (lvl.level * 20) : (lvl.level === activeFocusLevel ? 165 : 165 + ((lvl.level - activeFocusLevel) * 22));
                  const isFocused = lvl.level === activeFocusLevel;

                  return (
                    <g key={lvl.level}>
                      <circle
                        cx={cx}
                        cy={cy}
                        r={radius}
                        fill="none"
                        stroke={isFocused ? '#4b5563' : '#1e293b'}
                        strokeWidth={isFocused ? '0.8' : '0.3'}
                      />
                      {Array.from({ length: lvl.displayDots }).map((_, i) => {
                        const angle = (i * 2 * Math.PI) / lvl.displayDots;
                        const nodeX = cx + radius * Math.cos(angle);
                        const nodeY = cy + radius * Math.sin(angle);
                        const macroSector = Math.min(Math.floor((i / lvl.displayDots) * 6), 5);
                        const dotColor = chakraColors[macroSector];
                        const nodePositionInSubsector = i % 6;
                        const isActive = nodePositionInSubsector < lvl.currentSteps || lvl.level < activeFocusLevel;
                        const dotRadius = isFocused ? 5 : (lvl.level < activeFocusLevel ? 2.2 : 1);

                        return (
                          <circle
                            key={i}
                            cx={nodeX}
                            cy={nodeY}
                            r={dotRadius}
                            fill={isActive ? dotColor : '#090d16'}
                            stroke={isActive ? 'none' : '#1e293b'}
                            strokeWidth="0.15"
                            style={isActive && isFocused ? { filter: `drop-shadow(0 0 6px ${dotColor})` } : undefined}
                          />
                        );
                      })}
                    </g>
                  );
                })}
              </svg>
            </div>

          </div>

        </div>

        {/* CONCLUSIONE E NAVIGAZIONE */}
        <div className="p-8 md:p-10 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/60 via-white to-emerald-50/30 space-y-4 text-center shadow-lg backdrop-blur-md">
          <h3 className="text-xl font-bold font-serif text-stone-900">In sintesi</h3>
          <p className="text-xs md:text-sm text-stone-600 max-w-xl mx-auto font-light leading-relaxed">
            NetFree trasforma il successo individuale in uno strumento per il benessere collettivo, alimentando un ciclo virtuoso di abbondanza condivisa[cite: 1].
          </p>
          <div className="pt-2">
            <Link href="/privato/economia-dono">
              <button className="bg-stone-900 hover:bg-stone-800 text-stone-50 font-medium px-8 py-3.5 rounded-full text-xs md:text-sm inline-flex items-center gap-2 shadow-md transition-all transform hover:scale-105 cursor-pointer">
                Approfondisci l'Economia del Dono <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>

      </main>

    </div>
  );
}
