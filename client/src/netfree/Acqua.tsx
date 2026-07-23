import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, ExternalLink, Droplets, PlayCircle } from "lucide-react";

export default function AcquaPage() {
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
          <Droplets className="w-3.5 h-3.5" /> NetFree • Risorse Vitali
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight font-serif-display">
          Acqua, Biologia e Sovranità Quotidiana
        </h1>
        <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed text-sm md:text-base">
          L'acqua è il primo nutriente e il solvente primario del nostro organismo. Comprendere la differenza tra l'acqua funzionale, viva e strutturata e le comuni acque commerciali o di rete trattate è fondamentale per riappropriarsi del proprio benessere biologico.
        </p>
      </div>

      <Card className="border-border bg-card/60 backdrop-blur-md rounded-2xl overflow-hidden p-6 shadow-xl space-y-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-primary">
          <PlayCircle className="w-4 h-4" /> Conferenza e Spiegazione Tecnica
        </div>
        <div className="aspect-video w-full rounded-xl overflow-hidden border border-border bg-black/40 flex items-center justify-center">
          <iframe 
            src="https://www.youtube.com/embed/Di3BtfUqJwg" 
            className="w-full h-full border-0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            title="Approfondimento Acqua e Salute"
          />
        </div>
      </Card>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold font-serif-display text-center">Mattoni e Approfondimenti Verificati</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4 flex flex-col justify-between hover:border-primary/50 transition-all">
            <div className="space-y-2">
              <span className="text-xs font-mono text-primary uppercase">Video Conferenza</span>
              <h4 className="text-lg font-bold">L'idrologista Roberto Favata presenta: Acqua</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Analisi approfondita sulla natura chimica e fisica dell'acqua e sul suo impatto diretto sulla fisiologia umana.
              </p>
            </div>
            <a href="https://www.youtube.com/watch?v=elbOEII7-zo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline pt-2">
              Guarda su YouTube <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Card>

          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4 flex flex-col justify-between hover:border-primary/50 transition-all">
            <div className="space-y-2">
              <span className="text-xs font-mono text-primary uppercase">Salute e Benessere</span>
              <h4 className="text-lg font-bold">Acqua, benessere e fibromialgia</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Testimonianze e riscontri pratici sull'importanza dell'idratazione funzionale.
              </p>
            </div>
            <a href="https://www.youtube.com/watch?v=7A5ILFsrNLA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline pt-2">
              Approfondisci la testimonianza <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Card>

          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4 flex flex-col justify-between hover:border-primary/50 transition-all">
            <div className="space-y-2">
              <span className="text-xs font-mono text-primary uppercase">Guida Informativa</span>
              <h4 className="text-lg font-bold">Acqua Alcalina: perché ne abbiamo bisogno?</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Analisi critica sulle scelte d'acquisto e sui parametri biologici da valutare prima di scegliere l'acqua da bere.
              </p>
            </div>
            <a href="https://meglioinsalute.com/acqua-alcalina-non-acquistarla-se-prima-non-leggi-questo/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline pt-2">
              Leggi l'articolo <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Card>

          <Card className="border-border bg-card/40 backdrop-blur-md rounded-2xl p-6 space-y-4 flex flex-col justify-between hover:border-primary/50 transition-all">
            <div className="space-y-2">
              <span className="text-xs font-mono text-primary uppercase">Documentazione Tecnica</span>
              <h4 className="text-lg font-bold">Scheda Tecnica del Dispositivo Partner</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Specifiche tecniche ufficiali e certificazioni del sistema di trattamento dell'acqua utilizzato nell'ecosistema.
              </p>
            </div>
            <a href="https://www.essenzanaturae.it/wp-content/uploads/2024/12/WS-M70-Sz_-2-3v-RMN_-scheda_-Rev-27-12-2024-1.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline pt-2">
              Scarica / Visualizza PDF <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
}
