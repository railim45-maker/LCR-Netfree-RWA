import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Shield, Users, HeartHandshake, Layers, Globe, Sparkles, Droplets, Sun, Sprout, BookOpen, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground space-y-20 pb-28">
      
      {/* INTRODUZIONE E TITOLO D'IMPATTO */}
      <section className="relative overflow-hidden pt-28 pb-12 border-b border-border/40">
        <div className="container max-w-5xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/35 bg-primary/10 text-primary text-xs uppercase tracking-[0.25em] font-semibold">
            La Chiave Railim • Percorso Evolutivo
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-serif-display leading-tight">
            LCR NetFree RWA<br />
            <span className="text-primary">Dalla Materia Reale alla Cittadella</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
            Un percorso chiaro e lineare per comprendere come si costruisce concretamente un nuovo modello di vita, superando i vecchi paradigmi attraverso la tokenizzazione, l'economia del dono e la sovranità condivisa.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link href="/club-deal">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-8 py-6 text-base rounded-full shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                Diventa Liquidity Provider <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/accesso">
              <Button size="lg" variant="outline" className="border-border bg-card/50 text-foreground hover:bg-card hover:text-white px-8 py-6 text-base rounded-full">
                Area Riservata
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* VIDEO DI PRESENTAZIONE GENERALE */}
      <section className="container max-w-3xl mx-auto px-6 space-y-4">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold font-serif-display">Presentazione Ufficiale del Progetto</h2>
          <p className="text-sm text-muted-foreground">Una guida formativa per comprendere i passaggi chiave di questo cammino.</p>
        </div>
        <div className="aspect-video w-full rounded-2xl overflow-hidden border border-border bg-black/40 shadow-xl">
          <iframe 
            src="https://www.youtube.com/embed/7RvWyWE3zxo" 
            className="w-full h-full border-0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            title="Presentazione Ufficiale LCR NetFree"
          />
        </div>
      </section>

      {/* STEP 1: TOKENIZZAZIONE RWA */}
      <section className="container max-w-5xl mx-auto px-6 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold">Step 1 • L'Innesco</span>
          <h2 className="text-3xl font-bold font-serif-display">Tokenizzazione RWA: Con e Senza LP</h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Il contatto con la materia reale genera l'energia iniziale attraverso il protocollo Blotix e Railim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-3">
            <Shield className="w-6 h-6 text-primary" />
            <h3 className="text-lg font-bold">Il Modello della Tokenizzazione</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Ancoriamo il valore a beni fisici reali (come il comparto Hospitality Veneto), mantenendo la piena proprietà al 100% senza frazionamenti e con perizie indipendenti.
            </p>
          </Card>
          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-3">
            <Users className="w-6 h-6 text-primary" />
            <h3 className="text-lg font-bold">I Liquidity Provider (LP)</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              La partecipazione dei LP garantisce stabilità e flussi trasparenti programmati (rendimenti semestrali) totalmente privi di leve debitorie.
            </p>
          </Card>
        </div>
      </section>

      {/* STEP 2: L'ECONOMIA DEL DONO */}
      <section className="container max-w-4xl mx-auto px-6">
        <div className="rounded-3xl border border-primary/30 bg-card/50 p-8 text-center space-y-4 shadow-xl">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold">Step 2 • Il Modello</span>
          <h2 className="text-2xl md:text-3xl font-bold font-serif-display">L'Economia del Dono</h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Il valore generato non alimenta circuiti speculativi, ma un nuovo paradigma relazionale: si passa dal trattenere al far fluire, superando la scarsità.
          </p>
        </div>
      </section>

      {/* STEP 3: NETFREE (Accesso alle Sezioni di Approfondimento) */}
      <section className="container max-w-5xl mx-auto px-6 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold">Step 3 • L'Ecosistema</span>
          <h2 className="text-3xl font-bold font-serif-display">NetFree: Il Network di Risorse</h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Soluzioni pratiche per l'autonomia quotidiana. Clicca sui moduli per esplorare le guide e gli approfondimenti verificati.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <Link href="/netfree/acqua">
            <div className="group border border-border bg-card/40 hover:border-primary/50 transition-all rounded-2xl p-5 space-y-3 cursor-pointer flex flex-col justify-between h-full">
              <div className="space-y-2">
                <Droplets className="w-6 h-6 text-primary" />
                <h3 className="font-bold text-sm">Acqua & Risorse</h3>
                <p className="text-xs text-muted-foreground">Acqua viva, funzionale e biologia.</p>
              </div>
              <span className="text-xs text-primary font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Approfondisci <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>

          <Link href="/netfree/terra">
            <div className="group border border-border bg-card/40 hover:border-primary/50 transition-all rounded-2xl p-5 space-y-3 cursor-pointer flex flex-col justify-between h-full">
              <div className="space-y-2">
                <Sprout className="w-6 h-6 text-primary" />
                <h3 className="font-bold text-sm">Terra & Microorganismi</h3>
                <p className="text-xs text-muted-foreground">Sovranità alimentare e permacultura.</p>
              </div>
              <span className="text-xs text-primary font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Approfondisci <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>

          <Link href="/netfree/energia">
            <div className="group border border-border bg-card/40 hover:border-primary/50 transition-all rounded-2xl p-5 space-y-3 cursor-pointer flex flex-col justify-between h-full">
              <div className="space-y-2">
                <Sun className="w-6 h-6 text-primary" />
                <h3 className="font-bold text-sm">Energia & Comunità</h3>
                <p className="text-xs text-muted-foreground">Autoproduzione e Green Sharing.</p>
              </div>
              <span className="text-xs text-primary font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Approfondisci <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>

          <Link href="/netfree/formazione">
            <div className="group border border-border bg-card/40 hover:border-primary/50 transition-all rounded-2xl p-5 space-y-3 cursor-pointer flex flex-col justify-between h-full">
              <div className="space-y-2">
                <BookOpen className="w-6 h-6 text-primary" />
                <h3 className="font-bold text-sm">Formazione & Reti</h3>
                <p className="text-xs text-muted-foreground">Crescita interiore e Potenza del 6.</p>
              </div>
              <span className="text-xs text-primary font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Approfondisci <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>

        </div>
      </section>

      {/* STEP 4 & 5: ABBONDANZA, AUTODETERMINAZIONE E CITTADELLA */}
      <section className="container max-w-4xl mx-auto px-6 space-y-6">
        <div className="rounded-3xl border border-primary/30 bg-card/50 p-8 md:p-10 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-2">
            <span className="text-primary text-xs uppercase tracking-widest font-semibold">Step 4 & 5 • Il Traguardo</span>
            <h2 className="text-2xl md:text-3xl font-bold font-serif-display">Abbondanza, Autodeterminazione e la Cittadella</h2>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Liberi dai bisogni primari grazie a NetFree, l'individua fiorisce nell'<strong>autodeterminazione</strong>. Questa sovranità condivisa trova la sua massima espressione nella <strong>Cittadella</strong>: il polo fisico e spirituale custode del nuovo modello di vita.
          </p>

          <div className="pt-2">
            <Link href="/club-deal">
              <Button size="lg" className="bg-primary text-primary-foreground font-semibold px-8 py-6 rounded-full">
                Diventa Liquidity Provider
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
