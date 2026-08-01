import React from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { Link } from 'wouter';

export default function NetFreePage() {
  return (
    <div className="min-h-screen relative text-stone-800 space-y-16 md:space-y-28 pb-24 md:pb-40 overflow-hidden bg-[#fcfbf9]">
      <header className="container max-w-5xl mx-auto px-4 md:px-6 pt-6 md:pt-12 relative z-10">
        <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 rounded-3xl sm:rounded-full bg-white/90 border border-stone-200/60 shadow-sm backdrop-blur-xl">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-serif text-stone-600 hover:text-stone-900">
            <ArrowLeft className="w-4 h-4" /> Torna alla Mappa Principale
          </Link>
          <span className="font-bold text-[10px] sm:text-xs uppercase tracking-wider text-emerald-800 font-serif">
            🌱 NetFree Deep Dive
          </span>
        </div>
      </header>

      <main className="container max-w-4xl mx-auto px-4 md:px-6 space-y-12 relative z-10">
        <div className="text-center space-y-4 pt-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-medium font-serif">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Economia del Dono
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-stone-900">
            Il Processo Net-Free
          </h1>
          <p className="text-sm sm:text-base text-stone-600 font-light font-serif">
            Un ecosistema familiare e circolare dove ci si sostiene a vicenda, coltivando il proprio spazio e accompagnando la cerchia verso la fioritura.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-emerald-900 text-stone-50 space-y-6 text-center shadow-xl">
          <h3 className="text-2xl font-serif font-bold">Pronto a occuparti del tuo spazio?</h3>
          <Link href="/" className="inline-flex items-center gap-2 bg-white text-emerald-900 hover:bg-emerald-50 font-serif font-semibold px-8 py-3.5 rounded-full text-xs transition-all">
            Torna alla Mappa e Verifica i Checkpoint →
          </Link>
        </div>
      </main>
    </div>
  );
}
