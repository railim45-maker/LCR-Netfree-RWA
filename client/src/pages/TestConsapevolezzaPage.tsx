import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Compass, CheckCircle2, Award, BookOpen } from 'lucide-react';
import { Link } from 'wouter';

export default function TestConsapevolezzaPage() {
  const [domande, setDomande] = useState([
    { id: 1, testo: "Qual è il tuo livello di familiarità con i principi della fisica quantistica e della risonanza?", risposta: 3 },
    { id: 2, testo: "Hai già adottato protocolli di purificazione e strutturazione dell'acqua nel tuo tempio biologico?", risposta: 3 },
    { id: 3, testo: "Quanto pratichi regolarmente l'economia del dono e il mutuo soccorso nella tua comunità?", risposta: 3 },
    { id: 4, testo: "Conosci i confini della finzione giuridica e i principi dell'autodeterminazione?", risposta: 3 },
  ]);

  const [completato, setCompletato] = useState(false);

  const handleSliderChange = (id: number, val: number) => {
    setDomande(prev => prev.map(d => d.id === id ? { ...d, risposta: val } : d));
  };

  const calcolaProfilo = () => {
    setCompletato(true);
  };

  return (
    <div className="min-h-screen relative text-stone-800 space-y-16 md:space-y-28 pb-24 md:pb-40 overflow-hidden bg-[#fcfbf9]">
      
      {/* SFONDO LUMINOSO */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[1200px] h-[400px] md:h-[700px] bg-gradient-to-b from-amber-100/40 via-emerald-50/20 to-transparent blur-[120px] md:blur-[150px] rounded-full pointer-events-none z-0" />

      {/* HEADER */}
      <header className="container max-w-5xl mx-auto px-4 md:px-6 pt-6 md:pt-12 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 md:px-6 py-3 md:py-4 rounded-3xl sm:rounded-full bg-white/90 border border-stone-200/60 shadow-[0_2px_20px_rgba(0,0,0,0.02)] backdrop-blur-xl">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-serif text-stone-600 hover:text-stone-900 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Torna alla Mappa Principale
          </Link>
          <span className="font-bold text-[10px] sm:text-xs uppercase tracking-wider text-amber-800 font-serif">
            🧭 Test di Consapevolezza Vibrazionale
          </span>
        </div>
      </header>

      {/* CONTENUTO */}
      <main className="container max-w-3xl mx-auto px-4 md:px-6 space-y-12 relative z-10">
        
        <div className="text-center space-y-4 pt-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium font-serif shadow-xs">
            <Compass className="w-3.5 h-3.5 text-amber-600" /> Mappatura dello Stato Evolutivo
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-stone-900 tracking-tight leading-[1.15]">
            Test di Allineamento Vibrazionale
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light font-serif">
            Questo non è un esame con punteggio di merito, ma una fotografia interiore per comprendere il tuo grado di esperienza nelle tematiche del campo e individuare la classe formativa ideale per il tuo percorso.
          </p>
        </div>

        {!completato ? (
          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-8">
            <div className="space-y-6">
              {domande.map((d, index) => (
                <div key={d.id} className="p-5 rounded-2xl bg-stone-50 border border-stone-200/60 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-900 font-bold font-serif text-xs flex items-center justify-center flex-shrink-0">{index + 1}</span>
                    <h4 className="font-serif font-bold text-sm text-stone-900">{d.testo}</h4>
                  </div>
                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between text-[11px] font-mono text-stone-500">
                      <span>Principiante / In ascolto (1)</span>
                      <span>Consapevole (3)</span>
                      <span>Esperto / Praticante (5)</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="5" 
                      value={d.risposta} 
                      onChange={(e) => handleSliderChange(d.id, parseInt(e.target.value))}
                      className="w-full accent-amber-600 cursor-pointer"
                    />
                    <div className="text-center font-mono font-bold text-xs text-amber-800">
                      Valore di risonanza selezionato: {d.risposta} / 5
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={calcolaProfilo}
              className="w-full py-4 rounded-full bg-stone-900 text-stone-50 hover:bg-stone-800 font-serif font-semibold text-xs sm:text-sm transition-all shadow-lg cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-400" /> Analizza il Profilo e Assegna la Classe Formativa ✦
            </button>
          </div>
        ) : (
          <div className="p-8 sm:p-14 rounded-[2.5rem] bg-white border-2 border-amber-300 shadow-2xl space-y-8 text-center animate-in fade-in duration-500">
            <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center mx-auto border border-amber-200 shadow-sm">
              <Award className="w-8 h-8 text-amber-600" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-semibold">Profilo Vibrazionale Rilevato</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">Classe Formativa: Cerchia di Radicamento & Risoluzione</h2>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 font-serif font-light leading-relaxed max-w-lg mx-auto">
              Dalle tue risposte emerge una solida propensione all'ascolto del campo. Sei pronto per accedere ai moduli avanzati di efficientamento energetico, condivisione dei link di invito per la tua cerchia di 6 persone e approfondimento nella Biblioteca.
            </p>

            <div className="pt-4 flex items-center justify-center gap-3 flex-wrap">
              <Link 
                href="/biblioteca" 
                className="px-7 py-3 rounded-full bg-stone-900 text-stone-50 hover:bg-stone-800 text-xs font-serif font-semibold transition-all shadow-md inline-flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-amber-400" /> Entra nella Biblioteca del Campo
              </Link>
              <Link 
                href="/" 
                className="px-7 py-3 rounded-full bg-amber-100 text-amber-900 hover:bg-amber-200 text-xs font-serif font-semibold transition-all border border-amber-300"
              >
                Torna alla Mappa dei Checkpoint →
              </Link>
            </div>
          </div>
        )}

      </main>

    </div>
  );
}
