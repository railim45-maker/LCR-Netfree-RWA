import React, { useState } from 'react';
import { Sparkles, X, MessageCircle, Compass } from 'lucide-react';

export default function OracoloWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentInsight, setCurrentInsight] = useState(
    "«Il campo risponde al tuo passo. Interroga le tue priorità e ascolta la frequenza della centratura.»"
  );

  const insights = [
    "«Il campo risponde al tuo passo. Interroga le tue priorità e ascolta la frequenza della centratura.»",
    "✦ Prima regola: presidia il tuo spazio personale. La stabilità della cerchia nasce dalla tua radice.",
    "🌱 Economia del Dono: non cercare transazioni, crea risonanza e mutuo soccorso con chi è pronto.",
    "🛡️ Supera la finzione: radica la materia attraverso gli asset reali e proteggi il tempio biologico.",
    "✨ Sincronicità attiva: osserva i segnali del momento e procedi con determinazione e calma."
  ];

  const handleConsult = () => {
    const random = Math.floor(Math.random() * insights.length);
    setCurrentInsight(insights[random]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-stone-900 text-stone-50 shadow-2xl hover:bg-stone-800 transition-all border border-stone-700 font-serif text-xs font-semibold cursor-pointer group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
          <Sparkles className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
          <span>Interroga l'Oracolo</span>
        </button>
      ) : (
        <div className="w-[320px] sm:w-[380px] p-6 rounded-3xl bg-stone-900 text-stone-50 shadow-2xl border border-stone-700/80 space-y-4 backdrop-blur-xl relative animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="font-serif font-bold text-xs uppercase tracking-wider text-amber-400">Oracolo del Campo</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-stone-800 text-stone-400 hover:text-stone-100 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-stone-800/80 border border-stone-700/60 space-y-2">
            <p className="font-serif text-sm text-stone-200 leading-relaxed italic">
              {currentInsight}
            </p>
          </div>

          <div className="flex items-center justify-between pt-1">
            <button
              onClick={handleConsult}
              className="w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-900 font-serif font-semibold text-xs transition-all shadow-md cursor-pointer"
            >
              Estrai un nuovo responso ✦
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
