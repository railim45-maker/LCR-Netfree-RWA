import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, ExternalLink, Sprout } from "lucide-react";

export default function TerraPage() {
  return (
    <div className="min-h-screen bg-background text-foreground space-y-12 pb-28 pt-24 px-6 max-w-5xl mx-auto">
      
      {/* Pulsante Torna Indietro */}
      <div>
        <Link href="/">
          <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4" /> Torna alla Home
          </Button>
        </Link>
      </div>

      {/* Intestazione della Sezione */}
      <div className="space-y-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs uppercase tracking-wider font-semibold">
          <Sprout className="w-3.5 h-3.5" /> NetFree • Terra & Microorganismi
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight font-serif-display">
          Rigenerazione Biologica e Sovranità Alimentare
        </h1>
        <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed text-sm md:text-base">
          La rigenerazione della terra passa attraverso il ripristino dell'equilibrio biologico del suolo. L'utilizzo di tecnologie naturali e microorganismi effettivi rappresenta uno strumento essenziale per la permacultura, l'agricoltura sinergica e la vita comunitaria.
        </p>
      </div>

      {/* Riquadri con Collegamenti di Approfondimento */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold font-serif-display text-center">Risorse e Portali di Riferimento</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-xl mx-auto">
          
          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4 flex flex-col justify-between hover:border-primary/50 transition-all shadow-xl">
            <div className="space-y-2">
              <span className="text-xs font-mono text-primary uppercase">Portale Ufficiale</span>
              <h4 className="text-lg font-bold">Ecopassaparola - Microorganismi Effettivi</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Approfondimenti pratici, metodologie e applicazioni dei microorganismi per il risanamento del suolo e la produzione alimentare pulita.
              </p>
            </div>
            <a 
              href="https://www.ecopassaparola.net/it/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline pt-2"
            >
              Visita il portale <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Card>

        </div>
      </div>

    </div>
  );
}
