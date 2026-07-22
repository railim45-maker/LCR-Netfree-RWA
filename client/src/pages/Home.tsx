import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Sparkles, Compass, Shield, Users, PlayCircle, HeartHandshake } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground space-y-20 pb-24">
      
      {/* 1. HERO VISION: Il nuovo mondo e la metafora dello tsunami nella tazzina */}
      <section className="relative overflow-hidden pt-24 pb-16 border-b border-border/40">
        <div className="container max-w-5xl mx-auto px-6 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs uppercase tracking-[0.25em] font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> Oltre il Debito • Verso l'Abbondanza
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-serif-display leading-tight">
            Il vecchio mondo corre verso uno tsunami.<br />
            <span className="text-primary">Noi stiamo piantando il seme di una nuova realtà.</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Per secoli siamo stati imprigionati in un'economia di scarsità, debito ed estrazione. Quella struttura sta implodendo come uno <strong>tsunami chiuso dentro una tazzina</strong>. Ma non dobbiamo subirlo: abbiamo la possibilità concreta di costruire insieme un sistema parallelo basato sull'economia del dono, sulla prosperità e sulla libertà.
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

      {/* 2. VIDEO PRESENTAZIONE GENERALE (Home) */}
      <section className="container max-w-4xl mx-auto px-6 space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold font-serif-display">La Visione e il Manifesto</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ascolta la presentazione ufficiale del progetto per comprendere la direzione del cambiamento e la transizione che stiamo vivendo.
          </p>
        </div>

        <Card className="border-border bg-card/60 backdrop-blur-md rounded-2xl overflow-hidden p-6">
          <div className="aspect-video w-full rounded-xl overflow-hidden border border-border bg-black/40 flex items-center justify-center">
            <iframe 
              src="https://drive.google.com/file/d/18CXVsJ6I6v5g3xt9g-XNSDspLNAkGJRp/preview" 
              className="w-full h-full border-0" 
              allow="autoplay"
              title="Presentazione Ufficiale"
            />
          </div>
        </Card>
      </section>

      {/* 3. IL COSTRUTTO: Come lo facciamo concretamente */}
      <section className="container max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold font-serif-display">Come costruiamo il nuovo mondo</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un percorso chiaro, pulito e accessibile a chiunque desideri passare dall'attesa alla co-creazione attiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Economia del Dono</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Mettiamo al centro la cooperazione e la fiducia reciproca. Non scendiamo a patti con la logica del profitto estrattivo, ma creiamo valore rigenerativo per tutti.
            </p>
          </Card>

          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Liquidity Provider (LP)</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Le persone non sono semplici utenti, ma co-creatori che scelgono di partecipare attivamente alle operazioni di supporto e stabilità dell'ecosistema.
            </p>
          </Card>

          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Area Riservata & Trasparenza</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Questo sito offre una panoramica chiara e divulgativa. Tutti i dettagli tecnici operativi, i dati del Libro Mastro e i report sono accessibili in modo sicuro nell'area riservata.
            </p>
          </Card>

        </div>
      </section>

      {/* 4. CALL TO ACTION FINALE */}
      <section className="container max-w-4xl mx-auto px-6 text-center">
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-b from-card/80 to-card/40 p-8 md:p-12 space-y-6 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold font-serif-display">
            Sei pronto a fare la tua parte nel nuovo mondo?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Unisciti a noi come Liquidity Provider o entra nell'area riservata per scoprire i dettagli completi del progetto.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link href="/club-deal">
              <Button size="lg" className="bg-primary text-primary-foreground font-semibold px-8 py-5 rounded-full">
                Candidati come Liquidity Provider
              </Button>
            </Link>
            <Link href="/accesso">
              <Button size="lg" variant="outline" className="border-border bg-background text-foreground hover:bg-card px-8 py-5 rounded-full">
                Entra / Accedi
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
