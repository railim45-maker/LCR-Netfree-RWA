import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Lock, Unlock, ShieldCheck, Leaf, Globe } from 'lucide-react';
import { Link } from 'wouter';

export default function Home() {
  // Stato dei checkpoint evolutivi (salvati nel browser)
  const [unlockedLevel, setUnlockedLevel] = useState<number>(() => {
    const saved = localStorage.getItem('lcr_unlocked_level');
    return saved ? parseInt(saved, 10) : 1;
  });

  const [checkpointChecked, setCheckpointChecked] = useState<Record<number, boolean>>(() => {
    const saved = localStorage.getItem('lcr_checkpoints');
    return saved ? JSON.parse(saved) : { 1: false, 2: false, 3: false, 4: false };
  });

  useEffect(() => {
    localStorage.setItem('lcr_unlocked_level', unlockedLevel.toString());
    localStorage.setItem('lcr_checkpoints', JSON.stringify(checkpointChecked));
  }, [unlockedLevel, checkpointChecked]);

  const handleCheckpoint = (level: number) => {
    const updatedChecks = { ...checkpointChecked, [level]: true };
    setCheckpointChecked(updatedChecks);
    if (level >= unlockedLevel && level < 5) {
      setUnlockedLevel(level + 1);
    }
  };

  return (
    <div className="min-h-screen relative text-stone-800 space-y-16 md:space-y-28 pb-24 md:pb-40 overflow-hidden bg-[#fcfbf9]">
      
      {/* SFONDO LUMINOSO E GRADIENTI ARMONICI */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[1200px] h-[400px] md:h-[700px] bg-gradient-to-b from-amber-100/30 via-emerald-50/20 to-transparent blur-[120px] md:blur-[150px] rounded-full pointer-events-none z-0" />

      {/* HEADER DI NAVIGAZIONE */}
      <header className="container max-w-5xl mx-auto px-4 md:px-6 pt-6 md:pt-12 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 md:px-6 py-3 md:py-4 rounded-3xl sm:rounded-full bg-white/90 border border-stone-200/60 shadow-[0_2px_20px_rgba(0,0,0,0.02)] backdrop-blur-xl">
          <div className="flex items-center gap-2 md:gap-3">
            <span className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center text-[10px] md:text-xs border border-amber-200/60 font-serif flex-shrink-0">✦</span>
            <span className="font-bold text-[10px] sm:text-xs uppercase tracking-wider md:tracking-widest text-stone-600 font-serif text-center sm:text-left">Il Giardino Luminoso • NetFree LCR</span>
          </div>
          <nav className="flex items-center gap-2 sm:gap-3 text-xs font-medium w-full sm:w-auto justify-center">
            <Link href="/tokenizzazione" className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80 hover:bg-amber-100 font-serif font-semibold text-[11px]">
              ✦ Tokenizzazione RWA
            </Link>
            <Link href="/netfree" className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200/80 hover:bg-emerald-100 font-serif font-semibold text-[11px]">
              🌱 NetFree Deep Dive
            </Link>
          </nav>
        </div>
      </header>

      {/* CONTENUTO PRINCIPALE */}
      <main className="container max-w-4xl mx-auto px-4 md:px-6 space-y-16 md:space-y-24 relative z-10">
        
        {/* INTRODUZIONE */}
        <div className="text-center space-y-4 md:space-y-6 pt-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-amber-50/70 border border-amber-200/70 text-amber-900 text-[11px] md:text-xs font-medium tracking-wide shadow-sm font-serif">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" /> La Via della Libertà e della Cura
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-stone-900 tracking-tight leading-[1.15]">
            La Mappa del Tuo Cammino Evolutivo
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-600 leading-relaxed font-light font-serif px-2">
            Questo portale risponde al tuo passo. Supera i checkpoint di consapevolezza per sbloccare i moduli successivi della tua evoluzione verso la piena sovranità.
          </p>
        </div>

        {/* IL CAMMINO A TAPPE (TO-DO LIST EVOLUTIVA) */}
        <div className="space-y-6">
          
          {/* TAPPA 1 */}
          <div className={`p-6 sm:p-8 rounded-3xl bg-white border transition-all ${unlockedLevel >= 1 ? 'border-amber-300 shadow-xl' : 'border-stone-200 opacity-60'}`}>
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200 flex items-center justify-center font-bold font-serif text-sm">1</span>
                <h3 className="text-lg md:text-xl font-bold font-serif text-stone-900">Consapevolezza Energetica e Campo</h3>
              </div>
              {checkpointChecked[1] ? (
                <span className="inline-flex items-center gap-1 text-xs font-serif text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Superato
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-xs font-serif text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  <Unlock className="w-3.5 h-3.5" /> Attivo
                </span>
              )}
            </div>
            <p className="text-stone-600 text-xs sm:text-sm font-light font-serif mb-6">
              Ascolta il campo, sintonizzati sulla frequenza del progetto e riconosci la risonanza con i valori della cura e dell'abbondanza.
            </p>
            {!checkpointChecked[1] && (
              <button 
                onClick={() => handleCheckpoint(1)}
                className="bg-stone-900 text-stone-50 text-xs font-serif px-5 py-2.5 rounded-full hover:bg-stone-800 transition-all shadow-md"
              >
                Conferma Checkpoint di Centratura ✓
              </button>
            )}
          </div>

          {/* TAPPA 2 */}
          <div className={`p-6 sm:p-8 rounded-3xl bg-white border transition-all ${unlockedLevel >= 2 ? 'border-amber-300 shadow-xl' : 'border-stone-200 opacity-60'}`}>
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200 flex items-center justify-center font-bold font-serif text-sm">2</span>
                <h3 className="text-lg md:text-xl font-bold font-serif text-stone-900">Radicamento e Protezione (Tokenizzazione RWA)</h3>
              </div>
              {unlockedLevel < 2 ? (
                <span className="inline-flex items-center gap-1 text-xs font-serif text-stone-400 bg-stone-100 px-3 py-1 rounded-full border border-stone-200">
                  <Lock className="w-3.5 h-3.5" /> Bloccato
                </span>
              ) : checkpointChecked[2] ? (
                <span className="inline-flex items-center gap-1 text-xs font-serif text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Superato
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-xs font-serif text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  <Unlock className="w-3.5 h-3.5" /> Attivo
                </span>
              )}
            </div>
            <p className="text-stone-600 text-xs sm:text-sm font-light font-serif mb-6">
              Comprendi il valore della materia solida e della protezione economica attraverso i modelli di tokenizzazione e Club Deal.
            </p>
            {unlockedLevel >= 2 && !checkpointChecked[2] && (
              <div className="flex items-center gap-3 flex-wrap">
                <Link href="/tokenizzazione" className="bg-amber-100 text-amber-900 text-xs font-serif px-5 py-2.5 rounded-full hover:bg-amber-200 transition-all font-semibold">
                  Esplora la Tokenizzazione →
                </Link>
                <button 
                  onClick={() => handleCheckpoint(2)}
                  className="bg-stone-900 text-stone-50 text-xs font-serif px-5 py-2.5 rounded-full hover:bg-stone-800 transition-all shadow-md"
                >
                  Conferma Checkpoint Fondamenta ✓
                </button>
              </div>
            )}
          </div>

          {/* TAPPA 3 */}
          <div className={`p-6 sm:p-8 rounded-3xl bg-white border transition-all ${unlockedLevel >= 3 ? 'border-amber-300 shadow-xl' : 'border-stone-200 opacity-60'}`}>
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200 flex items-center justify-center font-bold font-serif text-sm">3</span>
                <h3 className="text-lg md:text-xl font-bold font-serif text-stone-900">Il Cammino Circolare (Economia del Dono e Net-Free)</h3>
              </div>
              {unlockedLevel < 3 ? (
                <span className="inline-flex items-center gap-1 text-xs font-serif text-stone-400 bg-stone-100 px-3 py-1 rounded-full border border-stone-200">
                  <Lock className="w-3.5 h-3.5" /> Bloccato
                </span>
              ) : checkpointChecked[3] ? (
                <span className="inline-flex items-center gap-1 text-xs font-serif text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Superato
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-xs font-serif text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  <Unlock className="w-3.5 h-3.5" /> Attivo
                </span>
              )}
            </div>
            <p className="text-stone-600 text-xs sm:text-sm font-light font-serif mb-6">
              Entra nella cerchia di cura, supera la competizione e sperimenta l'abbondanza circolare accompagnando la tua comunità.
            </p>
            {unlockedLevel >= 3 && !checkpointChecked[3] && (
              <div className="flex items-center gap-3 flex-wrap">
                <Link href="/netfree" className="bg-emerald-100 text-emerald-900 text-xs font-serif px-5 py-2.5 rounded-full hover:bg-emerald-200 transition-all font-semibold">
                  Deep Dive Net-Free →
                </Link>
                <button 
                  onClick={() => handleCheckpoint(3)}
                  className="bg-stone-900 text-stone-50 text-xs font-serif px-5 py-2.5 rounded-full hover:bg-stone-800 transition-all shadow-md"
                >
                  Conferma Checkpoint Cerchia ✓
                </button>
              </div>
            )}
          </div>

          {/* TAPPA 4 */}
          <div className={`p-6 sm:p-8 rounded-3xl bg-white border transition-all ${unlockedLevel >= 4 ? 'border-amber-300 shadow-xl' : 'border-stone-200 opacity-60'}`}>
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200 flex items-center justify-center font-bold font-serif text-sm">4</span>
                <h3 className="text-lg md:text-xl font-bold font-serif text-stone-900">Il Tempio Biologico e la Piena Sovranità</h3>
              </div>
              {unlockedLevel < 4 ? (
                <span className="inline-flex items-center gap-1 text-xs font-serif text-stone-400 bg-stone-100 px-3 py-1 rounded-full border border-stone-200">
                  <Lock className="w-3.5 h-3.5" /> Bloccato
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-xs font-serif text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  <Unlock className="w-3.5 h-3.5" /> Meta Finale
                </span>
              )}
            </div>
            <p className="text-stone-600 text-xs sm:text-sm font-light font-serif mb-6">
              Purifica il tempio biologico (acqua, terra, permacultura) e accedi all'Accademia Uomo Naturale per ristabilire la piena sovranità esistenziale.
            </p>
            {unlockedLevel >= 4 && (
              <Link href="/liberta-legale" className="bg-stone-900 text-stone-50 text-xs font-serif px-6 py-3 rounded-full hover:bg-stone-800 transition-all font-semibold inline-flex items-center gap-2">
                Accedi all'Accademia Uomo Naturale <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
            )}
          </div>

        </div>

      </main>

    </div>
  );
}
