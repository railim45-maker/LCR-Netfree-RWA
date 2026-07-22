import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, ShieldCheck, Users, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground space-y-16 pb-20">
      {/* Hero Section con forte richiamo archetipico e subconscio */}
      <section className="relative overflow-hidden pt-20 pb-16 border-b border-border/40">
        <div className="container max-w-5xl mx-auto px-6 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs uppercase tracking-[0.2em] font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> Economia Nativa Donativa & RWA
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-serif-display leading-tight">
            Non investire in un sistema.<br />
            <span className="text-primary">Co-crea la forma della nuova realtà.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Railim non è una piattaforma di finanza estrattiva. È un ecosistema vivente dove i <strong className="text-foreground">Liquidity Provider</strong> diventano co-autori di un'architettura economica autosufficiente, basata su asset reali e simmetria relazionale.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/club-deal">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-8 py-6 text-base rounded-full shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                Diventa Liquidity Provider <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/network">
              <Button size="lg" variant="outline" className="border-border bg-card/50 text-foreground hover:bg-card hover:text-white px-8 py-6 text-base rounded-full">
                Esplora la Potenza del 6
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sezione delle Carte / Accesso Rapido */}
      <section className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card Dashboard */}
          <Card className="border-border bg-card/60 backdrop-blur-md rounded-2xl p-6 transition-all hover:border-primary/50 hover:shadow-xl flex flex-col justify-between">
            <CardHeader className="p-0 space-y-3 pb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <CardTitle className="text-xl font-bold">Dashboard LP & Asset</CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Monitora in tempo reale i rendimenti semestrali programmati (1,25%) e la stabilità dei flussi sul Libro Mastro.
              </p>
              <Link href="/dashboard">
                <Button variant="ghost" className="w-full justify-between text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto py-2">
                  <span>Accedi alla Dashboard</span> <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Card Liquidity Provider (Sostituisce Club Deal) */}
          <Card className="border-border bg-card/60 backdrop-blur-md rounded-2xl p-6 transition-all hover:border-primary/50 hover:shadow-xl flex flex-col justify-between">
            <CardHeader className="p-0 space-y-3 pb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Sparkles className="w-6 h-6" />
              </div>
              <CardTitle className="text-xl font-bold">Liquidity Provider</CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Partecipa attivamente alle operazioni di tokenizzazione RWA con un ruolo generativo, stabile e non speculativo.
              </p>
              <Link href="/club-deal">
                <Button variant="ghost" className="w-full justify-between text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto py-2">
                  <span>Diventa Co-creatore LP</span> <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Card Network */}
          <Card className="border-border bg-card/60 backdrop-blur-md rounded-2xl p-6 transition-all hover:border-primary/50 hover:shadow-xl flex flex-col justify-between">
            <CardHeader className="p-0 space-y-3 pb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Users className="w-6 h-6" />
              </div>
              <CardTitle className="text-xl font-bold">Potenza del 6</CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Esplora l'architettura relazionale a sviluppo armonico, basata su geometrie di simmetria e valore condiviso.
              </p>
              <Link href="/network">
                <Button variant="ghost" className="w-full justify-between text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto py-2">
                  <span>Scopri la Rete</span> <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

        </div>
      </section>
    </div>
  );
}
