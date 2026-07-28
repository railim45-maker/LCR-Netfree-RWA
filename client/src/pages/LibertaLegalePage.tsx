import { Link } from "wouter";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export default function LibertaLegalePage() {
  return (
    <div className="min-h-screen relative text-stone-800 space-y-20 pb-36 overflow-hidden bg-[#fcfbf9]">
      
      {/* SFONDO LUMINOSO E GRADIENTI ARMONICI */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gradient-to-r from-purple-100/50 via-amber-100/30 to-sky-100/40 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute inset-0 z-0 opacity-30 bg-cover bg-center bg-fixed mix-blend-overlay filter brightness-110 pointer-events-none" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop')` }} />

      {/* HEADER DI NAVIGAZIONE INTERNA */}
      <header className="container max-w-4xl mx-auto px-6 pt-10 relative z-10">
        <div className="flex items-center justify-between p-4 rounded-3xl bg-white/85 border border-stone-200/80 shadow-sm backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-purple-50 text-purple-700 flex items-center justify-center text-sm border border-purple-100">⚖️</span>
            <span className="font-bold text-xs uppercase tracking-wider text-stone-700 font-serif">Approfondimento • Libertà Legale</span>
          </div>
          <nav className="flex items-center gap-4 text-xs font-semibold">
            <Link href="/">
              <span className="text-stone-600 hover:text-stone-900 cursor-pointer transition-colors">← Torna alla Home</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* CONTENUTO PRINCIPALE */}
      <main className="container max-w-4xl mx-auto px-6 space-y-12 relative z-10">
        
        {/* TITOLO E INTRODUZIONE */}
        <div className="text-center space-y-4 pt-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-900 text-xs font-medium tracking-wide shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" /> Sovranità e Trasparenza Giuridica
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-stone-900 leading-tight">
            Libertà Legale
          </h1>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed font-light">
            I principi di sovranità personale, il recupero dell'autorità originaria e la cornice etica per operare "nella luce" in piena armonia e trasparenza giuridica.
          </p>
        </div>

        {/* CORPO DELL'APPROFONDIMENTO */}
        <div className="rounded-3xl border border-stone-200/90 bg-white/95 backdrop-blur-xl p-8 md:p-12 shadow-xl space-y-10">
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-purple-50 text-purple-800 border border-purple-200 flex items-center justify-center font-bold text-xs font-mono">1</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">Il Recupero della Sovranità Personale</h3>
            </div>
            <p className="text-stone-600 leading-relaxed pl-11 text-sm md:text-base font-light">
              La libertà legale si fonda sul riconoscimento della responsabilità e dell'autorità interiore dell'individuo. Significa comprendere i propri diritti fondamentali, svincolandosi da dinamiche di dipendenza passiva e operando con consapevolezza all'interno del quadro normativo.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-purple-50 text-purple-800 border border-purple-200 flex items-center justify-center font-bold text-xs font-mono">2</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">Operare "Nella Luce"</h3>
            </div>
            <p className="text-stone-600 leading-relaxed pl-11 text-sm md:text-base font-light">
              Ogni struttura, accordo o interazione all'interno dell'ecosistema viene progettata per essere totalmente trasparente e cristallina. L'adesione a standard etici rigorosi garantisce che la crescita della comunità avvenga nel pieno rispetto della legalità e della tutela reciproca.
            </p>
          </div>

        </div>

      </main>

    </div>
  );
}
