import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Compass, Shield, Users, HeartHandshake, Layers, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground space-y-24 pb-28">
      
      {/* 1. TITOLO D'IMPATTO E VISIONE EVOLUTIVA */}
      <section className="relative overflow-hidden pt-28 pb-16 border-b border-border/40">
        <div className="container max-w-5xl mx-auto px-6 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs uppercase tracking-[0.25em] font-semibold">
            Il Percorso Evolutivo e d'Anima
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-serif-display leading-tight">
            LCR NetFree RWA<br />
            <span className="text-primary">La Chiave Railim</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Riconoscere le dinamiche dell'attuale sistema economico è il primo passo per rispettare il proprio percorso evolutivo. Non si tratta di subire o lottare, ma di allinearsi a un principio naturale e universale: l'<strong>economia del dono</strong>, dove il flusso del <em>ricevere e dare</em> torna ad essere circolare, vivo e non estattivo.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/club-deal">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-8 py-6 text-base rounded-full shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                Diventa Co-creatore LP <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/accesso">
              <Button size="lg" variant="outline" className="border-border bg-card/50 text-foreground hover:bg-card hover:text-white px-8 py-6 text-base rounded-full">
                Accedi all'Area Riservata
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* VIDEO DI PRESENTAZIONE GENERALE (URL YouTube: https://youtu.be/7RvWyWE3zxo) */}
      <section className="container max-w-4xl mx-auto px-6 space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold font-serif-display">Presentazione Ufficiale del Progetto</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Una guida formativa per comprendere il cambio di paradigma, la metafora del seme e la nostra visione a lungo termine.
          </p>
        </div>

        <Card className="border-border bg-card/60 backdrop-blur-md rounded-2xl overflow-hidden p-6 shadow-xl">
          <div className="aspect-video w-full rounded-xl overflow-hidden border border-border bg-black/40 flex items-center justify-center">
            <iframe 
              src="https://www.youtube.com/embed/7RvWyWE3zxo" 
              className="w-full h-full border-0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              title="NetFree LCR Presentazione Ufficiale"
            />
          </div>
        </Card>
      </section>

      {/* 2 & 3. COME RICEVERE SE NON SONO NELL'ABBONDANZA? (Il NetFree e le risorse reali) */}
      <section className="container max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs uppercase tracking-wider font-semibold">
            <Compass className="w-3.5 h-3.5" /> NetFree • Ecosistema di Risorse
          </div>
          <h2 className="text-3xl font-bold font-serif-display">Come attivare l'abbondanza partendo da zero?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Se oggi avverti i limiti del contesto esterno, la risposta è la rete. Attraverso NetFree integriamo asset reali e vitali per l'autonomia quotidiana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Acqua & Risorse Vitali</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Soluzioni per la rigenerazione e la tutela delle risorse primarie, svincolate dai sistemi di monopolio e controllo centralizzato.
            </p>
          </Card>

          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Microorganismi & Terra</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tecnologie naturali e biologiche per il ripristino della fertilità del suolo e la permacultura applicata alla sovranità alimentare.
            </p>
          </Card>

          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Efficientamento Energetico</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Modelli di indipendenza energetica e autoproduzione per liberare le comunità dai costi crescenti delle reti tradizionali.
            </p>
          </Card>

          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Formazione & Consapevolezza</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Percorsi di crescita interiore e competenza pratica per comprendere come muoversi con lucidità nel nuovo paradigma.
            </p>
          </Card>

        </div>
        <p className="text-center text-xs text-muted-foreground italic">
          * I riferimenti specifici ai prodotti e servizi partner utilizzati nell'ecosistema sono consultabili tramite i collegamenti esterni dedicati nelle sezioni informative.
        </p>
      </section>

      {/* 4. LA TOKENIZZAZIONE RWA: Il modello base e la nostra evoluzione */}
      <section className="container max-w-5xl mx-auto px-6">
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-b from-card/80 to-card/40 p-8 md:p-12 space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-3 text-center">
            <span className="text-primary text-xs uppercase tracking-widest font-semibold">Ancoraggio al Reale</span>
            <h2 className="text-2xl md:text-4xl font-bold font-serif-display">
              La Tokenizzazione degli Asset Reali (RWA)
            </h2>
          </div>

          <p className="max-w-2xl mx-auto text-base text-muted-foreground leading-relaxed text-center">
            Mentre il modello finanziario tradizionale usa la tokenizzazione a scopo meramente speculativo ed estrattivo, il nostro approccio unisce la materia tangibile (beni reali, immobili e progetti di valore) a un sistema di flussi protetti, stabili e programmati (come i rendimenti semestrali dell'1,25%), eliminando ogni leva di debito bancario.
          </p>
        </div>
      </section>

      {/* 5. L'OPPORTUNITÀ PER IL LIQUIDITY PROVIDER */}
      <section className="container max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold font-serif-display">Il Circolo Virtuoso del Liquidity Provider</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un'opportunità concreta per aiutare, co-creare e generare prosperità all'interno di un sistema che cresce nutrendo se stesso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Aiutare e Sostenere</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              La tua partecipazione fornisce stabilità alle operazioni reali, permettendo al network di espandersi e sostenere chi sceglie l'autonomia.
            </p>
          </Card>

          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Co-creare il Futuro</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Partecipi attivamente alla costruzione di un'alternativa concreta, lasciandoti alle spalle le logiche di scarsità e dipendenza.
            </p>
          </Card>

          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Prosperità Condivisa</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Benefici di ritorni programmati e trasparenti (come il rendimento semestrale) all'interno di un ecosistema che genera valore reale.
            </p>
          </Card>

        </div>

        <div className="text-center pt-6">
          <Link href="/club-deal">
            <Button size="lg" className="bg-primary text-primary-foreground font-semibold px-8 py-6 rounded-full shadow-lg">
              Candidati come Liquidity Provider <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}
