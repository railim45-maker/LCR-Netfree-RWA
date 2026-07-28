import { Link } from "wouter";
import { Sparkles, ArrowRight, Sun, Network, Gift, Coins, ShieldCheck, PlayCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen relative text-stone-800 space-y-24 pb-40 overflow-hidden bg-[#fcfbf9]">
      
      {/* SFONDO LUMINOSO E GRADIENTI DI LUCE ARMONICA */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gradient-to-r from-amber-100/50 via-emerald-100/40 to-sky-100/40 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute inset-0 z-0 opacity-30 bg-cover bg-center bg-fixed mix-blend-overlay filter brightness-110 pointer-events-none" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop')` }} />

      {/* SEZIONE HERO: VISIONE E VIDEO INTRODUTTIVO */}
      <section className="relative pt-36 pb-16 border-b border-stone-200/60 bg-gradient-to-b from-amber-50/40 via-transparent to-transparent z-10">
        <div className="container max-w-5xl mx-auto px-6 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-200/80 bg-amber-50/80 text-amber-900 text-xs uppercase tracking-[0.2em] font-semibold backdrop-blur-md shadow-sm">
            <Sun className="w-4 h-4 text-amber-600" /> Spazio di Libertà e Condivisione
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-serif leading-[1.1] text-stone-900">
            Oltre la scarsità: una cassetta degli attrezzi<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-emerald-700 to-amber-700">
              per una vita nuova in amore, rispetto e consapevolezza.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-stone-600 leading-relaxed font-light">
            Un luogo di ritrovo e di visione per chi desidera riappropriarsi della propria sovranità, superare le dinamiche limitanti e abbracciare l'economia del dono.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a href="#video-introduzione">
              <button className="bg-stone-900 text-stone-50 hover:bg-stone-800 gap-2 px-8 py-4 text-sm rounded-full shadow-lg font-medium transition-all transform hover:scale-105 inline-flex items-center cursor-pointer">
                <PlayCircle className="w-5 h-5 text-amber-400" /> Guarda il Video di Introduzione del Progetto
              </button>
            </a>
          </div>
          
        </div>
      </section>

      {/* LE 4 SEZIONI DI APPROFONDIMENTO */}
      <section className="container max-w-6xl mx-auto px-6 space-y-12 relative z-10">
        <div className="text-center space-y-3">
          <span className="text-emerald-800 text-xs uppercase tracking-widest font-semibold font-mono">Percorso Informativo</span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-stone-900">Le 4 Aree di Approfondimento</h2>
          <p className="text-stone-600 text-sm max-w-xl mx-auto font-light">
            Esplora le basi teoriche, filosofiche e pratiche che costituiscono il nostro ecosistema.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 1. NETFREE */}
          <div className="rounded-3xl border border-stone-200/90 bg-white/95 backdrop-blur-md p-8 space-y-4 shadow-xl shadow-stone-200/40 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-300 transition-all">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-400" />
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-800">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-stone-900">1. Netfree</h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                La scissione del concetto di network rimuovendo la logica estrattiva del "work" per valorizzare l'essenza pura delle relazioni umane e della libertà multidimensionale.
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
          <div className="rounded-3xl border border-stone-200/90 bg-white/95 backdrop-blur-md p-8 space-y-4 shadow-xl shadow-stone-200/40 flex flex-col justify-between relative overflow-hidden group hover:border-amber-300 transition-all">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-400" />
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-800">
                <Gift className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-stone-900">2. Economia del Dono</h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                Il modello basato sulla condivisione del surplus. La metafora del seme e della Chiave Railim per moltiplicare il valore e alimentare una prosperità condivisa.
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
          <div className="rounded-3xl border border-stone-200/90 bg-white/95 backdrop-blur-md p-8 space-y-4 shadow-xl shadow-stone-200/40 flex flex-col justify-between relative overflow-hidden group hover:border-sky-300 transition-all">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-indigo-400" />
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200/60 flex items-center justify-center text-sky-800">
                <Coins className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-stone-900">3. Tokenizzazione RWA</h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                La spiegazione teorica di blockchain, NFT e di come la tokenizzazione di Real World Asset liberi il valore inespresso della materia reale.
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

          {/* 4. LIBERTÀ LEGALE */}
          <div className="rounded-3xl border border-stone-200/90 bg-white/95 backdrop-blur-md p-8 space-y-4 shadow-xl shadow-stone-200/40 flex flex-col justify-between relative overflow-hidden group hover:border-purple-300 transition-all">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400" />
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200/60 flex items-center justify-center text-purple-800">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-stone-900">4. Libertà Legale</h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                I principi di sovranità personale, il recupero dell'autorità originaria e la cornice etica per operare "nella luce" in piena trasparenza giuridica.
              </p>
            </div>
            <div className="pt-4">
              <Link href="/privato/liberta-legale">
                <button className="w-full bg-stone-50 hover:bg-purple-50 text-stone-800 hover:text-purple-900 font-medium py-3 px-6 rounded-2xl text-xs uppercase tracking-wider border border-stone-200 transition-all inline-flex items-center justify-center gap-2 cursor-pointer">
                  Approfondisci la Libertà Legale <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* SEZIONE VIDEO INTRODUTTIVO (SPAZIO DEDICATO) */}
      <section id="video-introduzione" className="container max-w-4xl mx-auto px-6 relative z-10 pt-10">
        <div className="rounded-3xl border border-stone-200/90 bg-white/95 backdrop-blur-xl p-8 md:p-12 shadow-2xl shadow-stone-200/40 space-y-6 text-center">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/60 text-amber-800 flex items-center justify-center mx-auto">
            <PlayCircle className="w-6 h-6" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-900">Video di Introduzione al Progetto</h2>
          <p className="text-sm md:text-base text-stone-600 leading-relaxed max-w-2xl mx-auto font-light">
            Guarda la presentazione ufficiale per comprendere a fondo la visione e i passi operativi del nostro ecosistema LCR-NetFree.
          </p>
          
          {/* Contenitore Video Ufficiale (Sostituisci l'src dell'iframe con il link video reale quando disponibile) */}
          <div className="aspect-video w-full rounded-2xl overflow-hidden border border-stone-200 bg-stone-900 shadow-inner flex items-center justify-center text-stone-400">
            <div className="text-center space-y-2 p-6">
              <PlayCircle className="w-12 h-12 mx-auto text-amber-400 opacity-90 animate-pulse" />
              <p className="text-xs uppercase tracking-widest font-mono text-stone-300">Inserire qui il link o l'embed del video ufficiale LCR-NetFree</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
