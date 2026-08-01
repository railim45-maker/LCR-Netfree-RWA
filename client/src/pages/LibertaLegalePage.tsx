import React from 'react';
import { ArrowLeft, Sparkles, ShieldCheck, Leaf, Compass } from 'lucide-react';
import { Link } from 'wouter';

export default function LibertaLegalePage() {
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
            🛡️ Piena Sovranità • Libertà Legale
          </span>
        </div>
      </header>

      {/* CONTENUTO PRINCIPALE */}
      <main className="container max-w-4xl mx-auto px-4 md:px-6 space-y-16 md:space-y-24 relative z-10">
        
        {/* INTRODUZIONE */}
        <div className="text-center space-y-4 md:space-y-6 pt-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium font-serif shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Il Tempio Biologico e la Coscienza
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-stone-900 tracking-tight leading-[1.15]">
            La Piena Sovranità Esistenziale
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-600 leading-relaxed font-light font-serif px-2">
            La tappa finale del cammino: il superamento dei vincoli esterni, la tutela della materia vivente e la riconnessione con i principi naturali e giuridici originari.
          </p>
        </div>

        {/* I PILASTRI DELLA SOVRANITÀ */}
        <div className="space-y-6">
          
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/80 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200 flex items-center justify-center font-bold font-serif text-sm">1</span>
              <h3 className="text-lg md:text-xl font-bold font-serif text-stone-900">Consapevolezza e Superamento della Finzione</h3>
            </div>
            <p className="text-stone-600 text-xs sm:text-sm font-light font-serif sm:pl-13 leading-relaxed">
              Grazie al confronto strategico con Aldo Pironi e i percorsi di coscienza giuridica, si sviluppa la lucidità necessaria per riconoscere i confini della finzione commerciale e ristabilire il primato dell'essere vivente.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/80 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200 flex items-center justify-center font-bold font-serif text-sm">2</span>
              <h3 className="text-lg md:text-xl font-bold font-serif text-stone-900">La Protezione del Tempio Biologico</h3>
            </div>
            <p className="text-stone-600 text-xs sm:text-sm font-light font-serif sm:pl-13 leading-relaxed">
              Il corpo e lo spazio domestico non sono oggetti di consumo, ma presidi di energia pura. Vengono adottati protocolli di purificazione dell'acqua, alimentazione pulita e permacultura per blindare la vitalità familiare.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/80 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200 flex items-center justify-center font-bold font-serif text-sm">3</span>
              <h3 className="text-lg md:text-xl font-bold font-serif text-stone-900">Autonomia e Condivisione Circolare</h3>
            </div>
            <p className="text-stone-600 text-xs sm:text-sm font-light font-serif sm:pl-13 leading-relaxed">
              La sovranità non è isolamento, ma capacità di autogovernarsi all'interno di una comunità basata sull'economia del dono, offrendo stabilità e guida ai propri compagni di strada.
            </p>
          </div>

        </div>

        {/* BOX CONCLUSIVO */}
        <div className="p-8 rounded-3xl bg-stone-900 text-stone-50 space-y-6 shadow-xl text-center">
          <h3 className="text-2xl font-serif font-bold">Hai compiuto l'intero cammino?</h3>
          <p className="text-xs sm:text-sm font-light font-serif text-stone-300 max-w-lg mx-auto leading-relaxed">
            Ritorna alla mappa principale per verificare lo stato dei tuoi sigilli e continuare ad accompagnare la tua cerchia verso la fioritura.
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
