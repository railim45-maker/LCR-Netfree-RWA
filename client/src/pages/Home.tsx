import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Shield, Users, Droplets, Sun, Sprout, BookOpen, ExternalLink, PlayCircle, Sparkles, Compass, Flame, HeartHandshake, Globe2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground space-y-28 pb-32">
      
      {/* 1. HERO SECTION: IL RICHIAMO AL NUOVO MONDO */}
      <section className="relative overflow-hidden pt-44 pb-32 border-b border-border/40">
        <div className="absolute inset-0 z-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1920&auto=format&fit=crop')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/90 to-background z-0" />

        <div className="container max-w-5xl mx-auto px-6 text-center space-y-8 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs uppercase tracking-[0.3em] font-semibold backdrop-blur-md shadow-xl">
            <Sparkles className="w-3.5 h-3.5" /> Il Nuovo Paradigma è Già Qui
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-serif-display leading-[1.1]">
            Costruiamo insieme<br />
            <span className="text-primary">lo spazio in cui andremo a vivere.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            Non una semplice alternativa, ma un'esperienza viva di crescita, libertà e sovranità condivisa. Usciamo dalla scarsità per entrare nell'economia del dono e della materia reale.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Link href="/club-deal">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-9 py-7 text-base rounded-full shadow-[0_0_40px_rgba(212,175,55,0.3)] font-semibold">
                Esplora i Flussi per i Liquidity Provider <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          
        </div>
      </section>

      {/* 2. VIDEO DI VISIONE E CONDIVISIONE */}
      <section className="container max-w-4xl mx-auto px-6 space-y-4">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold font-serif-display">Ascolta la Visione</h2>
          <p className="text-sm text-muted-foreground">Un percorso di consapevolezza per comprendere il cambiamento che stiamo attuando.</p>
        </div>
        <div className="rounded-3xl border border-border/80 bg-card/40 backdrop-blur-xl p-4 md:p-6 shadow-2xl">
          <div className="aspect-video w-full rounded-2xl overflow-hidden border border-border bg-black/60 shadow-inner">
            <iframe 
              src="https://www.youtube.com/embed/7RvWyWE3zxo" 
              className="w-full h-full border-0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              title="Visione e Guida Ufficiale"
            />
          </div>
        </div>
      </section>

      {/* 3. I TRE PILASTRI DELLA TRASFORMAZIONE */}
      <section className="container max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">I pilastri del cambiamento</span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif-display">Dalla Scarsità all'Abbondanza Condivisa</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Un'infrastruttura radicata nella materia reale che unisce la tutela dei beni tangibili alla libertà quotidiana della persona.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="group rounded-3xl border border-border/80 bg-card/30 backdrop-blur-md p-8 space-y-5 hover:border-primary/60 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif-display">La Materia e la Perizia</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Riconnettiamo il valore ai beni reali e tangibili. Perizie indipendenti interamente sostenute dal protocollo per azzerare ogni attrito e restituire dignità e sicurezza ai proprietari.
              </p>
            </div>
            <div className="pt-4 border-t border-border/40 flex items-center gap-2 text-xs font-semibold text-primary">
              <Globe2 className="w-4 h-4" /> Trasparenza e protezione assoluta
            </div>
          </div>

          <div className="group rounded-3xl border border-border/80 bg-card/30 backdrop-blur-md p-8 space-y-5 hover:border-primary/60 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif-display">Il Sostegno dei Liquidity Provider</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Un modello economico etico e sostenibile al 21%, basato unicamente su flussi reali e concreti, liberi da logiche speculative o vincoli bancari estrattivi.
              </p>
            </div>
            <div className="pt-4 border-t border-border/40 flex items-center gap-2 text-xs font-semibold text-primary">
              <HeartHandshake className="w-4 h-4" /> Crescita solida e condivisa
            </div>
          </div>

          <div className="group rounded-3xl border border-border/80 bg-card/30 backdrop-blur-md p-8 space-y-5 hover:border-primary/60 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif-display">L'Economia del Dono</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Oltre il concetto di scambio commerciale chiuso: attiviamo reti di risorse primarie (acqua, terra, energia) per sperimentare la libertà e l'autosufficienza nella vita di tutti i giorni.
              </p>
            </div>
            <div className="pt-4 border-t border-border/40 flex items-center gap-2 text-xs font-semibold text-primary">
              <Sparkles className="w-4 h-4" /> Autonomia e cooperazione
            </div>
          </div>

        </div>
      </section>

      {/* 4. LE AREE DI VITA QUOTIDIANA (MODULI VISIVI) */}
      <section className="container max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">Esperienza Pratica</span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif-display">Vivere la Sovranità Quotidiana</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            Soluzioni concrete e guide verificate per riappropriarsi del benessere biologico, energetico e relazionale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="group border border-border/80 bg-card/40 hover:border-primary/60 transition-all rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="h-44 w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
              <img src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=600&auto=format&fit=crop" alt="Acqua" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-3 left-3 z-20 p-2 rounded-xl bg-background/80 backdrop-blur-md text-primary">
                <Droplets className="w-4 h-4" />
              </div>
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-1">
                <h3 className="font-bold text-base font-serif-display">Acqua Viva & Biologia</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">Il nutrimento primario e la struttura biologica dell'acqua.</p>
              </div>
              <div className="space-y-2 pt-2 border-t border-border/40">
                <a href="https://www.youtube.com/watch?v=elbOEII7-zo" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-semibold text-primary hover:underline">
                  <span>Approfondimento Acqua</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a href="https://www.essenzanaturae.it/wp-content/uploads/2024/12/WS-M70-Sz_-2-3v-RMN_-scheda_-Rev-27-12-2024-1.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-semibold text-muted-foreground hover:text-primary">
                  <span>Documento Tecnico (PDF)</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="group border border-border/80 bg-card/40 hover:border-primary/60 transition-all rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="h-44 w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
              <img src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=600&auto=format&fit=crop" alt="Terra" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-3 left-3 z-20 p-2 rounded-xl bg-background/80 backdrop-blur-md text-primary">
                <Sprout className="w-4 h-4" />
              </div>
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-1">
                <h3 className="font-bold text-base font-serif-display">Terra & Microorganismi</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">Rigenerazione biologica del suolo e permacultura.</p>
              </div>
              <div className="space-y-2 pt-2 border-t border-border/40">
                <a href="https://www.ecopassaparola.net/it/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-semibold text-primary hover:underline">
                  <span>Portale di Riferimento</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="group border border-border/80 bg-card/40 hover:border-primary/60 transition-all rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="h-44 w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
              <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop" alt="Energia" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-3 left-3 z-20 p-2 rounded-xl bg-background/80 backdrop-blur-md text-primary">
                <Sun className="w-4 h-4" />
              </div>
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-1">
                <h3 className="font-bold text-base font-serif-display">Energia & Comunità</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">Autoproduzione e condivisione energetica pulita.</p>
              </div>
              <div className="space-y-2 pt-2 border-t border-border/40">
                <a href="https://www.pefpower.it/it/informatives/mix-energetico" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-semibold text-primary hover:underline">
                  <span>Informative Energetiche</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a href="https://www.pefpower.it/public/download/informatives/greensharing.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-semibold text-muted-foreground hover:text-primary">
                  <span>Green Sharing (PDF)</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="group border border-border/80 bg-card/40 hover:border-primary/60 transition-all rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="h-44 w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop" alt="Formazione" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-3 left-3 z-20 p-2 rounded-xl bg-background/80 backdrop-blur-md text-primary">
                <BookOpen className="w-4 h-4" />
              </div>
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-1">
                <h3 className="font-bold text-base font-serif-display">Formazione & Reti</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">Crescita interiore, laboratori e registri di valore.</p>
              </div>
              <div className="space-y-2 pt-2 border-t border-border/40">
                <a href="https://www.facebook.com/SkipperLab.formazione/?locale=it_IT" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-semibold text-primary hover:underline">
                  <span>Canale Formativo</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a href="https://atoka.io/public/it/azienda/skipper-lab-srl/72e352e37294" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-semibold text-muted-foreground hover:text-primary">
                  <span>Registro Ufficiale</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. CALL TO ACTION FINALE (IL NUOVO MONDO) */}
      <section className="container max-w-4xl mx-auto px-6">
        <div className="rounded-3xl border border-primary/40 bg-gradient-to-br from-card/80 to-background p-12 md:p-16 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop')` }} />
          
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">Unisciti al Cambiamento</span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif-display">Entriamo Insieme nel Nuovo Paradigma</h2>
            <p className="text-base text-muted-foreground leading-relaxed font-light">
              Diventa parte attiva di questo cammino di libertà. Sostieni l'infrastruttura reale e contribuisci a edificare la Cittadella della cooperazione e della sovranità diffusa.
            </p>
            <div className="pt-2">
              <Link href="/club-deal">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-10 py-7 rounded-full shadow-[0_0_35px_rgba(212,175,55,0.3)] text-base">
                  Unisciti come Liquidity Provider (ROI 21%) <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
