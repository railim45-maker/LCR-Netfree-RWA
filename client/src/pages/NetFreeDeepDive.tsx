import { Link } from "wouter";
import { ArrowRight, Sparkles, TreePine, Users, Network, ShieldCheck, Sun, Coins } from "lucide-react";
import { useState } from "react";

export default function NetFreeDeepDive() {
  const [activeFocusLevel, setActiveFocusLevel] = useState(1);
  const [lensLevels, setLensLevels] = useState([
    { level: 1, maxSteps: 1, currentSteps: 0, currentRad: 170, displayDots: 6, label: "Livello 1 (Radice)", countNum: "1", peopleCount: "1 Persona (Tu)", desc: "Il Seme iniziale / Origine del flusso" },
    { level: 2, maxSteps: 6, currentSteps: 0, currentRad: 190, displayDots: 36, label: "Livello 2 (Propagazione)", countNum: "6", peopleCount: "6 Persone", desc: "Il cerchio ristretto di cura diretta" },
    { level: 3, maxSteps: 6, currentSteps: 0, currentRad: 210, displayDots: 108, label: "Livello 3 (Sviluppo)", countNum: "36", peopleCount: "36 Nodi", desc: "Prima propagazione organica nei bio-distretti" },
    { level: 4, maxSteps: 6, currentSteps: 0, currentRad: 220, displayDots: 180, label: "Livello 4 (Espansione)", countNum: "216", peopleCount: "216 Nodi", desc: "Rete interconnessa di distretto" },
    { level: 5, maxSteps: 6, currentSteps: 0, currentRad: 230, displayDots: 240, label: "Livello 5 (Foresta)", countNum: "1.296", peopleCount: "1.296 Nodi", desc: "Comunità estesa e autonoma" },
    { level: 6, maxSteps: 6, currentSteps: 0, currentRad: 240, displayDots: 300, label: "Livello 6 (Sintropia)", countNum: "7.776", peopleCount: "7.776 Nodi", desc: "Coerenza diffusa su vasta scala" },
    { level: 7, maxSteps: 6, currentSteps: 0, currentRad: 250, displayDots: 360, label: "Livello 7 (Corona)", countNum: "46.656+", peopleCount: "46.656+ Nodi", desc: "Ecosistema frattale completo" }
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
      <div className="absolute inset-0 z-0 opacity-25 bg-cover bg-center bg-fixed mix-blend-overlay filter brightness-110 pointer-events-none" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop')` }} />

      {/* HEADER DI NAVIGAZIONE INTERNA */}
      <header className="container max-w-5xl mx-auto px-6 pt-10 relative z-10">
        <div className="flex items-center justify-between p-4 rounded-3xl bg-white/85 border border-stone-200/80 shadow-sm backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-sm border border-emerald-100">🌿</span>
            <span className="font-bold text-xs uppercase tracking-wider text-stone-700 font-serif">Il Giardino Luminoso • NetFree</span>
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium tracking-wide shadow-sm font-serif">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" /> L'Economia del Dono e la Moltiplicazione del Valore
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-stone-900 leading-tight">
            NetFree: La Rete e la Libertà
          </h1>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed font-light">
            Il termine NetFree nasce dall'unione di due concetti fondamentali: <strong>"Net"</strong> (la rete di persone) e <strong>"Free"</strong> (la libertà)[cite: 1]. Un percorso di libertà, crescita e responsabilità che ridefinisce le relazioni umane oltre la logica estrattiva[cite: 1].
          </p>
        </div>

        {/* CORPO DELL'APPROFONDIMENTO: TESTI E INFOGRAFICHE STILE "GIARDINO LUMINOSO" */}
        <div className="rounded-3xl border border-stone-200/90 bg-white/95 backdrop-blur-xl p-8 md:p-12 shadow-xl space-y-12">
          
          {/* 1. LA STRUTTURA ORGANICA */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-stone-100 pb-3">
              <span className="w-8 h-8 rounded-full bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center font-bold text-xs font-mono">1</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">La Struttura Organica: Il Ciclo del Seme</h3>
            </div>
            
            <p className="text-stone-600 leading-relaxed text-sm md:text-base font-light">
              Il funzionamento di NetFree è descritto attraverso la metafora del seme, che rappresenta l'inizio di ogni trasformazione[cite: 1]. L'ingresso nel sistema non è un debito, ma un seme ricevuto in dono dai "silos" della comunità, azzerando i rischi[cite: 1].
            </p>

            {/* Infografica a supporto (Stile Seme / Chiave Railim) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-[#fcfbf9] border border-amber-200/60 shadow-sm space-y-2 relative">
                <span className="text-amber-700 font-mono text-[10px] font-bold uppercase tracking-wider">Il Dono</span>
                <h4 className="font-bold text-stone-900 text-sm font-serif">Chiave Railim</h4>
                <p className="text-xs text-stone-600 font-light">Accoglienza senza pressione economica[cite: 1].</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#fcfbf9] border border-amber-200/60 shadow-sm space-y-2 relative">
                <span className="text-amber-700 font-mono text-[10px] font-bold uppercase tracking-wider">La Scelta</span>
                <h4 className="font-bold text-stone-900 text-sm font-serif">Coltivazione</h4>
                <p className="text-xs text-stone-600 font-light">Impegno a piantare, curare e condividere[cite: 1].</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#fcfbf9] border border-amber-200/60 shadow-sm space-y-2 relative">
                <span className="text-amber-700 font-mono text-[10px] font-bold uppercase tracking-wider">La Rete</span>
                <h4 className="font-bold text-stone-900 text-sm font-serif">Cura di ~6 Persone</h4>
                <p className="text-xs text-stone-600 font-light">Il centro del sistema sono le persone, non la struttura[cite: 1].</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#fcfbf9] border border-amber-200/60 shadow-sm space-y-2 relative">
                <span className="text-amber-700 font-mono text-[10px] font-bold uppercase tracking-wider">I Frutti</span>
                <h4 className="font-bold text-stone-900 text-sm font-serif">Nuova Abbondanza</h4>
                <p className="text-xs text-stone-600 font-light">Generazione di prosperità diffusa e sostenibile[cite: 1].</p>
              </div>
            </div>
          </div>

          {/* 2. IL MODELLO ECONOMICO */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-stone-100 pb-3">
              <span className="w-8 h-8 rounded-full bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center font-bold text-xs font-mono">2</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">Il Modello Economico: L'Economia del Dono</h3>
            </div>
            
            <p className="text-stone-600 leading-relaxed text-sm md:text-base font-light">
              L'intero progetto si fonda sul principio dell'Economia del Dono, che mira a creare abbondanza collettiva condividendo il surplus[cite: 1]. Si collabora per costruire valore reale riducendo al minimo i rischi e azzerando la competizione[cite: 1].
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-6 rounded-2xl bg-amber-50/40 border border-amber-200/60 space-y-2">
                <div className="text-amber-800 font-bold text-base">🌱 Restituire (Sostenibilità)</div>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Una parte dell'abbondanza generata torna ai "silos" del sistema per finanziare nuovi ingressi ed espandere la comunità[cite: 1].
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-50/40 border border-emerald-200/60 space-y-2">
                <div className="text-emerald-800 font-bold text-base">🪙 Valore Condiviso</div>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Tokenizzazione e risorse digitalizzate per coprire i costi iniziali senza gravare sui partecipanti[cite: 1].
                </p>
              </div>
            </div>
          </div>

          {/* 3. LA FILOSOFIA OPERATIVA */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-stone-100 pb-3">
              <span className="w-8 h-8 rounded-full bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center font-bold text-xs font-mono">3</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">La Filosofia Operativa: "Operare nella Luce"</h3>
            </div>
            
            <p className="text-stone-600 leading-relaxed text-sm md:text-base font-light">
              NetFree seleziona rigorosamente partner e opportunità basandosi su criteri etici rigorosi: azioni corrette, relazioni fondate sulla fiducia e nessuna promessa di arricchimento facile[cite: 1].
            </p>

            {/* Infografica a Colonne (Richiamo alle Colonne di Luce) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-center space-y-1">
                <span className="text-amber-700 font-bold text-xs">I. Etica</span>
                <p className="text-[11px] text-stone-600 font-light">Trasparenza e fiducia reciproca.</p>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-center space-y-1">
                <span className="text-amber-700 font-bold text-xs">II. Utilità Reale</span>
                <p className="text-[11px] text-stone-600 font-light">Miglioramento concreto della vita.</p>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-center space-y-1">
                <span className="text-amber-700 font-bold text-xs">III. Sostenibilità</span>
                <p className="text-[11px] text-stone-600 font-light">Benefici duraturi nel tempo.</p>
              </div>
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-center space-y-1">
                <span className="text-amber-700 font-bold text-xs">IV. Inclusività</span>
                <p className="text-[11px] text-stone-600 font-light">Opportunità accessibili a tutti.</p>
              </div>
            </div>
          </div>

          {/* 4. IL PERCORSO DI CRESCITA (Tazzina e Oceano) */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-stone-100 pb-3">
              <span className="w-8 h-8 rounded-full bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center font-bold text-xs font-mono">4</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">Il Percorso di Crescita: Dalla Tazzina all'Oceano</h3>
            </div>
            
            <p className="text-stone-600 leading-relaxed text-sm md:text-base font-light">
              NetFree non è solo un sistema economico, ma un percorso formativo progressivo. Se l'abbondanza arriva quando la consapevolezza è piccola, il sistema viene travolto (la tazzina rotta); se la persona cresce attraverso la formazione, una grande opportunità diventa una nuova onda (l'oceano)[cite: 1].
            </p>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-50/50 via-stone-50 to-emerald-50/50 border border-amber-200/50 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <span className="text-[10px] font-mono text-amber-800 font-bold uppercase tracking-wider">Prerequisito fondamentale</span>
                <h4 className="text-base font-bold font-serif text-stone-900">La Crescita Personale precede quella Economica</h4>
              </div>
              <div className="flex items-center gap-3 shrink-0 font-mono text-xs text-stone-600">
                <span className="px-3 py-1.5 bg-white rounded-lg border border-stone-200 shadow-sm">☕ Tazzina (Consapevolezza)</span>
                <span>➔</span>
                <span className="px-3 py-1.5 bg-stone-900 text-white rounded-lg shadow-sm">🌊 Oceano (Opportunità)</span>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* DASHBOARD INTERATTIVA (REATTORE RADIALE & ALBERO A PIANI) */}
        {/* ========================================================================= */}
        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 md:p-8 text-slate-100 shadow-2xl space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-[10px] font-mono tracking-widest">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              MATRICE FRATTALE DEL GIARDINO LUMINOSO
            </div>
            <h3 className="text-xl md:text-2xl font-black text-white font-mono tracking-tight">
              REATTORE CONCENTRICO E SCHEMA AD ALBERO A PIANI
            </h3>
            <p className="text-slate-400 text-xs font-light">
              Visualizza in tempo reale il popolamento della comunità basato sulla cura di ~6 persone per nodo.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button 
              onClick={() => injectLensStep(1)} 
              className="px-5 py-2.5 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 rounded-xl text-xs font-mono font-bold text-amber-300 tracking-wider transition-all cursor-pointer shadow-lg"
            >
              [ +1 Passo / Sotto-Settore ]
            </button>
            <button 
              onClick={injectFullLensLevel} 
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl text-xs font-mono text-cyan-400 transition-all cursor-pointer"
            >
              ++ Satura Orbita Corrente
            </button>
            <button 
              onClick={hardResetLens} 
              className="px-4 py-2.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-xl text-xs font-mono text-red-400 transition-all cursor-pointer"
            >
              Reset Sistema
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-2">
            
            {/* REATTORE RADIALE SVG */}
            <div className="lg:col-span-6 bg-slate-900/40 border border-slate-800/60 rounded-2xl p-4 flex flex-col items-center justify-center relative shadow-inner overflow-hidden min-h-[480px]">
              <div className="absolute top-3 left-4 text-[9px] font-mono text-stone-400 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Reattore Concentrico
              </div>
              <svg width="420" height="420" className="block overflow-visible mt-4">
                <circle cx={cx} cy={cy} r="8" fill="#ffffff" style={{ filter: 'drop-shadow(0 0 12px rgba(255,255,255,1))' }} />

                {lensLevels.map(lvl => {
                  let radius = lvl.level < activeFocusLevel ? 15 + (lvl.level * 18) : (lvl.level === activeFocusLevel ? 150 : 150 + ((lvl.level - activeFocusLevel) * 20));
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
                      {Array.from({ length: Math.min(lvl.displayDots, 72) }).map((_, i) => {
                        const angle = (i * 2 * Math.PI) / Math.min(lvl.displayDots, 72);
                        const nodeX = cx + radius * Math.cos(angle);
                        const nodeY = cy + radius * Math.sin(angle);
                        const macroSector = Math.min(Math.floor((i / Math.min(lvl.displayDots, 72)) * 6), 5);
                        const dotColor = chakraColors[macroSector];
                        const nodePositionInSubsector = i % 6;
                        const isActive = nodePositionInSubsector < lvl.currentSteps || lvl.level < activeFocusLevel;
                        const dotRadius = isFocused ? 4.5 : (lvl.level < activeFocusLevel ? 2 : 1);

                        return (
                          <circle
                            key={i}
                            cx={nodeX}
                            cy={nodeY}
                            r={dotRadius}
                            fill={isActive ? dotColor : '#090d16'}
                            stroke={isActive ? 'none' : '#1e293b'}
                            strokeWidth="0.15"
                            style={isActive && isFocused ? { filter: `drop-shadow(0 0 5px ${dotColor})` } : undefined}
                          />
                        );
                      })}
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* ALBERO A PIANI CON CONTEGGI */}
            <div className="lg:col-span-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 backdrop-blur-md flex flex-col justify-between space-y-3">
              <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <TreePine className="w-3.5 h-3.5 text-amber-400" /> Schema ad Albero con Conteggi
                </span>
                <span className="text-[9px] font-mono bg-amber-950 text-amber-400 px-2 py-0.5 rounded border border-amber-500/20">
                  PIANI GERARCHICI
                </span>
              </div>

              <div className="space-y-2 font-mono text-xs max-h-[420px] overflow-y-auto pr-1">
                {lensLevels.map((lvl) => {
                  const isFocused = lvl.level === activeFocusLevel;
                  const isPast = lvl.level < activeFocusLevel;
                  const isCompleted = lvl.currentSteps === lvl.maxSteps;
                  const borderColor = chakraColors[lvl.level - 1];

                  return (
                    <div 
                      key={lvl.level}
                      className={`p-3 bg-slate-950/75 rounded-xl border border-slate-800/80 space-y-1.5 transition-all border-l-4 ${isPast || isFocused ? 'opacity-100' : 'opacity-40'}`}
                      style={{ borderLeftColor: borderColor }}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-slate-900 text-amber-300 font-bold rounded text-[11px] border border-amber-500/20">
                            [{lvl.countNum}]
                          </span>
                          <span className={`font-bold ${isFocused ? 'text-white' : 'text-slate-300'} text-xs`}>
                            {lvl.label} ➔ <span className="text-amber-400">{lvl.peopleCount}</span>
                          </span>
                        </div>
                        <span className={`text-[10px] px-2 py-0.5 rounded ${isCompleted ? 'bg-amber-950 text-amber-400 border border-amber-500/30' : 'bg-slate-900 text-slate-400'}`}>
                          {lvl.currentSteps} / {lvl.maxSteps} passi
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-400 font-light pl-7">{lvl.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

        {/* CONCLUSIONE E NAVIGAZIONE */}
        <div className="p-8 md:p-10 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/60 via-white to-emerald-50/30 space-y-4 text-center shadow-lg backdrop-blur-md">
          <h3 className="text-xl font-bold font-serif text-stone-900">In sintesi</h3>
          <p className="text-xs md:text-sm text-stone-600 max-w-xl mx-auto font-light leading-relaxed">
            "Ogni grande cambiamento inizia da un piccolo seme. La domanda non è quanto può crescere il seme, ma cosa può diventare un mondo in cui milioni di persone scelgono di coltivarlo insieme."
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
