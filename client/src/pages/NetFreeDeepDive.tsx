import { Link } from "wouter";
import { ArrowRight, Sparkles, TreePine, ExternalLink, ShieldCheck, Leaf, Globe, FileText, Sun, Droplets, Zap, Activity } from "lucide-react";
import { useState } from "react";

export default function NetFreeDeepDive() {
  const [activeFocusLevel, setActiveFocusLevel] = useState(1);
  const [lensLevels, setLensLevels] = useState([
    { level: 1, maxSteps: 1, currentSteps: 0, currentRad: 170, displayDots: 6, label: "Livello 1 (Radice)", countNum: "1", peopleCount: "1 Persona (Tu)", desc: "Il Seme iniziale / Origine del flusso[cite: 1]" },
    { level: 2, maxSteps: 6, currentSteps: 0, currentRad: 190, displayDots: 36, label: "Livello 2 (Propagazione)", countNum: "6", peopleCount: "6 Persone", desc: "Il cerchio ristretto di cura diretta[cite: 1]" },
    { level: 3, maxSteps: 6, currentSteps: 0, currentRad: 210, displayDots: 108, label: "Livello 3 (Sviluppo)", countNum: "36", peopleCount: "36 Nodi", desc: "Prima propagazione organica nei bio-distretti[cite: 1]" },
    { level: 4, maxSteps: 6, currentSteps: 0, currentRad: 220, displayDots: 180, label: "Livello 4 (Espansione)", countNum: "216", peopleCount: "216 Nodi", desc: "Rete interconnessa di distretto[cite: 1]" },
    { level: 5, maxSteps: 6, currentSteps: 0, currentRad: 230, displayDots: 240, label: "Livello 5 (Foresta)", countNum: "1.296", peopleCount: "1.296 Nodi", desc: "Comunità estesa e autonoma[cite: 1]" },
    { level: 6, maxSteps: 6, currentSteps: 0, currentRad: 240, displayDots: 300, label: "Livello 6 (Sintropia)", countNum: "7.776", peopleCount: "7.776 Nodi", desc: "Coerenza diffusa su vasta scala[cite: 1]" },
    { level: 7, maxSteps: 6, currentSteps: 0, currentRad: 250, displayDots: 360, label: "Livello 7 (Corona)", countNum: "46.656+", peopleCount: "46.656+ Nodi", desc: "Ecosistema frattale completo[cite: 1]" }
  ]);

  const chakraColors = ['#D97706', '#B45309', '#92400E', '#047857', '#065F46', '#022C22', '#FFFFFF'];
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
    <div className="min-h-screen relative text-stone-800 space-y-24 pb-40 overflow-hidden bg-[#fcfbf9]">
      
      {/* SFONDO LUMINOSO E GRADIENTI ARMONICI */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-gradient-to-b from-amber-100/30 via-emerald-50/20 to-transparent blur-[150px] rounded-full pointer-events-none z-0" />

      {/* HEADER DI NAVIGAZIONE */}
      <header className="container max-w-5xl mx-auto px-6 pt-12 relative z-10">
        <div className="flex items-center justify-between px-6 py-4 rounded-full bg-white/90 border border-stone-200/60 shadow-[0_2px_20px_rgba(0,0,0,0.02)] backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center text-xs border border-amber-200/60 font-serif">✦</span>
            <span className="font-bold text-xs uppercase tracking-widest text-stone-600 font-serif">Il Giardino Luminoso • NetFree LCR</span>
          </div>
          <nav className="flex items-center gap-4 text-xs font-medium">
            <Link href="/">
              <span className="text-stone-500 hover:text-stone-900 cursor-pointer transition-colors">← Torna alla Home</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* CONTENUTO PRINCIPALE */}
      <main className="container max-w-5xl mx-auto px-6 space-y-20 relative z-10">
        
        {/* TITOLO E INTRODUZIONE */}
        <div className="text-center space-y-6 pt-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-50/70 border border-amber-200/70 text-amber-900 text-xs font-medium tracking-widest shadow-sm font-serif">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" /> L'Economia del Dono e la Moltiplicazione del Valore
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-stone-900 tracking-tight leading-[1.15]">
            NetFree LCR & Tempio Biologico
          </h1>
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed font-light font-serif italic">
            "Un percorso di libertà, crescita e responsabilità[cite: 1]."
          </p>
        </div>

        {/* TAVOLA 01: IL PROBLEMA MODERNO VS IL BISOGNO UMANO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          <div className="p-10 rounded-[2.5rem] bg-[#1c1917] text-stone-100 shadow-2xl space-y-6 border border-stone-800 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="space-y-4 relative z-10">
              <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400/80 bg-stone-900/80 px-3 py-1 rounded-full border border-stone-800">
                Analisi del Contesto
              </span>
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-white">Il Problema Moderno</h3>
              <ul className="space-y-3.5 text-sm text-stone-300 font-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-serif">▪</span>
                  <span><strong>Inflazione e costo della vita:</strong> Aumento costante delle spese primarie[cite: 1].</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-serif">▪</span>
                  <span><strong>Dipendenza dalla scarsità:</strong> Sistemi tradizionali fondati sul controllo e sul debito[cite: 1].</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 font-serif">▪</span>
                  <span><strong>Scarsità di tempo e stress costante:</strong> L'illusione che affidarsi a un'unica fonte di reddito non sia più sufficiente[cite: 1].</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-stone-800/80 relative z-10">
              <p className="text-xs text-amber-300/90 font-serif italic">
                "L'illusione: Affidarsi a una sola fonte di reddito non sia più sufficiente[cite: 1]."
              </p>
            </div>
          </div>

          <div className="p-10 rounded-[2.5rem] bg-white text-stone-800 shadow-xl space-y-6 border border-amber-200/50 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />
            <div className="space-y-4 relative z-10">
              <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
                La Risposta Evolutiva
              </span>
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-stone-900">Il Bisogno Umano</h3>
              <ul className="space-y-3.5 text-sm text-stone-600 font-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-700 font-serif font-bold">✓</span>
                  <span><strong>Equilibrio autentico:</strong> Armonia tra tempo personale e risorse materiali[cite: 1].</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-700 font-serif font-bold">✓</span>
                  <span><strong>Opportunità sostenibili:</strong> Soluzioni accessibili e prive di rischi predatori[cite: 1].</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-700 font-serif font-bold">✓</span>
                  <span><strong>Valore reale:</strong> Risolvere problemi concreti costruendo benefici collettivi[cite: 1].</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-stone-100 relative z-10">
              <p className="text-xs text-stone-700 font-serif font-medium">
                "La Domanda: Come generare libertà economica senza che tutto dipenda esclusivamente dal proprio tempo[cite: 1]?"
              </p>
            </div>
          </div>

        </div>

        {/* SEZIONE: DOCUMENTI E ALLEGATI UFFICIALI NET-FREE */}
        <div className="rounded-[2.5rem] border border-emerald-200 bg-gradient-to-br from-emerald-50/80 via-white to-stone-50 p-8 md:p-12 shadow-xl space-y-8">
          <div className="text-center space-y-2 max-w-lg mx-auto">
            <span className="text-xs uppercase tracking-[3px] text-emerald-800 font-serif font-semibold">Allegati e Riferimenti Ufficiali</span>
            <h3 className="text-2xl font-serif font-bold text-stone-900">Documentazione Tecnica e Informativa</h3>
            <p className="text-stone-600 text-sm font-light font-serif">Scarica gli allegati ufficiali dedicati alla condivisione energetica e alla memoria biofisica dell'acqua.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <a 
              href="https://www.pefpower.it/public/download/informatives/greensharing.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-6 rounded-3xl bg-white border border-stone-200 hover:border-emerald-400 shadow-md transition-all flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold">
                  <Sun className="w-5 h-5 text-emerald-700" />
                </div>
                <h4 className="font-serif font-bold text-lg text-stone-900 group-hover:text-emerald-800 transition-colors">Informativa Condivisione Energetica (PDF)</h4>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Documento informativo ufficiale sulla condivisione dell'energia pulita e l'autonomia fotovoltaica.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-serif font-semibold text-emerald-900 pt-2">
                Scarica PDF Energia <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </a>

            <a 
              href="https://www.omeopatia.org/download/seminario-rey/ELIA-Dell-acqua-la-rimembranza.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-6 rounded-3xl bg-white border border-stone-200 hover:border-emerald-400 shadow-md transition-all flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold">
                  <Droplets className="w-5 h-5 text-emerald-700" />
                </div>
                <h4 className="font-serif font-bold text-lg text-stone-900 group-hover:text-emerald-800 transition-colors">Dell'Acqua la Rimembranza (PDF)</h4>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  Seminario scientifico approfondito sulla memoria dell'acqua e le proprietà biofisiche.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-serif font-semibold text-emerald-900 pt-2">
                Scarica PDF Memoria Acqua <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </a>
          </div>
        </div>

        {/* I BENI E I BENEFICI DEL TEMPIO BIOLOGICO CON COLLEGAMENTI UFFICIALI */}
        <div className="rounded-[2.5rem] border border-stone-200/80 bg-white/80 backdrop-blur-xl p-8 md:p-16 shadow-xl space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[3px] text-amber-800 font-serif font-semibold">I Semi del Nostro Giardino</span>
            <h3 className="text-3xl font-bold font-serif text-stone-900">I Presidi e i Benefici del Tempio Biologico</h3>
            <p className="text-stone-600 text-sm font-light font-serif">Soluzioni di valore focalizzate sul benessere quotidiano, sulla sovranità domestica e sulla cura ecologica.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 1. Sovranità Energetica */}
            <div className="p-8 rounded-[2rem] bg-[#fcfbf9] border border-stone-200/80 shadow-sm space-y-4 hover:border-amber-300 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">Energia & Autonomia</span>
                <h4 className="text-xl font-bold font-serif text-stone-900">Sovranità Energetica & Condivisione Rinnovabile</h4>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  Sistemi di produzione solare e condivisione energetica per alleggerire i costi fissi e garantire stabilità alla casa.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-serif">
                <span className="text-stone-500">Riduzione bollette & Autonomia</span>
                <a href="https://www.pefpower.it/it/home" target="_blank" rel="noopener noreferrer" className="text-amber-800 font-semibold hover:underline inline-flex items-center gap-1">
                  Approfondisci PEF Power <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* 2. Acqua Pura */}
            <div className="p-8 rounded-[2rem] bg-[#fcfbf9] border border-stone-200/80 shadow-sm space-y-4 hover:border-amber-300 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">Presidio Biologico</span>
                <h4 className="text-xl font-bold font-serif text-stone-900">Rivitalizzazione e Memoria dell'Acqua</h4>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  Tecnologie avanzate di filtrazione e rigenerazione per restituire all'acqua la sua struttura originaria e la piena vitalità biologica.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2 text-xs font-serif">
                <span className="text-stone-500">Idratazione & Purezza</span>
                <div className="flex items-center gap-3">
                  <a href="https://www.essenzanaturae.it/wp-content/uploads/2024/12/WS-M70-Sz_-2-3v-RMN_-scheda_-Rev-27-12-2024-1.pdf" target="_blank" rel="noopener noreferrer" className="text-amber-800 font-semibold hover:underline inline-flex items-center gap-1">
                    Scheda PDF <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://www.youtube.com/watch?v=elbOEII7-zo" target="_blank" rel="noopener noreferrer" className="text-amber-800 font-semibold hover:underline inline-flex items-center gap-1">
                    Video <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* 3. Aromaterapia ed Essenze */}
            <div className="p-8 rounded-[2rem] bg-[#fcfbf9] border border-stone-200/80 shadow-sm space-y-4 hover:border-amber-300 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">Tempio Biologico</span>
                <h4 className="text-xl font-bold font-serif text-stone-900">Aromaterapia ed Estratti Botanici Puri</h4>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  Oli essenziali di grado terapeutico per sostenere l'equilibrio emotivo, purificare gli ambienti domestici e nutrire il corpo in modo naturale.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-serif">
                <span className="text-stone-500">Benessere olistico & Ambiente</span>
                <a href="https://www.doterra.com/ME/it_ME" target="_blank" rel="noopener noreferrer" className="text-amber-800 font-semibold hover:underline inline-flex items-center gap-1">
                  Esplora dōTERRA <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* 4. Rigenerazione Ecologica */}
            <div className="p-8 rounded-[2rem] bg-[#fcfbf9] border border-stone-200/80 shadow-sm space-y-4 hover:border-amber-300 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">Cura della Terra</span>
                <h4 className="text-xl font-bold font-serif text-stone-900">Rigenerazione Ecologica dei Terreni e della Casa</h4>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  Soluzioni simbiotiche a base di microorganismi effettivi per rivitalizzare la terra, favorire la crescita delle piante e pulire senza tossine.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-serif">
                <span className="text-stone-500">Simbiosi & Ecologia domestica</span>
                <a href="http://ecopassaparola.it" target="_blank" rel="noopener noreferrer" className="text-amber-800 font-semibold hover:underline inline-flex items-center gap-1">
                  Visita Ecopassaparola <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* 5. Equilibrio e Pulizia Interna */}
            <div className="p-8 rounded-[2rem] bg-[#fcfbf9] border border-stone-200/80 shadow-sm space-y-4 hover:border-amber-300 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">Salute Cellulare</span>
                <h4 className="text-xl font-bold font-serif text-stone-900">Equilibrio Acido-Basico e Depurazione</h4>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  Integrazione minerale mirata per il bilanciamento del pH corporeo e protocolli mirati di igienizzazione e pulizia profonda.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2 text-xs font-serif">
                <span className="text-stone-500">Omeostasi & Vitalità</span>
                <div className="flex items-center gap-3">
                  <a href="https://www.viafarmaciaonline.it/pascoe-basenpulver-polvere-100-g.html" target="_blank" rel="noopener noreferrer" className="text-amber-800 font-semibold hover:underline inline-flex items-center gap-1">
                    Basenpulver <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href="https://dioxitube.com/w/fARnr15iVu8zKpJysQhmZ2" target="_blank" rel="noopener noreferrer" className="text-amber-800 font-semibold hover:underline inline-flex items-center gap-1">
                    Diossido di Cloro <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* 6. Consapevolezza Strategica */}
            <div className="p-8 rounded-[2rem] bg-[#fcfbf9] border border-stone-200/80 shadow-sm space-y-4 hover:border-amber-300 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">Analisi & Visione</span>
                <h4 className="text-xl font-bold font-serif text-stone-900">Consapevolezza Economica e Monitoraggio</h4>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  Strumenti di analisi evoluta dei mercati e dei dati finanziari per sviluppare una lucidità strategica e decisionale indipendente.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-serif">
                <span className="text-stone-500">Chiarezza & Visione</span>
                <a href="https://www.tradetector.net/" target="_blank" rel="noopener noreferrer" className="text-amber-800 font-semibold hover:underline inline-flex items-center gap-1">
                  Visita Tradetector <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Approfondimento Memoria dell'Acqua */}
          <div className="p-8 rounded-3xl bg-amber-50/40 border border-amber-200/60 space-y-3 text-center">
            <h4 className="font-serif font-bold text-lg text-stone-900">Ulteriori Approfondimenti Biofisici</h4>
            <p className="text-xs text-stone-600 font-light max-w-xl mx-auto">
              Per comprendere a fondo la valenza scientifica e la memoria biologica dell'acqua, esplora le risorse documentali ufficiali.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a href="https://www.youtube.com/watch?v=DZJbFmkUh2g" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-serif font-semibold text-amber-900 bg-white px-4 py-2 rounded-xl border border-amber-200 shadow-xs hover:bg-amber-50 transition-all">
                Video Documentario Acqua <ExternalLink className="w-3 h-3" />
              </a>
              <a href="https://www.youtube.com/watch?v=Di3BtfUqJwg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-serif font-semibold text-amber-900 bg-white px-4 py-2 rounded-xl border border-amber-200 shadow-xs hover:bg-amber-50 transition-all">
                Video Testimonianze Acqua <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* DASHBOARD INTERATTIVA (REATTORE RADIALE & ALBERO A PIANI) */}
        {/* ========================================================================= */}
        <div className="rounded-[2.5rem] border border-stone-800 bg-[#141210] p-8 md:p-12 text-stone-100 shadow-2xl space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900 border border-stone-800 text-amber-400 text-[10px] font-mono tracking-widest">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              MATRICE FRATTALE DEL GIARDINO LUMINOSO
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white font-serif tracking-tight">
              REATTORE CONCENTRICO E SCHEMA AD ALBERO A PIANI
            </h3>
            <p className="text-stone-400 text-xs font-light font-serif">
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
              className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 border border-stone-700 rounded-xl text-xs font-mono text-cyan-400 transition-all cursor-pointer"
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
            <div className="lg:col-span-6 bg-stone-900/50 border border-stone-800/80 rounded-2xl p-4 flex flex-col items-center justify-center relative shadow-inner overflow-hidden min-h-[480px]">
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
                        stroke={isFocused ? '#57534e' : '#292524'}
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
                            fill={isActive ? dotColor : '#1c1917'}
                            stroke={isActive ? 'none' : '#292524'}
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
            <div className="lg:col-span-6 bg-stone-900/60 border border-stone-800/80 rounded-2xl p-5 backdrop-blur-md flex flex-col justify-between space-y-3">
              <div className="flex justify-between items-center border-b border-stone-800 pb-2">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <TreePine className="w-3.5 h-3.5 text-amber-400" /> Schema ad Albero con Conteggi
                </span>
                <span className="text-[9px] font-mono bg-amber-950/80 text-amber-300 px-2 py-0.5 rounded border border-amber-500/20">
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
                      className={`p-3 bg-stone-950/80 rounded-xl border border-stone-800/80 space-y-1.5 transition-all border-l-4 ${isPast || isFocused ? 'opacity-100' : 'opacity-40'}`}
                      style={{ borderLeftColor: borderColor }}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-stone-900 text-amber-300 font-bold rounded text-[11px] border border-amber-500/20">
                            [{lvl.countNum}]
                          </span>
                          <span className={`font-bold ${isFocused ? 'text-white' : 'text-stone-300'} text-xs font-serif`}>
                            {lvl.label} ➔ <span className="text-amber-400">{lvl.peopleCount}</span>
                          </span>
                        </div>
                        <span className={`text-[10px] px-2 py-0.5 rounded ${isCompleted ? 'bg-amber-950 text-amber-300 border border-amber-500/30' : 'bg-stone-900 text-stone-400'}`}>
                          {lvl.currentSteps} / {lvl.maxSteps} passi
                        </span>
                      </div>
                      <p className="text-[10px] text-stone-400 font-light pl-7 font-serif">{lvl.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

        {/* CONCLUSIONE E NAVIGAZIONE */}
        <div className="p-12 rounded-[2.5rem] border border-amber-200/80 bg-gradient-to-br from-amber-50/70 via-white to-emerald-50/40 space-y-6 text-center shadow-xl backdrop-blur-md">
          <h3 className="text-2xl font-bold font-serif text-stone-900">Il Giardino Condiviso</h3>
          <p className="text-base text-stone-600 max-w-2xl mx-auto font-light leading-relaxed font-serif italic">
            "Ogni grande cambiamento inizia da un piccolo seme. La domanda non è quanto può crescere il seme, ma cosa può diventare un mondo in cui milioni di persone scelgono di coltivarlo insieme[cite: 1]."
          </p>
          <div className="pt-3">
            <Link href="/">
              <button className="bg-stone-900 hover:bg-stone-800 text-stone-50 font-medium px-9 py-4 rounded-full text-xs md:text-sm inline-flex items-center gap-2.5 shadow-lg transition-all transform hover:scale-105 cursor-pointer font-serif">
                ← Torna alla Home <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>

      </main>

    </div>
  );
}
