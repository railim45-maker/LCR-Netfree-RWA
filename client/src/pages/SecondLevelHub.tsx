import { Link } from "wouter";
import { ArrowRight, Sparkles, Network, Gift, Coins, ShieldCheck } from "lucide-react";

export default function SecondLevelHub() {
  return (
    <div className="min-h-screen relative text-stone-800 space-y-20 pb-36 overflow-hidden bg-[#fcfbf9]">
      
      {/* SFONDO LUMINOSO E GRADIENTI DI LUCE ARMONICA */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gradient-to-r from-amber-100/50 via-emerald-100/40 to-sky-100/40 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute inset-0 z-0 opacity-30 bg-cover bg-center bg-fixed mix-blend-overlay filter brightness-110 pointer-events-none" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop')` }} />

      {/* HEADER DI NAVIGAZIONE INTERNA */}
      <header className="container max-w-5xl mx-auto px-6 pt-10 relative z-10">
        <div className="flex items-center justify-between p-4 rounded-3xl bg-white/85 border border-stone-200/80 shadow-sm backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-sm border border-emerald-100">🌿</span>
            <span className="font-bold text-xs uppercase tracking-wider text-stone-700 font-serif">Area Riservata • Secondo Livello (Teoria & Informazione)</span>
          </div>
          <nav className="flex items-center gap-4 text-xs font-semibold">
            <Link href="/">
              <span className="text-stone-600 hover:text-stone-900 cursor-pointer transition-colors">← Torna alla Home</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* CONTENUTO PRINCIPALE */}
      <main className="container max-w-5xl mx-auto px-6 space-y-12 relative z-10">
        
        {/* TITOLO E PRESENTAZIONE */}
        <div className="text-center space-y-4 pt-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium tracking-wide shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Fondamenti, Filosofia e Scelte di Rete
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-stone-900 leading-tight">
            I 4 Pilastri Informativi del Secondo Livello
          </h1>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed font-light">
            Qui risiedono le spiegazioni, le teorie e le filosofie che guidano il nostro operato. Esplora i quattro ambiti fondamentali prima di accedere alla messa a terra numerica e legale del Terzo Livello.
          </p>
        </div>

        {/* GRIGLIA DEI 4 APPROFONDIMENTI CON COLLEGAMENTI PUNTUALI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          
          {/* 1. NETFREE */}
          <div className="rounded-3xl border border-stone-200/90 bg-white/95 backdrop-blur-xl p-8 space-y-4 shadow-xl shadow-stone-200/40 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-300 transition-all">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-400" />
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-800">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-stone-900">1. Netfree</h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                La scissione del concetto di network rimuovendo la logica estrattiva del "work" per valorizzare l'essenza pura delle relazioni umane, della libertà multidimensionale e della creazione di valore collettivo.
              </p>
            </div>
            <div className="pt-4">
              <Link href="/privato/netfree">
                <button className="w-full bg-stone-50 hover:bg-emerald-50 text-stone-800 hover:text-emerald-900 font-medium py-3 px-6 rounded-2xl text-xs uppercase tracking-wider border border-stone-200 transition-all inline-flex items-center justify-center gap-2 cursor-pointer">
                  Approfondisci Netfree <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </Link>
            </div>
          </div>

          {/* 2. ECONOMIA DEL DONO */}
          <div className="rounded-3xl border border-stone-200/90 bg-white/95 backdrop-blur-xl p-8 space-y-4 shadow-xl shadow-stone-200/40 flex flex-col justify-between relative overflow-hidden group hover:border-amber-300 transition-all">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-400" />
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-800">
                <Gift className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-stone-900">2. Economia del Dono</h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                Il cuore pulsante del modello basato sulla condivisione del surplus. La metafora del seme e della Chiave Railim per moltiplicare il valore e alimentare un ciclo continuo di prosperità condivisa.
              </p>
            </div>
            <div className="pt-4">
              <Link href="/privato/economia-dono">
                <button className="w-full bg-stone-50 hover:bg-amber-50 text-stone-800 hover:text-amber-900 font-medium py-3 px-6 rounded-2xl text-xs uppercase tracking-wider border border-stone-200 transition-all inline-flex items-center justify-center gap-2 cursor-pointer">
                  Approfondisci il Dono <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </Link>
            </div>
          </div>

          {/* 3. TOKENIZZAZIONE RWA */}
          <div className="rounded-3xl border border-stone-200/90 bg-white/95 backdrop-blur-xl p-8 space-y-4 shadow-xl shadow-stone-200/40 flex flex-col justify-between relative overflow-hidden group hover:border-sky-300 transition-all">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-indigo-400" />
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200/60 flex items-center justify-center text-sky-800">
                <Coins className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-stone-900">3. Tokenizzazione RWA</h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                La spiegazione teorica e divulgativa di cos'è la blockchain, cosa sono gli NFT e come la tokenizzazione di Real World Asset liberi il valore inespresso della materia reale.
              </p>
            </div>
            <div className="pt-4">
              <Link href="/privato/tokenizzazione-rwa">
                <button className="w-full bg-stone-50 hover:bg-sky-50 text-stone-800 hover:text-sky-900 font-medium py-3 px-6 rounded-2xl text-xs uppercase tracking-wider border border-stone-200 transition-all inline-flex items-center justify-center gap-2 cursor-pointer">
                  Approfondisci RWA <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </Link>
            </div>
          </div>

          {/* 4. LIBERTÀ LEGALE (AUTODETERMINAZIONE) */}
          <div className="rounded-3xl border border-stone-200/90 bg-white/95 backdrop-blur-xl p-8 space-y-4 shadow-xl shadow-stone-200/40 flex flex-col justify-between relative overflow-hidden group hover:border-purple-300 transition-all">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400" />
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200/60 flex items-center justify-center text-purple-800">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-stone-900">4. Libertà Legale</h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                I principi di sovranità personale, il recupero dell'autorità originaria e la cornice etica per operare "nella luce" in piena armonia e trasparenza giuridica.
              </p>
            </div>
            <div className="pt-4">
              <Link href="/privato/liberta-legale">
                <button className="w-full bg-stone-50 hover:bg-purple-50 text-stone-800 hover:text-purple-900 font-medium py-3 px-6 rounded-2xl text-xs uppercase tracking-wider border border-stone-200 transition-all inline-flex items-center justify-center gap-2 cursor-pointer">
                  Approfondisci la Sovranità <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </Link>
            </div>
          </div>

        </div>

      </main>

    </div>
  );
}
