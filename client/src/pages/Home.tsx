import React from 'react';
import { Sparkles, ArrowRight, ExternalLink, ShieldCheck, Coins, Users, FileText, CheckCircle2, MessageCircle, Calculator, FileCheck, CheckSquare, Square, Lock, Layers, Lightbulb, Building2, Landmark, HeartHandshake, Play, TreePine, Globe, Activity } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen relative text-stone-800 space-y-16 md:space-y-24 pb-24 md:pb-40 overflow-hidden bg-[#fcfbf9]">
      
      {/* SFONDO LUMINOSO E GRADIENTI ARMONICI */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[1200px] h-[400px] md:h-[700px] bg-gradient-to-b from-amber-100/30 via-emerald-50/20 to-transparent blur-[120px] md:blur-[150px] rounded-full pointer-events-none z-0" />

      {/* HEADER DI NAVIGAZIONE */}
      <header className="container max-w-5xl mx-auto px-4 md:px-6 pt-6 md:pt-12 relative z-10">
        <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 rounded-full bg-white/90 border border-stone-200/60 shadow-[0_2px_20px_rgba(0,0,0,0.02)] backdrop-blur-xl">
          <div className="flex items-center gap-2 md:gap-3">
            <span className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center text-[10px] md:text-xs border border-amber-200/60 font-serif">✦</span>
            <span className="font-bold text-[10px] md:text-xs uppercase tracking-wider md:tracking-widest text-stone-600 font-serif truncate max-w-[200px] md:max-w-none">Il Giardino Luminoso • NetFree LCR</span>
          </div>
          <nav className="flex items-center gap-4 text-xs font-medium">
            <a href="/tokenizzazione" className="text-stone-600 hover:text-stone-900 transition-colors font-serif whitespace-nowrap">Vai a Tokenizzazione →</a>
          </nav>
        </div>
      </header>

      {/* CONTENUTO PRINCIPALE */}
      <main className="container max-w-4xl mx-auto px-4 md:px-6 space-y-12 md:space-y-20 relative z-10">
        
        {/* INTRODUZIONE */}
        <div className="text-center space-y-4 md:space-y-6 pt-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-amber-50/70 border border-amber-200/70 text-amber-900 text-[11px] md:text-xs font-medium tracking-wide md:tracking-widest shadow-sm font-serif">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" /> L'Economia del Dono e la Sostenibilità Circolare
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-stone-900 tracking-tight leading-[1.15]">
            Il Giardino Luminoso & NetFree LCR
          </h1>
          <p className="text-sm md:text-lg text-stone-600 leading-relaxed font-light font-serif px-2">
            Un ecosistema integrato di benessere biologico, sovranità energetica e tokenizzazione del valore reale per una crescita autentica e condivisa.
          </p>
        </div>

        {/* ACCESSO RAPIDO ALLE SEZIONI PRINCIPALI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <a href="/netfree-deep-dive" className="p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl hover:border-amber-300 transition-all flex flex-col justify-between space-y-4 group">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">Approfondimento</span>
              <h3 className="text-xl font-bold font-serif text-stone-900 group-hover:text-amber-800 transition-colors">NetFree Deep Dive</h3>
              <p className="text-xs md:text-sm text-stone-600 font-light">Esplora il reattore concentrico, l'albero a piani e i presidi del tempio biologico.</p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-serif font-semibold text-amber-900">
              Esplora Deep Dive <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>

          <a href="/tokenizzazione" className="p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl hover:border-amber-300 transition-all flex flex-col justify-between space-y-4 group">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">Finanza Reale</span>
              <h3 className="text-xl font-bold font-serif text-stone-900 group-hover:text-amber-800 transition-colors">Tokenizzazione & Asset</h3>
              <p className="text-xs md:text-sm text-stone-600 font-light">Accedi al simulatore, ai contratti ufficiali e alla manifestazione d'interesse.</p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-serif font-semibold text-amber-900">
              Vai alla Tokenizzazione <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>

      </main>

    </div>
  );
}
