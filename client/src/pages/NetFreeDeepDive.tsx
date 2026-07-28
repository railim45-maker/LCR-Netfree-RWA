import { Link } from "wouter";
import { ArrowRight, Sparkles, Users, TreePine, Sun, ShieldCheck, Cpu, Droplet, Zap, HeartHandshake } from "lucide-react";

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
            NetFree: L'Infrastruttura Sintropica e Sociale
          </h1>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed font-light">
            L'unione di <strong>"Net"</strong> (la rete di persone) e <strong>"Free"</strong> (la libertà multidimensionale). Il passaggio definitivo dalla griglia dissipativa del vecchio mondo alla rete sintropica di coerenza collettiva.
          </p>

          {/* IMMAGINE EVOCATIVA */}
          <div className="rounded-3xl overflow-hidden border border-stone-200 shadow-xl max-h-[380px] relative mt-6">
            <img 
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1200&auto=format&fit=crop" 
              alt="Ecosistema NetFree" 
              className="w-full h-full object-cover filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent flex items-end p-6">
              <p className="text-white text-sm font-light italic">"Ogni elemento che ha concluso il suo movimento viene istantaneamente reintrodotto nel ciclo come forza motrice e vita."</p>
            </div>
          </div>
        </div>

        {/* CORPO DELL'APPROFONDIMENTO: LE LOGICHE STRUTTURALI */}
        <div className="rounded-3xl border border-stone-200/90 bg-white/95 backdrop-blur-xl p-8 md:p-12 shadow-xl space-y-10">
          
          {/* LOGICA 1: LA MATRICE FRATTALE E IL SISTEMA DEL SEME */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center font-bold text-xs font-mono">1</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">La Struttura Frattale e il Sistema del Seme (Matrice 6-36-216)</h3>
            </div>
            <p className="text-stone-600 leading-relaxed pl-11 text-sm md:text-base font-light">
              La comunità non si sviluppa tramite agglomerati caotici o gerarchie piramidali estrattive, ma secondo una divisione armonica e matematica basata sul <strong>Sistema del Seme (matrice 6-36-216)</strong>:
            </p>
            <ul className="space-y-2 pl-11 text-sm md:text-base text-stone-600 list-disc list-inside font-light">
              <li><strong>Ricezione della Chiave Railim:</strong> Ogni partecipante riceve in dono il seme energetico iniziale per attivare il proprio percorso.</li>
              <li><strong>Bio-Distretti e Petali:</strong> L'architettura sociale si suddivide in petali e nodi gestibili, in cui la propagazione avviene attraverso la cura diretta di un cerchio ristretto di persone.</li>
              <li><strong>Sostenibilità Relazionale:</strong> Questo impedisce il burnout e il logorio tipico del network marketing commerciale, garantendo la stabilità di ogni nodo della rete.</li>
            </ul>
          </div>

          {/* LOGICA 2: LA REGOLA DELLA TRIPARTIZIONE RIGIDA */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center font-bold text-xs font-mono">2</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">La Regola della Tripartizione Rigida dei Flussi</h3>
            </div>
            <p className="text-stone-600 leading-relaxed pl-11 text-sm md:text-base font-light">
              L'economia del NetFree si emancipa dalla ricattabilità materiale e dal debito applicando la <strong>Regola della Tripartizione Rigida</strong>. Ogni consumo e risorsa primaria (acqua, energia, cibo) si scompone matematicamente in tre direzioni sinergiche:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-11 pt-2">
              <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 text-center space-y-1">
                <span className="font-bold text-emerald-900 text-xs uppercase">1. Benessere Individuale</span>
                <p className="text-xs text-stone-600 font-light">Risorse dedicate alla salute e alla prosperità della persona.</p>
              </div>
              <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-100 text-center space-y-1">
                <span className="font-bold text-teal-900 text-xs uppercase">2. Auto-Consumo di Distretto</span>
                <p className="text-xs text-stone-600 font-light">Mantenimento e sviluppo infrastrutturale della comunità.</p>
              </div>
              <div className="p-4 rounded-2xl bg-sky-50/50 border border-sky-100 text-center space-y-1">
                <span className="font-bold text-sky-900 text-xs uppercase">3. Dono per Nuovi Ingressi</span>
                <p className="text-xs text-stone-600 font-light">Alimentazione continua del ciclo per i futuri partecipanti.</p>
              </div>
            </div>
          </div>

          {/* LOGICA 3: FILOSOFIA "OPERARE NELLA LUCE" E SALUTE QUANTISTICA */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center font-bold text-xs font-mono">3</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">Salute Quantistica e "Operare nella Luce"</h3>
            </div>
            <p className="text-stone-600 leading-relaxed pl-11 text-sm md:text-base font-light">
              Collaborare "nella luce" significa rigettare la simpaticotonia indotta dalla tecnologia invasiva del vecchio mondo per adottare soluzioni a coerenza biologica (frequenze armoniose, Li-Fi, acqua strutturata, agricoltura sintropica), garantendo un impatto reale che elevi la qualità della vita.
            </p>
          </div>

          {/* LOGICA 4: LA TAZZINA E L'OCEANO */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center font-bold text-xs font-mono">4</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">Il Percorso di Crescita: Dalla Tazzina all'Oceano</h3>
            </div>
            <p className="text-stone-600 leading-relaxed pl-11 text-sm md:text-base font-light">
              Prima di canalizzare flussi importanti di abbondanza e moneta scritturale, è necessaria una profonda espansione della capienza interiore, affinché l'individuo possa gestire la ricchezza senza subire contraccolpi emotivi.
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
            Visualizzazione in tempo reale della propagazione organica basata sul modello del 6, evidenziando lo sviluppo dei nodi e l'allineamento dei livelli comunitari:
          </p>

          {/* KPI NUMERICI DEI LIVELLI */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-emerald-100 shadow-sm text-center space-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-400" />
              <span className="text-xs uppercase tracking-widest text-emerald-700 font-mono font-bold">Livello 1 (Radice)</span>
              <h4 className="text-3xl font-bold font-serif text-stone-900">6 Persone</h4>
              <p className="text-xs text-stone-500 font-light">Cura diretta e trasmissione del seme.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-emerald-100 shadow-sm text-center space-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-teal-400" />
              <span className="text-xs uppercase tracking-widest text-teal-700 font-mono font-bold">Livello 2 (Propagazione)</span>
              <h4 className="text-3xl font-bold font-serif text-stone-900">36 Nodi</h4>
              <p className="text-xs text-stone-500 font-light">Espansione armonica nei bio-distretti.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-emerald-100 shadow-sm text-center space-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-sky-400" />
              <span className="text-xs uppercase tracking-widest text-sky-700 font-mono font-bold">Livello 3 (Foresta)</span>
              <h4 className="text-3xl font-bold font-serif text-stone-900">216+ Rete</h4>
              <p className="text-xs text-stone-500 font-light">Comunità interconnessa e autosufficiente.</p>
            </div>
          </div>

          {/* DIAGRAMMA AD ALBERO PARALLELO */}
          <div className="p-6 md:p-8 rounded-3xl bg-stone-900 text-stone-100 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono">Schema Geometrico Frattale Parallelo</span>
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
                <div className="w-20 text-teal-400 font-semibold">LIVELLO 1</div>
                <div className="flex-1 bg-stone-800/80 p-3 rounded-xl border border-stone-700 flex items-center justify-between">
                  <span>🌿 Cura Diretta (6 petali)</span>
                  <span className="text-teal-400">6 Persone</span>
                </div>
              </div>

              <div className="flex items-center gap-4 pl-8 md:pl-16 border-l border-teal-500/30">
                <div className="w-16 text-sky-400 font-semibold">LIVELLO 2</div>
                <div className="flex-1 bg-stone-800/80 p-3 rounded-xl border border-stone-700 flex items-center justify-between">
                  <span>🌳 Propagazione Organica</span>
                  <span className="text-sky-400">36 Nodi</span>
                </div>
              </div>

              <div className="flex items-center gap-4 pl-12 md:pl-24 border-l border-sky-500/30">
                <div className="w-12 text-amber-400 font-semibold">LIVELLO 3</div>
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
