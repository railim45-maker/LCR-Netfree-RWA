import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Shield, Users, Droplets, Sun, Sprout, BookOpen, ExternalLink, PlayCircle, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground space-y-20 pb-28">
      
      {/* INTRODUZIONE E TITOLO D'IMPATTO */}
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
          </div>
        </div>
      </section>

      {/* STEP 1: TOKENIZZAZIONE RWA & GARANZIA PERITALE */}
      <section className="container max-w-5xl mx-auto px-6 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold">Step 1 • Il Primo Pilastro</span>
          <h2 className="text-3xl font-bold font-serif-display">Tokenizzazione RWA & Perizie Certificate</h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Ogni asset è validato da periti indipendenti finanziati interamente dal protocollo (fee ottimizzata allo 0,88%).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <Shield className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold">La Regola del ±10% e Perizia Azzerata</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Margine di oscillazione del ±10% sul valore reale di mercato. Il costo del perito indipendente è interamente a carico del protocollo, azzerando ogni attrito per il proprietario.
              </p>
            </div>
            <div className="pt-2 flex items-center gap-2 text-xs text-primary font-semibold">
              <CheckCircle2 className="w-4 h-4" /> Zero costi vivi per il proprietario
            </div>
          </Card>

          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <Users className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold">Liquidity Provider (ROI Sostenibile al 21%)</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Partecipazione strutturata con flussi trasparenti e programmati, attestati su un ROI al 21% per garantire una sostenibilità finanziaria inattaccabile.
              </p>
            </div>
            <div className="pt-2 flex items-center gap-2 text-xs text-primary font-semibold">
              <CheckCircle2 className="w-4 h-4" /> Rendimenti basati su flussi reali
            </div>
          </Card>
        </div>
      </section>

      {/* SEZIONE NETFREE INTEGRATA CON TUTTI I COLLEGAMENTI */}
      <section className="container max-w-5xl mx-auto px-6 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold">L'Ecosistema NetFree</span>
          <h2 className="text-3xl font-bold font-serif-display">Risorse, Guide e Approfondimenti Verificati</h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Tutti i materiali formativi, i video e le documentazioni ufficiali dell'ecosistema.
          </p>
        </div>

        {/* ACQUA & RISORSE */}
        <div className="border border-border bg-card/30 rounded-3xl p-6 md:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-primary/10 text-primary">
              <Droplets className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Acqua, Biologia e Sovranità Quotidiana</h3>
              <p className="text-xs text-muted-foreground">L'importanza dell'acqua viva e funzionale per l'organismo.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://www.youtube.com/watch?v=elbOEII7-zo" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-border/60 bg-card/50 hover:border-primary/50 transition-all flex items-center justify-between group">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-primary uppercase">Video Conferenza</span>
                <h4 className="text-sm font-bold">Idrologista Roberto Favata: Acqua</h4>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="https://www.youtube.com/watch?v=7A5ILFsrNLA" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-border/60 bg-card/50 hover:border-primary/50 transition-all flex items-center justify-between group">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-primary uppercase">Salute e Benessere</span>
                <h4 className="text-sm font-bold">Acqua, benessere e fibromialgia</h4>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="https://meglioinsalute.com/acqua-alcalina-non-acquistarla-se-prima-non-leggi-questo/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-border/60 bg-card/50 hover:border-primary/50 transition-all flex items-center justify-between group">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-primary uppercase">Guida Informativa</span>
                <h4 className="text-sm font-bold">Acqua Alcalina: cosa valutare</h4>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="https://www.essenzanaturae.it/wp-content/uploads/2024/12/WS-M70-Sz_-2-3v-RMN_-scheda_-Rev-27-12-2024-1.pdf" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-border/60 bg-card/50 hover:border-primary/50 transition-all flex items-center justify-between group">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-primary uppercase">Documento Tecnico (PDF)</span>
                <h4 className="text-sm font-bold">Scheda Tecnica Dispositivo Partner</h4>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* TERRA & MICROORGANISMI */}
        <div className="border border-border bg-card/30 rounded-3xl p-6 md:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-primary/10 text-primary">
              <Sprout className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Terra & Microorganismi Effettivi</h3>
              <p className="text-xs text-muted-foreground">Rigenerazione biologica del suolo e permacultura.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <a href="https://www.ecopassaparola.net/it/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-border/60 bg-card/50 hover:border-primary/50 transition-all flex items-center justify-between group">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-primary uppercase">Portale Ufficiale</span>
                <h4 className="text-sm font-bold">Ecopassaparola - Microorganismi Effettivi</h4>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* ENERGIA & COMUNITÀ */}
        <div className="border border-border bg-card/30 rounded-3xl p-6 md:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-primary/10 text-primary">
              <Sun className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Energia, Autoproduzione e Green Sharing</h3>
              <p className="text-xs text-muted-foreground">Comunità energetiche e normative per l'indipendenza.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://www.agenziaentrate.gov.it/portale/schede/agevolazioni/detrazione-riqualificazione-energetica-55-2016/cosa-riqualificazione-55-2016" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-border/60 bg-card/50 hover:border-primary/50 transition-all flex items-center justify-between group">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-primary uppercase">Guida Istituzionale</span>
                <h4 className="text-sm font-bold">Agenzia delle Entrate: Riqualificazione</h4>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="https://www.enpal.com/it/fotovoltaico/efficientamento-energetico-casa" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-border/60 bg-card/50 hover:border-primary/50 transition-all flex items-center justify-between group">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-primary uppercase">Enpal</span>
                <h4 className="text-sm font-bold">Incentivi e Fotovoltaico</h4>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="https://www.pefpower.it/it/informatives/mix-energetico" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-border/60 bg-card/50 hover:border-primary/50 transition-all flex items-center justify-between group">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-primary uppercase">Pef Power</span>
                <h4 className="text-sm font-bold">Mix Energetico e ARERA</h4>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="https://www.pefpower.it/public/download/informatives/greensharing.pdf" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-border/60 bg-card/50 hover:border-primary/50 transition-all flex items-center justify-between group">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-primary uppercase">Documento PDF</span>
                <h4 className="text-sm font-bold">Green Sharing & CER</h4>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* FORMAZIONE & RETI */}
        <div className="border border-border bg-card/30 rounded-3xl p-6 md:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-primary/10 text-primary">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Formazione, Reti e Convention</h3>
              <p className="text-xs text-muted-foreground">Crescita interiore e registri societari di riferimento.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://www.facebook.com/SkipperLab.formazione/?locale=it_IT" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-border/60 bg-card/50 hover:border-primary/50 transition-all flex items-center justify-between group">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-primary uppercase">Skipper Lab</span>
                <h4 className="text-sm font-bold">Formazione su Facebook</h4>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="https://atoka.io/public/it/azienda/skipper-lab-srl/72e352e37294" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-border/60 bg-card/50 hover:border-primary/50 transition-all flex items-center justify-between group">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-primary uppercase">Atoka</span>
                <h4 className="text-sm font-bold">Registro Societario Skipper Lab Srl</h4>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

      </section>

    </div>
  );
}
