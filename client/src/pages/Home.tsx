import React, { useState } from 'react';
import { Sparkles, ArrowRight, BookOpen, ChevronLeft, ChevronRight, X } from 'lucide-react';

const masterSlides = [
  { id: 1, title: "La Strada che Conduce a Casa", subtitle: "Dalla finzione del debito alla sovranità dell'Uomo Naturale" },
  { id: 2, title: "Corriamo ogni giorno per restare fermi.", text: "Inflazione, debito, tempo rubato. Il sistema attuale è progettato sull'illusione della scarsità. La fatica aumenta, ma la libertà si allontana. È il momento di fermarsi." },
  { id: 3, title: "La vera libertà non si compra. Si coltiva.", text: "Esiste una via d'uscita. Richiede un nuovo paradigma dove il valore reale sostituisce il debito, e la condivisione sostituisce la competizione." },
  { id: 4, title: "Tappa I: Piedi a terra.", text: "Per elevarsi, servono radici solide. Trasformiamo il valore potenziale in energia liquida, senza cedere proprietà, senza creare nuovo debito." },
  { id: 5, title: "Il patrimonio non viene venduto. Viene attivato.", text: "La tecnologia lavora per l'uomo. Attraverso la digitalizzazione del valore, liberiamo risorse inaccessibili per nutrire una nuova economia." },
  { id: 6, title: "Operare esclusivamente nella Luce.", text: "L'innovazione senza integrità è vuota. Scegliamo solo progetti e partner guidati da etica, trasparenza e utilità reale per l'essere umano." },
  { id: 7, title: "Tappa II: Il dono della Chiave Railim.", text: "Tutto inizia da un seme ricevuto in dono. Nessun rischio, nessuna pressione. Solo la responsabilità di coltivarlo e farlo prosperare." },
  { id: 8, title: "Dalla vendita alla cura del giardino.", text: "Non ti chiediamo di diventare un venditore. Ti chiediamo di prenderti cura della tua cerchia, accompagnando chi scegli nel percorso di crescita." },
  { id: 9, title: "L'Abbondanza Circolare.", text: "Quando il seme genera frutti, una parte torna al sistema per generare nuovi doni. La prosperità individuale nutre l'opportunità collettiva." },
  { id: 10, title: "Tappa III: Preparare il Contenitore.", text: "Se versi uno tsunami dentro una tazzina, la tazzina si rompe. La ricchezza improvvisa, senza consapevolezza, è un pericolo, non una salvezza." },
  { id: 11, title: "Dalla Tazzina all'Oceano.", text: "La vera crescita economica richiede una profonda evoluzione interiore. Il Tempio Biologico deve espandersi per gestire la propria sovranità energetica." },
  { id: 12, title: "Tappa IV: Il Risveglio dalla Finzione.", text: "Abbandoniamo le dipendenze artificiali e la finzione giuridica. Riscopriamo l'essenza di esseri umani liberi, creatori del proprio destino." },
  { id: 13, title: "L'Accademia Uomo Naturale.", text: "Il ritorno alla nostra natura originaria. Un percorso per riappropriarsi del proprio corpo, della propria mente e della propria energia vitale." },
  { id: 14, title: "L'Equilibrio Assoluto.", text: "Libertà di Tempo, Finanziaria e Spirituale. Quando il valore reale incontra la consapevolezza interiore, il sistema del debito crolla. Inizia l'era dell'abbondanza." },
  { id: 15, title: "Bentornati a Casa.", text: "\"Ogni grande foresta è iniziata da un singolo seme. La domanda non è quanto possa crescere. La domanda è: vuoi coltivarlo con noi?\"" }
];

export default function Home() {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const nextSlide = () => setCurrentSlideIndex((prev) => (prev + 1) % masterSlides.length);
  const prevSlide = () => setCurrentSlideIndex((prev) => (prev - 1 + masterSlides.length) % masterSlides.length);

  const activeSlide = masterSlides[currentSlideIndex];

  return (
    <div className="min-h-screen relative text-stone-800 space-y-24 pb-40 overflow-hidden bg-[#fcfbf9]">
      
      {/* SFONDO LUMINOSO E GRADIENTI ARMONICI */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-gradient-to-b from-amber-100/30 via-emerald-50/20 to-transparent blur-[150px] rounded-full pointer-events-none z-0" />

      {/* HEADER DI NAVIGAZIONE */}
      <header className="container max-w-5xl mx-auto px-6 pt-12 relative z-10">
        <div className="flex items-center justify-between px-6 py-4 rounded-full bg-white/90 border border-stone-200/60 shadow-[0_2px_20px_rgba(0,0,0,0.02)] backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center text-xs border border-amber-200/60 font-serif">✦</span>
            <span className="font-bold text-xs uppercase tracking-widest text-stone-600 font-serif">Il Giardino Luminoso • NetFree LCR</span>
          </div>
          <nav className="flex items-center gap-6 text-xs font-medium">
            <button 
              onClick={() => { setCurrentSlideIndex(0); setIsViewerOpen(true); }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900 text-stone-50 hover:bg-stone-800 transition-colors font-serif cursor-pointer shadow-sm"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-400" /> Sfoglia la Presentazione Master
            </button>
          </nav>
        </div>
      </header>

      {/* CONTENUTO PRINCIPALE (LA HOME PURA E ACCOGLIENTE) */}
      <main className="container max-w-4xl mx-auto px-6 space-y-20 relative z-10">
        
        {/* INTRODUZIONE: LA STRADA CHE CONDUCE A CASA */}
        <div className="text-center space-y-6 pt-6 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-50/70 border border-amber-200/70 text-amber-900 text-xs font-medium tracking-widest shadow-sm font-serif">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" /> La Via della Libertà e della Cura
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-stone-900 tracking-tight leading-[1.15]">
            La Strada che Conduce a Casa
          </h1>
          <p className="text-base md:text-lg text-stone-600 leading-relaxed font-light font-serif">
            Hai presente quella sensazione di camminare a tentoni, con la costante paura di sbagliare strada, mentre il peso delle bollette, del lavoro e delle preoccupazioni sembra schiacciarti ogni giorno di più? Ti hanno fatto credere che la vita sia una lotta solitaria e che non ci sia via d'uscita. <br /><br />
            <strong className="text-stone-900 font-medium">Non è così.</strong> Quella che hai trovato adesso non è una semplice sosta: è la strada. È la via d'uscita da un sistema che ti vuole esausto, e conduce esattamente là dove meriti di arrivare.
          </p>
          <div className="pt-2">
            <button 
              onClick={() => { setCurrentSlideIndex(0); setIsViewerOpen(true); }}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-900 hover:text-amber-950 font-serif font-semibold border-b border-amber-300 pb-0.5 cursor-pointer"
            >
              ✦ Apri la presentazione ufficiale per immergerti nelle tavole
            </button>
          </div>
        </div>

        {/* LE TAPPE DEL PERCORSO */}
        <div className="space-y-8">
          
          {/* Tappa 1 */}
          <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-4 relative overflow-hidden transition-all hover:border-amber-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200/60 flex items-center justify-center font-bold text-sm font-serif shadow-sm">I</span>
                <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">Il Primo Passo: Mettere i Piedi a Terra</h3>
              </div>
              <button 
                onClick={() => { setCurrentSlideIndex(3); setIsViewerOpen(true); }}
                className="text-xs font-serif uppercase tracking-wider text-amber-800 hover:text-amber-950 inline-flex items-center gap-1 cursor-pointer bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200"
              >
                Vedi Tavola Master <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light font-serif pl-14">
              Il primo blocco, quando si è stanchi, è la paura di non potersi permettere un cambiamento o di dover rischiare soldi che servono per la spesa. La strada non ti chiede alcun capitale iniziale. Grazie a un meccanismo basato sulla tokenizzazione e sul sostegno di chi ha creduto prima di te nel progetto — con la generosità di chi ha fatto un passo indietro sulle prime semestralità — il tuo ingresso nel sistema è protetto. Non parti con un esborso economico: parti in equilibrio.
            </p>
          </div>

          {/* Tappa 2 */}
          <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-4 relative overflow-hidden transition-all hover:border-amber-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200/60 flex items-center justify-center font-bold text-sm font-serif shadow-sm">II</span>
                <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">Il Secondo Passo: Camminare Insieme (Il Net-Free)</h3>
              </div>
              <button 
                onClick={() => { setCurrentSlideIndex(6); setIsViewerOpen(true); }}
                className="text-xs font-serif uppercase tracking-wider text-amber-800 hover:text-amber-950 inline-flex items-center gap-1 cursor-pointer bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200"
              >
                Vedi Tavola Master <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light font-serif pl-14">
              Una volta alleggerito il passo dalla pressione finanziaria, impariamo a muoverci in modo nuovo. Dimentica il mondo là fuori fatto di competizione e solitudine. Qui ti affidiamo un seme pulito. La regola è semplice e profondamente umana: ti prendi cura del tuo spazio e aiuti sei persone a fare lo stesso. È una catena di cura e di abbondanza condivisa, dove la forza di uno sostiene la crescita di tutti, slegando finalmente il guadagno dal tempo che vendi ogni giorno.
            </p>
          </div>

          {/* Tappa 3 */}
          <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-4 relative overflow-hidden transition-all hover:border-amber-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200/60 flex items-center justify-center font-bold text-sm font-serif shadow-sm">III</span>
                <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">Il Terzo Passo: Ritrovare il Tempio Biologico</h3>
              </div>
              <button 
                onClick={() => { setCurrentSlideIndex(9); setIsViewerOpen(true); }}
                className="text-xs font-serif uppercase tracking-wider text-amber-800 hover:text-amber-950 inline-flex items-center gap-1 cursor-pointer bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200"
              >
                Vedi Tavola Master <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light font-serif pl-14">
              Quando l'economia smette di essere un assillo costante, l'energia torna a concentrarsi dove serve davvero: nel tuo corpo. La strada ti guida a riscoprire i gesti semplici e veri che restituiscono vitalità alla materia: un'acqua pura che disseta davvero, la terra che si rigenera attraverso i microrganismi e la sovranità energetica che alleggerisce la tua casa. Quando il corpo si ripulisce e ritrova il suo equilibrio naturale, la nebbia svanisce.
            </p>
          </div>

          {/* Tappa 4 */}
          <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-4 relative overflow-hidden transition-all hover:border-amber-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200/60 flex items-center justify-center font-bold text-sm font-serif shadow-sm">IV</span>
                <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">Il Quarto Passo: La Piena Sovranità (L'Accademia)</h3>
              </div>
              <button 
                onClick={() => { setCurrentSlideIndex(11); setIsViewerOpen(true); }}
                className="text-xs font-serif uppercase tracking-wider text-amber-800 hover:text-amber-950 inline-flex items-center gap-1 cursor-pointer bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200"
              >
                Vedi Tavola Master <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light font-serif pl-14">
              Quando avrai ritrovato le tue forze, quando la tua vita avrà ripreso respiro e stabilità, allora sarai pronto per la tappa più profonda del risveglio: l'Accademia Uomo Naturale. È qui che impari a comprendere la finzione giuridica, a sciogliere le vecchie catene e a riprendere in mano la firma e la guida autentica della tua esistenza, con la consapevolezza di chi sa chi è veramente.
            </p>
          </div>

        </div>

        {/* CONCLUSIONE E CALL TO ACTION */}
        <div className="p-12 rounded-[2.5rem] border border-amber-200/80 bg-gradient-to-br from-amber-50/70 via-white to-emerald-50/40 space-y-6 text-center shadow-xl backdrop-blur-md">
          <h3 className="text-2xl font-bold font-serif text-stone-900">Sei pronto a fare il primo passo?</h3>
          <p className="text-base text-stone-600 max-w-xl mx-auto font-light leading-relaxed font-serif italic">
            "Non sei più solo a brancolare nel buio. C'è una mappa, c'è un metodo d'amore e ci sono persone pronte a camminare al tuo fianco."
          </p>
          <div className="pt-3">
            <button 
              onClick={() => { setCurrentSlideIndex(0); setIsViewerOpen(true); }}
              className="bg-stone-900 hover:bg-stone-800 text-stone-50 font-medium px-9 py-4 rounded-full text-xs md:text-sm inline-flex items-center gap-2.5 shadow-lg transition-all transform hover:scale-105 cursor-pointer font-serif"
            >
              <BookOpen className="w-4 h-4 text-amber-400" /> Sfoglia la Presentazione Master <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </main>

      {/* VISORE MODALE MASTER DELLA PRESENTAZIONE */}
      {isViewerOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8">
          <div className="bg-[#0f1217] border border-amber-500/30 w-full max-w-5xl h-[88vh] rounded-3xl shadow-2xl flex flex-col justify-between overflow-hidden relative p-8 md:p-12">
            
            {/* Header Modale */}
            <div className="flex justify-between items-center border-b border-[#d4af37]/20 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-amber-400 font-serif">✦</span>
                <span className="text-xs uppercase tracking-[3px] text-amber-400 font-serif font-semibold">BIOFIN • La Strada che Conduce a Casa</span>
              </div>
              <button 
                onClick={() => setIsViewerOpen(false)}
                className="text-stone-400 hover:text-white text-xs uppercase tracking-wider px-4 py-2 rounded-full bg-stone-800/80 transition-colors cursor-pointer inline-flex items-center gap-1"
              >
                Chiudi <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Contenuto della Diapositiva Master */}
            <div className="flex flex-col items-center justify-center text-center space-y-6 my-auto px-4">
              <span className="text-xs font-mono text-amber-400 tracking-widest uppercase bg-amber-500/10 px-4 py-1 rounded-full border border-amber-500/20">
                Diapositiva {currentSlideIndex + 1} di {masterSlides.length}
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#f3f0df] tracking-tight">
                {activeSlide.title}
              </h2>
              {activeSlide.subtitle && (
                <p className="text-lg md:text-xl text-stone-400 italic font-light max-w-2xl">
                  {activeSlide.subtitle}
                </p>
              )}
              {activeSlide.text && (
                <p className="text-base md:text-lg text-stone-300 font-light max-w-3xl leading-relaxed">
                  {activeSlide.text}
                </p>
              )}
            </div>

            {/* Controlli Inferiori */}
            <div className="flex justify-between items-center border-t border-[#d4af37]/20 pt-6">
              <button 
                onClick={prevSlide}
                className="px-5 py-2.5 rounded-full bg-[#161a23] border border-amber-500/30 hover:bg-[#202533] text-[#f3f0df] text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 text-amber-400" /> Precedente
              </button>

              <div className="hidden md:flex gap-1.5 overflow-x-auto max-w-md px-2">
                {masterSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all cursor-pointer ${currentSlideIndex === idx ? 'bg-amber-400 w-6' : 'bg-stone-700 hover:bg-stone-500'}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextSlide}
                className="px-5 py-2.5 rounded-full bg-[#161a23] border border-amber-500/30 hover:bg-[#202533] text-[#f3f0df] text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
              >
                Successiva <ChevronRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
