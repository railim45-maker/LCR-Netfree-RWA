import { Link } from "wouter";
import { ArrowRight, Sparkles, TreePine, Users, Network, Gift, ShieldCheck, Sun, Coins } from "lucide-react";
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
            NetFree: La Rete e la Libertà
          </h1>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed font-light">
            Il termine NetFree nasce dall'unione di due concetti fondamentali: <strong>"Net"</strong> (rete di persone) e <strong>"Free"</strong> (libertà)[cite: 1]. Si definisce come un nuovo concetto di network che promuove la crescita, la collaborazione, la consapevolezza e la responsabilità individuale[cite: 1]. Il progetto risponde alle sfide moderne offrendo un percorso verso la libertà finanziaria e personale[cite: 1].
          </p>
        </div>

        {/* CORPO DELL'APPROFONDIMENTO: PILASTRI ORIGINARI CON INFOGRAFICHE VISIVE */}
        <div className="rounded-3xl border border-stone-200/90 bg-white/95 backdrop-blur-xl p-8 md:p-12 shadow-xl space-y-12">
          
          {/* 1. LA STRUTTURA ORGANICA */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-stone-100 pb-3">
              <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center font-bold text-xs font-mono">1</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">La Struttura Organica: Il Ciclo del Seme</h3>
            </div>
            <p className="text-stone-600 leading-relaxed text-sm md:text-base font-light">
              Il funzionamento di NetFree è descritto attraverso la metafora del seme, che rappresenta l'inizio di ogni trasformazione[cite: 1]:
            </p>
            
            {/* Infografica Visiva - Ciclo del Seme */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
                <span className="text-emerald-700 font-mono text-xs font-bold">FASE A</span>
                <h4 className="font-bold text-stone-900 text-sm">Chiave Railim</h4>
                <p className="text-xs text-stone-600 font-light">Ogni partecipante riceve in dono un seme simbolico iniziale[cite: 1].</p>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
                <span className="text-emerald-700 font-mono text-xs font-bold">FASE B</span>
                <h4 className="font-bold text-stone-900 text-sm">Coltivazione</h4>
                <p className="text-xs text-stone-600 font-light">Responsabilità di far crescere il valore ricevuto e accettare supporto[cite: 1].</p>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
                <span className="text-emerald-700 font-mono text-xs font-bold">FASE C</span>
                <h4 className="font-bold text-stone-900 text-sm">Condivisione (6)</h4>
                <p className="text-xs text-stone-600 font-light">Condivisione con un cerchio di almeno sei persone per una crescita organica[cite: 1].</p>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
                <span className="text-emerald-700 font-mono text-xs font-bold">FASE D</span>
                <h4 className="font-bold text-stone-900 text-sm">I Frutti</h4>
                <p className="text-xs text-stone-600 font-light">Generazione di nuovi semi e prosperità individuale[cite: 1].</p>
              </div>
            </div>
          </div>

          {/* 2. IL MODELLO ECONOMICO */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-stone-100 pb-3">
              <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center font-bold text-xs font-mono">2</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">Il Modello Economico: L'Economia del Dono</h3>
            </div>
            <p className="text-stone-600 leading-relaxed text-sm md:text-base font-light">
              L'intero progetto si fonda sulla condivisione del surplus per creare abbondanza collettiva[cite: 1]:
            </p>

            {/* Infografica Visiva - Economia del Dono */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-amber-50/40 border border-amber-100 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">🤝</div>
                <div className="space-y-1">
                  <h4 className="font-bold text-stone-900 text-sm">Collaborazione vs Competizione</h4>
                  <p className="text-xs text-stone-600 font-light">Costruire valore insieme riducendo i rischi e massimizzando i benefici per tutti[cite: 1].</p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-sky-50/40 border border-sky-100 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center shrink-0">🪙</div>
                <div className="space-y-1">
                  <h4 className="font-bold text-stone-900 text-sm">Generazione di Liquidità</h4>
                  <p className="text-xs text-stone-600 font-light">Tokenizzazione di asset inespressi per liberare risorse a supporto del dono[cite: 1].</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. LA FILOSOFIA OPERATIVA */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-stone-100 pb-3">
              <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center font-bold text-xs font-mono">3</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">La Filosofia Operativa: "Operare nella Luce"</h3>
            </div>
            <p className="text-stone-600 leading-relaxed text-sm md:text-base font-light">
              Criteri etici rigorosi per guidare ogni interazione all'interno dell'ecosistema[cite: 1]:
            </p>

            {/* Infografica Visiva - Operare nella Luce */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-purple-50/40 border border-purple-100 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center shrink-0">✨</div>
                <div className="space-y-1">
                  <h4 className="font-bold text-stone-900 text-sm">Etica e Trasparenza</h4>
                  <p className="text-xs text-stone-600 font-light">Correttezza, relazioni di fiducia e benefici sostenibili nel lungo periodo[cite: 1].</p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-emerald-50/40 border border-emerald-100 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">🌱</div>
                <div className="space-y-1">
                  <h4 className="font-bold text-stone-900 text-sm">Utilità Reale</h4>
                  <p className="text-xs text-stone-600 font-light">Miglioramento concreto della qualità della vita e dell'autonomia decisionale[cite: 1].</p>
                </div>
              </div>
            </div>
          </div>

          {/* 4. IL PERCORSO DI CRESCITA */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b border-stone-100 pb-3">
              <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center font-bold text-xs font-mono">4</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">Il Percorso di Crescita: Dalla Tazzina all'Oceano</h3>
            </div>
            <p className="text-stone-600 leading-relaxed text-sm md:text-base font-light">
              Un percorso formativo progressivo per espandere la consapevolezza[cite: 1]:
            </p>

            {/* Infografica Visiva - Tazzina all'Oceano */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-sky-50 via-emerald-50 to-amber-50 border border-stone-200 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="space-y-1 max-w-md">
                <span className="text-xs font-mono text-emerald-800 font-bold uppercase tracking-wider">Metafora Formativa</span>
                <h4 className="text-lg font-bold font-serif text-stone-900">La Capienza Interiore</h4>
                <p className="text-xs text-stone-600 font-light">Prima della crescita economica serve la crescita personale per gestire grandi flussi di risorse senza subire contraccolpi[cite: 1].</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <div className="px-4 py-3 bg-white rounded-xl shadow-sm border border-stone-200 text-center">
                  <span className="block text-xl font-bold text-stone-900">☕</span>
                  <span className="text-[10px] text-stone-500 font-mono">Tazzina</span>
                </div>
                <span className="text-stone-400 font-bold">➔</span>
                <div className="px-4 py-3 bg-stone-900 text-white rounded-xl shadow-md text-center">
                  <span className="block text-xl">🌊</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Oceano</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* DASHBOARD INTERATTIVA CON CONTEGGI PUNTUALI DI FIANCO */}
        {/* ========================================================================= */}
        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 md:p-8 text-slate-100 shadow-2xl space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-purple-400 text-[10px] font-mono tracking-widest">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
              LCR-NETFREE HIERARCHICAL TREE PROTOCOL v6.0
            </div>
            <h3 className="text-xl md:text-2xl font-black text-white font-mono tracking-tight">
              REATTORE CONCENTRICO E SCHEMA AD ALBERO A PIANI CON CONTEGGI
            </h3>
            <p className="text-slate-400 text-xs font-light">
              Monitora i conteggi numerici esatti di fianco a ciascun livello mentre il reattore radiale e l'albero lineare si popolano in tempo reale.
            </p>
          </div>

          {/* CONTROLLI GLOBALI */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button 
              onClick={() => injectLensStep(1)} 
              className="px-5 py-2.5 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 rounded-xl text-xs font-mono font-bold text-purple-300 tracking-wider transition-all cursor-pointer shadow-lg"
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

          {/* GRID PRINCIPALE: SINISTRA REATTORE CERCHI, DESTRA ALBERO LINEARE A PIANI CON CONTEGGI */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-2">
            
            {/* 1. REATTORE VISIVO SVG (SINISTRA - 6 COLONNE) */}
            <div className="lg:col-span-6 bg-slate-900/40 border border-slate-800/60 rounded-2xl p-4 flex flex-col items-center justify-center relative shadow-inner overflow-hidden min-h-[480px]">
              <div className="absolute top-3 left-4 text-[9px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Reattore Concentrico
              </div>
              <div className="absolute top-3 right-4 text-[9px] font-mono text-slate-500 tracking-widest">
                FOCUS: L{activeFocusLevel}
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

            {/* 2. SCHEMA AD ALBERO LINEARE A PIANI CON CONTEGGI (DESTRA - 6 COLONNE) */}
            <div className="lg:col-span-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 backdrop-blur-md flex flex-col justify-between space-y-3">
              <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <TreePine className="w-3.5 h-3.5 text-emerald-400" /> Schema ad Albero con Conteggi
                </span>
                <span className="text-[9px] font-mono bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
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
                          <span className="px-2 py-0.5 bg-slate-900 text-purple-300 font-bold rounded text-[11px] border border-purple-500/20">
                            [{lvl.countNum}]
                          </span>
                          <span className={`font-bold ${isFocused ? 'text-white' : 'text-slate-300'} text-xs`}>
                            {lvl.label} ➔ <span className="text-emerald-400">{lvl.peopleCount}</span>
                          </span>
                        </div>
                        <span className={`text-[10px] px-2 py-0.5 rounded ${isCompleted ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30' : 'bg-slate-900 text-slate-400'}`}>
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
            NetFree è pensato come una visione filantropica che trasforma il successo individuale in uno strumento per il benessere collettivo, alimentando un ciclo virtuoso di abbondanza condivisa[cite: 1].
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
