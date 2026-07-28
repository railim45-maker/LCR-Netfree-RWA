import { Link } from "wouter";
import { ArrowRight, Sparkles, Gift, Image as ImageIcon } from "lucide-react";

export default function EconomiaDonoPage() {
  return (
    <div className="min-h-screen relative text-stone-800 space-y-20 pb-36 overflow-hidden bg-[#fcfbf9]">
      
      {/* SFONDO LUMINOSO */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gradient-to-r from-amber-100/50 via-emerald-100/40 to-sky-100/40 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute inset-0 z-0 opacity-30 bg-cover bg-center bg-fixed mix-blend-overlay filter brightness-110 pointer-events-none" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop')` }} />

      {/* HEADER DI NAVIGAZIONE INTERNA */}
      <header className="container max-w-4xl mx-auto px-6 pt-10 relative z-10">
        <div className="flex items-center justify-between p-4 rounded-3xl bg-white/85 border border-stone-200/80 shadow-sm backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center text-sm border border-amber-100">🎁</span>
            <span className="font-bold text-xs uppercase tracking-wider text-stone-700 font-serif">Approfondimento • Economia del Dono</span>
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
        
        {/* TITOLO E IMMAGINE EVOCATIVA PRINCIPALE */}
        <div className="text-center space-y-6 pt-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium tracking-wide shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Modello Operativo di Rete
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-stone-900 leading-tight">
            L'Economia del Dono
          </h1>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed font-light">
            Il cuore pulsante del progetto: un modello che si distacca dai sistemi tradizionali basati sulla scarsità per abbracciare una visione luminosa di abbondanza collettiva.
          </p>

          {/* IMMAGINE EVOCATIVA PRINCIPALE */}
          <div className="rounded-3xl overflow-hidden border border-stone-200 shadow-xl max-h-[400px] relative">
            <img 
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1200&auto=format&fit=crop" 
              alt="Natura ed Economia del Dono" 
              className="w-full h-full object-cover filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent flex items-end p-6">
              <p className="text-white text-sm font-light italic">"Come il seme germoglia senza sforzo nella terra fertile, così il valore circola e si moltiplica nel dono."</p>
            </div>
          </div>
        </div>

        {/* CORPO DELL'APPROFONDIMENTO */}
        <div className="rounded-3xl border border-stone-200/90 bg-white/95 backdrop-blur-xl p-8 md:p-12 shadow-xl shadow-stone-200/40 space-y-10 relative">
          
          {/* PUNTO 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center font-bold text-xs font-mono">1</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">Il Principio Fondamentale: Condivisione del Surplus</h3>
            </div>
            <p className="text-stone-600 leading-relaxed pl-11 text-sm md:text-base font-light">
              L'idea centrale è semplice: condividere una parte di ciò che si possiede per generare benefici per tutti. Tuttavia, il prerequisito essenziale è che <strong>per poter donare è necessario prima generare un surplus</strong>. L'infrastruttura è strutturata per permettere alle persone di costruire questo valore insieme.
            </p>
          </div>

          {/* PUNTO 2 & INFOGRAFICA VISIVA DELLA METAFORA DEL SEME */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center font-bold text-xs font-mono">2</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">La Metafora del Seme e la Chiave Railim</h3>
            </div>
            <p className="text-stone-600 leading-relaxed pl-11 text-sm md:text-base font-light">
              Il concetto trova la sua applicazione pratica nella narrazione del seme, identificato simbolicamente nella <strong>Chiave Railim</strong>:
            </p>
            
            {/* BOX INFOGRAFICA RAPPRESENTATIVA */}
            <div className="ml-11 p-6 rounded-2xl bg-amber-50/60 border border-amber-200/60 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-2">
                <h4 className="font-bold text-amber-900 text-sm font-serif">🌱 Ricezione e Responsabilità</h4>
                <p className="text-xs text-stone-600 leading-relaxed">Chi entra riceve il seme in dono: coltivarlo significa far crescere il valore ricevuto e supportare gli altri.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-amber-900 text-sm font-serif">🌳 Moltiplicazione del Valore</h4>
                <p className="text-xs text-stone-600 leading-relaxed">Un seme non va conservato ma fatto germogliare, condividendolo per generare nuove opportunità.</p>
              </div>
            </div>
          </div>

          {/* PUNTO 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center font-bold text-xs font-mono">3</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">Il Ciclo Virtuoso dei "Frutti"</h3>
            </div>
            <p className="text-stone-600 leading-relaxed pl-11 text-sm md:text-base font-light">
              Quando il percorso raggiunge la maturità, una parte dei frutti sostiene la nascita di nuovi semi e dell'ecosistema, mentre la restante alimenta la prosperità individuale.
            </p>
          </div>

          {/* PUNTO 4 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center font-bold text-xs font-mono">4</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">Tecnologia come Abilitatore</h3>
            </div>
            <p className="text-stone-600 leading-relaxed pl-11 text-sm md:text-base font-light">
              L'uso della tokenizzazione libera il valore inespresso di asset e risorse, rendendolo accessibile per sostenere concretamente l'economia del dono.
            </p>
          </div>

          {/* PUNTO 5 */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center font-bold text-xs font-mono">5</span>
              <h3 className="text-xl font-bold font-serif text-stone-900">Dalla Competizione alla Collaborazione</h3>
            </div>
            <p className="text-stone-600 leading-relaxed pl-11 text-sm md:text-base font-light">
              Una rete globale basata sulla cooperazione anziché sulla competizione, richiedendo un'evoluzione della consapevolezza individuale.
            </p>
          </div>

        </div>

      </main>

    </div>
  );
}
