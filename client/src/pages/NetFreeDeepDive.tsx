import { Link } from "wouter";
import { ArrowRight, Sparkles, Users, TreePine, Sun, ShieldCheck } from "lucide-react";

export default function NetFreeDeepDive() {
  return (
    <div className="min-h-screen relative text-stone-800 space-y-20 pb-36 overflow-hidden bg-[#fcfbf9]">
      
      {/* SFONDO LUMINOSO E GRADIENTI ARMONICI */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gradient-to-r from-emerald-100/50 via-amber-100/40 to-sky-100/40 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute inset-0 z-0 opacity-30 bg-cover bg-center bg-fixed mix-blend-overlay filter brightness-110 pointer-events-none" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop')` }} />

      {/* HEADER DI NAVIGAZIONE INTERNA */}
      <header className="container max-w-4xl mx-auto px-6 pt-10 relative z-10">
        <div className="flex items-center justify-between p-4 rounded-3xl bg-white/85 border border-stone-200/80 shadow-sm backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-sm border border-emerald-100">🌿</span>
            <span className="font-bold text-xs uppercase tracking-wider text-stone-700 font-serif">Percorso Informativo • NetFree</span>
          </div>
          <nav className="flex items-center gap-4 text-xs font-semibold">
            <Link href="/">
              <span className="text-stone-600 hover:text-stone-900 cursor-pointer transition-colors">← Torna alla Home</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* CONTENUTO PRINCIPALE */}
      <main className="container max-w-4xl mx-auto px-6 space-y-12 relative z-10">
        
        {/* TITOLO E INTRODUZIONE */}
        <div className="text-center space-y-4 pt-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-medium tracking-wide shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Il Nuovo Concetto di Network
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-stone-900 leading-tight">
            NetFree: Oltre il Modello Estrattivo
          </h1>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed font-light">
            L'unione di <strong>"Net"</strong> (la rete di persone) e <strong>"Free"</strong> (la libertà multidimensionale). Un ecosistema sintropico pensato per superare le sfide moderne, l'inflazione e la dipendenza.
          </p>

          {/* IMMAGINE EVOCATIVA */}
          <div className="rounded-3xl overflow-hidden border border-stone-200 shadow-xl max-h-[380px] relative mt-6">
            <img 
              src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1200&auto=format&fit=crop" 
              alt="Ecosistema NetFree" 
              className="w-full h-full object-cover filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent flex items-end p-6">
              <p className="text-white text-sm font-light italic">"Dalla griglia dissipativa del vecchio mondo alla rete sintropica di coerenza collettiva."</p>
            </div>
          </div>
        </div>

        {/* CORPO DELL'APPROFONDIMENTO: I PILASTRI INTEGRATI */}
        <div className="rounded-3xl border border-stone-200/90 bg-white/95 backdrop-blur-xl p-8 md:p-12 shadow-xl space-y-10">
          
          {/* PILASTRO 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center font-bold text-xs font-mono">1</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">La Struttura Organica: Il Ciclo del Seme e la Matrice Frattale</h3>
            </div>
            <p className="text-stone-600 leading-relaxed pl-11 text-sm md:text-base font-light">
              Il funzionamento di NetFree si sviluppa attraverso la metafora del seme e una rigorosa organizzazione geometrica e sociale:
            </p>
            <ul className="space-y-2 pl-11 text-sm md:text-base text-stone-600 list-disc list-inside font-light">
              <li><strong>Ricezione della Chiave Railim:</strong> Ogni partecipante entra nell'ecosistema ricevendo in dono un seme simbolico.</li>
              <li><strong>Responsabilità e Coltivazione:</strong> Assunzione della responsabilità di coltivare il proprio percorso e far crescere il valore ricevuto.</li>
              <li><strong>La Matrice 6-36-216 (Sistema del Seme):</strong> La propagazione non segue gerarchie piramidali ma una divisione armonica basata sulla cura di un cerchio ristretto di 6 persone, espandendosi organicamente nei nodi successivi.</li>
              <li><strong>I Frutti:</strong> La maturazione produce risorse destinate in parte a generare nuovi semi e in parte alla prosperità individuale.</li>
            </ul>
          </div>

          {/* PILASTRO 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center font-bold text-xs font-mono">2</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">Il Modello Economico e la Regola della Tripartizione Rigida</h3>
            </div>
            <p className="text-stone-600 leading-relaxed pl-11 text-sm md:text-base font-light">
              Fondato sull'Economia del Dono e sulla cooperazione, l'ecosistema applica la <strong>Regola della Tripartizione Rigida</strong>: ogni flusso di valore generato dai beni primari (acqua, energia, cibo) si scompone matematicamente tra benessere individuale, auto-consumo di distretto e dono per alimentare i nuovi ingressi.
            </p>
          </div>

          {/* PILASTRO 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center font-bold text-xs font-mono">3</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">La Filosofia Operativa: "Operare nella Luce"</h3>
            </div>
            <p className="text-stone-600 leading-relaxed pl-11 text-sm md:text-base font-light">
              Selezione rigorosa di partner e opportunità basata su etica, trasparenza assoluta e generazione di un impatto reale e tangibile sulla qualità della vita.
            </p>
          </div>

          {/* PILASTRO 4 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center font-bold text-xs font-mono">4</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">Il Percorso di Crescita: Dalla Tazzina all'Oceano</h3>
            </div>
            <p className="text-stone-600 leading-relaxed pl-11 text-sm md:text-base font-light">
              Prima di accogliere grandi flussi di abbondanza materiale, è indispensabile espandere la propria capienza interiore e consapevolezza (la tazzina da caffè che diventa oceano).
            </p>
          </div>

        </div>

        {/* SEZIONE SPECIALE: CRESCITA ESPONENZIALE E DIAGRAMMA AD ALBERO PARALLELO */}
        <div className="rounded-3xl border border-emerald-200/85 bg-gradient-to-br from-emerald-50/60 via-white to-stone-50 p-8 md:p-12 shadow-xl space-y-8">
          <div className="flex items-center gap-3 border-b border-emerald-100 pb-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 border border-emerald-200 text-emerald-900 flex items-center justify-center font-bold">
              <TreePine className="w-5 h-5 text-emerald-700" />
            </div>
            <h2 className="text-2xl font-bold font-serif text-stone-900">La Dinamica della Crescita Esponenziale (Matrice 6-36-216)</h2>
          </div>
          
          <p className="text-stone-600 text-sm md:text-base font-light leading-relaxed">
            Un modello geometrico e sostenibile basato sulla cura di sole <strong>6 persone</strong> per ciascun nodo, che evita il logorio relazionale e si sviluppa in modo frattale:
          </p>

          {/* KPI NUMERICI DEI LIVELLI */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-emerald-100 shadow-sm text-center space-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-400" />
              <span className="text-xs uppercase tracking-widest text-emerald-700 font-mono font-bold">Fase 1 (Radice)</span>
              <h4 className="text-3xl font-bold font-serif text-stone-900">6 Persone</h4>
              <p className="text-xs text-stone-500 font-light">Cura diretta e trasmissione del seme.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-emerald-100 shadow-sm text-center space-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-teal-400" />
              <span className="text-xs uppercase tracking-widest text-teal-700 font-mono font-bold">Fase 2 (Propagazione)</span>
              <h4 className="text-3xl font-bold font-serif text-stone-900">36 Nodi</h4>
              <p className="text-xs text-stone-500 font-light">Espansione organica nei bio-distretti.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-emerald-100 shadow-sm text-center space-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-sky-400" />
              <span className="text-xs uppercase tracking-widest text-sky-700 font-mono font-bold">Fase 3 (Foresta)</span>
              <h4 className="text-3xl font-bold font-serif text-stone-900">216+ Rete</h4>
              <p className="text-xs text-stone-500 font-light">Comunità interconnessa e autosufficiente.</p>
            </div>
          </div>

          {/* DIAGRAMMA AD ALBERO PARALLELO */}
          <div className="p-6 md:p-8 rounded-3xl bg-stone-900 text-stone-100 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono">Schema Geometrico Frattale</span>
              <span className="text-xs text-stone-400">Matrice 6 - 36 - 216</span>
            </div>

            <div className="space-y-6 pt-2 font-mono text-xs">
              <div className="flex items-center gap-4">
                <div className="w-24 text-emerald-400 font-semibold">ORIGINE</div>
                <div className="flex-1 bg-stone-800/80 p-3 rounded-xl border border-stone-700 flex items-center justify-between">
                  <span>🌱 Seme Railim (Tu)</span>
                  <span className="text-emerald-400">1 Nodo</span>
                </div>
              </div>

              <div className="flex items-center gap-4 pl-4 md:pl-8 border-l border-emerald-500/30">
                <div className="w-20 text-teal-400 font-semibold">FASE 1</div>
                <div className="flex-1 bg-stone-800/80 p-3 rounded-xl border border-stone-700 flex items-center justify-between">
                  <span>🌿 Cura Diretta (6 petali)</span>
                  <span className="text-teal-400">6 Persone</span>
                </div>
              </div>

              <div className="flex items-center gap-4 pl-8 md:pl-16 border-l border-teal-500/30">
                <div className="w-16 text-sky-400 font-semibold">FASE 2</div>
                <div className="flex-1 bg-stone-800/80 p-3 rounded-xl border border-stone-700 flex items-center justify-between">
                  <span>🌳 Propagazione Organica</span>
                  <span className="text-sky-400">36 Nodi</span>
                </div>
              </div>

              <div className="flex items-center gap-4 pl-12 md:pl-24 border-l border-sky-500/30">
                <div className="w-12 text-amber-400 font-semibold">FASE 3</div>
                <div className="flex-1 bg-stone-800/80 p-3 rounded-xl border border-stone-700 flex items-center justify-between">
                  <span>🌲 Rete Frattale Completa (Foresta)</span>
                  <span className="text-amber-400">216+ Persone</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-stone-400 text-center font-light pt-2">
              "Ogni foresta immensa parte da un singolo seme; la stabilità della rete deriva dalla qualità della cura dedicata a ciascun nodo."
            </p>
          </div>

        </div>

        {/* CONCLUSIONE E NAVIGAZIONE */}
        <div className="p-8 md:p-10 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/60 via-white to-emerald-50/30 space-y-4 text-center shadow-lg backdrop-blur-md">
          <h3 className="text-xl font-bold font-serif text-stone-900">In sintesi</h3>
          <p className="text-xs md:text-sm text-stone-600 max-w-xl mx-auto font-light leading-relaxed">
            NetFree trasforma il successo individuale in uno strumento per il benessere collettivo, alimentando un ciclo virtuoso di abbondanza condivisa.
          </p>
          <div className="pt-2">
            <Link href="/privato/economia-dono">
              <button className="bg-stone-900 hover:bg-stone-800 text-stone-50 font-medium px-8 py-3.5 rounded-full text-xs md:text-sm inline-flex items-center gap-2 shadow-md transition-all transform hover:scale-105 cursor-pointer">
                Approfondisci l'Economia del Dono <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>

      </main>

    </div>
  );
}
