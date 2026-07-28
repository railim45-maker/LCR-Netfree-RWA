import { Link } from "wouter";
import { ArrowRight, Sparkles, Shield, Heart, Compass, TreePine, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen relative text-stone-200 space-y-24 pb-40 overflow-hidden bg-[#0b0d10]">
      
      {/* SFONDO LUMINOSO E GRADIENTI ARMONICI (Stile Biofin / Giardino Luminoso) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[800px] bg-gradient-to-b from-emerald-950/20 via-amber-950/10 to-transparent blur-[160px] rounded-full pointer-events-none z-0" />

      {/* HEADER DI NAVIGAZIONE */}
      <header className="container max-w-6xl mx-auto px-6 pt-12 relative z-10">
        <div className="flex items-center justify-between px-6 py-4 rounded-full bg-[#12151b]/90 border border-amber-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center text-xs border border-amber-500/30 font-serif">✦</span>
            <span className="font-bold text-xs uppercase tracking-widest text-stone-300 font-serif">BIOFIN • La Strada che Conduce a Casa</span>
          </div>
          <nav className="flex items-center gap-6 text-xs font-medium">
            <a href="#tappe" className="text-stone-400 hover:text-amber-300 transition-colors font-serif">Le Tappe</a>
            <a href="#visione" className="text-stone-400 hover:text-amber-300 transition-colors font-serif">La Visione</a>
          </nav>
        </div>
      </header>

      {/* CONTENUTO PRINCIPALE (HOME INTEGRATA CON LA PRESENTAZIONE) */}
      <main className="container max-w-5xl mx-auto px-6 space-y-28 relative z-10">
        
        {/* HERO SECTION: LA STRADA CHE CONDUCE A CASA ( Slide 1 ) */}
        <section className="text-center space-y-8 pt-6">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium tracking-widest shadow-lg font-serif">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Dalla finzione del debito alla sovranità dell'Uomo Naturale
          </div>
          
          <div className="rounded-[2rem] overflow-hidden border border-amber-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)] max-w-4xl mx-auto relative group">
            <img 
              src="https://placehold.co/1200x675/0b0d10/d4af37?text=La+Strada+che+Conduce+a+Casa" 
              alt="La Strada che Conduce a Casa" 
              className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d10] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8 right-8 text-center space-y-3">
              <h1 className="text-3xl md:text-5xl font-bold font-serif text-[#f3f0df] tracking-tight">
                La Strada che Conduce a Casa
              </h1>
              <p className="text-stone-400 text-sm md:text-base font-serif italic max-w-2xl mx-auto">
                "Inflazione, debito, tempo rubato. Il sistema attuale è progettato sull'illusione della scarsità. La fatica aumenta, ma la libertà si allontana. È il momento di fermarsi."
              </p>
            </div>
          </div>
        </section>

        {/* SEZIONE: IL CONTESTO E IL LABIRINTO ( Slide 2 & 3 ) */}
        <section id="visione" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="p-8 md:p-10 rounded-[2rem] bg-[#12151b] border border-amber-500/20 space-y-6 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#f3f0df]">
              La vera libertà non si compra. Si coltiva.
            </h2>
            <p className="text-stone-300 text-sm md:text-base leading-relaxed font-light">
              Esiste una via d'uscita. Richiede un nuovo paradigma dove il valore reale sostituisce il debito, e la condivisione sostituisce la competizione. Non ti chiediamo di vendere nulla: ti chiediamo di prenderti cura della tua cerchia e far fiorire il tuo giardino.
            </p>
          </div>
          <div className="rounded-[2rem] overflow-hidden border border-amber-500/20 shadow-xl h-[320px]">
            <img 
              src="https://placehold.co/800x600/12151b/10b981?text=Porta+della+Liberta" 
              alt="Porta della Libertà" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* LE TAPPE DEL PERCORSO */}
        <section id="tappe" className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-serif">Il Metodo del Giardino Luminoso</span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#f3f0df]">Le Tappe della Sovranità</h2>
          </div>

          <div className="space-y-8">
            
            {/* Tappa I */}
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-[#12151b] border border-amber-500/20 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-mono text-amber-400 tracking-wider">TAPPA I</span>
                <h3 className="text-2xl font-bold font-serif text-[#f3f0df]">Piedi a terra. Radici solide.</h3>
                <p className="text-stone-300 text-sm md:text-base leading-relaxed font-light">
                  Per elevarsi, servono radici solide. Trasformiamo il valore potenziale in energia liquida attraverso la tokenizzazione e il supporto dei liquidity provider, senza cedere proprietà e senza creare nuovo debito. Il primo passo è completamente protetto.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-amber-500/20 h-[240px]">
                <img src="https://placehold.co/600x400/12151b/d4af37?text=Radici+e+Tokenizzazione" alt="Tappa 1" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Tappa II */}
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-[#12151b] border border-amber-500/20 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-mono text-amber-400 tracking-wider">TAPPA II</span>
                <h3 className="text-2xl font-bold font-serif text-[#f3f0df]">Il dono della Chiave Railim.</h3>
                <p className="text-stone-300 text-sm md:text-base leading-relaxed font-light">
                  Tutto inizia da un seme ricevuto in dono. Nessun rischio, nessuna pressione commerciale. La regola dei sei ti invita a prenderti cura del tuo percorso e ad accompagnare sei persone a fare lo stesso, generando abbondanza circolare.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-amber-500/20 h-[240px]">
                <img src="https://placehold.co/600x400/12151b/10b981?text=Il+Seme+e+la+Rete" alt="Tappa 2" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Tappa III */}
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-[#12151b] border border-amber-500/20 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-mono text-amber-400 tracking-wider">TAPPA III</span>
                <h3 className="text-2xl font-bold font-serif text-[#f3f0df]">Preparare il Contenitore (Il Tempio Biologico).</h3>
                <p className="text-stone-300 text-sm md:text-base leading-relaxed font-light">
                  Se versi uno tsunami dentro una tazzina, la tazzina si rompe. La ricchezza improvvisa senza consapevolezza è un pericolo. Attraverso acqua pura, microrganismi e sovranità energetica, il Tempio Biologico si espande per gestire la propria energia.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-amber-500/20 h-[240px]">
                <img src="https://placehold.co/600x400/12151b/3b82f6?text=Tempio+Biologico" alt="Tappa 3" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Tappa IV */}
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-[#12151b] border border-amber-500/20 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-mono text-amber-400 tracking-wider">TAPPA IV</span>
                <h3 className="text-2xl font-bold font-serif text-[#f3f0df]">Il Risveglio dalla Finzione (L'Accademia).</h3>
                <p className="text-stone-300 text-sm md:text-base leading-relaxed font-light">
                  Abbandoniamo le dipendenze artificiali e la finzione giuridica. Attraverso l'Accademia Uomo Naturale di Aldo Piromalli, riscopriamo l'essenza di esseri umani liberi, creatori del proprio destino fuori da ogni schema imposto.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-amber-500/20 h-[240px]">
                <img src="https://placehold.co/600x400/12151b/f59e0b?text=Accademia+Uomo+Naturale" alt="Tappa 4" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>
        </section>

        {/* CONCLUSIONE: BENTORNATI A CASA */}
        <section className="p-12 md:p-16 rounded-[2.5rem] border border-amber-500/30 bg-gradient-to-br from-[#12151b] via-[#0b0d10] to-[#12151b] space-y-6 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent_70%)] pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#f3f0df]">Bentornati a Casa.</h2>
          <p className="text-base md:text-lg text-stone-300 max-w-2xl mx-auto font-serif italic">
            "Ogni grande foresta è iniziata da un singolo seme. La domanda non è quanto possa crescere. La domanda è: vuoi coltivarlo con noi?"
          </p>
          <div className="pt-4">
            <span className="text-xs tracking-[3px] uppercase text-amber-400 font-serif block">BIOFIN • IL GIARDINO LUMINOSO</span>
          </div>
        </section>

      </main>

    </div>
  );
}
