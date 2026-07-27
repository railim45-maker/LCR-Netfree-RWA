import { Link } from "wouter";
import { Sparkles, ArrowRight, Gift } from "lucide-react";

export default function EconomiaDonoPage() {
  return (
    <div className="min-h-screen relative text-foreground space-y-20 pb-36 overflow-hidden bg-background">
      
      {/* SFONDO LUMINOSO */}
      <div className="absolute inset-0 z-0 opacity-25 bg-cover bg-center bg-fixed mix-blend-luminosity filter brightness-125 pointer-events-none" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop')` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background z-0 pointer-events-none" />

      {/* HEADER DI NAVIGAZIONE INTERNA (SECONDO LIVELLO) */}
      <header className="container max-w-4xl mx-auto px-6 pt-10 relative z-10">
        <div className="flex items-center justify-between p-4 rounded-2xl bg-card/80 border border-border/80 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="text-xl">🎁</span>
            <span className="font-bold text-sm font-serif-display">Area Riservata - Secondo Livello (Teoria & Filosofia)</span>
          </div>
          <nav className="flex items-center gap-4 text-xs font-semibold">
            <Link href="/">
              <span className="text-muted-foreground hover:text-foreground cursor-pointer">← Torna alla Home</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* CONTENUTO PRINCIPALE */}
      <main className="container max-w-4xl mx-auto px-6 space-y-12 relative z-10">
        
        {/* TITOLO DELLA SCHEDA */}
        <div className="text-center space-y-4">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">Modello Operativo di Rete</span>
          <h1 className="text-3xl md:text-5xl font-bold font-serif-display">L'Economia del Dono nell'Ecosistema</h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Il cuore pulsante del progetto: un modello che si distacca dai sistemi tradizionali basati sulla scarsità per abbracciare una visione di abbondanza collettiva.
          </p>
        </div>

        {/* CORPO DELL'APPROFONDIMENTO */}
        <div className="rounded-3xl border border-border/80 bg-card/85 backdrop-blur-xl p-8 md:p-12 shadow-2xl space-y-10">
          
          {/* PUNTO 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm font-mono">1</span>
              <h3 className="text-xl font-bold font-serif-display">Il Principio Fondamentale: Condivisione del Surplus</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed pl-11">
              L'idea centrale è semplice: condividere una parte di ciò che si possiede per generare benefici per tutti. Tuttavia, il prerequisito essenziale è che <strong>per poter donare è necessario prima generare un surplus</strong>. L'infrastruttura è strutturata per permettere alle persone di costruire questo valore insieme, trasformando la collaborazione in uno strumento di crescita economica e personale.
            </p>
          </div>

          {/* PUNTO 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm font-mono">2</span>
              <h3 className="text-xl font-bold font-serif-display">La Metafora del Seme e la Chiave Railim</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed pl-11">
              Il concetto trova la sua applicazione pratica nella narrazione del seme, identificato simbolicamente nella <strong>Chiave Railim</strong>:
            </p>
            <ul className="space-y-2 pl-11 text-sm text-muted-foreground list-disc list-inside">
              <li><strong>Ricezione e Responsabilità:</strong> Chi entra nell'ecosistema riceve il "seme" in dono. Questo gesto non è fine a se stesso, ma comporta la responsabilità di coltivare il proprio percorso, far crescere il valore ricevuto e supportare gli altri nel fare lo stesso.</li>
              <li><strong>La Moltiplicazione del Valore:</strong> Un seme conservato non esprime il suo potenziale; la sua natura è crescere e generare nuova vita. Pertanto, chi riceve il dono si impegna a condividerlo con altre persone per diffondere valore e opportunità.</li>
            </ul>
          </div>

          {/* PUNTO 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm font-mono">3</span>
              <h3 className="text-xl font-bold font-serif-display">Il Ciclo Virtuoso dei "Frutti"</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed pl-11">
              L'economia del dono non è una semplice distribuzione di risorse, ma un sistema sostenibile. Quando il percorso (il seme) raggiunge la maturità e genera risultati:
            </p>
            <ul className="space-y-2 pl-11 text-sm text-muted-foreground list-disc list-inside">
              <li><strong>Sostegno al Sistema:</strong> Una parte dei frutti prodotti viene destinata alla nascita di nuovi semi e al mantenimento dell'ecosistema.</li>
              <li><strong>Prosperità Individuale:</strong> La restante parte contribuisce direttamente al benessere di chi ha partecipato attivamente al percorso.</li>
            </ul>
            <p className="text-xs text-primary font-semibold pl-11 pt-2">
              Questo meccanismo assicura che il successo individuale diventi un motore per il benessere collettivo, alimentando un ciclo continuo di crescita e abbondanza.
            </p>
          </div>

          {/* PUNTO 4 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm font-mono">4</span>
              <h3 className="text-xl font-bold font-serif-display">Tecnologia come Abilitatore</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed pl-11">
              Un elemento innovativo è l'uso della tokenizzazione e delle strutture digitali avanzate. Questa tecnologia serve a liberare il valore inespresso di asset e risorse, rendendolo accessibile e utilizzabile per sostenere concretamente l'economia del dono e la crescita della comunità.
            </p>
          </div>

          {/* PUNTO 5 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm font-mono">5</span>
              <h3 className="text-xl font-bold font-serif-display">Dalla Competizione alla Collaborazione</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed pl-11">
              L'economia del dono mira a creare una rete globale dove le persone scelgono di collaborare anziché competere. È una visione che richiede una crescita della consapevolezza individuale: il partecipante deve evolvere per sostenere le responsabilità e le opportunità di questo nuovo modello.
            </p>
          </div>

        </div>

        {/* LINK VERSO IL TERZO LIVELLO */}
        <div className="p-8 rounded-3xl border border-amber-500/40 bg-gradient-to-r from-amber-500/10 via-card to-background space-y-4 text-center">
          <h3 className="text-xl font-bold font-serif-display">Passa alla messa a terra analitica</h3>
          <p className="text-xs text-muted-foreground max-w-lg mx-auto">
            Nel Terzo Livello trovi i numeri, la gestione del rischio e i collegamenti puntuali ai partner operativi.
          </p>
        </div>

      </main>

    </div>
  );
}
