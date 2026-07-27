import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Sparkles, Shield, Layers, Lock, CheckCircle2, Globe2, HeartHandshake, Compass, Scale, Gift, Leaf, Smile, Atom, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);
  const [accessCode, setAccessCode] = useState("");

  const handleUserUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessCode === "LCR-ACCESSO-2026") {
      localStorage.setItem("lcr_user_unlocked", "true");
      window.location.href = "/privato/dashboard.html"; // O la rotta riservata
    } else {
      alert("Codice di accesso riservato non valido.");
    }
  };

  return (
    <div className="min-h-screen relative text-foreground space-y-32 pb-40 overflow-hidden bg-background">
      
      {/* SFONDO LUMINOSO DELL'ALBERO */}
      <div className="absolute inset-0 z-0 opacity-35 bg-cover bg-center bg-fixed mix-blend-luminosity filter brightness-125 pointer-events-none" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop')` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background z-0 pointer-events-none" />

      {/* LIVELLO 1: LA VISIONE E L'ACCOGLIENZA */}
      <section className="relative pt-48 pb-24 border-b border-primary/20 bg-gradient-to-b from-primary/10 via-transparent to-transparent z-10">
        <div className="container max-w-5xl mx-auto px-6 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/20 text-primary text-xs uppercase tracking-[0.2em] font-bold backdrop-blur-md shadow-md">
            <Sparkles className="w-4 h-4" /> Spazio di Libertà e Condivisione
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-serif-display leading-[1.1] text-foreground">
            Oltre la scarsità: una cassetta degli attrezzi<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-primary to-yellow-200">
              per una vita nuova in amore, rispetto e consapevolezza.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            Un luogo di ritrovo e di visione per chi desidera riappropriarsi della propria sovranità, superare le dinamiche limitanti e abbracciare l'<strong>economia del dono</strong>. Qui trovi coordinate e strumenti per camminare verso l'abbondanza consapevole, con un percorso formativo che si sblocca gradualmente in base alla maturazione e alla prontezza individuale.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button 
              onClick={() => setIsAccessModalOpen(true)}
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-9 py-6 text-base rounded-full shadow-lg font-semibold transition-all transform hover:scale-105"
            >
              Accedi all'Area Riservata (Livello 2 & 3) <Lock className="w-4 h-4" />
            </Button>
          </div>
          
        </div>
      </section>

      {/* MODALE ACCESSO RISERVATO */}
      {isAccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="rounded-3xl border border-primary/40 bg-card p-8 max-w-md w-full space-y-6 shadow-2xl relative">
            <div className="space-y-2 text-center">
              <Lock className="w-8 h-8 text-primary mx-auto" />
              <h3 className="text-xl font-bold font-serif-display">Area Riservata</h3>
              <p className="text-xs text-muted-foreground">Inserisci le credenziali per accedere ai dati della rete (Livello 2) e ai riscontri numerici e legali (Livello 3).</p>
            </div>
            <form onSubmit={handleUserUnlock} className="space-y-4">
              <input 
                type="password" 
                placeholder="Codice di accesso..." 
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-xs text-foreground focus:outline-none focus:border-primary"
                required
              />
              <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={() => setIsAccessModalOpen(false)} className="flex-1 text-xs">
                  Chiudi
                </Button>
                <Button type="submit" className="flex-1 bg-primary text-primary-foreground font-semibold text-xs">
                  Entra
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* I PILASTRI FONDANTI DELLA VISIONE */}
      <section className="container max-w-6xl mx-auto px-6 space-y-12 relative z-10">
        <div className="text-center space-y-3">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">Principi Guida</span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif-display">Le Fondamenta della Nostra Via</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-border/80 bg-card/70 backdrop-blur-md p-8 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-serif-display">Il Valore della Materia Reale</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Riconnettiamo l'economia ai beni tangibili e alle risorse autentiche, svincolandole dalla volatilità e proteggendo la stabilità patrimoniale a lungo termine.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-border/80 bg-card/70 backdrop-blur-md p-8 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Gift className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-serif-display">L'Economia del Dono Circolare</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Superamento della scarsità tramite la circolazione libera e reciproca del valore. Il tempo e la vocazione di ciascuno alimentano un ecosistema di mutuo aiuto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPROFONDIMENTO FORMATIVO E ACCADEMIA (COLLEGAMENTO ESTERNO COERENTE) */}
      <section className="container max-w-4xl mx-auto px-6 relative z-10">
        <div className="rounded-3xl border border-primary/40 bg-card/85 backdrop-blur-xl p-8 md:p-12 shadow-2xl space-y-6 text-center">
          <div className="w-12 h-12 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mx-auto">
            <Compass className="w-6 h-6" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-serif-display">Il Percorso di Consapevolezza e Origine</h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Essere nati e viventi significa recuperare la propria autorità originaria e interiore. Per chi desidera approfondire i fondamenti formativi di questo cammino, consigliamo lo studio e la connessione con l'ecosistema di riferimento esterno:
          </p>
          <div className="pt-2">
            <a href="https://www.facebook.com/SkipperLab.formazione/?locale=it_IT" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2 border-primary/40 hover:bg-primary/10 text-xs md:text-sm">
                Approfondisci con l'Accademia di Formazione <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
