import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Shield, Users, Droplets, Sun, Sprout, BookOpen, ExternalLink, PlayCircle, Sparkles, Compass, Flame, HeartHandshake, Globe2, Footprints, Flag, Milestone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background text-foreground space-y-32 pb-36">
      
      {/* 1. HERO SECTION: LUCE LUMINOSA, CALDA ED EMOZIONALE */}
      <section className="relative overflow-hidden pt-48 pb-36 border-b border-primary/20 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="absolute inset-0 z-0 opacity-40 bg-cover bg-center mix-blend-luminosity filter brightness-125" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background z-0" />

        <div className="container max-w-5xl mx-auto px-6 text-center space-y-8 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/50 bg-primary/20 text-primary text-xs uppercase tracking-[0.3em] font-bold backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.2)]">
            <Sparkles className="w-4 h-4" /> La Via della Rinascita Collettiva
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-serif-display leading-[1.1] text-foreground">
            Oltre le ombre della scarsità.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-primary to-yellow-200">
              Accendiamo insieme il nuovo mondo.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            Un'esperienza viva di crescita, libertà e sovranità condivisa. Non stiamo solo costruendo un'alternativa: stiamo risvegliando lo spazio luminoso in cui torneremo a vivere nella pienezza dell'economia del dono.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Link href="/club-deal">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-10 py-7 text-base rounded-full shadow-[0_0_50px_rgba(212,175,55,0.4)] font-bold transition-all transform hover:scale-105">
                Inizia il Viaggio come Liquidity Provider (ROI 21%) <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          
        </div>
      </section>

      {/* 2. VIDEO DI VISIONE E CONDIVISIONE */}
      <section className="container max-w-4xl mx-auto px-6 space-y-4">
        <div className="text-center space-y-2">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">Ascolto Profondo</span>
          <h2 className="text-3xl font-bold font-serif-display">Il Respiro del Nuovo Paradigma</h2>
          <p className="text-sm text-muted-foreground">Lasciati guidare in questo video di consapevolezza verso la comprensione della meta.</p>
        </div>
        <div className="rounded-3xl border border-primary/30 bg-card/60 backdrop-blur-xl p-4 md:p-6 shadow-2xl relative">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/20 to-amber-500/20 blur-xl opacity-50 -z-10" />
          <div className="aspect-video w-full rounded-2xl overflow-hidden border border-border bg-black/40 shadow-inner">
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

      {/* 3. IL PERCORSO E LA META (GUIDA VISIVA DEL CAMMINO) */}
      <section className="container max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">La Bussola</span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif-display">Qual è la Meta e Qual è il Percorso?</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Ogni grande trasformazione richiede passi consapevoli. Ecco come ci muoviamo dal presente alla piena realizzazione della Cittadella.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="relative group rounded-3xl border border-primary/30 bg-gradient-to-b from-card/80 to-card/40 backdrop-blur-md p-8 space-y-5 shadow-xl flex flex-col justify-between">
            <div className="absolute -top-4 left-8 w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center font-mono text-sm shadow-lg">
              01
            </div>
            <div className="space-y-4 pt-2">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif-display">Tappa 1: La Materia Reale</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Riconnettiamo il valore ai beni tangibili attraverso perizie indipendenti e trasparenti finanziate interamente dal protocollo. Azzeriamo gli attriti per chi possiede l'asset.
              </p>
            </div>
            <div className="pt-4 border-t border-border/40 flex items-center gap-2 text-xs font-semibold text-primary">
              <Globe2 className="w-4 h-4" /> Solide fondamenta materiali
            </div>
          </div>

          <div className="relative group rounded-3xl border border-primary/30 bg-gradient-to-b from-card/80 to-card/40 backdrop-blur-md p-8 space-y-5 shadow-xl flex flex-col justify-between">
            <div className="absolute -top-4 left-8 w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center font-mono text-sm shadow-lg">
              02
            </div>
            <div className="space-y-4 pt-2">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif-display">Tappa 2: Il Flusso dei Liquidity Provider</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Attiviamo il motore economico con un rendimento etico e sostenibile al 21%. Flussi limpidi e generatori di valore che alimentano la crescita comune senza legami debitori bancari.
              </p>
            </div>
            <div className="pt-4 border-t border-border/40 flex items-center gap-2 text-xs font-semibold text-primary">
              <HeartHandshake className="w-4 h-4" /> Energia finanziaria pulita
            </div>
          </div>

          <div className="relative group rounded-3xl border border-primary/30 bg-gradient-to-b from-card/80 to-card/40 backdrop-blur-md p-8 space-y-5 shadow-xl flex flex-col justify-between">
            <div className="absolute -top-4 left-8 w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center font-mono text-sm shadow-lg">
              03
            </div>
            <div className="space-y-4 pt-2">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Milestone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif-display">Meta: La Cittadella & NetFree</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Il traguardo finale: sovranità quotidiana nell'acqua viva, nella terra rigenerata e nelle comunità energetiche. La Cittadella come spazio fisico e spirituale di libertà diffusa.
              </p>
            </div>
            <div className="pt-4 border-t border-border/40 flex items-center gap-2 text-xs font-semibold text-primary">
              <Sparkles className="w-4 h-4" /> Autonomia e cooperazione totale
            </div>
          </div>

        </div>
      </section>

      {/* 4. LE AREE DI APPROFONDIMENTO (TUTTI I COLLEGAMENTI VERIFICATI) */}
      <section className="container max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">Strumenti di Crescita</span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif-display">Esplora gli Approfondimenti del Percorso</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            Accedi a tutte le risorse verificate, ai video e alle guide tecniche per approfondire ogni singolo aspetto del cammino.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Acqua */}
          <div className="group border border-border/80 bg-card/50 hover:border-primary/60 transition-all rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl">
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
                <p className="text-xs text-muted-foreground leading-relaxed">Il nutrimento primario e la struttura biologica.</p>
              </div>
              <div className="space-y-2 pt-2 border-t border-border/40">
                <a href="https://www.youtube.com/watch?v=elbOEII7-zo" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-semibold text-primary hover:underline">
                  <span>Conferenza Tecnica</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a href="https://www.youtube.com/watch?v=7A5ILFsrNLA" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-semibold text-muted-foreground hover:text-primary">
                  <span>Testimonianze Salute</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a href="https://meglioinsalute.com/acqua-alcalina-non-acquistarla-se-prima-non-leggi-questo/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-semibold text-muted-foreground hover:text-primary">
                  <span>Guida Scelta Acqua</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a href="https://www.essenzanaturae.it/wp-content/uploads/2024/12/WS-M70-Sz_-2-3v-RMN_-scheda_-Rev-27-12-2024-1.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-semibold text-muted-foreground hover:text-primary">
                  <span>Scheda Tecnica (PDF)</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Terra */}
          <div className="group border border-border/80 bg-card/50 hover:border-primary/60 transition-all rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl">
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
                <p className="text-xs text-muted-foreground leading-relaxed">Rigenerazione del suolo e permacultura.</p>
              </div>
              <div className="space-y-2 pt-2 border-t border-border/40">
                <a href="https://www.ecopassaparola.net/it/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-semibold text-primary hover:underline">
                  <span>Ecopassaparola Portale</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Energia */}
          <div className="group border border-border/80 bg-card/50 hover:border-primary/60 transition-all rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl">
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
                <p className="text-xs text-muted-foreground leading-relaxed">Autoproduzione e condivisione pulita.</p>
              </div>
              <div className="space-y-2 pt-2 border-t border-border/40">
                <a href="https://www.agenziaentrate.gov.it/portale/schede/agevolazioni/detrazione-riqualificazione-energetica-55-2016/cosa-riqualificazione-55-2016" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-semibold text-primary hover:underline">
                  <span>Guida Entrate Riqualificazione</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a href="https://www.enpal.com/it/fotovoltaico/efficientamento-energetico-casa" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-semibold text-muted-foreground hover:text-primary">
                  <span>Enpal Efficientamento</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a href="https://www.pefpower.it/it/informatives/mix-energetico" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-semibold text-muted-foreground hover:text-primary">
                  <span>Mix Energetico & ARERA</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a href="https://www.pefpower.it/public/download/informatives/greensharing.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-semibold text-muted-foreground hover:text-primary">
                  <span>Green Sharing (PDF)</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a href="https://www.pefpower.it/public/download/moduli/Gruppo_Enegan_Codice_Etico_310325_def.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-semibold text-muted-foreground hover:text-primary">
                  <span>Codice Etico (PDF)</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Formazione */}
          <div className="group border border-border/80 bg-card/50 hover:border-primary/60 transition-all rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl">
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
                <p className="text-xs text-muted-foreground leading-relaxed">Crescita interiore e registri ufficiali.</p>
              </div>
              <div className="space-y-2 pt-2 border-t border-border/40">
                <a href="https://www.facebook.com/SkipperLab.formazione/?locale=it_IT" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-semibold text-primary hover:underline">
                  <span>Canale Formativo Social</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a href="https://www.instagram.com/skipper_lab/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-semibold text-muted-foreground hover:text-primary">
                  <span>Instagram Skipper Lab</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a href="https://atoka.io/public/it/azienda/skipper-lab-srl/72e352e37294" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-semibold text-muted-foreground hover:text-primary">
                  <span>Registro Societario Atoka</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a href="https://www.avedisco.it/it-IT/Notizie/Eventi/2024/PEF-Convention-nazionale-2024.aspx" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-semibold text-muted-foreground hover:text-primary">
                  <span>Report Convention Naz.</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. CALL TO ACTION FINALE (LA LUCE DELLA META) */}
      <section className="container max-w-4xl mx-auto px-6">
        <div className="rounded-3xl border border-primary/50 bg-gradient-to-br from-primary/10 via-card to-background p-12 md:p-16 text-center space-y-6 shadow-[0_0_60px_rgba(212,175,55,0.15)] relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-15 bg-cover bg-center filter brightness-150" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1200&auto=format&fit=crop')` }} />
          
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">Il Futuro Inizia Adesso</span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif-display">Vivi l'Esperienza del Nuovo Paradigma</h2>
            <p className="text-base text-muted-foreground leading-relaxed font-light">
              Unisciti a noi in questo cammino di libertà e cooperazione. Sostieni l'infrastruttura reale come Liquidity Provider e contribuisci a edificare lo spazio in cui andremo a vivere.
            </p>
            <div className="pt-2">
              <Link href="/club-deal">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-10 py-7 rounded-full shadow-[0_0_40px_rgba(212,175,55,0.4)] text-base transition-all transform hover:scale-105">
                  Entra come Liquidity Provider (ROI 21%) <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
