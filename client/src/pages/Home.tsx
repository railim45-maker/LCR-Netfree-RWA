import React from 'react';
import { Link } from 'wouter';
import { Sparkles, Leaf, ShieldCheck, Globe, ArrowRight, ExternalLink } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9fbf9] text-stone-800 font-serif selection:bg-amber-100">
      
      {/* CONTENUTO PRINCIPALE */}
      <main className="container max-w-4xl mx-auto px-4 md:px-6 space-y-16 md:space-y-24 relative z-10 py-12">

        {/* INTRODUZIONE */}
        <div className="text-center space-y-4 md:space-y-6 pt-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-amber-50/70 border border-amber-200/70 text-amber-900 text-[11px] md:text-xs font-medium tracking-wide md:tracking-widest shadow-sm font-serif">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" /> La Via della Libertà e della Cura
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-stone-900 tracking-tight">
            Il Viaggio Net-Free
          </h1>
          <p className="text-stone-600 text-sm md:text-base font-light leading-relaxed">
            Un ecosistema fondato sulla cooperazione, sulla sostenibilità energetica e sulla matematica della cura per ritrovare la piena sovranità e abbondanza circolare.
          </p>
        </div>

        {/* LE 4 TAPPE / I PILASTRI */}
        <div className="space-y-6 md:space-y-8">

          {/* Tappa I */}
          <div className="p-6 sm:p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-4 relative overflow-hidden transition-all hover:border-amber-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-mono font-bold text-sm border border-amber-200">01</span>
                <h3 className="font-serif font-bold text-xl text-stone-900">L'Alleggerimento e la Soglia (Il Primo Respiro)</h3>
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full self-start sm:self-auto">Fase Iniziale</span>
            </div>
            <p className="text-stone-600 text-sm font-light leading-relaxed">
              L'accoglienza nella community e l'attivazione PEF Power (Green Sharing) tramite le comunità energetiche rinnovabili, garantendo un beneficio economico immediato e azzerando i costi superflui fin dal primo mese.
            </p>
          </div>

          {/* Tappa II */}
          <div className="p-6 sm:p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-4 relative overflow-hidden transition-all hover:border-amber-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-mono font-bold text-sm border border-amber-200">02</span>
                <h3 className="font-serif font-bold text-xl text-stone-900">Il Radicamento e il Tempio Biologico</h3>
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full self-start sm:self-auto">Consapevolezza</span>
            </div>
            <p className="text-stone-600 text-sm font-light leading-relaxed">
              Percorsi di formazione leggera e profonda su acqua viva, biologia e riallineamento energetico interiore per liberare la mente dalle tensioni della scarsità.
            </p>
          </div>

          {/* Tappa III */}
          <div className="p-6 sm:p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-4 relative overflow-hidden transition-all hover:border-amber-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-mono font-bold text-sm border border-amber-200">03</span>
                <h3 className="font-serif font-bold text-xl text-stone-900">L'Espansione e la Chiave Railim</h3>
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full self-start sm:self-auto">Crescita</span>
            </div>
            <p className="text-stone-600 text-sm font-light leading-relaxed">
              Il seme simbolico ricevuto viene coltivato e condiviso con la propria cerchia ristretta, dando vita a una rete organica di relazioni e supporto reciproco.
            </p>
          </div>

          {/* Tappa IV */}
          <div className="p-6 sm:p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-4 relative overflow-hidden transition-all hover:border-amber-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-mono font-bold text-sm border border-amber-200">04</span>
                <h3 className="font-serif font-bold text-xl text-stone-900">La Sovranità Totale e la Tokenizzazione</h3>
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full self-start sm:self-auto">Traguardo</span>
            </div>
            <p className="text-stone-600 text-sm font-light leading-relaxed">
              L'accesso ai processi di valorizzazione e tokenizzazione degli asset reali, trasformando il valore potenziale in ricchezza condivisa e stabile per il futuro.
            </p>
          </div>

        </div>

        {/* SEZIONE: IL MODELLO DI SVILUPPO */}
        <div className="p-6 sm:p-10 md:p-14 rounded-3xl md:rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-8">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span className="text-xs uppercase tracking-[3px] text-amber-800 font-serif font-semibold">Il Modello di Sviluppo</span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-900">Dalla Vendita alla Cura del Giardino</h3>
            <p className="text-stone-600 text-xs sm:text-sm font-light font-serif">Il passaggio strutturale dal vecchio sistema piramidale al Sistema Net-Free fondato sulla comunità e sull'abbondanza circolare.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 md:p-8 rounded-3xl bg-stone-50 border border-stone-200/80 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500 font-semibold">Vecchio Sistema</span>
              <h4 className="font-serif font-bold text-lg sm:text-xl text-stone-900">Reclutamento, Pressione, Scarsità</h4>
              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                Una struttura basata sulla competizione solitaria e sulla vendita forzata, dove la fatica aumenta e la libertà si allontana costantemente.
              </p>
            </div>
