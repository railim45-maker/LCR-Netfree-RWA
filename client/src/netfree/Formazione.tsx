import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, ExternalLink, BookOpen } from "lucide-react";

export default function FormazionePage() {
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
          <BookOpen className="w-3.5 h-3.5" /> NetFree • Formazione & Reti
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight font-serif-display">
          Crescita Relazionale e Nuovi Paradigmi
        </h1>
        <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed text-sm md:text-base">
          La vera transizione richiede una crescita interiore e una competenza pratica allineata ai valori della cooperazione. La formazione è lo strumento con cui la comunità apprende a muoversi nel nuovo paradigma.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold font-serif-display text-center">Canali, Registri e Convention</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4 flex flex-col justify-between hover:border-primary/50 transition-all">
            <div className="space-y-2">
              <span className="text-xs font-mono text-primary uppercase">Skipper Lab</span>
              <h4 className="text-lg font-bold">Formazione Ufficiale su Facebook</h4>
            </div>
            <a href="https://www.facebook.com/SkipperLab.formazione/?locale=it_IT" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline pt-2">
              Visita la pagina Facebook <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Card>

          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4 flex flex-col justify-between hover:border-primary/50 transition-all">
            <div className="space-y-2">
              <span className="text-xs font-mono text-primary uppercase">Skipper Lab</span>
              <h4 className="text-lg font-bold">Profilo Instagram</h4>
            </div>
            <a href="https://www.instagram.com/skipper_lab/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline pt-2">
              Segui su Instagram <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Card>

          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4 flex flex-col justify-between hover:border-primary/50 transition-all">
            <div className="space-y-2">
              <span className="text-xs font-mono text-primary uppercase">Registro Societario</span>
              <h4 className="text-lg font-bold">Atoka: Skipper Lab Srl</h4>
            </div>
            <a href="https://atoka.io/public/it/azienda/skipper-lab-srl/72e352e37294" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline pt-2">
              Consulta i dati aziendali <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Card>

          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4 flex flex-col justify-between hover:border-primary/50 transition-all">
            <div className="space-y-2">
              <span className="text-xs font-mono text-primary uppercase">Avedisco</span>
              <h4 className="text-lg font-bold">Convention Nazionale</h4>
            </div>
            <a href="https://www.avedisco.it/it-IT/Notizie/Eventi/2024/PEF-Convention-nazionale-2024.aspx" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline pt-2">
              Leggi il report ufficiale <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
}
