import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  ArrowRight, Shield, Users, Droplets, Sun, Sprout, BookOpen, ExternalLink, 
  PlayCircle, Sparkles, Flame, HeartHandshake, Globe2, Milestone, Target, 
  CheckCircle2, Lock, FileText, Code, Award, RefreshCw, Layers, TrendingUp 
} from "lucide-react";

export default function Home() {
  const [testStep, setTestStep] = useState(0);
  const [userProfile, setUserProfile] = useState<string | null>(null);
  const [isAdminUnlocked, setIsAdminUnlocked] = useState(false);
  const [adminCodeInput, setAdminCodeInput] = useState("");

  const handleTestAnswer = (profile: string) => {
    setUserProfile(profile);
    setTestStep(2);
  };

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
      
      {/* SFONDO LUMINOSO DIFFUSO (MATERIA REALE E ABBONDANZA) */}
      <div className="absolute inset-0 z-0 opacity-25 bg-cover bg-center bg-fixed mix-blend-luminosity filter brightness-125" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop')` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/90 to-background z-0" />

      {/* 1. VISIONE A LUNGO TERMINE (IL SOGNO E LA REALTA') */}
      <section className="relative pt-44 pb-32 border-b border-primary/20 bg-gradient-to-b from-primary/10 via-transparent to-transparent z-10">
        <div className="container max-w-5xl mx-auto px-6 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/20 text-primary text-xs uppercase tracking-[0.2em] font-bold backdrop-blur-md shadow-md">
            <Sparkles className="w-4 h-4" /> La Visione di Lungo Termine
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-serif-display leading-[1.1] text-foreground">
            Vivere nell'abbondanza, nell'amore<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-primary to-yellow-200">
              e nel mutuo aiuto consapevole.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            Tutti coloro che fanno parte di questo progetto scelgono di dedicare il proprio tempo alla vocazione di vita, alla crescita personale e relazionale. Per insegnare a vivere nell'abbondanza, riconosciamo con integrità e trasparenza che i fondatori partecipano giustamente ai proventi del valore generato.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/club-deal">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-9 py-6 text-base rounded-full shadow-lg font-semibold transition-all transform hover:scale-105">
                Esplora i Club Deal & Scenari di Rendimento <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          
        </div>
      </section>

      {/* 2. VIDEO DI PRESENTAZIONE INTEGRATO NATIVAMENTE */}
      <section className="container max-w-4xl mx-auto px-6 space-y-4 relative z-10">
        <div className="text-center space-y-2">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">Presentazione Ufficiale</span>
          <h2 className="text-3xl font-bold font-serif-display">Ascolta la Visione e il Metodo</h2>
          <p className="text-sm text-muted-foreground">Comprendi dall'interno come si sviluppa il nostro ecosistema.</p>
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

      {/* 3. COME ARRICIARVI: I DUE SEMI (TOKENIZZAZIONE RWA E NETFREE) */}
      <section className="container max-w-6xl mx-auto px-6 space-y-16 relative z-10">
        
        <div className="text-center space-y-3">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">La Strategia</span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif-display">Come Arriviamo alla Meta: I Due Semi</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Dalla solidità dei beni reali tokenizzati alla forza generativa della condivisione in abbonamento (NetFree).
          </p>
        </div>

        {/* GRIGLIA DEI DUE SEMI CON DATI NUMERICI REALI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* SEME 1: TOKENIZZAZIONE RWA & SCENARI */}
          <div className="rounded-3xl border border-border/80 bg-card/70 backdrop-blur-md p-8 space-y-6 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-serif-display">Il Primo Seme: Tokenizzazione RWA</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                La digitalizzazione di beni reali con una fee di emissione NFT del <strong>0,75%</strong> una tantum[cite: 1]. Attraverso i Liquidity Provider e la diffusione dell'informazione, attiviamo flussi stabili[cite: 1].
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-background/50 border border-border/60 space-y-1">
                  <span className="text-[10px] uppercase font-mono text-primary font-bold">Scenario A (con LP)</span>
                  <div className="text-lg font-extrabold">2,00% annuo</div>
                  <p className="text-[11px] text-muted-foreground">Rendimento netto medio su 5 anni: <strong>1,85%</strong>[cite: 1]</p>
                </div>
                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/30 space-y-1">
                  <span className="text-[10px] uppercase font-mono text-primary font-bold">Scenario B</span>
                  <div className="text-lg font-extrabold">2,50% annuo</div>
                  <p className="text-[11px] text-muted-foreground">Rendimento netto medio su 5 anni: <strong>2,35%</strong>[cite: 1]</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border/40 text-xs flex justify-between font-semibold">
              <span className="text-muted-foreground">Esempio su Asset €1.000.000:</span>
              <span className="text-primary">Costo NFT €7.500[cite: 1]</span>
            </div>
          </div>

          {/* SEME 2: NETFREE E FRATTALE */}
          <div className="rounded-3xl border border-primary/40 bg-gradient-to-b from-primary/10 to-card/70 backdrop-blur-md p-8 space-y-6 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-serif-display">Il Secondo Seme: Il Network NetFree</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                La condivisione del dono attraverso un sistema frattale esteso fino all'ottavo livello di profondità. 
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Anche raccogliendo un singolo euro al mese per abbonamento da tutta la comunità, si generano volumi straordinari. Il sistema si autorigenera suddividendo i proventi: una parte a beneficio dell'utente, una parte per i servizi e una parte per sostenere la crescita della comunità e la transizione dall'entropia alla <strong>sintropia</strong>.
              </p>
            </div>

            <div className="pt-4 border-t border-border/40 text-xs flex justify-between font-semibold">
              <span className="text-muted-foreground">Modello Economico:</span>
              <span className="text-primary">Autorigenerante & Frattale</span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. QUESTIONARIO / TEST DI CONSAPEVOLEZZA E ORIENTAMENTO */}
      <section className="container max-w-4xl mx-auto px-6 space-y-8 relative z-10">
        <div className="rounded-3xl border border-primary/40 bg-card/80 backdrop-blur-xl p-8 md:p-12 shadow-2xl space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">Orientamento Consapevole</span>
            <h2 className="text-2xl md:text-4xl font-bold font-serif-display">Qual è il Tuo Ruolo nel Nuovo Paradigma?</h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Seleziona la tua inclinazione per scoprire come inserirti al meglio nel nostro percorso di abbondanza e mutuo aiuto.
            </p>
          </div>

          {testStep === 0 && (
            <div className="space-y-6 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button 
                  onClick={() => handleTestAnswer("asset")}
                  className="p-5 rounded-2xl border border-border bg-background/60 hover:border-primary/60 hover:bg-primary/5 transition-all text-left space-y-2 group"
                >
                  <div className="font-bold text-sm group-hover:text-primary">Voglio tokenizzare i miei beni reali</div>
                  <p className="text-xs text-muted-foreground">Valorizzare asset immobiliari o materiali con perizie indipendenti.</p>
                </button>
                <button 
                  onClick={() => handleTestAnswer("lp")}
                  className="p-5 rounded-2xl border border-border bg-background/60 hover:border-primary/60 hover:bg-primary/5 transition-all text-left space-y-2 group"
                >
                  <div className="font-bold text-sm group-hover:text-primary">Voglio partecipare come Liquidity Provider</div>
                  <p className="text-xs text-muted-foreground">Sostenere la crescita con un rendimento etico e sostenibile.</p>
                </button>
                <button 
                  onClick={() => handleTestAnswer("netfree")}
                  className="p-5 rounded-2xl border border-border bg-background/60 hover:border-primary/60 hover:bg-primary/5 transition-all text-left space-y-2 group"
                >
                  <div className="font-bold text-sm group-hover:text-primary">Voglio attivare i servizi NetFree</div>
                  <p className="text-xs text-muted-foreground">Portare acqua viva, terra ed energia nella mia vita e nel network.</p>
                </button>
                <button 
                  onClick={() => handleTestAnswer("academy")}
                  className="p-5 rounded-2xl border border-border bg-background/60 hover:border-primary/60 hover:bg-primary/5 transition-all text-left space-y-2 group"
                >
                  <div className="font-bold text-sm group-hover:text-primary">Voglio seguire l'Accademia e l'Autodeterminazione</div>
                  <p className="text-xs text-muted-foreground">Entrare in contatto con Andrea e Aldo Pironi per la formazione profonda.</p>
                </button>
              </div>
            </div>
          )}

          {testStep === 2 && userProfile && (
            <div className="space-y-6 text-center py-4 bg-primary/5 rounded-2xl p-6 border border-primary/20">
              <Award className="w-12 h-12 text-primary mx-auto" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold font-serif-display">Profilo di Ingaggio Identificato</h3>
                <p className="text-sm text-muted-foreground max-w-lg mx-auto">
                  {userProfile === 'asset' && "Sei pronto per il Primo Seme: la tokenizzazione dei tuoi asset reali tramite il nostro protocollo trasparente."}
                  {userProfile === 'lp' && "Sei un pilastro dei flussi finanziari: il ruolo di Liquidity Provider ti permette di generare valore reale e sostenibile."}
                  {userProfile === 'netfree' && "Sei parte del Secondo Seme: l'economia del dono e i servizi in abbonamento del network NetFree."}
                  {userProfile === 'academy' && "Hai una forte vocazione alla crescita interiore e giuridica. Ti mettiamo in contatto diretto con Andrea e Aldo Pironi per seguire l'Accademia di autodeterminazione."}
                </p>
              </div>
              <div className="pt-2 flex flex-wrap justify-center gap-4">
                <Link href="/club-deal">
                  <Button className="bg-primary text-primary-foreground font-semibold">
                    Procedi con i Club Deal <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Button variant="outline" onClick={() => setTestStep(0)} className="gap-2">
                  <RefreshCw className="w-3.5 h-3.5" /> Rifai il test
                </Button>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 5. AREE DI APPROFONDIMENTO E LINK VERIFICATI */}
      <section className="container max-w-6xl mx-auto px-6 space-y-12 relative z-10">
        <div className="text-center space-y-3">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">Approfondimenti</span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif-display">Risorse e Collegamenti Ufficiali</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            Tutti i materiali di riferimento per approfondire acqua, terra, energia e formazione.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="group border border-border/80 bg-card/70 backdrop-blur-md hover:border-primary/60 transition-all rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="h-44 w-full overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=600&auto=format&fit=crop" alt="Acqua" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <h3 className="font-bold text-base font-serif-display">Acqua Viva & Biologia</h3>
              <div className="space-y-2 pt-2 border-t border-border/40 text-xs">
                <a href="https://www.youtube.com/watch?v=elbOEII7-zo" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between font-semibold text-primary hover:underline">
                  <span>Conferenza Tecnica</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a href="https://www.essenzanaturae.it/wp-content/uploads/2024/12/WS-M70-Sz_-2-3v-RMN_-scheda_-Rev-27-12-2024-1.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-muted-foreground hover:text-primary">
                  <span>Scheda Tecnica (PDF)</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="group border border-border/80 bg-card/70 backdrop-blur-md hover:border-primary/60 transition-all rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="h-44 w-full overflow-hidden relative">
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
            <div className="h-44 w-full overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop" alt="Energia" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <h3 className="font-bold text-base font-serif-display">Energia & Comunità</h3>
              <div className="space-y-2 pt-2 border-t border-border/40 text-xs">
                <a href="https://www.pefpower.it/it/informatives/mix-energetico" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between font-semibold text-primary hover:underline">
                  <span>Mix Energetico & ARERA</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a href="https://www.pefpower.it/public/download/informatives/greensharing.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-muted-foreground hover:text-primary">
                  <span>Green Sharing (PDF)</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="group border border-border/80 bg-card/70 backdrop-blur-md hover:border-primary/60 transition-all rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="h-44 w-full overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop" alt="Formazione" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <h3 className="font-bold text-base font-serif-display">Accademia & Autodeterminazione</h3>
              <div className="space-y-2 pt-2 border-t border-border/40 text-xs">
                <a href="https://www.facebook.com/SkipperLab.formazione/?locale=it_IT" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between font-semibold text-primary hover:underline">
                  <span>Contatta Andrea e Aldo Pironi</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a href="https://atoka.io/public/it/azienda/skipper-lab-srl/72e352e37294" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-muted-foreground hover:text-primary">
                  <span>Registro Societario</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. AREA RISERVATA ADMIN (CODICI E MATERIALI INTERNI) */}
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

      {/* 7. CALL TO ACTION FINALE */}
      <section className="container max-w-4xl mx-auto px-6 relative z-10">
        <div className="rounded-3xl border border-primary/50 bg-gradient-to-br from-primary/15 via-card to-background p-12 md:p-16 text-center space-y-6 shadow-[0_0_60px_rgba(212,175,55,0.15)] relative overflow-hidden backdrop-blur-xl">
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">L'Abbondanza in Azione</span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif-display">Entriamo Insieme nel Nuovo Paradigma</h2>
            <p className="text-base text-muted-foreground leading-relaxed font-light">
              Unisciti a noi in questo cammino di libertà e cooperazione. Sostieni l'infrastruttura reale e contribuisci a generare valore duraturo per tutti.
            </p>
            <div className="pt-2">
              <Link href="/club-deal">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-10 py-7 rounded-full shadow-[0_0_40px_rgba(212,175,55,0.4)] text-base transition-all transform hover:scale-105">
                  Esplora i Club Deal & Diventa Parte Attiva <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
