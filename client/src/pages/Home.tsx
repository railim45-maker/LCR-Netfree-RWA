import { Link } from "wouter";
import { Sparkles, Shield, Gift, Compass, ArrowRight, Sun } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen relative text-stone-800 space-y-32 pb-40 overflow-hidden bg-[#fcfbf9]">
      
      {/* SFONDO LUMINOSO E GRADIENTI DI LUCE ARMONICA */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gradient-to-r from-amber-100/50 via-emerald-100/40 to-sky-100/40 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute inset-0 z-0 opacity-30 bg-cover bg-center bg-fixed mix-blend-overlay filter brightness-110 pointer-events-none" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop')` }} />

      {/* LIVELLO 1: VISIONE E ACCOGLIENZA PUBBLICA LUMINOSA */}
      <section className="relative pt-48 pb-24 border-b border-stone-200/60 bg-gradient-to-b from-amber-50/40 via-transparent to-transparent z-10">
        <div className="container max-w-5xl mx-auto px-6 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-200/80 bg-amber-50/80 text-amber-900 text-xs uppercase tracking-[0.2em] font-semibold backdrop-blur-md shadow-sm">
            <Sun className="w-4 h-4 text-amber-600" /> Spazio di Libertà e Condivisione
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-serif leading-[1.1] text-stone-900">
            Oltre la scarsità: una cassetta degli attrezzi<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-emerald-700 to-amber-700">
              per una vita nuova in amore, rispetto e consapevolezza.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-stone-600 leading-relaxed font-light">
            Un luogo di ritrovo e di visione per chi desidera riappropriarsi della propria sovranità, superare le dinamiche limitanti e abbracciare l'<strong>economia del dono</strong>. Qui trovi coordinate e strumenti per camminare verso l'abbondanza consapevole, con un percorso formativo che si sblocca gradualmente in base alla maturazione individuale.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/privato/economia-dono">
              <button className="bg-stone-900 text-stone-50 hover:bg-stone-800 gap-2 px-9 py-5 text-base rounded-full shadow-lg font-medium transition-all transform hover:scale-105 inline-flex items-center cursor-pointer">
                Accedi al Secondo Livello (Economia del Dono) <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
          
        </div>
      </section>

      {/* I PILASTRI FONDANTI DELLA VISIONE */}
      <section className="container max-w-6xl mx-auto px-6 space-y-12 relative z-10">
        <div className="text-center space-y-3">
          <span className="text-emerald-800 text-xs uppercase tracking-widest font-semibold font-mono">Principi Guida</span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-stone-900">Le Fondamenta della Nostra Via</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-stone-200/90 bg-white/90 backdrop-blur-md p-8 space-y-4 shadow-xl shadow-stone-200/40 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-emerald-400" />
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-800">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-stone-900">Il Valore della Materia Reale</h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                Riconnettiamo l'economia ai beni tangibili e alle risorse autentiche, svincolandole dalla volatilità e proteggendo la stabilità patrimoniale a lungo termine.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-stone-200/90 bg-white/90 backdrop-blur-md p-8 space-y-4 shadow-xl shadow-stone-200/40 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-sky-400" />
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-800">
                <Gift className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-stone-900">L'Economia del Dono Circolare</h3>
              <p className="text-sm text-stone-600 leading-relaxed font-light">
                Superamento della scarsità tramite la circolazione libera e reciproca del valore. Il tempo e la vocazione di ciascuno alimentano un ecosistema di mutuo aiuto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPIEGAZIONE INTERNA DEL PERCORSO FORMATIVO */}
      <section className="container max-w-4xl mx-auto px-6 relative z-10">
        <div className="rounded-3xl border border-stone-200/90 bg-white/95 backdrop-blur-xl p-8 md:p-12 shadow-2xl shadow-stone-200/40 space-y-6 text-center relative">
          <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200/60 text-sky-800 flex items-center justify-center mx-auto">
            <Compass className="w-6 h-6" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-stone-900">Il Percorso di Consapevolezza e Origine</h2>
          <p className="text-sm md:text-base text-stone-600 leading-relaxed max-w-2xl mx-auto font-light">
            Il recupero dell'autorità originaria e interiore avviene attraverso tappe di studio interne. Gli strumenti formativi avanzati e l'accesso ai moduli di crescita si sbloccano internamente per gradi all'interno dell'Area Riservata, man mano che l'individuo compie il proprio cammino.
          </p>
          <div className="pt-2">
            <Link href="/privato/economia-dono">
              <button className="bg-emerald-800 hover:bg-emerald-900 text-white font-medium px-8 py-4 rounded-full text-xs md:text-sm inline-flex items-center gap-2 shadow-md transition-all transform hover:scale-105 cursor-pointer">
                Accedi all'Area Riservata <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
