import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Shield, Users, Droplets, Sun, Sprout, BookOpen, ExternalLink, PlayCircle, CheckCircle2, Sparkles, Compass, Flame } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground space-y-24 pb-32">
      
      {/* 1. HERO SECTION: IMPATTO VISIVO ED EMOZIONALE */}
      <section className="relative overflow-hidden pt-40 pb-28 border-b border-border/40">
        <div className="absolute inset-0 z-0 opacity-25 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1920&auto=format&fit=crop')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background z-0" />

        <div className="container max-w-5xl mx-auto px-6 text-center space-y-8 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs uppercase tracking-[0.3em] font-semibold backdrop-blur-md shadow-lg">
            <Sparkles className="w-3.5 h-3.5" /> LCR Ecosystem • La Chiave Railim
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-serif-display leading-[1.1]">
            Oltre il debito.<br />
            <span className="text-primary">Nel cuore della materia reale.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            Un'infrastruttura viva che unisce beni tangibili (RWA) e autonomia quotidiana. Zero banche. Zero compromessi. Solo valore reale che genera libertà.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Link href="/club-deal">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-9 py-7 text-base rounded-full shadow-[0_0_40px_rgba(212,175,55,0.3)] font-semibold">
                Diventa Liquidity Provider (ROI 21%) <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          
        </div>
      </section>

      {/* 2. VIDEO DI PRESENTAZIONE UFFICIALE (IMPATTO MULTIMEDIALE) */}
      <section className="container max-w-4xl mx-auto px-6">
        <div className="rounded-3xl border border-border/80 bg-card/40 backdrop-blur-xl p-4 md:p-6 shadow-2xl space-y-4">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-primary">
              <PlayCircle className="w-5 h-5" /> Visione e Guida Ufficiale al Progetto
            </div>
            <span className="text-xs font-mono text-muted-foreground uppercase">Presentazione</span>
          </div>
          <div className="aspect-video w-full rounded-2xl overflow-hidden border border-border bg-black/60 shadow-inner">
            <iframe 
              src="https://www.youtube.com/embed/7RvWyWE3zxo" 
              className="w-full h-full border-0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              title="Presentazione Ufficiale LCR NetFree"
            />
          </div>
        </div>
      </section>

      {/* 3. I TRE PILASTRI FONDAMENTALI (CARD VISIVE IMMEDIATE) */}
      <section className="container max-w-6xl mx-auto px-6 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">L'Infrastruttura</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif-display">Come Trasformiamo la Realtà in Valore</h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Tre pilastri sinergici progettati per restituire sovranità all'individuo e alla comunità.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pilastro 1 */}
          <div className="group rounded-3xl border border-border/80 bg-card/30 backdrop-blur-md p-8 space-y-5 hover:border-primary/60 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif-display">1. Tokenizzazione RWA & Perizie</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Colleghiamo beni reali e immobiliari a standard di sicurezza trasparenti. Perizie indipendenti finanziate interamente dal protocollo (fee dello 0,88%) e regola del ±10% per azzerare i costi vivi dei proprietari.
              </p>
            </div>
            <div className="pt-4 border-t border-border/40 flex items-center gap-2 text-xs font-semibold text-primary">
              <CheckCircle2 className="w-4 h-4" /> Zero attriti burocratici
            </div>
          </div>

          {/* Pilastro 2 */}
          <div className="group rounded-3xl border border-border/80 bg-card/30 backdrop-blur-md p-8 space-y-5 hover:border-primary/60 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif-display">2. Liquidity Provider (ROI 21%)</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Un modello di rendimento solido e sostenibile fissato al 21%, basato unicamente su flussi reali generati dagli asset sottostanti. Senza esposizioni debitorie bancarie.
              </p>
            </div>
            <div className="pt-4 border-t border-border/40 flex items-center gap-2 text-xs font-semibold text-primary">
              <CheckCircle2 className="w-4 h-4" /> Sostenibilità industriale
            </div>
          </div>

          {/* Pilastro 3 */}
          <div className="group rounded-3xl border border-border/80 bg-card/30 backdrop-blur-md p-8 space-y-5 hover:border-primary/60 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif-display">3. Economia del Dono & NetFree</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Superamento della scarsità attraverso reti di risorse quotidiane: acqua viva, terra rigenerata, energia condivisa e formazione gilanica per l'autodeterminazione.
              </p>
            </div>
            <div className="pt-4 border-t border-border/40 flex items-center gap-2 text-xs font-semibold text-primary">
              <CheckCircle2 className="w-4 h-4" /> Autonomia quotidiana
            </div>
          </div>

        </div>
      </section>

      {/* 4. ECOSYSTEM NETFREE GRID: ACCESSO VISIVO RAPIDO ALLE RISORSE */}
      <section className="container max-w-6xl mx-auto px-6 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">Moduli Operativi</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif-display">L'Ecosistema NetFree in Azione</h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Esplora le aree tematiche con guide verificate, video e documentazione tecnica ufficiale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Acqua */}
          <div className="group border border-border/80 bg-card/40 hover:border-primary/60 transition-all rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="h-40 w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
              <img src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=600&auto=format&fit=crop" alt="Acqua" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-3 left-3 z-20 p-2 rounded-xl bg-background/80 backdrop-blur-md text-primary">
                <Droplets className="w-4 h-4" />
              </div>
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-1">
                <h3 className="font-bold text-base font-serif-display">Acqua & Risorse</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">Acqua viva, funzionale e biologia quotidiana.</p>
              </div>
              <div className="space-y-2 pt-2 border-t border-border/40">
                <a href="https://www.youtube.com/watch?v=elbOEII7-zo" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-semibold text-primary hover:underline">
                  <span>Conferenza Favata</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a href="https://www.essenzanaturae.it/wp-content/uploads/2024/12/WS-M70-Sz_-2-3v-RMN_-scheda_-Rev-27-12-2024-1.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-semibold text-muted-foreground hover:text-primary">
                  <span>Scheda Tecnica (PDF)</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Terra */}
          <div className="group border border-border/80 bg-card/40 hover:border-primary/60 transition-all rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="h-40 w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
              <img src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=600&auto=format&fit=crop" alt="Terra" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-3 left-3 z-20 p-2 rounded-xl bg-background/80 backdrop-blur-md text-primary">
                <Sprout className="w-4 h-4" />
              </div>
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-1">
                <h3 className="font-bold text-base font-serif-display">Terra & Microorganismi</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">Sovranità alimentare e permacultura sinergica.</p>
              </div>
              <div className="space-y-2 pt-2 border-t border-border/40">
                <a href="https://www.ecopassaparola.net/it/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-semibold text-primary hover:underline">
                  <span>Ecopassaparola Portale</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Energia */}
          <div className="group border border-border/80 bg-card/40 hover:border-primary/60 transition-all rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="h-40 w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
              <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop" alt="Energia" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-3 left-3 z-20 p-2 rounded-xl bg-background/80 backdrop-blur-md text-primary">
                <Sun className="w-4 h-4" />
              </div>
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-1">
                <h3 className="font-bold text-base font-serif-display">Energia & Comunità</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">Autoproduzione, fotovoltaico e Green Sharing (CER).</p>
              </div>
              <div className="space-y-2 pt-2 border-t border-border/40">
                <a href="https://www.pefpower.it/it/informatives/mix-energetico" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-semibold text-primary hover:underline">
                  <span>Mix Energetico Pef</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a href="https://www.pefpower.it/public/download/informatives/greensharing.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-semibold text-muted-foreground hover:text-primary">
                  <span>Green Sharing (PDF)</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Formazione */}
          <div className="group border border-border/80 bg-card/40 hover:border-primary/60 transition-all rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="h-40 w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop" alt="Formazione" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-3 left-3 z-20 p-2 rounded-xl bg-background/80 backdrop-blur-md text-primary">
                <BookOpen className="w-4 h-4" />
              </div>
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-1">
                <h3 className="font-bold text-base font-serif-display">Formazione & Reti</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">Crescita interiore, Skipper Lab e registri ufficiali.</p>
              </div>
              <div className="space-y-2 pt-2 border-t border-border/40">
                <a href="https://www.facebook.com/SkipperLab.formazione/?locale=it_IT" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-semibold text-primary hover:underline">
                  <span>Skipper Lab Facebook</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a href="https://atoka.io/public/it/azienda/skipper-lab-srl/72e352e37294" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-semibold text-muted-foreground hover:text-primary">
                  <span>Atoka Registro Atto</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. CALL TO ACTION FINALE (TRAGUARDO) */}
      <section className="container max-w-4xl mx-auto px-6">
        <div className="rounded-3xl border border-primary/40 bg-gradient-to-br from-card/80 to-background p-10 md:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop')` }} />
          
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">Autodeterminazione</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif-display">Pronto a Entrare nel Nuovo Paradigma?</h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Unisciti a noi come Liquidity Provider per sostenere l'infrastruttura reale e costruire insieme la Cittadella della sovranità diffusa.
            </p>
            <div className="pt-4">
              <Link href="/club-deal">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-9 py-7 rounded-full shadow-[0_0_35px_rgba(212,175,55,0.3)]">
                  Diventa Liquidity Provider (ROI 21%) <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
