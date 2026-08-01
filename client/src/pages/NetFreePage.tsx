import React from 'react';
import { ArrowLeft, Sparkles, CheckCircle2, Users, HeartHandshake, Shield, Compass, Play, FileText, Download, Video } from 'lucide-react';
import { Link } from 'wouter';

export default function NetFreePage() {
  return (
    <div className="min-h-screen relative text-stone-800 space-y-16 md:space-y-28 pb-24 md:pb-40 overflow-hidden bg-[#fcfbf9]">
      
      {/* SFONDO LUMINOSO E GRADIENTI ARMONICI */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[1200px] h-[400px] md:h-[700px] bg-gradient-to-b from-emerald-100/30 via-amber-50/20 to-transparent blur-[120px] md:blur-[150px] rounded-full pointer-events-none z-0" />

      {/* HEADER DI NAVIGAZIONE INTERNA */}
      <header className="container max-w-5xl mx-auto px-4 md:px-6 pt-6 md:pt-12 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 md:px-6 py-3 md:py-4 rounded-3xl sm:rounded-full bg-white/90 border border-stone-200/60 shadow-[0_2px_20px_rgba(0,0,0,0.02)] backdrop-blur-xl">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-serif text-stone-600 hover:text-stone-900 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Torna alla Mappa Principale
          </Link>
          <nav className="flex items-center gap-2 text-xs font-medium">
            <Link href="/tokenizzazione" className="px-3 py-1 rounded-full bg-amber-50 text-amber-900 hover:bg-amber-100 font-serif">✦ RWA</Link>
            <Link href="/liberta-legale" className="px-3 py-1 rounded-full bg-stone-100 text-stone-900 hover:bg-stone-200 font-serif">🛡️ Sovranità</Link>
          </nav>
        </div>
      </header>

      {/* CONTENUTO PRINCIPALE */}
      <main className="container max-w-4xl mx-auto px-4 md:px-6 space-y-16 md:space-y-24 relative z-10">
        
        {/* INTRODUZIONE */}
        <div className="text-center space-y-4 md:space-y-6 pt-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-medium font-serif shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> L'Economia del Dono e della Cura
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-stone-900 tracking-tight leading-[1.15]">
            Il Processo Net-Free: Presentazione e Materiali
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-600 leading-relaxed font-light font-serif px-2">
            Uno spazio multimediale integrato che raccoglie il video di presentazione del progetto, i documenti informativi, le schematiche e le linee guida della cerchia di cura.
          </p>
        </div>

        {/* SEZIONE VIDEO DI PRESENTAZIONE */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-stone-200/80 shadow-xl space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-serif font-semibold">Media Ufficiali</span>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-stone-900">Video di Presentazione del Progetto</h3>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-serif text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <Video className="w-3.5 h-3.5" /> Pronto per l'aggiornamento
            </span>
          </div>

          {/* PLAYER VIDEO / PLACEHOLDER MULTIMEDIALE */}
          <div className="aspect-video w-full rounded-2xl bg-stone-900 text-stone-400 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group shadow-inner border border-stone-800">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/40 to-stone-900/80 z-0" />
            <div className="relative z-10 space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg group-hover:scale-105 transition-transform">
                <Play className="w-6 h-6 ml-0.5 fill-current" />
              </div>
              <h4 className="font-serif font-bold text-stone-200 text-base sm:text-lg">Presentazione Ufficiale Net-Free LCR</h4>
              <p className="text-xs text-stone-400 max-w-md font-serif font-light">
                Il video illustrativo che spiega i passaggi della cerchia, la visione circolare e i modelli di sviluppo sostenibile.
              </p>
            </div>
          </div>
        </div>

        {/* SEZIONE MATERIALE INFORMATIVO E SCHEMATICHE */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-stone-200/80 shadow-xl space-y-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-emerald-800 font-serif font-semibold">Documentazione Tecnica</span>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-stone-900">Materiale Informativo e Schematiche</h3>
            <p className="text-stone-600 text-xs sm:text-sm font-light font-serif">Risorse scaricabili, registri e diagrammi strutturali del progetto.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-3 hover:border-emerald-300 transition-colors">
              <div className="flex items-center justify-between">
                <FileText className="w-5 h-5 text-emerald-800" />
                <span className="text-[10px] font-mono uppercase bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded-full font-semibold">PDF / Notion</span>
              </div>
              <h4 className="font-serif font-bold text-stone-900 text-base">Libro Mastro & Blueprint</h4>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Il registro tecnico ed economico completo dei progetti e delle infrastrutture ecosistemiche.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-3 hover:border-emerald-300 transition-colors">
              <div className="flex items-center justify-between">
                <Compass className="w-5 h-5 text-emerald-800" />
                <span className="text-[10px] font-mono uppercase bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded-full font-semibold">Schematica</span>
              </div>
              <h4 className="font-serif font-bold text-stone-900 text-base">Diagramma della Cerchia</h4>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                La rappresentazione visiva dei flussi di cura, dei passaggi di livello e della fioritura circolare.
              </p>
            </div>

          </div>
        </div>

        {/* I PASSI OPERATIVI DEL PROCESSO */}
        <div className="space-y-6">
          <div className="space-y-2 text-center max-w-xl mx-auto pb-4">
            <h3 className="text-2xl font-serif font-bold text-stone-900">I 4 Passi del Modello</h3>
            <p className="text-stone-600 text-xs sm:text-sm font-light font-serif">La progressione naturale per accompagnare la cerchia.</p>
          </div>
          
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/80 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-900 border border-emerald-200 flex items-center justify-center font-bold font-serif text-sm">1</span>
              <h3 className="text-lg md:text-xl font-bold font-serif text-stone-900">Il Presidio dello Spazio Personale</h3>
            </div>
            <p className="text-stone-600 text-xs sm:text-sm font-light font-serif sm:pl-13 leading-relaxed">
              Il primo dovere verso se stessi e la comunità è l'equilibrio del proprio spazio. Prima di guidare gli altri, impari a stabilizzare la tua posizione e a fare tuoi i principi di base della sostenibilità e della protezione economica.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/80 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-900 border border-emerald-200 flex items-center justify-center font-bold font-serif text-sm">2</span>
              <h3 className="text-lg md:text-xl font-bold font-serif text-stone-900">L'Attivazione della Cerchia di Cura</h3>
            </div>
            <p className="text-stone-600 text-xs sm:text-sm font-light font-serif sm:pl-13 leading-relaxed">
              Non cerchi clienti da spremere, ma entri in connessione con una cerchia ristretta di persone di fiducia. Condividi il percorso con chi avverte lo stesso bisogno di uscire dalla ruota della scarsità e desidera costruire stabilità.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/80 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-900 border border-emerald-200 flex items-center justify-center font-bold font-serif text-sm">3</span>
              <h3 className="text-lg md:text-xl font-bold font-serif text-stone-900">Il Flusso dell'Abbondanza Circolare</h3>
            </div>
            <p className="text-stone-600 text-xs sm:text-sm font-light font-serif sm:pl-13 leading-relaxed">
              Le risorse e il sostegno circolano all'interno della cerchia secondo i parametri dell'economia del dono. Ciascuno sostiene il proprio compagno di strada, azzerando le frizioni e generando un circolo virtuoso di mutuo soccorso.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/80 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-900 border border-emerald-200 flex items-center justify-center font-bold font-serif text-sm">4</span>
              <h3 className="text-lg md:text-xl font-bold font-serif text-stone-900">La Moltiplicazione e la Fioritura</h3>
            </div>
            <p className="text-stone-600 text-xs sm:text-sm font-light font-serif sm:pl-13 leading-relaxed">
              Una volta che la cerchia è stabilizzata, il processo si ripete organicamente: ogni componente sostiene a sua volta la propria cerchia, estendendo la rete della fioritura senza alcuna imposizione gerarchica piramidale.
            </p>
          </div>

        </div>

        {/* SEZIONE SINTESI OPERATIVA */}
        <div className="p-8 rounded-3xl bg-emerald-900 text-stone-50 space-y-6 shadow-xl text-center">
          <h3 className="text-2xl font-serif font-bold">Pronto a occuparti del tuo spazio?</h3>
          <p className="text-xs sm:text-sm font-light font-serif text-emerald-100 max-w-lg mx-auto leading-relaxed">
            Il processo è semplice perché segue la legge naturale delle cose: ci si prende cura di ciò che è vicino, si crea stabilità e si condivide il metodo con chi è pronto a riceverlo.
          </p>
          <div className="pt-2 flex items-center justify-center gap-4 flex-wrap">
            <Link href="/" className="inline-flex items-center gap-2 bg-white text-emerald-900 hover:bg-emerald-50 font-serif font-semibold px-8 py-3.5 rounded-full text-xs transition-all shadow-md">
              Torna alla Mappa dei Checkpoint →
            </Link>
            <Link href="/tokenizzazione" className="inline-flex items-center gap-2 bg-emerald-800 text-emerald-100 hover:bg-emerald-700 font-serif font-semibold px-6 py-3.5 rounded-full text-xs transition-all border border-emerald-700">
              Esplora la Tokenizzazione RWA
            </Link>
          </div>
        </div>

      </main>

    </div>
  );
}
