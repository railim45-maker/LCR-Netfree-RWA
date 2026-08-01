import React from 'react';
import { ArrowLeft, Sparkles, ShieldCheck, Coins, Building2, CheckCircle2 } from 'lucide-react';
import { Link } from 'wouter';

export default function TokenizzazionePage() {
  return (
    <div className="min-h-screen relative text-stone-800 space-y-16 md:space-y-28 pb-24 md:pb-40 overflow-hidden bg-[#fcfbf9]">
      
      {/* SFONDO LUMINOSO E GRADIENTI ARMONICI */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[1200px] h-[400px] md:h-[700px] bg-gradient-to-b from-amber-100/30 via-stone-100/40 to-transparent blur-[120px] md:blur-[150px] rounded-full pointer-events-none z-0" />

      {/* HEADER DI NAVIGAZIONE INTERNA */}
      <header className="container max-w-5xl mx-auto px-4 md:px-6 pt-6 md:pt-12 relative z-10">
        <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 rounded-3xl sm:rounded-full bg-white/90 border border-stone-200/60 shadow-[0_2px_20px_rgba(0,0,0,0.02)] backdrop-blur-xl">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-serif text-stone-600 hover:text-stone-900 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Torna alla Mappa Principale
          </Link>
          <span className="font-bold text-[10px] sm:text-xs uppercase tracking-wider text-amber-800 font-serif">
            ✦ Tokenizzazione RWA • Le Fondamenta
          </span>
        </div>
      </header>

      {/* CONTENUTO PRINCIPALE */}
      <main className="container max-w-4xl mx-auto px-4 md:px-6 space-y-16 md:space-y-24 relative z-10">
        
        {/* INTRODUZIONE */}
        <div className="text-center space-y-4 md:space-y-6 pt-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium font-serif shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Materia Solida e Protezione
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-stone-900 tracking-tight leading-[1.15]">
            Tokenizzazione RWA: Mettere i Piedi a Terra
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-600 leading-relaxed font-light font-serif px-2">
            Il primo blocco di chi è stanco è la paura di non potersi permettere il cambiamento o di rischiare risorse preziose. La tokenizzazione di asset reali (Real World Assets) non è speculazione finanziaria, ma lo strumento per ancorare la sicurezza familiare alla materia tangibile.
          </p>
        </div>

        {/* I PILASTRI DELLA TOKENIZZAZIONE */}
        <div className="space-y-6">
          
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/80 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200 flex items-center justify-center font-bold font-serif text-sm">1</span>
              <h3 className="text-lg md:text-xl font-bold font-serif text-stone-900">Ancoraggio agli Asset Reali (RWA)</h3>
            </div>
            <p className="text-stone-600 text-xs sm:text-sm font-light font-serif sm:pl-13 leading-relaxed">
              Ogni token digitale emesso rappresenta una quota di valore reale e tangibile nel mondo fisico: beni, progetti strutturali o immobiliari che possiedono un valore intrinseco e non fluttuano sul nulla.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/80 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200 flex items-center justify-center font-bold font-serif text-sm">2</span>
              <h3 className="text-lg md:text-xl font-bold font-serif text-stone-900">Uscita dalla Pressione Finanziaria</h3>
            </div>
            <p className="text-stone-600 text-xs sm:text-sm font-light font-serif sm:pl-13 leading-relaxed">
              L'obiettivo primario di questo pilastro è togliere l'ansia della sopravvivenza quotidiana. Creiamo una base di sicurezza economica protetta che permette di respirare e di riallineare le proprie energie verso la crescita.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/80 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200 flex items-center justify-center font-bold font-serif text-sm">3</span>
              <h3 className="text-lg md:text-xl font-bold font-serif text-stone-900">Modelli di Club Deal e Trasparenza</h3>
            </div>
            <p className="text-stone-600 text-xs sm:text-sm font-light font-serif sm:pl-13 leading-relaxed">
              Attraverso strutture associative e protocolli di tokenizzazione verificati, i partecipanti cooperano direttamente per acquisire e gestire asset strategici, eliminando i costi parassitari degli intermediari tradizionali.
            </p>
          </div>

        </div>

        {/* BOX CONCLUSIVO */}
        <div className="p-8 rounded-3xl bg-stone-900 text-stone-50 space-y-6 shadow-xl text-center">
          <h3 className="text-2xl font-serif font-bold">Hai completato le fondamenta?</h3>
          <p className="text-xs sm:text-sm font-light font-serif text-stone-300 max-w-lg mx-auto leading-relaxed">
            Una volta compreso il valore della protezione materiale, puoi tornare alla mappa principale per confermare il checkpoint e procedere verso la cerchia di cura.
          </p>
          <div className="pt-2">
            <Link href="/" className="inline-flex items-center gap-2 bg-amber-400 text-stone-900 hover:bg-amber-300 font-serif font-semibold px-8 py-3.5 rounded-full text-xs transition-all shadow-md">
              Torna alla Mappa dei Checkpoint →
            </Link>
          </div>
        </div>

      </main>

    </div>
  );
}
