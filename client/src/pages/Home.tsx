import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Lock, Unlock, ShieldCheck, Leaf, Globe, Compass, ExternalLink, MessageCircle } from 'lucide-react';
import { Link } from 'wouter';

export default function Home() {
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

  const completedCount = Object.values(checkpointChecked).filter(Boolean).length;
  const progressPercentage = (completedCount / 4) * 100;

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
          <nav className="flex items-center gap-2 sm:gap-3 text-xs font-medium w-full sm:w-auto justify-center flex-wrap">
            <Link href="/tokenizzazione" className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80 hover:bg-amber-100 font-serif font-semibold text-[11px]">
              ✦ Tokenizzazione RWA
            </Link>
            <Link href="/netfree" className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200/80 hover:bg-emerald-100 font-serif font-semibold text-[11px]">
              🌱 NetFree Deep Dive
            </Link>
            <Link href="/liberta-legale" className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-stone-100 text-stone-900 border border-stone-300 hover:bg-stone-200 font-serif font-semibold text-[11px]">
              🛡️ Sovranità
            </Link>
          </nav>
        </div>
      </header>

      {/* CONTENUTO PRINCIPALE */}
      <main className="container max-w-4xl mx-auto px-4 md:px-6 space-y-16 md:space-y-24 relative z-10">
        
        {/* INTRODUZIONE E CRUSCOTTO */}
        <div className="text-center space-y-6 pt-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-amber-50/70 border border-amber-200/70 text-amber-900 text-[11px] md:text-xs font-medium tracking-wide shadow-sm font-serif">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" /> Architettura dell'Ecosistema e Frequenza 432Hz
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-stone-900 tracking-tight leading-[1.15]">
            La Mappa del Tuo Cammino Evolutivo
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-600 leading-relaxed font-light font-serif px-2">
            Un sistema integrato che unisce l'economia del dono, la protezione patrimoniale attraverso i Real World Assets e la piena sovranità esistenziale. Ogni passo sblocca un livello di consapevolezza superiore.
          </p>

          {/* CRUSCOTTO DI CONTEGGIO E PROGRESSO */}
          <div className="p-5 rounded-3xl bg-white border border-stone-200/80 shadow-md space-y-3 max-w-md mx-auto">
            <div className="flex items-center justify-between text-xs font-serif font-semibold text-stone-700">
              <span className="flex items-center gap-1.5"><Compass className="w-4 h-4 text-amber-700" /> Stato del Grimorio</span>
              <span>{completedCount} di 4 Checkpoint Superati</span>
            </div>
            <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden border border-stone-200/50">
              <div 
                className="bg-amber-600 h-full transition-all duration-500 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <p className="text-[11px] text-stone-500 font-serif italic">Traccia le tappe per completare la configurazione dell'ecosistema.</p>
          </div>
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
            <p className="text-stone-600 text-xs sm:text-sm font-light font-serif mb-6 leading-relaxed">
              Ascolta il campo, sintonizzati sulla frequenza del progetto e riconosci la risonanza con i valori della cura e dell'abbondanza. Interroga le dinamiche energetiche ed elimina le frizioni mentali legate alla sopravvivenza.
            </p>
            {!checkpointChecked[1] && (
              <button 
                onClick={() => handleCheckpoint(1)}
                className="bg-stone-900 text-stone-50 text-xs font-serif px-5 py-2.5 rounded-full hover:bg-stone-800 transition-all shadow-md cursor-pointer"
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
            <p className="text-stone-600 text-xs sm:text-sm font-light font-serif mb-6 leading-relaxed">
              Comprendi il valore della materia solida e della protezione economica attraverso i modelli di tokenizzazione e Club Deal. Ancoraggio patrimoniale protetto per liberare la famiglia dall'ansia della scarsità.
            </p>
            {unlockedLevel >= 2 && !checkpointChecked[2] && (
              <div className="flex items-center gap-3 flex-wrap">
                <Link href="/tokenizzazione" className="bg-amber-100 text-amber-900 text-xs font-serif px-5 py-2.5 rounded-full hover:bg-amber-200 transition-all font-semibold">
                  Esplora la Tokenizzazione →
                </Link>
                <button 
                  onClick={() => handleCheckpoint(2)}
                  className="bg-stone-900 text-stone-50 text-xs font-serif px-5 py-2.5 rounded-full hover:bg-stone-800 transition-all shadow-md cursor-pointer"
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
            <p className="text-stone-600 text-xs sm:text-sm font-light font-serif mb-6 leading-relaxed">
              Entra nella cerchia di cura, supera la competizione e sperimenta l'abbondanza circolare accompagnando la tua comunità senza intermediari parassitari.
            </p>
            {unlockedLevel >= 3 && !checkpointChecked[3] && (
              <div className="flex items-center gap-3 flex-wrap">
                <Link href="/netfree" className="bg-emerald-100 text-emerald-900 text-xs font-serif px-5 py-2.5 rounded-full hover:bg-emerald-200 transition-all font-semibold">
                  Deep Dive Net-Free →
                </Link>
                <button 
                  onClick={() => handleCheckpoint(3)}
                  className="bg-stone-900 text-stone-50 text-xs font-serif px-5 py-2.5 rounded-full hover:bg-stone-800 transition-all shadow-md cursor-pointer"
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
            <p className="text-stone-600 text-xs sm:text-sm font-light font-serif mb-6 leading-relaxed">
              Purifica il tempio biologico (acqua, terra, permacultura) e ristabilisci la piena sovranità esistenziale e giuridica.
            </p>
            {unlockedLevel >= 4 && (
              <Link href="/liberta-legale" className="bg-stone-900 text-stone-50 text-xs font-serif px-6 py-3 rounded-full hover:bg-stone-800 transition-all font-semibold inline-flex items-center gap-2">
                Approfondisci i Protocolli di Sovranità <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
            )}
          </div>

        </div>

        {/* SEZIONE: RELAZIONI, ALLEANZE E COLLEGAMENTI UTILI */}
        <div className="p-6 sm:p-10 md:p-14 rounded-3xl md:rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-8">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span className="text-xs uppercase tracking-[3px] text-amber-800 font-serif font-semibold">Relazioni e Alleanze</span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-900">I Presidi e la Collaborazione Diretta</h3>
            <p className="text-stone-600 text-xs sm:text-sm font-light font-serif">Il cammino si fonda sui rapporti umani autentici e sulla co-creazione strategica sul campo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            <div className="p-6 md:p-8 rounded-3xl bg-stone-50 border border-stone-200/80 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-semibold">Sovranità e Coscienza</span>
              <h4 className="font-serif font-bold text-lg sm:text-xl text-stone-900">Dialogo e Sviluppo con Aldo Pironi</h4>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                Collaborazione attiva e confronto diretto in corso per definire i protocolli condivisi di sovranità, superamento della finzione giuridica e tutela del tempio biologico.
              </p>
            </div>

            <div className="p-6 md:p-8 rounded-3xl bg-emerald-50/50 border border-emerald-200/80 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-semibold">Ecosistema Net-Free</span>
              <h4 className="font-serif font-bold text-lg sm:text-xl text-stone-900">Portale Ufficiale LCR</h4>
              <p className="text-xs sm:text-sm text-stone-700 font-light leading-relaxed">
                Il canale centrale della community per coordinare i semi digitali, la tokenizzazione RWA e i momenti di incontro collettivo della rete.
              </p>
              <div className="pt-2">
                <Link href="/netfree" className="inline-flex items-center gap-1.5 text-xs font-serif text-emerald-900 font-semibold hover:underline">
                  Accedi al Deep Dive Net-Free →
                </Link>
              </div>
            </div>

          </div>

          {/* COLLEGAMENTI RAPIDI INCROCIATI TRA LE SEZIONI */}
          <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-serif text-stone-600">
            <span className="font-medium">Esplora rapidamente le sezioni del portale:</span>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <Link href="/tokenizzazione" className="hover:text-amber-800 transition-colors underline underline-offset-4">✦ Tokenizzazione RWA</Link>
              <span>•</span>
              <Link href="/netfree" className="hover:text-emerald-800 transition-colors underline underline-offset-4">🌱 Net-Free Process</Link>
              <span>•</span>
              <Link href="/liberta-legale" className="hover:text-stone-900 transition-colors underline underline-offset-4">🛡️ Piena Sovranità</Link>
            </div>
          </div>
        </div>

      </main>

    </div>
  );
}
