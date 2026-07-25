import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  ArrowRight, Shield, Users, Droplets, Sun, Sprout, BookOpen, ExternalLink, 
  PlayCircle, Sparkles, Flame, HeartHandshake, Globe2, Milestone, Target, 
  CheckCircle2, Lock, FileText, Code, Award, ChevronRight, RefreshCw 
} from "lucide-react";

export default function Home() {
  // Stato per il test di consapevolezza / orientamento
  const [testStep, setTestStep] = useState(0);
  const [userProfile, setUserProfile] = useState<string | null>(null);

  // Stato per la simulazione dell'area admin (codici e materiali interni)
  const [isAdminUnlocked, setIsAdminUnlocked] = useState(false);
  const [adminCodeInput, setAdminCodeInput] = useState("");

  const handleTestAnswer = (profile: string) => {
    setUserProfile(profile);
    setTestStep(2); // Mostra il risultato
  };

  const handleAdminAccess = (e: React.FormEvent) => {
    e.preventDefault();
    // Controllo di esempio per l'accesso admin protetto
    if (adminCodeInput === "LCR-ADMIN-2026") {
      setIsAdminUnlocked(true);
    } else {
      alert("Codice non valido.");
    }
  };

  return (
    <div className="min-h-screen relative text-foreground space-y-32 pb-40 overflow-hidden bg-background">
      
      {/* SFONDO LUMINOSO DIFFUSO (ELEGANZA E MATERIA REALE) */}
      <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center bg-fixed mix-blend-luminosity filter brightness-125" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop')` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background z-0" />

      {/* 1. HERO SECTION: IL NUOVO PARADIGMA CONCRETO */}
      <section className="relative pt-44 pb-32 border-b border-primary/20 bg-gradient-to-b from-primary/10 via-transparent to-transparent z-10">
        <div className="container max-w-5xl mx-auto px-6 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs uppercase tracking-[0.2em] font-bold backdrop-blur-md shadow-sm">
            <Sparkles className="w-4 h-4" /> Economia Reale & Libertà Consapevole
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-serif-display leading-[1.1] text-foreground">
            Oltre la scarsità.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-primary to-yellow-300">
              Costruiamo valore solido e condiviso.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            Un'infrastruttura trasparente che unisce beni reali, flussi finanziari sostenibili e autonomia quotidiana. Senza banche, senza intermediari estrattivi: solo crescita su tutti i piani.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/club-deal">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-9 py-6 text-base rounded-full shadow-lg font-semibold transition-all transform hover:scale-105">
                Esplora i Club Deal (ROI 21%) <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          
        </div>
      </section>

      {/* 2. VIDEO DI PRESENTAZIONE INTEGRATO (SENZA USCIRE DAL SITO) */}
      <section className="container max-w-4xl mx-auto px-6 space-y-4 relative z-10">
        <div className="text-center space-y-2">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">Presentazione Ufficiale</span>
          <h2 className="text-3xl font-bold font-serif-display">Comprendere il Progetto a Fondo</h2>
          <p className="text-sm text-muted-foreground">Guarda il video direttamente qui per scoprire la visione e la struttura del nostro ecosistema.</p>
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

      {/* 3. IL PERCORSO E LA TRASPARENZA (INFOGRAFICA A TABELLA / STEP) */}
      <section className="container max-w-6xl mx-auto px-6 space-y-16 relative z-10">
        
        <div className="text-center space-y-3">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">Metodologia Trasparente</span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif-display">Il Percorso in Tre Pilastri Concreti</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Chiarezza cristallina in ogni passaggio: dai beni materiali ai rendimenti sostenibili, fino all'autonomia quotidiana.
          </p>
        </div>

        {/* Tabella / Grid Comparativa e Numerica */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="rounded-3xl border border-border/80 bg-card/60 backdrop-blur-md p-8 space-y-5 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif-display">1. Tokenizzazione & Perizie</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Valorizziamo beni reali con perizie indipendenti finanziate interamente dal protocollo (fee ottimizzata allo 0,88%). Regola del ±10% sul valore di mercato per azzerare i costi vivi dei proprietari.
              </p>
            </div>
            <div className="pt-4 border-t border-border/40 space-y-2 text-xs">
              <div className="flex justify-between font-semibold"><span className="text-muted-foreground">Fee di Struttura:</span> <span className="text-primary">0,88%</span></div>
              <div className="flex justify-between font-semibold"><span className="text-muted-foreground">Costi per il Proprietario:</span> <span className="text-primary">Zero</span></div>
            </div>
          </div>

          <div className="rounded-3xl border border-primary/40 bg-gradient-to-b from-primary/10 to-card/60 backdrop-blur-md p-8 space-y-5 shadow-xl flex flex-col justify-between relative">
            <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] uppercase font-bold tracking-wider">
              Core Finanziario
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif-display">2. Liquidity Provider</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Un modello di rendimento etico e sostenibile al 21%, basato esclusivamente su flussi reali generati dagli asset sottostanti. Sostenibilità industriale inattaccabile senza esposizioni bancarie.
              </p>
            </div>
            <div className="pt-4 border-t border-border/40 space-y-2 text-xs">
              <div className="flex justify-between font-semibold"><span className="text-muted-foreground">ROI Target:</span> <span className="text-primary font-bold text-sm">21%</span></div>
              <div className="flex justify-between font-semibold"><span className="text-muted-foreground">Copertura Debito:</span> <span className="text-primary">Assente (Zero Banche)</span></div>
            </div>
          </div>

          <div className="rounded-3xl border border-border/80 bg-card/60 backdrop-blur-md p-8 space-y-5 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif-display">3. Sovranità Quotidiana</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                Soluzioni pratiche per l'indipendenza: acqua viva, terra rigenerata, comunità energetiche e formazione continua per sperimentare la libertà nella vita di tutti i giorni.
              </p>
            </div>
            <div className="pt-4 border-t border-border/40 space-y-2 text-xs">
              <div className="flex justify-between font-semibold"><span className="text-muted-foreground">Aree di Sviluppo:</span> <span className="text-primary">Acqua, Terra, Energia</span></div>
              <div className="flex justify-between font-semibold"><span className="text-muted-foreground">Approccio:</span> <span className="text-primary">Economia del Dono</span></div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. QUESTIONARIO / TEST DI CONSAPEVOLEZZA E ORIENTAMENTO */}
      <section className="container max-w-4xl mx-auto px-6 space-y-8 relative z-10">
        <div className="rounded-3xl border border-primary/40 bg-card/80 backdrop-blur-xl p-8 md:p-12 shadow-2xl space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">Test di Autovalutazione</span>
            <h2 className="text-2xl md:text-4xl font-bold font-serif-display">Qual è il Tuo Ruolo nel Nuovo Paradigma?</h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Rispondi a questa breve domanda per identificare il percorso più adatto alla tua situazione economica e personale.
            </p>
          </div>

          {testStep === 0 && (
            <div className="space-y-6 pt-4">
              <h3 className="text-lg font-semibold text-center">Qual è il tuo obiettivo primario in questo momento?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button 
                  onClick={() => handleTestAnswer("asset")}
                  className="p-5 rounded-2xl border border-border bg-background/60 hover:border-primary/60 hover:bg-primary/5 transition-all text-left space-y-2 group"
                >
                  <div className="font-bold text-sm group-hover:text-primary">Ho beni o immobili da valorizzare</div>
                  <p className="text-xs text-muted-foreground">Voglio tokenizzare asset reali azzerando i costi peritali iniziali.</p>
                </button>
                <button 
                  onClick={() => handleTestAnswer("lp")}
                  className="p-5 rounded-2xl border border-border bg-background/60 hover:border-primary/60 hover:bg-primary/5 transition-all text-left space-y-2 group"
                >
                  <div className="font-bold text-sm group-hover:text-primary">Dispongo di capitale e cerco rendimento etico</div>
                  <p className="text-xs text-muted-foreground">Voglio partecipare come Liquidity Provider con un ROI al 21%.</p>
                </button>
                <button 
                  onClick={() => handleTestAnswer("netfree")}
                  className="p-5 rounded-2xl border border-border bg-background/60 hover:border-primary/60 hover:bg-primary/5 transition-all text-left space-y-2 group"
                >
                  <div className="font-bold text-sm group-hover:text-primary">Cerco autonomia quotidiana e benessere</div>
                  <p className="text-xs text-muted-foreground">Voglio applicare soluzioni per acqua, terra ed energia nella mia vita.</p>
                </button>
                <button 
                  onClick={() => handleTestAnswer("academy")}
                  className="p-5 rounded-2xl border border-border bg-background/60 hover:border-primary/60 hover:bg-primary/5 transition-all text-left space-y-2 group"
                >
                  <div className="font-bold text-sm group-hover:text-primary">Voglio formarmi sull'autodeterminazione</div>
                  <p className="text-xs text-muted-foreground">Desidero approfondire i fondamenti giuridici, etici e relazionali.</p>
                </button>
              </div>
            </div>
          )}

          {testStep === 2 && userProfile && (
            <div className="space-y-6 text-center py-4 bg-primary/5 rounded-2xl p-6 border border-primary/20">
              <Award className="w-12 h-12 text-primary mx-auto" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold font-serif-display">Il tuo profilo ideale è tracciato</h3>
                <p className="text-sm text-muted-foreground max-w-lg mx-auto">
                  {userProfile === 'asset' && "Sei orientato alla valorizzazione patrimoniale protetta. Il nostro protocollo ti permette di tokenizzare senza costi vivi iniziali."}
                  {userProfile === 'lp' && "Sei un Liquidity Provider strategico. Il modello al 21% ti offre un rendimento basato su flussi reali e trasparenti."}
                  {userProfile === 'netfree' && "Sei un pioniere dell'autonomia pratica. Le nostre guide su acqua, terra ed energia fanno al caso tuo."}
                  {userProfile === 'academy' && "Hai una forte spinta all'autodeterminazione e alla crescita interiore. Ti consigliamo di metterti in contatto con Andrea e Aldo Pironi per accedere all'Accademia dedicata."}
                </p>
              </div>
              <div className="pt-2 flex flex-wrap justify-center gap-4">
                <Link href="/club-deal">
                  <Button className="bg-primary text-primary-foreground font-semibold">
                    Approfondisci l'Opportunità <ArrowRight className="w-4 h-4 ml-2" />
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

      {/* 5. AREE DI APPROFONDIMENTO E VIDEO INCORPORATI (ACQUA, TERRA, ENERGIA, FORMAZIONE) */}
      <section className="container max-w-6xl mx-auto px-6 space-y-12 relative z-10">
        <div className="text-center space-y-3">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">Guide e Risorse Verificate</span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif-display">Esplora gli Approfondimenti del Percorso</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            Tutti i materiali, i documenti tecnici e i video ufficiali per approfondire ogni aspetto della sovranità quotidiana.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Acqua */}
          <div className="group border border-border/80 bg-card/70 backdrop-blur-md hover:border-primary/60 transition-all rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl">
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

          {/* Terra */}
          <div className="group border border-border/80 bg-card/70 backdrop-blur-md hover:border-primary/60 transition-all rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl">
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
              <div className="space-y-2 pt-2 border-t border-border/40 text-xs">
                <a href="https://www.ecopassaparola.net/it/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between font-semibold text-primary hover:underline">
                  <span>Ecopassaparola Portale</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Energia */}
          <div className="group border border-border/80 bg-card/70 backdrop-blur-md hover:border-primary/60 transition-all rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl">
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

          {/* Formazione & Accademia */}
          <div className="group border border-border/80 bg-card/70 backdrop-blur-md hover:border-primary/60 transition-all rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="h-44 w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop" alt="Formazione" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-3 left-3 z-20 p-2 rounded-xl bg-background/80 backdrop-blur-md text-primary">
                <BookOpen className="w-4 h-4" />
              </div>
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-1">
                <h3 className="font-bold text-base font-serif-display">Formazione & Accademia</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">Autodeterminazione con Andrea e Aldo Pironi.</p>
              </div>
              <div className="space-y-2 pt-2 border-t border-border/40 text-xs">
                <a href="https://www.facebook.com/SkipperLab.formazione/?locale=it_IT" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between font-semibold text-primary hover:underline">
                  <span>Canale Accademia</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a href="https://atoka.io/public/it/azienda/skipper-lab-srl/72e352e37294" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-muted-foreground hover:text-primary">
                  <span>Registro Societario</span> <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. AREA RISERVATA ADMIN: MATERIALI DI AUTODETERMINAZIONE E CODICI */}
      <section className="container max-w-4xl mx-auto px-6 relative z-10">
        <div className="rounded-3xl border border-border bg-card/50 backdrop-blur-xl p-8 md:p-10 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-border/60 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-primary/10 text-primary">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base">Area Riservata Admin & Materiali di Autodeterminazione</h3>
                <p className="text-xs text-muted-foreground">Accesso protetto per la gestione dei codici e dei documenti interni.</p>
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
                    Raccolta delle linee guida istituzionali e dei riferimenti coordinati con Andrea e Aldo Pironi per l'Accademia.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-border bg-background/50 space-y-2">
                  <div className="font-bold flex items-center gap-2 text-primary">
                    <Code className="w-4 h-4" /> Integrazione Codice Sorgente
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Repository di sincronizzazione Vercel/GitHub e gestione delle variabili d'ambiente Supabase attive.
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
            <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">Il Futuro Inizia Adesso</span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif-display">Entriamo Insieme nel Nuovo Paradigma</h2>
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
