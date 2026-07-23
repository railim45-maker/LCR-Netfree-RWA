import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, ExternalLink, Sun, PlayCircle } from "lucide-react";

export default function EnergiaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground space-y-12 pb-28 pt-24 px-6 max-w-5xl mx-auto">
      <div>
        <Link href="/">
          <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4" /> Torna alla Home
          </Button>
        </Link>
      </div>

      <div className="space-y-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs uppercase tracking-wider font-semibold">
          <Sun className="w-3.5 h-3.5" /> NetFree • Efficientamento Energetico
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight font-serif-display">
          Autoproduzione e Comunità Energetiche
        </h1>
        <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed text-sm md:text-base">
          L'indipendenza energetica non è solo un risparmio economico, ma un pilastro di sovranità comunitaria. Attraverso l'autoproduzione e le comunità energetiche (Green Sharing), liberiamo il territorio dai costi e dai vincoli delle reti centralizzate.
        </p>
      </div>

      {/* Video Ufficiale */}
      <Card className="border-border bg-card/60 backdrop-blur-md rounded-2xl overflow-hidden p-6 shadow-xl space-y-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-primary">
          <PlayCircle className="w-4 h-4" /> Antonio Belsole, PEF Italia: "Così produciamo energia pulita"
        </div>
        <div className="aspect-video w-full rounded-xl overflow-hidden border border-border bg-black/40 flex items-center justify-center">
          <iframe 
            src="https://www.youtube.com/embed/ljS8B7-OLRc" 
            className="w-full h-full border-0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            title="Produzione Energia Pulita - Pef Italia"
          />
        </div>
      </Card>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold font-serif-display text-center">Normative, Guide e Partner</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-mono text-primary uppercase">Guida Istituzionale</span>
              <h4 className="text-lg font-bold">Agenzia delle Entrate: Riqualificazione Energetica</h4>
            </div>
            <a href="https://www.agenziaentrate.gov.it/portale/schede/agevolazioni/detrazione-riqualificazione-energetica-55-2016/cosa-riqualificazione-55-2016" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline pt-2">
              Leggi la guida ufficiale <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Card>

          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-mono text-primary uppercase">Acea Energia</span>
              <h4 className="text-lg font-bold">Guida all'Efficientamento</h4>
            </div>
            <a href="https://www.aceaenergia.it/guide/efficientamento" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline pt-2">
              Leggi l'articolo <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Card>

          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-mono text-primary uppercase">Enpal</span>
              <h4 className="text-lg font-bold">Incentivi e Fotovoltaico</h4>
            </div>
            <a href="https://www.enpal.com/it/fotovoltaico/efficientamento-energetico-casa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline pt-2">
              Esplora le soluzioni <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Card>

          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-mono text-primary uppercase">Pef Power & ARERA</span>
              <h4 className="text-lg font-bold">Mix Energetico e Normative</h4>
              <p className="text-xs text-muted-foreground">Trasparenza e conformità regolatoria del settore.</p>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="https://www.pefpower.it/it/informatives/mix-energetico" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">Mix Energetico</a>
              <a href="https://www.pefpower.it/it/informatives/normative-arera" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">Normative ARERA</a>
            </div>
          </Card>

          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-mono text-primary uppercase">Documenti Ufficiali (PDF)</span>
              <h4 className="text-lg font-bold">Codice Etico e Green Sharing (CER)</h4>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="https://www.pefpower.it/public/download/moduli/Gruppo_Enegan_Codice_Etico_310325_def.pdf" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline flex items-center gap-1">Codice Etico <ExternalLink className="w-3 h-3" /></a>
              <a href="https://www.pefpower.it/public/download/informatives/greensharing.pdf" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline flex items-center gap-1">Green Sharing <ExternalLink className="w-3 h-3" /></a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
