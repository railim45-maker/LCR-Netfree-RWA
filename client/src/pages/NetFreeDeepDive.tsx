import { Link } from "wouter";
import { ArrowRight, Sparkles, Users } from "lucide-react";

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
            Il termine <strong>NetFree</strong> nasce dall'unione di due concetti fondamentali: <strong>"Net"</strong> (rete di persone) e <strong>"Free"</strong> (libertà). Si definisce come un nuovo concetto di network che promuove la crescita, la collaborazione, la consapevolezza e la responsabilità individuale.
          </p>
        </div>

        {/* CORPO DELL'APPROFONDIMENTO */}
        <div className="rounded-3xl border border-stone-200/90 bg-white/95 backdrop-blur-xl p-8 md:p-12 shadow-xl space-y-10">
          
          <div className="space-y-3">
            <p className="text-stone-600 leading-relaxed text-sm md:text-base font-light">
              Il progetto è concepito per rispondere alle sfide moderne, come l'inflazione e la dipendenza da un'unica fonte di reddito, offrendo un percorso verso la libertà finanziaria, temporale e personale attraverso la creazione di valore reale. Ecco come è strutturato e pensato l'ecosistema nei suoi pilastri fondamentali:
            </p>
          </div>

          {/* PILASTRO 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center font-bold text-xs font-mono">1</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">La Struttura Organica: Il Ciclo del Seme</h3>
            </div>
            <p className="text-stone-600 leading-relaxed pl-11 text-sm md:text-base font-light">
              Il funzionamento di NetFree è descritto attraverso la metafora del seme, che rappresenta l'inizio di ogni trasformazione:
            </p>
            <ul className="space-y-2 pl-11 text-sm md:text-base text-stone-600 list-disc list-inside font-light">
              <li><strong>Ricezione della Chiave Railim:</strong> Ogni partecipante entra nell'ecosistema ricevendo in dono un "seme simbolico", denominato Chiave Railim.</li>
              <li><strong>Responsabilità e Coltivazione:</strong> Chi riceve il seme assume la responsabilità di coltivare il proprio percorso, far crescere il valore ricevuto e accettare il supporto della comunità.</li>
              <li><strong>Moltiplicazione e Condivisione:</strong> Per esprimere il proprio potenziale, il seme deve essere condiviso. Tradizionalmente, il sistema prevede la condivisione con un cerchio ristretto di persone (almeno sei), creando così una rete organica di crescita anziché una struttura gerarchica piramidale.</li>
              <li><strong>I Frutti:</strong> Quando il percorso raggiunge la maturità, una parte dei risultati viene destinata a generare nuovi semi per sostenere il sistema, mentre la restante parte contribuisce alla prosperità individuale di chi ha partecipato.</li>
            </ul>
          </div>

          {/* PILASTRO 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center font-bold text-xs font-mono">2</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">Il Modello Economico: L'Economia del Dono</h3>
            </div>
            <p className="text-stone-600 leading-relaxed pl-11 text-sm md:text-base font-light">
              L'intero progetto si fonda sul principio dell'Economia del Dono, che mira a creare abbondanza collettiva condividendo il surplus:
            </p>
            <ul className="space-y-2 pl-11 text-sm md:text-base text-stone-600 list-disc list-inside font-light">
              <li><strong>Collaborazione vs Competizione:</strong> NetFree è pensato come un ecosistema dove le persone collaborano per costruire valore insieme, riducendo i rischi e massimizzando i benefici per tutti.</li>
              <li><strong>Generazione di Liquidità:</strong> Per sostenere questo sistema, NetFree collabora con aziende innovative che utilizzano la tokenizzazione per digitalizzare e valorizzare asset le cui potenzialità sono spesso inespresse, liberando così le risorse necessarie per alimentare l'economia del dono.</li>
            </ul>
          </div>

          {/* PILASTRO 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center font-bold text-xs font-mono">3</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">La Filosofia Operativa: "Operare nella Luce"</h3>
            </div>
            <p className="text-stone-600 leading-relaxed pl-11 text-sm md:text-base font-light">
              NetFree seleziona rigorosamente partner e opportunità basandosi su criteri etici rigorosi:
            </p>
            <ul className="space-y-2 pl-11 text-sm md:text-base text-stone-600 list-disc list-inside font-light">
              <li><strong>Etica e Trasparenza:</strong> Collaborare "nella luce" significa agire con correttezza, costruire relazioni di fiducia e generare benefici sostenibili nel lungo periodo.</li>
              <li><strong>Utilità Reale:</strong> Ogni opportunità viene valutata non solo per il profitto, ma per la sua capacità di migliorare concretamente la qualità della vita e aumentare l'autonomia decisionale delle persone.</li>
            </ul>
          </div>

          {/* PILASTRO 4 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center font-bold text-xs font-mono">4</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">Il Percorso di Crescita: Dalla Tazzina all'Oceano</h3>
            </div>
            <p className="text-stone-600 leading-relaxed pl-11 text-sm md:text-base font-light">
              NetFree non è solo un sistema economico, ma un percorso formativo a livelli progressivi:
            </p>
            <ul className="space-y-2 pl-11 text-sm md:text-base text-stone-600 list-disc list-inside font-light">
              <li><strong>Espansione della Consapevolezza:</strong> Viene utilizzata la metafora della tazzina da caffè che deve diventare un oceano: prima di ottenere una crescita economica, è necessaria una crescita personale per essere in grado di gestire grandi flussi di risorse senza esserne travolti.</li>
              <li><strong>Formazione e Strumenti:</strong> Ogni fase è supportata da strumenti pratici e percorsi di sviluppo per garantire che la crescita sia equilibrata e consapevole.</li>
            </ul>
          </div>

        </div>

        {/* SEZIONE SPECIALE: LA DINAMICA DELLA CRESCITA ESPONENZIALE (CURA DI 6 PERSONE) */}
        <div className="rounded-3xl border border-emerald-200/85 bg-gradient-to-br from-emerald-50/60 via-white to-stone-50 p-8 md:p-12 shadow-xl space-y-6">
          <div className="flex items-center gap-3 border-b border-emerald-100 pb-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 border border-emerald-200 text-emerald-900 flex items-center justify-center font-bold">
              <Users className="w-5 h-5 text-emerald-700" />
            </div>
            <h2 className="text-2xl font-bold font-serif text-stone-900">La Dinamica della Crescita Esponenziale</h2>
          </div>
          
          <p className="text-stone-600 text-sm md:text-base font-light leading-relaxed">
            Per comprendere la potenza geometrica e al tempo stesso sostenibile del modello, basta osservare come una struttura basata sulla cura di sole <strong>6 persone</strong> si espanda organicamente senza generare stress o logorio relazionale:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-white border border-emerald-100 shadow-sm text-center space-y-2">
              <span className="text-xs uppercase tracking-widest text-emerald-700 font-mono font-bold">Fase 1</span>
              <h4 className="text-2xl font-bold font-serif text-stone-900">6 Persone</h4>
              <p className="text-xs text-stone-500 font-light">Il cerchio ristretto iniziale di cui ci si prende cura direttamente, trasmettendo il valore del seme.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-emerald-100 shadow-sm text-center space-y-2">
              <span className="text-xs uppercase tracking-widest text-emerald-700 font-mono font-bold">Fase 2</span>
              <h4 className="text-2xl font-bold font-serif text-stone-900">36 Nodi</h4>
              <p className="text-xs text-stone-500 font-light">La prima propagazione organica, in cui ogni persona coltiva a sua volta il proprio piccolo giardino.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-emerald-100 shadow-sm text-center space-y-2">
              <span className="text-xs uppercase tracking-widest text-emerald-700 font-mono font-bold">Fase 3</span>
              <h4 className="text-2xl font-bold font-serif text-stone-900">216+ Rete</h4>
              <p className="text-xs text-stone-500 font-light">Una foresta interconnessa di individui liberi e consapevoli che si sostengono a vicenda.</p>
            </div>
          </div>
          
          <p className="text-xs text-emerald-900 font-light italic text-center pt-2">
            "Ogni foresta immensa parte da un singolo seme; la stabilità della rete deriva dalla qualità della cura dedicata a ciascun nodo."
          </p>
        </div>

        {/* CONCLUSIONE E PROSIEGUO */}
        <div className="p-8 md:p-10 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/60 via-white to-emerald-50/30 space-y-4 text-center shadow-lg backdrop-blur-md">
          <h3 className="text-xl font-bold font-serif text-stone-900">In sintesi</h3>
          <p className="text-xs md:text-sm text-stone-600 max-w-xl mx-auto font-light leading-relaxed">
            NetFree è pensato come una visione filantropica che trasforma il successo individuale in uno strumento per il benessere collettivo, alimentando un ciclo virtuoso di abbondanza condivisa.
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
