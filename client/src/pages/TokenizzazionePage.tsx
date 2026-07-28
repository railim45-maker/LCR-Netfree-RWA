import { Link } from "wouter";
import { Coins, ArrowRight, Sparkles } from "lucide-react";

export default function TokenizzazionePage() {
  return (
    <div className="min-h-screen relative text-stone-800 space-y-20 pb-36 overflow-hidden bg-[#fcfbf9]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gradient-to-r from-sky-100/50 via-emerald-100/30 to-indigo-100/40 blur-[130px] rounded-full pointer-events-none z-0" />
      
      <header className="container max-w-4xl mx-auto px-6 pt-10 relative z-10">
        <div className="flex items-center justify-between p-4 rounded-3xl bg-white/85 border border-stone-200/80 shadow-sm backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-sky-50 text-sky-700 flex items-center justify-center text-sm border border-sky-100">🪙</span>
            <span className="font-bold text-xs uppercase tracking-wider text-stone-700 font-serif">Approfondimento • Tokenizzazione RWA</span>
          </div>
          <nav className="flex items-center gap-4 text-xs font-semibold">
            <Link href="/">
              <span className="text-stone-600 hover:text-stone-900 cursor-pointer transition-colors">← Torna alla Home</span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="container max-w-4xl mx-auto px-6 space-y-12 relative z-10">
        <div className="text-center space-y-4 pt-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-900 text-xs font-medium tracking-wide shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" /> Tecnologia e Valore Reale
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-stone-900 leading-tight">
            Tokenizzazione di Real World Asset (RWA)
          </h1>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed font-light">
            La spiegazione teorica di blockchain, NFT e di come la tokenizzazione di asset reali liberi il valore inespresso della materia.
          </p>
        </div>

        <div className="rounded-3xl border border-stone-200/90 bg-white/95 backdrop-blur-xl p-8 md:p-12 shadow-xl space-y-8">
          <div className="space-y-3">
            <h3 className="text-xl font-bold font-serif text-stone-900">Cos'è la Blockchain e gli NFT</h3>
            <p className="text-stone-600 font-light leading-relaxed text-sm">
              La blockchain è un registro digitale decentralizzato, sicuro e immutabile. Gli NFT (Non-Fungible Token) rappresentano certificati digitali unici che attestano la proprietà di un bene specifico o di una quota di valore reale.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold font-serif text-stone-900">Liberare il Valore della Materia Reale</h3>
            <p className="text-stone-600 font-light leading-relaxed text-sm">
              Attraverso la tokenizzazione RWA, beni tangibili (come immobili, cantieri o asset produttivi) vengono digitalizzati in quote trasparenti, permettendo una partecipazione diffusa e sicura all'economia reale.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
