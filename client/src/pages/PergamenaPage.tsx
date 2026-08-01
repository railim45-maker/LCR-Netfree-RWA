import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Scroll, CheckCircle2, Feather, Shield, Award } from 'lucide-react';
import { Link } from 'wouter';

export default function PergamenaPage() {
  const [formData, setFormData] = useState({
    nome: '',
    presidio: '',
    citta: '',
    email: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome.trim()) return;
    setCurrentDate(new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' }));
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen relative text-stone-800 space-y-16 md:space-y-28 pb-24 md:pb-40 overflow-hidden bg-[#fcfbf9]">
      
      {/* SFONDO LUMINOSO E GRADIENTI ARMONICI */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[1200px] h-[400px] md:h-[700px] bg-gradient-to-b from-amber-100/40 via-stone-100/50 to-transparent blur-[120px] md:blur-[150px] rounded-full pointer-events-none z-0" />

      {/* HEADER DI NAVIGAZIONE INTERNA */}
      <header className="container max-w-5xl mx-auto px-4 md:px-6 pt-6 md:pt-12 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 md:px-6 py-3 md:py-4 rounded-3xl sm:rounded-full bg-white/90 border border-stone-200/60 shadow-[0_2px_20px_rgba(0,0,0,0.02)] backdrop-blur-xl">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-serif text-stone-600 hover:text-stone-900 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Torna alla Mappa Principale
          </Link>
          <span className="font-bold text-[10px] sm:text-xs uppercase tracking-wider text-amber-800 font-serif">
            📜 Patto d'Alleanza • Pergamena di Impegno
          </span>
        </div>
      </header>

      {/* CONTENUTO PRINCIPALE */}
      <main className="container max-w-3xl mx-auto px-4 md:px-6 space-y-12 relative z-10">
        
        {/* INTRODUZIONE */}
        <div className="text-center space-y-4 pt-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium font-serif shadow-xs">
            <Scroll className="w-3.5 h-3.5 text-amber-600" /> Il Contratto Vivente della Cerchia
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-stone-900 tracking-tight leading-[1.15]">
            Sottoscrizione della Pergamena
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light font-serif">
            Compila il modulo per sigillare il tuo impegno ufficiale nell'ecosistema Net-Free e generare il tuo attestato di alleanza e sovranità.
          </p>
        </div>

        {!isSubmitted ? (
          /* MODULO DI COMPILAZIONE */
          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-6">
            <h3 className="text-xl font-serif font-bold text-stone-900 border-b border-stone-100 pb-4">
              I Tuoi Dati di Presidio
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label className="block text-xs font-serif font-semibold text-stone-700">Nome e Cognome *</label>
                <input
                  type="text"
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  placeholder="Es. Dario Rossi"
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 text-xs sm:text-sm font-serif focus:outline-none focus:border-amber-600 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-serif font-semibold text-stone-700">Nome del Presidio / Nucleo Familiare</label>
                <input
                  type="text"
                  value={formData.presidio}
                  onChange={(e) => setFormData({ ...formData, presidio: e.target.value })}
                  placeholder="Es. Presidio Biologico Oltrepò"
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 text-xs sm:text-sm font-serif focus:outline-none focus:border-amber-600 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-serif font-semibold text-stone-700">Città / Territorio di Riferimento</label>
                <input
                  type="text"
                  value={formData.citta}
                  onChange={(e) => setFormData({ ...formData, citta: e.target.value })}
                  placeholder="Es. Pavia / Lombardia"
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 text-xs sm:text-sm font-serif focus:outline-none focus:border-amber-600 transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-stone-900 text-stone-50 hover:bg-stone-800 font-serif font-semibold text-xs sm:text-sm transition-all shadow-lg cursor-pointer flex items-center justify-center gap-2"
                >
                  <Feather className="w-4 h-4 text-amber-400" /> Sigilla e Genera la Pergamena d'Impegno ✦
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* LA PERGAMENA GENERATA E COMPILATA */
          <div className="p-8 sm:p-14 rounded-[2.5rem] bg-[#fffdf9] border-2 border-amber-300 shadow-2xl space-y-8 relative overflow-hidden animate-in fade-in duration-500">
            
            <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 font-serif text-xs font-bold shadow-sm">
              ✦ LCR
            </div>

            <div className="text-center space-y-2 border-b border-stone-200/60 pb-6">
              <span className="text-xs font-mono uppercase tracking-[3px] text-amber-800 font-semibold">Attestato Ufficiale di Alleanza</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">Il Patto della Terra e della Cura</h2>
            </div>

            <div className="space-y-6 font-serif text-stone-700 text-xs sm:text-sm leading-relaxed font-light">
              <p>
                Con la presente sottoscrizione, il sottoscritto <strong>{formData.nome}</strong>{formData.presidio ? ` (rappresentante del nucleo "${formData.presidio}")` : ''}{formData.citta ? ` operante sul territorio di ${formData.citta}` : ''}, riconosce la necessità di affrancarsi dalle logiche della scarsità e della finzione commerciale, ristabilendo il primato della vita e della cooperazione naturale.
              </p>

              <div className="space-y-3 pl-4 border-l-2 border-amber-400 my-4">
                <p><strong>I. Il Presidio dello Spazio:</strong> Impegno a mantenere l'equilibrio del tempio biologico, curando l'armonia domestica, l'acqua, l'alimentazione e la centratura interiore.</p>
                <p><strong>II. La Protezione Materiale (RWA):</strong> Riconosco l'importanza di ancorare la stabilità economica a beni reali e sicuri tramite Club Deal trasparenti.</p>
                <p><strong>III. L'Economia del Dono:</strong> Mi impegno a sostenere i compagni di strada all'interno della cerchia ristretta di cura, praticando il mutuo soccorso.</p>
              </div>

              <div className="pt-6 border-t border-stone-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <div>
                  <p className="text-stone-500 font-mono uppercase text-[10px]">Sottoscritto nel Campo di LCR</p>
                  <p className="font-bold text-stone-900 font-serif text-sm">{formData.nome}</p>
                </div>
                <div className="text-right">
                  <p className="text-stone-500 font-mono uppercase text-[10px]">Data di Sigillo</p>
                  <p className="font-bold text-stone-900 font-serif text-sm">{currentDate}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-center gap-3 flex-wrap">
              <button
                onClick={() => window.print()}
                className="px-6 py-2.5 rounded-full bg-stone-900 text-stone-50 hover:bg-stone-800 text-xs font-serif font-semibold transition-all shadow-md cursor-pointer"
              >
                Stampa / Salva Pergamena 🖨️
              </button>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2.5 rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200 text-xs font-serif font-semibold transition-all border border-stone-300 cursor-pointer"
              >
                Modifica Dati ✍️
              </button>
              <Link
                href="/"
                className="px-6 py-2.5 rounded-full bg-amber-100 text-amber-900 hover:bg-amber-200 text-xs font-serif font-semibold transition-all border border-amber-300"
              >
                Torna alla Mappa →
              </Link>
            </div>

          </div>
        )}

      </main>

    </div>
  );
}
