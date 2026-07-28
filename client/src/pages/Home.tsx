import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

// Diapositive ufficiali della presentazione "La Strada che Conduce a Casa"
const slides = [
  {
    id: 1,
    title: "La Strada che Conduce a Casa",
    subtitle: "Dalla finzione del debito alla sovranità dell'Uomo Naturale",
    image: "https://placehold.co/1280x720/0b0d10/d4af37?text=La+Strada+che+Conduce+a+Casa",
  },
  {
    id: 2,
    title: "Corriamo ogni giorno per restare fermi.",
    text: "Inflazione, debito, tempo rubato. Il sistema attuale è progettato sull'illusione della scarsità. La fatica aumenta, ma la libertà si allontana.\n\nÈ il momento di fermarsi.",
    image: "https://placehold.co/1280x720/0b0d10/10b981?text=Il+Labirinto",
  },
  {
    id: 3,
    title: "La vera libertà non si compra. Si coltiva.",
    text: "Esiste una via d'uscita. Richiede un nuovo paradigma dove il valore reale sostituisce il debito, e la condivisione sostituisce la competizione.",
    image: "https://placehold.co/1280x720/0b0d10/d4af37?text=La+Porta+della+Liberta",
  },
  {
    id: 4,
    title: "Tappa I: Piedi a terra.",
    text: "Per elevarsi, servono radici solide. Trasformiamo il valore potenziale in energia liquida, senza cedere proprietà, senza creare nuovo debito.",
    image: "https://placehold.co/1280x720/0b0d10/10b981?text=Tappa+I+Radici",
  },
  {
    id: 5,
    title: "Il patrimonio non viene venduto. Viene attivato.",
    text: "La tecnologia lavora per l'uomo. Attraverso la digitalizzazione del valore, liberiamo risorse inaccessibili per nutrire una nuova economia.",
    image: "https://placehold.co/1280x720/0b0d10/d4af37?text=Attivazione+Patrimonio",
  },
  {
    id: 6,
    title: "Operare esclusivamente nella Luce.",
    text: "L'innovazione senza integrità è vuota. Scegliamo solo progetti e partner guidati da etica, trasparenza e utilità reale per l'essere umano.",
    image: "https://placehold.co/1280x720/0b0d10/f59e0b?text=Operare+nella+Luce",
  },
  {
    id: 7,
    title: "Tappa II: Il dono della Chiave Railim.",
    text: "Tutto inizia da un seme ricevuto in dono. Nessun rischio, nessuna pressione. Solo la responsabilità di coltivarlo e farlo prosperare.",
    image: "https://placehold.co/1280x720/0b0d10/10b981?text=Tappa+II+Chiave+Railim",
  },
  {
    id: 8,
    title: "Dalla vendita alla cura del giardino.",
    text: "Non ti chiediamo di diventare un venditore. Ti chiediamo di prenderti cura della tua cerchia, accompagnando chi scegli nel percorso di crescita.",
    image: "https://placehold.co/1280x720/0b0d10/d4af37?text=Cura+del+Giardino",
  },
  {
    id: 9,
    title: "L'Abbondanza Circolare.",
    text: "Quando il seme genera frutti, una parte torna al sistema per generare nuovi doni. La prosperità individuale nutre l'opportunità collettiva.",
    image: "https://placehold.co/1280x720/0b0d10/10b981?text=Abbondanza+Circolare",
  },
  {
    id: 10,
    title: "Tappa III: Preparare il Contenitore.",
    text: "Se versi uno tsunami dentro una tazzina, la tazzina si rompe. La ricchezza improvvisa, senza consapevolezza, è un pericolo, non una salvezza.",
    image: "https://placehold.co/1280x720/0b0d10/3b82f6?text=Preparare+il+Contenitore",
  },
  {
    id: 11,
    title: "Dalla Tazzina all'Oceano.",
    text: "La vera crescita economica richiede una profonda evoluzione interiore. Il Tempio Biologico deve espandersi per gestire la propria sovranità energetica.",
    image: "https://placehold.co/1280x720/0b0d10/10b981?text=Dalla+Tazzina+all+Oceano",
  },
  {
    id: 12,
    title: "Tappa IV: Il Risveglio dalla Finzione.",
    text: "Abbandoniamo le dipendenze artificiali. Riscopriamo l'essenza di esseri umani liberi, creatori del proprio destino fuori dalla finzione giuridica.",
    image: "https://placehold.co/1280x720/0b0d10/f59e0b?text=Risveglio+dalla+Finzione",
  },
  {
    id: 13,
    title: "L'Accademia Uomo Naturale.",
    text: "Il ritorno alla nostra natura originaria. Un percorso per riappropriarsi del proprio corpo, della propria mente e della propria energia vitale.",
    image: "https://placehold.co/1280x720/0b0d10/d4af37?text=Accademia+Uomo+Naturale",
  },
  {
    id: 14,
    title: "L'Equilibrio Assoluto.",
    text: "Libertà di Tempo, Finanziaria e Spirituale. Quando il valore reale incontra la consapevolezza interiore, il sistema del debito crolla. Inizia l'era dell'abbondanza.",
    image: "https://placehold.co/1280x720/0b0d10/10b981?text=Equilibrio+Assoluto",
  },
  {
    id: 15,
    title: "Bentornati a Casa.",
    text: "\"Ogni grande foresta è iniziata da un singolo seme. La domanda non è quanto possa crescere. La domanda è: vuoi coltivarlo con noi?\"",
    image: "https://placehold.co/1280x720/0b0d10/d4af37?text=Bentornati+a+Casa",
  }
];

export default function MasterPresentationView() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="min-h-screen bg-[#0b0d10] text-[#f3f0df] flex flex-col items-center justify-between p-6 font-serif">
      
      {/* Header / Brand */}
      <div className="w-full max-w-6xl flex justify-between items-center py-4 border-b border-[#d4af37]/20">
        <div className="flex items-center gap-3">
          <span className="text-[#d4af37] text-lg font-bold">✦</span>
          <span className="text-xs uppercase tracking-[3px] text-[#d4af37] font-semibold">BIOFIN • Giardino Luminoso</span>
        </div>
        <div className="text-xs text-stone-400 font-sans">
          Diapositiva {currentIndex + 1} di {slides.length}
        </div>
      </div>

      {/* Slide Container (Aspect Ratio 16:9 fedele all'originale) */}
      <div className="w-full max-w-5xl aspect-video bg-[#0f1217] rounded-2xl border border-[#d4af37]/30 shadow-[0_25px_50px_rgba(0,0,0,0.8)] relative overflow-hidden flex flex-col justify-between p-12 my-auto">
        
        {/* Background ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(16,185,129,0.06)_0%,transparent_70%)] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-6">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#f3f0df]">
            {currentSlide.title}
          </h1>
          {currentSlide.subtitle && (
            <p className="text-lg md:text-xl text-[#9ca3af] italic font-light max-w-2xl">
              {currentSlide.subtitle}
            </p>
          )}
          {currentSlide.text && (
            <p className="text-base md:text-lg text-[#d1d5db] font-light font-sans max-w-3xl leading-relaxed whitespace-pre-line">
              {currentSlide.text}
            </p>
          )}
        </div>

        {/* Watermark / Footer fisso nella slide */}
        <div className="relative z-10 flex justify-between items-center text-xs tracking-[2px] text-[#d4af37] opacity-80 pt-4 border-t border-[#d4af37]/10">
          <span>LA STRADA CHE CONDUCE A CASA</span>
          <span>BIOFIN</span>
        </div>
      </div>

      {/* Controlli di Navigazione */}
      <div className="w-full max-w-6xl flex justify-between items-center py-4">
        <button 
          onClick={prevSlide}
          className="px-6 py-3 rounded-full bg-[#161a23] border border-[#d4af37]/30 hover:bg-[#202533] text-[#f3f0df] text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 text-[#d4af37]" /> Precedente
        </button>

        <div className="flex gap-1.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${currentIndex === idx ? 'bg-[#d4af37] w-6' : 'bg-stone-700 hover:bg-stone-500'}`}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="px-6 py-3 rounded-full bg-[#161a23] border border-[#d4af37]/30 hover:bg-[#202533] text-[#f3f0df] text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
        >
          Successiva <ChevronRight className="w-4 h-4 text-[#d4af37]" />
        </button>
      </div>

    </div>
  );
}
