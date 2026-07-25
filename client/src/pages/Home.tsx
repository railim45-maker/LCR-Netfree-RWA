import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Sparkles, Shield, Layers, BookOpen, ExternalLink, Lock, FileText, Code, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isAdminUnlocked, setIsAdminUnlocked] = useState(false);
  const [adminCodeInput, setAdminCodeInput] = useState("");

  const handleAdminAccess = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminCodeInput === "LCR-ADMIN-2026") {
      setIsAdminUnlocked(true);
    } else {
      alert("Codice non valido.");
    }
  };

  return (
    <div className="min-h-screen relative text-foreground space-y-32 pb-40 overflow-hidden bg-background">
      
      {/* L'ALBERO LUMINOSO E CALDO SU TUTTO LO SFONDO DEL SITO */}
      <div className="absolute inset-0 z-0 opacity-30 bg-cover bg-center bg-fixed mix-blend-luminosity filter brightness-125 pointer-events-none" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop')` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background z-0 pointer-events-none" />

      {/* 1. VISIONE A LUNGO TERMINE (FILOSOFIA E VALORE INCONDIZIONATO) */}
      <section className="relative pt-48 pb-36 border-b border-primary/20 bg-gradient-to-b from-primary/10 via-transparent to-transparent z-10">
        <div className="container max-w-5xl mx-auto px-6 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/20 text-primary text-xs uppercase tracking-[0.2em] font-bold backdrop-blur-md shadow-md">
            <Sparkles className="w-4 h-4" /> La Visione del Nuovo Paradigma
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-serif-display leading-[1.1] text-foreground">
            Vivere nell'abbondanza, nell'amore<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-primary to-yellow-200">
              e nel mutuo aiuto consapevole.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            Tutti coloro che fanno parte di questo progetto scelgono di dedicare il proprio tempo alla vocazione di vita, alla crescita personale e relazionale. Per insegnare a vivere nell'abbondanza, riconosciamo con integrità e trasparenza che i fondatori partecipano giustamente ai proventi del valore generato: il nostro portare valore ha in sé un merito sano che riconosciamo in noi e negli altri.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/club-deal">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-9 py-6 text-base rounded-full shadow-lg font-semibold transition-all transform hover:scale-105">
                Esplora i Club Deal e i Numeri <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          
        </div>
      </section>

      {/* 2. VIDEO DI PRESENTAZIONE NATIVO */}
      <section className="container max-w-4xl mx-auto px-6 space-y-4 relative z-10">
        <div className="text-center space-y-2">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">Presentazione Ufficiale</span>
          <h2 className="text-3xl font-bold font-serif-display">Ascolta la Visione Profonda</h2>
          <p className="text-sm text-muted-foreground">Comprendi il modello e la filosofia direttamente dal nostro video ufficiale.</p>
        </div>
        <div className="rounded-3xl border border-primary/30 bg-card/60 backdrop-blur-xl p-4 md:p-6 shadow-2xl relative">
          <div className="aspect-video w-full rounded-2xl overflow-hidden border border-border bg-black/40 shadow-inner">
            <iframe 
              src="https://www.youtube.com/embed/7RvWyWE3zxo" 
              className="w-full h-full border-0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              title="Presentazione Ufficiale LCR"
            />
          </div>
        </div>
      </section>

      {/* 3. IL MODELLO: I DUE SEMI (INTRODUZIONE STRUTTURALE) */}
      <section className="container max-w-6xl mx-auto px-6 space-y-12 relative z-10">
        
        <div className="text-center space-y-3">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">La Strategia di Crescita</span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif-display">Come Arriviamo alla Meta: I Due Semi</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Un percorso in due tappe sinergiche che unisce la solidità della materia alla forza generativa della comunità in abbonamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="rounded-3xl border border-border/80 bg-card/70 backdrop-blur-md p-8 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-serif-display">Il Primo Seme: Tokenizzazione RWA</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                La digitalizzazione di beni reali con una fee di emissione NFT del 0,75%[cite: 1]. I dettagli analitici, le tabelle comparative e i calcoli dei rendimenti per ogni fascia di valore si trovano nelle pagine di approfondimento dedicate.
              </p>
            </div>
            <div className="pt-4 border-t border-border/40">
              <Link href="/club-deal">
                <Button variant="outline" className="w-full justify-between group">
                  <span>Visualizza Analisi e Scenari</span> <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-primary/40 bg-gradient-to-b from-primary/10 to-card/70 backdrop-blur-md p-8 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-serif-display">Il Secondo Seme: Network NetFree</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Il sistema frattale di condivisione del dono esteso fino all'ottavo livello. Abbonamenti accessibili che generano flussi continui per i servizi e per la transizione dall'entropia alla sintropia.
              </p>
            </div>
            <div className="pt-4 border-t border-border/40">
              <Link href="/club-deal">
                <Button variant="outline" className="w-full justify-between group">
                  <span>Scopri il Modello Frattale</span> <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. COLLEGAMENTI E RISORSE UFFICIALI */}
      <section className="container max-w-6xl mx-auto px-6 space-y-12 relative z-10">
        <div className="text-center space-y-3">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">Approfondimenti</span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif-display">Risorse e Collegamenti Ufficiali</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            Esplora le guide verificate per acqua, terra, energia e formazione.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="group border border-border/80 bg-card/70 backdrop-blur-md hover:border-primary/60 transition-all rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="h-40 w-full overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=600&auto=format&fit=crop" alt="Acqua" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <h3 className="font-bold text-base font-serif-display">Acqua Viva & Biologia</h3>
              <div className="space-y-2 pt-2 border-t border-border/40 text-xs">
                <a href="https://www.youtube.com/watch?v=elbOEII7-zo" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between font-semibold text-primary hover:underline">
                  <span>Conferenza Tecnica</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="group border border-border/80 bg-card/70 backdrop-blur-md hover:border-primary/60 transition-all rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="h-40 w-full overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=600&auto=format&fit=crop" alt="Terra" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <h3 className="font-bold text-base font-serif-display">Terra & Microorganismi</h3>
              <div className="space-y-2 pt-2 border-t border-border/40 text-xs">
                <a href="https://www.ecopassaparola.net/it/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between font-semibold text-primary hover:underline">
                  <span>Ecopassaparola Portale</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="group border border-border/80 bg-card/70 backdrop-blur-md hover:border-primary/60 transition-all rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="h-40 w-full overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop" alt="Energia" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <h3 className="font-bold text-base font-serif-display">Energia & Comunità</h3>
              <div className="space-y-2 pt-2 border-t border-border/40 text-xs">
                <a href="https://www.pefpower.it/it/informatives/mix-energetico" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between font-semibold text-primary hover:underline">
                  <span>Mix Energetico & ARERA</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="group border border-border/80 bg-card/70 backdrop-blur-md hover:border-primary/60 transition-all rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="h-40 w-full overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop" alt="Formazione" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <h3 className="font-bold text-base font-serif-display">Accademia & Autodeterminazione</h3>
              <div className="space-y-2 pt-2 border-t border-border/40 text-xs">
                <a href="https://www.facebook.com/SkipperLab.formazione/?locale=it_IT" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between font-semibold text-primary hover:underline">
                  <span>Contatta Andrea e Aldo Pironi</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. AREA RISERVATA ADMIN (CODICI E MATERIALI INTERNI) */}
      <section className="container max-w-4xl mx-auto px-6 relative z-10">
        <div className="rounded-3xl border border-border bg-card/50 backdrop-blur-xl p-8 md:p-10 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-border/60 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-primary/10 text-primary">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base">Area Riservata Admin & Codici Sorgente</h3>
                <p className="text-xs text-muted-foreground">Accesso protetto per la gestione dei materiali interni e dei repository.</p>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-1 rounded bg-muted text-muted-foreground">ADMIN ONLY</span>
          </div>

          {!isAdminUnlocked ? (
            <form onSubmit={handleAdminAccess} className="flex flex-col sm:flex-row gap-3 pt-2">
              <input 
                type="password" 
                placeholder="Inserisci il codice di sblocco admin..." 
                value={adminCodeInput}
                onChange={(e) => setAdminCodeInput(e.target.value)}
                className="flex-1 bg-background border border-border rounded-xl px-4 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary"
              />
              <Button type="submit" size="sm" className="bg-primary text-primary-foreground font-semibold">
                Sblocca Area <Code className="w-3.5 h-3.5 ml-2" />
              </Button>
            </form>
          ) : (
            <div className="space-y-6 pt-2 animate-in fade-in duration-500">
              <div className="p-4 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                  <CheckCircle2 className="w-4 h-4" /> Area Admin Sbloccata con Successo
                </div>
                <Button variant="ghost" size="sm" onClick={() => setIsAdminUnlocked(false)} className="text-xs h-7">
                  Blocca di nuovo
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl border border-border bg-background/50 space-y-2">
                  <div className="font-bold flex items-center gap-2 text-primary">
                    <FileText className="w-4 h-4" /> Protocolli di Autodeterminazione
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Materiali avanzati per la gestione dei percorsi di accademia coordinati con Andrea e Aldo Pironi.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-border bg-background/50 space-y-2">
                  <div className="font-bold flex items-center gap-2 text-primary">
                    <Code className="w-4 h-4" /> Gestione Codice Vercel / GitHub
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Sincronizzazione repository e monitoraggio log di deploy attivi.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 6. CALL TO ACTION FINALE */}
      <section className="container max-w-4xl mx-auto px-6 relative z-10">
        <div className="rounded-3xl border border-primary/50 bg-gradient-to-br from-primary/15 via-card to-background p-12 md:p-16 text-center space-y-6 shadow-[0_0_60px_rgba(212,175,55,0.15)] relative overflow-hidden backdrop-blur-xl">
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">Il Futuro Inizia Adesso</span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif-display">Entriamo Insieme nel Nuovo Paradigma</h2>
            <p className="text-base text-muted-foreground leading-relaxed font-light">
              Unisciti a noi in questo cammino di libertà e cooperazione. Esplora i dettagli finanziari e i Club Deal nelle pagine dedicate.
            </p>
            <div className="pt-2">
              <Link href="/club-deal">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-10 py-7 rounded-full shadow-[0_0_40px_rgba(212,175,55,0.4)] text-base transition-all transform hover:scale-105">
                  Vai ai Club Deal e ai Numeri <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
