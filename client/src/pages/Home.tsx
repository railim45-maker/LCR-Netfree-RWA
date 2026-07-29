import React, { useState } from 'react';
import { Sparkles, ArrowRight, ChevronRight } from 'lucide-react';

export default function Home() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

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
            <a href="#tappe" className="text-stone-600 hover:text-stone-900 transition-colors font-serif">Le Tappe della Via</a>
          </nav>
        </div>
      </header>

      {/* CONTENUTO PRINCIPALE (LA HOME ACCOGLIENTE CON COLLEGAMENTI ATTIVI) */}
      <main className="container max-w-4xl mx-auto px-6 space-y-20 relative z-10" id="tappe">
        
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
        </div>

        {/* LE TAPPE DEL PERCORSO CON COLLEGAMENTI INTERATTIVI */}
        <div className="space-y-8">
          
          {/* Tappa 1 */}
          <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-4 relative overflow-hidden transition-all hover:border-amber-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200/60 flex items-center justify-center font-bold text-sm font-serif shadow-sm">I</span>
                <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">Il Primo Passo: Mettere i Piedi a Terra</h3>
              </div>
              <button 
                onClick={() => setActiveStep(activeStep === 1 ? null : 1)}
                className="text-xs font-serif uppercase tracking-wider text-amber-800 hover:text-amber-950 inline-flex items-center gap-1 cursor-pointer"
              >
                {activeStep === 1 ? "Chiudi dettaglio" : "Approfondisci"} <ChevronRight className={`w-4 h-4 transition-transform ${activeStep === 1 ? 'rotate-90' : ''}`} />
              </button>
            </div>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light font-serif pl-14">
              Il primo blocco, quando si è stanchi, è la paura di non potersi permettere un cambiamento o di dover rischiare soldi che servono per la spesa. La strada non ti chiede alcun capitale iniziale. Grazie a un meccanismo basato sulla tokenizzazione e sul sostegno di chi ha creduto prima di te nel progetto — con la generosità di chi ha fatto un passo indietro sulle prime semestralità — il tuo ingresso nel sistema è protetto. Non parti con un esborso economico: parti in equilibrio.
            </p>
            {activeStep === 1 && (
              <div className="mt-4 p-6 rounded-2xl bg-amber-50/60 border border-amber-200/60 text-stone-700 text-sm font-serif space-y-2 animate-fadeIn pl-14">
                <p className="font-semibold text-amber-900">✦ Focus sulla Tappa I:</p>
                <p>Il patrimonio non viene venduto né svenduto: viene attivato tramite certificazione digitale e blockchain, generando nuova liquidità senza debito e rimettendo radici solide sotto i piedi.</p>
              </div>
            )}
          </div>

          {/* Tappa 2 */}
          <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-4 relative overflow-hidden transition-all hover:border-amber-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200/60 flex items-center justify-center font-bold text-sm font-serif shadow-sm">II</span>
                <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">Il Secondo Passo: Camminare Insieme (Il Net-Free)</h3>
              </div>
              <button 
                onClick={() => setActiveStep(activeStep === 2 ? null : 2)}
                className="text-xs font-serif uppercase tracking-wider text-amber-800 hover:text-amber-950 inline-flex items-center gap-1 cursor-pointer"
              >
                {activeStep === 2 ? "Chiudi dettaglio" : "Approfondisci"} <ChevronRight className={`w-4 h-4 transition-transform ${activeStep === 2 ? 'rotate-90' : ''}`} />
              </button>
            </div>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light font-serif pl-14">
              Una volta alleggerito il passo dalla pressione finanziaria, impariamo a muoverci in modo nuovo. Dimentica il mondo là fuori fatto di competizione e solitudine. Qui ti affidiamo un seme pulito. La regola è semplice e profondamente umana: ti prendi cura del tuo spazio e aiuti sei persone a fare lo stesso. È una catena di cura e di abbondanza condivisa, dove la forza di uno sostiene la crescita di tutti, slegando finalmente il guadagno dal tempo che vendi ogni giorno.
            </p>
            {activeStep === 2 && (
              <div className="mt-4 p-6 rounded-2xl bg-amber-50/60 border border-amber-200/60 text-stone-700 text-sm font-serif space-y-2 animate-fadeIn pl-14">
                <p className="font-semibold text-amber-900">✦ Focus sulla Tappa II (Il Dono e la Cura):</p>
                <p>Dal vecchio sistema piramidale basato su reclutamento e pressione al Sistema Net-Free: Comunità, Dono, Cura e Abbondanza circolare. Non vendi, ti prendi cura della tua cerchia.</p>
              </div>
            )}
          </div>

          {/* Tappa 3 */}
          <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-4 relative overflow-hidden transition-all hover:border-amber-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200/60 flex items-center justify-center font-bold text-sm font-serif shadow-sm">III</span>
                <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">Il Terzo Passo: Ritrovare il Tempio Biologico</h3>
              </div>
              <button 
                onClick={() => setActiveStep(activeStep === 3 ? null : 3)}
                className="text-xs font-serif uppercase tracking-wider text-amber-800 hover:text-amber-950 inline-flex items-center gap-1 cursor-pointer"
              >
                {activeStep === 3 ? "Chiudi dettaglio" : "Approfondisci"} <ChevronRight className={`w-4 h-4 transition-transform ${activeStep === 3 ? 'rotate-90' : ''}`} />
              </button>
            </div>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light font-serif pl-14">
              Quando l'economia smette di essere un assillo costante, l'energia torna a concentrarsi dove serve davvero: nel tuo corpo. La strada ti guida a riscoprire i gesti semplici e veri che restituiscono vitalità alla materia: un'acqua pura che disseta davvero, la terra che si rigenera attraverso i microrganismi e la sovranità energetica che alleggerisce la tua casa. Quando il corpo si ripulisce e ritrova il suo equilibrio naturale, la nebbia svanisce.
            </p>
            {activeStep === 3 && (
              <div className="mt-4 p-6 rounded-2xl bg-amber-50/60 border border-amber-200/60 text-stone-700 text-sm font-serif space-y-2 animate-fadeIn pl-14">
                <p className="font-semibold text-amber-900">✦ Focus sulla Tappa III (Dalla Tazzina all'Oceano):</p>
                <p>Se versi uno tsunami dentro una tazzina, la tazzina si rompe. Il Tempio Biologico deve espandersi gradualmente attraverso la consapevolezza e la sovranità energetica per sostenere l'abbondanza.</p>
              </div>
            )}
          </div>

          {/* Tappa 4 */}
          <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-stone-200/80 shadow-xl space-y-4 relative overflow-hidden transition-all hover:border-amber-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-900 border border-amber-200/60 flex items-center justify-center font-bold text-sm font-serif shadow-sm">IV</span>
                <h3 className="text-xl md:text-2xl font-bold font-serif text-stone-900">Il Quarto Passo: La Piena Sovranità (L'Accademia)</h3>
              </div>
              <button 
                onClick={() => setActiveStep(activeStep === 4 ? null : 4)}
                className="text-xs font-serif uppercase tracking-wider text-amber-800 hover:text-amber-950 inline-flex items-center gap-1 cursor-pointer"
              >
                {activeStep === 4 ? "Chiudi dettaglio" : "Approfondisci"} <ChevronRight className={`w-4 h-4 transition-transform ${activeStep === 4 ? 'rotate-90' : ''}`} />
              </button>
            </div>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light font-serif pl-14">
              Quando avrai ritrovato le tue forze, quando la tua vita avrà ripreso respiro e stabilità, allora sarai pronto per la tappa più profonda del risveglio: l'Accademia Uomo Naturale. È qui che impari a comprendere la finzione giuridica, a sciogliere le vecchie catene e a riprendere in mano la firma e la guida autentica della tua esistenza, con la consapevolezza di chi sa chi è veramente.
            </p>
            {activeStep === 4 && (
              <div className="mt-4 p-6 rounded-2xl bg-amber-50/60 border border-amber-200/60 text-stone-700 text-sm font-serif space-y-2 animate-fadeIn pl-14">
                <p className="font-semibold text-amber-900">✦ Focus sulla Tappa IV (Risveglio ed Equilibrio Assoluto):</p>
                <p>Libertà di Tempo, Finanziaria e Spirituale convergono nella Piena Sovranità. Il sistema del debito crolla e si apre l'era dell'abbondanza e del risveglio collettivo.</p>
              </div>
            )}
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
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-stone-900 hover:bg-stone-800 text-stone-50 font-medium px-9 py-4 rounded-full text-xs md:text-sm inline-flex items-center gap-2.5 shadow-lg transition-all transform hover:scale-105 cursor-pointer font-serif"
            >
              Torna all'Inizio della Via <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </main>

    </div>
  );
}
