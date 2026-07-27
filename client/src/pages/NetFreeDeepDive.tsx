import { Link } from "wouter";
import { Sparkles, Shield, Compass, ArrowRight, HeartHandshake, Lightbulb, Users, CheckCircle2 } from "lucide-react";

export default function NetFreeDeepDive() {
  return (
    <div className="min-h-screen relative text-foreground space-y-20 pb-36 overflow-hidden bg-background">
      
      {/* SFONDO LUMINOSO */}
      <div className="absolute inset-0 z-0 opacity-25 bg-cover bg-center bg-fixed mix-blend-luminosity filter brightness-125 pointer-events-none" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop')` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background z-0 pointer-events-none" />

      {/* HEADER DI NAVIGAZIONE INTERNA (SECONDO LIVELLO) */}
      <header className="container max-w-4xl mx-auto px-6 pt-10 relative z-10">
        <div className="flex items-center justify-between p-4 rounded-2xl bg-card/80 border border-border/80 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="text-xl">🌿</span>
            <span className="font-bold text-sm font-serif-display">Area Riservata - Secondo Livello (Teoria & Filosofia)</span>
          </div>
          <nav className="flex items-center gap-4 text-xs font-semibold">
            <a href="/privato/dashboard.html" className="text-muted-foreground hover:text-foreground">← Torna alla Dashboard</a>
          </nav>
        </div>
      </header>

      {/* CONTENUTO PRINCIPALE: NETFREE ESSENZA E PILASTRI */}
      <main className="container max-w-4xl mx-auto px-6 space-y-12 relative z-10">
        
        {/* TITOLO DELLA SCHEDA */}
        <div className="text-center space-y-4">
          <span className="text-primary text-xs uppercase tracking-widest font-semibold font-mono">Fondamenti del Network</span>
          <h1 className="text-3xl md:text-5xl font-bold font-serif-display">NetFree: La Rete e la Libertà</h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Unendo <strong>"Net"</strong> (la rete di persone) e <strong>"Free"</strong> (la libertà), il progetto ridefinisce il concetto di comunità, rimuovendo la logica estrattiva del "work" per valorizzare l'essenza pura delle relazioni umane.
          </p>
        </div>

        {/* CORPO DELL'APPROFONDIMENTO */}
        <div className="rounded-3xl border border-border/80 bg-card/85 backdrop-blur-xl p-8 md:p-12 shadow-2xl space-y-10">
          
          {/* PILASTRO 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm font-mono">1</span>
              <h3 className="text-xl font-bold font-serif-display">Una Visione di Libertà Multidimensionale</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed pl-11">
              NetFree nasce dalla convinzione che la vera libertà non sia solo economica, ma multidimensionale: comprende la <strong>libertà finanziaria</strong>, la <strong>libertà temporale</strong> e la crescita personale. Si propone come una soluzione sostenibile alle sfide moderne, come l'inflazione e la dipendenza da un'unica fonte di reddito, mirando ad aumentare il tempo e le risorse a disposizione delle persone.
            </p>
          </div>

          {/* PILASTRO 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm font-mono">2</span>
              <h3 className="text-xl font-bold font-serif-display">Un Ecosistema basato sulla Creazione di Valore</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed pl-11">
              Per NetFree, "creare valore" significa contribuire a migliorare concretamente la vita delle persone risolvendo problemi reali. Il progetto si allontana dai modelli economici basati sulla scarsità e sul debito per favorire un sistema dove il successo individuale diventa uno strumento per il benessere collettivo.
            </p>
          </div>

          {/* PILASTRO 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm font-mono">3</span>
              <h3 className="text-xl font-bold font-serif-display">L'Economia del Dono e il Simbolo del Seme (Chiave Railim)</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed pl-11">
              Il cuore operativo di NetFree è l'Economia del Dono, un modello dove si condivide il surplus per creare abbondanza collettiva. Questo processo è rappresentato simbolicamente dalla <strong>Chiave Railim</strong>:
            </p>
            <ul className="space-y-2 pl-11 text-sm text-muted-foreground list-disc list-inside">
              <li>Ogni partecipante riceve un "seme" (la Chiave Railim) in dono.</li>
              <li>Ricevere questo dono comporta la responsabilità di coltivare il proprio percorso e di condividere a propria volta il valore ricevuto con altri, alimentando una rete organica di crescita.</li>
            </ul>
          </div>

          {/* PILASTRO 4 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm font-mono">4</span>
              <h3 className="text-xl font-bold font-serif-display">"Operare nella Luce"</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed pl-11">
              Un aspetto distintivo è l'impegno etico del progetto. NetFree seleziona esclusivamente partner e opportunità che operano <strong>"nella luce"</strong>, ovvero in modo etico, trasparente e sostenibile. Ogni iniziativa viene valutata non solo per il potenziale economico, ma per la sua utilità reale e l'impatto positivo sulla qualità della vita.
            </p>
          </div>

          {/* PILASTRO 5 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm font-mono">5</span>
              <h3 className="text-xl font-bold font-serif-display">Il Percorso di Crescita Personale (La Metafora dell'Oceano)</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed pl-11">
              NetFree non è solo un progetto economico, ma un percorso formativo. Utilizza la metafora della tazzina da caffè che deve diventare un oceano: <strong>prima di ottenere una crescita economica, è necessaria una crescita personale e di consapevolezza</strong> per essere in grado di gestire correttamente le nuove opportunità e risorse.
            </p>
          </div>

        </div>

        {/* LINK VERSO IL TERZO LIVELLO (NUMERI E LEGALITÀ) */}
        <div className="p-8 rounded-3xl border border-amber-500/40 bg-gradient-to-r from-amber-500/10 via-card to-background space-y-4 text-center">
          <h3 className="text-xl font-bold font-serif-display">Vuoi passare alla messa a terra analitica e giuridica?</h3>
          <p className="text-xs text-muted-foreground max-w-lg mx-auto">
            Nel Terzo Livello trovi i numeri, le differenze con i protocolli di tokenizzazione, i ruoli commerciali e i collegamenti puntuali ai partner.
          </p>
          <Link href="/privato/prospetti.html">
            <button className="bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-full text-xs inline-flex items-center gap-2">
              Vai al Terzo Livello (Numeri, Partner & Gestione Rischio) <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

      </main>

    </div>
  );
}
