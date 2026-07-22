import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Sparkles, Compass, Shield, Globe, PlayCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground space-y-20 pb-24">
      
      {/* 1. HERO VISION SECTION: Uscita dalla scarsità e co-creazione */}
      <section className="relative overflow-hidden pt-24 pb-16 border-b border-border/40">
        <div className="container max-w-5xl mx-auto px-6 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs uppercase tracking-[0.25em] font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> Oltre il Debito • Verso l'Abbondanza
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-serif-display leading-tight">
            Lasciarci alle spalle secoli di scarsità.<br />
            <span className="text-primary">Co-creare insieme un nuovo modello di vita.</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Per centinaia di anni siamo stati vincolati a un sistema economico estrattivo fondato sul debito e sulla limitazione artificiale. Oggi abbiamo la possibilità concreta e l'architettura viva per dar vita a un modello alternativo: un sistema basato sull'economia del dono, sull'autodeterminazione e sulla prosperità condivisa.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/club-deal">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-8 py-6 text-base rounded-full shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                Diventa Co-creatore LP <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/network">
              <Button size="lg" variant="outline" className="border-border bg-card/50 text-foreground hover:bg-card hover:text-white px-8 py-6 text-base rounded-full">
                Esplora l'Ecosistema NetFree
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SEZIONE VIDEO PRESENTAZIONI (Spazio visivo immersivo) */}
      <section className="container max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold font-serif-display">Visione e Struttura Operativa</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ascolta le presentazioni ufficiali per comprendere i fondamenti del nuovo modello economico e di tokenizzazione degli asset reali.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Video 1: Presentazione Generale del Progetto / Visione */}
          <Card className="border-border bg-card/60 backdrop-blur-md rounded-2xl overflow-hidden p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                <PlayCircle className="w-5 h-5" /> Visione & Modello Globale
              </div>
              <h3 className="text-xl font-bold">Il Manifesto dell'Economia del Dono e del NetFree</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Una spiegazione approfondita del passaggio epocale verso un sistema di vita e relazione svincolato dai vecchi paradigmi di controllo.
              </p>
            </div>
            <div className="mt-6 aspect-video w-full rounded-xl overflow-hidden border border-border bg-black/40 flex items-center justify-center">
              <iframe 
                src="https://drive.google.com/file/d/18CXVsJ6I6v5g3xt9g-XNSDspLNAkGJRp/preview" 
                className="w-full h-full border-0" 
                allow="autoplay"
                title="Presentazione Ufficiale NetFree"
              />
            </div>
          </Card>

          {/* Video 2: Sintesi Tokenizzazione RWA */}
          <Card className="border-border bg-card/60 backdrop-blur-md rounded-2xl overflow-hidden p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                <PlayCircle className="w-5 h-5" /> Tokenizzazione & Valore Reale
              </div>
              <h3 className="text-xl font-bold">La Sintesi della Tokenizzazione RWA</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Come connettere la materia tangibile e i beni reali alle nuove strutture di valore protetto e circolare.
              </p>
            </div>
            <div className="mt-6 aspect-video w-full rounded-xl overflow-hidden border border-border bg-black/40 flex items-center justify-center relative">
              <div className="text-center p-6 space-y-2">
                <Sparkles className="w-8 h-8 text-primary mx-auto opacity-60" />
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">Contenuto in fase di sincronizzazione</p>
                <p className="text-sm font-medium">Video sintesi RWA disponibile a breve</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* 3. IL NUCLEO DEL MODELLO: Economia del Dono, NetFree, RWA e Autodeterminazione */}
      <section className="container max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold font-serif-display">I pilastri della trasformazione</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ogni pilastro rappresenta un passo concreto verso l'autonomia sistemica e la riconquista della libertà individuale e collettiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Economia del Dono</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Superare lo scambio meramente estrattivo per entrare in una circolarità basata sul valore umano, sulla fiducia e sulla rigenerazione reciproca.
            </p>
          </Card>

          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">NetFree & Autonomia</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Infrastrutture di rete decentralizzate che restituiscono sovranità ai partecipanti, azzerando le intermediazioni parassitarie del vecchio mondo.
            </p>
          </Card>

          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Tokenizzazione RWA</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ancorare il valore digitale a beni reali e tangibili, garantendo stabilità, protezione patrimoniale e flussi trasparenti.
            </p>
          </Card>

          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Autodeterminazione</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              La riscoperta della propria autorità interiore e del diritto inalienabile a co-creare la propria esistenza fuori dai vincoli di un'economia imposta.
            </p>
          </Card>

        </div>
      </section>

      {/* 4. LONG-TERM VISION: La Cittadella e il Libro Mastro */}
      <section className="container max-w-5xl mx-auto px-6">
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-b from-card/80 to-card/40 p-8 md:p-12 space-y-6 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          
          <h2 className="text-2xl md:text-4xl font-bold font-serif-display">
            Verso il futuro: La Cittadella e il Libro Mastro
          </h2>

          <p className="max-w-2xl mx-auto text-base text-muted-foreground leading-relaxed">
            La nostra visione a lungo termine culmina nella realizzazione della <strong className="text-foreground">Cittadella</strong>: un polo fisico e spirituale autosufficiente dove troverà definitiva dimora il <strong className="text-foreground">Libro Mastro</strong>. Qui le specifiche tecniche, i protocolli operativi e le comunità integrate troveranno la loro espressione più compiuta e stabile.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link href="/dashboard">
              <Button variant="default" className="bg-primary text-primary-foreground font-semibold px-6 py-5 rounded-full">
                Accedi alla Dashboard & Libro Mastro
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
