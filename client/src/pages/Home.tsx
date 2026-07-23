import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Shield, Users, Droplets, Sun, Sprout, BookOpen, ChevronRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground space-y-20 pb-28">
      
      {/* INTRODUZIONE E TITOLO D'IMPATTO (Nuovo Posizionamento Istituzionale) */}
      <section className="relative overflow-hidden pt-36 pb-24 border-b border-border/40">
        <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1920&auto=format&fit=crop')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/95 to-background z-0" />

        <div className="container max-w-5xl mx-auto px-6 text-center space-y-8 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs uppercase tracking-[0.3em] font-semibold">
            LCR Ecosystem • La Chiave Railim
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-serif-display leading-[1.1]">
            Oltre il debito.<br />
            <span className="text-primary">Nel cuore della materia reale.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed font-light">
            Un'infrastruttura finanziaria ed ecologica che unisce la tokenizzazione RWA di beni concreti a un nuovo modello di economia circolare. Senza leve bancarie. Senza compromessi.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/club-deal">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-8 py-6 text-base rounded-full shadow-[0_0_35px_rgba(212,175,55,0.25)]">
                Diventa Liquidity Provider <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/accesso">
              <Button size="lg" variant="outline" className="border-border bg-card/40 backdrop-blur-sm text-foreground hover:bg-card hover:text-white px-8 py-6 text-base rounded-full">
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

      {/* STEP 1: TOKENIZZAZIONE RWA & GARANZIA PERITALE */}
      <section className="container max-w-5xl mx-auto px-6 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold">Step 1 • Il Primo Pilastro</span>
          <h2 className="text-3xl font-bold font-serif-display">Tokenizzazione RWA & Perizie Certificate</h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Il contatto con la materia reale genera l'innesco. Ogni asset è rigorosamente validato da periti indipendenti finanziati interamente dal protocollo (fee dello 0,88%).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <Shield className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold">La Regola del ±10% e Perizia Azzerata</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Per tutelare proprietari e investitori, la perizia indipendente è obbligatoria e rientra in un margine del ±10% sul valore reale di mercato. Il costo del perito è interamente a carico del protocollo (coperto dalla fee di strutturazione dello 0,88%), azzerando ogni attrito per il proprietario.
              </p>
            </div>
            <div className="pt-2 flex items-center gap-2 text-xs text-primary font-semibold">
              <CheckCircle2 className="w-4 h-4" /> Zero costi vivi per il proprietario dell'asset
            </div>
          </Card>

          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <Users className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold">I Liquidity Provider (ROI Sostenibile al 21%)</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                La partecipazione dei LP sostiene le operazioni reali con flussi trasparenti e programmati, attestati su un ROI calibrato al 21% per garantire una sostenibilità finanziaria inattaccabile e priva di leve debitorie bancarie.
              </p>
            </div>
            <div className="pt-2 flex items-center gap-2 text-xs text-primary font-semibold">
              <CheckCircle2 className="w-4 h-4" /> Rendimenti solidi basati su flussi reali
            </div>
          </Card>
        </div>
      </section>

      {/* STEP 2: L'ECONOMIA DEL DONO */}
      <section className="container max-w-4xl mx-auto px-6">
        <div className="rounded-3xl border border-primary/30 bg-card/50 p-8 md:p-10 text-center space-y-4 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb9?q=80&w=1200&auto=format&fit=crop')` }} />
          <div className="relative z-10 space-y-4">
            <span className="text-primary text-xs uppercase tracking-widest font-semibold">Step 2 • Il Modello Relazionale</span>
            <h2 className="text-2xl md:text-3xl font-bold font-serif-display">L'Economia del Dono</h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Il valore generato dal primo pilastro non alimenta circuiti speculativi estrattivi, ma innesca un nuovo paradigma: dal trattenere al far fluire, superando la mentalità della scarsità.
            </p>
          </div>
        </div>
      </section>

      {/* STEP 3: NETFREE (Moduli con Accesso alle Pagine Dedicate) */}
      <section className="container max-w-5xl mx-auto px-6 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold">Step 3 • L'Ecosistema</span>
          <h2 className="text-3xl font-bold font-serif-display">NetFree: Il Network di Risorse</h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Soluzioni pratiche per l'autonomia quotidiana. Esplora i moduli con guide e approfondimenti verificati.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <Link href="/netfree/acqua">
            <div className="group border border-border bg-card/40 hover:border-primary/50 transition-all rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between h-full shadow-lg">
              <div className="h-32 w-full overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=600&auto=format&fit=crop" alt="Acqua" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm">Acqua & Risorse</h3>
                  <p className="text-xs text-muted-foreground pt-1">Acqua viva, funzionale e biologia.</p>
                </div>
                <span className="text-xs text-primary font-semibold flex items-center gap-1 pt-2 group-hover:translate-x-1 transition-transform">
                  Approfondisci <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </Link>

          <Link href="/netfree/terra">
            <div className="group border border-border bg-card/40 hover:border-primary/50 transition-all rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between h-full shadow-lg">
              <div className="h-32 w-full overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=600&auto=format&fit=crop" alt="Terra" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm">Terra & Microorganismi</h3>
                  <p className="text-xs text-muted-foreground pt-1">Sovranità alimentare e permacultura.</p>
                </div>
                <span className="text-xs text-primary font-semibold flex items-center gap-1 pt-2 group-hover:translate-x-1 transition-transform">
                  Approfondisci <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </Link>

          <Link href="/netfree/energia">
            <div className="group border border-border bg-card/40 hover:border-primary/50 transition-all rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between h-full shadow-lg">
              <div className="h-32 w-full overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop" alt="Energia" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm">Energia & Comunità</h3>
                  <p className="text-xs text-muted-foreground pt-1">Autoproduzione e Green Sharing.</p>
                </div>
                <span className="text-xs text-primary font-semibold flex items-center gap-1 pt-2 group-hover:translate-x-1 transition-transform">
                  Approfondisci <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </Link>

          <Link href="/netfree/formazione">
            <div className="group border border-border bg-card/40 hover:border-primary/50 transition-all rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between h-full shadow-lg">
              <div className="h-32 w-full overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop" alt="Formazione" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm">Formazione & Reti</h3>
                  <p className="text-xs text-muted-foreground pt-1">Crescita interiore e Potenza del 6.</p>
                </div>
                <span className="text-xs text-primary font-semibold flex items-center gap-1 pt-2 group-hover:translate-x-1 transition-transform">
                  Approfondisci <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </Link>

        </div>
      </section>

      {/* STEP 4 & 5: ABBONDANZA, AUTODETERMINAZIONE E CITTADELLA */}
      <section className="container max-w-4xl mx-auto px-6 space-y-6">
        <div className="rounded-3xl border border-primary/30 bg-card/50 p-8 md:p-12 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-15 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop')` }} />
          
          <div className="relative z-10 space-y-4">
            <div className="space-y-2">
              <span className="text-primary text-xs uppercase tracking-widest font-semibold">Step 4 & 5 • Il Traguardo</span>
              <h2 className="text-2xl md:text-3xl font-bold font-serif-display">Abbondanza, Autodeterminazione e la Cittadella</h2>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Liberi dai bisogni primari grazie a NetFree, l'individuo fiorisce nell'<strong>autodeterminazione</strong>. Questa sovranità condivisa trova la sua massima espressione nella <strong>Cittadella</strong>: il polo fisico e spirituale custode del nuovo modello di vita.
            </p>

            <div className="pt-2">
              <Link href="/club-deal">
                <Button size="lg" className="bg-primary text-primary-foreground font-semibold px-8 py-6 rounded-full">
                  Diventa Liquidity Provider (ROI 21%)
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
