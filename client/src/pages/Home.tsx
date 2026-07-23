import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Shield, Users, HeartHandshake, Layers, Globe, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground space-y-24 pb-28">
      
      {/* INTRODUZIONE E TITOLO D'IMPATTO */}
      <section className="relative overflow-hidden pt-28 pb-16 border-b border-border/40">
        <div className="container max-w-5xl mx-auto px-6 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs uppercase tracking-[0.25em] font-semibold">
            La Chiave Railim • Percorso Evolutivo
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-serif-display leading-tight">
            LCR NetFree RWA<br />
            <span className="text-primary">Dalla Materia Reale alla Cittadella</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Un percorso chiaro e lineare per comprendere come si costruisce concretamente un nuovo modello di vita, superando i vecchi paradigmi attraverso la tokenizzazione, l'economia del dono e la sovranità condivisa.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/club-deal">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-8 py-6 text-base rounded-full shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                Diventa Liquidity Provider <ArrowRight className="w-4 h-4" />
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

      {/* VIDEO DI PRESENTAZIONE GENERALE */}
      <section className="container max-w-4xl mx-auto px-6 space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold font-serif-display">Presentazione Ufficiale del Progetto</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Una guida formativa per comprendere i passaggi chiave di questo cammino.
          </p>
        </div>

        <Card className="border-border bg-card/60 backdrop-blur-md rounded-2xl overflow-hidden p-6 shadow-xl">
          <div className="aspect-video w-full rounded-xl overflow-hidden border border-border bg-black/40 flex items-center justify-center">
            <iframe 
              src="https://www.youtube.com/embed/7RvWyWE3zxo" 
              className="w-full h-full border-0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              title="Presentazione Ufficiale LCR NetFree"
            />
          </div>
        </Card>
      </section>

      {/* STEP 1: TOKENIZZAZIONE RWA (Con e Senza LP) */}
      <section className="container max-w-6xl mx-auto px-6 space-y-8">
        <div className="text-center space-y-3">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold">Step 1 • L'Innesco</span>
          <h2 className="text-3xl font-bold font-serif-display">Tokenizzazione RWA: Con e Senza LP</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tutto parte dal contatto con la materia reale. È il motore che genera l'energia necessaria attraverso il protocollo Blotix e Railim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Il Modello della Tokenizzazione</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ancoriamo il valore digitale a beni fisici reali (come il comparto Hospitality Veneto), mantenendo la piena proprietà al 100% senza frazionamenti o vendite del bene e inserendo una rigorosa validazione con periti indipendenti per la stima dell'asset.
            </p>
          </Card>

          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Il Ruolo dei Liquidity Provider (LP)</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              La partecipazione dei LP fornisce stabilità e supporto alle operazioni reali, garantendo flussi trasparenti e programmati (come i rendimenti semestrali) completamente privi di leve debitorie bancarie.
            </p>
          </Card>
        </div>
      </section>

      {/* STEP 2: L'ECONOMIA DEL DONO */}
      <section className="container max-w-5xl mx-auto px-6">
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-b from-card/80 to-card/40 p-8 md:p-12 space-y-6 shadow-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          
          <span className="text-primary text-xs uppercase tracking-widest font-semibold">Step 2 • Il Modello</span>
          <h2 className="text-2xl md:text-4xl font-bold font-serif-display">
            L'Economia del Dono
          </h2>

          <p className="max-w-2xl mx-auto text-base text-muted-foreground leading-relaxed">
            L'energia e il valore generati dalla tokenizzazione non finiscono in un circuito speculativo estrattivo, ma alimentano un nuovo paradigma relazionale. Il passaggio dal trattenere al far fluire: si riceve e si dona, disinnescando la mentalità della scarsità.
          </p>
        </div>
      </section>

      {/* STEP 3: NETFREE (L'Ecosistema) */}
      <section className="container max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold">Step 3 • L'Ecosistema</span>
          <h2 className="text-3xl font-bold font-serif-display">NetFree: Il Network di Network</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Grazie all'economia del dono, le persone possono accedere alle risorse di base senza l'ansia della sopravvivenza quotidiana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Acqua & Risorse Vitali</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Soluzioni per la rigenerazione e la tutela delle risorse primarie.</p>
          </Card>

          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Terra & Microorganismi</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Tecnologie naturali per il ripristino della fertilità e la permacultura.</p>
          </Card>

          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Efficientamento Energetico</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Modelli di indipendenza energetica e autoproduzione.</p>
          </Card>

          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">Formazione & Potenza del 6</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Percorsi di crescita e cooperazione orientati al benessere comune.</p>
          </Card>
        </div>
        <p className="text-center text-xs text-muted-foreground italic">
          * I riferimenti specifici ai prodotti e servizi partner utilizzati nell'ecosistema sono consultabili tramite i collegamenti esterni dedicati.
        </p>
      </section>

      {/* STEP 4: ABBONDANZA E AUTODETERMINAZIONE */}
      <section className="container max-w-5xl mx-auto px-6 text-center space-y-6">
        <span className="text-primary text-xs uppercase tracking-widest font-semibold">Step 4 • Il Risultato</span>
        <h2 className="text-3xl font-bold font-serif-display">Abbondanza e Autodeterminazione</h2>
        <p className="max-w-3xl mx-auto text-base text-muted-foreground leading-relaxed">
          L'accesso libero ed etico alle risorse tramite NetFree genera un profondo cambio di stato nell'individuo. La persona che non deve più lottare per i bisogni primari entra in uno stato di vera abbondanza, da cui fiorisce spontaneamente l'<strong>autodeterminazione</strong>: la riscoperta della propria autorità interiore e del diritto inalienabile a scegliere il proprio percorso liberi dalle vecchie catene.
        </p>
      </section>

      {/* STEP 5: LA CITTADELLA (La Visione Finale) */}
      <section className="container max-w-5xl mx-auto px-6 pb-12">
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-b from-card/80 to-card/40 p-8 md:p-12 space-y-6 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          
          <span className="text-primary text-xs uppercase tracking-widest font-semibold">Step 5 • La Visione Finale</span>
          <h2 className="text-2xl md:text-4xl font-bold font-serif-display">
            La Cittadella
          </h2>

          <p className="max-w-2xl mx-auto text-base text-muted-foreground leading-relaxed">
            L'abbondanza collettiva e l'autodeterminazione dei singoli si manifestano infine nella <strong className="text-foreground">Cittadella</strong>: il polo fisico, spirituale e strutturato (custode del Libro Mastro) dove questo nuovo modello di vita e di economia trova la sua massima e stabile espressione.
          </p>

          <div className="pt-4 flex justify-center gap-4">
            <Link href="/club-deal">
              <Button size="lg" className="bg-primary text-primary-foreground font-semibold px-8 py-6 rounded-full">
                Unisciti come Liquidity Provider
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
