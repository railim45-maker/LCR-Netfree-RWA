import { Link } from "wouter";
import { ArrowRight, Sun, Sparkles } from "lucide-react";

export default function EconomiaDonoPage() {
  return (
    <div className="min-h-screen relative text-stone-800 space-y-20 pb-36 overflow-hidden bg-[#fcfbf9]">
      
      {/* SFONDO LUMINOSO CON GRADIENTI ISPIRATI AI FLUSSI ENERGETICI (CHAKRA DI LUCE) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-amber-100/40 via-emerald-100/30 to-sky-100/30 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute inset-0 z-0 opacity-30 bg-cover bg-center bg-fixed mix-blend-overlay filter brightness-110 pointer-events-none" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop')` }} />

      {/* HEADER DI NAVIGAZIONE INTERNA */}
      <header className="container max-w-4xl mx-auto px-6 pt-10 relative z-10">
        <div className="flex items-center justify-between p-4 rounded-3xl bg-white/85 border border-stone-200/80 shadow-sm shadow-stone-200/50 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-sm border border-emerald-100">✨</span>
            <span className="font-bold text-xs uppercase tracking-wider text-stone-700 font-serif">Secondo Livello • Approfondimento Teorico</span>
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
        
        {/* TITOLO DELLA SCHEDA */}
        <div className="text-center space-y-4 pt-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50/80 border border-amber-200/60 text-amber-900 text-xs font-medium tracking-wide shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Armonia, Visione e Sviluppo Sostenibile
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-stone-900 leading-tight">
            L'Economia del Dono nell'Ecosistema
          </h1>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed font-light">
            Il cuore pulsante del progetto: un modello che si distacca dai sistemi tradizionali basati sulla scarsità per abbracciare una visione luminosa di abbondanza collettiva.
          </p>
        </div>

        {/* CORPO DELL'APPROFONDIMENTO (CARD LUMINOSE CON BORDI CORREDATI DA LUCE CALDA) */}
        <div className="rounded-3xl border border-stone-200/90 bg-white/95 backdrop-blur-xl p-8 md:p-12 shadow-xl shadow-stone-200/40 space-y-10 relative">
          
          {/* ACCENTO DI LUCE LATERALE (SFUMATURA SOTTILE) */}
          <div className="absolute left-0 top-12 bottom-12 w-1 bg-gradient-to-b from-amber-300 via-emerald-400 to-sky-300 rounded-r-full opacity-60" />

          {/* PUNTO 1 */}
          <div className="space-y-3 pl-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-amber-50 text-amber-800 border border-amber-200/60 flex items-center justify-center font-bold text-xs font-mono">1</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">Il Principio Fondamentale: Condivisione del Surplus</h3>
            </div>
            <p className="text-stone-600 leading-relaxed pl-11 text-sm md:text-base font-light">
              L'idea centrale è semplice: condividere una parte di ciò che si possiede per generare benefici per tutti. Tuttavia, il prerequisito essenziale è che <strong>per poter donare è necessario prima generare un surplus</strong>. L'infrastruttura è strutturata per permettere alle persone di costruire questo valore insieme, trasformando la collaborazione in uno strumento di crescita economica e personale.
            </p>
          </div>

          {/* PUNTO 2 */}
          <div className="space-y-3 pl-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-orange-50 text-orange-800 border border-orange-200/60 flex items-center justify-center font-bold text-xs font-mono">2</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">La Metafora del Seme e la Chiave Railim</h3>
            </div>
            <p className="text-stone-600 leading-relaxed pl-11 text-sm md:text-base font-light">
              Il concetto trova la sua applicazione pratica nella narrazione del seme, identificato simbolicamente nella <strong>Chiave Railim</strong>:
            </p>
            <ul className="space-y-2 pl-11 text-sm md:text-base text-stone-600 list-disc list-inside font-light">
              <li><strong>Ricezione e Responsabilità:</strong> Chi entra nell'ecosistema riceve il "seme" in dono. Questo gesto non è fine a se stesso, ma comporta la responsabilità di coltivare il proprio percorso, far crescere il valore ricevuto e supportare gli altri nel fare lo stesso.</li>
              <li><strong>La Moltiplicazione del Valore:</strong> Un seme conservato non esprime il suo potenziale; la sua natura è crescere e generare nuova vita. Pertanto, chi riceve il dono si impegna a condividerlo con altre persone per diffondere valore e opportunità.</li>
            </ul>
          </div>

          {/* PUNTO 3 */}
          <div className="space-y-3 pl-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60 flex items-center justify-center font-bold text-xs font-mono">3</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">Il Ciclo Virtuoso dei "Frutti"</h3>
            </div>
            <p className="text-stone-600 leading-relaxed pl-11 text-sm md:text-base font-light">
              L'economia del dono non è una semplice distribuzione di risorse, ma un sistema sostenibile. Quando il percorso (il seme) raggiunge la maturità e genera risultati:
            </p>
            <ul className="space-y-2 pl-11 text-sm md:text-base text-stone-600 list-disc list-inside font-light">
              <li><strong>Sostegno al Sistema:</strong> Una parte dei frutti prodotti viene destinata alla nascita di nuovi semi e al mantenimento dell'ecosistema.</li>
              <li><strong>Prosperità Individuale:</strong> La restante parte contribuisce direttamente al benessere di chi ha partecipato attivamente al percorso.</li>
            </ul>
            <p className="text-xs md:text-sm text-emerald-900 font-medium pl-11 pt-2 bg-emerald-50/80 p-4 rounded-2xl border border-emerald-100/80">
              🌱 Questo meccanismo assicura che il successo individuale diventi un motore per il benessere collettivo, alimentando un ciclo continuo di crescita e abbondanza.
            </p>
          </div>

          {/* PUNTO 4 */}
          <div className="space-y-3 pl-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-sky-50 text-sky-800 border border-sky-200/60 flex items-center justify-center font-bold text-xs font-mono">4</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">Tecnologia come Abilitatore</h3>
            </div>
            <p className="text-stone-600 leading-relaxed pl-11 text-sm md:text-base font-light">
              Un elemento innovativo è l'uso della tokenizzazione e delle strutture digitali avanzate. Questa tecnologia serve a liberare il valore inespresso di asset e risorse, rendendolo accessibile e utilizzabile per sostenere concretamente l'economia del dono e la crescita della comunità.
            </p>
          </div>

          {/* PUNTO 5 */}
          <div className="space-y-3 pl-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-800 border border-indigo-200/60 flex items-center justify-center font-bold text-xs font-mono">5</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">Dalla Competizione alla Collaborazione</h3>
            </div>
            <p className="text-stone-600 leading-relaxed pl-11 text-sm md:text-base font-light">
              L'economia del dono mira a creare una rete globale dove le persone scelgono di collaborare anziché competere. È una visione che richiede una crescita della consapevolezza individuale: il partecipante deve evolvere per sostenere le responsabilità e le opportunità di questo nuovo modello.
            </p>
          </div>

        </div>

        {/* SEZIONE COLLEGAMENTO AL TERZO LIVELLO (LUMINOSA E CALDA) */}
        <div className="p-8 md:p-10 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/60 via-white to-emerald-50/30 space-y-4 text-center shadow-lg shadow-amber-900/5 backdrop-blur-md">
          <h3 className="text-xl font-bold font-serif text-stone-900">Pronto a esplorare il Terzo Livello?</h3>
          <p className="text-xs md:text-sm text-stone-600 max-w-lg mx-auto font-light">
            Passa alla messa a terra analitica: numeri, gestione del rischio, quadri normativi e collegamenti puntuali ai partner operativi.
          </p>
          <div className="pt-2">
            <Link href="/club-deal">
              <button className="bg-stone-900 hover:bg-stone-800 text-stone-50 font-medium px-8 py-3.5 rounded-full text-xs md:text-sm inline-flex items-center gap-2 shadow-md transition-all transform hover:scale-105 cursor-pointer">
                Vai al Terzo Livello (Analisi & Partner) <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>

      </main>

    </div>
  );
}
