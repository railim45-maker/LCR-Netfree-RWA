import React, { useState } from 'react';
import { ArrowLeft, Sparkles, ShieldCheck, CheckCircle2, Feather, Scroll } from 'lucide-react';
import { Link } from 'wouter';

export default function PergamenaPage() {
  const [signedName, setSignedName] = useState('');
  const [isSigned, setIsSigned] = useState(false);
  const [signatureDate, setSignatureDate] = useState('');

  const handleSign = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signedName.trim()) return;
    setSignatureDate(new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' }));
    setIsSigned(true);
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
            <Scroll className="w-3.5 h-3.5 text-amber-600" /> Il Contratto Vivente
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-stone-900 tracking-tight leading-[1.15]">
            La Pergamena della Cerchia di Cura
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light font-serif">
            Questo non è un accordo commerciale, ma un patto di coscienza e mutuo soccorso. Sottoscrivendolo, dichiari il tuo impegno a presidiare il tuo spazio, proteggere il tempio biologico e camminare nell'abbondanza circolare.
          </p>
        </div>

        {/* LA PERGAMENA VISIVA (IL TESTO DEL PATTO) */}
        <div className="p-8 sm:p-14 rounded-[2.5rem] bg-[#fffdf9] border-2 border-amber-200/80 shadow-2xl space-y-8 relative overflow-hidden">
          
          {/* Sigillo o decorazione d'angolo */}
          <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-amber-100/60 border border-amber-300 flex items-center justify-center text-amber-800 font-serif text-xs font-bold shadow-sm">
            ✦ LCR
          </div>

          <div className="text-center space-y-2 border-b border-stone-200/60 pb-6">
            <span className="text-xs font-mono uppercase tracking-[3px] text-amber-800 font-semibold">Manifesto d'Intesa e Sovranità</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">Il Patto della Terra e della Cura</h2>
          </div>

          <div className="space-y-6 font-serif text-stone-700 text-xs sm:text-sm leading-relaxed font-light">
            <p className="first-letter:text-3xl first-letter:font-bold first-letter:text-amber-800 first-letter:mr-1">
              Con la presente sottoscrizione, il sottoscritto individuo riconosce la necessità di affrancarsi dalle logiche della scarsità, della competizione distruttiva e della finzione commerciale, ristabilendo il primato della vita, della materia tangibile e della cooperazione naturale.
            </p>

            <div className="space-y-3 pl-4 border-l-2 border-amber-300">
              <p><strong>I. Il Presidio dello Spazio:</strong> Impegno a mantenere l'equilibrio del mio tempio biologico, curando l'armonia domestica, l'acqua, l'alimentazione e la centratura interiore prima di guidare il mio prossimo.</p>
              <p><strong>II. La Protezione Materiale (RWA):</strong> Riconosco l'importanza di ancorare la stabilità economica a beni reali e sicuri, rigettando il valore fittizio e abbracciando modelli di Club Deal trasparenti e protetti.</p>
              <p><strong>III. L'Economia del Dono e la Cerchia:</strong> Mi impegno a sostenere i compagni di strada all'interno della cerchia ristretta di cura, praticando il mutuo soccorso e rifiutando logiche piramidali o parassitarie.</p>
            </div>

            <p className="italic text-stone-600 text-center pt-2">
              «Ciò che viene custodito nella cerchia fiorisce per l'intera comunità. Il cammino risponde al passo di chi ha il coraggio di agire.»
            </p>
          </div>

          {/* SEZIONE FIRMA O MODULO DI SOTTOSCRIZIONE */}
          {!isSigned ? (
            <form onSubmit={handleSign} className="pt-6 border-t border-stone-200/60 space-y-4">
              <div className="space-y-2">
                <label className="block text-xs font-serif font-semibold text-stone-800">
                  Inserisci il tuo Nome / Cognome o Nome del Presidio:
                </label>
                <input
                  type="text"
                  required
                  value={signedName}
                  onChange={(e) => setSignedName(e.target.value)}
                  placeholder="Es. Dario di Poli"
                  className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-stone-900 text-xs sm:text-sm font-serif focus:outline-none focus:border-amber-600 transition-colors shadow-inner"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-stone-900 text-stone-50 hover:bg-stone-800 font-serif font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <Feather className="w-4 h-4 text-amber-400" /> Sottoscrivi la Pergamena d'Impegno ✦
              </button>
            </form>
          ) : (
            <div className="pt-6 border-t border-amber-300 space-y-6 text-center animate-in fade-in duration-500 bg-amber-50/50 p-6 rounded-2xl border">
              <div className="inline-flex items-center gap-2 text-emerald-700 font-serif font-semibold text-xs bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-4 h-4" /> Patto Sottoscritto e Sigillato nel Campo
              </div>
              <div className="space-y-1 font-serif">
                <p className="text-xs text-stone-500 uppercase tracking-widest">Firmato ufficialmente da</p>
                <p className="text-xl font-bold text-stone-900 font-serif italic">"{signedName}"</p>
                <p className="text-xs text-stone-500 pt-1">Data di sottoscrizione: {signatureDate}</p>
              </div>
              <div className="pt-2 flex items-center justify-center gap-3 flex-wrap">
                <button
                  onClick={() => window.print()}
                  className="px-6 py-2.5 rounded-full bg-stone-900 text-stone-50 hover:bg-stone-800 text-xs font-serif font-semibold transition-all shadow-md cursor-pointer"
                >
                  Stampa / Salva Pergamena 🖨️
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

        </div>

      </main>

    </div>
  );
}
