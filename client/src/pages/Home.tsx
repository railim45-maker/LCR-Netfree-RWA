import { Link } from "wouter";
import { ArrowRight, Sparkles, Coins } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen relative text-stone-800 space-y-16 md:space-y-24 pb-24 md:pb-40 overflow-hidden bg-[#fcfbf9]">
      
      {/* SFONDO LUMINOSO E GRADIENTI ARMONICI RESPONSIVE */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[1200px] h-[400px] md:h-[700px] bg-gradient-to-b from-amber-100/30 via-emerald-50/20 to-transparent blur-[120px] md:blur-[150px] rounded-full pointer-events-none z-0" />

      {/* HEADER DI NAVIGAZIONE FLUIDO */}
      <header className="container max-w-6xl mx-auto px-4 md:px-6 pt-6 md:pt-12 relative z-10">
        <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 rounded-full bg-white/90 border border-stone-200/60 shadow-[0_2px_20px_rgba(0,0,0,0.02)] backdrop-blur-xl">
          <div className="flex items-center gap-2 md:gap-3">
            <span className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center text-[10px] md:text-xs border border-amber-200/60 font-serif">✦</span>
            <span className="font-bold text-[10px] md:text-xs uppercase tracking-wider md:tracking-widest text-stone-600 font-serif truncate max-w-[180px] sm:max-w-none">Il Giardino Luminoso</span>
          </div>
          <nav className="flex items-center gap-3 md:gap-6 text-xs font-medium">
            <Link href="/tokenizzazione">
              <span className="text-stone-600 hover:text-stone-900 cursor-pointer transition-colors font-serif whitespace-nowrap">Tokenizzazione</span>
            </Link>
            <Link href="/netfree-deep-dive">
              <span className="text-amber-800 font-semibold hover:underline cursor-pointer transition-colors font-serif hidden sm:inline">NetFree LCR</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* CONTENUTO PRINCIPALE */}
      <main className="container max-w-5xl mx-auto px-4 md:px-6 space-y-16 md:space-y-24 relative z-10">
        
        {/* HERO SECTION */}
        <div className="text-center space-y-6 pt-6 md:pt-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-amber-50/70 border border-amber-200/70 text-amber-900 text-[11px] md:text-xs font-medium tracking-wide md:tracking-widest shadow-sm font-serif">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" /> L'Economia del Dono e la Sostenibilità Circolare
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif text-stone-900 tracking-tight leading-[1.15]">
            Il Giardino Luminoso & Netfree LCR
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 leading-relaxed font-light font-serif px-2">
            Un ecosistema integrato di benessere biologico, sovranità energetica e tokenizzazione del valore reale per una crescita autentica e condivisa.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <Link href="/netfree-deep-dive" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-stone-900 hover:bg-stone-800 text-stone-50 font-medium px-8 py-3.5 rounded-full text-xs md:text-sm inline-flex items-center justify-center gap-2 shadow-lg transition-all transform hover:scale-105 cursor-pointer font-serif">
                Esplora NetFree Deep Dive <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/tokenizzazione" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-amber-100/80 hover:bg-amber-200/80 text-amber-900 font-medium px-8 py-3.5 rounded-full text-xs md:text-sm inline-flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer font-serif border border-amber-300/60">
                Vai alla Tokenizzazione <Coins className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>

        {/* SEZIONE PILASTRI DELL'ECOSISTEMA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {/* CARD 1: TEMPIO BIOLOGICO */}
          <div className="p-6 sm:p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-4 flex flex-col justify-between hover:border-amber-300 transition-all">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Salute & Natura
              </span>
              <h3 className="text-2xl font-bold font-serif text-stone-900">Il Tempio Biologico</h3>
              <p className="text-sm text-stone-600 font-light leading-relaxed font-serif">
                Protocolli di depurazione profonda, acqua alcalina rivitalizzata, micro-organismi effettivi e nutrizione cellulare per il risveglio dell'omeostasi corporea.
              </p>
            </div>
            <div className="pt-4 border-t border-stone-100">
              <Link href="/netfree-deep-dive">
                <span className="text-xs font-serif font-semibold text-emerald-800 hover:underline inline-flex items-center gap-1 cursor-pointer">
                  Scopri i protocolli di salute <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
          </div>

          {/* CARD 2: TOKENIZZAZIONE & RWA */}
          <div className="p-6 sm:p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-4 flex flex-col justify-between hover:border-amber-300 transition-all">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Finanza & Valore Reale
              </span>
              <h3 className="text-2xl font-bold font-serif text-stone-900">Tokenizzazione RWA</h3>
              <p className="text-sm text-stone-600 font-light leading-relaxed font-serif">
                Attivazione digitale dei patrimoni reali senza svendite. Tecnologia Blotix, architettura a doppio token e modelli di rendita sostenibile al 2,5%.
              </p>
            </div>
            <div className="pt-4 border-t border-stone-100">
              <Link href="/tokenizzazione">
                <span className="text-xs font-serif font-semibold text-amber-800 hover:underline inline-flex items-center gap-1 cursor-pointer">
                  Accedi all'area tokenizzazione <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
          </div>

        </div>

        {/* SEZIONE INFORMATIVA / MATRICE FRATTALE */}
        <div className="p-6 sm:p-10 md:p-14 rounded-3xl md:rounded-[2.5rem] bg-[#1c1917] text-stone-100 shadow-2xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-3 relative z-10 max-w-2xl">
            <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400 bg-stone-900 px-3 py-1 rounded border border-stone-800">
              Crescita Organica
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">La Matrice Frattale e la Comunità</h3>
            <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed font-serif">
              Un modello basato sulla cura di cerchie ristrette (~6 persone per nodo) che si propaga organicamente fino a costruire una rete diffusa di sintropia e coerenza collettiva.
            </p>
          </div>
          <div className="pt-2 relative z-10">
            <Link href="/netfree-deep-dive">
              <button className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-medium px-6 py-3 rounded-full text-xs inline-flex items-center gap-2 transition-all font-serif cursor-pointer">
                Visualizza il Reattore Concentrico <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>

      </main>

    </div>
  );
}
