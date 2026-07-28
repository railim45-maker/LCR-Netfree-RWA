import { Link } from "wouter";
import { ArrowRight, Sparkles, TreePine, Users, Network, ShieldCheck, Sun, Coins, Heart, Compass } from "lucide-react";
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gradient-to-r from-amber-100/40 via-emerald-100/30 to-purple-100/30 blur-[140px] rounded-full pointer-events-none z-0" />

      {/* HEADER DI NAVIGAZIONE INTERNA */}
      <header className="container max-w-5xl mx-auto px-6 pt-10 relative z-10">
        <div className="flex items-center justify-between p-4 rounded-3xl bg-white/85 border border-stone-200/80 shadow-sm backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center text-sm border border-amber-200">✨</span>
            <span className="font-bold text-xs uppercase tracking-wider text-stone-700 font-serif">Il Giardino Luminoso • NetFree LCR</span>
          </div>
          <nav className="flex items-center gap-4 text-xs font-semibold">
            <Link href="/">
              <span className="text-stone-600 hover:text-stone-900 cursor-pointer transition-colors">← Torna alla Home</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* CONTENUTO PRINCIPALE */}
      <main className="container max-w-5xl mx-auto px-6 space-y-16 relative z-10">
        
        {/* TITOLO E INTRODUZIONE STILE GIARDINO LUMINOSO */}
        <div className="text-center space-y-5 pt-8">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs font-medium tracking-widest shadow-sm font-serif">
            <Sparkles className="w-4 h-4 text-amber-600" /> L'Economia del Dono e la Moltiplicazione del Valore
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-stone-900 tracking-tight leading-tight">
            NetFree LCR
          </h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed font-light">
            Un percorso di libertà, crescita e responsabilità[cite: 1]. Dalla rigidità del modello estrattivo alla fioritura di una comunità basata sulla cura e sull'abbondanza condivisa[cite: 1].
          </p>
        </div>

        {/* ========================================================================= */}
        {/* SEZIONE 1: IL PROBLEMA MODERNO VS IL BISOGNO UMANO (INFOGRAFICA AFFIANCATA) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card Il Problema Moderno */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-stone-900 to-stone-800 text-stone-100 shadow-xl space-y-5 border border-stone-700/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-stone-700/20 rounded-full blur-2xl pointer-events-none" />
            <div className="inline-block px-3 py-1 rounded-full bg-stone-800 border border-stone-700 text-stone-300 text-[10px] font-mono tracking-widest uppercase">
              Analisi del Contesto
            </div>
            <h3 className="text-2xl font-bold font-serif text-white">Il Problema Moderno</h3>
            <ul className="space-y-3 text-sm text-stone-300 font-light">
              <li className="flex items-start gap-2.5">
                <span className="text-amber-400 font-bold">▪</span>
                <span><strong>Inflazione e costo della vita:</strong> Aumento costante delle spese primarie.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-amber-400 font-bold">▪</span>
                <span><strong>Dipendenza dalla scarsità:</strong> Sistemi tradizionali fondati sul controllo e sul debito.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-amber-400 font-bold">▪</span>
                <span><strong>Scarsità di tempo:</strong> L'illusione che affidarsi a un'unica fonte di reddito sia ancora sufficiente.</span>
              </li>
            </ul>
            <div className="pt-3 border-t border-stone-700/60">
              <p className="text-xs text-amber-300/90 italic font-serif">
                "L'illusione: Affidarsi a una sola fonte di reddito non è più sufficiente."
              </p>
            </div>
          </div>

          {/* Card Il Bisogno Umano / La Visione NetFree */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-50/80 via-white to-emerald-50/60 text-stone-800 shadow-xl space-y-5 border border-amber-200/60 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/30 rounded-full blur-2xl pointer-events-none" />
            <div className="inline-block px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-[10px] font-mono tracking-widest uppercase">
              La Risposta Evolutiva
            </div>
            <h3 className="text-2xl font-bold font-serif text-stone-900">Il Bisogno Umano</h3>
            <ul className="space-y-3 text-sm text-stone-600 font-light">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong>Equilibrio autentico:</strong> Armonia tra tempo personale e risorse materiali.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong>Opportunità sostenibili:</strong> Soluzioni accessibili e prive di rischi predatori.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong>Valore reale:</strong> Risolvere problemi concreti costruendo benefici collettivi.</span>
              </li>
            </ul>
            <div className="pt-3 border-t border-amber-200/80">
              <p className="text-xs text-stone-700 font-medium font-serif">
                "La Domanda: Come generare libertà economica senza che tutto dipenda esclusivamente dal proprio tempo?"
              </p>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        (CONTENUTI E PILASTRI APPROFONDITI CON INFOGRAFICHE DEDICATE)
        {/* ========================================================================= */}
        <div className="rounded-3xl border border-stone-200/90 bg-white/95 backdrop-blur-xl p-8 md:p-14 shadow-xl space-y-16">
          
          {/* 1. LA STRUTTURA ORGANICA (IL CICLO DEL SEME) */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
              <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center font-bold text-sm font-mono shadow-sm">1</span>
              <div>
                <h3 className="text-2xl font-bold font-serif text-stone-900">La Struttura Organica: Il Ciclo del Seme</h3>
                <p className="text-xs text-stone-500 font-light">La Chiave Railim e la metafora della coltivazione consapevole[cite: 1].</p>
              </div>
            </div>
            
            <p className="text-stone-600 leading-relaxed text-base font-light">
              Il funzionamento di NetFree è descritto attraverso la metafora del seme, che rappresenta l'inizio di ogni trasformazione[cite: 1]. L'ingresso nel sistema non costituisce un debito, bensì un seme ricevuto in dono dai "silos" della comunità, azzerando qualsiasi rischio per ciò che non si possiede[cite: 1].
            </p>

            {/* Infografica Visiva a 4 Fasi del Seme */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
              <div className="p-6 rounded-2xl bg-[#fcfbf9] border border-amber-200/70 shadow-sm space-y-2 relative group hover:border-amber-400 transition-all">
                <span className="text-amber-700 font-mono text-[10px] font-bold uppercase tracking-wider bg-amber-100/60 px-2 py-0.5 rounded">Fase 01</span>
                <h4 className="font-bold text-stone-900 text-sm font-serif">Il Dono (Chiave Railim)</h4>
                <p className="text-xs text-stone-600 font-light">Accoglienza nell'ecosistema senza alcuna pressione economica iniziale[cite: 1].</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#fcfbf9] border border-amber-200/70 shadow-sm space-y-2 relative group hover:border-amber-400 transition-all">
                <span className="text-amber-700 font-mono text-[10px] font-bold uppercase tracking-wider bg-amber-100/60 px-2 py-0.5 rounded">Fase 02</span>
                <h4 className="font-bold text-stone-900 text-sm font-serif">La Responsabilità</h4>
                <p className="text-xs text-stone-600 font-light">Impegno a piantare, curare e fare crescere il valore ricevuto[cite: 1].</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#fcfbf9] border border-amber-200/70 shadow-sm space-y-2 relative group hover:border-amber-400 transition-all">
                <span className="text-amber-700 font-mono text-[10px] font-bold uppercase tracking-wider bg-amber-100/60 px-2 py-0.5 rounded">Fase 03</span>
                <h4 className="font-bold text-stone-900 text-sm font-serif">La Cura (~6 Persone)</h4>
                <p className="text-xs text-stone-600 font-light">Condivisione con un cerchio ristretto; il centro del sistema sono le persone[cite: 1].</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#fcfbf9] border border-amber-200/70 shadow-sm space-y-2 relative group hover:border-amber-400 transition-all">
                <span className="text-amber-700 font-mono text-[10px] font-bold uppercase tracking-wider bg-amber-100/60 px-2 py-0.5 rounded">Fase 04</span>
                <h4 className="font-bold text-stone-900 text-sm font-serif">I Frutti</h4>
                <p className="text-xs text-stone-600 font-light">Il seme matura generando risultati, prosperità e nuovi semi per il sistema[cite: 1].</p>
              </div>
            </div>
          </div>

          {/* 2. IL MODELLO ECONOMICO (L'ECONOMIA DEL DONO) */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
              <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center font-bold text-sm font-mono shadow-sm">2</span>
              <div>
                <h3 className="text-2xl font-bold font-serif text-stone-900">Il Modello Economico: L'Economia del Dono</h3>
                <p className="text-xs text-stone-500 font-light">Dalla competizione spietata alla condivisione del surplus[cite: 1].</p>
              </div>
            </div>
            
            <p className="text-stone-600 leading-relaxed text-base font-light">
              L'intero progetto si fonda sul principio dell'Economia del Dono, che mira a creare abbondanza collettiva condividendo il surplus[cite: 1]. Invece di competere, le persone collaborano per costruire valore reale riducendo i rischi al minimo[cite: 1].
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-7 rounded-2xl bg-amber-50/50 border border-amber-200/70 space-y-3 shadow-sm">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-base font-serif">
                  <span>🔄</span> Sostenibilità e Restituzione
                </div>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Una parte dell'abbondanza generata ritorna ai "silos" del sistema per finanziare nuovi ingressi ed espandere in modo perpetuo la comunità[cite: 1].
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-emerald-50/50 border border-emerald-200/70 space-y-3 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-base font-serif">
                  <span>💎</span> Valore Condiviso e Tokenizzazione
                </div>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Attraverso asset digitalizzati e tokenizzati, NetFree libera la liquidità necessaria per coprire i costi iniziali senza gravare sui singoli partecipanti[cite: 1].
                </p>
              </div>
            </div>
          </div>

          {/* 3. LA FILOSOFIA OPERATIVA (OPERARE NELLA LUCE) */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
              <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center font-bold text-sm font-mono shadow-sm">3</span>
              <div>
                <h3 className="text-2xl font-bold font-serif text-stone-900">La Filosofia Operativa: "Operare nella Luce"</h3>
                <p className="text-xs text-stone-500 font-light">I pilastri etici e la trasparenza radicale[cite: 1].</p>
              </div>
            </div>
            
            <p className="text-stone-600 leading-relaxed text-base font-light">
              NetFree seleziona rigorosamente partner e opportunità basandosi su criteri etici inattaccabili: azioni corrette, relazioni fondate sulla fiducia e nessuna promessa di arricchimento facile[cite: 1].
            </p>

            {/* Infografica a Colonne (Richiamo alle Colonne di Luce della presentazione) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-center space-y-2 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center mx-auto text-xs font-bold font-serif">I</div>
                <h4 className="font-bold text-stone-900 text-xs">Etica e Trasparenza</h4>
                <p className="text-[11px] text-stone-600 font-light">Fiducia e chiarezza in ogni accordo[cite: 1].</p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-center space-y-2 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center mx-auto text-xs font-bold font-serif">II</div>
                <h4 className="font-bold text-stone-900 text-xs">Utilità Reale</h4>
                <p className="text-[11px] text-stone-600 font-light">Miglioramento concreto della vita[cite: 1].</p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-center space-y-2 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center mx-auto text-xs font-bold font-serif">III</div>
                <h4 className="font-bold text-stone-900 text-xs">Sostenibilità</h4>
                <p className="text-[11px] text-stone-600 font-light">Benefici duraturi nel lungo periodo[cite: 1].</p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-center space-y-2 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center mx-auto text-xs font-bold font-serif">IV</div>
                <h4 className="font-bold text-stone-900 text-xs">Inclusività</h4>
                <p className="text-[11px] text-stone-600 font-light">Barriere ridotte per opportunità universali.</p>
              </div>
            </div>
          </div>

          {/* 4. IL PERCORSO DI CRESCITA (DALLA TAZZINA ALL'OCEANO) */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-stone-100 pb-4">
              <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center font-bold text-sm font-mono shadow-sm">4</span>
              <div>
                <h3 className="text-2xl font-bold font-serif text-stone-900">Il Percorso di Crescita: Dalla Tazzina all'Oceano</h3>
                <p className="text-xs text-stone-500 font-light">Il prerequisito fondamentale: la capacità di ricevere[cite: 1].</p>
              </div>
            </div>
            
            <p className="text-stone-600 leading-relaxed text-base font-light">
              NetFree non è solo un sistema economico, ma un percorso formativo a livelli progressivi[cite: 1]. Se l'abbondanza arriva quando la consapevolezza è ancora piccola, il sistema viene travolto (la tazzina rotta); se la persona cresce attraverso la formazione, una grande opportunità diventa una nuova onda (l'oceano)[cite: 1].
            </p>

            <div className="p-8 rounded-3xl bg-gradient-to-r from-amber-50/60 via-stone-50 to-emerald-50/60 border border-amber-200/60 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="space-y-1 text-center md:text-left">
                <span className="text-[10px] font-mono text-amber-800 font-bold uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-amber-200 inline-block">Metafora Formativa</span>
                <h4 className="text-lg font-bold font-serif text-stone-900">La Crescita Personale precede quella Economica</h4>
              </div>
              <div className="flex items-center gap-4 shrink-0 font-mono text-xs text-stone-700 bg-white/90 p-4 rounded-2xl border border-stone-200 shadow-sm">
                <div className="text-center">
                  <span className="block text-xl">☕</span>
                  <span className="text-[10px] font-bold">Tazzina</span>
                </div>
                <span className="text-amber-600 font-bold text-base">➔</span>
                <div className="text-center">
                  <span className="block text-xl">🌊</span>
                  <span className="text-[10px] font-bold text-emerald-700">Oceano</span>
                </div>
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
              Visualizza in tempo reale il popolamento della comunità basato sulla cura di ~6 persone per nodo[cite: 1].
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
        <div className="p-10 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/60 via-white to-emerald-50/30 space-y-4 text-center shadow-lg backdrop-blur-md">
          <h3 className="text-xl font-bold font-serif text-stone-900">Il Giardino Condiviso</h3>
          <p className="text-sm text-stone-600 max-w-xl mx-auto font-light leading-relaxed font-serif italic">
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
